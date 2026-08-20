// Splits "Spreadsheets" and "Statistics" out of the Data Analyst roadmap's
// Foundations stage into their own dedicated stages, each broken into 5
// granular skills (mirroring how SQL is already split into 6 skills).
//
// The original `spreadsheets` and `statistics` skill files are NOT touched
// — they're still used by other roadmaps (business-analyst, data-scientist,
// ai-engineer) as single umbrella skills. This only changes what the Data
// Analyst roadmap itself points at.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const RESOURCES_DIR = path.join(ROOT, 'content', 'resources');
const PROJECTS_DIR = path.join(ROOT, 'content', 'projects');
const ROADMAPS_DIR = path.join(ROOT, 'content', 'roadmaps');

function write(dir, id, data) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${id}.yaml`), yaml.dump(data, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}
function mergeWrite(dir, id, patch) {
  const file = path.join(dir, `${id}.yaml`);
  const existing = yaml.load(fs.readFileSync(file, 'utf8')) || {};
  fs.writeFileSync(file, yaml.dump({ ...existing, ...patch }, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}

// ---------------------------------------------------------------------------
// One more resource, for Power Query
// ---------------------------------------------------------------------------
write(RESOURCES_DIR, 'r-ms-power-query-docs', {
  title: 'What is Power Query?', type: 'documentation',
  url: 'https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query',
  provider: 'Microsoft Learn', duration_minutes: 45, difficulty: 'intermediate',
  free: true, language: 'en', last_verified: '2026-08-19', quality_score: 4.3, recommended: true,
});

// ---------------------------------------------------------------------------
// Spreadsheets skills
// ---------------------------------------------------------------------------
const spreadsheetSkills = [
  {
    id: 'spreadsheets-formulas', title: 'Spreadsheet Formulas & Functions', category: 'Spreadsheets',
    what_is_it: 'Writing formulas that reference cells and ranges — arithmetic, logical, and text functions — instead of typing calculated values by hand.',
    why_it_matters: 'Formulas are what make a spreadsheet update itself. A workbook built on hard-coded numbers breaks the moment the underlying data changes.',
    prerequisites: [],
    objectives: ['Write a formula that references other cells', 'Use IF for conditional logic', 'Use SUMIFS/COUNTIFS to summarize by criteria', 'Use text functions to clean a column'],
    subtopics: [
      { title: 'Cell references & ranges', description: 'Relative vs. absolute references ($), and why the difference matters when copying a formula.', outcomes: ['Copy a formula across a range without it breaking'] },
      { title: 'Logical functions', description: 'IF, AND, OR, and nested conditions for branching logic.', outcomes: ['Write a formula with a nested IF'] },
      { title: 'Conditional aggregation', description: 'SUMIFS, COUNTIFS, and AVERAGEIFS for summarizing by one or more criteria.', outcomes: ['Summarize a column using multiple criteria'] },
      { title: 'Text functions', description: 'LEFT/RIGHT/MID, TRIM, and CONCATENATE for cleaning and combining text.', outcomes: ['Clean an inconsistent text column with formulas'] },
    ],
    estimated_minutes: 180,
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-spreadsheet-formulas-1', title: 'Build a conditional summary', description: 'Given a list of transactions, use SUMIFS/COUNTIFS to summarize totals by region and category without a pivot table.' }],
    verify: ['Formulas reference cells, not hard-coded values', 'A formula copied across a range still works correctly', 'Conditional aggregation matches a manual spot check'],
  },
  {
    id: 'spreadsheets-lookup', title: 'Lookup & Reference Functions', category: 'Spreadsheets',
    what_is_it: 'Using VLOOKUP, XLOOKUP, and INDEX-MATCH to pull matching values from another table by a shared key.',
    why_it_matters: 'Most real spreadsheet work involves combining data that lives in more than one table or tab — lookup functions do that without manual copy-pasting.',
    prerequisites: ['spreadsheets-formulas'],
    objectives: ['Use VLOOKUP or XLOOKUP to pull a matching value', 'Explain why XLOOKUP is safer than VLOOKUP', 'Use INDEX-MATCH for a two-way lookup', 'Handle a lookup that finds no match'],
    subtopics: [
      { title: 'VLOOKUP basics', description: 'Exact vs. approximate match, and its most common pitfalls.', outcomes: ['Write a VLOOKUP with an exact match'] },
      { title: 'XLOOKUP', description: 'Why it fixes VLOOKUP\'s biggest limitations — direction, defaults, and column insertion.', outcomes: ['Replace a VLOOKUP with an XLOOKUP'] },
      { title: 'INDEX-MATCH', description: 'A more flexible two-way lookup pattern that isn\'t limited to the leftmost column.', outcomes: ['Build a two-way lookup with INDEX-MATCH'] },
      { title: 'Handling missing matches', description: 'Wrapping a lookup with IFERROR and designing for the "not found" case.', outcomes: ['Wrap a lookup so a missing match doesn\'t break the sheet'] },
    ],
    estimated_minutes: 150,
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-spreadsheets-lookup-1', title: 'Merge two tabs by ID', description: 'Given a customers tab and an orders tab, pull customer name and region into the orders tab by customer ID.' }],
    verify: ['Lookup returns the correct matching value', 'Missing matches are handled instead of showing a raw error', 'Can explain the tradeoff between VLOOKUP, XLOOKUP, and INDEX-MATCH'],
  },
  {
    id: 'spreadsheets-pivot-tables', title: 'Pivot Tables', category: 'Spreadsheets',
    what_is_it: 'Summarizing rows into totals, counts, and averages by category, with filters and slicers, without writing a single formula.',
    why_it_matters: 'A pivot table is the fastest way to answer "how does this break down by X?" — the single most common question in spreadsheet-based analysis.',
    prerequisites: ['spreadsheets-lookup'],
    objectives: ['Build a pivot table from raw rows', 'Add a calculated field', 'Filter and slice a pivot table', 'Refresh a pivot table when source data changes'],
    subtopics: [
      { title: 'Building a pivot table', description: 'Assigning fields to rows, columns, values, and filters.', outcomes: ['Build a pivot table summarizing by two dimensions'] },
      { title: 'Calculated fields', description: 'Adding a derived measure inside the pivot table itself.', outcomes: ['Add a calculated field to a pivot table'] },
      { title: 'Filtering & slicers', description: 'Interactive filtering that narrows the summary without changing the source data.', outcomes: ['Add a slicer that filters a pivot table'] },
      { title: 'Keeping it current', description: 'Refreshing a pivot table after the underlying source data changes.', outcomes: ['Refresh a pivot table and confirm it reflects new data'] },
    ],
    estimated_minutes: 180,
    resources: ['r-ms-pivot-tables'],
    project: 'project-clean-messy-sales-data',
    practice: [{ id: 'ex-pivot-tables-1', title: 'Summarize regional sales', description: 'Build a pivot table showing total revenue and order count by region and month from a cleaned transactions sheet.' }],
    verify: ['Pivot table correctly summarizes by category and date', 'Calculated field returns the correct value', 'Pivot table updates correctly after a refresh'],
  },
  {
    id: 'spreadsheets-charts', title: 'Charts & Dashboards in Spreadsheets', category: 'Spreadsheets',
    what_is_it: 'Turning a pivot summary into readable charts and a simple one-tab dashboard, using conditional formatting to highlight what matters.',
    why_it_matters: 'A pivot table full of numbers still needs a chart before most stakeholders will read it — this is where spreadsheet analysis becomes something someone can glance at and understand.',
    prerequisites: ['spreadsheets-pivot-tables'],
    objectives: ['Build a chart from a pivot table', 'Use conditional formatting to highlight outliers', 'Combine charts and KPIs into one dashboard tab', 'Keep a dashboard readable at a glance'],
    subtopics: [
      { title: 'Charts from pivots', description: 'Building a chart that stays linked to, and updates with, its pivot table.', outcomes: ['Build a chart linked to a pivot table'] },
      { title: 'Conditional formatting', description: 'Color scales, data bars, and highlight rules that draw the eye to what matters.', outcomes: ['Highlight values above or below a threshold with conditional formatting'] },
      { title: 'One-tab dashboards', description: 'Laying out charts and KPIs on a single tab someone can scan in seconds.', outcomes: ['Assemble a one-tab dashboard from existing charts'] },
    ],
    estimated_minutes: 150,
    resources: ['r-datavizcatalogue'],
    practice: [{ id: 'ex-spreadsheets-charts-1', title: 'Build a one-tab sales dashboard', description: 'Combine two charts and three KPI cells from your pivot tables into a single readable dashboard tab.' }],
    verify: ['Chart stays linked to its pivot table', 'Conditional formatting highlights the intended values', 'Dashboard tab is readable without scrolling'],
  },
  {
    id: 'spreadsheets-power-query', title: 'Power Query & Advanced Spreadsheets', category: 'Spreadsheets',
    what_is_it: 'Importing, transforming, and combining data from multiple sources using Power Query, before it ever reaches a formula or pivot table.',
    why_it_matters: 'Manually pasting and reformatting data every week doesn\'t scale. Power Query turns a repeatable cleaning process into a few clicks that refresh automatically.',
    prerequisites: ['spreadsheets-charts'],
    objectives: ['Import data from a file or folder', 'Apply and save a repeatable transformation', 'Merge two queries', 'Refresh a query after the source changes'],
    subtopics: [
      { title: 'Importing data', description: 'Connecting to a file, folder, or web source as a query instead of pasting values.', outcomes: ['Import a CSV as a query'] },
      { title: 'Transform steps', description: 'A saved, repeatable, step-by-step cleaning process instead of one-off manual edits.', outcomes: ['Build a multi-step, repeatable transformation'] },
      { title: 'Merging queries', description: 'Combining two data sources by a shared key, similar to a SQL join.', outcomes: ['Merge two queries on a shared column'] },
    ],
    estimated_minutes: 180,
    resources: ['r-ms-power-query-docs'],
    practice: [{ id: 'ex-power-query-1', title: 'Automate a monthly import', description: 'Set up a query that imports and cleans a raw export so re-running it on next month\'s file takes one click instead of starting over.' }],
    verify: ['Import is repeatable, not a one-time manual paste', 'Transformation steps are visible and in a logical order', 'Refreshing the query correctly reflects new source data'],
  },
];

for (const s of spreadsheetSkills) { const { id, ...rest } = s; write(SKILLS_DIR, id, rest); }

// ---------------------------------------------------------------------------
// Statistics skills
// ---------------------------------------------------------------------------
const statisticsSkills = [
  {
    id: 'stats-descriptive', title: 'Descriptive Statistics', category: 'Statistics',
    what_is_it: 'Summarizing a dataset with mean, median, mode, standard deviation, and quartiles.',
    why_it_matters: 'Before you can say anything meaningful about data, you need to describe it accurately — and know when a single summary number is misleading.',
    prerequisites: [],
    objectives: ['Compute mean, median, and mode', 'Compute standard deviation and interpret it', 'Identify quartiles and use them to spot skew', 'Choose the right summary statistic for a dataset'],
    subtopics: [
      { title: 'Measures of center', description: 'Mean, median, and mode, and when each one is the right choice.', outcomes: ['Choose the right measure of center for a skewed dataset'] },
      { title: 'Measures of spread', description: 'Range, variance, and standard deviation as ways of describing how spread out data is.', outcomes: ['Compute and interpret a standard deviation'] },
      { title: 'Quartiles & IQR', description: 'Identifying the middle 50% of data and using it to spot skew and outliers.', outcomes: ['Compute quartiles and identify skew'] },
    ],
    estimated_minutes: 150,
    resources: ['r-khan-statistics', 'r-seeing-theory'],
    practice: [{ id: 'ex-stats-descriptive-1', title: 'Describe a dataset', description: 'Given a numeric dataset, compute mean, median, standard deviation, and quartiles, and explain what each one tells you.' }],
    verify: ['Descriptive statistics are computed correctly', 'Can justify which measure of center best fits a skewed dataset', 'Can identify an outlier using the IQR'],
  },
  {
    id: 'stats-probability', title: 'Probability Basics', category: 'Statistics',
    what_is_it: 'The core rules of probability — independent vs. dependent events, conditional probability, and expected value.',
    why_it_matters: 'Probability is the language underneath statistics, A/B testing, and most machine learning. Without it, "95% confidence" is just a phrase you repeat without understanding.',
    prerequisites: ['stats-descriptive'],
    objectives: ['Calculate the probability of independent and dependent events', 'Apply conditional probability to a real scenario', 'Calculate an expected value', 'Explain the difference between probability and odds'],
    subtopics: [
      { title: 'Independent vs. dependent events', description: 'Whether one event changes the probability of another.', outcomes: ['Determine whether two events are independent'] },
      { title: 'Conditional probability', description: 'Calculating the probability of A given that B has occurred.', outcomes: ['Calculate a conditional probability from a scenario'] },
      { title: 'Expected value', description: 'Weighting each possible outcome by its probability to get a single expected result.', outcomes: ['Compute the expected value of a simple scenario'] },
    ],
    estimated_minutes: 150,
    resources: ['r-seeing-theory', 'r-khan-statistics'],
    practice: [{ id: 'ex-stats-probability-1', title: 'Calculate a conditional probability', description: 'Given a scenario with two related events, calculate and explain a conditional probability by hand.' }],
    verify: ['Independence is correctly determined, not assumed', 'Conditional probability is calculated correctly', 'Expected value calculation matches a manual check'],
  },
  {
    id: 'stats-distributions', title: 'Distributions', category: 'Statistics',
    what_is_it: 'Recognizing normal, skewed, binomial, and uniform distributions, and what the shape of data tells you.',
    why_it_matters: 'Many statistical methods assume a particular distribution shape — knowing what you\'re looking at tells you which methods are actually valid to use.',
    prerequisites: ['stats-probability'],
    objectives: ['Recognize a normal distribution and the 68-95-99.7 rule', 'Identify skewed and bimodal distributions', 'Explain what a binomial distribution models', 'Choose an appropriate method based on distribution shape'],
    subtopics: [
      { title: 'The normal distribution', description: 'The bell curve and the 68-95-99.7 rule for estimating ranges.', outcomes: ['Apply the 68-95-99.7 rule to estimate a range'] },
      { title: 'Skewed & bimodal shapes', description: 'What a long tail or two peaks in a histogram actually implies about the data.', outcomes: ['Identify a skewed distribution and explain its implication'] },
      { title: 'Common named distributions', description: 'Binomial and uniform distributions, at a beginner level.', outcomes: ['Explain what a binomial distribution models'] },
    ],
    estimated_minutes: 150,
    resources: ['r-seeing-theory', 'r-khan-statistics'],
    practice: [{ id: 'ex-stats-distributions-1', title: 'Identify a distribution shape', description: 'Given a histogram, identify whether the distribution is roughly normal, skewed, or bimodal, and explain what that implies.' }],
    verify: ['Distribution shape is correctly identified from a histogram', 'Can apply the 68-95-99.7 rule to a normal distribution', 'Can explain the practical implication of a skewed shape'],
  },
  {
    id: 'stats-correlation-regression', title: 'Correlation & Regression', category: 'Statistics',
    what_is_it: 'Measuring how two variables move together with a correlation coefficient, and fitting a simple linear regression to describe the relationship.',
    why_it_matters: '"These two things are related" is one of the most common — and most often misused — claims in data analysis. This is how you back it up correctly, and where its limits are.',
    prerequisites: ['stats-distributions'],
    objectives: ['Interpret a correlation coefficient', 'Explain why correlation does not imply causation', 'Fit and interpret a simple linear regression', 'Identify a likely confounding variable'],
    subtopics: [
      { title: 'Correlation coefficient', description: 'Reading the strength and direction of a relationship between two variables.', outcomes: ['Interpret a correlation coefficient\'s strength and direction'] },
      { title: 'Correlation vs. causation', description: 'Naming a plausible confounding variable instead of assuming a causal link.', outcomes: ['Explain a spurious correlation with a real example'] },
      { title: 'Simple linear regression', description: 'Fitting a line through data and interpreting its slope.', outcomes: ['Interpret the slope of a fitted regression line'] },
    ],
    estimated_minutes: 180,
    resources: ['r-khan-statistics', 'r-seeing-theory'],
    practice: [{ id: 'ex-stats-correlation-1', title: 'Investigate a correlation', description: 'Given two correlated variables, calculate the correlation coefficient and propose a plausible confounding variable.' }],
    verify: ['Correlation coefficient is interpreted correctly', 'A specific, plausible confounder is named, not just "correlation isn\'t causation"', 'Regression slope is interpreted in context'],
  },
  {
    id: 'stats-hypothesis-testing', title: 'Hypothesis Testing', category: 'Statistics',
    what_is_it: 'Setting up a null and alternative hypothesis, running a significance test, and interpreting a p-value correctly.',
    why_it_matters: 'This is the formal machinery behind every A/B test and "is this difference real or just noise?" question a data analyst gets asked.',
    prerequisites: ['stats-correlation-regression'],
    objectives: ['State a null and alternative hypothesis', 'Interpret a p-value correctly', 'Explain what a significance threshold means', 'Avoid the most common p-value misinterpretation'],
    subtopics: [
      { title: 'Null vs. alternative hypothesis', description: 'Framing a testable claim before looking at any results.', outcomes: ['State a clear null and alternative hypothesis'] },
      { title: 'P-values', description: 'What a p-value actually measures — and the misreading almost everyone starts out with.', outcomes: ['Interpret a p-value without the common misreading'] },
      { title: 'Significance thresholds', description: 'Choosing and justifying an alpha level before running a test.', outcomes: ['Explain what a chosen significance threshold implies'] },
    ],
    estimated_minutes: 180,
    resources: ['r-khan-statistics', 'r-seeing-theory'],
    project: 'project-ab-testing-analysis',
    practice: [{ id: 'ex-stats-hypothesis-1', title: 'Run a significance test', description: 'Given results from two groups, state a hypothesis, run a significance test, and state a clear decision.' }],
    verify: ['Hypothesis is stated clearly before the test is run', 'P-value is interpreted correctly', 'Decision follows logically from the significance threshold chosen'],
  },
];

for (const s of statisticsSkills) { const { id, ...rest } = s; write(SKILLS_DIR, id, rest); }

// ---------------------------------------------------------------------------
// Cross-link projects to the new culminating skills (additive — the
// original 'spreadsheets' / 'statistics' skill links on these projects
// stay as they are for whichever other roadmap still points at them).
// ---------------------------------------------------------------------------
mergeWrite(PROJECTS_DIR, 'project-clean-messy-sales-data', { skills: ['spreadsheets', 'spreadsheets-pivot-tables'] });
mergeWrite(PROJECTS_DIR, 'project-ab-testing-analysis', { skills: ['statistics', 'business-analytics', 'stats-hypothesis-testing'] });

// business-analytics's prerequisite now points at the more specific skill a
// Data Analyst learner actually walks through.
mergeWrite(SKILLS_DIR, 'business-analytics', { prerequisites: ['sql-aggregation', 'stats-hypothesis-testing'] });

// ---------------------------------------------------------------------------
// Restructure the Data Analyst roadmap: Spreadsheets and Statistics each
// become their own stage instead of living inside Foundations.
// ---------------------------------------------------------------------------
const roadmapFile = path.join(ROADMAPS_DIR, 'data-analyst.yaml');
const roadmap = yaml.load(fs.readFileSync(roadmapFile, 'utf8'));

const foundations = roadmap.stages.find((s) => s.id === 'foundations');
foundations.skills = foundations.skills.filter((id) => id !== 'spreadsheets' && id !== 'statistics');

const foundationsIndex = roadmap.stages.findIndex((s) => s.id === 'foundations');
roadmap.stages.splice(foundationsIndex + 1, 0,
  {
    id: 'spreadsheets', title: 'Spreadsheets',
    description: 'Work confidently in Excel or Google Sheets — formulas, lookups, pivot tables, and dashboards.',
    skills: spreadsheetSkills.map((s) => s.id),
  },
  {
    id: 'statistics', title: 'Statistics',
    description: 'The statistical foundation behind every real analysis and experiment.',
    skills: statisticsSkills.map((s) => s.id),
  },
);

fs.writeFileSync(roadmapFile, yaml.dump(roadmap, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');

console.log(`Added ${spreadsheetSkills.length} spreadsheet skills and ${statisticsSkills.length} statistics skills as their own stages.`);
