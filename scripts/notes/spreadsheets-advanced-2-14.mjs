// data_analyst_roadmap_curriculum.md — Section 02.14 "Advanced Excel". A
// brand-new chapter — none of this content existed before (dynamic
// arrays, Power Pivot/DAX, and automation are genuinely new ground
// beyond the rest of the Spreadsheets stage).
import { createSkill } from './_create.mjs';

createSkill('dynamic-arrays', {
  title: 'Dynamic Arrays',
  category: 'Spreadsheets',
  what_is_it: 'A formula that automatically "spills" its results into as many neighboring cells as needed, instead of returning just one value or needing to be manually copied down.',
  why_it_matters: 'It\'s the foundation modern functions like FILTER, SORT, and UNIQUE are built on — understanding spilling is required before any of them make sense.',
  prerequisites: ['power-query-dependencies'],
  objectives: [
    'Explain what a "spilled" array formula is',
    'Reference a full spilled range using the # operator',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-dynamic-arrays-1', title: 'Observe a spill', description: 'Write a formula that returns multiple values (like a SEQUENCE or a filtered list) in one cell and observe how it spills into neighboring cells automatically.' },
  ],
  verify: ['Can explain what a spilled array is', 'Can reference a spilled range with #'],
  note: `
## 🎯 What is it?

A **dynamic array** formula returns more than one value at once, and those values automatically **spill** into as many neighboring cells as needed — no manual copying down, no pre-selecting a range first. Entering the formula in just one cell is enough; Excel fills in the rest.

## 💡 Why is it important?

- It's the foundation FILTER, SORT, and UNIQUE (covered next in this chapter) are all built on — none of them make sense without first understanding that a formula can legitimately return many values from one cell.
- It replaces older, clunkier "array formula" workarounds (which required a special \`Ctrl+Shift+Enter\` entry) with formulas that behave normally and update automatically as their result size changes.

## Core concept

\`\`\`
=SEQUENCE(5)
\`\`\`

Entered in cell A1, this single formula spills the numbers 1 through 5 down into A1:A5 automatically — only A1 actually contains the formula; A2:A5 show a "ghost" spilled value that moves and updates automatically if the formula or its result changes.

## 📊 Example

Entering \`=UNIQUE(A2:A100)\` in cell C1 automatically spills every unique value from A2:A100 down column C, however many there turn out to be — if the source data changes and there are now more or fewer unique values, the spill range automatically resizes.

## ⚠️ Common mistakes

- **Typing a value into a cell a formula is currently spilling into**, which blocks the spill and produces a \`#SPILL!\` error — the spill range must stay empty.
- **Referencing only the anchor cell (A1) instead of the whole spilled range** when a later formula needs every spilled value — use the \`#\` spill operator instead (see the "Related concepts" example).

## Related concepts

\`\`\`
Dynamic Arrays ← you are here
  ↓
FILTER → SORT → UNIQUE
\`\`\`
Referencing a full spilled range: \`=SUM(C1#)\` sums every value in the spill starting at C1, however large it currently is.

## 🎤 Interview preparation

**Q: What does a #SPILL! error mean, and what usually causes it?**
Short answer: A dynamic array formula can't spill its results because something (usually existing data) is blocking one or more of the cells it needs — clearing that data, or moving the formula, resolves it.

---

### ⚡ Quick Revision

**Dynamic array** → a formula that automatically spills multiple results into neighboring cells
Reference the whole spill with \`AnchorCell#\` — e.g., \`C1#\`.
`,
});

createSkill('filter-function', {
  title: 'FILTER Function',
  category: 'Spreadsheets',
  what_is_it: 'Returning only the rows of a range that meet one or more conditions, spilled dynamically — a live, formula-based alternative to the manual Filter feature.',
  why_it_matters: 'Unlike the standard Filter dropdown, FILTER\'s result is a live formula that automatically updates as source data changes, and can feed directly into other formulas.',
  prerequisites: ['dynamic-arrays'],
  objectives: [
    'Filter a range to matching rows using FILTER',
    'Combine multiple conditions in a single FILTER formula',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-filter-function-1', title: 'Filter with two conditions', description: 'Use FILTER to return only rows where region is "East" AND amount exceeds $1,000.' },
  ],
  verify: ['Can write a basic FILTER formula', 'Can combine multiple conditions in one FILTER formula'],
  note: `
## 🎯 What is it?

**FILTER** returns only the rows of a range that meet one or more conditions, spilling the matching rows dynamically starting from the formula's cell — a live, formula-based alternative to the standard Filter dropdown (see Filter, in Excel Data Analysis).

## 💡 Why is it important?

- Unlike the standard Filter feature (which just hides non-matching rows in place), FILTER's result is a genuine formula output that lives wherever you put it, updates automatically as source data changes, and can feed directly into other formulas or charts.
- It replaces many older, clunkier array-formula or Advanced Filter workarounds with one readable function.

## Syntax

\`\`\`
=FILTER(array, include, [if_empty])
\`\`\`

\`include\` is a logical test (or combination of tests) that returns TRUE/FALSE for each row.

## 📊 Example

\`=FILTER(A2:D100, (C2:C100="East")*(D2:D100>1000))\` returns only the rows where region (column C) is "East" **and** amount (column D) exceeds 1,000 — multiplying two logical arrays together combines them with AND; adding them (\`+\`) combines with OR.

## ⚠️ Common mistakes

- **Forgetting the \`if_empty\` argument**, causing a \`#CALC!\` error if no rows match the condition — always provide a fallback like \`""\` for when there are zero matches.
- **Using \`AND()\`/\`OR()\` directly inside the include argument instead of \`*\`/\`+\`** — FILTER's array-based conditions need the multiply/add pattern shown above, not the standard AND/OR functions, which don't operate element-wise the same way.

## Related concepts

\`\`\`
Dynamic Arrays
  ↓
FILTER ← you are here
  ↓
SORT
\`\`\`

## 🎤 Interview preparation

**Q: How would you write a FILTER formula for rows where region is "East" OR amount exceeds $1,000?**
Short answer: \`=FILTER(range, (region="East")+(amount>1000), "No matches")\` — adding the two logical conditions combines them with OR (multiplying would combine with AND), and the third argument handles the case where nothing matches.

---

### ⚡ Quick Revision

**FILTER(array, include, [if_empty])** → returns only matching rows, spilled dynamically
Combine conditions with \`*\` (AND) or \`+\` (OR) — always include an \`if_empty\` fallback.
`,
});

createSkill('sort-function', {
  title: 'SORT Function',
  category: 'Spreadsheets',
  what_is_it: 'Returning a range\'s rows reordered by a chosen column, spilled dynamically — a live, formula-based alternative to the manual Sort feature.',
  why_it_matters: 'It updates automatically as source data changes, and can be combined directly with FILTER to filter and sort in one formula.',
  prerequisites: ['filter-function'],
  objectives: [
    'Sort a range with SORT',
    'Combine FILTER and SORT in one formula',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-sort-function-1', title: 'Top N with FILTER + SORT', description: 'Combine FILTER and SORT to return the top 5 highest-revenue orders from a given region.' },
  ],
  verify: ['Can sort a range with SORT', 'Can combine FILTER and SORT in one formula'],
  note: `
## 🎯 What is it?

**SORT** returns a range's rows reordered by a chosen column, spilled dynamically — a live, formula-based alternative to the manual Sort feature (see Sort, in Excel Data Analysis) that automatically re-sorts as the source data changes.

## 💡 Why is it important?

- It updates automatically as source data changes — a manual Sort has to be reapplied by hand every time new data is added, while a SORT formula stays current.
- It combines cleanly with FILTER in one nested formula, letting you filter *and* sort in a single, self-updating step.

## Syntax

\`\`\`
=SORT(array, [sort_index], [sort_order])
\`\`\`

\`sort_index\` is which column to sort by (1 = first column of the array); \`sort_order\` is \`1\` for ascending (default) or \`-1\` for descending.

## 📊 Example

\`=SORT(FILTER(A2:D100, C2:C100="East"), 4, -1)\` first filters to East region rows, then sorts those results by column 4 (e.g., revenue) in descending order — a live "top East region orders" list that updates automatically as source data changes.

## ⚠️ Common mistakes

- **Forgetting \`sort_order\` defaults to ascending**, producing a smallest-first result when descending was intended — always specify \`-1\` explicitly when descending order is needed.
- **Sorting on the wrong column index** relative to the array passed in — the index is relative to the array's own columns, not the worksheet's actual column letters.

## Related concepts

\`\`\`
FILTER
  ↓
SORT ← you are here
  ↓
UNIQUE
\`\`\`

## 🎤 Interview preparation

**Q: How would you build a live "top 5 highest-revenue orders" list that updates automatically?**
Short answer: Nest SORT around FILTER (or just SORT the full range if no filtering is needed) sorted descending by the revenue column, then wrap the whole thing in \`=INDEX(..., SEQUENCE(5))\` or simply reference the top 5 spilled rows — the combination stays live as source data changes.

---

### ⚡ Quick Revision

**SORT(array, [sort_index], [sort_order])** → reorders rows, spilled dynamically; -1 = descending
Combines cleanly with FILTER for a live, self-updating filtered-and-sorted view.
`,
});

createSkill('unique-function', {
  title: 'UNIQUE Function',
  category: 'Spreadsheets',
  what_is_it: 'Returning a list of each distinct value in a range, with duplicates removed, spilled dynamically.',
  why_it_matters: 'It\'s a live, formula-based alternative to Remove Duplicates — the result updates automatically instead of needing to be manually re-run every time source data changes.',
  prerequisites: ['sort-function'],
  objectives: [
    'Extract distinct values from a range with UNIQUE',
    'Explain the difference between UNIQUE and Remove Duplicates',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-unique-function-1', title: 'Build a live category list', description: 'Use UNIQUE to build a live, always-current list of distinct product categories from a raw data column.' },
  ],
  verify: ['Can extract distinct values with UNIQUE', 'Can explain how UNIQUE differs from Remove Duplicates'],
  note: `
## 🎯 What is it?

**UNIQUE** returns a list of each distinct value in a range, with duplicates removed, spilled dynamically starting from the formula's cell.

## 💡 Why is it important?

- It's a live, formula-based alternative to Remove Duplicates — the result automatically updates as source data changes, instead of needing to be manually re-run every time new data is added.
- It's commonly used to power a dropdown list, a slicer-like filter, or the category list feeding into a FILTER/SUMIFS formula — always staying current with the source.

## Syntax

\`\`\`
=UNIQUE(array, [by_col], [exactly_once])
\`\`\`

\`exactly_once\` (optional) returns only values that appear exactly once, instead of every distinct value — a useful way to find non-duplicated entries specifically.

## 📊 Example

\`=UNIQUE(C2:C500)\` on a \`region\` column returns a live, always-current list of every distinct region present in the data — useful as the source list for a data validation dropdown, or as an input to a formula that loops through each region.

## ⚠️ Common mistakes

- **Confusing UNIQUE with Remove Duplicates** — Remove Duplicates permanently deletes duplicate rows from the data itself; UNIQUE produces a separate, live list without touching the source data at all.
- **Forgetting UNIQUE's result is a spilled array** and trying to reference just its first cell when a later formula needs the whole list — use the \`#\` spill operator (see Dynamic Arrays).

## Related concepts

\`\`\`
SORT
  ↓
UNIQUE ← you are here
  ↓
LET
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between using UNIQUE and using Remove Duplicates on a column?**
Short answer: Remove Duplicates permanently deletes duplicate rows from the source data; UNIQUE produces a separate, live, automatically-updating list of distinct values without modifying the original data at all — useful when you need both the full data and a distinct list side by side.

---

### ⚡ Quick Revision

**UNIQUE(array, [by_col], [exactly_once])** → live list of distinct values, spilled dynamically
Doesn't touch the source data — unlike Remove Duplicates, which permanently deletes rows.
`,
});

createSkill('let-function', {
  title: 'LET Function',
  category: 'Spreadsheets',
  what_is_it: 'Naming intermediate values inside a single formula, so a repeated sub-calculation is written once and reused, instead of being duplicated multiple times in the same formula.',
  why_it_matters: 'It makes a complex formula both faster (the named calculation runs once, not once per repetition) and dramatically easier to read.',
  prerequisites: ['unique-function'],
  objectives: [
    'Simplify a formula with a repeated sub-calculation using LET',
    'Explain the performance and readability benefits of LET',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-let-function-1', title: 'Simplify a repeated calculation', description: 'Given a formula that calculates the same intermediate value twice (e.g., a filtered range used in both a SUM and a COUNT), rewrite it using LET to calculate it once.' },
  ],
  verify: ['Can rewrite a formula using LET to name a repeated sub-calculation', 'Can explain why LET can improve performance'],
  note: `
## 🎯 What is it?

**LET** assigns a name to an intermediate value or calculation inside a single formula, then lets you reference that name later in the same formula — instead of repeating the same sub-calculation multiple times.

## 💡 Why is it important?

- A repeated sub-calculation (like the same FILTER applied twice in one formula) makes Excel compute it twice — LET computes it once and reuses the named result, which can be meaningfully faster on large data.
- It makes a complex formula dramatically easier to read — named intermediate steps read like a small, understandable recipe instead of one dense, nested expression.

## Syntax

\`\`\`
=LET(name1, value1, [name2, value2, ...], calculation)
\`\`\`

## 📊 Example

Without LET, calculating a filtered range's average AND count separately means writing the same FILTER condition twice:

\`\`\`
=AVERAGE(FILTER(B2:B100, C2:C100="East")) & " avg of " & COUNT(FILTER(B2:B100, C2:C100="East")) & " orders"
\`\`\`

With LET, the filter is computed once and named:

\`\`\`
=LET(eastOrders, FILTER(B2:B100, C2:C100="East"),
     AVERAGE(eastOrders) & " avg of " & COUNT(eastOrders) & " orders")
\`\`\`

## ⚠️ Common mistakes

- **Not recognizing when a formula has an unnecessary repeated sub-calculation** that LET could name once — this is the exact situation LET is built for.
- **Choosing unclear names for LET variables**, undermining the readability benefit LET is meant to provide.

## Related concepts

\`\`\`
UNIQUE
  ↓
LET ← you are here
  ↓
Advanced Lookup
\`\`\`

## 🎤 Interview preparation

**Q: What problem does LET solve that a regular nested formula doesn't?**
Short answer: It lets a repeated sub-calculation within one formula be computed once and referenced by name multiple times — improving both performance (avoiding redundant recalculation) and readability (naming intermediate steps instead of nesting them densely).

---

### ⚡ Quick Revision

**LET(name, value, ..., calculation)** → names intermediate values inside one formula
Computes a repeated sub-calculation once instead of multiple times — faster and more readable.
`,
});

createSkill('advanced-lookup', {
  title: 'Advanced Lookup',
  category: 'Spreadsheets',
  what_is_it: 'Combining dynamic array functions (FILTER, SORT) with lookup techniques to handle lookup scenarios standard VLOOKUP/XLOOKUP can\'t — like returning multiple matches, or looking up on multiple conditions.',
  why_it_matters: 'Real-world lookups sometimes need more than one match (like every order for a customer, not just the first) — standard lookup functions only ever return one result.',
  prerequisites: ['let-function'],
  objectives: [
    'Return multiple matching rows for a lookup value using FILTER',
    'Combine multiple lookup conditions in one formula',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-advanced-lookup-1', title: 'Return every match', description: 'Given an orders table, use FILTER to return every order (not just the first) for a specific customer ID.' },
  ],
  verify: ['Can return multiple matches for one lookup value using FILTER', 'Can combine multiple lookup conditions in one formula'],
  note: `
## 🎯 What is it?

**Advanced lookup** covers lookup scenarios that standard VLOOKUP, XLOOKUP, or INDEX+MATCH can't handle directly — most commonly, returning **every** matching row for a lookup value (not just the first), or matching on **multiple conditions at once** — typically solved using FILTER instead of a traditional lookup function.

## 💡 Why is it important?

- Standard lookup functions are built to return exactly one match — real questions ("show me every order this customer placed," not just their first one) need something more.
- FILTER naturally handles both "every match" and "multiple conditions" scenarios that traditional lookup functions structurally can't.

## Core concept

| Scenario | Traditional lookup | Advanced (FILTER-based) |
|---|---|---|
| First match only | XLOOKUP/VLOOKUP works fine | — |
| Every matching row | Not possible directly | \`FILTER(range, condition)\` |
| Multiple conditions | Requires helper columns or complex nesting | \`FILTER(range, (cond1)*(cond2))\` |

## 📊 Example

To return **every** order placed by customer ID 452 (not just the first), \`=FILTER(A2:D500, B2:B500=452)\` returns all matching rows at once — something no single VLOOKUP or XLOOKUP call can do, since they're both built to stop at the first match.

## ⚠️ Common mistakes

- **Reaching for VLOOKUP/XLOOKUP out of habit** when the real question needs every match, not just one — recognizing this distinction is the actual skill here.
- **Forgetting an \`if_empty\` fallback** in the FILTER, producing a \`#CALC!\` error for a lookup value with zero matches.

## Related concepts

\`\`\`
LET
  ↓
Advanced Lookup ← you are here
  ↓
Named Ranges
\`\`\`
Builds directly on FILTER and the earlier Lookup & Reference chapter.

## 🎤 Interview preparation

**Q: A stakeholder wants to see every order a specific customer has placed, not just their most recent one. Would VLOOKUP work here?**
Short answer: No — VLOOKUP always returns only the first match. FILTER (\`=FILTER(orders_range, customer_id_column=452)\`) returns every matching row at once, which is what this question actually needs.

---

### ⚡ Quick Revision

**Advanced lookup** → use FILTER for "every match" or multi-condition lookups standard functions can't handle
Traditional lookup functions (VLOOKUP, XLOOKUP) only ever return the first match.
`,
});

createSkill('named-ranges', {
  title: 'Named Ranges',
  category: 'Spreadsheets',
  what_is_it: 'Giving a cell or range a descriptive name (like TaxRate) that can be used in a formula instead of its raw cell address.',
  why_it_matters: 'A formula using a named range reads like plain English and never breaks from a misplaced $ sign — a real readability and reliability upgrade over raw cell references.',
  prerequisites: ['advanced-lookup'],
  objectives: [
    'Create and use a named range in a formula',
    'Explain the reliability advantage of a named range over an absolute cell reference',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-named-ranges-1', title: 'Replace $E$1 with a name', description: 'Given a formula referencing a fixed tax-rate cell with $E$1, create a named range called TaxRate for that cell and rewrite the formula to use it.' },
  ],
  verify: ['Can create a named range', 'Can rewrite a formula to use a named range instead of a raw cell address'],
  note: `
## 🎯 What is it?

A **named range** gives a cell or range a descriptive name — like \`TaxRate\` for cell E1 — that can then be used directly in a formula instead of its raw cell address, and automatically works like an absolute reference (it doesn't shift when copied).

## 💡 Why is it important?

- A formula using a named range reads like plain English: \`=Price*TaxRate\` is instantly clearer than \`=B2*$E$1\`.
- It removes a whole category of Absolute Reference mistakes — a named range behaves as if it's always locked, without needing to remember \`$\` symbols at all.

## Core concept

Creating a named range: select the cell/range, type a name directly into the Name Box (top-left of the interface), and press Enter — the name is then usable in any formula in the workbook.

## 📊 Example

Instead of \`=B2*$E$1\` (where E1 holds a tax rate), naming E1 as \`TaxRate\` lets every formula read \`=B2*TaxRate\` — dramatically clearer to anyone reading the formula later, and immune to the classic "forgot to lock the reference" bug from Absolute References.

## ⚠️ Common mistakes

- **Using a name that's also a valid cell address** (like "Q1"), which Excel will reject or misinterpret — choose names that can't be confused with a cell reference.
- **Not documenting what a named range refers to** in a large workbook, making named ranges just as opaque as raw references if there are many of them and none are self-explanatory.

## Related concepts

\`\`\`
Advanced Lookup
  ↓
Named Ranges ← you are here
  ↓
Power Pivot
\`\`\`
Directly improves on the earlier Absolute References pattern.

## 🎤 Interview preparation

**Q: Why might a formula using a named range be preferable to one using an absolute cell reference like $E$1?**
Short answer: A named range reads like plain English (\`Price*TaxRate\` vs. \`B2*$E$1\`), making the formula's intent clear to anyone reading it later, and it behaves like a locked reference automatically — removing the risk of a forgotten \`$\` symbol.

---

### ⚡ Quick Revision

**Named range** → give a cell/range a descriptive name, usable directly in formulas
Reads like plain English and behaves like an absolute reference automatically.
`,
});

createSkill('power-pivot', {
  title: 'Power Pivot',
  category: 'Spreadsheets',
  what_is_it: 'An add-in that loads multiple tables into an in-memory data model, letting you build relationships between them and calculate measures — the spreadsheet-level precursor to Power BI\'s modeling engine.',
  why_it_matters: 'It handles far larger datasets than a normal worksheet, and lets you analyze data spread across multiple related tables without flattening everything into one giant sheet first.',
  prerequisites: ['named-ranges'],
  objectives: [
    'Explain what Power Pivot adds beyond a standard Pivot Table',
    'Load multiple tables into Power Pivot\'s data model',
  ],
  estimated_minutes: 25,
  resources: ['r-ms-powerbi-training'],
  practice: [
    { id: 'ex-power-pivot-1', title: 'Load two related tables', description: 'Load a customers table and an orders table into Power Pivot and build a relationship between them by customer ID.' },
  ],
  verify: ['Can explain what Power Pivot adds beyond a standard Pivot Table', 'Can load multiple related tables into the data model'],
  note: `
## 🎯 What is it?

**Power Pivot** is an Excel add-in that loads multiple tables into an in-memory **data model**, lets you define relationships between them (like a relational database — see Relationships), and calculate custom **measures** using DAX — going well beyond what a standard Pivot Table (built on one flat table) can do.

## 💡 Why is it important?

- It handles far larger datasets than a normal worksheet comfortably can — millions of rows, loaded into memory rather than a worksheet grid.
- It lets you analyze data spread across multiple related tables (customers, orders, products) directly, without first manually flattening everything into one giant lookup-heavy sheet.
- It's the spreadsheet-level version of the exact same modeling engine Power BI is built on — learning it here previews the Power BI stage later in this roadmap.

## Core concept

| | Standard Pivot Table | Power Pivot |
|---|---|---|
| Source | One flat range/table | Multiple related tables in a data model |
| Scale | Limited by worksheet size | Millions of rows, in-memory |
| Calculations | Calculated Fields (basic) | DAX measures (much more powerful) |
| Relationships | None — needs pre-joined data | Built-in, like a relational database |

## 📊 Example

Instead of using VLOOKUP to pull customer region into a flat orders table before building a pivot table, Power Pivot loads \`Customers\` and \`Orders\` as separate tables, links them by \`customer_id\`, and lets you build a pivot table pulling fields from both — without ever manually merging them into one sheet.

## ⚠️ Common mistakes

- **Flattening data with VLOOKUP before Power Pivot when it isn't necessary** — Power Pivot's whole advantage is handling related tables natively, without that flattening step.
- **Not defining relationships between loaded tables**, causing calculations to behave unexpectedly since Power Pivot doesn't know how the tables connect.

## Related concepts

\`\`\`
Named Ranges
  ↓
Power Pivot ← you are here
  ↓
Data Model
\`\`\`

## 🎤 Interview preparation

**Q: When would you reach for Power Pivot instead of a standard Pivot Table?**
Short answer: When the dataset is too large for a comfortable worksheet, or when the analysis needs to pull from multiple related tables (like customers and orders) without first manually flattening them together with lookups.

---

### ⚡ Quick Revision

**Power Pivot** → an add-in loading multiple related tables into an in-memory data model, with DAX measures
Handles much larger data and multi-table analysis than a standard Pivot Table.
`,
});

createSkill('data-model', {
  title: 'Data Model',
  category: 'Spreadsheets',
  what_is_it: 'The set of tables and relationships loaded into Power Pivot — the spreadsheet\'s own miniature relational database, defining how tables connect for analysis.',
  why_it_matters: 'A well-built data model (correct relationships, right cardinality) is what makes every measure and pivot table built on top of it behave correctly.',
  prerequisites: ['power-pivot'],
  objectives: [
    'Explain what a data model is within Power Pivot',
    'Build a relationship between two tables in the data model',
  ],
  estimated_minutes: 20,
  resources: ['r-ms-powerbi-training'],
  practice: [
    { id: 'ex-data-model-1', title: 'Diagram a data model', description: 'Given three related tables (Customers, Orders, Products), diagram the data model showing each relationship and its direction.' },
  ],
  verify: ['Can explain what a data model is', 'Can identify the relationships needed between a given set of tables'],
  note: `
## 🎯 What is it?

The **data model** is the set of tables and relationships loaded into Power Pivot — effectively a miniature relational database living inside the spreadsheet, directly applying the Relational Database, Primary Key, and Foreign Key concepts from the SQL stage to a spreadsheet context.

## 💡 Why is it important?

- A well-built data model — correct relationships, correct cardinality (one-to-many, etc.) — is what makes every pivot table, measure, and chart built on top of it behave correctly; a broken or missing relationship produces silently wrong results.
- It's the direct spreadsheet-world parallel to a database schema, reinforcing that the same relational thinking applies across tools.

## Core concept

\`\`\`
Customers (1) ────< (many) Orders (1) ────< (many) Order Items
     id                customer_id                 order_id
\`\`\`

Each relationship connects a "one" side (a table's primary key) to a "many" side (a foreign key) — exactly the same pattern as Primary Key/Foreign Key/Relationships in the SQL stage.

## 📊 Example

A data model with \`Customers\`, \`Orders\`, and \`Products\` tables, related by \`customer_id\` and \`product_id\`, lets a single pivot table pull \`customer region\` (from Customers), \`order date\` (from Orders), and \`product category\` (from Products) all at once — the data model handles the "joining," so the pivot table doesn't need one flattened source table.

## ⚠️ Common mistakes

- **Building an incorrect relationship direction or cardinality**, causing a measure to double-count or under-count — the same "fan-out" risk covered in Relationships and Query Dependencies.
- **Leaving a table unrelated to the rest of the model**, which then can't be meaningfully combined with the others in a single pivot table or chart.

## Related concepts

\`\`\`
Power Pivot
  ↓
Data Model ← you are here
  ↓
Basic DAX
\`\`\`
Directly applies Relational Database and Relationships from the SQL stage.

## 🎤 Interview preparation

**Q: Why might a measure in Power Pivot show an unexpectedly inflated total?**
Short answer: Likely an incorrect relationship in the data model — a one-to-many relationship set up backward, or a missing relationship between two tables, can cause a measure to double-count or aggregate incorrectly, the same "fan-out" risk seen with SQL joins.

---

### ⚡ Quick Revision

**Data model** → the tables and relationships loaded into Power Pivot — a miniature relational database in the spreadsheet
A wrong relationship or cardinality silently produces wrong totals downstream.
`,
});

createSkill('basic-dax', {
  title: 'Basic DAX',
  category: 'Spreadsheets',
  what_is_it: 'DAX (Data Analysis Expressions) is the formula language behind Power Pivot\'s measures — similar in spirit to worksheet formulas, but operating across a data model\'s related tables.',
  why_it_matters: 'It\'s what unlocks calculations a standard pivot table\'s Calculated Fields can\'t express — and it\'s the same language Power BI uses, so learning it here previews that stage directly.',
  prerequisites: ['data-model'],
  objectives: [
    'Write a basic DAX measure using SUM and a simple calculation',
    'Explain the difference between a DAX measure and a worksheet formula',
  ],
  estimated_minutes: 30,
  resources: ['r-ms-powerbi-training'],
  practice: [
    { id: 'ex-basic-dax-1', title: 'Write a profit margin measure', description: 'Given Revenue and Cost columns in a data model, write a DAX measure that calculates overall profit margin.' },
  ],
  verify: ['Can write a basic DAX measure', 'Can explain how a DAX measure differs from a regular worksheet formula'],
  note: `
## 🎯 What is it?

**DAX (Data Analysis Expressions)** is the formula language behind Power Pivot's **measures** — calculations that operate across a data model's related tables, rather than a single cell's neighbors the way a worksheet formula does. \`=SUM(Orders[Revenue])\` is a basic DAX measure summing a column from the \`Orders\` table.

## 💡 Why is it important?

- It unlocks calculations a standard pivot table's Calculated Field can't express — DAX measures are aware of the data model's relationships and can aggregate correctly across related tables.
- It's the exact same formula language Power BI uses — learning basic DAX here directly previews the Power BI stage later in this roadmap.

## Syntax

\`\`\`
Total Revenue := SUM(Orders[Revenue])
Profit Margin := DIVIDE(SUM(Orders[Revenue]) - SUM(Orders[Cost]), SUM(Orders[Revenue]))
\`\`\`

A measure has a name, then \`:=\`, then its formula — referencing a column as \`TableName[ColumnName]\`.

## 📊 Example

A \`Profit Margin\` measure, defined once as \`DIVIDE(SUM(Orders[Revenue]) - SUM(Orders[Cost]), SUM(Orders[Revenue]))\`, can then be dropped into any pivot table built on the data model — automatically recalculating correctly at every level of detail (by region, by product, overall) without being redefined each time, unlike a row-level calculated column.

## ⚠️ Common mistakes

- **Using regular division instead of DIVIDE()**, risking a \`#DIV/0!\` error when the denominator is zero — DAX's DIVIDE function handles this gracefully with an optional fallback value.
- **Confusing a DAX measure with a calculated column** — a measure aggregates dynamically based on the current pivot table context (region, date, etc.); a calculated column computes one fixed value per row, always.

## Related concepts

\`\`\`
Data Model
  ↓
Basic DAX ← you are here
  ↓
Excel Automation Concepts
\`\`\`
Directly previews Power BI's DAX Fundamentals chapter, later in this roadmap.

## 🎤 Interview preparation

**Q: Why use DIVIDE() instead of a plain / in a DAX measure?**
Short answer: DIVIDE() gracefully handles division by zero with an optional fallback value (like 0 or blank), avoiding the #DIV/0! error that a plain division would produce whenever the denominator happens to be zero for a given pivot context.

---

### ⚡ Quick Revision

**DAX** → the formula language behind Power Pivot measures, e.g. \`Total Revenue := SUM(Orders[Revenue])\`
Same language Power BI uses — use DIVIDE() instead of / to avoid divide-by-zero errors.
`,
});

createSkill('excel-automation-concepts', {
  title: 'Excel Automation Concepts',
  category: 'Spreadsheets',
  what_is_it: 'A conceptual overview of how repetitive spreadsheet tasks can be automated — macros that record and replay actions, and VBA for more complex custom logic.',
  why_it_matters: 'Knowing automation exists as an option — and roughly what it can and can\'t do — helps you recognize when a repetitive manual task is worth automating, without needing to become a VBA programmer.',
  prerequisites: ['basic-dax'],
  objectives: [
    'Explain what a macro is and what kind of task it\'s suited for',
    'Describe what VBA adds beyond a recorded macro',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-automation-concepts-1', title: 'Identify an automation candidate', description: 'Think of a repetitive spreadsheet task you\'ve done manually more than once, and explain whether a recorded macro could handle it.' },
  ],
  verify: ['Can explain what a macro is and does', 'Can describe a repetitive task that would be a good automation candidate'],
  note: `
## 🎯 What is it?

**Excel automation** covers two levels of automating repetitive spreadsheet work: a **macro** (recording a sequence of manual actions and replaying them with one click or keyboard shortcut) and **VBA** (Visual Basic for Applications — a full programming language for more complex, conditional automation beyond what a simple recording can capture).

## 💡 Why is it important?

- Recognizing when a repetitive manual task is worth automating — and roughly which tool fits (a simple macro vs. custom VBA code vs. Power Query, covered earlier) — is a practical skill, even without becoming a programmer.
- It sets realistic expectations: Power Query already automates most repetitive *data* cleaning/transformation tasks covered in this stage; macros and VBA matter more for automating *actions* across the interface (formatting, navigating between sheets, generating reports).

## Core concept

| Tool | Good for |
|---|---|
| Macro (recorded) | A fixed, repeatable sequence of clicks/actions, replayed exactly |
| VBA (custom code) | Conditional logic, loops, and automation a simple recording can't capture |
| Power Query | Automating repeatable data import/cleaning/transformation specifically |

## 📊 Example

A monthly task of formatting a fresh report (bold headers, apply currency format, auto-fit columns) is a good macro candidate — record the sequence once, and replay it with one click every month. A task requiring conditional logic ("if this region's total is negative, highlight it red and email a note") goes beyond what a simple recorded macro can do and would need custom VBA code.

## ⚠️ Common mistakes

- **Reaching for VBA when Power Query already solves the problem** — most repetitive *data* cleaning/transformation tasks are better solved with Power Query's repeatable, visible steps than with custom code.
- **Recording a macro without understanding it also records mistakes** — an unintended click during recording gets replayed exactly every time, so a recorded macro should be tested carefully before relying on it.

## Related concepts

\`\`\`
Basic DAX
  ↓
Excel Automation Concepts ← you are here
\`\`\`
This closes the Advanced Excel chapter — the final chapter (Excel Projects) applies everything in this stage to complete, real-world briefs.

## 🎤 Interview preparation

**Q: For a repetitive monthly data cleaning task, would you reach for a macro or Power Query?**
Short answer: Power Query, in most cases — it's purpose-built for repeatable data import/cleaning/transformation with visible, editable steps; macros and VBA are generally better suited to automating actions across the interface (formatting, navigation) rather than data transformation itself.

---

### ⚡ Quick Revision

**Macro** → records and replays a fixed sequence of actions
**VBA** → custom code for automation beyond what a simple recording can capture
For repeatable *data* cleaning specifically, Power Query is usually the better tool than either.
`,
});

console.log('Created 11 new Advanced Excel (2.14) skills.');
