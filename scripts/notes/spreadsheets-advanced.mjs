import { setNote } from './_lib.mjs';

setNote('spreadsheets-lookup', `
## 🎯 What is it?

**Lookup functions** — VLOOKUP, XLOOKUP, and INDEX-MATCH — pull a matching value from another table or tab based on a shared key, like a customer ID. They're how a spreadsheet "joins" two related sheets of data without manually copy-pasting.

Think of it like a phone book: you look up a name (the key) to find a matching phone number (the value) — a lookup function automates exactly that search.

## 💡 Why is it important?

- Most real spreadsheet work involves data spread across more than one table or tab — lookups combine them without manual, error-prone copy-pasting.
- It's the spreadsheet equivalent of a SQL JOIN, and understanding it well is what makes the leap to SQL joins later much easier.
- It's one of the most commonly tested Excel skills in interviews and take-home case studies.

## Core concept

### VLOOKUP & HLOOKUP
VLOOKUP searches **down** the first column of a range for a match, then returns a value from a specified column to the right. HLOOKUP does the same **across** a row instead of down a column. VLOOKUP's biggest limitation: it can only look to the right of its search column.

### XLOOKUP
The modern replacement for VLOOKUP/HLOOKUP. It can search in either direction (left or right of the key), has a built-in "not found" default, and doesn't break when a column is inserted between the key and the result (VLOOKUP's column-index-number argument does).

### INDEX-MATCH
A two-function combination that's more flexible than VLOOKUP: \`MATCH\` finds the position of the key, and \`INDEX\` returns a value at that position from any column — not just to the right.

### Handling missing matches
Any lookup can fail to find a match, returning \`#N/A\`. Wrapping with \`IFERROR\` turns that into a clean, intentional result instead of a broken-looking cell.

## Syntax

\`\`\`
=VLOOKUP(lookup_value, table_range, col_index_num, [exact_match])
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])
=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))
=IFERROR(lookup_formula, "Not found")
\`\`\`

- **exact_match** (VLOOKUP's 4th argument) should almost always be \`FALSE\` (or \`0\`) unless you specifically want an approximate match.

## 📊 Example

\`customers\` tab:

| customer_id | name | region |
|---|---|---|
| 101 | Ana Silva | West |
| 102 | Wei Chen | East |

\`orders\` tab:

| order_id | customer_id | amount |
|---|---|---|
| 1 | 102 | 340 |

**Formula (in orders tab):** \`=VLOOKUP(B2, customers!A:C, 2, FALSE)\`
**Result:** \`"Wei Chen"\`

**Explanation:** Looks up customer_id 102 in the customers tab's first column, and returns the value 2 columns to the right (the name).

## Multiple examples

**Beginner:** \`=VLOOKUP(B2,customers!A:C,2,FALSE)\` — pull customer name into the orders tab.
**Intermediate — XLOOKUP:** \`=XLOOKUP(B2,customers!A:A,customers!C:C,"Unknown")\` — pull region, defaulting to "Unknown" instead of an error if not found.
**Real-world — INDEX-MATCH, looking left:** \`=INDEX(customers!A:A, MATCH(B2, customers!C:C, 0))\` — find a customer_id given a region, which VLOOKUP alone can't do since the key (region) is to the right of the ID.

## Types / Variations

| Function | Direction | Breaks if a column is inserted? | Notes |
|---|---|---|---|
| VLOOKUP | Right of key only | Yes (col_index_num shifts) | Most common, but oldest limitations |
| HLOOKUP | Below key row only | Yes | Same as VLOOKUP but row-based |
| XLOOKUP | Either direction | No | Modern default choice where available |
| INDEX-MATCH | Either direction | No | Most flexible; slightly more setup |

## ⚠️ Common mistakes

- **Forgetting the 4th argument (exact match) in VLOOKUP.** Leaving it blank defaults to an *approximate* match in older versions, silently returning a wrong result on unsorted data.
- **Hardcoding col_index_num** and then inserting a new column in the source table — this silently shifts which value gets returned.
- **Not wrapping with IFERROR**, leaving raw \`#N/A\` errors visible in a report meant for a stakeholder.
- **Trying to look "left" with VLOOKUP** — it can't; INDEX-MATCH or XLOOKUP is required.

## Real-world Data Analyst use cases

- **Customer analysis:** merging customer name/region into an orders sheet by customer ID.
- **Finance analysis:** pulling a budget target for each department from a separate reference tab.
- **Operations analysis:** looking up a warehouse's region from a shipment ID.

## Related concepts

\`\`\`
Aggregate functions → Text cleaning
  ↓
Lookup & Reference Functions ← you are here
  ↓
Pivot Tables
  ↓
Charts & Dashboards
\`\`\`
This is the direct spreadsheet analog of [SQL — JOIN](/skills/sql-joins), which you'll learn next in the SQL stage.

## Practice questions

### Easy
1. Write a VLOOKUP that returns a customer's name from a \`customers\` tab given their ID in B2.

### Medium
2. Rewrite that formula as an XLOOKUP with a default "Unknown" for no match.

### Interview/Advanced
3. Why can't a plain VLOOKUP retrieve a value from a column to the *left* of the lookup key, and what are two ways to work around it?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=VLOOKUP(B2,customers!A:C,2,FALSE)\`
2. \`=XLOOKUP(B2,customers!A:A,customers!B:B,"Unknown")\`
3. VLOOKUP always searches the *first* column of the given range and returns a column offset to the right of it — it has no mechanism to look backward. Workarounds: use INDEX-MATCH (which separates "where" from "what to return"), or use XLOOKUP, which supports any direction natively.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What does VLOOKUP do?**
Short answer: It searches down the first column of a range for a matching value, then returns a value from a specified column to the right of it.

### Conceptual questions
**Q: Why might a team standardize on XLOOKUP or INDEX-MATCH instead of VLOOKUP?**
Short answer: Because VLOOKUP breaks if a column is inserted into the source range (its column-index argument is a hardcoded number) and can't look to the left of the key — XLOOKUP and INDEX-MATCH avoid both limitations.

### Scenario-based questions
**Q: A VLOOKUP that worked yesterday now returns wrong values. Nothing in the formula changed. What likely happened?**
Short answer: A column was probably inserted or deleted in the source table, shifting which column the hardcoded col_index_num now points to.

### Practical questions
**Q: Write a formula to look up a customer's ID given their name (name is in a column to the right of ID).**
Short answer: \`=INDEX(customers!A:A, MATCH(B2, customers!B:B, 0))\` — INDEX-MATCH can look in either direction, unlike plain VLOOKUP.

## Interview traps / tricky points

- The exact-match argument (\`FALSE\`/\`0\`) is easy to forget and causes silently wrong results rather than an obvious error — a classic interview gotcha.
- \`#N/A\` errors propagate into any calculation that references the lookup cell (e.g., a SUM including an error cell breaks the whole total) — IFERROR handling matters for downstream formulas too.

## Best practices

- Default to XLOOKUP (or INDEX-MATCH if XLOOKUP isn't available) for new work — it's more robust to structural changes.
- Always specify exact match explicitly; never leave it to a default.
- Wrap any lookup that might legitimately not find a match with IFERROR or a not-found default.

---

### ⚡ Quick Revision

**VLOOKUP** → right-only, breaks if columns shift, always set exact match to FALSE
**XLOOKUP** → modern, any direction, built-in not-found default
**INDEX-MATCH** → flexible two-part lookup, works in any direction
**IFERROR** → wrap any lookup that might not find a match
`);

setNote('spreadsheets-pivot-tables', `
## 🎯 What is it?

A **pivot table** summarizes rows of raw data into totals, counts, or averages, grouped by category — built by dragging fields into Rows, Columns, Values, and Filters, without writing a single formula.

Think of it as an interactive "group by" — you tell it which category to group by and which number to summarize, and it instantly builds the breakdown.

## 💡 Why is it important?

A pivot table is the fastest way to answer "how does this break down by X?" — the single most common question in spreadsheet-based analysis. It's often faster than writing formulas for the same summary, and it's interactive: change the grouping in seconds without rebuilding anything.

## Core concept

### Building a pivot table
Four zones control the summary:

| Zone | Controls |
|---|---|
| **Rows** | The categories to group by, one row per group |
| **Columns** | An optional second grouping dimension, spread across columns |
| **Values** | The number being summarized (sum, count, average, etc.) |
| **Filters** | Restrict the whole pivot to a subset without changing the source data |

### Calculated fields
A derived measure computed *inside* the pivot table itself — e.g., profit margin = (revenue − cost) / revenue — without adding a helper column to the raw data.

### Filtering & slicers
Slicers are clickable, visual filter buttons that narrow a pivot table (and can be connected to multiple pivot tables at once) without touching the underlying source data.

### Keeping it current
A pivot table does **not** auto-update when source data changes — it must be manually refreshed (or set to refresh automatically on open).

## 📊 Example

Raw \`transactions\` data:

| region | month | revenue |
|---|---|---|
| West | Jan | 4,200 |
| East | Jan | 3,100 |
| West | Feb | 5,000 |

**Pivot setup:** Rows = region, Columns = month, Values = Sum of revenue.

**Result:**

| Region | Jan | Feb |
|---|---|---|
| West | 4,200 | 5,000 |
| East | 3,100 | — |

**Explanation:** The pivot table grouped and summed revenue by region and month automatically — no formulas written.

## Multiple examples

**Beginner:** Rows = product category, Values = Sum of revenue — total revenue per category.
**Intermediate:** Rows = region, Columns = month, Values = Sum of revenue, Filter = only "Completed" orders.
**Real-world:** Add a calculated field \`Profit Margin = (Sum of Revenue − Sum of Cost) / Sum of Revenue\`, then add a slicer for region so a stakeholder can self-serve filter the same pivot without editing it.

## ⚠️ Common mistakes

- **Forgetting to refresh after the source data changes.** The pivot table silently shows stale numbers until manually refreshed.
- **Summarizing with the wrong aggregation** (e.g., "Count" instead of "Sum" for a revenue field) — always check the field's aggregation setting, not just its name.
- **Pivoting on uncleaned data** — inconsistent casing or duplicate categories (see [Data Cleaning & Quality](/skills/data-cleaning)) will split what should be one group into several.
- **Building a calculated field as an average of an average** instead of computing it correctly from the underlying sums — this is a very common silent error.

## Real-world Data Analyst use cases

- **Sales analysis:** revenue by region and month, refreshed weekly.
- **Marketing analysis:** campaign performance broken down by channel.
- **Finance analysis:** expenses summarized by department and category.

## Related concepts

\`\`\`
Lookup & Reference Functions
  ↓
Pivot Tables ← you are here
  ↓
Charts & Dashboards in Spreadsheets
  ↓
Power Query & Advanced Spreadsheets
\`\`\`
This is the direct spreadsheet analog of SQL's [GROUP BY / Aggregation](/skills/sql-aggregation).

## Practice questions

### Easy
1. What are the four zones of a pivot table, and what does each control?

### Medium
2. Build a pivot table (describe the setup) showing total order count and total revenue by region and month.

### Interview/Advanced
3. A pivot table shows 3 separate rows for "Retail," "retail," and "RETAIL." What's the root cause, and how would you fix it?

<details><summary><strong>Answer / Solution</strong></summary>

1. Rows (grouping), Columns (second grouping dimension), Values (the summarized number), Filters (restrict the view without altering source data).
2. Rows = region, Columns = month, Values = Count of order_id and Sum of revenue.
3. Root cause: the source data has inconsistent text casing, and pivot tables group by exact text value. Fix: standardize casing (e.g., with PROPER) in the source data before building or refreshing the pivot table.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What is a pivot table used for?**
Short answer: Summarizing raw rows into grouped totals, counts, or averages by category, interactively and without writing formulas.

### Conceptual questions
**Q: Why doesn't a pivot table update automatically when the source data changes?**
Short answer: A pivot table caches a snapshot of the data when built; it requires an explicit refresh to re-read the current source data.

### Scenario-based questions
**Q: A stakeholder says a pivot table's numbers "don't match" a raw export anymore. What do you check first?**
Short answer: Whether the pivot table has been refreshed since the source data last changed — this is the most common cause of a mismatch.

### Practical questions
**Q: How would you add a profit margin measure to a pivot table without adding a helper column to the raw data?**
Short answer: Add a calculated field defined as (Sum of Revenue − Sum of Cost) / Sum of Revenue directly inside the pivot table.

## Interview traps / tricky points

- A calculated field computes on the *aggregated* totals, not row-by-row — a calculated field can behave differently than a helper column computed per row and then summarized, especially for ratios.
- Grouping fails silently on inconsistent text — no error is raised, the data just quietly splits into more categories than it should.

## Best practices

- Clean and standardize the source data before pivoting, not after.
- Refresh pivot tables as a standard last step before sharing any report.
- Prefer calculated fields for ratios over manually pre-computing a per-row ratio and averaging it (see [SUM](/skills/sum-function) common mistakes on weighted averages).

---

### ⚡ Quick Revision

**Rows/Columns** → grouping dimensions · **Values** → the summarized measure · **Filters** → narrow without altering source data
**Calculated field** → a derived measure computed inside the pivot
**Remember:** pivot tables need a manual refresh — they don't auto-update
`);

setNote('spreadsheets-charts', `
## 🎯 What is it?

Turning a pivot table's numbers into **charts** and a simple **one-tab dashboard**, using **conditional formatting** to visually highlight what matters — this is the step where spreadsheet analysis becomes something a stakeholder can glance at and immediately understand.

## 💡 Why is it important?

A pivot table full of numbers still requires reading, row by row, to spot a trend or an outlier — a chart lets someone see the pattern in one glance. Most non-technical stakeholders will engage with a dashboard chart far more readily than a raw table of numbers, no matter how well it's organized.

## Core concept

### Charts from pivots
A **PivotChart** (or a chart built directly from a pivot table's output range) stays linked to its pivot table — when the pivot refreshes with new data, the chart updates automatically.

### Conditional formatting
Rules that change a cell's appearance based on its value — color scales (e.g., red-to-green for performance), data bars (an in-cell mini bar chart), and custom highlight rules (e.g., highlight any value below target in red).

### One-tab dashboards
Combining 2–4 charts and a few key KPI numbers onto a single tab, laid out so the whole thing is readable without scrolling — the spreadsheet equivalent of a BI dashboard.

## Syntax / Formula / Structure

Common conditional-formatting rule types:

| Rule type | Use case |
|---|---|
| Color scale | Show a full range from worst to best at a glance (e.g., low-to-high revenue) |
| Data bars | Compare magnitudes within a column visually |
| Highlight cells above/below a value | Flag targets missed or exceeded |
| Custom formula rule | Any condition not covered by the built-in rules (e.g., highlight if two columns disagree) |

## 📊 Example

Pivot table: revenue by region and month. Chart: a clustered column chart, one cluster per region, one bar per month — built directly from the pivot's output.

Conditional formatting: apply a red-to-green color scale on a "vs. target %" column, so underperforming regions visually pop out without reading every number.

**Explanation:** Someone scanning the dashboard tab can see, in seconds, which region is behind target — no need to read every cell.

## Multiple examples

**Beginner:** A single bar chart of revenue by region.
**Intermediate:** A bar chart + a color-scaled "vs. target" table on the same tab.
**Real-world:** A one-tab dashboard with 2 charts (revenue trend, revenue by category) and 3 KPI cells (total revenue, month-over-month growth %, top category) — all pulling live from pivot tables that refresh on open.

## ⚠️ Common mistakes

- **Choosing a chart type that doesn't fit the data** — e.g., a pie chart for 12 categories (unreadable) instead of a bar chart. (See [Charts & chart-type selection](/skills/charts) for a full breakdown of when to use which chart.)
- **Letting a chart "break its link"** to the pivot table by copy-pasting values instead of keeping it referenced — it then silently stops updating.
- **Overusing conditional formatting** until the sheet is a wall of color and nothing stands out anymore — reserve it for the handful of values that truly need attention.
- **Building a dashboard that requires scrolling** to see the full picture — defeats the "glance and understand" purpose.

## Real-world Data Analyst use cases

- **Sales analysis:** a weekly revenue dashboard tab leadership checks every Monday.
- **Operations analysis:** conditional formatting flagging any warehouse below an on-time-delivery threshold in red.
- **Marketing analysis:** a campaign-performance dashboard combining a trend chart with KPI cells for spend, leads, and cost-per-lead.

## Related concepts

\`\`\`
Pivot Tables
  ↓
Charts & Dashboards in Spreadsheets ← you are here
  ↓
Power Query & Advanced Spreadsheets
\`\`\`
This is a spreadsheet-scale preview of the full [Visualization](/skills/charts) and [Dashboard Design](/skills/dashboard-design) stages later in the roadmap.

## Practice questions

### Easy
1. What's the benefit of building a chart directly from a pivot table instead of a static copy of the numbers?

### Medium
2. You want to highlight any region below 90% of its revenue target. Which conditional formatting rule type fits, and why?

### Interview/Advanced
3. A dashboard has 8 different conditional-formatting colors across 5 charts. What's likely wrong with this design, and how would you fix it?

<details><summary><strong>Answer / Solution</strong></summary>

1. The chart stays linked and updates automatically whenever the pivot table (and its underlying data) refreshes — a static copy would go stale.
2. A "highlight cells below a value" rule (or a custom formula rule comparing actual vs. target) — it directly flags the specific condition that matters, rather than a general color scale.
3. Likely over-formatting — too many colors mean nothing stands out, defeating the purpose of conditional formatting. Fix: reserve formatting for the one or two conditions that truly need attention, and remove the rest.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why build a chart from a pivot table rather than a static range?**
Short answer: So the chart automatically updates whenever the underlying data and pivot table refresh, instead of needing to be rebuilt manually.

### Conceptual questions
**Q: What's the purpose of conditional formatting in a dashboard?**
Short answer: To make the values that need attention visually obvious at a glance, without requiring the reader to scan every number.

### Scenario-based questions
**Q: A stakeholder says your dashboard is "hard to read" even though all the right numbers are there. What would you check?**
Short answer: Whether the layout requires scrolling, whether too many charts/colors compete for attention, and whether the most important number is visually prioritized — readability is a design problem as much as a data-completeness one.

### Practical questions
**Q: How would you build a KPI cell that shows "Total Revenue" prominently at the top of a dashboard tab?**
Short answer: A large-font cell referencing (or summarizing from) the pivot table's total, placed at the top-left where the eye lands first, often paired with a comparison like month-over-month change.

## Interview traps / tricky points

- A chart that "looks broken" after refreshing data usually means its source range didn't expand to include new rows, not that the chart itself failed — a common paired issue with the SUM range problem covered in [SUM](/skills/sum-function).
- Conditional formatting rules can silently conflict when multiple overlapping rules are applied to the same range — always check rule order/priority.

## Best practices

- Keep charts linked to a pivot table or a dynamic range, never a static paste.
- Limit conditional formatting to what genuinely needs attention.
- Design a dashboard to fit on one screen — if it needs scrolling, it needs to be simplified, not just made smaller.

---

### ⚡ Quick Revision

**PivotChart** → stays linked, updates automatically with the pivot
**Conditional formatting** → color scales, data bars, highlight rules — use sparingly
**One-tab dashboard** → readable at a glance, no scrolling
`);

setNote('spreadsheets-power-query', `
## 🎯 What is it?

**Power Query** is a spreadsheet tool for importing, transforming, and combining data from multiple sources as a **repeatable, saved process** — instead of manually pasting and reformatting the same import every time new data arrives.

Think of it as recording a macro for data cleaning, except every step is visible, editable, and re-runs automatically on refresh — not a black-box recording.

## 💡 Why is it important?

Manually pasting and reformatting a weekly or monthly export doesn't scale — it's slow and error-prone, and every manual repeat is a chance to make a different mistake than last time. Power Query turns that repeatable cleaning process into a few clicks that refresh consistently, every time.

## Core concept

### Importing data
Instead of pasting values, you connect to a file, folder, or web source as a **query** — a live reference to the source, not a one-time copy.

### Transform steps
Every cleaning action (removing a column, filtering rows, splitting a column, changing a data type) is recorded as a **named, ordered step**. This step list is the repeatable "recipe" — re-running it on a new file re-applies the exact same cleaning automatically.

### Merging queries
Combining two queries by a shared key — conceptually the same as a SQL JOIN or a spreadsheet VLOOKUP, but built into the query itself so both sources refresh and re-merge together.

## Syntax / Formula / Structure

A typical Power Query workflow, as a sequence of steps (each one visible and editable in the Applied Steps pane):

\`\`\`
1. Source          → connect to file/folder
2. Changed Type     → set correct data types per column
3. Filtered Rows    → remove test/invalid rows
4. Removed Columns  → drop unneeded fields
5. Merged Queries   → join with a second table by key
6. Renamed Columns  → clean, consistent column names
7. Close & Load     → send the result back into the spreadsheet
\`\`\`

## 📊 Example

**Task:** Every month, a new \`sales_export.csv\` arrives with the same structure but a new filename/date.

**Without Power Query:** manually open the file, delete a header row, fix date formatting, remove test rows, paste into the master sheet — every single month.

**With Power Query:** build the transform once — Source → Filtered Rows (remove test accounts) → Changed Type (fix date format) → Close & Load. Next month, just refresh the query against the new file; every step re-applies automatically.

## Multiple examples

**Beginner:** Import a single CSV and set correct data types.
**Intermediate:** Import a CSV, filter out test/internal rows, and rename columns to a consistent naming convention.
**Real-world:** Import an entire folder of monthly CSVs, combine them into one table automatically, merge in a reference table (e.g., region lookup) by key, and load the result straight into a pivot-table-ready sheet — repeatable with one click every month going forward.

## ⚠️ Common mistakes

- **Editing the loaded output table directly instead of the query.** Manual edits to the final table get wiped out on the next refresh — all changes must happen as query steps.
- **Building an overly long, undocumented step list** that's hard for anyone else (or future you) to audit — rename steps descriptively as you go.
- **Merging queries without deduplicating the key column first**, which can silently multiply rows (a classic "fan-out" bug also seen in SQL joins).
- **Hardcoding a specific file path** instead of pointing at a folder or a parameter, which breaks the moment the file is renamed or moved.

## Real-world Data Analyst use cases

- **Operations analysis:** automatically combining weekly regional CSV exports into one master table every week.
- **Finance analysis:** merging a transactions export with a currency-conversion reference table on refresh.
- **Any recurring reporting job:** replacing a manual "paste and reformat" ritual with a one-click refresh.

## Related concepts

\`\`\`
Pivot Tables → Charts & Dashboards
  ↓
Power Query & Advanced Spreadsheets ← you are here
  ↓
SQL — SELECT / JOIN (the next step up in scale and repeatability)
\`\`\`
Power Query's "merge queries" step is conceptually the direct spreadsheet precursor to [SQL — JOIN](/skills/sql-joins).

## Practice questions

### Easy
1. What's the key difference between pasting data manually and importing it as a Power Query?

### Medium
2. You need to combine 12 monthly CSV files (same structure) into one table automatically. Which Power Query feature handles this in one step?

### Interview/Advanced
3. A merged query is producing far more rows than either source table. What's the most likely cause?

<details><summary><strong>Answer / Solution</strong></summary>

1. A pasted value is a one-time static copy; a Power Query import is a live, repeatable connection whose transform steps automatically re-apply every time the query is refreshed.
2. Importing an entire folder as a query source ("From Folder") — it combines every file matching the pattern into one table automatically.
3. A duplicate key on one or both sides of the merge — every duplicate match multiplies the resulting rows, the same "fan-out" issue that occurs with a SQL join on a non-unique key.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What problem does Power Query solve?**
Short answer: It replaces a manual, repeated "import and reformat" process with a saved, automatically-repeatable set of transform steps.

### Conceptual questions
**Q: Why shouldn't you manually edit the final output table of a Power Query import?**
Short answer: Because the next refresh regenerates that table from the query's steps, silently overwriting any manual edits — changes need to be made as query steps instead.

### Scenario-based questions
**Q: Your team currently spends an hour every week manually cleaning a CSV export before analysis. How would you propose fixing this?**
Short answer: Build a Power Query that captures every cleaning step once, then have the team simply refresh the query each week — turning an hour of manual work into a one-click refresh.

### Practical questions
**Q: How would you combine data from a folder of similarly-structured CSVs into one table?**
Short answer: Use Power Query's "From Folder" source, which automatically reads and appends every matching file in the folder into a single combined table.

## Interview traps / tricky points

- Merging on a key that isn't unique on at least one side silently multiplies rows — always check for duplicate keys before merging, the same discipline needed for SQL joins.
- A query that references a specific, hardcoded file path breaks the moment that file is renamed or moved — parameterizing the path (or using a folder source) avoids this fragility.

## Best practices

- Never hand-edit the output of a query — always add or fix a transform step instead.
- Name each transform step descriptively so the process is auditable by someone else.
- Prefer folder/parameter-based sources over hardcoded single-file paths for anything recurring.

---

### ⚡ Quick Revision

**Power Query** → repeatable import + transform, not a one-time paste
**Transform steps** → an ordered, editable "recipe" that reruns on refresh
**Merge queries** → spreadsheet-scale JOIN; check for duplicate keys first
**Rule:** never manually edit the loaded output — edit the query instead
`);
