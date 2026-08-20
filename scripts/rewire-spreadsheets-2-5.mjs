// data_analyst_roadmap_curriculum.md — Section 02.5 "Lookup & Reference".
// Reorders to the doc's exact bullet sequence (XLOOKUP first) and appends
// the 3 new topics: Exact Match, Approximate Match, Lookup Errors.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ROADMAP_FILE = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const CHAPTERS_DIR = path.join(ROOT, 'content', 'chapters');

const SKILLS = [
  'xlookup-function', 'vlookup-function', 'hlookup-function', 'index-function',
  'match-function', 'index-match-function', 'xmatch-function',
  'exact-match', 'approximate-match', 'lookup-errors',
];

for (const id of SKILLS) {
  if (!fs.existsSync(path.join(SKILLS_DIR, `${id}.yaml`))) throw new Error(`Skill file missing for "${id}"`);
}

fs.writeFileSync(path.join(CHAPTERS_DIR, 'lookup-and-reference.yaml'), yaml.dump({ title: 'Lookup & Reference', skills: SKILLS }, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');

const roadmap = yaml.load(fs.readFileSync(ROADMAP_FILE, 'utf8'));
const stage = roadmap.stages.find((s) => s.id === 'spreadsheets');
if (!stage) throw new Error('spreadsheets stage not found');

stage.skills = stage.groups.flatMap((groupId) => {
  const chapter = yaml.load(fs.readFileSync(path.join(CHAPTERS_DIR, `${groupId}.yaml`), 'utf8'));
  return chapter.skills;
});

fs.writeFileSync(ROADMAP_FILE, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
console.log(`Lookup & Reference now has ${SKILLS.length} topics. Spreadsheets stage now has ${stage.skills.length} total topics.`);
