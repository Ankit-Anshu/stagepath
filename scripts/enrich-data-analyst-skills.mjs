// Adds `category` + detailed `subtopics` (title/description/outcomes) to the
// 18 Data Analyst skill files, and `audience` to the Data Analyst roadmap.
// Surgical merge: loads each existing YAML file as-is and only adds/overwrites
// the fields listed below, so nothing else authored on these files is touched.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const ROADMAPS_DIR = path.join(ROOT, 'content', 'roadmaps');

function mergeWrite(dir, id, patch) {
  const file = path.join(dir, `${id}.yaml`);
  const existing = yaml.load(fs.readFileSync(file, 'utf8')) || {};
  const merged = { ...existing, ...patch };
  fs.writeFileSync(file, yaml.dump(merged, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}

const skillPatches = {
  spreadsheets: {
    category: 'Foundations',
    subtopics: [
      { title: 'Formulas & functions', description: 'SUM, AVERAGE, IF, and text functions — writing formulas that reference cells instead of typing numbers directly.', outcomes: ['Write a multi-condition IF formula', 'Use SUMIFS/COUNTIFS to summarize by criteria'] },
      { title: 'Lookup formulas', description: 'VLOOKUP/XLOOKUP and INDEX-MATCH to pull matching data from another table by a shared key.', outcomes: ['Pull a value from a second table by ID', 'Explain why XLOOKUP is safer than VLOOKUP'] },
      { title: 'Data cleaning', description: 'Removing duplicates, trimming whitespace, fixing types, splitting or combining columns, and flagging blanks.', outcomes: ['Deduplicate a messy list', 'Standardize inconsistent text entries'] },
      { title: 'Pivot tables', description: 'Summarizing rows into totals, counts, and averages by category, with filters and slicers.', outcomes: ['Build a pivot table from raw rows', 'Add a calculated field to a pivot table'] },
      { title: 'Charts in spreadsheets', description: 'Turning a pivot summary into a readable bar or line chart with correct labels and scale.', outcomes: ['Build a chart directly from a pivot table'] },
    ],
  },
  statistics: {
    category: 'Foundations',
    subtopics: [
      { title: 'Descriptive statistics', description: 'Mean, median, mode, and standard deviation — and when each summary statistic is misleading.', outcomes: ['Compute and interpret mean vs. median on skewed data'] },
      { title: 'Distributions', description: 'Recognizing normal, skewed, and bimodal shapes and what each implies about the underlying data.', outcomes: ['Identify a distribution shape from a histogram'] },
      { title: 'Correlation vs. causation', description: 'Reading a correlation coefficient correctly and naming likely confounding variables.', outcomes: ['Explain a spurious correlation using a real example'] },
      { title: 'Hypothesis testing', description: 'Null vs. alternative hypothesis, p-values, and significance thresholds explained in plain language.', outcomes: ['Interpret a p-value correctly', 'State a testable hypothesis for a business question'] },
      { title: 'Sampling basics', description: 'Sample size, sampling bias, and what a confidence interval actually means.', outcomes: ['Identify a biased sample', 'Explain a confidence interval in plain words'] },
    ],
  },
  'data-thinking': {
    category: 'Foundations',
    subtopics: [
      { title: 'Framing a question', description: 'Turning a vague prompt like "sales feel slow" into a specific, measurable question with a metric and time window.', outcomes: ['Rewrite a vague ask as a measurable question'] },
      { title: 'Choosing a metric', description: 'Picking the right metric and denominator for a situation — rate vs. count, per-user vs. total.', outcomes: ['Choose between a rate and a raw count for a given question'] },
      { title: 'Data sources', description: 'Knowing where the needed data likely lives — database, spreadsheet, event log, or third-party — and its limitations.', outcomes: ['List where you would find the data for a given question'] },
      { title: 'Evidence and decisions', description: 'Identifying what result would actually change the decision being made, before you start analyzing.', outcomes: ['State what evidence would change a stakeholder\'s mind'] },
    ],
  },
  'sql-select': {
    category: 'SQL',
    subtopics: [
      { title: 'Selecting columns', description: 'SELECT syntax, column lists vs. SELECT *, and why explicit columns are safer in production queries.', outcomes: ['Select only the needed columns from a table'] },
      { title: 'Aliases', description: 'Renaming columns and tables with AS to make query output and joins more readable.', outcomes: ['Use a column alias to make output readable'] },
      { title: 'Sorting', description: 'ORDER BY with ASC/DESC, including sorting on multiple columns with mixed direction.', outcomes: ['Sort results by two columns with mixed direction'] },
      { title: 'Limiting results', description: 'LIMIT/TOP and why it matters when exploring an unfamiliar or very large table.', outcomes: ['Return only the top N rows of a result'] },
    ],
  },
  'sql-filtering': {
    category: 'SQL',
    subtopics: [
      { title: 'WHERE basics', description: 'Comparison operators — =, !=, >, <, BETWEEN, IN, LIKE — and how each narrows a result set.', outcomes: ['Filter rows using a range and a list of values'] },
      { title: 'Combining conditions', description: 'AND, OR, NOT, and how operator precedence silently changes results without parentheses.', outcomes: ['Combine AND/OR correctly using parentheses'] },
      { title: 'NULL handling', description: 'Why NULL is not a value that can be compared with =, and using IS NULL / IS NOT NULL instead.', outcomes: ['Filter rows with and without NULLs correctly'] },
      { title: 'Pattern matching', description: 'LIKE and wildcard characters for partial text matches.', outcomes: ['Write a LIKE pattern for a partial text match'] },
    ],
  },
  'sql-aggregation': {
    category: 'SQL',
    subtopics: [
      { title: 'Aggregate functions', description: 'COUNT, SUM, AVG, MIN, MAX — and the fact that most of them silently ignore NULLs.', outcomes: ['Choose the right aggregate function for a question'] },
      { title: 'GROUP BY', description: 'Grouping rows into summary buckets, and which selected columns must appear in the GROUP BY.', outcomes: ['Write a GROUP BY with two grouping columns'] },
      { title: 'HAVING vs. WHERE', description: 'Filtering groups after aggregation with HAVING, instead of filtering rows before it with WHERE.', outcomes: ['Use HAVING to filter on an aggregated value'] },
      { title: 'Common aggregation mistakes', description: 'Mixing aggregated and non-aggregated columns, and double-counting rows from a join before aggregating.', outcomes: ['Spot a query that would double-count rows'] },
    ],
  },
  'sql-joins': {
    category: 'SQL',
    subtopics: [
      { title: 'INNER JOIN', description: 'Matching only the rows that exist in both tables on the join key.', outcomes: ['Write an INNER JOIN across two tables'] },
      { title: 'LEFT JOIN', description: 'Keeping every row from the left table even when there is no match, and what the resulting NULLs mean.', outcomes: ['Write a LEFT JOIN and explain the resulting NULLs'] },
      { title: 'Joining multiple tables', description: 'Chaining three or more tables together through shared keys in a single query.', outcomes: ['Join three tables together in one query'] },
      { title: 'Avoiding row explosion', description: 'Why a join can silently multiply rows, and how to check row counts before trusting a result.', outcomes: ['Detect and fix an accidental row duplication from a join'] },
    ],
  },
  'sql-ctes': {
    category: 'SQL',
    subtopics: [
      { title: 'WITH syntax', description: 'Naming a common table expression and referencing it later in the same query.', outcomes: ['Write a query using a single CTE'] },
      { title: 'Chaining CTEs', description: 'Building a multi-step query as a readable sequence of named steps, each building on the last.', outcomes: ['Chain two CTEs where the second uses the first'] },
      { title: 'CTEs vs. subqueries', description: 'Why a CTE is usually easier to read and debug than a deeply nested subquery.', outcomes: ['Refactor a nested subquery into a CTE'] },
      { title: 'Recursive CTEs (intro)', description: 'What a recursive CTE is for, conceptually — traversing hierarchical or sequential data.', outcomes: ['Explain when you would need a recursive CTE'] },
    ],
  },
  'sql-window-functions': {
    category: 'SQL',
    subtopics: [
      { title: 'OVER and PARTITION BY', description: 'Computing a value per group without collapsing the underlying rows, unlike GROUP BY.', outcomes: ['Partition a calculation by a category column'] },
      { title: 'Ranking functions', description: 'ROW_NUMBER, RANK, and DENSE_RANK, and how each behaves differently when values tie.', outcomes: ['Pick the right ranking function for a tie scenario'] },
      { title: 'Running totals', description: 'Using SUM() OVER with an ORDER BY to compute a cumulative total.', outcomes: ['Compute a running total by date'] },
      { title: 'LAG and LEAD', description: 'Comparing a row to the previous or next row in a defined order — e.g. month-over-month change.', outcomes: ['Compute month-over-month change using LAG'] },
    ],
  },
  'python-fundamentals': {
    category: 'Python',
    subtopics: [
      { title: 'Variables & data types', description: 'Numbers, strings, booleans, lists, and dictionaries — the building blocks of every script.', outcomes: ['Store and manipulate data using lists and dicts'] },
      { title: 'Control flow', description: 'if/else branching and for/while loops for repeating and conditional logic.', outcomes: ['Write a loop that processes a list conditionally'] },
      { title: 'Functions', description: 'Defining functions with parameters, return values, and default arguments for reusable logic.', outcomes: ['Write a reusable function with parameters and a return value'] },
      { title: 'Files & errors', description: 'Reading and writing files, and handling exceptions gracefully with try/except.', outcomes: ['Read a CSV file and handle a missing-file error'] },
    ],
  },
  numpy: {
    category: 'Python',
    subtopics: [
      { title: 'Arrays', description: 'Creating and indexing 1D and 2D NumPy arrays, including slicing.', outcomes: ['Slice a 2D array by row and column'] },
      { title: 'Vectorized operations', description: 'Performing math on an entire array at once instead of looping element by element.', outcomes: ['Rewrite a loop-based calculation as a vectorized operation'] },
      { title: 'Broadcasting', description: 'How NumPy applies an operation across arrays of mismatched shapes without an explicit loop.', outcomes: ['Explain the result of a broadcasting operation'] },
      { title: 'Aggregations', description: 'sum, mean, min, and max computed along a specific array axis.', outcomes: ['Compute a column-wise average on a 2D array'] },
    ],
  },
  pandas: {
    category: 'Python',
    subtopics: [
      { title: 'DataFrames & Series', description: 'Loading tabular data and inspecting its shape, column types, and first/last rows.', outcomes: ['Load a CSV and inspect its structure'] },
      { title: 'Selecting & filtering', description: 'Using loc/iloc for position- and label-based selection, and boolean masks for filtering.', outcomes: ['Filter rows using a boolean condition'] },
      { title: 'Missing data', description: 'Detecting NaNs and deliberately choosing to drop, fill, or flag them — never silently.', outcomes: ['Decide and apply a missing-data strategy with justification'] },
      { title: 'GroupBy', description: 'Splitting data into groups, applying a calculation, and combining the results with groupby().', outcomes: ['Summarize data with groupby and agg'] },
      { title: 'Merging', description: 'Combining two DataFrames with the correct join type and key, without losing or duplicating rows.', outcomes: ['Merge two DataFrames without losing or duplicating rows'] },
    ],
  },
  charts: {
    category: 'Visualization',
    subtopics: [
      { title: 'Chart types', description: 'Bar, line, scatter, and histogram charts, and which business question each one actually answers.', outcomes: ['Match a chart type to a specific business question'] },
      { title: 'Misleading charts', description: 'Truncated axes, unnecessary 3D effects, and other common distortions to avoid.', outcomes: ['Spot a misleading chart and explain why it misleads'] },
      { title: 'Labeling', description: 'Titles, axis labels, and legends that let a chart stand on its own without narration.', outcomes: ['Label a chart so it needs no verbal explanation'] },
    ],
  },
  'dashboard-design': {
    category: 'Visualization',
    subtopics: [
      { title: 'KPI layout', description: 'Placing the single most important number where a viewer sees it first, with clear visual hierarchy.', outcomes: ['Design a KPI-first dashboard layout'] },
      { title: 'Interactivity', description: 'Filters and slicers that update every chart on the dashboard consistently.', outcomes: ['Add a working filter that updates multiple charts at once'] },
      { title: 'Publishing & sharing', description: 'Exporting or publishing a dashboard so stakeholders can actually access and use it.', outcomes: ['Publish a shareable, working dashboard'] },
    ],
  },
  storytelling: {
    category: 'Visualization',
    subtopics: [
      { title: 'Leading with the finding', description: 'Structuring a summary so the conclusion comes first, not buried at the end.', outcomes: ['Write a finding-first summary of an analysis'] },
      { title: 'Narrative structure', description: 'Context, finding, so-what, and recommendation — the four-part shape of a persuasive analysis.', outcomes: ['Structure a full narrative for one completed analysis'] },
      { title: 'Anticipating questions', description: 'Pre-empting the obvious follow-up question before a stakeholder has to ask it.', outcomes: ['List the two most likely follow-up questions for a finding'] },
    ],
  },
  'business-analytics': {
    category: 'Business Analytics',
    subtopics: [
      { title: 'Core metrics', description: 'Retention, churn, and conversion rate — and how each is defined precisely enough to be trusted.', outcomes: ['Define and calculate a standard business metric'] },
      { title: 'Funnels', description: 'Reading a multi-step conversion funnel and finding the single biggest drop-off point.', outcomes: ['Identify the weakest step in a funnel'] },
      { title: 'A/B testing basics', description: 'Designing a simple experiment and interpreting whether its result is meaningful.', outcomes: ['Design an A/B test and state a decision rule in advance'] },
      { title: 'Segmentation', description: 'Slicing a metric by segment to find which group is actually driving a change.', outcomes: ['Segment a metric change to find its underlying driver'] },
    ],
  },
  'portfolio-building': {
    category: 'Portfolio',
    subtopics: [
      { title: 'README writing', description: 'Presenting problem, approach, tools, and findings in a format a hiring manager can scan in minutes.', outcomes: ['Write a complete, scannable project README'] },
      { title: 'Publishing on GitHub', description: 'Making a repository public, well-organized, and understandable to a stranger.', outcomes: ['Publish a clean, working public repository'] },
      { title: 'Choosing what to show', description: 'Selecting the 3-4 projects that best represent the skills your target role actually needs.', outcomes: ['Select and justify your best 3-4 portfolio projects'] },
    ],
  },
  'job-preparation': {
    category: 'Career',
    subtopics: [
      { title: 'Resume framing', description: 'Writing outcome-based bullets ("reduced X by Y%") instead of a list of tasks performed.', outcomes: ['Rewrite a task-based resume bullet as an outcome-based one'] },
      { title: 'Behavioral interviews', description: 'Structuring an answer with situation, task, action, and result (STAR).', outcomes: ['Answer a behavioral question using the STAR structure'] },
      { title: 'Technical interviews', description: 'Talking through a SQL or Python problem out loud while writing it, not just silently solving it.', outcomes: ['Narrate your query logic clearly while writing it'] },
      { title: 'Walking through a project', description: 'Summarizing a portfolio project clearly and confidently in under three minutes.', outcomes: ['Present one portfolio project clearly in under 3 minutes'] },
    ],
  },
};

for (const [id, patch] of Object.entries(skillPatches)) {
  mergeWrite(SKILLS_DIR, id, patch);
}

mergeWrite(ROADMAPS_DIR, 'data-analyst', {
  audience: 'First-time data job seekers, Excel-heavy analysts leveling up, and career switchers who want a business-facing, SQL-and-dashboards role.',
});

console.log(`Enriched ${Object.keys(skillPatches).length} Data Analyst skills with category + subtopics, and set roadmap audience.`);
