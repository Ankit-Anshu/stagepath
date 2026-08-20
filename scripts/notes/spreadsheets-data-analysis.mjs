import { createSkill } from './_create.mjs';

createSkill('sort-spreadsheets', {
  title: 'Sort',
  category: 'Spreadsheets',
  what_is_it: 'Reordering rows in a range based on the values in one or more columns, ascending or descending.',
  why_it_matters: 'One of the most basic and frequently used data-analysis actions — finding the largest, smallest, most recent, or alphabetically first values in a dataset.',
  prerequisites: ['conditional-formatting-spreadsheets'],
  objectives: ['Sort a range by a single column', 'Sort a range by multiple columns with different sort directions'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-sort-1', title: 'Sort a sales list', description: 'Sort a transactions list by region (A-Z), then by amount (largest to smallest) within each region.' }],
  verify: ['Sort correctly orders by the primary column', 'Multi-level sort correctly applies the secondary sort within each primary group'],
  note: `
## 🎯 What is it?

**Sort** reorders rows in a range based on the values in one or more columns, ascending (A-Z, smallest-to-largest) or descending (Z-A, largest-to-smallest).

## 💡 Why is it important?

One of the most basic and frequently used data-analysis actions — finding the largest orders, the most recent dates, or alphabetically organizing a customer list are all sort operations, and they're often the very first step in exploring a new dataset.

## Core concept

- **Single-level sort:** order the whole range by one column.
- **Multi-level sort:** order by a primary column first, then a secondary column *within* each group of the primary column — e.g., sort by region (A-Z), then by revenue (largest first) within each region.

Sorting should always be applied to the **whole related row**, not just one column — sorting only one column while leaving others in place breaks the row-to-row relationships in the data (a name would no longer match its correct amount).

## 📊 Example

| region | revenue |
|---|---|
| East | 300 |
| West | 500 |
| West | 200 |

**Multi-level sort (region A-Z, then revenue largest-first):**

| region | revenue |
|---|---|
| East | 300 |
| West | 500 |
| West | 200 |

**Explanation:** Regions are grouped alphabetically, and within the "West" group, the higher revenue value comes first — this is exactly the layout needed to quickly scan "top performer per region."

## Multiple examples

**Beginner:** Sorting a single column of dates from oldest to newest.
**Intermediate:** Sorting by category (A-Z) then by price (highest first) within each category.
**Real-world:** Sorting a customer list by "last order date" ascending to immediately surface the customers who haven't ordered in the longest time, as a starting point for a re-engagement campaign.

## ⚠️ Common mistakes

- **Selecting only one column to sort**, leaving the rest of the row's data behind — this scrambles the relationship between a row's values and produces corrupted, meaningless data.
- **Sorting a range that includes a header row as if it were data**, or forgetting to exclude/include the header correctly, which can sort the header itself into the middle of the data.
- **Sorting a Table or named range without realizing formulas referencing specific fixed cell positions (rather than structured references) can break**, since the underlying data has physically moved.

## Real-world Data Analyst use cases

- **Any exploratory look at new data:** sorting to quickly find the largest/smallest/most-recent values.
- **Reporting:** sorting a summary table by value (largest first) so the most important rows are immediately visible at the top.

## Related concepts

\`\`\`
Conditional Formatting → Sort ← you are here → Filter → Excel Tables
\`\`\`

## Practice questions

### Easy
1. What's the difference between a single-level and multi-level sort?

### Interview/Advanced
2. Why is selecting only one column to sort (instead of the whole related range) a dangerous mistake?

<details><summary><strong>Answer / Solution</strong></summary>

1. A single-level sort orders by one column only; a multi-level sort orders by a primary column, then applies a secondary sort within each group of that primary column.
2. It breaks the relationship between a row's values — e.g., a customer name would end up next to a different customer's amount, silently corrupting the data without any visible error or warning.

</details>

## 🎤 Interview preparation

**Q: How would you find the top 3 sales by region in a large transactions list?**
Short answer: Apply a multi-level sort — region A-Z as the primary sort, revenue largest-first as the secondary sort — then read the top rows within each region's group directly.

## Best practices

- Always select the entire related range (all relevant columns) when sorting, not just one column.
- Confirm whether a header row is correctly excluded from the sort.

---

### ⚡ Quick Revision

**Sort** → reorders rows by one or more columns, ascending or descending
**Rule:** always sort the whole related row, never just one column in isolation
`,
});

createSkill('filter-spreadsheets', {
  title: 'Filter',
  category: 'Spreadsheets',
  what_is_it: 'Temporarily hiding rows that don\'t match a chosen condition, so only the relevant subset is visible, without altering or deleting the underlying data.',
  why_it_matters: 'The fastest way to focus on a specific subset of data for a quick look, without writing a formula or building a pivot table.',
  prerequisites: ['sort-spreadsheets'],
  objectives: ['Apply a filter to show only rows matching a condition', 'Explain why filtering doesn\'t delete or alter hidden data'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-filter-1', title: 'Filter to one region', description: 'Apply a filter to a transactions list to show only rows where region = "West".' }],
  verify: ['Filter correctly shows only matching rows', 'Underlying data is unaltered — hidden rows still exist'],
  note: `
## 🎯 What is it?

**Filter** temporarily hides rows that don't match a chosen condition, so only the relevant subset is visible — without altering, deleting, or permanently changing the underlying data.

## 💡 Why is it important?

It's the fastest way to focus on a specific subset of data for a quick look — "show me only West region orders" — without writing a formula (like [SUMIF](/skills/sumif-function)) or building a full pivot table, when a quick visual look is all that's needed.

## Core concept

Filters apply per column, using the dropdown that appears on each header when filtering is turned on. Multiple column filters combine with AND — a row must match every active filter to remain visible.

**Key distinction:** filtering only **hides** non-matching rows; it doesn't delete them, and any formula referencing the full range (like a plain SUM) still includes the hidden rows in its calculation unless a filter-aware function (like SUBTOTAL) is used instead.

## 📊 Example

A transactions list is filtered to show only \`region = "West"\` and \`status = "Completed"\`.

**Result:** Only rows matching *both* conditions remain visible — an East-region completed order, or a West-region pending order, are both hidden (not deleted).

## Multiple examples

**Beginner:** Filtering a single column to show only one specific value.
**Intermediate:** Filtering two columns at once, combining conditions with AND automatically.
**Real-world:** Filtering a large transactions export down to just the current month and one specific product category, to quickly spot-check a handful of records before trusting a broader formula-based analysis of the same data.

## ⚠️ Common mistakes

- **Assuming a SUM formula referencing the full range only totals the visible (filtered) rows.** A plain SUM still includes hidden rows — \`=SUBTOTAL(109, range)\` is needed to sum only currently visible rows.
- **Forgetting a filter is still active**, leading to confusion when a later action (like a chart or another formula) seems to be "missing" data that's actually just hidden by an old filter.
- **Copying filtered (visible-only) data without realizing hidden rows might still be included** in a simple copy-paste, depending on the tool and method used.

## Real-world Data Analyst use cases

- **Quick data exploration:** spot-checking a subset of records before building a broader analysis.
- **Data quality review:** filtering to rows that meet a suspicious condition (e.g., a negative amount) for manual review.

## Related concepts

\`\`\`
Sort → Filter ← you are here → Excel Tables → Pivot Tables
\`\`\`
For a repeatable, formula-based version of "sum only what matches a condition," see [SUMIF](/skills/sumif-function)/[SUMIFS](/skills/sumifs-function) — those work correctly regardless of what's currently filtered/visible.

## Practice questions

### Easy
1. Does filtering delete the hidden rows?

### Interview/Advanced
2. Why does a plain SUM formula still include hidden (filtered-out) rows in its total?

<details><summary><strong>Answer / Solution</strong></summary>

1. No — filtering only hides rows that don't match the active condition; the underlying data remains completely intact and reappears when the filter is removed.
2. A plain SUM sums every cell in its specified range regardless of visibility — it has no awareness of the filter state. SUBTOTAL is specifically designed to be filter-aware and only sums currently visible rows.

</details>

## 🎤 Interview preparation

**Q: If you filter a sheet and then look at a SUM formula's total, will it reflect only the visible rows?**
Short answer: Not with a plain SUM — it includes hidden rows regardless of the filter. SUBTOTAL is the filter-aware alternative that only totals currently visible rows.

## Best practices

- Use SUBTOTAL instead of SUM when a total specifically needs to reflect only the currently filtered/visible rows.
- Double-check whether an old filter is still active before assuming a sheet shows all its data.

---

### ⚡ Quick Revision

**Filter** → temporarily hides non-matching rows; doesn't delete or alter data
**SUM still includes hidden rows** — use SUBTOTAL for a filter-aware total
`,
});

createSkill('excel-tables', {
  title: 'Excel Tables',
  category: 'Spreadsheets',
  what_is_it: 'The practical, hands-on application of converting a range into a formal Table — with built-in sort/filter buttons, auto-formatting, and an auto-expanding range.',
  why_it_matters: 'This is where the Fundamentals-stage Tables concept becomes a concrete data-analysis habit: every recurring or growing dataset should live in a Table before it\'s sorted, filtered, or summarized.',
  prerequisites: ['filter-spreadsheets'],
  objectives: ['Convert a range into a Table and use its built-in sort/filter controls', 'Explain why a Table is the right foundation before pivoting or charting'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-excel-tables-1', title: 'Prepare a Table for analysis', description: 'Convert a raw transactions range into a Table, then use its built-in filter buttons to inspect one category at a time.' }],
  verify: ['Range is converted into a real Table', 'Built-in sort/filter controls are used correctly'],
  note: `
## 🎯 What is it?

An **Excel Table** (or Google Sheets' equivalent) is a range formally converted into a structured object — with built-in sort/filter buttons on every header, automatic formatting, and an auto-expanding range. This topic is the practical, hands-on application of the concept introduced in [Tables](/skills/spreadsheet-tables) back in Fundamentals.

## 💡 Why is it important?

This is where the Fundamentals-stage Tables concept becomes a concrete data-analysis habit: every recurring or growing dataset should live in a Table *before* it's sorted, filtered, pivoted, or charted — doing so means every one of those operations automatically stays correct as new data is added, with zero manual range maintenance.

## Core concept

Converting a range to a Table before analysis gives:

- **Built-in Sort/Filter buttons** on every column header automatically — no separate step needed to turn filtering on.
- **Structured references** usable in any formula built on top of it (e.g., \`=SUM(Sales[Amount])\`).
- **Automatic range growth**, so a Pivot Table or SUMIFS formula referencing the Table never needs a manual range update as new rows are added.

## 📊 Example

A recurring weekly transactions log is converted into a Table named \`Transactions\`. Every downstream artifact — a SUMIFS formula, a pivot table, a chart — references \`Transactions\` (or its structured columns) instead of a fixed range like \`A2:E500\`.

**Result:** Pasting in a new week's rows at the bottom automatically flows through to every downstream calculation, chart, and pivot table (after a refresh) — with zero manual range editing required anywhere.

## Multiple examples

**Beginner:** Converting a simple range into a Table and observing the automatic filter buttons appear.
**Intermediate:** Building a SUMIFS formula using structured references against a Table.
**Real-world:** Setting up a recurring weekly reporting workflow where the only manual step each week is pasting new rows into the Table — every chart, pivot table, and formula downstream updates automatically (with a refresh for pivots), because they were all built to reference the Table rather than a fixed range.

## ⚠️ Common mistakes

- **Building a whole analysis workflow (charts, pivots, formulas) on a plain range instead of a Table**, then having to manually fix every broken range reference each time new data is added.
- **Not renaming the Table from its default name** ("Table1"), making structured references in formulas hard to read in a workbook with multiple tables.

## Real-world Data Analyst use cases

- **Any recurring analysis:** the foundational first step for a dataset that will be updated repeatedly over time.

## Related concepts

\`\`\`
Filter → Excel Tables ← you are here → Pivot Tables → Pivot Charts → Slicers → Grouping
\`\`\`
This is the practical foundation feeding into [Pivot Tables](/skills/spreadsheets-pivot-tables) and everything after it in this group.

## Practice questions

### Easy
1. What are two built-in benefits of converting a range into a Table?

### Interview/Advanced
2. Why should a Table be set up *before* building a pivot table or chart on top of the data, rather than after?

<details><summary><strong>Answer / Solution</strong></summary>

1. Any two of: automatic sort/filter buttons, automatic formatting, auto-expanding range, structured references usable in formulas.
2. Building the pivot table/chart against a Table from the start means they automatically pick up new rows as the Table grows — building them against a plain range first means every future data addition requires manually updating each downstream range reference.

</details>

## 🎤 Interview preparation

**Q: Why convert a recurring dataset into a Table before building any analysis on top of it?**
Short answer: A Table automatically expands as new data is added, so anything built on top of it (formulas, pivot tables, charts) stays current without needing manual range updates every time the dataset grows.

## Best practices

- Convert any dataset that will be updated repeatedly into a Table before building further analysis on it.
- Give each Table a clear, descriptive name.

---

### ⚡ Quick Revision

**Excel Table** → structured, auto-expanding range with built-in sort/filter and structured references
**Set up first**, before pivots/charts/formulas, so everything downstream stays current automatically
`,
});

createSkill('pivot-charts', {
  title: 'Pivot Charts',
  category: 'Spreadsheets',
  what_is_it: 'A chart built directly from a pivot table that stays interactively linked to it — filtering or restructuring the pivot table automatically updates the chart.',
  why_it_matters: 'It turns a pivot table\'s numbers into an interactive visual that a stakeholder can explore themselves, without needing a new chart built for every different slice of the data.',
  prerequisites: ['excel-tables'],
  objectives: ['Build a Pivot Chart from a pivot table', 'Explain how a Pivot Chart stays linked to its pivot table'],
  estimated_minutes: 25,
  resources: ['r-ms-pivot-tables', 'r-datavizcatalogue'],
  practice: [{ id: 'ex-pivot-charts-1', title: 'Build an interactive revenue chart', description: 'Build a Pivot Chart from a regional revenue pivot table, then change the pivot table\'s fields and confirm the chart updates automatically.' }],
  verify: ['Pivot Chart correctly reflects the pivot table\'s current summary', 'Chart updates automatically when the pivot table is refreshed or restructured'],
  note: `
## 🎯 What is it?

A **Pivot Chart** is a chart built directly from a [pivot table](/skills/spreadsheets-pivot-tables) that stays interactively linked to it — filtering, restructuring, or refreshing the pivot table automatically updates the chart, with no manual chart-editing needed.

## 💡 Why is it important?

It turns a pivot table's numbers into an interactive visual a stakeholder can explore themselves — instead of building a new chart every time someone wants to see the data sliced a different way, one Pivot Chart adapts automatically as the underlying pivot table's fields or filters change.

## Core concept

A Pivot Chart is built directly on top of a pivot table's fields (Rows, Columns, Values, Filters) — changing any of those in the pivot table immediately reflects in the chart, since they share the same underlying summary.

| Action on the pivot table | Effect on the Pivot Chart |
|---|---|
| Change which field is in Rows | Chart's categories update automatically |
| Apply a filter | Chart's data updates to match |
| Refresh (after source data changes) | Chart reflects the newly refreshed numbers |

## 📊 Example

A pivot table summarizing revenue by region. Building a Pivot Chart (a column chart) from it shows one bar per region.

**Interaction:** Adding "Month" to the pivot table's Columns field instantly reshapes the Pivot Chart into a clustered column chart — one cluster per region, one bar per month within each cluster — without touching the chart itself at all.

## Multiple examples

**Beginner:** A simple Pivot Chart showing revenue by region, built directly from a pivot table.
**Intermediate:** Adding a slicer (see [Slicers](/skills/slicers)) connected to the same pivot table, letting a viewer interactively filter both the pivot table and its chart together.
**Real-world:** A self-service dashboard tab where a stakeholder can change the pivot table's grouping (region vs. product vs. month) using the field list, and the Pivot Chart instantly reshapes to match — no analyst intervention needed for a different view of the same data.

## ⚠️ Common mistakes

- **Building a regular chart from a pivot table's output range instead of an actual Pivot Chart.** A regular chart built this way won't automatically update if the pivot table's structure changes — only a true Pivot Chart stays fully linked.
- **Forgetting the underlying pivot table (and its source data) still needs a refresh** after the source data changes — a Pivot Chart reflects its pivot table's current state, but that state itself doesn't update until refreshed.

## Real-world Data Analyst use cases

- **Self-service dashboards:** letting a stakeholder explore different groupings of the same data interactively.
- **Recurring reports:** a Pivot Chart that stays current automatically as new data flows into the underlying source.

## Related concepts

\`\`\`
Excel Tables → Pivot Tables (existing topic) → Pivot Charts ← you are here → Slicers → Grouping
\`\`\`

## Practice questions

### Easy
1. What happens to a Pivot Chart when its underlying pivot table's Rows field is changed?

### Interview/Advanced
2. Why might a chart built from a pivot table's output range NOT update automatically, while a true Pivot Chart does?

<details><summary><strong>Answer / Solution</strong></summary>

1. The chart automatically reshapes to reflect the new grouping — no manual chart editing is needed, since a Pivot Chart is directly linked to its pivot table's structure.
2. A regular chart built from a static output range only knows about the cells it was originally pointed at — if the pivot table restructures (different fields, different row count), that output range's shape changes and the regular chart doesn't automatically follow; a true Pivot Chart is built with an awareness of the pivot table's structure itself, not just a fixed range, so it adapts automatically.

</details>

## 🎤 Interview preparation

**Q: Why build a Pivot Chart instead of a regular chart on a pivot table's output?**
Short answer: A Pivot Chart stays structurally linked to the pivot table, automatically updating its shape and data whenever the pivot table's fields, filters, or source data change — a regular chart built from a static range doesn't adapt the same way.

## Best practices

- Always build a true Pivot Chart (not a regular chart from a pivot's output range) when the chart needs to stay in sync with a pivot table that might be restructured.

---

### ⚡ Quick Revision

**Pivot Chart** → a chart built directly on a pivot table, stays linked automatically
**Advantage:** restructuring the pivot table automatically reshapes the chart too
`,
});

createSkill('slicers', {
  title: 'Slicers',
  category: 'Spreadsheets',
  what_is_it: 'Clickable, visual filter buttons connected to a pivot table (or multiple pivot tables/charts at once), letting a viewer filter interactively without touching the underlying data or formulas.',
  why_it_matters: 'It\'s what turns a static pivot table report into a self-service dashboard a non-technical stakeholder can explore on their own.',
  prerequisites: ['pivot-charts'],
  objectives: ['Add a slicer connected to a pivot table', 'Connect one slicer to multiple pivot tables or charts at once'],
  estimated_minutes: 25,
  resources: ['r-ms-pivot-tables'],
  practice: [{ id: 'ex-slicers-1', title: 'Add an interactive region filter', description: 'Add a slicer for the Region field, connected to both a pivot table and its Pivot Chart, so one click filters both.' }],
  verify: ['Slicer correctly filters the connected pivot table(s)', 'One slicer correctly controls multiple visuals at once, if connected to more than one'],
  note: `
## 🎯 What is it?

**Slicers** are clickable, visual filter buttons connected to a pivot table (or multiple pivot tables and Pivot Charts at once), letting a viewer filter interactively — with a click, not a dropdown menu — without touching the underlying data or any formula.

## 💡 Why is it important?

It's what turns a static pivot table report into a **self-service dashboard** a non-technical stakeholder can explore on their own — clicking "West" to see just West-region numbers, without needing to know how to use a pivot table's field list or filter dropdown.

## Core concept

A slicer is inserted for a specific field (e.g., Region) and, critically, can be **connected to more than one pivot table or Pivot Chart at once** — clicking one slicer button then filters every connected visual simultaneously, keeping a whole dashboard tab in sync with a single click.

| Feature | Benefit |
|---|---|
| Visual, clickable buttons | Far more approachable for a non-technical viewer than a dropdown filter |
| Multi-report connection | One slicer can filter several pivot tables/charts together |
| Clear visual state | Shows at a glance which value(s) are currently selected |

## 📊 Example

A dashboard tab has a pivot table and a Pivot Chart, both summarizing revenue by month. A **Region slicer** is connected to both.

**Interaction:** Clicking "West" on the slicer instantly filters both the pivot table and the chart to West-region data only — one click, two visuals updated together, with no need to open a menu or type anything.

## Multiple examples

**Beginner:** A single slicer connected to one pivot table.
**Intermediate:** One slicer connected to two different pivot tables summarizing different metrics, keeping both in sync.
**Real-world:** A sales dashboard with Region and Product-Category slicers, both connected to every pivot table and chart on the tab — a sales manager can self-serve any combination of region and category without ever touching a formula or asking an analyst for a custom cut of the data.

## ⚠️ Common mistakes

- **Forgetting to connect a slicer to every relevant pivot table/chart on a dashboard**, leaving some visuals unfiltered while others respond — a confusing, inconsistent experience for the viewer.
- **Adding too many slicers**, cluttering a dashboard and overwhelming a viewer with filter options instead of a clean, focused view (see [Dashboard Design](/skills/dashboard-design) principles).

## Real-world Data Analyst use cases

- **Self-service dashboards:** letting a stakeholder explore data themselves without repeated ad-hoc requests to an analyst.

## Related concepts

\`\`\`
Pivot Charts → Slicers ← you are here → Grouping
\`\`\`
This is the spreadsheet-scale version of a full BI tool's filters, covered later in [Dashboards & BI Tools](/skills/dashboard-design).

## Practice questions

### Easy
1. What's the main advantage of a slicer over a standard pivot table filter dropdown?

### Interview/Advanced
2. Why would you connect one slicer to multiple pivot tables instead of adding a separate slicer to each?

<details><summary><strong>Answer / Solution</strong></summary>

1. It's a visual, clickable button interface that's more approachable and intuitive for a non-technical viewer, compared to using a dropdown filter menu inside the pivot table itself.
2. Connecting one slicer to multiple pivot tables keeps every related visual on a dashboard in sync with a single click — separate, unconnected slicers for each visual would require a viewer to filter each one individually, and risk them ending up showing inconsistent, mismatched views of the data.

</details>

## 🎤 Interview preparation

**Q: How would you let a stakeholder filter an entire dashboard tab (multiple charts and pivot tables) with a single click?**
Short answer: Add a slicer and connect it to every relevant pivot table and Pivot Chart on the tab — one click on the slicer then filters all of them together, in sync.

## Best practices

- Connect a slicer to every relevant visual on a dashboard, so filtering behaves consistently across the whole tab.
- Limit the number of slicers on one dashboard to avoid overwhelming the viewer.

---

### ⚡ Quick Revision

**Slicer** → clickable, visual filter, can connect to multiple pivot tables/charts at once
**Use case:** turns a static report into a self-service dashboard
`,
});

createSkill('grouping-spreadsheets', {
  title: 'Grouping',
  category: 'Spreadsheets',
  what_is_it: 'Collapsing detailed rows or columns into a summarized, expandable outline — and, inside a pivot table, combining individual values (like dates) into broader buckets (like months).',
  why_it_matters: 'It lets a detailed dataset be shown at multiple levels of detail at once, letting a reader drill from a summary into the underlying detail on demand.',
  prerequisites: ['slicers'],
  objectives: ['Group rows or columns into a collapsible outline', 'Group a pivot table\'s date field into months or quarters'],
  estimated_minutes: 25,
  resources: ['r-ms-pivot-tables'],
  practice: [{ id: 'ex-grouping-1', title: 'Group daily data into months', description: 'Given a pivot table with a daily date field, group it into months for a cleaner, higher-level summary.' }],
  verify: ['Grouping correctly collapses detail into the intended broader buckets', 'Underlying detail remains accessible by expanding the group'],
  note: `
## 🎯 What is it?

**Grouping** collapses detailed rows or columns into a summarized, expandable outline — clicking a \`+\`/\`-\` control shows or hides the underlying detail. Inside a **pivot table** specifically, grouping combines individual values (like every single date) into broader buckets (like months or quarters).

## 💡 Why is it important?

It lets a detailed dataset be shown at multiple levels of detail at once — a reader sees a clean summary by default, and can drill into the underlying detail on demand, without needing two separate versions of the same report.

## Core concept

### Outline grouping (rows/columns)
Selecting a range of rows (e.g., all the individual expense line items under one category) and grouping them creates a collapsible outline — collapsed by default to show just the category subtotal, expandable to reveal every line item.

### Pivot table field grouping
A pivot table's date field, by default, shows every individual date as a separate row — often far too granular. Grouping that field into **months** or **quarters** produces a much more useful, higher-level summary automatically, without needing a separate [MONTH](/skills/month-function) helper column.

## 📊 Example

A pivot table summarizing daily revenue shows 365 individual date rows — unreadable as a report.

**Grouping the Date field by Month** collapses this into just 12 rows (one per month), each showing that month's total — instantly more useful, and still expandable back to daily detail if needed.

## Multiple examples

**Beginner:** Grouping a set of detail rows under a category into a collapsible outline.
**Intermediate:** Grouping a pivot table's date field by quarter instead of by individual date.
**Real-world:** A financial summary with expense line items grouped under collapsible category headers — collapsed by default for a clean executive view, but expandable for anyone who needs to audit the underlying detail, all within the same single sheet.

## ⚠️ Common mistakes

- **Leaving a pivot table showing every individual date** instead of grouping into a meaningful bucket (month, quarter, year) appropriate to the audience and question.
- **Grouping rows manually with helper columns (like a MONTH formula) when the pivot table's built-in date grouping would do the same job automatically**, with less setup.
- **Forgetting that a collapsed group still contains its full underlying data** — collapsing doesn't delete anything, just hides it from view, similar to filtering.

## Real-world Data Analyst use cases

- **Finance analysis:** grouping expense line items under collapsible category headers for a clean, drillable report.
- **Sales analysis:** grouping a pivot table's daily date field into months or quarters for a readable trend summary.

## Related concepts

\`\`\`
Slicers → Grouping ← you are here
\`\`\`
This closes the Data Analysis group.

## Practice questions

### Easy
1. What does grouping a pivot table's date field by month accomplish?

### Interview/Advanced
2. Why is pivot table date grouping generally preferred over building a separate MONTH() helper column for the same purpose?

<details><summary><strong>Answer / Solution</strong></summary>

1. It collapses individual daily entries into monthly buckets, producing a much more readable, higher-level summary without losing access to the underlying daily detail.
2. It's built directly into the pivot table with no extra setup, automatically stays in sync as the source data changes, and doesn't require maintaining a separate helper column in the source data — a simpler, more maintainable solution for the same result.

</details>

## 🎤 Interview preparation

**Q: How would you make a daily revenue pivot table more readable for an executive summary?**
Short answer: Group the date field by month (or quarter), collapsing 365 daily rows into a much more digestible 12 monthly rows, while keeping the option to drill back into daily detail if needed.

## Best practices

- Use a pivot table's built-in date grouping instead of manually building a MONTH/YEAR helper column for the same purpose.
- Keep detail available (collapsed, not deleted) so a reader can drill in when needed.

---

### ⚡ Quick Revision

**Grouping** → collapses detail into a summarized, expandable outline
**Pivot table date grouping** → combines individual dates into months/quarters automatically
`,
});
