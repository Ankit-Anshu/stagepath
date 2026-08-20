// Expands spreadsheets-formulas to explicitly name every function a
// beginner Excel/Sheets curriculum covers — IF, DATEDIF, text-cleaning
// functions, and the core aggregate functions — and adds HLOOKUP alongside
// VLOOKUP in spreadsheets-lookup. Chart & pivot table coverage already
// exists as their own skills (spreadsheets-charts, spreadsheets-pivot-tables).
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');

function mergeWrite(id, patch) {
  const file = path.join(SKILLS_DIR, `${id}.yaml`);
  const existing = yaml.load(fs.readFileSync(file, 'utf8')) || {};
  fs.writeFileSync(file, yaml.dump({ ...existing, ...patch }, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}

mergeWrite('spreadsheets-formulas', {
  objectives: [
    'Write a formula that references other cells',
    'Use IF and DATEDIF for conditional and date logic',
    'Clean and combine text with UPPER/LOWER/PROPER, TRIM, REPLACE/SUBSTITUTE, and CONCAT',
    'Use SUM, AVERAGE, COUNT, MIN, and MAX to summarize a range',
    'Use SUMIFS/COUNTIFS to summarize by criteria',
  ],
  subtopics: [
    { title: 'Cell references & ranges', description: 'Relative vs. absolute references ($), and why the difference matters when copying a formula.', outcomes: ['Copy a formula across a range without it breaking'] },
    { title: 'Logical & date functions (IF, DATEDIF)', description: 'IF for branching logic, and DATEDIF for calculating the difference between two dates.', outcomes: ['Write a formula with a nested IF', 'Calculate a duration between two dates with DATEDIF'] },
    { title: 'Text cleaning (UPPER/LOWER/PROPER, TRIM, REPLACE/SUBSTITUTE)', description: 'Standardizing inconsistent text — fixing casing, stripping extra spaces, and replacing specific characters or substrings.', outcomes: ['Standardize inconsistent text casing with UPPER/LOWER/PROPER', 'Remove extra spaces with TRIM and fix a substring with REPLACE/SUBSTITUTE'] },
    { title: 'Combining text (CONCAT)', description: 'Joining values from multiple cells into one, such as building a full name or address from separate columns.', outcomes: ['Combine values from multiple cells into one with CONCAT'] },
    { title: 'Aggregate functions (SUM, AVERAGE, COUNT, MIN, MAX)', description: 'The five functions behind almost every summary number in a spreadsheet.', outcomes: ['Choose the right aggregate function for a given summary'] },
    { title: 'Conditional aggregation (SUMIFS, COUNTIFS)', description: 'SUMIFS, COUNTIFS, and AVERAGEIFS for summarizing by one or more criteria.', outcomes: ['Summarize a column using multiple criteria'] },
  ],
  practice: [
    { id: 'ex-spreadsheet-formulas-1', title: 'Build a conditional summary', description: 'Given a list of transactions, use SUMIFS/COUNTIFS to summarize totals by region and category without a pivot table.' },
    { id: 'ex-spreadsheet-formulas-2', title: 'Clean and combine a contacts list', description: 'Given a messy contacts sheet, standardize name casing, trim extra spaces, fix a substring with SUBSTITUTE, and build a full-name column with CONCAT.' },
  ],
  verify: [
    'Formulas reference cells, not hard-coded values',
    'A formula copied across a range still works correctly',
    'Text is standardized consistently across the whole column',
    'The correct aggregate function is used for each summary',
    'Conditional aggregation matches a manual spot check',
  ],
});

mergeWrite('spreadsheets-lookup', {
  subtopics: [
    { title: 'VLOOKUP & HLOOKUP', description: 'VLOOKUP for matching down a column and HLOOKUP for matching across a row, plus their most common pitfalls.', outcomes: ['Write a VLOOKUP with an exact match', 'Explain when HLOOKUP is the right choice instead of VLOOKUP'] },
    { title: 'XLOOKUP', description: 'Why it fixes VLOOKUP\'s biggest limitations — direction, defaults, and column insertion.', outcomes: ['Replace a VLOOKUP with an XLOOKUP'] },
    { title: 'INDEX-MATCH', description: 'A more flexible two-way lookup pattern that isn\'t limited to the leftmost column.', outcomes: ['Build a two-way lookup with INDEX-MATCH'] },
    { title: 'Handling missing matches', description: 'Wrapping a lookup with IFERROR and designing for the "not found" case.', outcomes: ['Wrap a lookup so a missing match doesn\'t break the sheet'] },
  ],
});

console.log('Expanded spreadsheets-formulas and spreadsheets-lookup with the full function list.');
