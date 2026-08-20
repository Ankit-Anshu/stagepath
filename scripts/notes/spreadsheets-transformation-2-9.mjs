// data_analyst_roadmap_curriculum.md — Section 02.9 "Data Transformation
// in Excel". A brand-new chapter. "Filtering Data" and "Sorting Data"
// reuse the existing filter-spreadsheets/sort-spreadsheets skills (also
// used by Data Analysis/2.10, matching the doc's own overlap between the
// two chapters) rather than duplicating them. The other 9 bullets are new.
import { createSkill } from './_create.mjs';

createSkill('calculated-columns', {
  title: 'Adding Calculated Columns',
  category: 'Spreadsheets',
  what_is_it: 'Adding a new column whose values are computed from other columns in the same row, rather than typed in directly.',
  why_it_matters: 'It\'s how raw source data becomes analysis-ready — deriving a profit margin, a full name, or a category from existing columns instead of manually entering it.',
  prerequisites: ['sort-spreadsheets'],
  objectives: [
    'Add a calculated column that derives a value from other columns in the same row',
    'Explain why a calculated column stays in sync when source data changes',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-calculated-columns-1', title: 'Derive profit margin', description: 'Given columns for revenue and cost, add a calculated column for profit margin.' },
  ],
  verify: ['Can add a calculated column derived from other columns', 'Can explain why it updates automatically when source data changes'],
  note: `
## 🎯 What is it?

A **calculated column** is a new column whose values are computed with a formula from other columns in the same row — rather than typed in directly. \`profit_margin = (revenue - cost) / revenue\` is a calculated column built from two existing ones.

## 💡 Why is it important?

- It's how raw source data becomes analysis-ready — most useful analytical fields (margin, full name, category, flag) don't exist in the raw import and need to be derived.
- Because it's a formula, it automatically stays in sync if the source data changes — unlike a manually typed value, which would need to be re-entered.

## 📊 Example

| Revenue | Cost | Profit Margin |
|---|---|---|
| 100 | 60 | \`=(A2-B2)/A2\` → 40% |

If \`Cost\` in row 2 later changes from 60 to 70, the \`Profit Margin\` column recalculates automatically to 30% — no manual re-entry needed.

## ⚠️ Common mistakes

- **Hardcoding a calculated value instead of using a formula**, which then silently goes stale the moment the source data changes.
- **Not extending the formula down for every row** after adding new data — a calculated column should cover every row of the dataset, not just the original rows.

## Related concepts

\`\`\`
Sorting Data
  ↓
Adding Calculated Columns ← you are here
  ↓
Conditional Transformations
\`\`\`

## 🎤 Interview preparation

**Q: Why use a calculated column instead of just typing the computed values in manually?**
Short answer: A calculated column stays automatically in sync with its source data — if the underlying revenue or cost changes, the calculated column recalculates instantly, while manually typed values would silently go stale.

---

### ⚡ Quick Revision

**Calculated column** → a new column derived by formula from other columns in the same row
Stays in sync automatically — never hardcode a value that should be derived.
`,
});

createSkill('conditional-transformations', {
  title: 'Conditional Transformations',
  category: 'Spreadsheets',
  what_is_it: 'Deriving a column\'s value based on a condition rather than a fixed formula — using IF/IFS to transform data differently depending on what each row contains.',
  why_it_matters: 'Real transformations are rarely one-size-fits-all — bucketing values, flagging exceptions, or applying different logic per category all require conditional logic.',
  prerequisites: ['calculated-columns'],
  objectives: [
    'Build a calculated column using conditional logic',
    'Explain when a conditional transformation is needed instead of a simple formula',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-conditional-transformations-1', title: 'Bucket a numeric column', description: 'Given a column of ages, create a calculated column that buckets each into "Under 18," "18-64," or "65+" using IFS.' },
  ],
  verify: ['Can build a conditional calculated column', 'Can explain a scenario requiring conditional logic over a plain formula'],
  note: `
## 🎯 What is it?

A **conditional transformation** derives a column's value based on a condition, using IF or IFS, rather than a single fixed formula applied uniformly to every row. Bucketing a numeric value into a category, flagging an outlier, or applying different logic depending on another column are all conditional transformations.

## 💡 Why is it important?

- Real transformations are rarely one-size-fits-all — a discount rate might differ by customer tier, or an age needs to become an age *bracket* for reporting — both require conditional logic, not a plain formula.
- It's the pattern that connects the earlier Logical Functions chapter (IF, IFS) directly to real data preparation work.

## 📊 Example

Bucketing an \`Age\` column into ranges:

\`\`\`
=IFS(A2<18, "Under 18", A2<65, "18-64", TRUE, "65+")
\`\`\`

This transforms a raw numeric age into a categorical bucket usable for grouping and reporting — a plain, unconditional formula couldn't produce this branching result.

## ⚠️ Common mistakes

- **Nesting deeply instead of using IFS**, producing a hard-to-read formula (see Nested IF vs. IFS).
- **Forgetting a catch-all final condition**, leaving some rows with no matching bucket and an unexpected result.

## Related concepts

\`\`\`
Adding Calculated Columns
  ↓
Conditional Transformations ← you are here
  ↓
Splitting Columns
\`\`\`

## 🎤 Interview preparation

**Q: How would you turn a raw age column into age brackets for a report?**
Short answer: Build a calculated column using IFS with the bracket boundaries as conditions — e.g., \`IFS(age<18, "Under 18", age<65, "18-64", TRUE, "65+")\` — producing a categorical bucket from a numeric input.

---

### ⚡ Quick Revision

**Conditional transformation** → derive a value using IF/IFS logic, not a single uniform formula
Used for bucketing, flagging, and any per-row branching logic.
`,
});

createSkill('splitting-columns', {
  title: 'Splitting Columns',
  category: 'Spreadsheets',
  what_is_it: 'Breaking one column\'s combined content into two or more separate columns — like splitting "Full Name" into "First Name" and "Last Name."',
  why_it_matters: 'Analysis and lookups often need a specific individual field (just the first name, just the area code) that only exists combined in the source data.',
  prerequisites: ['conditional-transformations'],
  objectives: [
    'Split a column into multiple columns using Text to Columns or a formula',
    'Choose between a delimiter and a fixed-width split',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-splitting-columns-1', title: 'Split a full name', description: 'Given a "Full Name" column, split it into separate "First Name" and "Last Name" columns.' },
  ],
  verify: ['Can split a column using Text to Columns', 'Can choose between delimiter-based and fixed-width splitting'],
  note: `
## 🎯 What is it?

**Splitting columns** breaks one column's combined content into two or more separate columns — most commonly with **Text to Columns** (delimiter-based, like splitting on a space or comma) or fixed-width splitting (when every field occupies the same character positions).

## 💡 Why is it important?

- Analysis and lookups frequently need one specific piece of a combined field — just the area code from a phone number, just the first name from a full name — which only exists bundled together in the raw source data.
- It's a foundational transformation step, usually needed before further calculated columns or lookups can work cleanly.

## 📊 Example

A "Full Name" column contains "Amir Khan." Using **Text to Columns** with a space delimiter splits it into "Amir" (First Name) and "Khan" (Last Name) — two separate, independently usable columns.

## ⚠️ Common mistakes

- **Splitting on a delimiter that isn't consistent across every row** (e.g., some names have a middle name, some don't), producing a misaligned result for exceptions.
- **Overwriting the original combined column** without keeping a backup, making the split hard to redo if the delimiter choice turns out wrong.

## Related concepts

\`\`\`
Conditional Transformations
  ↓
Splitting Columns ← you are here
  ↓
Combining Columns
\`\`\`

## 🎤 Interview preparation

**Q: How would you split a "Full Name" column into separate first and last name columns?**
Short answer: Use Text to Columns with a space as the delimiter (or LEFT/RIGHT/FIND formulas for a more flexible, formula-based split) — checking first whether every row consistently has exactly one space, to avoid misaligned results for exceptions like middle names.

---

### ⚡ Quick Revision

**Splitting columns** → Text to Columns (delimiter or fixed-width) breaks one column into several
Check for inconsistent delimiters (extra spaces, missing parts) before splitting the whole column.
`,
});

createSkill('combining-columns', {
  title: 'Combining Columns',
  category: 'Spreadsheets',
  what_is_it: 'Joining two or more columns\' content into one — like combining "First Name" and "Last Name" into "Full Name" — the reverse operation of splitting.',
  why_it_matters: 'Reports and lookups often need one combined field even when the source data stores it separately.',
  prerequisites: ['splitting-columns'],
  objectives: [
    'Combine multiple columns into one using concatenation or TEXTJOIN',
    'Add a separator correctly when combining columns',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-combining-columns-1', title: 'Combine an address', description: 'Given separate Street, City, and Zip columns, combine them into one formatted "Full Address" column with correct separators.' },
  ],
  verify: ['Can combine columns with & or TEXTJOIN', 'Can add appropriate separators between combined values'],
  note: `
## 🎯 What is it?

**Combining columns** joins two or more columns' content into one — the reverse of splitting. Combining "First Name" and "Last Name" into "Full Name," using \`&\` (concatenation) or the TEXTJOIN function.

## 💡 Why is it important?

- Reports, labels, and lookups often need one combined field (a full name, a formatted address) even when the source data deliberately stores parts separately for flexibility.
- Getting separators right (a space between first/last name, commas in an address) is a small detail that makes a big difference in output quality.

## 📊 Example

\`=A2 & " " & B2\` or \`=TEXTJOIN(" ", TRUE, A2, B2)\` combines "Amir" (A2) and "Khan" (B2) into "Amir Khan" — TEXTJOIN is generally preferred for combining more than two fields, since it handles the separator and empty-value skipping automatically.

## ⚠️ Common mistakes

- **Forgetting the separator**, producing a run-together result like "AmirKhan" instead of "Amir Khan."
- **Not handling blank fields gracefully** — combining a missing middle name with plain \`&\` concatenation can leave an awkward double space; TEXTJOIN's "ignore empty" option handles this better.

## Related concepts

\`\`\`
Splitting Columns
  ↓
Combining Columns ← you are here
  ↓
Changing Data Types
\`\`\`

## 🎤 Interview preparation

**Q: Why might TEXTJOIN be a better choice than plain & concatenation for combining several address fields?**
Short answer: TEXTJOIN handles the separator consistently across many fields at once and can automatically skip empty values, avoiding awkward double separators that plain \`&\` concatenation would produce for a missing field like a blank apartment number.

---

### ⚡ Quick Revision

**Combining columns** → \`&\` or TEXTJOIN joins multiple columns into one
TEXTJOIN handles separators and empty-value skipping more gracefully than plain concatenation.
`,
});

createSkill('changing-data-types', {
  title: 'Changing Data Types',
  category: 'Spreadsheets',
  what_is_it: 'Converting a column from one data type to another — text to number, text to date, number to text — so it behaves correctly in formulas and analysis.',
  why_it_matters: 'A value with the wrong data type looks fine on screen but silently fails at sorting, summing, or filtering correctly until it\'s converted.',
  prerequisites: ['combining-columns'],
  objectives: [
    'Convert a column between text, number, and date data types',
    'Diagnose a data-type mismatch from unexpected formula behavior',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-changing-data-types-1', title: 'Fix a mixed-type column', description: 'Given a column with numbers stored as text, convert the entire column to true numeric values.' },
  ],
  verify: ['Can convert a column from text to number or date', 'Can diagnose a data-type mismatch from formula behavior'],
  note: `
## 🎯 What is it?

**Changing data types** means converting a column from one data type to another — text to number, text to date, number to text — so it behaves correctly in formulas, sorting, and filtering. This directly applies the techniques from Cleaning Numbers and Cleaning Dates as a deliberate, general transformation step.

## 💡 Why is it important?

- A value with the wrong data type can look completely normal on screen but silently fail at summing, sorting chronologically/numerically, or matching in a lookup.
- It's one of the most common, most overlooked data preparation steps — especially with data imported from CSVs, PDFs, or other systems.

## Core concept

| Conversion | Tool |
|---|---|
| Text → Number | \`VALUE()\`, Text to Columns, multiply by 1 |
| Text → Date | \`DATEVALUE()\`, Text to Columns (Date option) |
| Number/Date → Text | \`TEXT()\` |

## 📊 Example

A column imported as text (\`"1204.50"\`, left-aligned) is converted to a true number with \`=VALUE(A2)\` or Text to Columns — after which it can be correctly summed, sorted numerically, and compared with \`>\`/\`<\`.

## ⚠️ Common mistakes

- **Not checking a column's actual data type before building formulas on it** — alignment (left = text, right = number/date) is a fast visual check worth doing early.
- **Converting a column's type without first cleaning obviously invalid entries** (like a stray "$" or "N/A" text mixed into a numeric column), which can cause the conversion itself to fail or error for some rows.

## Related concepts

\`\`\`
Combining Columns
  ↓
Changing Data Types ← you are here
  ↓
Reshaping Data
\`\`\`
Directly builds on Cleaning Numbers and Cleaning Dates from the Data Cleaning chapter.

## 🎤 Interview preparation

**Q: A column of "numbers" won't sum correctly, but visually looks fine. What's the likely cause and fix?**
Short answer: The values are likely stored as text, not true numbers — check alignment (left-aligned suggests text) and convert with VALUE() or Text to Columns to fix the underlying data type before summing.

---

### ⚡ Quick Revision

**Changing data types** → convert text ↔ number ↔ date so formulas, sorting, and filtering work correctly
Check alignment as a fast first diagnostic for a mismatched type.
`,
});

createSkill('reshaping-data', {
  title: 'Reshaping Data',
  category: 'Spreadsheets',
  what_is_it: 'Restructuring a dataset\'s layout — pivoting rows into columns or unpivoting columns into rows — without changing the underlying values themselves.',
  why_it_matters: 'The "right" shape for viewing data (wide, readable) is often the wrong shape for analyzing it (long, consistent) — reshaping bridges the two.',
  prerequisites: ['changing-data-types'],
  objectives: [
    'Explain what reshaping data means, distinct from cleaning or filtering',
    'Identify when a dataset needs to be reshaped before further analysis',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-reshaping-data-1', title: 'Identify a reshape need', description: 'Given a table with a separate column for each month\'s sales, explain how you would reshape it into a "long" format with one row per month per product.' },
  ],
  verify: ['Can explain what reshaping means, distinct from cleaning', 'Can identify a dataset that needs reshaping before analysis'],
  note: `
## 🎯 What is it?

**Reshaping data** restructures a dataset's layout — commonly pivoting (rows → columns) or unpivoting (columns → rows) — without changing any of the underlying values. It's a distinct operation from cleaning (which fixes errors) or filtering (which selects a subset); reshaping changes the data's *shape*.

## 💡 Why is it important?

- The shape that's easiest for a human to *read* (wide, one column per month) is often the wrong shape for a tool to *analyze* (long, one row per month) — pivot tables, charts, and most formulas expect long-format data.
- Recognizing when a dataset needs reshaping — before trying to analyze it in its current shape — saves a lot of wasted effort trying to force the wrong shape to work.

## Core concept

See Wide vs. Long Data for the two shapes reshaping moves between, and Power Query's Pivot/Unpivot tools (covered later in this stage) for the hands-on mechanics.

## 📊 Example

A wide table with columns \`Jan_Sales\`, \`Feb_Sales\`, \`Mar_Sales\` is hard to filter or chart by month directly. Reshaped ("unpivoted") into a long format with columns \`Month\`, \`Sales\` — one row per product per month — it becomes trivial to filter, sum, or chart by month.

## ⚠️ Common mistakes

- **Trying to build a pivot table or chart directly on wide-format data** (one column per period) instead of reshaping it into long format first, leading to awkward, manual workarounds.
- **Reshaping without a clear plan for the result's grain**, producing a reshaped table where it's unclear what one row now represents.

## Related concepts

\`\`\`
Changing Data Types
  ↓
Reshaping Data ← you are here
  ↓
Wide vs Long Data
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between cleaning data and reshaping it?**
Short answer: Cleaning fixes errors in the data itself (missing values, wrong types); reshaping restructures the data's layout (pivoting or unpivoting) without changing any of the actual values — they're independent operations, often both needed on the same dataset.

---

### ⚡ Quick Revision

**Reshaping data** → restructure layout (pivot/unpivot) without changing the underlying values
Distinct from cleaning (fixes errors) and filtering (selects a subset).
`,
});

createSkill('wide-vs-long-data', {
  title: 'Wide vs Long Data',
  category: 'Spreadsheets',
  what_is_it: 'Two ways to lay out the same data — wide format spreads related values across many columns; long format stacks them into fewer columns and more rows.',
  why_it_matters: 'Most analysis tools (pivot tables, GROUP BY, most charts) expect long format — recognizing wide data early tells you a reshape is needed before analysis can proceed.',
  prerequisites: ['reshaping-data'],
  objectives: [
    'Distinguish wide-format data from long-format data',
    'Explain why long format is generally preferred for analysis',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-wide-vs-long-data-1', title: 'Convert wide to long, on paper', description: 'Given a wide table with one column per quarter, sketch its long-format equivalent with a "Quarter" and "Value" column.' },
  ],
  verify: ['Can distinguish wide from long format with an example', 'Can explain why long format suits most analysis tools better'],
  note: `
## 🎯 What is it?

**Wide data** spreads related values across many columns — one column per month, per product, or per category. **Long data** stacks the same information into fewer columns and more rows — one column naming the category, one column holding the value.

\`\`\`
Wide:                          Long:
Product | Jan | Feb | Mar       Product | Month | Sales
Widget  | 100 | 120 | 90        Widget  | Jan   | 100
                                 Widget  | Feb   | 120
                                 Widget  | Mar   | 90
\`\`\`

## 💡 Why is it important?

- Most analysis tools — pivot tables, SQL's \`GROUP BY\`, most charting libraries — expect long format as their input; wide format is easier for a *human* to read at a glance, but harder for a tool to aggregate or filter by the spread-out dimension (month, in the example above).
- Recognizing wide data early is what tells you a reshape (unpivot) is needed before analysis can proceed smoothly.

## 📊 Example

A wide sales table with a column per month can't easily answer "what was total sales in February across all products" with a simple formula — you'd need to reference the Feb column specifically for every product. The same data in long format answers it with one simple \`SUMIFS(sales, month, "Feb")\`, regardless of how many months or products exist.

## ⚠️ Common mistakes

- **Assuming wide format is always "wrong."** It's genuinely the better shape for final display in a report — the mistake is trying to *analyze* wide data directly instead of reshaping it to long format first, then optionally pivoting back to wide for the final presentation.
- **Not recognizing wide data as the reason a formula or pivot table feels awkward to build** — if you're referencing many similarly-named columns in a formula, that's usually a sign the data should be long instead.

## Related concepts

\`\`\`
Reshaping Data
  ↓
Wide vs Long Data ← you are here
  ↓
Preparing Data for Analysis
\`\`\`

## 🎤 Interview preparation

**Q: Why is long-format data generally preferred over wide-format data for analysis?**
Short answer: Long format lets a tool group, filter, or aggregate by the "spread-out" dimension (like month) using a single consistent column, rather than requiring separate logic per wide column — pivot tables, GROUP BY, and most charting tools are all built around this expectation.

---

### ⚡ Quick Revision

**Wide data** → one column per category (e.g., one per month) — easy to read, hard to analyze
**Long data** → one row per category-value pair — harder to read raw, easy to analyze
Reshape wide → long before analyzing; pivot back to wide for final display if needed.
`,
});

createSkill('preparing-data-for-analysis', {
  title: 'Preparing Data for Analysis',
  category: 'Spreadsheets',
  what_is_it: 'Bringing together cleaning, transforming, and reshaping into one final checklist that confirms a dataset is genuinely ready for real analysis.',
  why_it_matters: 'Starting analysis on data that isn\'t actually ready is one of the most common causes of a wrong or contested result discovered late.',
  prerequisites: ['wide-vs-long-data'],
  objectives: [
    'Run through a checklist confirming a dataset is analysis-ready',
    'Explain the cost of skipping preparation and finding a data issue mid-analysis',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-preparing-data-for-analysis-1', title: 'Run the readiness checklist', description: 'Given a dataset, run through a full readiness checklist (grain, types, missing values, duplicates, shape) before starting analysis.' },
  ],
  verify: ['Can list the key checks for analysis-readiness', 'Can explain the cost of skipping preparation'],
  note: `
## 🎯 What is it?

**Preparing data for analysis** is the final checklist step that confirms a dataset is genuinely ready before real analysis begins — bringing together everything from the Data Cleaning and Data Transformation chapters into one deliberate readiness check, rather than discovering a problem mid-analysis.

## 💡 Why is it important?

- Starting analysis on data that isn't actually ready is one of the most common causes of a wrong or contested result discovered *late* — after a chart or report has already been shared.
- A short, deliberate checklist is much cheaper than re-doing an analysis after finding a data issue partway through.

## Core concept

A practical readiness checklist:
- **Grain confirmed** — you know exactly what one row represents.
- **Types correct** — numbers are numbers, dates are dates, not text impersonating either.
- **Missing values handled** — reviewed and deliberately decided (not silently ignored).
- **Duplicates removed** — including business duplicates, not just exact ones.
- **Shape correct** — long format, ready for the analysis technique planned.
- **Scope confirmed** — the data covers the time period and segment the business question actually needs.

## 📊 Example

Before building a "revenue by region" pivot table, a quick readiness pass confirms: the table's grain is one row per order (not per item), the \`region\` column has been standardized (no "NY" vs. "New York" split), \`revenue\` is a true numeric column, and the date range covers the full period the report needs — catching any of these late, after the pivot table and chart are built, costs far more time to fix.

## ⚠️ Common mistakes

- **Skipping a deliberate readiness check** because the data "looks fine" at a glance — many real issues (business duplicates, text-formatted numbers, missing grain confirmation) are invisible on casual inspection.
- **Treating preparation as a one-time step** instead of re-checking it whenever new data is appended to an existing analysis.

## Related concepts

\`\`\`
Wide vs Long Data
  ↓
Preparing Data for Analysis ← you are here
  ↓
Preparing Data for Pivot Tables
\`\`\`

## 🎤 Interview preparation

**Q: What would you check before starting analysis on a dataset you've just received?**
Short answer: Confirm its grain, check that data types are correct (not text pretending to be numbers/dates), handle missing values deliberately, remove duplicates (including business duplicates), confirm the shape fits the planned analysis, and confirm the data actually covers the scope the question needs.

---

### ⚡ Quick Revision

**Preparing data for analysis** → a final readiness checklist: grain, types, missing values, duplicates, shape, scope
Cheaper to check upfront than to discover a problem after a report has already shipped.
`,
});

createSkill('preparing-data-for-pivot-tables', {
  title: 'Preparing Data for Pivot Tables',
  category: 'Spreadsheets',
  what_is_it: 'The specific readiness requirements a source range needs before a Pivot Table will summarize it correctly — no blank rows/columns, one header row, and consistent, long-format data.',
  why_it_matters: 'A pivot table built on a badly-shaped source range fails silently or produces a confusing, incomplete summary — these specific requirements prevent that.',
  prerequisites: ['preparing-data-for-analysis'],
  objectives: [
    'List the structural requirements a pivot table source range needs',
    'Fix a source range that violates one of these requirements',
  ],
  estimated_minutes: 20,
  resources: ['r-ms-pivot-tables'],
  practice: [
    { id: 'ex-preparing-data-for-pivot-tables-1', title: 'Fix a pivot-unfriendly range', description: 'Given a source range with a blank row in the middle and merged header cells, fix it so it\'s ready for a Pivot Table.' },
  ],
  verify: ['Can list the structural requirements for a pivot table source range', 'Can fix a common pivot-table-unfriendly issue'],
  note: `
## 🎯 What is it?

**Preparing data for Pivot Tables** covers the specific structural requirements a source range needs before Excel's Pivot Table tool will summarize it correctly — narrower and more mechanical than the general Preparing Data for Analysis checklist, but just as easy to violate without noticing.

## 💡 Why is it important?

- A pivot table built on a badly-shaped source range doesn't always error clearly — it can silently produce an incomplete or confusing summary, which is worse than an obvious failure.
- These requirements are specific and checkable, making them a fast pre-flight check before building any pivot table.

## Core concept

| Requirement | Why |
|---|---|
| One header row, no merged cells | Pivot Table uses header row values as field names |
| No blank rows or columns within the range | A blank row/column can silently cut off the detected range |
| Consistent data type per column | Mixed text/number in one column causes inconsistent grouping |
| Long format, not wide | Pivot Tables group by column values — wide data doesn't group cleanly |

## 📊 Example

A source range with a blank row separating two "halves" of a table causes Excel to only detect the *first* half as the pivot table's source when auto-selecting the range — silently excluding real data from every summary, with no error raised. Removing the blank row (or manually confirming the full range) fixes it.

## ⚠️ Common mistakes

- **Trusting Excel's auto-detected range without checking it**, especially on a source range with any blank rows/columns — always verify the detected range covers all the actual data.
- **Using merged header cells for readability**, which breaks the Pivot Table's field-name detection — keep the source range's headers in plain, unmerged single cells (merge only in the final presentation, if at all).

## Related concepts

\`\`\`
Preparing Data for Analysis
  ↓
Preparing Data for Pivot Tables ← you are here
\`\`\`
This closes the Data Transformation chapter — the next chapter (Data Analysis) puts a properly-prepared source range to work with Pivot Tables, Sort, Filter, and more.

## 🎤 Interview preparation

**Q: A pivot table seems to be missing some rows of data that clearly exist in the source range. What's a likely cause?**
Short answer: A blank row or column within the source range can cause Excel to auto-detect only part of the range — always verify the pivot table's source range explicitly covers all the actual data, rather than trusting auto-detection on a range with any gaps.

---

### ⚡ Quick Revision

**Pivot table readiness** → one clean header row, no blank rows/columns, consistent types, long format
Always verify the auto-detected source range actually covers all the data.
`,
});

console.log('Created 9 new Data Transformation (2.9) skills.');
