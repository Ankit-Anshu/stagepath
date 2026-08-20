// data_analyst_roadmap_curriculum.md — Section 02.10 "Excel Data
// Analysis". Sort, Filter, Conditional Formatting, Pivot Tables, Pivot
// Charts, Grouping, and Slicers already exist. Advanced Filter,
// Calculated Fields, and Drill Down are new.
import { createSkill } from './_create.mjs';

createSkill('advanced-filter', {
  title: 'Advanced Filter',
  category: 'Spreadsheets',
  what_is_it: 'Filtering a range using multiple complex criteria defined in a separate criteria range, beyond what the standard Filter dropdown supports.',
  why_it_matters: 'Standard filtering handles simple per-column conditions well, but multi-condition OR logic across columns, or extracting matched rows to a new location, needs Advanced Filter.',
  prerequisites: ['filter-spreadsheets'],
  objectives: [
    'Set up a criteria range for Advanced Filter',
    'Explain when Advanced Filter is needed over the standard Filter dropdown',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-advanced-filter-1', title: 'Filter with OR logic', description: 'Given a sales table, use Advanced Filter to find rows where region is "East" OR amount exceeds $10,000 — a condition the standard Filter dropdown can\'t express directly.' },
  ],
  verify: ['Can set up a criteria range for Advanced Filter', 'Can explain a scenario Advanced Filter handles that standard Filter can\'t'],
  note: `
## 🎯 What is it?

**Advanced Filter** filters a range using criteria defined in a separate **criteria range** on the sheet, rather than the standard per-column Filter dropdown — enabling more complex logic, including OR conditions across different columns, and the ability to extract matching rows to a new location.

## 💡 Why is it important?

- The standard Filter dropdown handles simple, per-column AND-style conditions well, but can't express "region is East OR amount > $10,000" (an OR across two different columns) — Advanced Filter can.
- It can copy matching results to a separate location automatically, which the standard filter doesn't do.

## Core concept

A criteria range mirrors the source data's headers, with conditions written underneath:

\`\`\`
Region | Amount
East   |
       | >10000
\`\`\`

Conditions on the **same row** are combined with AND; conditions on **different rows** are combined with OR. The layout above means: Region = East, **OR** Amount > 10,000.

## 📊 Example

To find all orders that are either from the East region or worth more than $10,000, a standard Filter dropdown can't express this OR-across-columns logic — Advanced Filter, using the criteria range above, correctly returns both groups of matching rows.

## ⚠️ Common mistakes

- **Misunderstanding the same-row-AND, different-row-OR convention**, producing a criteria range that filters for the wrong logic entirely.
- **Forgetting to match the criteria range's headers exactly to the source data's headers** — a typo or mismatch causes Advanced Filter to silently fail to apply that condition.

## Related concepts

\`\`\`
Filter
  ↓
Advanced Filter ← you are here
  ↓
Conditional Formatting
\`\`\`

## 🎤 Interview preparation

**Q: How would you filter a sales table for rows that are either from the East region or over $10,000, when the standard Filter dropdown can't express an OR across two different columns?**
Short answer: Use Advanced Filter with a criteria range that places the two conditions on separate rows — same-row conditions combine with AND, different-row conditions combine with OR, correctly capturing this logic.

---

### ⚡ Quick Revision

**Advanced Filter** → filters using a separate criteria range; same row = AND, different rows = OR
Handles cross-column OR logic and can extract results to a new location — beyond the standard Filter dropdown.
`,
});

createSkill('calculated-fields', {
  title: 'Calculated Fields',
  category: 'Spreadsheets',
  what_is_it: 'A custom field defined inside a Pivot Table itself, computed from other fields already in the pivot — without adding a new column to the source data.',
  why_it_matters: 'It lets a pivot table show a derived metric (like profit margin) without modifying the underlying source data at all.',
  prerequisites: ['spreadsheets-pivot-tables'],
  objectives: [
    'Add a calculated field to a Pivot Table',
    'Explain the difference between a calculated field and a calculated column in the source data',
  ],
  estimated_minutes: 25,
  resources: ['r-ms-pivot-tables'],
  practice: [
    { id: 'ex-calculated-fields-1', title: 'Add a margin calculated field', description: 'Given a Pivot Table with Revenue and Cost fields, add a Calculated Field for Profit Margin without changing the source data.' },
  ],
  verify: ['Can add a calculated field to a Pivot Table', 'Can explain when a calculated field is preferable to a source-data calculated column'],
  note: `
## 🎯 What is it?

A **calculated field** is a custom field defined inside a Pivot Table, computed from other fields already present in the pivot — without adding anything to the underlying source data. \`Profit Margin = Sum(Revenue) - Sum(Cost)\` as a calculated field appears as a normal field inside the pivot, computed on the fly.

## 💡 Why is it important?

- It lets a pivot table show a derived metric without modifying the source data at all — useful when you don't want to (or can't) add a new column to the original table.
- It's computed *after* the pivot's aggregation, which matters: a calculated field operates on the summarized totals, not row-by-row, which can behave differently than a calculated column in the source data (see Adding Calculated Columns) for non-additive metrics like a ratio.

## 📊 Example

A Pivot Table summarizing Revenue and Cost by region can add a calculated field \`= Revenue - Cost\` to show Profit directly in the pivot, without ever adding a "Profit" column to the source data table.

## ⚠️ Common mistakes

- **Confusing a calculated field with a calculated column added to the source data** — a calculated field computes on the pivot's already-aggregated totals, which can give a different (and sometimes more correct) result for ratios and percentages than averaging a row-level calculated column would.
- **Building a calculated field with circular or overly complex logic**, which pivot tables handle less gracefully than a plain worksheet formula.

## Related concepts

\`\`\`
Pivot Tables
  ↓
Calculated Fields ← you are here
  ↓
Drill Down
\`\`\`

## 🎤 Interview preparation

**Q: Why might a pivot table's calculated field for "average margin" give a different result than averaging a row-level margin column?**
Short answer: A calculated field computes on the pivot's already-aggregated totals (e.g., total revenue and total cost first, then margin), while averaging a row-level margin column averages each row's individually-computed margin — these can differ meaningfully when order sizes vary, and the aggregated version is usually more accurate for an overall margin.

---

### ⚡ Quick Revision

**Calculated field** → a custom pivot-table field, computed from other pivot fields, without touching the source data
Computes on the pivot's aggregated totals — can differ from a row-level calculated column for ratios.
`,
});

createSkill('drill-down', {
  title: 'Drill Down',
  category: 'Spreadsheets',
  what_is_it: 'Double-clicking a Pivot Table\'s summary value to instantly see the individual source rows that make it up, on a new sheet.',
  why_it_matters: 'It\'s the fastest way to verify a summary number is correct, or to investigate an unexpected total, without writing a single filter formula.',
  prerequisites: ['calculated-fields'],
  objectives: [
    'Drill down from a Pivot Table summary value to its source rows',
    'Use drill-down to investigate an unexpected total',
  ],
  estimated_minutes: 15,
  resources: ['r-ms-pivot-tables'],
  practice: [
    { id: 'ex-drill-down-1', title: 'Verify a total', description: 'Given a Pivot Table showing total revenue by region, double-click one region\'s total to drill down and confirm which individual orders it\'s built from.' },
  ],
  verify: ['Can drill down from a pivot summary to its source rows', 'Can explain a use case for drilling down'],
  note: `
## 🎯 What is it?

**Drill down** means double-clicking a value inside a Pivot Table to instantly see every individual source row that was summed/counted/averaged into it — Excel automatically creates a new sheet containing exactly those underlying rows.

## 💡 Why is it important?

- It's the fastest way to verify a summary number is correct, or to investigate why a total looks unexpectedly high or low — no filter formula needed, just a double-click.
- It builds trust in a pivot table's output — being able to instantly show "here are the exact 14 orders that make up this $42,000" is a strong, immediate way to defend a number.

## 📊 Example

A Pivot Table shows East region revenue at $340,000 — higher than expected. Double-clicking that cell instantly opens a new sheet listing every individual order row that was summed into it, letting you scan for an obvious outlier (like one unusually large order) in seconds.

## ⚠️ Common mistakes

- **Not knowing drill-down exists**, and instead manually rebuilding a filter to find the same underlying rows — much slower for the same result.
- **Forgetting the drill-down sheet is a snapshot**, not a live filtered view — it doesn't update if the pivot table's data changes afterward; re-drill if you need a fresh look.

## Related concepts

\`\`\`
Calculated Fields
  ↓
Drill Down ← you are here
\`\`\`
This closes the Excel Data Analysis chapter — the next chapter (Excel Visualization) turns these summarized numbers into charts.

## 🎤 Interview preparation

**Q: A pivot table total looks unexpectedly high. What's the fastest way to investigate why?**
Short answer: Double-click the total to drill down — Excel automatically generates a new sheet with every individual source row that was summed into it, making it fast to spot an outlier or data-entry error without writing any filter formula.

---

### ⚡ Quick Revision

**Drill down** → double-click a pivot value to see its exact underlying source rows on a new sheet
The fastest way to verify or investigate a pivot table total.
`,
});

console.log('Created 3 new Excel Data Analysis (2.10) skills.');
