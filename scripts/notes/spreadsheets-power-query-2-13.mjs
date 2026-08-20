// data_analyst_roadmap_curriculum.md — Section 02.13 "Power Query".
// Power Query Introduction, Importing Data, Transformations, Merge
// Queries, Append Queries, Refreshing Data, and Custom Columns reuse
// existing topics (the last via power-query-advanced, which already
// covers custom columns plus the M language as bonus depth). The other
// 10 bullets are new, filling in the doc's full 17-item list.
import { createSkill } from './_create.mjs';

createSkill('power-query-data-types', {
  title: 'Data Types in Power Query',
  category: 'Spreadsheets',
  what_is_it: 'Setting and correcting each column\'s data type inside Power Query, before the data is ever loaded into a worksheet.',
  why_it_matters: 'Fixing a data type here, once, at the source, means every downstream formula, pivot table, and chart automatically inherits the correct type — instead of needing to be fixed after loading.',
  prerequisites: ['power-query-import-data'],
  objectives: [
    'Set a column\'s data type explicitly in Power Query',
    'Explain why fixing data types in Power Query is preferable to fixing them after loading',
  ],
  estimated_minutes: 20,
  resources: ['r-ms-power-query-docs'],
  practice: [
    { id: 'ex-power-query-data-types-1', title: 'Fix imported types', description: 'Given a Power Query import where a date column and a numeric column were both detected as text, explicitly set their correct data types.' },
  ],
  verify: ['Can set a column\'s data type in Power Query', 'Can explain why this is better done in Power Query than after loading'],
  note: `
## 🎯 What is it?

Every column in Power Query has an explicit **data type** (Text, Whole Number, Decimal, Date, Date/Time, True/False) shown as a small icon in the column header — set automatically on import (sometimes incorrectly) and adjustable with a click.

## 💡 Why is it important?

- Fixing a wrong data type here, once, at the source, means every downstream formula, pivot table, and chart built on the loaded data automatically inherits the correct type — directly applying Cleaning Numbers and Cleaning Dates, but solved once per query instead of once per worksheet.
- A wrong data type detected on import (e.g., a date column auto-detected as text) is one of the most common reasons an otherwise-correct Power Query import produces unusable data.

## Core concept

| Icon/Type | Use for |
|---|---|
| ABC (Text) | Names, categories, free text |
| 1.2 (Decimal Number) | Prices, ratios |
| 123 (Whole Number) | Counts, IDs |
| Date | Pure dates |
| Date/Time | Timestamps |

## 📊 Example

A CSV import detects an \`order_date\` column as Text (because the source file used an ambiguous format). Explicitly clicking the column header's type icon and selecting **Date** converts the whole column at once — a single fix here means every worksheet formula or pivot table built afterward already sees correct, sortable dates.

## ⚠️ Common mistakes

- **Trusting Power Query's auto-detected types without checking them**, especially on messy or inconsistently-formatted source data.
- **Fixing data types after loading into the worksheet instead of in Power Query** — this means the fix has to be redone by hand every time the query refreshes with new data, defeating the purpose of an automated pipeline.

## Related concepts

\`\`\`
Importing Data
  ↓
Data Types in Power Query ← you are here
  ↓
Transform Data
\`\`\`

## 🎤 Interview preparation

**Q: Why fix a wrong data type in Power Query rather than in the worksheet after loading?**
Short answer: A fix in Power Query is applied every time the query refreshes, automatically — a fix made only in the worksheet has to be manually redone every time new data is loaded, since Power Query would overwrite it on the next refresh.

---

### ⚡ Quick Revision

**Data types in Power Query** → set explicitly per column (Text, Number, Date, etc.), fixed once at the source
Always fix here, not after loading — the fix then survives every future refresh.
`,
});

createSkill('power-query-filtering', {
  title: 'Filtering in Power Query',
  category: 'Spreadsheets',
  what_is_it: 'Removing rows that don\'t meet a condition, recorded as a permanent, automatically-reapplied step in the query — the Power Query equivalent of a worksheet filter, but baked into the data itself.',
  why_it_matters: 'Unlike a worksheet filter (which just hides rows), a Power Query filter step permanently removes them from the loaded result, and reapplies automatically on every refresh.',
  prerequisites: ['power-query-data-types'],
  objectives: [
    'Filter rows in Power Query based on a column condition',
    'Explain the difference between a Power Query filter and a worksheet Filter',
  ],
  estimated_minutes: 20,
  resources: ['r-ms-power-query-docs'],
  practice: [
    { id: 'ex-power-query-filtering-1', title: 'Filter out test data', description: 'Given an imported dataset containing test/dummy rows, add a Power Query filter step to permanently exclude them from every future refresh.' },
  ],
  verify: ['Can add a filter step in Power Query', 'Can explain how this differs from a worksheet-level Filter'],
  note: `
## 🎯 What is it?

**Filtering** in Power Query removes rows that don't meet a condition — set via the column header's dropdown, just like a worksheet filter — but recorded as a permanent, named step in the query's list of transformations, reapplied automatically every time the query refreshes.

## 💡 Why is it important?

- Unlike a worksheet-level Filter (see Filter, in Excel Data Analysis), which only *hides* rows while leaving them in the underlying data, a Power Query filter step **permanently excludes** them from the loaded result.
- It's how "always exclude test accounts" or "only load the last 2 years" becomes a one-time setup that applies automatically forever after, instead of a filter someone has to remember to reapply.

## 📊 Example

Filtering out rows where \`account_type = "test"\` as a Power Query step means every future refresh automatically excludes test accounts from the loaded data — compared to a worksheet Filter, which would need to be manually reapplied any time the sheet's filter state was cleared or the data was reloaded.

## ⚠️ Common mistakes

- **Confusing a Power Query filter with a worksheet Filter** — assuming filtered-out rows are just "hidden" and can be unhidden, when Power Query filtering genuinely excludes them from the loaded result (though the underlying source data itself is untouched).
- **Filtering too early in the step sequence**, before a needed data type conversion — filtering on a column still typed as text can behave differently than filtering after it's properly typed as a number or date.

## Related concepts

\`\`\`
Data Types in Power Query
  ↓
Filtering ← you are here
  ↓
Removing Columns
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between filtering in Power Query versus using a worksheet's Filter feature?**
Short answer: A Power Query filter permanently excludes rows from the loaded result and reapplies automatically on every refresh; a worksheet Filter just temporarily hides rows in the current view, leaving the underlying data unchanged and needing to be reapplied manually if cleared.

---

### ⚡ Quick Revision

**Filtering in Power Query** → a permanent, automatically-reapplied step that excludes rows from the loaded result
Different from a worksheet Filter, which only hides rows temporarily.
`,
});

createSkill('power-query-removing-columns', {
  title: 'Removing Columns',
  category: 'Spreadsheets',
  what_is_it: 'Deleting columns that aren\'t needed for analysis, as a permanent, repeatable step in a Power Query pipeline.',
  why_it_matters: 'Loading only the columns actually needed keeps the result focused, smaller, and faster — and doing it in Power Query means it happens automatically every refresh.',
  prerequisites: ['power-query-filtering'],
  objectives: [
    'Remove one or more unneeded columns as a Power Query step',
    'Explain the benefit of removing columns in Power Query versus after loading',
  ],
  estimated_minutes: 15,
  resources: ['r-ms-power-query-docs'],
  practice: [
    { id: 'ex-power-query-removing-columns-1', title: 'Trim an import to essentials', description: 'Given an imported table with 20 columns, remove every column not actually needed for a specific report, as a Power Query step.' },
  ],
  verify: ['Can remove columns as a Power Query step', 'Can explain why doing this in Power Query is better than deleting columns after loading'],
  note: `
## 🎯 What is it?

**Removing columns** deletes columns that aren't needed for the analysis at hand, recorded as a step in the query — right-click any column header and choose Remove (or Remove Other Columns to keep only the ones selected).

## 💡 Why is it important?

- Loading only the columns actually needed keeps the result focused, smaller, and faster to work with — a source system export often includes many irrelevant columns for a specific report.
- Doing this in Power Query (rather than deleting columns manually after loading into the worksheet) means it happens automatically on every refresh, without needing to be redone.

## 📊 Example

A source export includes 20 columns, but a specific sales report only needs 5 (date, region, product, quantity, revenue). Using **Remove Other Columns** on those 5 keeps the loaded result focused and small — and if the source export gains a new irrelevant column later, it's automatically excluded too, without any extra work.

## ⚠️ Common mistakes

- **Removing a column that turns out to be needed later**, requiring the step to be found and edited — always double-check which columns a report might need before trimming aggressively.
- **Manually deleting columns after loading into the worksheet** instead of removing them in Power Query — this has to be redone by hand on every refresh.

## Related concepts

\`\`\`
Filtering
  ↓
Removing Columns ← you are here
  ↓
Splitting Columns
\`\`\`

## 🎤 Interview preparation

**Q: A source import has 20 columns but a report only needs 5. What's the best way to trim it in Power Query?**
Short answer: Select the 5 needed columns and use "Remove Other Columns" — this keeps the load focused and automatically excludes any new irrelevant columns the source might add later, unlike manually deleting columns after loading.

---

### ⚡ Quick Revision

**Removing columns** → delete unneeded columns as a repeatable Power Query step
Keeps the loaded result focused and small — and automatically excludes new irrelevant columns on future refreshes.
`,
});

createSkill('power-query-splitting-columns', {
  title: 'Splitting Columns in Power Query',
  category: 'Spreadsheets',
  what_is_it: 'Breaking one Power Query column into several, by a delimiter or by a fixed number of characters — the Power Query equivalent of worksheet Text to Columns, but recorded as a repeatable step.',
  why_it_matters: 'It handles the same problem as worksheet Text to Columns, but automatically reapplies on every refresh instead of needing to be redone by hand each time new data is imported.',
  prerequisites: ['power-query-removing-columns'],
  objectives: [
    'Split a column by delimiter in Power Query',
    'Explain the advantage of splitting columns in Power Query over Text to Columns',
  ],
  estimated_minutes: 20,
  resources: ['r-ms-power-query-docs'],
  practice: [
    { id: 'ex-power-query-splitting-1', title: 'Split a combined field', description: 'Given an imported "Full Name" column, use Power Query\'s Split Column by Delimiter to separate it into First and Last Name columns as a repeatable step.' },
  ],
  verify: ['Can split a column by delimiter in Power Query', 'Can explain the advantage over doing it manually with Text to Columns'],
  note: `
## 🎯 What is it?

**Splitting columns** in Power Query breaks one column into several — by delimiter (a specific character, like a space or comma) or by a fixed number of characters — using **Split Column**, the direct Power Query equivalent of the worksheet's Text to Columns (see Splitting Columns in the Data Transformation chapter).

## 💡 Why is it important?

- It solves the exact same problem as worksheet Text to Columns, but as a recorded, repeatable step — meaning it automatically reapplies to every future refresh, instead of needing to be manually redone each time new data is imported.

## 📊 Example

An imported "Full Name" column ("Amir Khan") is split by the space delimiter into "First Name" and "Last Name" columns using Split Column by Delimiter — and unlike the worksheet version, this split automatically reapplies to every new row of data the next time the query refreshes.

## ⚠️ Common mistakes

- **Splitting on a delimiter that isn't consistent across every row** (some names with a middle name, some without), producing a misaligned result for the exceptions — the same risk as the worksheet version, still worth checking first.
- **Splitting after data has already been filtered or transformed in a way that changes the delimiter's position** — step order matters in Power Query, just as it does in a worksheet formula chain.

## Related concepts

\`\`\`
Removing Columns
  ↓
Splitting Columns in Power Query ← you are here
  ↓
Merging Columns
\`\`\`

## 🎤 Interview preparation

**Q: Why split a "Full Name" column in Power Query rather than with the worksheet's Text to Columns?**
Short answer: A Power Query split is a recorded, repeatable step that automatically reapplies every time the query refreshes with new data — Text to Columns in the worksheet is a one-time operation that would need to be manually redone for every new import.

---

### ⚡ Quick Revision

**Splitting columns in Power Query** → Split Column by Delimiter (or fixed width), recorded as a repeatable step
Same idea as worksheet Text to Columns, but automatically reapplies on every refresh.
`,
});

createSkill('power-query-merging-columns', {
  title: 'Merging Columns in Power Query',
  category: 'Spreadsheets',
  what_is_it: 'Combining two or more columns\' content into one, as a repeatable Power Query step — not to be confused with Merge Queries, which combines two whole tables.',
  why_it_matters: 'It\'s a common, small transformation step, and easy to confuse by name with the much bigger "Merge Queries" operation — knowing the difference matters.',
  prerequisites: ['power-query-splitting-columns'],
  objectives: [
    'Merge two or more columns into one in Power Query',
    'Explain the difference between Merge Columns and Merge Queries',
  ],
  estimated_minutes: 15,
  resources: ['r-ms-power-query-docs'],
  practice: [
    { id: 'ex-power-query-merging-columns-1', title: 'Combine name columns', description: 'Given separate First Name and Last Name columns, use Power Query\'s Merge Columns to combine them into one Full Name column with a space separator.' },
  ],
  verify: ['Can merge columns in Power Query', 'Can explain the difference between Merge Columns and Merge Queries'],
  note: `
## 🎯 What is it?

**Merging columns** in Power Query combines two or more columns' content into one, with a chosen separator — select the columns, right-click, and choose **Merge Columns**. This is a small, single-table operation — distinct from **Merge Queries**, which joins two entirely separate tables together by a shared key.

## 💡 Why is it important?

- It's a common, small transformation step (the Power Query equivalent of worksheet Combining Columns), but its name is easy to confuse with the much larger "Merge Queries" operation — knowing the difference prevents real confusion when following documentation or instructions.

## Core concept

| | Merge Columns | Merge Queries |
|---|---|---|
| Combines | Two+ columns within one table | Two separate tables, by a shared key |
| Result | One new combined column | A new table with columns from both sources |
| Equivalent to | Worksheet concatenation | A spreadsheet lookup or SQL join |

## 📊 Example

Merging "First Name" and "Last Name" columns (with a space separator) into one "Full Name" column is Merge Columns — a small, one-table operation. Combining a "Customers" query with an "Orders" query by matching customer ID is Merge Queries — a completely different, much larger operation.

## ⚠️ Common mistakes

- **Confusing "Merge Columns" with "Merge Queries"** when following instructions or documentation — always double-check which operation is actually meant, since they do very different things.
- **Forgetting to specify a separator**, producing a combined value with no space or delimiter between the original parts.

## Related concepts

\`\`\`
Splitting Columns in Power Query
  ↓
Merging Columns in Power Query ← you are here
  ↓
Merge Queries
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between "Merge Columns" and "Merge Queries" in Power Query?**
Short answer: Merge Columns combines two or more columns *within one table* into a single column (like combining first and last name); Merge Queries joins two entirely separate tables together by a shared key, similar to a SQL join — they're unrelated operations despite the similar name.

---

### ⚡ Quick Revision

**Merge Columns** → combine columns within one table into one (like concatenation)
**Merge Queries** → join two separate tables by a key — a completely different, larger operation
`,
});

createSkill('power-query-pivot-unpivot', {
  title: 'Pivot / Unpivot in Power Query',
  category: 'Spreadsheets',
  what_is_it: 'Reshaping a query\'s columns into rows (Unpivot) or rows into columns (Pivot) — the repeatable, automated Power Query version of the general Reshaping Data concept.',
  why_it_matters: 'Unpivot is one of the most useful Power Query transformations for turning wide, human-readable source exports into the long format most analysis tools expect.',
  prerequisites: ['power-query-merging-columns'],
  objectives: [
    'Unpivot columns into rows to convert wide data to long format',
    'Explain when Pivot (rather than Unpivot) is the appropriate operation',
  ],
  estimated_minutes: 25,
  resources: ['r-ms-power-query-docs'],
  practice: [
    { id: 'ex-power-query-pivot-unpivot-1', title: 'Unpivot a wide export', description: 'Given a source export with a column per month (Jan_Sales, Feb_Sales, Mar_Sales...), use Power Query\'s Unpivot Columns to reshape it into a long "Month, Sales" format.' },
  ],
  verify: ['Can unpivot wide columns into long format', 'Can explain when Pivot rather than Unpivot is appropriate'],
  note: `
## 🎯 What is it?

**Unpivot** turns columns into rows — the standard way to convert wide-format source data (one column per month, per product) into the long format most analysis tools expect (see Wide vs Long Data). **Pivot** does the reverse, turning row values into columns — less commonly needed inside Power Query, since Excel's own Pivot Table usually handles final-stage pivoting.

## 💡 Why is it important?

- Real source exports (especially from older systems or manual reports) are very often wide — Unpivot is one of the single most useful Power Query transformations for making that data usable at all.
- Doing this reshape in Power Query, rather than manually rebuilding the table's layout by hand, means it automatically reapplies to every future data refresh.

## Core concept

\`\`\`
Wide (before Unpivot):              Long (after Unpivot):
Product | Jan | Feb | Mar             Product | Attribute | Value
Widget  | 100 | 120 | 90       →      Widget  | Jan       | 100
                                        Widget  | Feb       | 120
                                        Widget  | Mar       | 90
\`\`\`

To Unpivot: select the columns to unpivot (Jan, Feb, Mar), right-click → **Unpivot Columns**. Power Query automatically creates "Attribute" and "Value" columns from the selected column headers and their values.

## 📊 Example

A monthly sales export with a separate column per month can't be easily summed or charted by month directly. Unpivoting the month columns produces a long-format table with one row per product per month — now trivially summarized with a pivot table or SUMIFS by month, something the original wide layout made awkward.

## ⚠️ Common mistakes

- **Unpivoting columns that shouldn't be combined** (e.g., accidentally including an ID column in the unpivot selection), producing a nonsensical result mixing unrelated fields.
- **Not renaming the generic "Attribute" and "Value" columns** Power Query creates by default, leaving a loaded result with unclear, generic column names.

## Related concepts

\`\`\`
Merging Columns in Power Query
  ↓
Pivot / Unpivot ← you are here
  ↓
Group By
\`\`\`
Directly applies Wide vs Long Data and Reshaping Data from the Data Transformation chapter.

## 🎤 Interview preparation

**Q: A source export has one column per month. How would you reshape it for analysis in Power Query?**
Short answer: Select the month columns and use Unpivot Columns — this converts them into a long-format "Attribute" (month) and "Value" (the figure) pair, one row per original cell, which is far easier to summarize, filter, and chart than the original wide layout.

---

### ⚡ Quick Revision

**Unpivot** → columns → rows (wide → long) · **Pivot** → rows → columns (long → wide)
Unpivot is the most commonly needed of the two when cleaning up a real-world wide export.
`,
});

createSkill('power-query-group-by', {
  title: 'Group By in Power Query',
  category: 'Spreadsheets',
  what_is_it: 'Aggregating a query\'s rows into summarized groups — like SQL\'s GROUP BY or a pivot table — producing one row per group with a chosen summary (sum, count, average).',
  why_it_matters: 'It lets a query pre-aggregate large, detailed data into a smaller, summary-ready result before it\'s even loaded into the worksheet.',
  prerequisites: ['power-query-pivot-unpivot'],
  objectives: [
    'Group and summarize rows using Power Query\'s Group By',
    'Explain when pre-aggregating in Power Query is preferable to loading raw detail and summarizing in a pivot table',
  ],
  estimated_minutes: 20,
  resources: ['r-ms-power-query-docs'],
  practice: [
    { id: 'ex-power-query-group-by-1', title: 'Summarize by region', description: 'Given a detailed transaction-level query, use Group By to produce one row per region with total revenue and order count.' },
  ],
  verify: ['Can group and summarize rows with Group By', 'Can explain a reason to pre-aggregate in Power Query rather than after loading'],
  note: `
## 🎯 What is it?

**Group By** in Power Query aggregates rows into summarized groups, similar to SQL's \`GROUP BY\` or a worksheet pivot table — producing one row per unique group value, with a chosen aggregation (sum, count, average, min, max) for other columns.

## 💡 Why is it important?

- It lets a query pre-aggregate large, detailed data into a smaller, summary-ready result *before* it's even loaded into the worksheet — useful when the detailed data is huge but only the summary is actually needed.
- It's a repeatable step, meaning the aggregation automatically recalculates on every refresh as new detailed data arrives.

## Syntax / Structure

Group By dialog: choose the column(s) to group by, then add one or more aggregations (e.g., \`Sum of Revenue\`, \`Count of Rows\`).

## 📊 Example

A transaction-level query with thousands of rows is grouped by \`Region\`, with an aggregation of \`Sum of Revenue\` and \`Count of Orders\` — producing a small, clean summary table (one row per region) loaded directly into the worksheet, instead of loading every individual transaction and summarizing with a separate pivot table.

## ⚠️ Common mistakes

- **Grouping by a column with too many unique values** (like a raw ID), producing a "summary" that's barely smaller than the original detailed data.
- **Choosing the wrong aggregation for a metric** — e.g., averaging a column that should be summed (like revenue), producing a misleading result.

## Related concepts

\`\`\`
Pivot / Unpivot
  ↓
Group By ← you are here
  ↓
Custom Columns
\`\`\`

## 🎤 Interview preparation

**Q: When would you pre-aggregate data with Power Query's Group By, instead of loading the raw detail and summarizing it with a pivot table afterward?**
Short answer: When the detailed source data is very large and only the summary is actually needed — pre-aggregating in Power Query keeps the loaded worksheet data small and fast, while still automatically recalculating from full detail on every refresh.

---

### ⚡ Quick Revision

**Group By** → aggregate rows into summarized groups (like SQL's GROUP BY), as a repeatable Power Query step
Useful for pre-summarizing large detailed data before it's loaded.
`,
});

createSkill('power-query-data-cleaning', {
  title: 'Data Cleaning in Power Query',
  category: 'Spreadsheets',
  what_is_it: 'Applying the same cleaning principles from the Data Cleaning chapter — trimming, standardizing, handling errors — as repeatable Power Query steps instead of one-time worksheet formulas.',
  why_it_matters: 'Doing cleaning in Power Query means it happens automatically on every refresh, instead of needing to be manually reapplied to every new batch of imported data.',
  prerequisites: ['power-query-group-by'],
  objectives: [
    'Apply common cleaning operations (Trim, Clean, Replace Errors) as Power Query steps',
    'Explain the advantage of cleaning in Power Query over cleaning after loading',
  ],
  estimated_minutes: 25,
  resources: ['r-ms-power-query-docs'],
  practice: [
    { id: 'ex-power-query-data-cleaning-1', title: 'Build a cleaning pipeline', description: 'Given a messy imported column, apply Trim, Clean, and Replace Values as Power Query steps to produce consistently clean data on every refresh.' },
  ],
  verify: ['Can apply Trim/Clean/Replace Errors as Power Query steps', 'Can explain why this is preferable to cleaning after loading'],
  note: `
## 🎯 What is it?

**Data cleaning** in Power Query applies the same principles from the Data Cleaning chapter — trimming whitespace, standardizing values, handling errors — as built-in, repeatable transformation steps (Format → Trim/Clean, Replace Values, Replace Errors) instead of one-time worksheet formulas.

## 💡 Why is it important?

- Doing cleaning in Power Query means it happens automatically on every refresh — a new batch of messy imported data gets the exact same cleaning applied without anyone needing to remember to redo it.
- It moves cleaning "upstream," before the data ever reaches a formula or pivot table, so everything downstream can assume clean data.

## Core concept

| Power Query tool | Worksheet equivalent |
|---|---|
| Format → Trim | TRIM function |
| Format → Clean | CLEAN function |
| Replace Values | Find & Replace |
| Replace Errors | IFERROR |
| Remove Duplicates (right-click column) | Remove Duplicates |

## 📊 Example

A recurring weekly CSV import always has trailing whitespace and inconsistent capitalization in its "Region" column. Applying Trim and a standardizing Replace Values step once, in Power Query, means every future week's import automatically gets cleaned the same way — instead of manually re-cleaning a new batch of messy data every single week.

## ⚠️ Common mistakes

- **Cleaning data manually in the worksheet after loading**, requiring the exact same manual cleanup to be repeated every time new data is imported.
- **Applying cleaning steps in the wrong order** — e.g., standardizing values before trimming whitespace can miss matches that trimming first would have caught.

## Related concepts

\`\`\`
Group By
  ↓
Data Cleaning in Power Query ← you are here
  ↓
Data Transformation Workflow
\`\`\`
Directly applies the Data Cleaning chapter's principles, automated.

## 🎤 Interview preparation

**Q: Why clean data inside Power Query rather than with worksheet formulas like TRIM after loading?**
Short answer: A Power Query cleaning step is permanently recorded and automatically reapplies on every refresh — a worksheet formula only cleans the data that's already there, and would need to be manually reapplied (or dragged down) every time new, equally messy data is imported.

---

### ⚡ Quick Revision

**Data cleaning in Power Query** → Trim/Clean/Replace Values/Replace Errors as repeatable steps
Cleans "upstream," once, so it automatically applies to every future refresh.
`,
});

createSkill('power-query-data-transformation-workflow', {
  title: 'Data Transformation Workflow',
  category: 'Spreadsheets',
  what_is_it: 'Managing a query\'s full sequence of transformation steps — the Applied Steps panel — as one coherent, ordered, editable pipeline rather than a series of one-off actions.',
  why_it_matters: 'Every Power Query step depends on the ones before it — understanding the Applied Steps panel as a real, editable sequence is what lets you fix, reorder, or debug a query confidently.',
  prerequisites: ['power-query-data-cleaning'],
  objectives: [
    'Read and edit a query\'s Applied Steps sequence',
    'Explain why step order matters in a Power Query pipeline',
  ],
  estimated_minutes: 25,
  resources: ['r-ms-power-query-docs'],
  practice: [
    { id: 'ex-power-query-transformation-workflow-1', title: 'Reorder a broken pipeline', description: 'Given a query where a filter step was accidentally placed before a needed data-type conversion, reorder the Applied Steps to fix it.' },
  ],
  verify: ['Can read a query\'s Applied Steps panel', 'Can explain why step order affects a pipeline\'s result'],
  note: `
## 🎯 What is it?

Every transformation applied in Power Query — importing, filtering, changing types, removing columns, grouping — is recorded as a named, ordered entry in the **Applied Steps** panel. The **Data Transformation Workflow** is the practice of treating this list as one coherent, editable pipeline, not just a sequence of one-off actions you take and forget.

## 💡 Why is it important?

- Every step depends on the state left by the step before it — reordering, editing, or deleting a step can change or break everything that comes after it, so understanding the sequence as a real pipeline (not independent actions) is essential.
- It's what makes a query maintainable — six months later, someone (including future you) can read the Applied Steps panel top to bottom and understand exactly what transformation pipeline is being applied.

## Core concept

\`\`\`
Applied Steps:
1. Source              (connect to the file/database)
2. Changed Type          (fix data types)
3. Filtered Rows         (exclude test accounts)
4. Removed Columns       (trim to what's needed)
5. Unpivoted Columns     (wide → long)
6. Grouped Rows          (summarize by region)
\`\`\`

Each step can be clicked to preview the data's state *at that point*, edited via its gear icon, reordered by dragging, or deleted — the whole list is a live, inspectable pipeline.

## 📊 Example

A query filters rows *before* converting a column's type from text to number — if the filter condition depends on that column being numeric (like "amount > 1000"), placing the filter step before the type conversion step can silently produce wrong results, since the comparison behaves differently against text. Reordering the steps (type conversion first, filter second) fixes it.

## ⚠️ Common mistakes

- **Not realizing step order is meaningful**, and being confused when reordering (or inserting a new step) changes a query's result unexpectedly.
- **Deleting a step without checking what later steps depend on it**, breaking the pipeline further down in ways that can be hard to trace back to the actual cause.
- **Leaving steps with unclear default names** ("Custom1," "Changed Type1") instead of renaming them descriptively, making the pipeline harder for anyone (including future you) to follow later.

## Related concepts

\`\`\`
Data Cleaning in Power Query
  ↓
Data Transformation Workflow ← you are here
  ↓
Refresh
\`\`\`
This closes the hands-on transformation steps — the chapter's final topic (Query Dependencies) covers how multiple queries relate to each other.

## 🎤 Interview preparation

**Q: You reorder two steps in a Power Query pipeline and the result changes unexpectedly. Why?**
Short answer: Each Applied Step operates on the data state left by the step before it — reordering changes what state a given step actually operates on, which can produce a different (and sometimes broken) result, especially when a later step depends on a type conversion or filter that used to come earlier.

---

### ⚡ Quick Revision

**Data Transformation Workflow** → the Applied Steps panel is one ordered, editable pipeline, not independent actions
Step order matters — each step depends on the state left by the one before it.
`,
});

createSkill('power-query-dependencies', {
  title: 'Query Dependencies',
  category: 'Spreadsheets',
  what_is_it: 'How one Power Query query can use another query as its source — creating a dependency chain where a change or break upstream affects everything downstream.',
  why_it_matters: 'Understanding dependencies is what lets you build a maintainable, layered set of queries instead of one giant, hard-to-debug query — and what lets you diagnose which query actually broke when a refresh fails.',
  prerequisites: ['power-query-data-transformation-workflow'],
  objectives: [
    'View a workbook\'s query dependencies',
    'Explain why breaking a query into layered, dependent queries is often better than one large query',
  ],
  estimated_minutes: 20,
  resources: ['r-ms-power-query-docs'],
  practice: [
    { id: 'ex-power-query-dependencies-1', title: 'Diagnose a broken chain', description: 'Given three linked queries (Import → Clean → Merge), explain what happens to the last two if the first one\'s source breaks, and how the Query Dependencies view helps diagnose it.' },
  ],
  verify: ['Can explain what a query dependency is', 'Can use the Query Dependencies view to diagnose a refresh failure'],
  note: `
## 🎯 What is it?

A **query dependency** exists when one Power Query query uses another query as its source, rather than connecting directly to a raw file or database — for example, a "Clean Orders" query built on top of a raw "Import Orders" query. Excel's **Query Dependencies** view shows this whole chain visually, across every query in a workbook.

## 💡 Why is it important?

- It's what lets you build a maintainable, layered pipeline — a raw import query, a cleaning query built on it, and a final summary query built on the cleaning query — instead of one giant, hard-to-follow query doing everything at once.
- When a refresh fails, understanding the dependency chain is what lets you correctly diagnose *which* query actually broke, rather than assuming the one that errored is the true source of the problem.

## Core concept

\`\`\`
Import Orders (raw source)
      ↓
Clean Orders (built on Import Orders)
      ↓
Merge with Customers (built on Clean Orders + Customers)
\`\`\`

If \`Import Orders\`' source file moves or its structure changes, every query downstream of it (\`Clean Orders\`, \`Merge with Customers\`) can fail too — even though the error might only visibly appear on the last one in the chain.

## 📊 Example

A refresh fails on the final "Merge with Customers" query with a generic error. Checking the Query Dependencies view shows it's built on "Clean Orders," which is built on "Import Orders" — tracing back reveals the *actual* problem is that the raw source file for "Import Orders" was renamed, which broke every query downstream, not something wrong with the merge step itself.

## ⚠️ Common mistakes

- **Assuming the query that shows an error is the one that's actually broken**, rather than tracing the dependency chain back to the true upstream source of the problem.
- **Building one enormous query that does everything** instead of layering smaller, single-purpose queries — this makes both understanding and debugging much harder, since there's no dependency chain to reason about.

## Related concepts

\`\`\`
Data Transformation Workflow
  ↓
Query Dependencies ← you are here
\`\`\`
This closes the Power Query chapter — the next chapter (Advanced Excel) covers dynamic arrays, Power Pivot, and other advanced tools that often work alongside a Power Query-fed dataset.

## 🎤 Interview preparation

**Q: A refresh fails with an error on your final summary query. How would you find the actual root cause?**
Short answer: Check the Query Dependencies view to see what that query is built on, and trace back through the chain — the query showing the error isn't necessarily where the actual problem originated; it's often failing because something further upstream (a moved file, a renamed source) broke first.

---

### ⚡ Quick Revision

**Query dependencies** → one query built on another, forming a traceable chain
When a refresh fails, trace the dependency chain back — the visible error isn't always the true source.
`,
});

console.log('Created 10 new Power Query (2.13) skills.');
