// data_analyst_roadmap_curriculum.md — Sections 02.12 "Excel Dashboards"
// and 02.13 "Power Query". Fills out the excel-dashboards stub chapter
// to its full 10 topics, and renames/expands "power-query-and-advanced"
// (which bundled Power Query with an unrelated "Advanced" catch-all) into
// a doc-matching "power-query" chapter with the full 17-topic list — none
// of its content actually belongs to 2.14 Advanced Excel, which is a
// separate, still-unbuilt topic (Dynamic Arrays, Power Pivot, DAX, etc).
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ROADMAP_FILE = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const CHAPTERS_DIR = path.join(ROOT, 'content', 'chapters');

const EXCEL_DASHBOARDS = [
  'dashboard-planning', 'kpi-selection', 'dashboard-layout', 'interactive-filters',
  'slicers', 'chart-fundamentals-spreadsheets', 'dashboard-spreadsheets',
  'executive-dashboard', 'sales-dashboard', 'performance-dashboard',
];

const POWER_QUERY = [
  'spreadsheets-power-query', 'power-query-import-data', 'power-query-data-types',
  'power-query-transform-data', 'power-query-filtering', 'power-query-removing-columns',
  'power-query-splitting-columns', 'power-query-merging-columns', 'power-query-merge',
  'power-query-append', 'power-query-pivot-unpivot', 'power-query-group-by',
  'power-query-advanced', 'power-query-data-cleaning', 'power-query-data-transformation-workflow',
  'power-query-refresh', 'power-query-dependencies',
];

for (const id of [...EXCEL_DASHBOARDS, ...POWER_QUERY]) {
  if (!fs.existsSync(path.join(SKILLS_DIR, `${id}.yaml`))) throw new Error(`Skill file missing for "${id}"`);
}

const write = (id, title, skills) =>
  fs.writeFileSync(path.join(CHAPTERS_DIR, `${id}.yaml`), yaml.dump({ title, skills }, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');

write('excel-dashboards', 'Excel Dashboards', EXCEL_DASHBOARDS);
write('power-query', 'Power Query', POWER_QUERY);
fs.unlinkSync(path.join(CHAPTERS_DIR, 'power-query-and-advanced.yaml'));

const roadmap = yaml.load(fs.readFileSync(ROADMAP_FILE, 'utf8'));
const stage = roadmap.stages.find((s) => s.id === 'spreadsheets');
if (!stage) throw new Error('spreadsheets stage not found');

stage.groups = stage.groups.map((g) => (g === 'power-query-and-advanced' ? 'power-query' : g));

const allChapterSkills = stage.groups.flatMap((groupId) => {
  const chapter = yaml.load(fs.readFileSync(path.join(CHAPTERS_DIR, `${groupId}.yaml`), 'utf8'));
  return chapter.skills;
});
stage.skills = [...new Set(allChapterSkills)];

fs.writeFileSync(ROADMAP_FILE, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
console.log('Groups:', stage.groups.join(', '));
console.log(`Spreadsheets stage now has ${stage.skills.length} unique topics (${allChapterSkills.length} chapter-slot references).`);
