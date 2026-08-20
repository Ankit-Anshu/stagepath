// data_analyst_roadmap_curriculum.md — Sections 02.6 Text Functions,
// 02.7 Date & Time, 02.8 Data Cleaning in Excel.
//
// Also relocates conditional-formatting-spreadsheets out of Data Cleaning
// into Data Analysis — the doc places "Conditional Formatting" under 2.10
// Excel Data Analysis, not 2.8 Data Cleaning. Zero content change, just a
// chapter-membership fix caught while rebuilding 2.8 properly.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ROADMAP_FILE = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const CHAPTERS_DIR = path.join(ROOT, 'content', 'chapters');

const TEXT_FUNCTIONS = [
  'upper-function', 'lower-function', 'proper-function', 'trim-function', 'clean-function',
  'left-function', 'right-function', 'mid-function', 'len-function', 'find-function',
  'search-function', 'concat-function', 'textjoin-function', 'replace-function',
  'substitute-function', 'text-function',
];

const DATE_AND_TIME = [
  'today-function', 'now-function', 'date-function', 'year-function', 'month-function',
  'day-function', 'weekday-function', 'weeknum-function', 'datedif-function',
  'edate-function', 'eomonth-function', 'working-days', 'date-differences',
];

const DATA_CLEANING = [
  'missing-values-spreadsheets', 'duplicate-data', 'remove-duplicates', 'find-and-replace',
  'text-to-columns', 'flash-fill', 'data-validation', 'error-handling-spreadsheets',
  'standardizing-values', 'cleaning-text-spreadsheets', 'cleaning-dates-spreadsheets',
  'cleaning-numbers-spreadsheets',
];

const DATA_ANALYSIS = [
  'sort-spreadsheets', 'filter-spreadsheets', 'excel-tables', 'conditional-formatting-spreadsheets',
  'spreadsheets-pivot-tables', 'pivot-charts', 'grouping-spreadsheets', 'slicers',
];

for (const id of [...TEXT_FUNCTIONS, ...DATE_AND_TIME, ...DATA_CLEANING, ...DATA_ANALYSIS]) {
  if (!fs.existsSync(path.join(SKILLS_DIR, `${id}.yaml`))) throw new Error(`Skill file missing for "${id}"`);
}

const write = (id, title, skills) =>
  fs.writeFileSync(path.join(CHAPTERS_DIR, `${id}.yaml`), yaml.dump({ title, skills }, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');

write('text-functions', 'Text Functions', TEXT_FUNCTIONS);
write('date-and-time', 'Date & Time', DATE_AND_TIME);
write('data-cleaning', 'Data Cleaning', DATA_CLEANING);
write('data-analysis', 'Data Analysis', DATA_ANALYSIS);

const roadmap = yaml.load(fs.readFileSync(ROADMAP_FILE, 'utf8'));
const stage = roadmap.stages.find((s) => s.id === 'spreadsheets');
if (!stage) throw new Error('spreadsheets stage not found');

stage.skills = stage.groups.flatMap((groupId) => {
  const chapter = yaml.load(fs.readFileSync(path.join(CHAPTERS_DIR, `${groupId}.yaml`), 'utf8'));
  return chapter.skills;
});

fs.writeFileSync(ROADMAP_FILE, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
console.log(`Text Functions: ${TEXT_FUNCTIONS.length}, Date & Time: ${DATE_AND_TIME.length}, Data Cleaning: ${DATA_CLEANING.length}, Data Analysis: ${DATA_ANALYSIS.length} (+conditional formatting).`);
console.log(`Spreadsheets stage now has ${stage.skills.length} total topics.`);
