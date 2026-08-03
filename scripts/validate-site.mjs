#!/usr/bin/env node
/**
 * validate-site.mjs — Verafye rendered-HTML site validator
 *
 * Inspects generated HTML in out/ after `npm run build:prod`.
 * Run with: node scripts/validate-site.mjs
 *
 * Required: npm run build:prod must have been run first.
 *
 * Checks:
 *  [1]  H1 count — exactly 1 per indexable page, 0 on redirect pages
 *  [2]  Canonical tag present on every page
 *  [3]  Meta description non-empty on every indexable page
 *  [4]  No "| Verafye | Verafye" title doubling
 *  [5]  No double spaces in <title>
 *  [6]  Restricted positioning phrases absent from rendered HTML
 *  [7]  No approved-claims violations (Illustrative Benchmark, etc.)
 *  [8]  JSON-LD present and valid on indexable pages
 *  [9]  Redirect fallback pages are noindex
 *  [10] Redirect fallback pages NOT in sitemap
 *  [11] Sitemap URLs resolve to existing HTML files in out/
 *  [12] Internal href links resolve to out/ pages or public assets
 *  [13] Local asset src/href references exist in out/ or public/
 *  [14] No exposed archived PDF assets at predictable paths
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'out');
const PUBLIC_DIR = join(ROOT, 'public');

// ── Helpers ──────────────────────────────────────────────────────────────────

let errors = 0;
let warnings = 0;

function fail(msg) { console.error(`  FAIL  ${msg}`); errors++; }
function warn(msg)  { console.warn( `  WARN  ${msg}`); warnings++; }
function ok(label)  { console.log(  `  OK    ${label}`); }

function routeLabel(htmlPath) {
  // Convert /path/to/out/foo/bar/index.html → /foo/bar/
  const rel = htmlPath.replace(OUT_DIR, '').replace(/index\.html$/, '').replace(/\\/g, '/');
  return rel || '/';
}

function collectHtmlFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) collectHtmlFiles(full, files);
    else if (entry.endsWith('.html')) files.push(full);
  }
  return files;
}

function extractTagContent(html, tag) {
  // Returns array of content strings for a given tag name
  const pat = new RegExp(`<${tag}(?:[^>]*)>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  const results = [];
  let m;
  while ((m = pat.exec(html)) !== null) results.push(m[1]);
  return results;
}

function extractMeta(html, nameOrProp) {
  // <meta name="..." content="..."> or <meta property="..." content="...">
  const pat = new RegExp(
    `<meta[^>]*(?:name|property)="${nameOrProp.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*content="([^"]*)"[^>]*>`,
    'gi'
  );
  const m = pat.exec(html);
  return m ? m[1] : null;
}

function extractJsonLd(html) {
  // Returns array of raw JSON strings from application/ld+json scripts
  const pat = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  const results = [];
  let m;
  while ((m = pat.exec(html)) !== null) results.push(m[1].trim());
  return results;
}

function extractLinks(html) {
  // Extract href values from <a> tags
  const pat = /href="([^"#?]+)(?:[#?][^"]*)?"[^>]*>/gi;
  const results = [];
  let m;
  while ((m = pat.exec(html)) !== null) results.push(m[1]);
  return results;
}

function extractAssetRefs(html) {
  // Extract local src and href references (images, scripts, CSS, PDFs)
  const srcs = [];
  const srcPat = /\bsrc="(\/_next\/[^"]+|\/[^_next][^"]*\.(png|jpg|jpeg|webp|svg|gif|pdf|ico|woff2?|ttf|mp4))"/gi;
  const hrefPat = /\bhref="(\/[^"]*\.(css|pdf|png|jpg|jpeg|webp|svg|xml|txt))"/gi;
  let m;
  while ((m = srcPat.exec(html)) !== null) srcs.push(m[1]);
  while ((m = hrefPat.exec(html)) !== null) srcs.push(m[1]);
  return srcs;
}

// ── Sanity: check out/ exists ─────────────────────────────────────────────────
if (!existsSync(OUT_DIR)) {
  console.error('\n  FAIL  out/ directory not found.');
  console.error('        Run `npm run build:prod` before running this validator.');
  process.exit(1);
}

const htmlFiles = collectHtmlFiles(OUT_DIR);
if (htmlFiles.length === 0) {
  console.error('\n  FAIL  No HTML files found in out/. Run `npm run build:prod` first.');
  process.exit(1);
}

console.log(`\nValidating ${htmlFiles.length} HTML files in out/\n`);

// ── Route classification ──────────────────────────────────────────────────────
// Redirect fallback pages (not indexable, no H1 required, must be noindex)
const REDIRECT_ROUTES = new Set([
  '/industries/ecommerce-retail/',
  '/risk-shadowing-review/request/',
]);

// Routes excluded from H1 and description checks
const NON_INDEXABLE_ROUTES = new Set([
  ...REDIRECT_ROUTES,
  '/404/',
  '/_not-found/',
  '/in/',  // short link redirector
]);

// ── [1] H1 Count ─────────────────────────────────────────────────────────────
console.log('[1] H1 count check (exactly 1 per indexable page)');
let h1Errors = 0;
for (const file of htmlFiles) {
  const route = routeLabel(file);
  const html = readFileSync(file, 'utf8');
  const h1s = extractTagContent(html, 'h1');
  const isNonIndexable = NON_INDEXABLE_ROUTES.has(route) || [...NON_INDEXABLE_ROUTES].some(r => route.startsWith(r));

  if (isNonIndexable) {
    if (h1s.length > 0) {
      warn(`[1] H1 on non-indexable page ${route} (${h1s.length} found)`);
    }
  } else {
    if (h1s.length === 0) {
      fail(`[1] No H1 on indexable page ${route}`);
      h1Errors++;
    } else if (h1s.length > 1) {
      fail(`[1] ${h1s.length} H1s on page ${route} (must be exactly 1)`);
      h1Errors++;
    }
  }
}
if (h1Errors === 0) ok('[1] H1 count correct on all pages');

// ── [2] Canonical present ─────────────────────────────────────────────────────
// Skips: redirect pages, non-indexable routes, and Next.js error pages (404.html,
// /_not-found/, /404/) which do not receive canonical tags from the static export.
console.log('\n[2] Canonical tag check');
const ERROR_PAGE_ROUTES = new Set(['/404/', '/_not-found/']);
let canonicalErrors = 0;
for (const file of htmlFiles) {
  const route = routeLabel(file);
  // Skip non-indexable routes and error pages (no canonical expected)
  if (NON_INDEXABLE_ROUTES.has(route) || [...NON_INDEXABLE_ROUTES].some(r => route.startsWith(r))) continue;
  if (ERROR_PAGE_ROUTES.has(route)) continue;
  // Skip the flat 404.html at the out/ root (Next.js error page)
  if (file.endsWith('404.html') && !file.includes('/404/index.html')) continue;
  const html = readFileSync(file, 'utf8');
  const canonicals = html.match(/<link[^>]*rel="canonical"[^>]*>/gi) || [];
  if (canonicals.length === 0) {
    fail(`[2] No canonical on ${route}`);
    canonicalErrors++;
  } else if (canonicals.length > 1) {
    fail(`[2] Multiple canonical tags on ${route}`);
    canonicalErrors++;
  }
}
if (canonicalErrors === 0) ok('[2] Canonical present on all indexable pages');

// ── [3] Meta description non-empty ───────────────────────────────────────────
console.log('\n[3] Meta description check');
let descErrors = 0;
for (const file of htmlFiles) {
  const route = routeLabel(file);
  if (NON_INDEXABLE_ROUTES.has(route) || [...NON_INDEXABLE_ROUTES].some(r => route.startsWith(r))) continue;
  const html = readFileSync(file, 'utf8');
  const desc = extractMeta(html, 'description');
  if (!desc || desc.trim() === '') {
    fail(`[3] Empty or missing meta description on ${route}`);
    descErrors++;
  }
}
if (descErrors === 0) ok('[3] Meta descriptions present and non-empty on all indexable pages');

// ── [4] Title doubling ────────────────────────────────────────────────────────
console.log('\n[4] Title branding check');
let titleErrors = 0;
for (const file of htmlFiles) {
  const route = routeLabel(file);
  const html = readFileSync(file, 'utf8');
  const titles = extractTagContent(html, 'title');
  for (const t of titles) {
    if (/\| Verafye \| Verafye/i.test(t)) {
      fail(`[4] Doubled branding in title on ${route}: "${t.trim()}"`);
      titleErrors++;
    }
  }
}
if (titleErrors === 0) ok('[4] No doubled title branding found');

// ── [5] Double spaces in title ────────────────────────────────────────────────
console.log('\n[5] Title double-space check');
let spaceErrors = 0;
for (const file of htmlFiles) {
  const route = routeLabel(file);
  const html = readFileSync(file, 'utf8');
  const titles = extractTagContent(html, 'title');
  for (const t of titles) {
    if (/  /.test(t)) {
      fail(`[5] Double space in title on ${route}: "${t.trim()}"`);
      spaceErrors++;
    }
  }
}
if (spaceErrors === 0) ok('[5] No double spaces in titles');

// ── [6] Restricted positioning phrases ───────────────────────────────────────
console.log('\n[6] Restricted phrase check (rendered HTML)');
const RESTRICTED_PHRASES = [
  'investigation layer',
  'investigation intelligence layer',
  'intelligent investigation layer',
  'independent layer',
  'sits above',
  'sits on top',
  'run alongside',
  'permanent add-on',
  'Missing Layer',
  'The Missing Layer',
];
let phraseErrors = 0;
for (const file of htmlFiles) {
  const route = routeLabel(file);
  const html = readFileSync(file, 'utf8');
  // Decode HTML entities for text comparison
  const text = html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
  for (const phrase of RESTRICTED_PHRASES) {
    const pat = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    if (pat.test(text)) {
      // Allow "orchestration layer" only in negative context
      const idx = text.search(pat);
      const ctx = text.slice(Math.max(0, idx - 80), idx + 80);
      if (/not a|not an|unlike|replace|rather than/i.test(ctx)) continue;
      fail(`[6] Restricted phrase "${phrase}" in rendered HTML at ${route}`);
      phraseErrors++;
    }
  }
}
if (phraseErrors === 0) ok('[6] No restricted phrases in rendered HTML');

// ── [7] Claims integrity check ────────────────────────────────────────────────
console.log('\n[7] Claims integrity check (rendered HTML)');
const BANNED_CLAIMS = [
  'Illustrative Benchmark',
  'Illustrative benchmark',
  'Actual result to be confirmed',
  'Actual results depend on',
  'Indicative figure based on industry benchmarks',
  'Target reduction in investigation',
  'Verified Result',
  'Results from live customer deployments',
  'live cross-border payments client',
];
let claimErrors = 0;
for (const file of htmlFiles) {
  const route = routeLabel(file);
  const html = readFileSync(file, 'utf8');
  const text = html.replace(/&#x27;/g, "'").replace(/&amp;/g, '&');
  for (const claim of BANNED_CLAIMS) {
    if (text.toLowerCase().includes(claim.toLowerCase())) {
      fail(`[7] Banned claims wording "${claim}" in rendered HTML at ${route}`);
      claimErrors++;
    }
  }
}
if (claimErrors === 0) ok('[7] No banned claims wording in rendered HTML');

// ── [8] JSON-LD present and valid ─────────────────────────────────────────────
console.log('\n[8] JSON-LD check');
let jsonldErrors = 0;
for (const file of htmlFiles) {
  const route = routeLabel(file);
  if (NON_INDEXABLE_ROUTES.has(route) || [...NON_INDEXABLE_ROUTES].some(r => route.startsWith(r))) continue;
  const html = readFileSync(file, 'utf8');
  const blocks = extractJsonLd(html);
  if (blocks.length === 0) {
    warn(`[8] No JSON-LD on ${route}`);
    continue;
  }
  for (const block of blocks) {
    try {
      JSON.parse(block);
    } catch (e) {
      fail(`[8] Invalid JSON-LD on ${route}: ${e.message}`);
      jsonldErrors++;
    }
  }
}
if (jsonldErrors === 0) ok('[8] JSON-LD present and valid on checked pages');

// ── [9] Redirect pages are noindex ────────────────────────────────────────────
console.log('\n[9] Redirect noindex check');
let noindexErrors = 0;
for (const route of REDIRECT_ROUTES) {
  const htmlPath = join(OUT_DIR, route.replace(/^\//, ''), 'index.html');
  if (!existsSync(htmlPath)) {
    warn(`[9] Redirect fallback page not found in out/: ${route}`);
    continue;
  }
  const html = readFileSync(htmlPath, 'utf8');
  const robotsMeta = extractMeta(html, 'robots') || '';
  if (!robotsMeta.includes('noindex')) {
    fail(`[9] Redirect page ${route} is missing noindex in robots meta`);
    noindexErrors++;
  } else {
    ok(`[9] noindex confirmed: ${route}`);
  }
}
if (noindexErrors === 0 && REDIRECT_ROUTES.size > 0) {
  // Individual ok() calls above; silence here
}

// ── [10] Redirect routes absent from sitemap ──────────────────────────────────
console.log('\n[10] Redirect routes excluded from sitemap');
const sitemapPath = join(PUBLIC_DIR, 'sitemap.xml');
let sitemapContent = '';
if (existsSync(sitemapPath)) {
  sitemapContent = readFileSync(sitemapPath, 'utf8');
}
let sitemapRedirectErrors = 0;
for (const route of REDIRECT_ROUTES) {
  if (sitemapContent.includes(route)) {
    fail(`[10] Redirect route ${route} found in sitemap — should be excluded`);
    sitemapRedirectErrors++;
  }
}
if (sitemapRedirectErrors === 0) ok('[10] Redirect routes correctly absent from sitemap');

// ── [11] Sitemap URLs resolve ─────────────────────────────────────────────────
console.log('\n[11] Sitemap URL resolution check');
if (!existsSync(sitemapPath)) {
  fail('[11] public/sitemap.xml not found');
} else {
  const sitemapUrls = [...sitemapContent.matchAll(/<loc>https:\/\/www\.verafye\.com([^<]*)<\/loc>/g)]
    .map(m => m[1] || '/');
  let missing = 0;
  for (const url of sitemapUrls) {
    const normalized = url.endsWith('/') ? url : url + '/';
    const htmlPath = join(OUT_DIR, normalized.replace(/^\//, ''), 'index.html');
    if (!existsSync(htmlPath)) {
      fail(`[11] Sitemap URL not found in out/: ${url}`);
      missing++;
    }
  }
  if (missing === 0) ok(`[11] All ${sitemapUrls.length} sitemap URLs resolve in out/`);
}

// ── [12] Internal link integrity ──────────────────────────────────────────────
console.log('\n[12] Internal link integrity check');
// Collect all routes from out/ HTML files
const outRoutes = new Set(htmlFiles.map(f => routeLabel(f)));
let linkErrors = 0;
const checkedLinks = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const links = extractLinks(html);
  for (const href of links) {
    if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/_next/')) continue;
    const normalized = href.endsWith('/') ? href : href + '/';
    if (checkedLinks.has(normalized)) continue;
    checkedLinks.add(normalized);
    // Check if it's a known route in out/ or a public asset
    const isRoute = outRoutes.has(normalized) || outRoutes.has(href);
    const isPublicAsset = existsSync(join(PUBLIC_DIR, href));
    const isOutAsset = existsSync(join(OUT_DIR, href.replace(/^\//, '')));
    if (!isRoute && !isPublicAsset && !isOutAsset) {
      // Skip anchor-only, mailto, tel, external
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
      // Skip known Next.js static file paths
      if (href.includes('_next')) continue;
      fail(`[12] Broken internal link "${href}" found in rendered HTML`);
      linkErrors++;
    }
  }
}
if (linkErrors === 0) ok('[12] No broken internal links in rendered HTML');

// ── [13] Local asset references exist ────────────────────────────────────────
console.log('\n[13] Local asset reference check');
let assetErrors = 0;
const checkedAssets = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const refs = extractAssetRefs(html);
  for (const ref of refs) {
    if (checkedAssets.has(ref)) continue;
    checkedAssets.add(ref);
    if (ref.startsWith('/_next/')) {
      const assetPath = join(OUT_DIR, ref.replace(/^\//, ''));
      if (!existsSync(assetPath)) {
        warn(`[13] Next.js asset not found in out/: ${ref}`);
      }
      continue;
    }
    const publicPath = join(PUBLIC_DIR, ref);
    const outPath = join(OUT_DIR, ref.replace(/^\//, ''));
    if (!existsSync(publicPath) && !existsSync(outPath)) {
      fail(`[13] Missing local asset "${ref}" (not found in public/ or out/)`);
      assetErrors++;
    }
  }
}
if (assetErrors === 0) ok('[13] All local asset references resolve');

// ── [14] No exposed archived PDFs ─────────────────────────────────────────────
console.log('\n[14] Archived PDF exposure check');
const ARCHIVED_PDFS = [
  '/downloads/_archived/missing-layer-modern-financial-crime-investigations.pdf',
  '/downloads/_archived/fraud-aml-investigations-payment-platforms.pdf',
  '/downloads/_archived/mule-account-investigations-connected-signals.pdf',
];
let archivedErrors = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const pdfPath of ARCHIVED_PDFS) {
    if (html.includes(pdfPath)) {
      const route = routeLabel(file);
      fail(`[14] Archived PDF "${pdfPath}" linked from ${route}`);
      archivedErrors++;
    }
  }
}
if (archivedErrors === 0) ok('[14] No archived PDFs exposed in rendered HTML');

// ── Summary ───────────────────────────────────────────────────────────────────
console.log('\n' + '─'.repeat(60));
console.log(`Checked: ${htmlFiles.length} HTML files`);
if (errors === 0 && warnings === 0) {
  console.log(`✓ All checks passed.`);
  process.exit(0);
} else if (errors === 0) {
  console.log(`✓ Passed with ${warnings} warning(s). Review warnings before release.`);
  process.exit(0);
} else {
  console.log(`✗ ${errors} error(s), ${warnings} warning(s). Fix errors before release.`);
  process.exit(1);
}
