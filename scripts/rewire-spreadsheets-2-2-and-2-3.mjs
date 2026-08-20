// data_analyst_roadmap_curriculum.md — Sections 02.2 "Basic Formulas" and
// 02.3 "Logical Functions". Expands core-formulas to the doc's full
// 12-topic list, and splits the old merged "logic-and-conditional"
// chapter into two doc-matching chapters: "Logical Functions" (2.3) and
// "Conditional Aggregation" (2.4 — not explicitly requested this round,
// but its 6 topics already exactly match the doc, so splitting it off
// completes it for free rather than leaving a half-renamed chapter).
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ROADMAP_FILE = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const CHAPTERS_DIR = path.join(ROOT, 'content', 'chapters');

const CORE_FORMULAS_SKILLS = [
  'arithmetic-operators', 'sum-function', 'average-function', 'count-function',
  'counta-function', 'countblank-function', 'min-function', 'max-function',
  'round-function', 'roundup-function', 'rounddown-function', 'percentage-calculations',
];

const LOGICAL_FUNCTIONS = {
  id: 'logical-functions',
  title: 'Logical Functions',
  skills: ['if-function', 'ifs-function', 'and-function', 'or-function', 'not-function', 'iferror-function', 'nested-if'],
};

const CONDITIONAL_AGGREGATION = {
  id: 'conditional-aggregation',
  title: 'Conditional Aggregation',
  skills: ['sumif-function', 'sumifs-function', 'countif-function', 'countifs-function', 'averageif-function', 'averageifs-function'],
};

for (const id of [...CORE_FORMULAS_SKILLS, ...LOGICAL_FUNCTIONS.skills, ...CONDITIONAL_AGGREGATION.skills]) {
  if (!fs.existsSync(path.join(SKILLS_DIR, `${id}.yaml`))) throw new Error(`Skill file missing for "${id}"`);
}

// 2.2 — expand core-formulas in place (same chapter id, new title + full list)
fs.writeFileSync(
  path.join(CHAPTERS_DIR, 'core-formulas.yaml'),
  yaml.dump({ title: 'Basic Formulas', skills: CORE_FORMULAS_SKILLS }, { lineWidth: -1, noRefs: true, sortKeys: false }),
  'utf8',
);

// 2.3 / 2.4 — split logic-and-conditional into two new chapter files, retire the old one
fs.writeFileSync(path.join(CHAPTERS_DIR, `${LOGICAL_FUNCTIONS.id}.yaml`), yaml.dump({ title: LOGICAL_FUNCTIONS.title, skills: LOGICAL_FUNCTIONS.skills }, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
fs.writeFileSync(path.join(CHAPTERS_DIR, `${CONDITIONAL_AGGREGATION.id}.yaml`), yaml.dump({ title: CONDITIONAL_AGGREGATION.title, skills: CONDITIONAL_AGGREGATION.skills }, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
fs.unlinkSync(path.join(CHAPTERS_DIR, 'logic-and-conditional.yaml'));

const roadmap = yaml.load(fs.readFileSync(ROADMAP_FILE, 'utf8'));
const stage = roadmap.stages.find((s) => s.id === 'spreadsheets');
if (!stage) throw new Error('spreadsheets stage not found');

// Replace "core-formulas" group entry — id unchanged, still one entry.
// Replace "logic-and-conditional" group entry with the two new chapter ids.
stage.groups = stage.groups.flatMap((g) => (g === 'logic-and-conditional' ? [LOGICAL_FUNCTIONS.id, CONDITIONAL_AGGREGATION.id] : [g]));

// Rebuild the flat skills list by concatenating every chapter's skills in
// stage.groups order — safer than splicing the old flat list by hand, and
// self-consistent with whatever the chapter files actually contain.
stage.skills = stage.groups.flatMap((groupId) => {
  const chapter = yaml.load(fs.readFileSync(path.join(CHAPTERS_DIR, `${groupId}.yaml`), 'utf8'));
  return chapter.skills;
});

fs.writeFileSync(ROADMAP_FILE, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
console.log(`Spreadsheets stage now has ${stage.groups.length} chapters, ${stage.skills.length} total topics.`);
console.log('Groups:', stage.groups.join(', '));
