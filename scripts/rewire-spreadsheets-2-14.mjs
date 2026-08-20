// data_analyst_roadmap_curriculum.md — Section 02.14 "Advanced Excel".
// A brand-new chapter, inserted after Power Query and before the final
// Excel Projects chapter.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ROADMAP_FILE = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const CHAPTERS_DIR = path.join(ROOT, 'content', 'chapters');

const ADVANCED_EXCEL = [
  'dynamic-arrays', 'filter-function', 'sort-function', 'unique-function', 'let-function',
  'advanced-lookup', 'named-ranges', 'power-pivot', 'data-model', 'basic-dax',
  'excel-automation-concepts',
];

for (const id of ADVANCED_EXCEL) {
  if (!fs.existsSync(path.join(SKILLS_DIR, `${id}.yaml`))) throw new Error(`Skill file missing for "${id}"`);
}

fs.writeFileSync(path.join(CHAPTERS_DIR, 'advanced-excel.yaml'), yaml.dump({ title: 'Advanced Excel', skills: ADVANCED_EXCEL }, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');

const roadmap = yaml.load(fs.readFileSync(ROADMAP_FILE, 'utf8'));
const stage = roadmap.stages.find((s) => s.id === 'spreadsheets');
if (!stage) throw new Error('spreadsheets stage not found');

stage.groups = [...stage.groups, 'advanced-excel'];

const allChapterSkills = stage.groups.flatMap((groupId) => {
  const chapter = yaml.load(fs.readFileSync(path.join(CHAPTERS_DIR, `${groupId}.yaml`), 'utf8'));
  return chapter.skills;
});
stage.skills = [...new Set(allChapterSkills)];

fs.writeFileSync(ROADMAP_FILE, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
console.log('Groups:', stage.groups.join(', '));
console.log(`Spreadsheets stage now has ${stage.skills.length} unique topics.`);
