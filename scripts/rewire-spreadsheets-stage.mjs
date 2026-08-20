// Replaces the Spreadsheets stage's flat `skills` list and `groups` with
// the full topic.md structure: 10 learning groups covering 82 total topics
// (Fundamentals is new; Core Formulas/Logic/Lookup/Text/Date&Time/Data
// Cleaning/Data Analysis/Visualization/Power Query are all expanded to
// their complete granular lists). Every skill file referenced here must
// already exist on disk — verified by a safety check before writing.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const file = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const roadmap = yaml.load(fs.readFileSync(file, 'utf8'));

const GROUPS = [
  {
    id: 'fundamentals', title: 'Fundamentals',
    skills: ['intro-to-spreadsheets', 'workbook-worksheet', 'rows-columns-cells', 'cell-references', 'relative-absolute-references', 'spreadsheet-data-types', 'spreadsheet-tables'],
  },
  {
    id: 'core-formulas', title: 'Core Formulas',
    skills: ['sum-function', 'average-function', 'count-function', 'counta-function', 'min-function', 'max-function', 'round-function'],
  },
  {
    id: 'logic-and-conditional', title: 'Logic & Conditional',
    skills: ['if-function', 'ifs-function', 'and-function', 'or-function', 'iferror-function', 'sumif-function', 'sumifs-function', 'countif-function', 'countifs-function', 'averageif-function', 'averageifs-function'],
  },
  {
    id: 'lookup-and-reference', title: 'Lookup & Reference',
    skills: ['vlookup-function', 'hlookup-function', 'index-function', 'match-function', 'index-match-function', 'xlookup-function', 'xmatch-function'],
  },
  {
    id: 'text-functions', title: 'Text Functions',
    skills: ['upper-function', 'lower-function', 'proper-function', 'trim-function', 'clean-function', 'left-function', 'right-function', 'mid-function', 'len-function', 'find-function', 'search-function', 'concat-function', 'textjoin-function', 'replace-function', 'substitute-function'],
  },
  {
    id: 'date-and-time', title: 'Date & Time',
    skills: ['today-function', 'now-function', 'date-function', 'year-function', 'month-function', 'day-function', 'datedif-function', 'eomonth-function', 'working-days'],
  },
  {
    id: 'data-cleaning', title: 'Data Cleaning',
    skills: ['remove-duplicates', 'text-to-columns', 'find-and-replace', 'data-validation', 'conditional-formatting-spreadsheets'],
  },
  {
    id: 'data-analysis', title: 'Data Analysis',
    skills: ['sort-spreadsheets', 'filter-spreadsheets', 'excel-tables', 'spreadsheets-pivot-tables', 'pivot-charts', 'slicers', 'grouping-spreadsheets'],
  },
  {
    id: 'visualization-and-dashboards', title: 'Visualization & Dashboards',
    skills: ['bar-chart', 'column-chart', 'line-chart', 'scatter-plot', 'spreadsheets-charts', 'kpi-spreadsheets', 'dashboard-spreadsheets'],
  },
  {
    id: 'power-query-and-advanced', title: 'Power Query & Advanced',
    skills: ['spreadsheets-power-query', 'power-query-import-data', 'power-query-transform-data', 'power-query-merge', 'power-query-append', 'power-query-refresh', 'power-query-advanced'],
  },
];

// Safety check: every referenced skill file must exist, and no skill id
// may appear in more than one group.
const seen = new Set();
for (const group of GROUPS) {
  for (const id of group.skills) {
    if (seen.has(id)) throw new Error(`Skill "${id}" appears in more than one group`);
    seen.add(id);
    const skillFile = path.join(SKILLS_DIR, `${id}.yaml`);
    if (!fs.existsSync(skillFile)) throw new Error(`Skill file missing for "${id}" (referenced in group "${group.id}")`);
  }
}

const flatSkills = GROUPS.flatMap((g) => g.skills);

const stage = roadmap.stages.find((s) => s.id === 'spreadsheets');
if (!stage) throw new Error('spreadsheets stage not found');
stage.skills = flatSkills;
stage.groups = GROUPS;

fs.writeFileSync(file, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
console.log(`Rewired Spreadsheets stage: ${GROUPS.length} groups, ${flatSkills.length} total topics.`);
