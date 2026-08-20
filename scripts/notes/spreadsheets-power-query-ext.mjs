import { createSkill } from './_create.mjs';

createSkill('power-query-import-data', {
  title: 'Import Data',
  category: 'Spreadsheets',
  what_is_it: 'Connecting Power Query to a data source — a file, a folder, a database, or a web page — as a live, repeatable connection instead of a one-time copy-paste.',
  why_it_matters: 'This is the practical first step of every Power Query workflow, and the difference between a report that updates itself and one that requires manual re-importing every time.',
  prerequisites: ['dashboard-spreadsheets'],
  objectives: ['Connect Power Query to a file, folder, or web source', 'Explain the difference between importing as a query vs. pasting values'],
  estimated_minutes: 25,
  resources: ['r-ms-power-query-docs'],
  practice: [{ id: 'ex-pq-import-1', title: 'Import a folder of files', description: 'Set up a Power Query connection to a folder, so every CSV file inside it is automatically combined into one table.' }],
  verify: ['Data is connected as a live query, not a one-time paste', 'Combined data correctly reflects every file/source connected'],
  note: `
## 🎯 What is it?

**Importing data** in Power Query means connecting to a source — a file, a folder of files, a database, or a web page — as a **live, repeatable connection**, not a one-time copy-paste of static values. This is the practical, hands-on first step introduced conceptually in [Power Query & Advanced Spreadsheets](/skills/spreadsheets-power-query).

## 💡 Why is it important?

This is the difference between a report that updates itself with a single refresh click and one that requires manually re-importing and reformatting data every single time — establishing this connection correctly at the start is what makes everything downstream (transforms, merges, refreshes) actually work.

## Core concept

| Source type | Common use case |
|---|---|
| A single file (CSV, Excel) | A one-time or occasional recurring import |
| A folder | Automatically combining many similarly-structured files (e.g., 12 monthly exports) into one table |
| A database | Pulling live, queryable data directly, without an export step |
| A web page | Extracting a table directly from a webpage |

Importing "as a query" means Power Query remembers *how* to re-fetch the data, not just a frozen snapshot of what it looked like at import time.

## 📊 Example

**Task:** Combine 12 monthly sales CSV exports (all in one folder, all the same structure) into a single table.

**Steps:** Power Query → Get Data → From Folder → select the folder → Combine & Transform.

**Result:** All 12 files are automatically read and stacked into one combined table — and next month, when a 13th file is added to the same folder, simply refreshing the query picks it up automatically, with zero manual work.

## Multiple examples

**Beginner:** Importing a single CSV file as a query.
**Intermediate:** Importing an entire folder of similarly-structured files, combined automatically.
**Real-world:** Connecting directly to a company database as a query source, replacing a manual "export to CSV, then import" routine that a team previously repeated every week.

## ⚠️ Common mistakes

- **Pasting values instead of importing as a query.** A pasted value is a frozen, one-time snapshot — it never updates, no matter how the source changes.
- **Hardcoding a specific single file path** when a folder or parameterized source would be more resilient to the file being renamed or a new period's file being added.

## Real-world Data Analyst use cases

- **Any recurring reporting task:** replacing a manual, repeated import-and-clean routine with a live, refreshable connection.

## Related concepts

\`\`\`
Dashboard → Import Data ← you are here → Transform Data → Merge → Append → Refresh
\`\`\`

## Practice questions

### Easy
1. What's the key difference between importing data as a query and pasting values into a sheet?

### Interview/Advanced
2. Why would importing "From Folder" be more resilient than importing a single named file for a recurring monthly report?

<details><summary><strong>Answer / Solution</strong></summary>

1. A query is a live, repeatable connection that can be refreshed to reflect the current state of the source; a pasted value is a frozen, one-time snapshot that never updates on its own.
2. A folder-based import automatically picks up any file placed inside it (matching the expected pattern), so a new month's file just needs to be added to the folder — no formula or query needs to be edited — whereas a single hardcoded file path breaks the moment the filename changes (e.g., includes the month in its name).

</details>

## 🎤 Interview preparation

**Q: Why is connecting to a live data source better than a one-time copy-paste for a recurring report?**
Short answer: A live connection can be refreshed to pull the current data automatically, while a pasted value is a permanent, frozen snapshot that requires manually redoing the entire import every time the source changes.

## Best practices

- Import data as a live query, never as a static paste, for anything recurring.
- Prefer a folder or parameterized source over a hardcoded single file path when the source will change or grow over time.

---

### ⚡ Quick Revision

**Import as a query** → a live, repeatable connection, not a frozen paste
**From Folder** → automatically combines every matching file, resilient to new files being added
`,
});

createSkill('power-query-transform-data', {
  title: 'Transform Data',
  category: 'Spreadsheets',
  what_is_it: 'Recording a cleaning process as a saved, ordered list of steps — filtering rows, changing data types, renaming columns — that automatically reapplies every time the query refreshes.',
  why_it_matters: 'This is what turns a repetitive manual cleaning routine into a one-time setup that reruns identically and automatically forever after.',
  prerequisites: ['power-query-import-data'],
  objectives: ['Build a multi-step transformation in Power Query', 'Explain why transform steps must be edited, not the loaded output table'],
  estimated_minutes: 35,
  resources: ['r-ms-power-query-docs'],
  practice: [{ id: 'ex-pq-transform-1', title: 'Build a repeatable cleaning routine', description: 'Build a Power Query transformation that filters out test rows, fixes a date column\'s type, and renames columns to a consistent standard.' }],
  verify: ['Transform steps are named descriptively and in a logical order', 'Re-running the query on new source data correctly reapplies every step'],
  note: `
## 🎯 What is it?

**Transform Data** means recording a cleaning process as a saved, **ordered list of steps** — filtering rows, changing data types, renaming columns, and more — that automatically reapplies every time the query is refreshed against new source data.

## 💡 Why is it important?

This is what turns a repetitive manual cleaning routine (delete these rows, fix this column's format, rename these headers — every single week) into a one-time setup that reruns identically and automatically, forever after — genuinely one of the highest-leverage habits in all of spreadsheet work.

## Core concept

Every action taken in Power Query's editor is recorded as a named, visible **step** in the "Applied Steps" pane — each step builds on the previous one, and the whole sequence re-executes from the top every time the query refreshes.

| Common transform step | Purpose |
|---|---|
| Changed Type | Ensures columns are the correct data type (see [Data Types](/skills/spreadsheet-data-types)) |
| Filtered Rows | Removes unwanted rows (e.g., test accounts, blanks) |
| Removed Columns | Drops columns not needed downstream |
| Renamed Columns | Standardizes column names |
| Split Column | Breaks a combined field into parts (like [Text to Columns](/skills/text-to-columns), but repeatable) |

## 📊 Example

A monthly raw export needs: dropping a "notes" column, filtering out rows where \`status = "test"\`, and fixing the date column's type (it imports as text by default).

**Recorded steps (in order):**
\`\`\`
1. Source
2. Removed Columns (dropped "notes")
3. Filtered Rows (status <> "test")
4. Changed Type (order_date → Date)
5. Close & Load
\`\`\`

**Result:** Next month, refreshing this query against the new file re-applies all four steps automatically and identically — no manual re-cleaning needed.

## Multiple examples

**Beginner:** A single transform step, like changing one column's data type.
**Intermediate:** A 4-5 step sequence combining filtering, type changes, and column renaming.
**Real-world:** A transform sequence that also splits a combined "City, State" column, standardizes casing on a category column, and removes duplicate rows — the same cleaning checklist a team used to redo manually every week, now fully automated and consistent every single time it runs.

## ⚠️ Common mistakes

- **Editing the loaded output table directly instead of adding a query step.** Manual edits to the final loaded table are wiped out on the next refresh — every change must happen as a recorded transform step.
- **Building an undocumented, cryptically-named step list** that's hard for anyone (including future you) to audit — renaming steps descriptively as you go avoids this.
- **Doing a transformation manually once instead of recording it as a step**, missing out on the entire repeatability benefit.

## Real-world Data Analyst use cases

- **Any recurring cleaning task:** replacing a manual weekly/monthly cleaning checklist with a one-time, fully repeatable transform sequence.

## Related concepts

\`\`\`
Import Data → Transform Data ← you are here → Merge → Append → Refresh
\`\`\`

## Practice questions

### Easy
1. Why does editing a Power Query's loaded output table directly not work as a lasting fix?

### Interview/Advanced
2. Why is naming each transform step descriptively considered a best practice, not just a nice-to-have?

<details><summary><strong>Answer / Solution</strong></summary>

1. The loaded table is regenerated from the query's recorded steps every time it refreshes — any manual edit made directly to that output table gets silently overwritten on the next refresh, since it isn't part of the recorded step sequence.
2. A long, undocumented step list ("Changed Type1," "Filtered Rows2," etc.) is very hard for anyone — including the original author, months later — to audit or modify confidently; descriptive names make the whole transformation process self-documenting and safe to hand off or revisit.

</details>

## 🎤 Interview preparation

**Q: Why would a team replace a manual, repeated data-cleaning routine with a Power Query transform sequence?**
Short answer: Once built, the transform sequence reapplies automatically and identically every time the query is refreshed — eliminating the risk of human error or inconsistency from redoing the same cleaning steps manually, and saving significant repeated effort.

## Best practices

- Always make a change as a recorded query step, never by editing the loaded output table directly.
- Name every step descriptively as you build the sequence.

---

### ⚡ Quick Revision

**Transform steps** → a named, ordered, repeatable "recipe" that reruns on every refresh
**Rule:** never manually edit the loaded output table — always edit the query steps instead
`,
});

createSkill('power-query-merge', {
  title: 'Merge',
  category: 'Spreadsheets',
  what_is_it: 'Combining two queries by a shared key — the Power Query equivalent of a spreadsheet lookup or a SQL join, built directly into the query itself.',
  why_it_matters: 'It lets two separate, repeatable data sources be joined together automatically on every refresh, without a manual VLOOKUP that needs re-checking each time.',
  prerequisites: ['power-query-transform-data'],
  objectives: ['Merge two Power Query queries on a shared key', 'Choose the correct join type (matching SQL/JOIN concepts) for a merge'],
  estimated_minutes: 35,
  resources: ['r-ms-power-query-docs'],
  practice: [{ id: 'ex-pq-merge-1', title: 'Merge two data sources', description: 'Merge an orders query with a customers query on customer_id, keeping every order even if the customer record is missing.' }],
  verify: ['Merge correctly combines matching rows on the shared key', 'Correct join type is chosen based on whether unmatched rows should be kept'],
  note: `
## 🎯 What is it?

**Merge** combines two Power Query queries by a shared key — conceptually the same as a spreadsheet [VLOOKUP](/skills/vlookup-function) or a SQL [JOIN](/skills/sql-joins), but built directly into the query itself, so both sources merge together automatically on every refresh.

## 💡 Why is it important?

It lets two separate, repeatable data sources be joined together automatically — a manual VLOOKUP needs to be re-checked or re-copied every time source data changes; a Power Query merge re-executes the join logic fresh, every single refresh, with zero manual intervention.

## Core concept

Just like a SQL JOIN, a Power Query merge requires choosing a **join kind**:

| Join kind | Keeps |
|---|---|
| Inner | Only rows matched in both queries |
| Left Outer | All rows from the first (left) query, matched where possible |
| Right Outer | All rows from the second (right) query, matched where possible |
| Full Outer | All rows from both, matched where possible |

This maps directly onto [SQL — JOINs](/skills/sql-joins)' INNER/LEFT/RIGHT/FULL concepts — the same underlying logic, expressed through Power Query's interface instead of SQL syntax.

## 📊 Example

**Orders query:** order_id, customer_id, amount.
**Customers query:** customer_id, name, region.

**Merge:** Orders (Left Outer) + Customers, matched on customer_id.

**Result:** Every order row is kept, with the matching customer's name and region attached — and any order with no matching customer (a data-quality issue worth investigating) still appears, with blank customer fields, rather than silently disappearing.

## Multiple examples

**Beginner:** A simple Inner merge between two queries sharing a key.
**Intermediate:** A Left Outer merge to preserve every row from the primary query, even without a match.
**Real-world:** Merging a monthly transactions query with a currency-conversion reference query, so every transaction is automatically converted to a standard currency on every refresh, without a manual VLOOKUP needing to be re-copied down the sheet each month.

## ⚠️ Common mistakes

- **Using the default join kind without considering whether unmatched rows should be kept** — just like choosing the wrong SQL JOIN type, this can silently drop rows that should have been preserved.
- **Merging on a key that isn't unique on at least one side**, silently multiplying rows — the exact same "row explosion" risk covered in [SQL — JOINs](/skills/sql-joins) and [pandas .merge()](/skills/pandas).
- **Not deduplicating a key column before merging**, when duplicates are the actual root cause of an unexpected row-count increase after a merge.

## Real-world Data Analyst use cases

- **Any recurring analysis combining two data sources:** transactions + customer reference data, sales + currency rates, orders + product catalog.

## Related concepts

\`\`\`
Transform Data → Merge ← you are here → Append → Refresh → Advanced Power Query
\`\`\`
This is conceptually identical to [SQL — JOINs](/skills/sql-joins) and pandas' \`.merge()\` — the same join logic, three different tools.

## Practice questions

### Easy
1. What Power Query join kind would you use to keep every row from your primary query, even without a match?

### Interview/Advanced
2. A merge produces far more rows than either source query. What's the most likely cause?

<details><summary><strong>Answer / Solution</strong></summary>

1. Left Outer — it preserves every row from the primary (left) query, filling in blanks for any row without a matching key in the second query.
2. A duplicate key on one or both sides of the merge — every duplicate match multiplies the resulting rows, the same "fan-out" issue seen in SQL joins and pandas merges on a non-unique key.

</details>

## 🎤 Interview preparation

**Q: How does a Power Query merge relate to a SQL JOIN?**
Short answer: They're conceptually identical — both combine two data sources on a shared key, and both require choosing a join type (inner, left, right, full) that determines whether unmatched rows are kept or dropped.

## Best practices

- Choose the join kind deliberately based on whether unmatched rows should be preserved.
- Check for duplicate keys on both sides before merging, to avoid an unexpected row-count multiplication.

---

### ⚡ Quick Revision

**Merge** → Power Query's join, combining two queries by a shared key
**Join kinds** → Inner / Left Outer / Right Outer / Full Outer, same logic as SQL JOINs
**Watch for:** duplicate keys causing row multiplication
`,
});

createSkill('power-query-append', {
  title: 'Append',
  category: 'Spreadsheets',
  what_is_it: 'Stacking two or more queries with the same columns on top of each other — the Power Query equivalent of a SQL UNION ALL.',
  why_it_matters: 'The right tool whenever combining similarly-shaped data from different periods or sources, as opposed to Merge, which combines different columns by a shared key.',
  prerequisites: ['power-query-merge'],
  objectives: ['Append two or more queries with matching columns', 'Explain the difference between Append and Merge'],
  estimated_minutes: 25,
  resources: ['r-ms-power-query-docs'],
  practice: [{ id: 'ex-pq-append-1', title: 'Combine two periods', description: 'Append a "This Quarter" orders query and a "Last Quarter" orders query (same columns) into one combined query.' }],
  verify: ['Appended query correctly stacks all rows from both sources', 'Columns are correctly aligned between the appended queries'],
  note: `
## 🎯 What is it?

**Append** stacks two or more queries with the **same columns** on top of each other — the Power Query equivalent of a SQL [UNION ALL](/skills/sql-set-operations), combining rows vertically rather than columns horizontally.

## 💡 Why is it important?

It's the right tool whenever combining similarly-shaped data from different periods or sources — this quarter's and last quarter's orders, or exports from two regional systems with the same structure — as opposed to [Merge](/skills/power-query-merge), which combines *different* columns from two sources by a shared key.

## Core concept

| | Merge | Append |
|---|---|---|
| Combines | Different columns, by a shared key | Same-shaped rows, stacked together |
| Analogous to | SQL JOIN | SQL UNION ALL |
| Use when | You need columns from both sources side by side | You need rows from both sources combined into one list |

## 📊 Example

**"Q1 Orders" query:** order_id, customer_id, amount (500 rows)
**"Q2 Orders" query:** order_id, customer_id, amount (600 rows)

**Append Q1 + Q2** → one combined query with 1,100 rows, same three columns, ready for a full year-to-date analysis.

## Multiple examples

**Beginner:** Appending two queries with identical column structures.
**Intermediate:** Appending three or more monthly queries into one combined dataset.
**Real-world:** Appending 12 monthly regional sales exports (each imported as its own query with identical structure) into a single combined query, feeding a full-year pivot table that stays current as each new month's query is added to the append list.

## ⚠️ Common mistakes

- **Using Append when Merge was actually needed** (or vice versa) — Append stacks rows and requires matching columns; Merge combines different columns using a shared key. Mixing these up produces either an error or a structurally wrong result.
- **Appending queries with mismatched column names or types**, causing columns to misalign or produce unexpected blank values after combining.

## Real-world Data Analyst use cases

- **Any multi-period analysis:** combining monthly, quarterly, or yearly exports of the same structure into one dataset for trend analysis.
- **Multi-source combination:** combining exports from multiple regional systems that share the same structure.

## Related concepts

\`\`\`
Merge → Append ← you are here → Refresh → Advanced Power Query
\`\`\`
Directly parallels [SQL — UNION & Set Operations](/skills/sql-set-operations) — the same "stack rows vertically" concept, expressed through Power Query's interface.

## Practice questions

### Easy
1. What's the core difference between Merge and Append?

### Interview/Advanced
2. Why would appending 12 monthly queries (built via Import Data → From Folder) be more maintainable than manually copy-pasting 12 months of data into one sheet?

<details><summary><strong>Answer / Solution</strong></summary>

1. Merge combines different columns from two sources using a shared key (like a JOIN); Append stacks rows from same-shaped sources on top of each other (like a UNION ALL).
2. The folder-based import and append combination automatically re-includes every file present, so adding a 13th month's file and refreshing the query updates the combined dataset with zero manual copy-paste — far less error-prone and far less repetitive work than manually managing 12+ pasted blocks of data.

</details>

## 🎤 Interview preparation

**Q: When would you choose Append over Merge in Power Query?**
Short answer: When combining rows from same-structured sources (like monthly exports) into one longer list — Merge is for combining different columns from two sources by a shared key, which is a structurally different problem.

## Best practices

- Confirm column names and types match across queries before appending.
- Combine Append with a folder-based Import Data source for a fully automated, growing dataset.

---

### ⚡ Quick Revision

**Append** → stacks rows from same-shaped queries (like SQL UNION ALL)
**vs. Merge** → combines different columns by a shared key (like SQL JOIN)
`,
});

createSkill('power-query-refresh', {
  title: 'Refresh',
  category: 'Spreadsheets',
  what_is_it: 'Re-running a query\'s connection and every one of its transform steps against the current state of the source data, updating the loaded result.',
  why_it_matters: 'This is the single action that makes the entire Power Query workflow pay off — one click re-applies an entire cleaning, merging, and combining pipeline automatically.',
  prerequisites: ['power-query-append'],
  objectives: ['Refresh a query and confirm it reflects updated source data', 'Explain what refresh does and does not automatically handle'],
  estimated_minutes: 20,
  resources: ['r-ms-power-query-docs'],
  practice: [{ id: 'ex-pq-refresh-1', title: 'Update a report with one click', description: 'Add new rows to a query\'s source file, then refresh the query and confirm every downstream step and result updates correctly.' }],
  verify: ['Refresh correctly re-applies every transform step against the new source data', 'Downstream artifacts (pivot tables, charts) referencing the query correctly reflect the refreshed data'],
  note: `
## 🎯 What is it?

**Refresh** re-runs a query's connection and every one of its recorded transform steps against the **current** state of the source data, updating the loaded result — this is the single action that makes the entire Power Query workflow pay off.

## 💡 Why is it important?

Everything built earlier in this group — [Import Data](/skills/power-query-import-data), [Transform Data](/skills/power-query-transform-data), [Merge](/skills/power-query-merge), [Append](/skills/power-query-append) — exists to be re-run automatically with one click. Refresh is that click: it re-applies an entire multi-step cleaning, merging, and combining pipeline against fresh data, with zero manual rework.

## Core concept

| What refresh does | What refresh does NOT do |
|---|---|
| Re-fetches the source data | Change the query's steps themselves |
| Re-applies every transform step, in order | Fix a step that's now broken by a structural change in the source |
| Updates the loaded table with the new result | Automatically refresh downstream pivot tables (they usually need their own separate refresh) |

**Note:** downstream pivot tables built on a query's output typically still need their own refresh after the query refreshes — the two are related but often separate steps, depending on the specific spreadsheet tool's settings.

## 📊 Example

A query imports and cleans a weekly sales file. A new week's rows are pasted into the source file.

**Action:** Click Refresh.

**Result:** The query re-runs its full step sequence — reads the new file state, re-filters, re-types, re-merges (if applicable) — and the loaded table updates to reflect the new week's data, all in one click, exactly reproducing the same cleaning logic that was applied to every prior week.

## Multiple examples

**Beginner:** Manually clicking Refresh after updating a source file.
**Intermediate:** Setting a query to refresh automatically when the workbook opens.
**Real-world:** A recurring Monday-morning report where the only manual step is pasting the past week's raw export into the source location — refreshing the query (and its downstream pivot tables) instantly reproduces the entire cleaned, merged, and summarized report for the new data.

## ⚠️ Common mistakes

- **Forgetting to refresh after updating source data**, and then trusting a stale report that doesn't reflect the latest changes.
- **Assuming a pivot table automatically updates just because its underlying query refreshed** — many spreadsheet tools require refreshing the pivot table separately (or setting "refresh on open") in addition to the query itself.
- **Not noticing a refresh error** caused by a structural change in the source (like a renamed or missing column), which can silently break a step further down the sequence.

## Real-world Data Analyst use cases

- **Any recurring report:** the one-click action that makes an entire cleaning-and-combining pipeline reproducible, week after week or month after month.

## Related concepts

\`\`\`
Append → Refresh ← you are here → Advanced Power Query
\`\`\`

## Practice questions

### Easy
1. What does refreshing a query actually do?

### Interview/Advanced
2. Why might a pivot table still show stale data even after its underlying query has been refreshed?

<details><summary><strong>Answer / Solution</strong></summary>

1. It re-fetches the source data and re-applies every one of the query's recorded transform steps in order, updating the loaded table with the current result.
2. Many spreadsheet tools require a separate refresh step for a pivot table built on top of a query's output — refreshing the underlying query alone doesn't always automatically cascade to every pivot table referencing it, depending on the tool's settings (this can often be configured to refresh automatically on open).

</details>

## 🎤 Interview preparation

**Q: Why is "refresh" the single most valuable action in the entire Power Query workflow?**
Short answer: It re-executes an entire recorded pipeline — import, clean, merge, combine — against the current source data in one click, which is exactly what turns a one-time cleaning effort into a fully repeatable, low-maintenance recurring report.

## Best practices

- Always refresh (and verify downstream pivot tables also refresh) after updating source data, before trusting a report.
- Consider setting queries/pivot tables to refresh automatically on workbook open for a recurring report.

---

### ⚡ Quick Revision

**Refresh** → re-runs the query's connection and every transform step against current source data
**Remember:** downstream pivot tables often need their own separate refresh too
`,
});

createSkill('power-query-advanced', {
  title: 'Advanced Power Query',
  category: 'Spreadsheets',
  what_is_it: 'Going beyond the standard click-based transform steps into the M formula language, custom columns, parameters, and functions for more complex, reusable transformations.',
  why_it_matters: 'Some cleaning problems need logic beyond what the click-based interface offers directly — this is where Power Query becomes a genuinely programmable tool.',
  prerequisites: ['power-query-refresh'],
  objectives: ['Add a custom column using a formula-based calculation', 'Explain what a Power Query parameter is used for'],
  estimated_minutes: 35,
  resources: ['r-ms-power-query-docs'],
  practice: [{ id: 'ex-pq-advanced-1', title: 'Add a custom calculated column', description: 'Add a custom column to a query that categorizes each order as "Large" or "Standard" based on a conditional rule, using a formula.' }],
  verify: ['Custom column correctly applies the intended logic to every row', 'Can explain what a parameter would be used for in a more advanced query'],
  note: `
## 🎯 What is it?

**Advanced Power Query** goes beyond the standard click-based transform steps into the **M formula language**, custom columns, parameters, and reusable functions — for transformations more complex than the built-in click-based options directly support.

## 💡 Why is it important?

Some cleaning problems need logic beyond what the standard interface offers directly — a conditional categorization rule, a calculation combining several columns, or a query that needs to behave differently depending on an input parameter. This is where Power Query becomes a genuinely programmable data-transformation tool, not just a click-based cleaner.

## Core concept

| Advanced feature | Purpose |
|---|---|
| Custom column (formula-based) | Add a calculated column using logic not available as a built-in transform |
| M language | The formula language underlying every Power Query step, editable directly for full control |
| Parameters | A reusable input (like a date range or file path) that can be changed without editing the query's steps |
| Custom functions | A reusable, named transformation that can be applied repeatedly, similar to a function in Python |

## 📊 Example

**Task:** Categorize each order as "Large" (over $500) or "Standard," a rule not directly available as a built-in transform.

**Custom column formula (M language):**
\`\`\`
if [Amount] > 500 then "Large" else "Standard"
\`\`\`

**Explanation:** This is conceptually identical to an [IF](/skills/if-function) formula in a spreadsheet cell, but built directly into the query itself — it reapplies automatically to every row, including new ones, on every refresh.

## Multiple examples

**Beginner:** A custom column applying a simple conditional rule to categorize rows.
**Intermediate:** A parameter controlling which folder or date range a query pulls from, changeable without editing the underlying steps.
**Real-world:** A custom function that standardizes a text column (trimming, fixing casing, removing known problem characters) applied consistently across several different queries that all need the same cleaning logic — built once as a function, reused everywhere, instead of duplicating the same manual steps in every query.

## ⚠️ Common mistakes

- **Reaching for a custom M formula when a built-in transform step already does the same job** — the click-based interface covers the vast majority of real cleaning needs; custom formulas are for the genuine remainder.
- **Hardcoding a value (like a date range or file path) directly in a query's steps** instead of using a parameter, making the query harder to reuse or adjust later.
- **Building overly clever, hard-to-read custom M code** without comments or clear naming, making it difficult for anyone else (or future you) to maintain.

## Real-world Data Analyst use cases

- **Complex categorization rules:** adding a custom column with conditional logic not available as a built-in transform.
- **Reusable, parameterized reports:** a single query template that different team members can point at different date ranges or folders by changing one parameter, without editing any query logic.

## Related concepts

\`\`\`
Refresh → Advanced Power Query ← you are here
\`\`\`
This closes the Power Query & Advanced group — and, with it, the entire Spreadsheets stage.

## Practice questions

### Easy
1. What's a Power Query parameter used for?

### Interview/Advanced
2. Why would a team build a custom function instead of repeating the same manual transform steps in several different queries?

<details><summary><strong>Answer / Solution</strong></summary>

1. A reusable input (like a date range, file path, or threshold value) that can be changed in one place without needing to edit the query's underlying steps directly.
2. A custom function centralizes the logic in one place — if the cleaning rule ever needs to change, it's updated once in the function definition, rather than needing to find and manually update the same steps duplicated across every query that uses them, which is slower and much more error-prone.

</details>

## 🎤 Interview preparation

**Q: When would you need to go beyond Power Query's built-in click-based transforms into custom M formulas?**
Short answer: When a transformation involves logic the built-in interface doesn't directly support — like a multi-condition categorization rule or a calculation combining several columns in a way not covered by a standard transform button.

## Best practices

- Prefer built-in transform steps whenever they cover the need; reach for custom M formulas only for the genuine remainder.
- Use parameters instead of hardcoded values for anything that might need to change (a date range, a file path).
- Comment and clearly name custom M code for maintainability.

---

### ⚡ Quick Revision

**Custom column (M formula)** → for logic beyond the built-in transform steps
**Parameter** → a reusable, changeable input, avoiding hardcoded values
**Custom function** → reusable transformation logic, shared across multiple queries
`,
});
