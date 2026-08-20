import { createSkill } from './_create.mjs';

createSkill('intro-to-spreadsheets', {
  title: 'Introduction to Spreadsheets',
  category: 'Spreadsheets',
  what_is_it: 'What a spreadsheet application (Excel or Google Sheets) is, what it\'s good for, and the basic mental model of a grid of cells you can calculate on.',
  why_it_matters: 'Every later spreadsheet skill — formulas, pivot tables, dashboards — assumes this basic mental model. Starting here means nothing later feels like magic.',
  prerequisites: [],
  objectives: [
    'Explain what a spreadsheet is and what problems it solves',
    'Identify the main parts of a spreadsheet application\'s interface',
    'Distinguish Excel from Google Sheets at a high level',
  ],
  estimated_minutes: 60,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-intro-spreadsheets-1', title: 'Open and explore', description: 'Open Excel or Google Sheets, create a new blank file, and identify the ribbon/toolbar, the grid, and the sheet tabs.' },
  ],
  verify: ['Can explain what a spreadsheet is to a non-technical person', 'Can identify the main interface areas without help'],
  note: `
## 🎯 What is it?

A **spreadsheet** is a digital grid of rows and columns where each intersection (a **cell**) can hold a number, text, or a formula that calculates something. Excel and Google Sheets are the two most common spreadsheet applications.

Think of it like an infinitely large piece of graph paper that can do math for you — instead of writing "12 + 8 = 20" by hand, you put 12 in one box, 8 in another, and a formula in a third box that always shows their sum, automatically updating if either number changes.

## 💡 Why is it important?

- It's the most widely used data tool in business — nearly every company, in every industry, uses a spreadsheet somewhere.
- Every later spreadsheet skill (formulas, lookups, pivot tables, dashboards) assumes you're comfortable with the basic grid, so this is the true starting point.
- It's usually a candidate's very first hands-on data tool, well before SQL or Python — a comfortable foundation here makes everything after it easier.

## Core concept

A spreadsheet **file** (called a *workbook*) contains one or more **sheets** (grids), each made of **rows** (numbered) and **columns** (lettered), and their intersections are **cells**, each identified by an address like \`B3\` (column B, row 3).

| Term | Meaning |
|---|---|
| Workbook | The whole file |
| Sheet / Worksheet | One grid/tab inside the file |
| Cell | One box in the grid, identified by column+row (e.g., A1) |
| Formula | An instruction in a cell that calculates a result |
| Ribbon / Toolbar | The menu of commands at the top of the application |

## 📊 Example

A simple spreadsheet tracking weekly expenses:

| | A | B |
|---|---|---|
| 1 | Item | Cost |
| 2 | Coffee | 4 |
| 3 | Lunch | 12 |
| 4 | Total | =SUM(B2:B3) |

Cell B4 doesn't contain the number 16 directly — it contains the formula \`=SUM(B2:B3)\`, which *calculates* 16 and updates automatically if B2 or B3 changes. This automatic recalculation is the core value a spreadsheet adds over a plain table.

## Multiple examples

**Beginner:** Typing a name in A1 and a number in B1, with nothing calculated yet.
**Intermediate:** Adding a formula in C1 (\`=B1*2\`) that calculates based on another cell.
**Real-world:** A small budget tracker with categories in column A, amounts in column B, and a running total formula at the bottom that updates as new rows are added.

## ⚠️ Common mistakes

- **Typing a calculated value directly instead of using a formula** (e.g., typing "16" instead of \`=SUM(B2:B3)\`) — this breaks the moment the underlying numbers change, since nothing updates automatically.
- **Confusing a workbook (the file) with a worksheet (one tab inside it)** — these terms come up constantly and mixing them up causes confusion when following instructions or documentation.

## Real-world Data Analyst use cases

- **Any small analysis:** a spreadsheet is often the fastest tool to open and start working in before reaching for SQL or Python.
- **Sharing results:** spreadsheets are still the most universally accessible way to share a table of numbers with a non-technical stakeholder.

## Related concepts

\`\`\`
Introduction to Spreadsheets ← you are here
  ↓
Workbook & Worksheet
  ↓
Rows, Columns & Cells
  ↓
Cell References
\`\`\`

## Practice questions

### Easy
1. What's the difference between a workbook and a worksheet?

### Medium
2. Why is typing a calculated number directly into a cell considered a bad habit, compared to using a formula?

### Interview/Advanced
3. Why do you think spreadsheets remain so widely used in business despite more powerful tools like SQL and Python existing?

<details><summary><strong>Answer / Solution</strong></summary>

1. A workbook is the entire file; a worksheet is one grid/tab inside that file — a single workbook can contain many worksheets.
2. A typed-in value doesn't update automatically if the underlying numbers change, silently going stale — a formula recalculates every time, staying accurate.
3. Accessibility and low barrier to entry — nearly anyone can open a spreadsheet and understand a grid of numbers, no coding or setup required, making it the default tool for quick, shared, everyday calculations.

</details>

## 🎤 Interview preparation

**Q: What's the core advantage of a formula over typing a number directly?**
Short answer: A formula recalculates automatically whenever the cells it depends on change, keeping the result always accurate — a typed-in number does not.

## Best practices

- Always use a formula for any value that's calculated from other cells, never type the result manually.
- Get comfortable navigating with cell addresses (like B3) early — it's the foundation for every formula that follows.

---

### ⚡ Quick Revision

**Workbook** → the whole file · **Worksheet** → one tab/grid inside it · **Cell** → one box, addressed like B3
**Formula** → a calculated instruction, not a typed value — it updates automatically
`,
});

createSkill('workbook-worksheet', {
  title: 'Workbook & Worksheet',
  category: 'Spreadsheets',
  what_is_it: 'The difference between a workbook (the whole file) and a worksheet (one tab/grid inside it), and how to create, rename, and navigate between multiple sheets.',
  why_it_matters: 'Real spreadsheets almost always use multiple sheets to organize related data — understanding this structure is what makes a multi-tab file navigable instead of confusing.',
  prerequisites: ['intro-to-spreadsheets'],
  objectives: [
    'Create, rename, and delete a worksheet',
    'Navigate between multiple worksheets in one workbook',
    'Reference a cell on a different worksheet',
  ],
  estimated_minutes: 45,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-workbook-worksheet-1', title: 'Organize a multi-tab file', description: 'Create a workbook with 3 sheets — "Raw Data," "Calculations," and "Summary" — and write a formula on Summary that references a cell on Raw Data.' },
  ],
  verify: ['Sheets are named clearly, not left as "Sheet1"', 'Cross-sheet reference correctly pulls the right value'],
  note: `
## 🎯 What is it?

A **workbook** is the entire spreadsheet file. A **worksheet** (or just "sheet") is one grid/tab inside that file — a single workbook can hold many worksheets, shown as tabs along the bottom of the window.

Think of a workbook like a binder, and each worksheet like one page inside it — you can flip between pages, and information on one page can reference information on another.

## 💡 Why is it important?

Real spreadsheets almost always use multiple sheets to organize related data — raw data on one sheet, calculations on another, a clean summary on a third. Understanding this structure is what makes a multi-tab file navigable instead of a confusing wall of tabs.

## Core concept

| Action | What it does |
|---|---|
| Create a sheet | Adds a new blank tab to the workbook |
| Rename a sheet | Gives the tab a clear, descriptive name instead of "Sheet1" |
| Reorder sheets | Drag a tab left/right to change its position |
| Reference another sheet | \`=SheetName!A1\` pulls a value from a different tab |

## Syntax

\`\`\`
=SheetName!CellAddress
=Summary!B2       (references cell B2 on the "Summary" sheet)
='Raw Data'!B2     (sheet names with spaces need single quotes around them)
\`\`\`

## 📊 Example

A workbook with two sheets: **"Raw Data"** (containing transaction rows) and **"Summary"** (containing a total).

On the Summary sheet:

\`\`\`
=SUM('Raw Data'!B2:B100)
\`\`\`

**Explanation:** This formula lives on the Summary sheet but pulls and sums values from the Raw Data sheet — the single quotes around \`'Raw Data'\` are required because the sheet name contains a space.

## Multiple examples

**Beginner:** Renaming "Sheet1" to something descriptive like "Sales."
**Intermediate:** A formula on one sheet referencing a cell on another sheet by name.
**Real-world:** A workbook organized as Raw Data → Calculations → Summary → Dashboard, each sheet building on the previous one, keeping messy source data separate from the final polished output.

## ⚠️ Common mistakes

- **Leaving sheets named "Sheet1," "Sheet2," etc.** — this makes a multi-tab workbook much harder for anyone (including future you) to navigate.
- **Forgetting single quotes around a sheet name that contains a space** in a formula, which causes a formula error.
- **Mixing raw data and calculations on the same sheet**, making it hard to tell what's original data versus a derived result.

## Real-world Data Analyst use cases

- **Any real analysis file:** separating raw data, working calculations, and a final summary/dashboard onto different, clearly-named sheets.
- **Monthly reporting:** a consistent multi-sheet template reused every month, with a "Raw Data" sheet swapped out and everything else recalculating automatically.

## Related concepts

\`\`\`
Introduction to Spreadsheets
  ↓
Workbook & Worksheet ← you are here
  ↓
Rows, Columns & Cells
  ↓
Cell References
\`\`\`

## Practice questions

### Easy
1. What's the correct formula syntax to reference cell A1 on a sheet named "Data"?

### Medium
2. Why would you organize a workbook into separate "Raw Data" and "Summary" sheets instead of putting everything on one sheet?

### Interview/Advanced
3. A formula referencing a sheet named "Q1 Sales" throws an error. What's the likely cause?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=Data!A1\`
2. Separation keeps original data safe from accidental edits, makes it clear what's raw versus calculated, and makes the file easier to navigate and audit.
3. The sheet name contains a space ("Q1 Sales") and needs single quotes around it in the formula: \`='Q1 Sales'!A1\`.

</details>

## 🎤 Interview preparation

**Q: Why organize a spreadsheet into multiple sheets instead of one big sheet?**
Short answer: It separates raw data from calculations and summaries, making the file easier to navigate, audit, and maintain — especially as a project grows.

## Best practices

- Always name sheets descriptively — never leave the default "Sheet1."
- Keep raw/source data on its own sheet, separate from calculations and summaries.
- Use single quotes around any sheet name containing spaces or special characters in a formula.

---

### ⚡ Quick Revision

**Workbook** → the file · **Worksheet** → one tab inside it
**Cross-sheet reference:** \`=SheetName!Cell\` (use \`'Sheet Name'!Cell\` if the name has a space)
`,
});

createSkill('rows-columns-cells', {
  title: 'Rows, Columns & Cells',
  category: 'Spreadsheets',
  what_is_it: 'The grid structure of a spreadsheet — rows (numbered), columns (lettered), and cells (their intersection) — and how to select, insert, delete, and resize them.',
  why_it_matters: 'Every formula and every piece of data lives at a specific row/column address — fluently navigating and manipulating this grid is the physical skill every other spreadsheet skill sits on top of.',
  prerequisites: ['workbook-worksheet'],
  objectives: [
    'Identify a cell, row, and column by its address',
    'Select a range of cells',
    'Insert and delete rows and columns without breaking formulas',
  ],
  estimated_minutes: 45,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-rows-columns-cells-1', title: 'Reorganize a table', description: 'Given a small table, insert a new column between two existing ones and a new row at the top, without breaking any existing formulas.' },
  ],
  verify: ['Can correctly identify any cell by its address', 'Inserting a row/column does not break existing formulas'],
  note: `
## 🎯 What is it?

**Rows** run horizontally (numbered 1, 2, 3...), **columns** run vertically (lettered A, B, C...), and a **cell** is the box where a specific row and column meet — identified by its address, like \`C5\` (column C, row 5).

## 💡 Why is it important?

Every piece of data and every formula lives at a specific address in this grid — fluently navigating, selecting, and manipulating rows/columns/cells is the physical skill every other spreadsheet skill (formulas, lookups, pivot tables) is built on top of.

## Core concept

| Element | Identified by | Example |
|---|---|---|
| Column | A letter (or letters, after Z) | A, B, ..., Z, AA, AB... |
| Row | A number | 1, 2, 3... |
| Cell | Column letter + row number | B3 |
| Range | Two cell addresses separated by a colon | B2:B10 |

### Selecting, inserting, and deleting
- Click and drag to select a **range** of cells.
- Click a row/column header to select the entire row/column.
- Right-click → Insert/Delete to add or remove a row or column — existing formulas automatically adjust their references when you do this correctly through the menu (not by manually cutting and pasting data).

## 📊 Example

| | A | B | C |
|---|---|---|---|
| 1 | Product | Q1 | Q2 |
| 2 | Widget | 100 | 120 |
| 3 | Gadget | 80 | 95 |

- Cell **B2** = 100 (Widget's Q1 value).
- Range **B2:C3** selects all four quarterly numbers.
- Inserting a new column between A and B (for a "Category" column) shifts Q1/Q2 to columns C/D automatically, and any formula referencing B2 automatically updates to reference C2 — this automatic adjustment is a core spreadsheet behavior.

## Multiple examples

**Beginner:** Selecting a single cell and typing a value into it.
**Intermediate:** Selecting a range (B2:B10) to apply a formula like SUM to all of it at once.
**Real-world:** Inserting a new row at the top of a growing dataset for a new week's data, confirming that every formula referencing the original range still works correctly afterward.

## ⚠️ Common mistakes

- **Manually cutting and pasting data to "insert" a row** instead of using Insert Row — this doesn't shift existing formulas correctly and can silently break references.
- **Selecting the wrong range** for a formula (off by one row/column), producing a result that's subtly wrong rather than obviously broken.
- **Deleting a row or column that a formula elsewhere depends on**, causing a \`#REF!\` error in every formula that referenced it.

## Real-world Data Analyst use cases

- **Any data entry or cleanup task:** correctly inserting/deleting rows and columns as a dataset grows or changes shape.
- **Template maintenance:** adding a new column to a recurring report template without breaking existing formulas that reference the original layout.

## Related concepts

\`\`\`
Workbook & Worksheet
  ↓
Rows, Columns & Cells ← you are here
  ↓
Cell References
  ↓
Relative & Absolute References
\`\`\`

## Practice questions

### Easy
1. What's the address of the cell in column D, row 7?

### Medium
2. You need to insert a new column between B and C without breaking any existing formulas. What's the correct approach?

### Interview/Advanced
3. A formula suddenly shows \`#REF!\` after a teammate edited the sheet. What likely happened?

<details><summary><strong>Answer / Solution</strong></summary>

1. D7.
2. Right-click the column C header and choose "Insert Column" (or the equivalent menu command) — this correctly shifts existing data and updates formula references automatically, unlike a manual cut-and-paste.
3. A row, column, or cell that the formula referenced was deleted — \`#REF!\` specifically means the formula is pointing at a reference that no longer exists.

</details>

## 🎤 Interview preparation

**Q: Why does using the "Insert Row/Column" command matter instead of manually shifting data?**
Short answer: It automatically updates every formula's references to account for the shift, whereas manually cutting and pasting data can silently break references without any warning.

## Best practices

- Always use Insert/Delete Row/Column commands rather than manually moving data.
- Double-check a selected range's boundaries before applying a formula to it.
- If a \`#REF!\` error appears, trace it back to a recently deleted row, column, or cell.

---

### ⚡ Quick Revision

**Column** → letter · **Row** → number · **Cell** → column+row (e.g., B3) · **Range** → B2:B10
**Insert/Delete via the menu**, never by manually cutting and pasting — it keeps formula references correct
`,
});

createSkill('cell-references', {
  title: 'Cell References',
  category: 'Spreadsheets',
  what_is_it: 'How a formula points at another cell\'s value by its address, so the formula\'s result updates automatically whenever the referenced cell changes.',
  why_it_matters: 'Cell references are what make a spreadsheet dynamic instead of a static table of typed numbers — nearly every formula you\'ll ever write uses one.',
  prerequisites: ['rows-columns-cells'],
  objectives: [
    'Write a formula that references another cell',
    'Explain what happens to a formula\'s result when a referenced cell changes',
    'Reference a range of cells in a formula',
  ],
  estimated_minutes: 45,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-cell-references-1', title: 'Build a linked calculation', description: 'Given a price in one cell and a quantity in another, write a formula in a third cell that references both to calculate a total.' },
  ],
  verify: ['Formula references cells, not typed-in values', 'Changing a referenced cell correctly updates the formula\'s result'],
  note: `
## 🎯 What is it?

A **cell reference** is how a formula points at another cell's value by its address (like \`B2\`) instead of typing the value directly — so the formula's result automatically updates whenever the referenced cell changes.

## 💡 Why is it important?

Cell references are what make a spreadsheet dynamic instead of a static table of typed numbers — nearly every formula you'll ever write uses one, and understanding them is the difference between a spreadsheet that updates itself and one that requires constant manual re-typing.

## Core concept

A formula that says \`=B2*C2\` doesn't calculate a fixed number — it says "always multiply whatever is currently in B2 by whatever is currently in C2." Change either cell, and the formula's result updates instantly, with no manual re-entry needed.

References can point to:
- A **single cell**: \`=B2\`
- A **range of cells**: \`=SUM(B2:B10)\`
- A **cell on another sheet**: \`=Summary!B2\`

## Syntax

\`\`\`
=B2          (reference a single cell)
=B2:B10      (reference a range of cells, used inside a function)
=B2+C2       (combine two references in a calculation)
\`\`\`

## 📊 Example

| | A | B | C |
|---|---|---|---|
| 1 | Product | Price | Total (Price × 10) |
| 2 | Widget | 12 | =B2*10 |

**Result:** C2 shows 120.

If the price in B2 is changed to 15, C2 automatically recalculates to 150 — no manual edit to C2 needed. This automatic update is the entire point of using a reference instead of typing \`=120\` directly.

## Multiple examples

**Beginner:** \`=A1\` — a cell that simply displays whatever value is in A1.
**Intermediate:** \`=B2*C2\` — a calculation combining two referenced cells.
**Real-world:** A cost calculator where changing a single "tax rate" cell at the top of the sheet automatically updates every total throughout the sheet, because every relevant formula references that one cell instead of having the tax rate typed in repeatedly.

## ⚠️ Common mistakes

- **Typing a value directly instead of referencing the cell it came from** — this is the single most common beginner habit that breaks a spreadsheet's automatic-update advantage.
- **Referencing the wrong cell** (an easy typo, like B2 instead of B3), producing a formula that looks correct but calculates the wrong thing.
- **Not noticing a reference points to an empty cell**, silently treating it as 0 in a calculation where that might not be the intended behavior.

## Real-world Data Analyst use cases

- **Any linked calculation:** referencing a tax rate, exchange rate, or discount percentage from one central cell so it can be updated once and flow through every dependent formula.
- **Cross-checking:** referencing a total from one sheet on a summary sheet, so the summary always reflects the latest underlying data.

## Related concepts

\`\`\`
Rows, Columns & Cells
  ↓
Cell References ← you are here
  ↓
Relative & Absolute References
  ↓
Data Types
\`\`\`

## Practice questions

### Easy
1. Write a formula in C1 that simply displays whatever value is in A1.

### Medium
2. Given price in B2 and quantity in C2, write a formula for the total in D2.

### Interview/Advanced
3. Why is referencing a "tax rate" cell better practice than typing the tax rate directly into every formula that needs it?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=A1\`
2. \`=B2*C2\`
3. If the tax rate ever changes, referencing one central cell means updating it once and every dependent formula recalculates automatically — typing the rate directly into every formula means finding and manually fixing every single occurrence, which is slow and error-prone.

</details>

## 🎤 Interview preparation

**Q: What's the core advantage of a cell reference over a typed-in value?**
Short answer: A reference keeps the formula dynamic — it automatically recalculates whenever the referenced cell changes, while a typed value goes stale the moment the underlying data changes.

## Best practices

- Always reference the cell containing a value rather than retyping that value inside a formula.
- Centralize frequently-reused values (like a tax rate or exchange rate) in one clearly labeled cell that other formulas reference.

---

### ⚡ Quick Revision

**Cell reference** → a formula points at another cell's address, not a typed value
**Result:** the formula automatically updates whenever the referenced cell changes
**Range reference:** \`B2:B10\` — a whole block of cells used inside a function
`,
});

createSkill('relative-absolute-references', {
  title: 'Relative & Absolute References',
  category: 'Spreadsheets',
  what_is_it: 'The difference between a reference that shifts when copied (relative, like B2) and one that stays fixed (absolute, like $B$2) — and why copying a formula across a range depends entirely on getting this right.',
  why_it_matters: 'This is one of the most common sources of a silently broken formula in real spreadsheet work — and one of the fastest wins once understood, since it unlocks copying a formula across an entire range correctly.',
  prerequisites: ['cell-references'],
  objectives: [
    'Explain the difference between a relative and an absolute reference',
    'Use the $ symbol to lock a row, a column, or both',
    'Copy a formula across a range without it breaking',
  ],
  estimated_minutes: 60,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-relative-absolute-1', title: 'Fix a broken copy-down formula', description: 'Given a formula that references a fixed "tax rate" cell, copy it down a column of 20 rows and fix it so every row still references the correct fixed cell.' },
  ],
  verify: ['Relative references correctly shift when copied', 'Absolute references correctly stay fixed when copied'],
  note: `
## 🎯 What is it?

A **relative reference** (like \`B2\`) shifts automatically when a formula is copied to a new location. An **absolute reference** (like \`$B$2\`) stays fixed on the exact same cell no matter where the formula is copied.

Think of a relative reference like giving directions relative to where you're standing ("two steps to the right") — the destination changes if you start somewhere else. An absolute reference is like a specific street address — it means the same place no matter where you're standing when you say it.

## 💡 Why is it important?

This is one of the most common sources of a silently broken formula in real spreadsheet work — and one of the fastest wins once understood, since it's what makes copying one formula down an entire column of thousands of rows actually work correctly.

## Core concept

| Reference type | Symbol | Behavior when copied |
|---|---|---|
| Relative | \`B2\` | Both row and column shift |
| Absolute | \`$B$2\` | Neither row nor column shifts |
| Mixed (column locked) | \`$B2\` | Column stays fixed, row shifts |
| Mixed (row locked) | \`B$2\` | Row stays fixed, column shifts |

The \`$\` symbol "locks" whatever it's placed directly before — before the column letter locks the column, before the row number locks the row.

## Syntax

\`\`\`
=B2          (fully relative — both shift when copied)
=$B$2        (fully absolute — neither shifts when copied)
=$B2         (column locked, row relative)
=B$2         (row locked, column relative)
\`\`\`

## 📊 Example

A tax rate lives in a fixed cell **E1** (5%). A price column runs B2:B10, and you want a tax-amount formula copied down all 9 rows.

**Wrong (relative reference to the tax rate):**
\`\`\`
C2: =B2*E1
\`\`\`
Copied down to C3, this becomes \`=B3*E2\` — the reference to the tax rate cell **shifted** to E2 (which is empty), breaking every row after the first.

**Correct (absolute reference to the tax rate):**
\`\`\`
C2: =B2*$E$1
\`\`\`
Copied down to C3, this becomes \`=B3*$E$1\` — the price reference (B2) correctly shifts to B3, but the tax rate reference stays locked on E1 for every row.

## Multiple examples

**Beginner:** Copying \`=A1*2\` across a row of cells, letting the A1 reference shift naturally as intended.
**Intermediate:** Locking only the column (\`$A2\`) so a formula can be copied both down *and* across a grid while keeping column A as the reference.
**Real-world:** A commission calculator where every salesperson's row references their own row's sales figure (relative) but multiplies by one shared commission-rate cell at the top of the sheet (absolute) — exactly the pattern needed to copy the formula down the entire team's list correctly.

## ⚠️ Common mistakes

- **Copying a formula down a column without locking the reference to a shared value** (like a tax rate or commission rate), causing every row after the first to reference the wrong (often empty) cell.
- **Locking every reference as absolute out of caution**, which then prevents the formula from correctly adjusting to each row's own data when copied.
- **Forgetting mixed references exist**, and manually re-writing a formula for every row/column instead of using a single mixed-reference formula that can be copied both directions at once.

## Real-world Data Analyst use cases

- **Any calculation that references one shared constant** (tax rate, exchange rate, commission %) alongside row-specific data, copied down a large dataset.
- **Building a lookup table or matrix**, where mixed references let one formula be copied across both rows and columns correctly.

## Related concepts

\`\`\`
Cell References
  ↓
Relative & Absolute References ← you are here
  ↓
Data Types
  ↓
Tables
\`\`\`

## Practice questions

### Easy
1. What does \`$B$2\` mean, compared to \`B2\`?

### Medium
2. A formula \`=B2*E1\` (where E1 is a fixed tax rate) is copied down 10 rows and breaks after row 2. What's the fix?

### Interview/Advanced
3. When would a mixed reference (\`$B2\` or \`B$2\`) be the right choice instead of a fully relative or fully absolute one?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`$B$2\` is a fully absolute reference — it stays fixed on cell B2 no matter where the formula is copied; \`B2\` is relative and shifts along with the copy.
2. Change \`E1\` to \`$E$1\` so the tax rate reference stays locked on E1 for every copied row, while the price reference (B2) still correctly shifts to match each row.
3. When a formula needs to be copied in both directions (down *and* across a grid) while keeping one dimension fixed — e.g., always referencing column A's value regardless of which column the formula is copied into, while still letting the row shift normally.

</details>

## 🎤 Interview preparation

**Q: Why does the $ symbol matter when copying a formula across many rows?**
Short answer: It controls which parts of a reference stay fixed versus shift — without locking a shared reference (like a tax rate cell) as absolute, copying the formula down a column will break after the first row, since the reference shifts along with everything else.

## Interview traps / tricky points

- Forgetting to lock a shared reference is one of the most common real-world spreadsheet bugs, and one interviewers frequently probe by presenting a "why did this formula break when copied" scenario.

## Best practices

- Lock any reference to a single shared value (tax rate, commission %, a lookup table's anchor cell) as absolute before copying a formula.
- Leave row-specific/column-specific data references relative so they correctly adjust per row or column.

---

### ⚡ Quick Revision

**Relative (B2)** → shifts when copied
**Absolute ($B$2)** → stays fixed when copied
**Mixed ($B2 or B$2)** → locks only the column or only the row
**Rule:** lock any reference to a single shared value before copying a formula across a range
`,
});

createSkill('spreadsheet-data-types', {
  title: 'Data Types',
  category: 'Spreadsheets',
  what_is_it: 'How a spreadsheet distinguishes numbers, text, dates, and booleans internally, and why a value "looking" like a number doesn\'t always mean it is one.',
  why_it_matters: 'A huge share of "broken formula" problems trace back to a mismatched data type — a number stored as text, or a date that\'s actually just text that happens to look like one.',
  prerequisites: ['relative-absolute-references'],
  objectives: [
    'Identify whether a cell holds a number, text, date, or boolean',
    'Explain why a number stored as text breaks SUM and other math functions',
    'Convert text that looks like a number into an actual number',
  ],
  estimated_minutes: 60,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-data-types-1', title: 'Fix numbers stored as text', description: 'Given a column of prices imported as text (left-aligned, ignored by SUM), convert them into real numbers so they sum correctly.' },
  ],
  verify: ['Can identify a data-type mismatch from cell alignment', 'Converted values sum/calculate correctly'],
  note: `
## 🎯 What is it?

Every cell in a spreadsheet internally stores its value as a specific **data type** — most commonly a **number**, **text**, a **date** (which is secretly a number), or a **boolean** (TRUE/FALSE) — and formulas behave differently depending on which type they're working with.

## 💡 Why is it important?

A huge share of "broken formula" problems trace back to a mismatched data type — most often a number that's secretly stored as text (commonly after importing a CSV), which looks completely normal to the eye but gets silently ignored by SUM, AVERAGE, and other math functions.

## Core concept

| Data type | Example | Default alignment | Notes |
|---|---|---|---|
| Number | \`120\`, \`3.5\` | Right-aligned | Can be used in math directly |
| Text | \`"Widget"\` | Left-aligned | Cannot be used in math directly |
| Date | \`2024-01-15\` | Right-aligned | Secretly stored as a number (days since a reference date) |
| Boolean | \`TRUE\`, \`FALSE\` | Center-aligned | Used in logical formulas like IF |

### The classic trap: numbers stored as text
When data is imported (especially from a CSV or another system), numbers sometimes arrive as **text that looks like a number** — e.g., "120" as a text string rather than the number 120. SUM and AVERAGE silently skip these cells rather than erroring, which can quietly and significantly under-report a total.

**Visual clue:** a real number is right-aligned by default; a number stored as text is left-aligned — this alignment difference is the fastest way to spot the problem.

## Syntax

\`\`\`
=VALUE(A1)     converts text that looks like a number into a real number
=ISTEXT(A1)    returns TRUE if A1 is stored as text
=ISNUMBER(A1)  returns TRUE if A1 is stored as a real number
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | 120 (left-aligned — stored as text) |
| 2 | 340 (left-aligned — stored as text) |

**Formula:** \`=SUM(A1:A2)\`
**Result:** \`0\` — because SUM ignores text values entirely, even ones that look like numbers.

**Fix:** \`=VALUE(A1)\` in a helper column converts "120" (text) into 120 (a real number), after which SUM works correctly.

## Multiple examples

**Beginner:** Checking a column's alignment to spot text-stored numbers at a glance.
**Intermediate:** Using \`=ISNUMBER(A1)\` to flag every cell in a column that isn't actually a real number.
**Real-world:** A price column imported from a legacy system arrives with every value stored as text (often due to a leading apostrophe or a mismatched CSV export setting) — recognizing this immediately from the left-alignment, rather than spending time debugging a "broken" SUM formula.

## ⚠️ Common mistakes

- **Trusting that a value "looks like" a number means it is one.** Only the underlying data type matters to a formula, not visual appearance.
- **Not noticing left-alignment as the tell-tale sign** of a number stored as text — this single visual cue diagnoses the problem instantly, once you know to look for it.
- **Formatting a cell to "look like" a date without the underlying value actually being a real date** — this breaks any date-math formula (like DATEDIF) applied to it.

## Real-world Data Analyst use cases

- **Data cleaning (any domain):** the very first check on any newly imported dataset — are the number and date columns actually stored as numbers and dates, not text?
- **Troubleshooting a "broken" total:** recognizing that a SUM returning 0 (or an unexpectedly low number) is very often a data-type problem, not a formula problem.

## Related concepts

\`\`\`
Relative & Absolute References
  ↓
Data Types ← you are here
  ↓
Tables
\`\`\`
This same underlying issue reappears throughout Spreadsheets — it's the root cause behind many [SUM](/skills/sum-function) and [DATEDIF](/skills/datedif-function) surprises.

## Practice questions

### Easy
1. What visual cue suggests a number is actually stored as text?

### Medium
2. A SUM formula returns 0 on a column that clearly has numbers in it. What's your first hypothesis?

### Interview/Advanced
3. Why does SUM silently ignore text-stored numbers instead of throwing an error?

<details><summary><strong>Answer / Solution</strong></summary>

1. Left-alignment — real numbers are right-aligned by default, while text (including text that looks like a number) is left-aligned.
2. The values are very likely stored as text, not real numbers — check the alignment, then convert with \`=VALUE()\` or a paste-special "convert to number" step.
3. SUM is designed to skip non-numeric content gracefully (like blank cells or genuine text labels) rather than error on every non-numeric cell it encounters — this is usually helpful, but becomes a trap specifically when a numeric-looking value was accidentally imported as text.

</details>

## 🎤 Interview preparation

**Q: How would you diagnose why a SUM formula is returning a lower total than expected?**
Short answer: Check whether the summed values are actually stored as numbers — left-aligned cells are a strong visual signal that values are stored as text and are being silently skipped by SUM.

## Best practices

- Check column alignment as a fast, first-pass data-quality check on any new dataset.
- Use \`=VALUE()\` (or a "convert to number" tool) to fix text-stored numbers before calculating with them.
- Never assume a value's data type from how it looks — verify it.

---

### ⚡ Quick Revision

**Number** → right-aligned by default · **Text** → left-aligned by default
**Classic trap:** numbers imported as text are silently skipped by SUM/AVERAGE
**Fix:** \`=VALUE(cell)\` converts text that looks like a number into a real number
`,
});

createSkill('spreadsheet-tables', {
  title: 'Tables',
  category: 'Spreadsheets',
  what_is_it: 'Converting a plain range of cells into a formal Table — a structured, named range that auto-expands, auto-formats, and supports readable structured references.',
  why_it_matters: 'A Table is what keeps formulas, formatting, and ranges correctly including new rows automatically as data grows — one of the single highest-leverage habits for a spreadsheet that stays reliable over time.',
  prerequisites: ['spreadsheet-data-types'],
  objectives: [
    'Convert a plain range into a formal Table',
    'Explain why a Table auto-expands a formula\'s range when new rows are added',
    'Use a structured reference to refer to a Table column',
  ],
  estimated_minutes: 60,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-tables-1', title: 'Convert a growing dataset into a Table', description: 'Given a plain range of transaction rows, convert it into a Table, then add 3 new rows and confirm any SUM formula referencing the Table automatically includes them.' },
  ],
  verify: ['Range is converted into a real Table, not just formatted to look like one', 'A formula referencing the Table correctly expands to include new rows'],
  note: `
## 🎯 What is it?

A **Table** is a plain range of cells converted into a structured, named object — one with built-in filtering, consistent formatting, and, most importantly, a range that **automatically expands** to include new rows as they're added.

## 💡 Why is it important?

This is one of the single highest-leverage habits for a spreadsheet that stays reliable as data grows — recall from [SUM](/skills/sum-function) that a plain formula like \`=SUM(B2:B50)\` silently ignores row 51 onward when new data is added. A Table fixes this at the root: any formula referencing the Table automatically includes new rows, with zero manual range updates.

## Core concept

Converting a range into a Table gives it:

| Feature | Benefit |
|---|---|
| Auto-expanding range | New rows added at the bottom are automatically included in the Table |
| Structured references | Formulas can refer to \`Table1[Revenue]\` instead of a fragile cell range |
| Automatic formatting | Consistent header/row styling applied automatically |
| Built-in filter buttons | Every column header gets a filter/sort dropdown automatically |
| Automatic formula fill | A formula entered in one row of a Table column fills down the entire column automatically |

## Syntax

\`\`\`
=SUM(Table1[Revenue])         (structured reference — sums the entire Revenue column, including future new rows)
=Table1[@Revenue]             (references the current row's Revenue value, used inside a Table row's formula)
\`\`\`

## 📊 Example

**Before (plain range):**

| | A | B |
|---|---|---|
| 1 | Product | Revenue |
| 2 | Widget | 120 |
| 3 | Gadget | 340 |

\`=SUM(B2:B3)\` — correct today, but silently excludes any row added below row 3 later.

**After converting to a Table** (named \`SalesTable\`):

\`=SUM(SalesTable[Revenue])\` — this reference automatically expands to include any new row added to the table, forever, with zero manual maintenance.

## Multiple examples

**Beginner:** Converting a simple 3-column list into a Table and observing the automatic header styling and filter buttons appear.
**Intermediate:** Writing a SUM formula using a structured reference (\`Table1[Revenue]\`) instead of a fixed cell range.
**Real-world:** A weekly-updated transactions log kept as a Table — every week, new rows are pasted at the bottom, and every downstream formula, pivot table, and chart referencing the Table automatically picks up the new data without a single manual range adjustment.

## ⚠️ Common mistakes

- **Only formatting a range to *look like* a table (borders, header shading) without actually converting it into a real Table object** — this looks identical but doesn't get any of the auto-expansion behavior.
- **Continuing to use fixed cell-range formulas** (\`B2:B50\`) even after converting to a Table, missing out on the entire auto-expansion benefit.
- **Renaming the Table to something unclear** (or leaving the default "Table1," "Table2") across a workbook with several tables, making structured references hard to read.

## Real-world Data Analyst use cases

- **Any recurring dataset that grows over time:** transaction logs, weekly reports, survey responses — anywhere new rows are added on a regular cadence.
- **Feeding a pivot table:** a Table as a pivot table's source means the pivot table's range never needs manual updating, only a refresh.

## Related concepts

\`\`\`
Data Types
  ↓
Tables ← you are here
\`\`\`
This closes the Fundamentals group — everything in Core Formulas, Logic & Conditional, and beyond builds on this base.

## Practice questions

### Easy
1. What's the main advantage a Table has over a plain range for a growing dataset?

### Medium
2. Write a structured-reference formula that sums a Table named \`Orders\`' \`Amount\` column.

### Interview/Advanced
3. A team member formatted a range to "look like" a table with borders and header shading, but a SUM formula referencing it still doesn't include new rows. What's the likely issue?

<details><summary><strong>Answer / Solution</strong></summary>

1. It automatically expands to include new rows added at the bottom, so any formula referencing the Table (via a structured reference) always includes current data without manual range updates.
2. \`=SUM(Orders[Amount])\`
3. The range was only visually formatted to resemble a table, but was never actually converted into a real Table object (via the "Format as Table" / "Insert Table" command) — visual styling alone doesn't provide auto-expansion behavior.

</details>

## 🎤 Interview preparation

**Q: Why would you convert a range into a Table before building a pivot table or dashboard on top of it?**
Short answer: A Table automatically expands its range as new rows are added, so anything built on top of it (formulas, pivot tables, charts) stays current without needing manual range updates every time the data grows.

## Best practices

- Convert any dataset that will grow over time into a real Table, not just a formatted-looking range.
- Use structured references (\`Table[Column]\`) in formulas built on top of a Table, instead of fixed cell ranges.
- Give each Table a clear, descriptive name, especially in a workbook with more than one.

---

### ⚡ Quick Revision

**Table** → a range converted into a structured, auto-expanding object
**Structured reference:** \`Table1[Revenue]\` — always includes new rows automatically
**Rule:** a Table that grows means every formula, pivot table, and chart referencing it stays current
`,
});
