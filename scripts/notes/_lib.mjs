// Shared helper for writing the `note` (markdown knowledge-base) field into
// existing skill YAML files without touching any other field.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');

export function setNote(id, note) {
  const file = path.join(SKILLS_DIR, `${id}.yaml`);
  if (!fs.existsSync(file)) throw new Error(`Skill file not found: ${file}`);
  const existing = yaml.load(fs.readFileSync(file, 'utf8')) || {};
  existing.note = note.trim() + '\n';
  fs.writeFileSync(file, yaml.dump(existing, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
}
