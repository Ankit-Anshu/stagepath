// Adds learning-group organization to the Data Analyst roadmap's crowded
// stages, per topic.md's PRD — groups existing skill ids into named
// sub-lists without adding, removing, renaming, or reordering any existing
// skill, stage, or note. Small stages (<=5 skills) are left ungrouped.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const file = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const roadmap = yaml.load(fs.readFileSync(file, 'utf8'));

const GROUPS = {
  foundations: [
    { id: 'the-analyst-role', title: 'The Analyst Role', skills: ['what-is-data-analytics', 'types-of-data-analytics'] },
    { id: 'business-thinking', title: 'Business Thinking', skills: ['business-understanding', 'kpis-metrics', 'data-thinking'] },
    { id: 'process-and-quality', title: 'Process & Data Quality', skills: ['data-analytics-lifecycle', 'data-cleaning'] },
  ],
  spreadsheets: [
    { id: 'core-formulas', title: 'Core Formulas', skills: ['sum-function', 'average-function', 'count-function', 'min-max-function'] },
    { id: 'logic-and-conditional', title: 'Logic & Conditional', skills: ['if-function'] },
    { id: 'text-functions', title: 'Text Functions', skills: ['text-upper-lower-proper', 'trim-function', 'concat-function', 'text-replace-substitute'] },
    { id: 'date-and-time', title: 'Date & Time', skills: ['datedif-function'] },
    { id: 'lookup-and-reference', title: 'Lookup & Reference', skills: ['spreadsheets-lookup'] },
    { id: 'data-analysis-and-dashboards', title: 'Data Analysis & Dashboards', skills: ['spreadsheets-pivot-tables', 'spreadsheets-charts'] },
    { id: 'power-query-and-advanced', title: 'Power Query & Advanced', skills: ['spreadsheets-power-query'] },
  ],
  sql: [
    { id: 'query-fundamentals', title: 'Query Fundamentals', skills: ['sql-select', 'sql-filtering', 'sql-aggregation'] },
    { id: 'joins-and-combining-data', title: 'Joins & Combining Data', skills: ['sql-joins', 'sql-set-operations'] },
    { id: 'advanced-querying', title: 'Advanced Querying', skills: ['sql-subqueries', 'sql-ctes', 'sql-window-functions'] },
    { id: 'performance-and-optimization', title: 'Performance & Optimization', skills: ['sql-query-optimization'] },
  ],
  python: [
    { id: 'python-basics', title: 'Python Basics', skills: ['python-fundamentals', 'python-notebooks'] },
    { id: 'data-manipulation', title: 'Data Manipulation', skills: ['numpy', 'pandas'] },
    { id: 'applied-python', title: 'Applied Python', skills: ['python-visualization', 'python-apis', 'python-regex'] },
  ],
  visualization: [
    { id: 'chart-fundamentals', title: 'Chart Fundamentals', skills: ['charts', 'dataviz-color-accessibility', 'dataviz-geospatial'] },
    { id: 'dashboards-and-bi-tools', title: 'Dashboards & BI Tools', skills: ['dashboard-design', 'bi-tools'] },
    { id: 'communicating-insights', title: 'Communicating Insights', skills: ['storytelling'] },
  ],
  'business-analytics': [
    { id: 'metrics-and-experimentation', title: 'Metrics & Experimentation', skills: ['business-analytics', 'ab-testing'] },
    { id: 'customer-analytics', title: 'Customer Analytics', skills: ['funnel-analysis', 'customer-segmentation', 'cohort-retention-analysis'] },
    { id: 'forecasting', title: 'Forecasting', skills: ['forecasting-trend-analysis'] },
  ],
};

for (const stage of roadmap.stages) {
  const groups = GROUPS[stage.id];
  if (!groups) continue;

  // Safety check: every skill in every group must already exist in the
  // stage's flat skills list, and the union must match exactly (no skill
  // added, dropped, or duplicated by this grouping pass).
  const grouped = groups.flatMap((g) => g.skills);
  const original = stage.skills;
  const groupedSet = new Set(grouped);
  const originalSet = new Set(original);
  if (grouped.length !== groupedSet.size) throw new Error(`Duplicate skill across groups in stage ${stage.id}`);
  for (const id of grouped) if (!originalSet.has(id)) throw new Error(`Group references unknown skill "${id}" in stage ${stage.id}`);
  for (const id of original) if (!groupedSet.has(id)) throw new Error(`Skill "${id}" in stage ${stage.id} is missing from every group`);

  stage.groups = groups;
}

fs.writeFileSync(file, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
console.log('Added learning groups to:', Object.keys(GROUPS).join(', '));
