// Adds 5 additional skills to the Data Analyst roadmap — real gaps in the
// current map for topics that are commonly required for the job (data
// cleaning methodology, Python visualization, a dedicated BI tool, cohort
// analysis, and Git). Also adds the resources they cite and wires the new
// skill ids into content/roadmaps/data-analyst.yaml's stages.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const RESOURCES_DIR = path.join(ROOT, 'content', 'resources');
const ROADMAPS_DIR = path.join(ROOT, 'content', 'roadmaps');

function write(dir, id, data) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${id}.yaml`), yaml.dump(data, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}

function mergeWrite(dir, id, patch) {
  const file = path.join(dir, `${id}.yaml`);
  const existing = yaml.load(fs.readFileSync(file, 'utf8')) || {};
  const merged = { ...existing, ...patch };
  fs.writeFileSync(file, yaml.dump(merged, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}

// ---------------------------------------------------------------------------
// New resources
// ---------------------------------------------------------------------------
const resources = [
  { id: 'r-openrefine-docs', title: 'OpenRefine Documentation', type: 'documentation', url: 'https://openrefine.org/docs', provider: 'OpenRefine', duration_minutes: 60, difficulty: 'beginner', quality_score: 4.3, recommended: true },
  { id: 'r-matplotlib-docs', title: 'Matplotlib Quick Start Guide', type: 'documentation', url: 'https://matplotlib.org/stable/tutorials/introductory/quick_start.html', provider: 'Matplotlib', duration_minutes: 45, difficulty: 'beginner', quality_score: 4.5, recommended: true },
  { id: 'r-seaborn-docs', title: 'Seaborn Tutorial', type: 'documentation', url: 'https://seaborn.pydata.org/tutorial.html', provider: 'seaborn', duration_minutes: 60, difficulty: 'beginner', quality_score: 4.6 },
  { id: 'r-tableau-training', title: 'Tableau Training and Tutorials', type: 'course', url: 'https://www.tableau.com/learn/training', provider: 'Tableau', duration_minutes: 240, difficulty: 'intermediate', quality_score: 4.4, recommended: true },
  { id: 'r-git-docs', title: 'Git Documentation', type: 'documentation', url: 'https://git-scm.com/doc', provider: 'Git', duration_minutes: 60, difficulty: 'beginner', quality_score: 4.5, recommended: true },
];

for (const r of resources) {
  const { id, ...rest } = r;
  write(RESOURCES_DIR, id, {
    title: rest.title, type: rest.type, url: rest.url, provider: rest.provider,
    duration_minutes: rest.duration_minutes, difficulty: rest.difficulty,
    free: true, language: 'en', last_verified: '2026-08-19',
    ...(rest.quality_score ? { quality_score: rest.quality_score } : {}),
    recommended: !!rest.recommended,
  });
}

// ---------------------------------------------------------------------------
// New skills
// ---------------------------------------------------------------------------
const skills = [
  {
    id: 'data-cleaning', title: 'Data Cleaning & Quality', category: 'Foundations',
    what_is_it: 'Systematically finding and fixing problems in raw data — duplicates, missing values, inconsistent formats, and outliers — before any analysis begins.',
    why_it_matters: '"Garbage in, garbage out." Most real datasets are messy, and an analysis built on unvalidated data produces confident-sounding wrong answers, no matter how sound the method is.',
    prerequisites: [],
    objectives: ['Identify common data quality issues', 'Choose an appropriate fix for missing data', 'Detect duplicate and inconsistent records', 'Validate a cleaned dataset against its source'],
    subtopics: [
      { title: 'Missing data strategies', description: 'Deciding whether to drop, fill, or flag missing values — and being able to justify the choice.', outcomes: ['Choose and apply a missing-data strategy with a stated reason'] },
      { title: 'Duplicate detection', description: 'Finding exact and near-duplicate records, and deciding which copy to keep.', outcomes: ['Identify and remove duplicates without losing valid rows'] },
      { title: 'Inconsistent formatting', description: 'Standardizing dates, casing, units, and category labels that were entered inconsistently.', outcomes: ['Normalize a column with mixed formats into one consistent format'] },
      { title: 'Outlier identification', description: 'Spotting values that are likely errors versus values that are real but extreme.', outcomes: ['Flag a suspicious outlier and decide whether to keep, cap, or remove it'] },
      { title: 'Validation & reconciliation', description: 'Checking a cleaned dataset against the original — row counts, totals, and spot checks.', outcomes: ['Reconcile a cleaned dataset\'s totals against the raw source'] },
    ],
    estimated_minutes: 240,
    resources: ['r-kaggle-data-cleaning', 'r-openrefine-docs'],
    practice: [{ id: 'ex-data-cleaning-1', title: 'Audit a raw dataset', description: 'Given a raw CSV, produce a short data-quality report listing every issue found before touching the data.' }],
    verify: ['Every fix is documented with a reason', 'No valid rows were silently dropped', 'Cleaned totals reconcile against the raw source'],
  },
  {
    id: 'python-visualization', title: 'Data Visualization with Python', category: 'Python',
    what_is_it: 'Creating charts directly from pandas data using Matplotlib and Seaborn, for exploratory analysis and reporting.',
    why_it_matters: 'Python-native visualization lets you explore data and produce report-ready charts inside the same workflow as your cleaning and analysis, without switching tools.',
    prerequisites: ['pandas'],
    objectives: ['Create a chart directly from a DataFrame', 'Customize titles, labels, and colors', 'Choose Matplotlib vs. Seaborn for a task', 'Export a chart as an image for a report'],
    subtopics: [
      { title: 'Matplotlib basics', description: 'The core plotting API: figures, axes, and the most common chart types.', outcomes: ['Plot a line and bar chart from a DataFrame'] },
      { title: 'Seaborn statistical plots', description: 'Higher-level statistical charts — distributions, box plots, and category comparisons — with less code.', outcomes: ['Build a distribution plot and a box plot with Seaborn'] },
      { title: 'Customizing and labeling', description: 'Titles, axis labels, legends, and color choices that make a chart stand on its own.', outcomes: ['Fully label a chart without relying on verbal explanation'] },
      { title: 'Exporting for reports', description: 'Saving a chart at the right resolution and format to drop into a slide or document.', outcomes: ['Export a chart as a high-resolution image file'] },
    ],
    estimated_minutes: 180,
    resources: ['r-matplotlib-docs', 'r-seaborn-docs'],
    practice: [{ id: 'ex-python-viz-1', title: 'Chart a cleaned dataset', description: 'Using the churn analysis dataset, produce three labeled charts that each answer a different question about the data.' }],
    verify: ['Each chart answers a specific, stated question', 'Axes and legends are labeled', 'Chart type matches the question being asked'],
  },
  {
    id: 'bi-tools', title: 'BI Tools (Power BI / Tableau)', category: 'Visualization',
    what_is_it: 'Connecting data sources and building interactive reports inside a dedicated business intelligence tool like Power BI or Tableau.',
    why_it_matters: 'Most companies standardize on a BI tool for company-wide reporting. Fluency in at least one is one of the most commonly listed requirements in real data analyst job postings.',
    prerequisites: ['charts'],
    objectives: ['Connect a BI tool to a data source', 'Build a report with visuals and filters', 'Use a calculated field', 'Publish and share a report'],
    subtopics: [
      { title: 'Connecting data sources', description: 'Importing and refreshing data from files, databases, or spreadsheets.', outcomes: ['Connect a BI tool to a CSV or database source'] },
      { title: 'Building visuals & filters', description: 'Assembling charts and slicers into one interactive report page.', outcomes: ['Build a report page with at least one working filter'] },
      { title: 'Calculated fields', description: 'Writing a simple derived measure (e.g. a ratio or running total) inside the tool.', outcomes: ['Write one calculated field used by a visual'] },
      { title: 'Publishing & sharing', description: 'Publishing a report so a stakeholder can actually open and use it.', outcomes: ['Publish a report and share it with a working link'] },
    ],
    estimated_minutes: 300,
    resources: ['r-ms-powerbi-training', 'r-tableau-training'],
    practice: [{ id: 'ex-bi-tools-1', title: 'Rebuild a report in a BI tool', description: 'Take a chart you already built elsewhere and rebuild it as an interactive report with at least one filter, inside Power BI or Tableau.' }],
    verify: ['Data source connects and refreshes without errors', 'At least one filter updates the visuals correctly', 'Report is published and shareable'],
  },
  {
    id: 'cohort-retention-analysis', title: 'Cohort & Retention Analysis', category: 'Business Analytics',
    what_is_it: 'Grouping users by a shared starting point, like signup week, and tracking how their behavior changes over time to measure retention.',
    why_it_matters: 'Average metrics hide what\'s really happening. Cohort analysis reveals whether a product or campaign is actually improving retention over time, not just growing in raw numbers.',
    prerequisites: ['business-analytics'],
    objectives: ['Build a cohort table', 'Calculate a retention rate', 'Distinguish new vs. returning behavior', 'Spot a retention curve that signals a problem'],
    subtopics: [
      { title: 'Defining a cohort', description: 'Choosing the shared starting event (signup, first purchase) that groups users together.', outcomes: ['Define a cohort boundary appropriate to the business question'] },
      { title: 'Building a cohort table', description: 'Laying out cohorts by start period against time-since-start to see behavior unfold.', outcomes: ['Build a cohort table from raw event data'] },
      { title: 'Retention rate calculation', description: 'Calculating the percentage of a cohort still active at each subsequent period.', outcomes: ['Calculate retention rate correctly for a given period'] },
      { title: 'Reading a retention curve', description: 'Recognizing a healthy plateau versus a curve trending toward zero.', outcomes: ['Diagnose whether a retention curve signals a healthy or unhealthy product'] },
    ],
    estimated_minutes: 240,
    resources: ['r-grow-google-data-analytics', 'r-fcc-data-analysis-python'],
    practice: [{ id: 'ex-cohort-1', title: 'Build a weekly cohort table', description: 'Given a raw signup and activity log, build a weekly cohort retention table and identify the week with the steepest drop-off.' }],
    verify: ['Cohort boundaries are defined consistently', 'Retention rate is calculated correctly at each period', 'Can explain what the resulting curve implies about the product'],
  },
  {
    id: 'git-version-control', title: 'Git & Version Control', category: 'Career',
    what_is_it: 'Tracking changes to your work with Git and hosting it on GitHub — commits, branches, and a clean project history.',
    why_it_matters: 'Every portfolio project needs to live somewhere reviewable. Git is also how virtually every data team manages code and collaborates, making it a baseline expectation, not a nice-to-have.',
    prerequisites: [],
    objectives: ['Initialize a repository and make a commit', 'Write a clear commit message', 'Push a project to GitHub', 'Explain a basic branch and merge workflow'],
    subtopics: [
      { title: 'Commits & history', description: 'Saving snapshots of a project\'s progress and reviewing what changed and when.', outcomes: ['Make a sequence of commits that tell a clear story'] },
      { title: 'Writing clear commit messages', description: 'A commit message that explains what changed and why, not just "update".', outcomes: ['Write a commit message a stranger could understand'] },
      { title: 'Branches', description: 'Working on a change in isolation before merging it back into the main project.', outcomes: ['Create a branch, make a change, and merge it back'] },
      { title: 'Pushing to GitHub', description: 'Publishing a local repository to GitHub so it is visible and reviewable.', outcomes: ['Push a repository to GitHub with a working history'] },
    ],
    estimated_minutes: 180,
    resources: ['r-git-docs', 'r-github-best-practices'],
    practice: [{ id: 'ex-git-1', title: 'Version-control a project', description: 'Take any file you have, initialize a Git repository, make three meaningful commits, and push it to a public GitHub repository.' }],
    verify: ['Commit history is meaningful, not a single giant commit', 'Commit messages are clear and specific', 'Repository is public and visible on GitHub'],
  },
];

for (const s of skills) {
  const { id, ...rest } = s;
  write(SKILLS_DIR, id, rest);
}

// ---------------------------------------------------------------------------
// Wire the new skills into the Data Analyst roadmap's stages
// ---------------------------------------------------------------------------
const roadmapFile = path.join(ROADMAPS_DIR, 'data-analyst.yaml');
const roadmap = yaml.load(fs.readFileSync(roadmapFile, 'utf8'));

function insertAfter(list, afterId, newId) {
  const idx = list.indexOf(afterId);
  if (idx === -1) { list.push(newId); return; }
  list.splice(idx + 1, 0, newId);
}

for (const stage of roadmap.stages) {
  if (stage.id === 'foundations') insertAfter(stage.skills, 'data-thinking', 'data-cleaning');
  if (stage.id === 'python') insertAfter(stage.skills, 'pandas', 'python-visualization');
  if (stage.id === 'visualization') insertAfter(stage.skills, 'dashboard-design', 'bi-tools');
  if (stage.id === 'business-analytics') insertAfter(stage.skills, 'business-analytics', 'cohort-retention-analysis');
  if (stage.id === 'portfolio') stage.skills.unshift('git-version-control');
}

fs.writeFileSync(roadmapFile, yaml.dump(roadmap, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');

// portfolio-building should now also depend on having learned Git first
mergeWrite(SKILLS_DIR, 'portfolio-building', { prerequisites: ['business-analytics', 'git-version-control'] });

console.log(`Added ${skills.length} skills and ${resources.length} resources; updated data-analyst.yaml stages and portfolio-building prerequisites.`);
