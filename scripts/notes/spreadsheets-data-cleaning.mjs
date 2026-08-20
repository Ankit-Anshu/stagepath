import { createSkill } from './_create.mjs';

createSkill('remove-duplicates', {
  title: 'Remove Duplicates',
  category: 'Spreadsheets',
  what_is_it: 'A built-in tool that finds and removes exact duplicate rows from a range, based on one or more chosen columns.',
  why_it_matters: 'Duplicate rows silently inflate totals and counts — this is the standard, fast, built-in way to find and remove them without writing a formula.',
  prerequisites: ['working-days'],
  objectives: ['Use Remove Duplicates to clean a dataset', 'Choose the right columns to check for duplication'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions', 'r-kaggle-data-cleaning'],
  practice: [{ id: 'ex-remove-duplicates-1', title: 'Deduplicate a customer list', description: 'Given a customer list with some exact duplicate rows, use Remove Duplicates to clean it, choosing the correct columns to check.' }],
  verify: ['Only genuine exact duplicates are removed', 'The correct columns were selected for the duplicate check'],
  note: `
## 🎯 What is it?

**Remove Duplicates** is a built-in spreadsheet tool that finds and removes exact duplicate rows from a range, based on one or more columns you choose to check.

## 💡 Why is it important?

Duplicate rows silently inflate totals and counts — a double-submitted order counted twice overstates revenue, a duplicated customer record overstates customer count. This is the standard, fast, built-in way to find and remove them without writing a formula from scratch.

## Core concept

You select a range, run Remove Duplicates, and choose **which columns** to check for duplication — this choice matters enormously:

| Columns checked | Effect |
|---|---|
| All columns | Only removes rows that are identical across every single column |
| Just a key column (e.g., email) | Removes any row sharing that value, even if other columns differ |

## 📊 Example

| order_id | customer | amount |
|---|---|---|
| 1 | Ana Silva | 200 |
| 2 | Ana Silva | 200 |
| 3 | Wei Chen | 150 |

If Remove Duplicates checks **all columns**, row 2 (identical to row 1 in every column *except* order_id, which usually isn't included in the check if it's a unique key) may or may not be flagged depending on which columns are selected — this is exactly why choosing the right columns matters. Checking just \`customer\` + \`amount\` would flag row 2 as a duplicate of row 1.

## Multiple examples

**Beginner:** Removing exact duplicate rows from a small manually-checked list.
**Intermediate:** Choosing to check only a subset of columns (like email) rather than every column, to catch near-duplicate records that differ in an unimportant field.
**Real-world:** Cleaning a customer export merged from two systems, where the same customer might appear twice with slightly different formatting in one field — first standardizing that field (with TRIM/UPPER), then running Remove Duplicates checking the standardized key column specifically.

## ⚠️ Common mistakes

- **Running Remove Duplicates before standardizing text (casing, spacing).** Two rows that are the "same" customer but differ by a trailing space or casing won't be caught as duplicates unless the text is cleaned first (see [TRIM](/skills/trim-function), [UPPER](/skills/upper-function)).
- **Checking every column when only a key column should matter.** If a legitimate second row differs slightly in a non-key column, checking all columns won't catch it as a duplicate, potentially leaving real duplicates in the data.
- **Not keeping a backup before running Remove Duplicates.** It permanently deletes rows — always work on a copy or verify the result carefully afterward.

## Real-world Data Analyst use cases

- **Data cleaning:** removing duplicate customer or transaction records before analysis.
- **List merging:** cleaning up a combined mailing or contact list built from multiple source files.

## Related concepts

\`\`\`
Working Days → Remove Duplicates ← you are here → Text to Columns → Find & Replace
\`\`\`
Connects directly to the duplicate-detection principles in [Data Cleaning & Quality](/skills/data-cleaning) and the [COUNTIF](/skills/countif-function)-based manual duplicate check.

## Practice questions

### Easy
1. What's the first step you should take before running Remove Duplicates on a text-based key column?

### Interview/Advanced
2. Why might choosing "check all columns" fail to catch two rows that represent the same real-world duplicate?

<details><summary><strong>Answer / Solution</strong></summary>

1. Standardize the text (trim extra spaces, fix inconsistent casing) — otherwise two rows that are really the same value won't be recognized as duplicates due to a formatting difference.
2. If any single column differs even slightly between the two rows (a typo, a different timestamp, an extra space in an unrelated field), checking "all columns" means the rows won't be considered identical, even though they represent the same real-world record — checking only the true key column(s) catches this correctly.

</details>

## 🎤 Interview preparation

**Q: What should you do before running Remove Duplicates on a dataset with potential formatting inconsistencies?**
Short answer: Standardize the relevant text columns first (trim spaces, standardize casing) — otherwise duplicate rows that differ only by formatting won't be recognized and removed.

## Best practices

- Standardize text formatting before running Remove Duplicates.
- Choose the specific key column(s) to check, rather than defaulting to every column.
- Keep a backup of the original data before permanently removing rows.

---

### ⚡ Quick Revision

**Remove Duplicates** → built-in tool to find and delete exact duplicate rows
**Rule:** standardize text formatting first, and choose columns to check deliberately
`,
});

createSkill('text-to-columns', {
  title: 'Text to Columns',
  category: 'Spreadsheets',
  what_is_it: 'Splitting one column of combined text into multiple separate columns, based on a delimiter (like a comma) or a fixed width.',
  why_it_matters: 'Data is often imported as one combined field ("City, State") that needs to be split apart before it can be analyzed or filtered by its individual parts.',
  prerequisites: ['remove-duplicates'],
  objectives: ['Split a combined text column into separate columns using a delimiter', 'Explain when fixed-width splitting is needed instead of a delimiter'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-text-to-columns-1', title: 'Split a combined address field', description: 'Given a "City, State" column, use Text to Columns to split it into two separate columns.' }],
  verify: ['Text is correctly split into the intended separate columns', 'No data is lost or misaligned during the split'],
  note: `
## 🎯 What is it?

**Text to Columns** splits one column of combined text into multiple separate columns, based on a **delimiter** (a character like a comma or space) or a **fixed width** (a consistent character position).

## 💡 Why is it important?

Data is often imported as one combined field — "City, State" or "First Last" — that needs to be split apart into its individual parts before it can be properly analyzed, filtered, or sorted by just the city, just the state, or just the last name.

## Core concept

| Split method | Use when |
|---|---|
| Delimiter | The combined value has a consistent separator character (comma, space, dash) |
| Fixed width | Every value has the same total length, with fields at consistent character positions |

## 📊 Example

| A |
|---|
| Springfield, IL |
| Chicago, IL |

Running Text to Columns with a **comma** delimiter splits this into:

| A | B |
|---|---|
| Springfield | IL |
| Chicago | IL |

## Multiple examples

**Beginner:** Splitting a "First Last" name column into separate First and Last columns using a space delimiter.
**Intermediate:** Splitting a fixed-width legacy export (where every field always occupies exact character positions) using the fixed-width option instead of a delimiter.
**Real-world:** Splitting a "City, State ZIP" combined address field into three separate columns for proper geographic analysis, after first confirming the delimiter pattern is consistent across every row.

## ⚠️ Common mistakes

- **Running Text to Columns without checking that every row follows the same delimiter pattern.** A row with an unexpected extra comma, or missing the delimiter entirely, will split incorrectly or misalign with the rest of the data.
- **Overwriting adjacent columns accidentally.** Text to Columns writes the split results starting in the original column and extending rightward — if there's existing data in the columns immediately to the right, it can be overwritten without warning.
- **Not choosing the correct delimiter**, resulting in a split that's either too granular (splitting on every space in a multi-word value) or not granular enough.

## Real-world Data Analyst use cases

- **Data cleaning:** splitting a combined address, name, or category field imported from another system into properly separated, analyzable columns.

## Related concepts

\`\`\`
Remove Duplicates → Text to Columns ← you are here → Find & Replace → Data Validation
\`\`\`
The formula-based alternative to this tool uses [LEFT](/skills/left-function), [RIGHT](/skills/right-function), [MID](/skills/mid-function), and [FIND](/skills/find-function) together — Text to Columns is the faster, no-formula version for a one-time cleanup.

## Practice questions

### Easy
1. What's the difference between splitting by delimiter and splitting by fixed width?

### Interview/Advanced
2. Why should you insert empty columns to the right of the source column before running Text to Columns?

<details><summary><strong>Answer / Solution</strong></summary>

1. Delimiter splitting divides text at a chosen separator character (like a comma); fixed-width splitting divides text at consistent character positions, regardless of what character is there — used when there's no consistent separator but every field has a predictable length.
2. Text to Columns writes its split results into the columns immediately to the right of the source column, and will silently overwrite any existing data there — inserting empty columns first (or copying the source data to a scratch area) protects against accidental data loss.

</details>

## 🎤 Interview preparation

**Q: When would you use Text to Columns instead of a formula-based approach (LEFT/RIGHT/FIND)?**
Short answer: For a one-time cleanup of a column with a consistent delimiter or fixed-width pattern, Text to Columns is faster and doesn't require writing a formula — a formula-based approach is better when the split needs to stay dynamic and update automatically as new data is added.

## Best practices

- Verify the delimiter pattern is consistent across every row before running Text to Columns.
- Protect against overwriting adjacent data by inserting empty columns first.

---

### ⚡ Quick Revision

**Text to Columns** → splits one column into several, by delimiter or fixed width
**Watch for:** overwriting adjacent columns, inconsistent delimiter patterns across rows
`,
});

createSkill('find-and-replace', {
  title: 'Find & Replace',
  category: 'Spreadsheets',
  what_is_it: 'A built-in tool for finding every occurrence of a specific value across a sheet (or workbook) and replacing it, without writing a formula.',
  why_it_matters: 'The fastest way to fix a recurring typo, standardize a value, or update a reference across an entire sheet in one action.',
  prerequisites: ['text-to-columns'],
  objectives: ['Use Find & Replace to fix a value across a range', 'Explain the risk of a "Replace All" without reviewing matches first'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-find-replace-1', title: 'Fix a recurring typo', description: 'Given a column with a consistent misspelling of a category name, use Find & Replace to fix every occurrence at once.' }],
  verify: ['Every intended occurrence is correctly replaced', 'No unintended values were accidentally changed'],
  note: `
## 🎯 What is it?

**Find & Replace** is a built-in tool for finding every occurrence of a specific value across a sheet (or an entire workbook) and replacing it — without writing a [SUBSTITUTE](/skills/substitute-function) formula.

## 💡 Why is it important?

It's the fastest way to fix a recurring typo, standardize an inconsistent value, or update a reference across many cells in one action — a one-time interactive cleanup tool, as opposed to SUBSTITUTE's formula-based, repeatable approach.

## Core concept

| Option | What it controls |
|---|---|
| Match case | Whether "Sale" and "sale" are treated as different |
| Match entire cell contents | Whether a partial match inside a longer value also counts |
| Within: Sheet vs. Workbook | Whether the search applies to just the current sheet or every sheet |
| Replace vs. Replace All | Review and confirm each match individually, or replace every match at once |

## 📊 Example

A category column has "Electornics" misspelled consistently across 200 rows.

**Find & Replace:** Find "Electornics", Replace with "Electronics", **Replace All**.

**Explanation:** All 200 occurrences are fixed in one action — far faster than manually correcting each cell, or building a formula for a genuinely one-time fix.

## Multiple examples

**Beginner:** Fixing a single recurring typo across a column.
**Intermediate:** Using "Match entire cell contents" to avoid accidentally replacing a partial match inside a longer, unrelated value.
**Real-world:** Standardizing an inconsistent category label ("USA" vs. "United States") across an entire workbook (not just one sheet) using the "Within: Workbook" option, ensuring the fix applies everywhere the value appears.

## ⚠️ Common mistakes

- **Using "Replace All" without first checking how many matches exist**, or reviewing a few to confirm the search term isn't also matching something unintended (like a partial match inside a different, longer word).
- **Forgetting "Match entire cell contents"** when only a full-value match should be replaced, accidentally replacing a substring within a longer, unrelated value.
- **Running a workbook-wide replace when only one sheet was intended**, unintentionally changing data on other sheets.

## Real-world Data Analyst use cases

- **Data cleaning (one-time fixes):** correcting a known, consistent typo or outdated label across a sheet or workbook.

## Related concepts

\`\`\`
Text to Columns → Find & Replace ← you are here → Data Validation → Conditional Formatting
\`\`\`
The formula-based, repeatable equivalent is [SUBSTITUTE](/skills/substitute-function) — Find & Replace is the faster, interactive, one-time version.

## Practice questions

### Easy
1. What's the risk of using "Replace All" without first reviewing the matches?

### Interview/Advanced
2. When would you use Find & Replace instead of a SUBSTITUTE formula, and vice versa?

<details><summary><strong>Answer / Solution</strong></summary>

1. The search term might unintentionally match something other than what was intended (like a substring inside an unrelated longer value), silently corrupting data that shouldn't have changed.
2. Find & Replace fits a one-time, interactive fix where reviewing and confirming matches is valuable; SUBSTITUTE fits a repeatable, formula-driven fix that needs to reapply automatically every time new data is added or the sheet recalculates.

</details>

## 🎤 Interview preparation

**Q: Why might you preview matches before clicking "Replace All"?**
Short answer: To confirm the search term isn't accidentally matching something unintended, like a partial match inside a longer, unrelated value — previewing prevents silently corrupting data that shouldn't have changed.

## Best practices

- Preview or spot-check matches before using Replace All on a large range.
- Use "Match entire cell contents" whenever only a full-value match should be replaced.

---

### ⚡ Quick Revision

**Find & Replace** → fast, interactive, one-time fix across a sheet or workbook
**vs. SUBSTITUTE:** a formula-based, repeatable alternative for ongoing data
`,
});

createSkill('data-validation', {
  title: 'Data Validation',
  category: 'Spreadsheets',
  what_is_it: 'Restricting what can be entered into a cell — a dropdown list, a number range, or a custom rule — to prevent bad data from being entered in the first place.',
  why_it_matters: 'Preventing a data-quality problem at entry time is far more effective than cleaning it up after the fact — Data Validation stops many errors before they ever happen.',
  prerequisites: ['find-and-replace'],
  objectives: ['Add a dropdown list to a cell using Data Validation', 'Restrict a cell to a specific number range or format'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-data-validation-1', title: 'Add a category dropdown', description: 'Add a Data Validation dropdown to a category column, limiting entries to a fixed list of approved categories.' }],
  verify: ['Dropdown correctly restricts entry to the approved list', 'An out-of-range or invalid entry is correctly blocked or flagged'],
  note: `
## 🎯 What is it?

**Data Validation** restricts what can be entered into a cell — a dropdown list of approved values, a number range, a date range, or a custom rule — to prevent bad data from being entered in the first place.

## 💡 Why is it important?

Preventing a data-quality problem **at entry time** is far more effective than cleaning it up afterward — Data Validation stops many common errors (a typo'd category, an impossible date, a number outside a valid range) before they ever make it into the dataset.

## Core concept

| Validation type | Example |
|---|---|
| List (dropdown) | Restrict a "Status" column to exactly "Pending," "Shipped," "Delivered" |
| Number range | Restrict a "Discount %" cell to between 0 and 100 |
| Date range | Restrict a "Delivery Date" to today or later |
| Custom formula | Any rule expressible as a TRUE/FALSE formula |

## 📊 Example

A "Region" column should only ever contain "West," "East," "North," or "South."

**Setup:** Data Validation → List → source: \`West,East,North,South\`.

**Explanation:** Anyone entering data into this column now sees a dropdown instead of a free-text field — "west" (lowercase), "Wast" (typo), or "Region 1" (an unapproved value) are no longer possible, eliminating an entire category of downstream cleaning work (like the casing standardization covered in [UPPER](/skills/upper-function)).

## Multiple examples

**Beginner:** Adding a Yes/No dropdown to a cell.
**Intermediate:** Restricting a "Quantity" column to whole numbers greater than 0, rejecting negative or fractional entries.
**Real-world:** Building a data-entry template for a team that regularly logs transactions manually, with Data Validation on every categorical column — eliminating the casing/typo cleanup that would otherwise be needed on every subsequent analysis of that data.

## ⚠️ Common mistakes

- **Adding Data Validation only after a dataset already has inconsistent values.** Validation prevents *future* bad entries; it doesn't automatically fix values already in the sheet.
- **Building a dropdown list that's hard to maintain**, e.g., hardcoding values directly into the validation rule instead of referencing a separate list range that can be updated in one place.
- **Not communicating to data-entry users why a value is being rejected**, leading to confusion — a custom input message or error message helps here.

## Real-world Data Analyst use cases

- **Data collection templates:** any spreadsheet where a team manually logs data benefits enormously from Data Validation on categorical and numeric fields.
- **Preventing downstream cleaning work:** eliminating an entire category of data-cleaning tasks (typos, casing, invalid categories) at the source.

## Related concepts

\`\`\`
Find & Replace → Data Validation ← you are here → Conditional Formatting
\`\`\`
Directly connects to [Data Cleaning & Quality](/skills/data-cleaning) — Data Validation is the "prevention" half of the same problem cleaning solves reactively.

## Practice questions

### Easy
1. What does a "List" Data Validation rule do?

### Interview/Advanced
2. Why is Data Validation considered more effective than cleaning data after the fact?

<details><summary><strong>Answer / Solution</strong></summary>

1. It restricts a cell's entry to a fixed set of approved values, typically shown as a dropdown, preventing free-text entry of anything else.
2. It prevents bad data from ever entering the dataset in the first place, rather than requiring detection and correction after the fact — eliminating typos, inconsistent casing, and invalid categories at the source is more reliable and efficient than catching them downstream.

</details>

## 🎤 Interview preparation

**Q: How would you prevent a "Status" column from accumulating inconsistent free-text entries over time?**
Short answer: Apply Data Validation with a dropdown list of the approved status values, so users can only select from the fixed list instead of typing free text — this eliminates typos and casing inconsistencies at the source.

## Best practices

- Reference a separate, maintainable list range for a dropdown's source, rather than hardcoding values directly into the rule.
- Add a clear input message explaining what's expected, especially for a custom validation rule.

---

### ⚡ Quick Revision

**Data Validation** → restricts what can be entered into a cell (dropdown, number range, custom rule)
**Prevents** bad data at entry time, rather than requiring cleanup afterward
`,
});

createSkill('conditional-formatting-spreadsheets', {
  title: 'Conditional Formatting',
  category: 'Spreadsheets',
  what_is_it: 'Automatically changing a cell\'s appearance (color, bold, an icon) based on its value — highlighting what matters without manually formatting each cell.',
  why_it_matters: 'It\'s how a spreadsheet becomes scannable at a glance, drawing the eye directly to outliers, targets missed, or values that need attention.',
  prerequisites: ['data-validation'],
  objectives: ['Apply a conditional formatting rule based on a value threshold', 'Use a color scale to visualize a range of values'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions', 'r-datavizcatalogue'],
  practice: [{ id: 'ex-conditional-formatting-1', title: 'Highlight underperforming regions', description: 'Apply conditional formatting to a revenue column, highlighting any value below a target threshold in red.' }],
  verify: ['Formatting rule correctly highlights only the intended values', 'Rule does not conflict with or override other formatting unintentionally'],
  note: `
## 🎯 What is it?

**Conditional Formatting** automatically changes a cell's appearance — color, bold, an icon — based on its value, highlighting what matters without manually formatting each cell one at a time.

## 💡 Why is it important?

It's how a spreadsheet becomes scannable **at a glance**, drawing the eye directly to outliers, missed targets, or values needing attention — turning a wall of numbers into something a reader can process in seconds instead of reading every cell.

## Core concept

| Rule type | Use case |
|---|---|
| Highlight cells above/below a value | Flag targets missed or exceeded |
| Color scale | Show a full low-to-high range at a glance |
| Data bars | Compare magnitudes within a column visually, in-cell |
| Custom formula rule | Any condition not covered by a built-in rule type |

## 📊 Example

A revenue column with a target of $10,000 per region.

**Rule:** "Highlight cells less than 10000" → red fill.

**Result:** Any region below target is immediately visible in red, without reading every individual number — a stakeholder scanning the sheet spots the problem region in under a second.

## Multiple examples

**Beginner:** Highlighting any value in a column above a fixed threshold.
**Intermediate:** Applying a red-to-green color scale across a column to show a full performance range at a glance.
**Real-world:** A custom formula rule highlighting an entire row red if that row's status is "Overdue" AND its amount exceeds $1,000 — combining a business rule (built with [AND](/skills/and-function)) directly into the formatting logic, so high-value overdue items visually pop out immediately.

## ⚠️ Common mistakes

- **Overusing conditional formatting** until the sheet is a wall of color and nothing stands out anymore — reserve it for the handful of values that truly need attention (see [Charts & Dashboards](/skills/spreadsheets-charts) for the same principle applied to full dashboards).
- **Relying on color alone without any other cue**, which fails colorblind viewers — see [Color & Accessibility in Visualization](/skills/dataviz-color-accessibility) for the same principle applied more broadly.
- **Applying multiple overlapping rules to the same range without checking rule priority/order**, which can cause an unexpected rule to silently take precedence over the one intended.

## Real-world Data Analyst use cases

- **Any status dashboard:** highlighting metrics that are off target, overdue, or otherwise need attention.
- **Data quality checks:** highlighting cells that fail a validation rule (like an out-of-range value) for quick visual review.

## Related concepts

\`\`\`
Data Validation → Conditional Formatting ← you are here
\`\`\`
This closes the Data Cleaning group. The same conditional-formatting principle scales up to full dashboards in [Charts & Dashboards in Spreadsheets](/skills/spreadsheets-charts).

## Practice questions

### Easy
1. What's the purpose of a color scale conditional formatting rule?

### Interview/Advanced
2. Why is overusing conditional formatting counterproductive?

<details><summary><strong>Answer / Solution</strong></summary>

1. To visualize a full range of values (low to high) at a glance using a gradient of color, making relative magnitude immediately visible without reading every number.
2. If too many rules or colors are applied, nothing stands out anymore — the entire purpose of conditional formatting (drawing attention to what matters) is defeated when everything is highlighted.

</details>

## 🎤 Interview preparation

**Q: How would you make a report immediately show which regions are missing their revenue target?**
Short answer: Apply a conditional formatting rule highlighting any revenue cell below the target value — this makes underperforming regions visible at a glance, without requiring the reader to compare every number manually against the target.

## Best practices

- Reserve conditional formatting for the specific values that need attention — avoid over-formatting a sheet until nothing stands out.
- Pair color-based highlighting with a non-color cue (icon, label) for accessibility.

---

### ⚡ Quick Revision

**Conditional Formatting** → automatic, value-based cell formatting (color, icon, bar)
**Use sparingly:** reserve it for values that genuinely need attention
`,
});
