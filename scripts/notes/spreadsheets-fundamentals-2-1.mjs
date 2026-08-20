// data_analyst_roadmap_curriculum.md — Section 02.1 "Spreadsheet
// Fundamentals". Splits the existing bundled workbook-worksheet,
// rows-columns-cells, and relative-absolute-references skills into their
// doc-specified individual topics (Workbook/Worksheet, Rows/Columns/Cells,
// Relative/Absolute/Mixed References), and adds the 4 genuinely new ones
// the doc lists (Excel Interface, Ranges, Number Formats, Basic
// Formatting). The 3 bundled originals are retired by
// rewire-spreadsheets-fundamentals-2-1.mjs after this runs.
import { createSkill } from './_create.mjs';

createSkill('excel-interface', {
  title: 'Excel Interface',
  category: 'Spreadsheets',
  what_is_it: 'The main parts of a spreadsheet application\'s window — the ribbon, formula bar, name box, sheet tabs, and status bar — and what each one is for.',
  why_it_matters: 'Every later instruction ("click the ribbon," "check the name box") assumes you already know where these pieces are — five minutes spent here saves confusion in every topic that follows.',
  prerequisites: ['intro-to-spreadsheets'],
  objectives: [
    'Identify the ribbon, formula bar, name box, sheet tabs, and status bar',
    'Explain what each main interface element is used for',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-excel-interface-1', title: 'Label the interface', description: 'Open Excel or Google Sheets and identify the ribbon/toolbar, formula bar, name box, and sheet tabs.' },
  ],
  verify: ['Can name the five main interface areas', 'Can explain what the formula bar and name box are each used for'],
  note: `
## 🎯 What is it?

The **interface** is the layout of a spreadsheet application's window — the fixed set of areas you use constantly, regardless of what data you're working with:

| Area | What it's for |
|---|---|
| **Ribbon / Toolbar** | Commands, organized into tabs (Home, Insert, Formulas, Data...) |
| **Formula Bar** | Shows and edits the actual content (formula or value) of the selected cell |
| **Name Box** | Shows the selected cell's address; typing a cell address here jumps to it |
| **Sheet Tabs** | Switch between worksheets in the workbook |
| **Status Bar** | Quick stats (sum, average, count) for whatever's currently selected |

## 💡 Why is it important?

- Every later instruction in this roadmap ("check the formula bar," "click the ribbon's Data tab") assumes you already know where these live — this is the five-minute orientation that prevents confusion later.
- The **formula bar** specifically is one of the most useful, most overlooked tools — it's how you see a cell's *actual* formula, not just its displayed result.

## 📊 Example

Clicking on a cell that displays "16" might show \`=SUM(B2:B3)\` in the formula bar — the cell displays a *calculated result*, but the formula bar reveals what actually produced it. This distinction (displayed value vs. underlying formula) trips up nearly every beginner at least once.

## ⚠️ Common mistakes

- **Editing a cell's displayed value directly without checking the formula bar first**, accidentally overwriting a formula with a hardcoded number.
- **Not knowing about the Name Box**, and manually scrolling to a specific cell instead of just typing its address (e.g., \`Z500\`) into the Name Box to jump straight there.

## Related concepts

\`\`\`
Introduction to Spreadsheets
  ↓
Excel Interface ← you are here
  ↓
Workbook → Worksheet
\`\`\`

## 🎤 Interview preparation

**Q: How do you check whether a cell showing a number actually contains a formula?**
Short answer: Click the cell and look at the formula bar — it shows the cell's real underlying content (a formula, if there is one), separate from the calculated value displayed in the grid itself.

---

### ⚡ Quick Revision

**Ribbon** → commands · **Formula bar** → shows the real formula · **Name box** → jump to a cell by address · **Sheet tabs** → switch worksheets
The formula bar always reveals a cell's true content, not just its displayed result.
`,
});

createSkill('workbook', {
  title: 'Workbook',
  category: 'Spreadsheets',
  what_is_it: 'The entire spreadsheet file — a container that can hold one or many worksheets.',
  why_it_matters: 'Knowing the workbook/worksheet distinction is what makes a multi-tab file navigable and lets you organize related data across separate, purposeful sheets instead of one sprawling grid.',
  prerequisites: ['excel-interface'],
  objectives: [
    'Define a workbook and distinguish it from a worksheet',
    'Explain why real spreadsheet projects usually use multiple sheets within one workbook',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-workbook-1', title: 'Plan a workbook', description: 'Sketch out what sheets a workbook for tracking a month of personal expenses might have, and what each sheet would hold.' },
  ],
  verify: ['Can define a workbook', 'Can name a reason to split data across multiple sheets in one workbook'],
  note: `
## 🎯 What is it?

A **workbook** is the entire spreadsheet file — the thing you save, email, or open. A single workbook can contain one worksheet or many, each holding its own grid of data, shown as tabs along the bottom of the window.

## 💡 Why is it important?

- Real spreadsheet projects almost always use multiple sheets *within one workbook* to organize related data — raw data, calculations, and a summary, kept separate but bundled in one file.
- Understanding "workbook" as the outer container is the first step to organizing a project cleanly, instead of piling everything into a single sprawling sheet.

## Core concept

\`\`\`
Workbook (the file)
 ├── Worksheet: "Raw Data"
 ├── Worksheet: "Calculations"
 └── Worksheet: "Summary"
\`\`\`

Think of a workbook like a binder, and each worksheet like one page inside it.

## 📊 Example

A monthly expense tracker workbook might contain three worksheets: "Transactions" (raw entries), "Categories" (a lookup table of category names), and "Summary" (a dashboard pulling totals from the other two) — all saved as one workbook file.

## ⚠️ Common mistakes

- **Creating a separate workbook file for every logical grouping** instead of separate worksheets within one workbook — this scatters related data across multiple files unnecessarily.
- **Confusing "workbook" and "worksheet"** in conversation or documentation, which can cause real confusion when giving or following instructions.

## Related concepts

\`\`\`
Excel Interface
  ↓
Workbook ← you are here
  ↓
Worksheet
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between a workbook and a worksheet?**
Short answer: A workbook is the entire file; a worksheet is one grid/tab inside that file. One workbook can contain many worksheets.

---

### ⚡ Quick Revision

**Workbook** → the whole file
Can contain one or many worksheets, organized as tabs.
`,
});

createSkill('worksheet', {
  title: 'Worksheet',
  category: 'Spreadsheets',
  what_is_it: 'One grid/tab inside a workbook — the actual rows-and-columns surface you enter data and formulas into.',
  why_it_matters: 'Creating, naming, and referencing worksheets correctly is what turns a workbook from a jumble of "Sheet1, Sheet2, Sheet3" into a navigable, professional file.',
  prerequisites: ['workbook'],
  objectives: [
    'Create, rename, and navigate between worksheets',
    'Reference a cell on a different worksheet',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-worksheet-1', title: 'Cross-sheet reference', description: 'Create a workbook with two sheets, "Raw Data" and "Summary," and write a formula on Summary that references a cell on Raw Data.' },
  ],
  verify: ['Sheets are named clearly, not left as "Sheet1"', 'A cross-sheet reference correctly pulls the right value'],
  note: `
## 🎯 What is it?

A **worksheet** (or just "sheet") is one grid/tab inside a workbook — the actual surface of rows and columns you enter data and formulas into. A workbook's tabs, shown along the bottom of the window, are each a separate worksheet.

## 💡 Why is it important?

- Naming and organizing worksheets clearly is what makes a multi-tab file navigable instead of a wall of "Sheet1, Sheet2, Sheet3."
- Formulas can reference cells on a *different* worksheet — a key technique for keeping raw data, calculations, and summaries separate but connected.

## Core concept

| Action | How |
|---|---|
| Create a sheet | Click the "+" tab, or right-click a tab → Insert |
| Rename a sheet | Double-click the tab and type a new name |
| Reorder sheets | Drag a tab left/right |
| Reference another sheet | \`=SheetName!A1\` |

## Syntax

\`\`\`
=SheetName!CellAddress
=Summary!B2         (references cell B2 on the "Summary" sheet)
='Raw Data'!B2       (sheet names with spaces need single quotes)
\`\`\`

## 📊 Example

\`\`\`
=SUM('Raw Data'!B2:B100)
\`\`\`

This formula lives on a "Summary" sheet but sums values from a "Raw Data" sheet — the single quotes around \`'Raw Data'\` are required because the sheet name contains a space.

## ⚠️ Common mistakes

- **Leaving sheets named "Sheet1," "Sheet2,"** making a multi-tab workbook much harder to navigate.
- **Forgetting single quotes around a sheet name that contains a space** in a cross-sheet formula, causing a formula error.
- **Mixing raw data and calculations on the same sheet**, making it hard to tell what's original versus derived.

## Related concepts

\`\`\`
Workbook
  ↓
Worksheet ← you are here
  ↓
Rows
\`\`\`

## 🎤 Interview preparation

**Q: A formula referencing a sheet named "Q1 Sales" throws an error. What's the likely cause?**
Short answer: The sheet name contains a space and needs single quotes around it in the formula: \`='Q1 Sales'!A1\`.

---

### ⚡ Quick Revision

**Worksheet** → one grid/tab inside a workbook
**Cross-sheet reference:** \`=SheetName!Cell\` (use \`'Sheet Name'!Cell\` if the name has a space)
`,
});

createSkill('rows', {
  title: 'Rows',
  category: 'Spreadsheets',
  what_is_it: 'The horizontal lines of a spreadsheet grid, numbered 1, 2, 3... — one of the two axes every cell address is built from.',
  why_it_matters: 'Inserting, deleting, and selecting rows correctly (via the menu, not manual cut-and-paste) is what keeps formulas from silently breaking as a dataset grows.',
  prerequisites: ['worksheet'],
  objectives: [
    'Identify a row by its number',
    'Insert and delete a row without breaking existing formulas',
  ],
  estimated_minutes: 15,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-rows-1', title: 'Insert a row safely', description: 'Given a small table with a SUM formula, insert a new row in the middle using the Insert Row command and confirm the formula still works.' },
  ],
  verify: ['Can identify a row by its number', 'Inserting a row does not break an existing formula'],
  note: `
## 🎯 What is it?

**Rows** run horizontally across a spreadsheet, numbered 1, 2, 3... down the left side. A row is one of the two coordinates (along with column) that make up every cell's address.

## 💡 Why is it important?

- Most datasets are organized "one row per record" (one row per order, one row per customer) — understanding rows is core to reading any table correctly.
- Inserting or deleting a row the right way (through the menu) automatically updates every formula's references; doing it by manually cutting and pasting data does not, and silently breaks formulas.

## Core concept

| Action | Correct approach |
|---|---|
| Select a row | Click the row number on the left |
| Insert a row | Right-click a row number → Insert |
| Delete a row | Right-click a row number → Delete |

## 📊 Example

Given a table with a total formula in row 10 summing rows 2–9, inserting a new row at row 5 (via Insert, not manual cut-paste) automatically expands the SUM formula's range to include the new row — this automatic adjustment only happens with a proper insert.

## ⚠️ Common mistakes

- **Manually cutting a row's data and pasting it elsewhere** to "move" it instead of using cut/insert commands — this can break formulas that referenced the original row.
- **Deleting a row that other formulas depend on**, producing a \`#REF!\` error everywhere that row was referenced.

## Related concepts

\`\`\`
Worksheet
  ↓
Rows ← you are here
  ↓
Columns
\`\`\`

## 🎤 Interview preparation

**Q: Why does inserting a row through the menu matter instead of manually shifting data down?**
Short answer: The Insert Row command automatically updates every formula's references to account for the new row; manually moving data doesn't, and can silently break references without any warning.

---

### ⚡ Quick Revision

**Row** → horizontal, numbered (1, 2, 3...)
Always insert/delete rows via the menu — never by manually cutting and pasting data.
`,
});

createSkill('columns', {
  title: 'Columns',
  category: 'Spreadsheets',
  what_is_it: 'The vertical lines of a spreadsheet grid, lettered A, B, C... — the second of the two axes every cell address is built from.',
  why_it_matters: 'Columns are almost always where an individual field/attribute lives (name, date, amount) — understanding them is required before writing any formula that references a field across many rows.',
  prerequisites: ['rows'],
  objectives: [
    'Identify a column by its letter',
    'Insert and delete a column without breaking existing formulas',
  ],
  estimated_minutes: 15,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-columns-1', title: 'Insert a column safely', description: 'Given a small table with formulas referencing specific columns, insert a new column in the middle and confirm the formulas still reference the correct data.' },
  ],
  verify: ['Can identify a column by its letter', 'Inserting a column does not break an existing formula'],
  note: `
## 🎯 What is it?

**Columns** run vertically down a spreadsheet, lettered A, B, C... (continuing AA, AB... after Z) across the top. A column is the second coordinate, along with row, that makes up every cell's address.

## 💡 Why is it important?

- Columns are almost always where one specific field lives (name, date, amount) — a table's columns *are* its schema, in spreadsheet form.
- Inserting or deleting a column through the proper menu command keeps every formula's references correct; manually shifting data does not.

## Core concept

| Action | Correct approach |
|---|---|
| Select a column | Click the column letter at the top |
| Insert a column | Right-click a column letter → Insert |
| Delete a column | Right-click a column letter → Delete |

## 📊 Example

A table with columns Product (A), Q1 (B), Q2 (C) — inserting a new "Category" column between A and B (via Insert Column) shifts Q1/Q2 to columns C/D automatically, and any formula referencing B2 automatically updates to reference C2.

## ⚠️ Common mistakes

- **Manually cutting a column's data and pasting it elsewhere** instead of using the Insert/Delete Column commands, risking broken references.
- **Not double-checking which column a formula is really referencing** after several inserts/deletes on a complex sheet — worth periodically sanity-checking with the formula bar.

## Related concepts

\`\`\`
Rows
  ↓
Columns ← you are here
  ↓
Cells
\`\`\`

## 🎤 Interview preparation

**Q: You need to insert a new column between B and C without breaking any existing formulas. What's the correct approach?**
Short answer: Right-click the column C header and choose Insert Column — this correctly shifts existing data and updates formula references automatically, unlike a manual cut-and-paste.

---

### ⚡ Quick Revision

**Column** → vertical, lettered (A, B, C...)
Always insert/delete columns via the menu — it keeps formula references correct.
`,
});

createSkill('cells', {
  title: 'Cells',
  category: 'Spreadsheets',
  what_is_it: 'The individual box where a specific row and column meet — the basic unit that holds one piece of data or one formula.',
  why_it_matters: 'Every formula, every data point, and every reference in a spreadsheet ultimately points at a cell — it\'s the atomic unit everything else is built from.',
  prerequisites: ['columns'],
  objectives: [
    'Identify a cell by its address',
    'Select a single cell versus a range of cells',
  ],
  estimated_minutes: 15,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-cells-1', title: 'Address practice', description: 'Given a small table, write down the address of five different specific cells by their row/column intersection.' },
  ],
  verify: ['Can correctly identify any cell by its address', 'Can select a single cell and distinguish it from selecting a range'],
  note: `
## 🎯 What is it?

A **cell** is the box where a specific row and column meet — the basic unit of a spreadsheet, identified by its address: column letter followed by row number, like \`C5\` (column C, row 5). A cell can hold a value, text, or a formula.

## 💡 Why is it important?

- Every formula, every data point, and every reference in a spreadsheet ultimately points at a cell — it's the atomic unit everything else (rows, columns, ranges, formulas) is built from.
- Fluently identifying a cell's address is the physical skill every later spreadsheet topic (references, formulas, lookups) assumes you already have.

## Core concept

| | Identified by | Example |
|---|---|---|
| Cell | Column letter + row number | B3 |

A cell can contain: a **value** (text or number), or a **formula** (which calculates and displays a result).

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Product | Q1 |
| 2 | Widget | 100 |

Cell **B2** = 100 (Widget's Q1 value). Cell **A1** contains the text "Product." Each is independently addressable and independently referenceable by a formula anywhere else in the sheet.

## ⚠️ Common mistakes

- **Confusing a cell's displayed value with its underlying content** — a cell showing "16" might actually contain the formula \`=SUM(B2:B3)\`, visible in the formula bar, not the literal number 16.
- **Miscounting rows or columns when reading an address**, especially past column Z (where columns continue as AA, AB, AC...).

## Related concepts

\`\`\`
Columns
  ↓
Cells ← you are here
  ↓
Ranges
\`\`\`

## 🎤 Interview preparation

**Q: What's the address of the cell in column D, row 7?**
Short answer: D7 — column letter first, then row number.

---

### ⚡ Quick Revision

**Cell** → the intersection of a row and column, e.g. B3
Holds either a value or a formula — check the formula bar to see which.
`,
});

createSkill('ranges', {
  title: 'Ranges',
  category: 'Spreadsheets',
  what_is_it: 'A rectangular group of two or more cells, written as two corner addresses separated by a colon (e.g., B2:B10) — what most formulas actually operate on.',
  why_it_matters: 'Almost every formula beyond the simplest ones — SUM, AVERAGE, VLOOKUP — takes a range as an input, so selecting the correct range is a constant, foundational skill.',
  prerequisites: ['cells'],
  objectives: [
    'Define a range and write one using colon notation',
    'Select a range by clicking and dragging, and by typing it directly',
  ],
  estimated_minutes: 15,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-ranges-1', title: 'Select a range', description: 'Given a column of 20 numbers, select the full range both by clicking and dragging, and by typing its address directly into a formula.' },
  ],
  verify: ['Can define a range', 'Can write a range address using colon notation'],
  note: `
## 🎯 What is it?

A **range** is a rectangular group of two or more cells, written as its top-left and bottom-right corner addresses separated by a colon: \`B2:B10\` means every cell from B2 through B10. A range can be a single column, a single row, or a full rectangular block.

## 💡 Why is it important?

- Almost every formula beyond a single-cell reference — \`SUM\`, \`AVERAGE\`, \`VLOOKUP\`, a chart's data source — takes a range as its input.
- Selecting the *correct* range (not one row too short, not including a header row by mistake) is one of the most common places a simple mistake quietly produces a wrong number.

## Core concept

| Range | Meaning |
|---|---|
| \`B2:B10\` | A single column, rows 2 through 10 |
| \`A1:D1\` | A single row, columns A through D |
| \`A1:D10\` | A rectangular block, 4 columns × 10 rows |

## 📊 Example

\`=SUM(B2:B10)\` adds every value from cell B2 through B10. \`=SUM(B2:B100)\` on a table that only has data through row 50 still works — it just sums zeros for the empty rows — but selecting a range that's too *short* (e.g., \`B2:B40\` on 50 rows of data) silently excludes real data from the total, without any error.

## ⚠️ Common mistakes

- **Selecting a range that's off by one row or column**, producing a result that's subtly wrong rather than obviously broken.
- **Including a header row in a numeric range by mistake** (e.g., \`B1:B10\` instead of \`B2:B10\`), which can cause errors or skew a calculation depending on the function.
- **Hardcoding a range's size** instead of using a Table (see Excel Tables) or a range that auto-expands as data grows.

## Related concepts

\`\`\`
Cells
  ↓
Ranges ← you are here
  ↓
Cell References
\`\`\`

## 🎤 Interview preparation

**Q: You use \`=SUM(B2:B40)\` but the dataset actually has 50 rows of data. What happens?**
Short answer: The formula silently excludes rows 41–50 from the total — no error is raised, just a quietly understated result. Always double-check a range covers the full dataset, especially after new rows are added.

---

### ⚡ Quick Revision

**Range** → a group of cells, written as \`TopLeft:BottomRight\` (e.g., B2:B10)
What most formulas actually take as their input — double-check its boundaries.
`,
});

createSkill('relative-references', {
  title: 'Relative References',
  category: 'Spreadsheets',
  what_is_it: 'A cell reference (like B2) that automatically shifts to match its new position when a formula is copied elsewhere.',
  why_it_matters: 'It\'s the default reference behavior — the reason you can write one formula and copy it down 1,000 rows, each correctly adjusting to its own row\'s data.',
  prerequisites: ['ranges', 'cell-references'],
  objectives: [
    'Define a relative reference',
    'Predict how a relative reference changes when a formula is copied',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-relative-references-1', title: 'Copy a formula down', description: 'Write a formula in one row that references the row\'s own data, then copy it down 10 rows and confirm each row correctly references its own data.' },
  ],
  verify: ['Can define a relative reference', 'Can predict what a copied relative reference will point to'],
  note: `
## 🎯 What is it?

A **relative reference** (like \`B2\`) is the default kind of cell reference — it shifts automatically when a formula is copied to a new location. Think of it like giving directions relative to where you're standing ("two steps to the right") — the destination changes if you start somewhere else.

## 💡 Why is it important?

- It's what makes copying one formula down an entire column of thousands of rows actually work — each copy automatically adjusts to reference its own row's data.
- It's the default behavior of every reference you type, unless you deliberately lock it (see Absolute References) — understanding it is required before absolute references make any sense.

## Core concept

\`\`\`
C2: =A2*B2      (relative — references row 2)
Copied to C3:
C3: =A3*B3      (automatically shifted to reference row 3)
\`\`\`

Both the row and column shift together when a relative reference is copied — down a column, across a row, or both.

## 📊 Example

A formula \`=B2*1.1\` in cell C2, copied down to C3, C4, C5, automatically becomes \`=B3*1.1\`, \`=B4*1.1\`, \`=B5*1.1\` — each row correctly calculates its *own* 10% markup, without needing to be rewritten by hand.

## ⚠️ Common mistakes

- **Not realizing a reference is relative** when it needs to stay fixed — copying a formula that references one shared value (like a tax rate) with a relative reference causes it to shift incorrectly for every row after the first (see Absolute References).
- **Assuming relative references only shift vertically** — they shift in whichever direction the formula is copied, including horizontally.

## Related concepts

\`\`\`
Cell References
  ↓
Relative References ← you are here
  ↓
Absolute References → Mixed References
\`\`\`

## 🎤 Interview preparation

**Q: You copy \`=A2*B2\` from row 2 down to row 3. What does the formula become, and why?**
Short answer: \`=A3*B3\` — both references are relative by default, so they shift automatically to match the new row when the formula is copied.

---

### ⚡ Quick Revision

**Relative reference (B2)** → shifts automatically when copied
The default behavior — what lets one formula be copied down thousands of rows correctly.
`,
});

createSkill('absolute-references', {
  title: 'Absolute References',
  category: 'Spreadsheets',
  what_is_it: 'A cell reference (like $B$2) locked with $ symbols so it stays fixed on the exact same cell no matter where a formula is copied.',
  why_it_matters: 'It\'s one of the most common sources of a silently broken formula when missing — and one of the fastest wins once understood, since it\'s required to copy a formula that references one shared value down an entire range.',
  prerequisites: ['relative-references'],
  objectives: [
    'Define an absolute reference and write one using $',
    'Fix a formula that breaks when copied by locking the right reference',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-absolute-references-1', title: 'Fix a broken copy-down formula', description: 'Given a formula that references a fixed "tax rate" cell, copy it down a column of 20 rows and fix it so every row still references the correct fixed cell.' },
  ],
  verify: ['Can define an absolute reference', 'Can fix a formula broken by a missing absolute reference'],
  note: `
## 🎯 What is it?

An **absolute reference** (like \`$B$2\`) is a cell reference locked with dollar signs so it stays fixed on the exact same cell no matter where a formula is copied — unlike a relative reference, which shifts. Think of it like a specific street address — it means the same place no matter where you're standing when you say it.

## 💡 Why is it important?

- It's one of the most common sources of a silently broken formula in real spreadsheet work — copying a formula down a column without locking a shared reference (like a tax rate) breaks every row after the first.
- It's one of the fastest wins once understood, since it's exactly what makes copying a formula that references one shared value down an entire range work correctly.

## Syntax

\`\`\`
=$B$2      (fully absolute — neither row nor column shifts when copied)
\`\`\`

The \`$\` "locks" whatever it's placed directly before — before the column letter locks the column, before the row number locks the row.

## 📊 Example

A tax rate lives in a fixed cell **E1** (5%). A price column runs B2:B10.

**Wrong (relative reference to the tax rate):**
\`\`\`
C2: =B2*E1
\`\`\`
Copied down to C3, this becomes \`=B3*E2\` — the tax rate reference **shifted** to E2 (empty), breaking every row after the first.

**Correct (absolute reference to the tax rate):**
\`\`\`
C2: =B2*$E$1
\`\`\`
Copied down to C3, this becomes \`=B3*$E$1\` — the price reference (B2) correctly shifts, but the tax rate stays locked on E1.

## ⚠️ Common mistakes

- **Copying a formula down a column without locking the reference to a shared value**, causing every row after the first to reference the wrong (often empty) cell.
- **Locking every reference as absolute out of caution**, which then prevents the formula from correctly adjusting to each row's own data.

## Related concepts

\`\`\`
Relative References
  ↓
Absolute References ← you are here
  ↓
Mixed References
\`\`\`

## 🎤 Interview preparation

**Q: A formula \`=B2*E1\` (where E1 is a fixed tax rate) is copied down 10 rows and breaks after row 2. What's the fix?**
Short answer: Change \`E1\` to \`$E$1\` so the tax rate reference stays locked for every copied row, while the price reference (B2) still correctly shifts.

---

### ⚡ Quick Revision

**Absolute reference ($B$2)** → stays fixed when copied
**Rule:** lock any reference to a single shared value (tax rate, commission %) before copying a formula across a range.
`,
});

createSkill('mixed-references', {
  title: 'Mixed References',
  category: 'Spreadsheets',
  what_is_it: 'A cell reference that locks only its row or only its column ($B2 or B$2), letting a formula be copied correctly in both directions at once.',
  why_it_matters: 'It\'s the technique that lets one formula be copied across an entire grid (both down and across) instead of being rewritten by hand for every row and column combination.',
  prerequisites: ['absolute-references'],
  objectives: [
    'Define a mixed reference and write one using $',
    'Choose the right kind of mixed reference for a formula that needs to be copied in two directions',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-mixed-references-1', title: 'Build a multiplication grid', description: 'Build a small multiplication table using one formula with mixed references, copied across both rows and columns.' },
  ],
  verify: ['Can define a mixed reference', 'Can choose between $B2 and B$2 correctly for a given scenario'],
  note: `
## 🎯 What is it?

A **mixed reference** locks only the row *or* only the column, using a single \`$\`: \`$B2\` locks the column (B stays fixed, the row shifts), while \`B$2\` locks the row (row 2 stays fixed, the column shifts). It sits between a fully relative reference (\`B2\`, nothing locked) and a fully absolute one (\`$B$2\`, both locked).

## 💡 Why is it important?

- It's what lets a single formula be copied correctly in *two* directions at once — both down a column and across a row — without being rewritten by hand for every cell.
- It shows up constantly in grid-style calculations: multiplication tables, lookup matrices, and any "row header × column header" style layout.

## Core concept

| Reference | Locks | Behavior when copied |
|---|---|---|
| \`B2\` | Nothing | Both row and column shift |
| \`$B2\` | Column | Column stays fixed, row shifts |
| \`B$2\` | Row | Row stays fixed, column shifts |
| \`$B$2\` | Both | Neither shifts |

## 📊 Example

Building a multiplication grid where row headers are in column A and column headers are in row 1: the formula in B2 would be \`=$A2*B$1\` — \`$A2\` always looks at column A (but lets the row shift as you copy down), and \`B$1\` always looks at row 1 (but lets the column shift as you copy across). Copied across the whole grid, this single formula correctly multiplies every row header by every column header.

## ⚠️ Common mistakes

- **Using a fully absolute reference when only one dimension needs to be locked**, which then prevents the formula from adjusting correctly in the direction it *should* shift.
- **Mixing up which symbol locks which part** — remember: the \`$\` locks whatever comes directly after it (before the column letter locks the column; before the row number locks the row).

## Related concepts

\`\`\`
Absolute References
  ↓
Mixed References ← you are here
\`\`\`
This closes the reference-locking sequence (Relative → Absolute → Mixed) — together, these three control exactly how a formula behaves when copied anywhere in a sheet.

## 🎤 Interview preparation

**Q: When would you use a mixed reference instead of a fully relative or fully absolute one?**
Short answer: When a formula needs to be copied in both directions (down *and* across a grid) while keeping one dimension fixed — e.g., always referencing column A's value regardless of which column the formula is copied into, while still letting the row shift normally.

---

### ⚡ Quick Revision

**Mixed reference** → locks only the row or only the column, never both
\`$B2\` → column locked, row shifts · \`B$2\` → row locked, column shifts
`,
});

createSkill('number-formats', {
  title: 'Number Formats',
  category: 'Spreadsheets',
  what_is_it: 'How a number is displayed (currency, percentage, date, decimal places) without changing its actual underlying value.',
  why_it_matters: 'Confusing a number\'s display format with its real stored value is a common source of confusion — formatting a cell to show 2 decimals doesn\'t round the real number used in later calculations.',
  prerequisites: ['spreadsheet-data-types'],
  objectives: [
    'Apply common number formats: currency, percentage, date',
    'Explain the difference between a number\'s format and its actual stored value',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-number-formats-1', title: 'Format a column', description: 'Take a column of raw decimal numbers and format it as currency, then as a percentage, and observe how the underlying value stays the same.' },
  ],
  verify: ['Can apply a currency and a percentage format', 'Can explain that formatting doesn\'t change the underlying stored value'],
  note: `
## 🎯 What is it?

A **number format** controls how a number is *displayed* — as currency ($1,204.50), a percentage (12%), a date (03/14/2024), or with a specific number of decimal places — without changing the number's actual underlying stored value.

## 💡 Why is it important?

- Confusing display formatting with the real value is a common, subtle mistake — formatting a cell to show 2 decimal places doesn't round the *actual* number used in further calculations (that's what the ROUND function is for).
- Correctly formatted numbers (currency symbols, percentages, consistent decimals) are what make a report readable and professional at a glance.

## Core concept

| Format | Raw value | Displayed as |
|---|---|---|
| Currency | 1204.5 | $1,204.50 |
| Percentage | 0.12 | 12% |
| Date | 45365 (a date serial number) | 03/14/2024 |
| Number, 2 decimals | 14.386274 | 14.39 (displayed only — the real value is unchanged) |

## 📊 Example

A cell contains the value \`0.125\`. Formatted as a percentage, it displays "12.5%" — the underlying value is still \`0.125\`, and any formula referencing this cell uses \`0.125\`, not "12.5%" as text.

## ⚠️ Common mistakes

- **Assuming formatting a cell to show 2 decimals actually rounds the value** — it only changes the display; a sum of "rounded-looking" cells can differ slightly from the displayed total, because the true, unrounded values are what's actually being added (use the ROUND function to actually change the stored value).
- **Typing a % sign directly into a cell** without understanding it's being converted and stored as a decimal (e.g., typing "12%" stores 0.12).

## Related concepts

\`\`\`
Data Types
  ↓
Number Formats ← you are here
  ↓
Basic Formatting
\`\`\`

## 🎤 Interview preparation

**Q: Why might a spreadsheet's displayed total not exactly match the sum of its displayed line items, even though both look correctly rounded on screen?**
Short answer: If the cells were only *formatted* to show 2 decimals (not actually rounded with the ROUND function), the underlying values still carry full precision — the displayed total is computed from those true values, which can differ slightly from the sum of the displayed (rounded-looking) numbers.

---

### ⚡ Quick Revision

**Number format** → controls display only (currency, %, date, decimals) — never changes the real stored value
Use the ROUND function to actually change a value, not just its formatting.
`,
});

createSkill('basic-formatting', {
  title: 'Basic Formatting',
  category: 'Spreadsheets',
  what_is_it: 'Visual styling applied to cells — bold, borders, fill color, alignment, and column width — that makes a spreadsheet easier to read without changing any data.',
  why_it_matters: 'Clear formatting is what turns a correct spreadsheet into one a stakeholder can actually read and trust at a glance — a well-analyzed but poorly formatted sheet often undersells the work behind it.',
  prerequisites: ['number-formats'],
  objectives: [
    'Apply bold, borders, fill color, and alignment to make a sheet easier to read',
    'Explain the difference between formatting for readability and formatting a number\'s display',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-basic-formatting-1', title: 'Format a small report', description: 'Take a plain, unformatted small table and apply bold headers, borders, and consistent alignment to make it presentation-ready.' },
  ],
  verify: ['Can apply bold, borders, and fill color to cells', 'Report is visually clear and consistent, not just correct'],
  note: `
## 🎯 What is it?

**Basic formatting** covers the visual styling tools that make a spreadsheet easier to read — bold and italic text, cell borders, fill (background) color, text alignment, and column width — all changes to *appearance*, not to the underlying data or its number format.

## 💡 Why is it important?

- A correct but visually cluttered spreadsheet often undersells the analysis behind it — clean formatting is a large part of what makes a report look trustworthy and professional at a glance.
- It's a fast, low-effort way to guide a reader's eye to what matters — a bold header row, a colored total row, and consistent alignment do a lot of communication work with very little effort.

## Core concept

| Formatting tool | Common use |
|---|---|
| Bold | Header rows, key totals |
| Borders | Separating sections, framing a table |
| Fill color | Highlighting a total row, flagging outliers |
| Alignment | Right-align numbers, left-align text (the spreadsheet default, worth keeping) |
| Column width | Auto-fit so no text is cut off |

## 📊 Example

A raw table of numbers with no formatting is functional but hard to scan. Adding a bold header row, a light fill color on the total row, and consistent right-alignment on all numeric columns turns the same data into something a stakeholder can read in seconds, without changing a single value.

## ⚠️ Common mistakes

- **Over-formatting** — too many colors, fonts, or borders competes for attention and makes a sheet harder to read, not easier.
- **Confusing formatting with a number format** — bold/borders/fill change appearance only, exactly like number formats (currency, %) — neither changes the underlying value, but they solve different problems (visual structure vs. how a number reads).
- **Manually resizing every column** instead of using auto-fit, leading to inconsistent, unpolished-looking columns.

## Related concepts

\`\`\`
Number Formats
  ↓
Basic Formatting ← you are here
  ↓
Excel Tables
\`\`\`
This closes the Spreadsheet Fundamentals chapter — the next chapter (Core Formulas) starts writing actual calculations on top of this grid.

## 🎤 Interview preparation

**Q: Why does formatting matter if the underlying analysis is already correct?**
Short answer: Poor formatting makes a correct analysis harder to trust and read at a glance — clear headers, alignment, and highlighting guide a stakeholder's attention to what matters, which is part of communicating the analysis effectively, not just producing it.

---

### ⚡ Quick Revision

**Basic formatting** → bold, borders, fill color, alignment, column width — visual only, doesn't touch the data
Use it deliberately (headers, totals) — over-formatting hurts readability as much as none at all.
`,
});

console.log('Created 12 Spreadsheet Fundamentals (2.1) skills.');
