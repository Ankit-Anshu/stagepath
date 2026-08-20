// data_analyst_roadmap_curriculum.md — Sections 02.9 Data Transformation
// in Excel, 02.10 Excel Data Analysis, 02.11 Excel Visualization.
//
// Adds the brand-new Data Transformation chapter (reusing filter/sort
// rather than duplicating them, matching the doc's own overlap between
// 2.9 and 2.10). Splits the old "visualization-and-dashboards" chapter
// into "excel-visualization" (2.11, fully built) and "excel-dashboards"
// (2.12 stub — structurally separated now, content to follow later).
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ROADMAP_FILE = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const CHAPTERS_DIR = path.join(ROOT, 'content', 'chapters');

const DATA_TRANSFORMATION = [
  'filter-spreadsheets', 'sort-spreadsheets', 'calculated-columns', 'conditional-transformations',
  'splitting-columns', 'combining-columns', 'changing-data-types', 'reshaping-data',
  'wide-vs-long-data', 'preparing-data-for-analysis', 'preparing-data-for-pivot-tables',
];

const DATA_ANALYSIS = [
  'sort-spreadsheets', 'filter-spreadsheets', 'advanced-filter', 'conditional-formatting-spreadsheets',
  'spreadsheets-pivot-tables', 'pivot-charts', 'grouping-spreadsheets', 'slicers',
  'calculated-fields', 'drill-down',
];

const EXCEL_VISUALIZATION = [
  'chart-fundamentals-spreadsheets', 'column-chart', 'bar-chart', 'line-chart',
  'pie-donut-chart', 'area-chart', 'scatter-plot', 'combo-chart', 'kpi-spreadsheets',
  'choosing-the-right-chart', 'chart-formatting', 'data-storytelling-spreadsheets',
];

const EXCEL_DASHBOARDS = ['dashboard-spreadsheets']; // 2.12 stub — content pending

for (const id of [...DATA_TRANSFORMATION, ...DATA_ANALYSIS, ...EXCEL_VISUALIZATION, ...EXCEL_DASHBOARDS]) {
  if (!fs.existsSync(path.join(SKILLS_DIR, `${id}.yaml`))) throw new Error(`Skill file missing for "${id}"`);
}

const write = (id, title, skills) =>
  fs.writeFileSync(path.join(CHAPTERS_DIR, `${id}.yaml`), yaml.dump({ title, skills }, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');

write('data-transformation', 'Data Transformation', DATA_TRANSFORMATION);
write('data-analysis', 'Data Analysis', DATA_ANALYSIS);
write('excel-visualization', 'Excel Visualization', EXCEL_VISUALIZATION);
write('excel-dashboards', 'Excel Dashboards', EXCEL_DASHBOARDS);
fs.unlinkSync(path.join(CHAPTERS_DIR, 'visualization-and-dashboards.yaml'));

const roadmap = yaml.load(fs.readFileSync(ROADMAP_FILE, 'utf8'));
const stage = roadmap.stages.find((s) => s.id === 'spreadsheets');
if (!stage) throw new Error('spreadsheets stage not found');

stage.groups = stage.groups.flatMap((g) => {
  if (g === 'data-analysis') return ['data-transformation', 'data-analysis'];
  if (g === 'visualization-and-dashboards') return ['excel-visualization', 'excel-dashboards'];
  return [g];
});

// Dedupe here — filter-spreadsheets/sort-spreadsheets intentionally
// appear in both Data Transformation and Data Analysis chapters
// (matching the doc's own overlap), but the stage's flat `skills` list
// feeds the roadmap page's "major topics"/subtopic counts, which must
// count each real topic once, not once per chapter it appears in.
const allChapterSkills = stage.groups.flatMap((groupId) => {
  const chapter = yaml.load(fs.readFileSync(path.join(CHAPTERS_DIR, `${groupId}.yaml`), 'utf8'));
  return chapter.skills;
});
stage.skills = [...new Set(allChapterSkills)];

fs.writeFileSync(ROADMAP_FILE, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
console.log('Groups:', stage.groups.join(', '));
console.log(`Spreadsheets stage now has ${stage.skills.length} unique topics (${allChapterSkills.length} chapter-slot references).`);
