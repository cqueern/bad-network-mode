import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import { minify } from 'html-minifier-terser';

const source = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const output = await minify(source, {
  collapseWhitespace: true,
  // Preserve spaces around inline links and other inline elements.
  conservativeCollapse: true,
  removeComments: true,
  // Level 0 removes CSS whitespace without rewriting rules or values.
  minifyCSS: { level: 0 },
  removeOptionalTags: false,
  removeAttributeQuotes: false,
});

const destination = new URL('../dist/', import.meta.url);
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
await writeFile(new URL('index.html', destination), output);

console.log(`HTML: ${Buffer.byteLength(source)} -> ${Buffer.byteLength(output)} bytes`);
console.log(`Gzip estimate: ${gzipSync(source).length} -> ${gzipSync(output).length} bytes`);
