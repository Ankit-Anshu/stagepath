// data_analyst_roadmap_curriculum.md — Section 02.1 "Spreadsheet
// Fundamentals". Replaces the "fundamentals" chapter's 7-topic list with
// the doc's full 15-topic list (workbook-worksheet, rows-columns-cells,
// and relative-absolute-references split into their doc-specified pieces;
// excel-interface/ranges/number-formats/basic-formatting added new).
// intro-to-spreadsheets is kept as a bonus lead-in topic (not in the doc,
// but valuable existing content, same rationale as keeping
// business-thinking in the Foundations stage).
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ROADMAP_FILE = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const CHAPTERS_DIR = path.join(ROOT, 'content', 'chapters');

const NEW_SKILLS = [
  'intro-to-spreadsheets', 'excel-interface', 'workbook', 'worksheet',
  'rows', 'columns', 'cells', 'ranges', 'cell-references',
  'relative-references', 'absolute-references', 'mixed-references',
  'spreadsheet-data-types', 'number-formats', 'basic-formatting', 'spreadsheet-tables',
];

for (const id of NEW_SKILLS) {
  if (!fs.existsSync(path.join(SKILLS_DIR, `${id}.yaml`))) throw new Error(`Skill file missing for "${id}"`);
}

const chapterFile = path.join(CHAPTERS_DIR, 'fundamentals.yaml');
const oldChapter = yaml.load(fs.readFileSync(chapterFile, 'utf8'));
fs.writeFileSync(chapterFile, yaml.dump({ title: oldChapter.title, skills: NEW_SKILLS }, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');

const roadmap = yaml.load(fs.readFileSync(ROADMAP_FILE, 'utf8'));
const stage = roadmap.stages.find((s) => s.id === 'spreadsheets');
if (!stage) throw new Error('spreadsheets stage not found');

const oldFundamentalsSkills = new Set(['intro-to-spreadsheets', 'workbook-worksheet', 'rows-columns-cells', 'cell-references', 'relative-absolute-references', 'spreadsheet-data-types', 'spreadsheet-tables']);
const rest = stage.skills.filter((id) => !oldFundamentalsSkills.has(id));
stage.skills = [...NEW_SKILLS, ...rest];

fs.writeFileSync(ROADMAP_FILE, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
console.log(`Fundamentals chapter now has ${NEW_SKILLS.length} topics. Spreadsheets stage now has ${stage.skills.length} total topics.`);
