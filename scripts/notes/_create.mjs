// Helper for writing brand-new skill YAML files (full metadata + note),
// as opposed to _lib.mjs's setNote() which only patches the `note` field
// of an existing skill file. Used by the topic.md learning-group expansion.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..', '..');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');

export function createSkill(id, data) {
  const payload = { ...data, note: data.note.trim() + '\n' };
  fs.writeFileSync(path.join(SKILLS_DIR, `${id}.yaml`), yaml.dump(payload, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
}
