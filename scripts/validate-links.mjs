#!/usr/bin/env node
/**
 * validate-links.mjs
 * Scans all JSX/JS files in app/ for internal href values and checks each
 * maps to an existing route (page.js file) or public asset.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const APP_DIR = join(ROOT, 'app');
const PUBLIC_DIR = join(ROOT, 'public');

function getRoutes(dir, prefix = '') {
  const routes = new Set();
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory() && !entry.startsWith('(') && !entry.startsWith('_') && entry !== 'api') {
      const routePath = prefix + '/' + entry;
      routes.add(routePath);
      routes.add(routePath + '/');
      getRoutes(full, routePath).forEach(r => routes.add(r));
    }
  }
  return routes;
}

const routes = getRoutes(APP_DIR);
routes.add('/');

function collectFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) collectFiles(full, files);
    else if (entry.endsWith('.js') || entry.endsWith('.jsx')) files.push(full);
  }
  return files;
}

const files = collectFiles(APP_DIR);
const broken = [];
const hrefPattern = /href="(\/[^"#?]*)(?:[#?][^"]*)?"(?!\s*\+)/g;

for (const file of files) {
  const content = readFileSync(file, 'utf8');
  let m;
  while ((m = hrefPattern.exec(content)) !== null) {
    const href = m[1];
    if (href.startsWith('//')) continue;
    const routeOk = routes.has(href) || routes.has(href + '/') || routes.has(href.replace(/\/$/, ''));
    const publicOk = existsSync(join(PUBLIC_DIR, href));
    if (!routeOk && !publicOk) {
      const rel = file.replace(ROOT + '/', '');
      const lines = content.slice(0, m.index).split('\n');
      broken.push({ file: rel, line: lines.length, href });
    }
  }
}

if (broken.length === 0) {
  console.log('OK  No broken internal links found.');
  process.exit(0);
} else {
  console.error(`FAIL  ${broken.length} broken internal link(s):`);
  for (const b of broken) {
    console.error(`  ${b.file}:${b.line}  ${b.href}`);
  }
  process.exit(1);
}
