// Fixes unescaped backticks inside `note: \`...\`,\n});` template-literal
// bodies in a scripts/notes/*.mjs file. Each note body is delimited by the
// literal opening "note: `" and the literal closing "`,\n});" — content
// itself never legitimately contains that exact closing sequence, so a
// non-greedy match finds the right boundaries. Every backtick strictly
// inside the captured body (inline code spans, triple-fences) gets escaped;
// the delimiters themselves are left alone.
import fs from 'node:fs';

const file = process.argv[2];
if (!file) throw new Error('Usage: node fix-backticks.mjs <path>');

const src = fs.readFileSync(file, 'utf8');
let count = 0;
const fixed = src.replace(/note: `([\s\S]*?)`,\n(\s*)\}\);/g, (match, body, indent) => {
  count++;
  // Normalize first (strip any existing backslash-escaping, however many
  // backslashes deep) so this is idempotent/safe to re-run, then escape
  // every backtick exactly once.
  const normalized = body.replace(/\\+`/g, '`');
  const escaped = normalized.replace(/`/g, '\\`');
  return `note: \`${escaped}\`,\n${indent}});`;
});

fs.writeFileSync(file, fixed, 'utf8');
console.log(`Escaped backticks inside ${count} note bodies in ${file}.`);
