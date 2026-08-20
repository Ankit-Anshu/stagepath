// Un-bundles the "Spreadsheet Formulas & Functions" umbrella skill into 10
// separate skills — one per function/function-group — so each shows up as
// its own topic tile directly in the Spreadsheets stage, matching the
// picture exactly instead of being nested as subtopics under one skill.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const ROADMAPS_DIR = path.join(ROOT, 'content', 'roadmaps');

function write(id, data) {
  fs.writeFileSync(path.join(SKILLS_DIR, `${id}.yaml`), yaml.dump(data, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}
function mergeWrite(id, patch) {
  const file = path.join(SKILLS_DIR, `${id}.yaml`);
  const existing = yaml.load(fs.readFileSync(file, 'utf8')) || {};
  fs.writeFileSync(file, yaml.dump({ ...existing, ...patch }, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}

const skills = [
  {
    id: 'if-function', title: 'IF Function',
    what_is_it: 'Returning one value when a condition is true and another when it\'s false — the core building block of conditional logic in a spreadsheet.',
    why_it_matters: 'IF is the gateway to every "if this, then that" rule in a spreadsheet — flagging late orders, grading a score, or labeling a category.',
    objectives: ['Write an IF formula with a true and false result', 'Nest IF statements for more than two outcomes'],
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-if-1', title: 'Flag a threshold', description: 'Write an IF formula that labels each order "Large" or "Standard" based on order value.' }],
    verify: ['IF formula returns the correct result for both branches', 'A nested IF handles more than two outcomes correctly'],
  },
  {
    id: 'datedif-function', title: 'DATEDIF Function',
    what_is_it: 'Calculating the difference between two dates — in days, months, or years — with a single formula.',
    why_it_matters: 'Tenure, age, days-since-signup, and days-overdue are all just date differences. DATEDIF is the direct way to compute them without manual math.',
    objectives: ['Calculate a duration between two dates in days, months, or years'],
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-datedif-1', title: 'Calculate tenure', description: 'Given a signup date column, calculate each customer\'s tenure in months as of today.' }],
    verify: ['DATEDIF result matches a manual calculation', 'Correct unit (day/month/year) is used for the question being asked'],
  },
  {
    id: 'text-upper-lower-proper', title: 'UPPER / LOWER / PROPER',
    what_is_it: 'Standardizing the casing of text — all uppercase, all lowercase, or Proper Case — so the same value doesn\'t appear inconsistently across rows.',
    why_it_matters: 'Inconsistent casing ("john", "JOHN", "John") makes lookups, grouping, and deduplication fail even though the values mean the same thing.',
    objectives: ['Standardize a text column\'s casing with UPPER, LOWER, or PROPER'],
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-case-1', title: 'Standardize a name column', description: 'Given a name column with inconsistent casing, convert it to Proper Case with a formula.' }],
    verify: ['Every value in the column has consistent casing', 'Formula is used instead of manual retyping'],
  },
  {
    id: 'trim-function', title: 'TRIM Function',
    what_is_it: 'Removing extra leading, trailing, and repeated spaces from a text value.',
    why_it_matters: 'Invisible extra spaces are one of the most common reasons a lookup or match silently fails — the values look identical but aren\'t.',
    objectives: ['Remove extra spaces from a text column with TRIM'],
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-trim-1', title: 'Fix a broken lookup', description: 'Given a lookup that fails due to extra spaces, use TRIM to fix the matching column.' }],
    verify: ['Extra spaces are removed without altering the actual text', 'A previously-failing lookup now matches correctly'],
  },
  {
    id: 'text-replace-substitute', title: 'REPLACE / SUBSTITUTE',
    what_is_it: 'Changing part of a text value — REPLACE by position, SUBSTITUTE by matching the exact text to swap.',
    why_it_matters: 'Fixing a recurring typo, removing a unit from a number field, or swapping a delimiter across a whole column is a REPLACE/SUBSTITUTE job, not a manual find-and-fix.',
    objectives: ['Use SUBSTITUTE to replace a specific piece of text', 'Explain when REPLACE (by position) fits better than SUBSTITUTE (by match)'],
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-replace-1', title: 'Clean a formatted number field', description: 'Given a price column stored as text with a currency symbol, use SUBSTITUTE to strip it into a usable number.' }],
    verify: ['Replacement is applied consistently down the column', 'Can explain the difference between REPLACE and SUBSTITUTE'],
  },
  {
    id: 'concat-function', title: 'CONCAT Function',
    what_is_it: 'Joining values from multiple cells into a single text value, such as combining first and last name into a full name.',
    why_it_matters: 'Real data is often split across columns that need to be combined for reporting, matching, or display — CONCAT is how you join them back together.',
    objectives: ['Combine values from multiple cells into one with CONCAT'],
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-concat-1', title: 'Build a full name column', description: 'Given separate first-name and last-name columns, build a single full-name column with CONCAT.' }],
    verify: ['Combined value includes a proper separator (space, comma, etc.)', 'Formula works correctly for every row, including edge cases like a missing middle name'],
  },
  {
    id: 'sum-function', title: 'SUM Function',
    what_is_it: 'Adding up a range of numbers — the single most-used function in any spreadsheet.',
    why_it_matters: 'Almost every business report starts with a total. SUM is the foundation every other aggregate and pivot table builds on.',
    objectives: ['Sum a range of cells correctly, excluding unintended rows'],
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-sum-1', title: 'Total a revenue column', description: 'Sum a revenue column and confirm the total matches a manual spot check on a small sample.' }],
    verify: ['Sum range includes exactly the intended rows', 'Total matches a manual spot check'],
  },
  {
    id: 'average-function', title: 'AVERAGE Function',
    what_is_it: 'Calculating the mean of a range of numbers.',
    why_it_matters: 'Averages are used constantly in reporting — but also frequently misused. Knowing how to compute one is step one to knowing when not to trust it.',
    objectives: ['Calculate the average of a range correctly'],
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-average-1', title: 'Average order value', description: 'Calculate the average order value from a transactions column and sanity-check it against the total and count.' }],
    verify: ['Average is calculated correctly', 'Result is sanity-checked against SUM divided by COUNT'],
  },
  {
    id: 'count-function', title: 'COUNT Function',
    what_is_it: 'Counting how many cells in a range contain a number (COUNT) or aren\'t empty (COUNTA).',
    why_it_matters: 'Counting rows correctly is the basis for almost every rate or percentage calculation — conversion rate, completion rate, and more all start with a correct count.',
    objectives: ['Count numeric entries with COUNT and non-empty entries with COUNTA', 'Explain the difference between COUNT and COUNTA'],
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-count-1', title: 'Count completed orders', description: 'Count how many rows in an orders column represent a completed order, and explain why COUNT or COUNTA was the right choice.' }],
    verify: ['Correct function (COUNT vs. COUNTA) is chosen for the data type', 'Count matches a manual spot check'],
  },
  {
    id: 'min-max-function', title: 'MIN / MAX Functions',
    what_is_it: 'Finding the smallest (MIN) or largest (MAX) value in a range.',
    why_it_matters: 'Spotting the best, worst, earliest, or latest value in a column is a constant need in reporting — and a common way to catch a data-entry error, like an impossible outlier.',
    objectives: ['Find the minimum and maximum value in a range', 'Use MIN/MAX to spot a likely data-entry error'],
    resources: ['r-exceljet-functions'],
    practice: [{ id: 'ex-minmax-1', title: 'Spot an outlier', description: 'Use MAX to find the largest value in a numeric column and determine whether it looks like a real value or a data-entry error.' }],
    verify: ['MIN/MAX correctly identifies the smallest/largest value', 'Can explain whether the extreme value found is plausible or an error'],
  },
];

for (const s of skills) { const { id, ...rest } = s; write(id, { ...rest, category: 'Spreadsheets', prerequisites: [] }); }

// Retire the umbrella skill's use in this roadmap — the granular skills replace it.
fs.rmSync(path.join(SKILLS_DIR, 'spreadsheets-formulas.yaml'), { force: true });
mergeWrite('spreadsheets-lookup', { prerequisites: [] });

const roadmapFile = path.join(ROADMAPS_DIR, 'data-analyst.yaml');
const roadmap = yaml.load(fs.readFileSync(roadmapFile, 'utf8'));
const stage = roadmap.stages.find((s) => s.id === 'spreadsheets');
const newIds = skills.map((s) => s.id);
stage.skills = [
  ...newIds,
  ...stage.skills.filter((id) => id !== 'spreadsheets-formulas'),
];
fs.writeFileSync(roadmapFile, yaml.dump(roadmap, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');

console.log(`Un-bundled into ${skills.length} standalone function skills; Spreadsheets stage now has ${stage.skills.length} topics.`);
