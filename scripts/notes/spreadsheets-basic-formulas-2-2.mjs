// data_analyst_roadmap_curriculum.md — Section 02.2 "Basic Formulas".
// Adds the doc's remaining bullets on top of the existing sum/average/
// count/counta/min/max functions: Arithmetic Operators, COUNTBLANK,
// ROUNDUP, ROUNDDOWN (split out of the existing round-function, which is
// rewritten here to cover ROUND on its own), and Percentage Calculations.
import { createSkill } from './_create.mjs';

createSkill('arithmetic-operators', {
  title: 'Arithmetic Operators',
  category: 'Spreadsheets',
  what_is_it: 'The basic math symbols a spreadsheet formula uses — + - * / and ^ — for addition, subtraction, multiplication, division, and exponents.',
  why_it_matters: 'Every formula, no matter how advanced, is ultimately built from these basic operators — they\'re the starting point before any named function.',
  prerequisites: ['spreadsheet-tables'],
  objectives: [
    'Write a formula using +, -, *, /, and ^',
    'Explain how operator precedence (order of operations) affects a formula\'s result',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-arithmetic-operators-1', title: 'Order of operations', description: 'Write a formula that calculates (price - discount) * quantity, using parentheses correctly.' },
  ],
  verify: ['Can write a formula using all five basic operators', 'Can explain why parentheses matter in a multi-operator formula'],
  note: `
## 🎯 What is it?

**Arithmetic operators** are the basic math symbols a spreadsheet formula uses: \`+\` (add), \`-\` (subtract), \`*\` (multiply), \`/\` (divide), and \`^\` (exponent — "to the power of"). Every formula in a spreadsheet starts with an equals sign, followed by a combination of cell references and these operators.

## 💡 Why is it important?

- Every formula, no matter how advanced, is ultimately built from these basic operators combined with cell references — they're the true starting point before any named function like SUM or IF.
- Getting **order of operations** (precedence) wrong is a common source of a formula that runs without error but produces the wrong number.

## Core concept

| Operator | Meaning | Example |
|---|---|---|
| \`+\` | Addition | \`=A1+B1\` |
| \`-\` | Subtraction | \`=A1-B1\` |
| \`*\` | Multiplication | \`=A1*B1\` |
| \`/\` | Division | \`=A1/B1\` |
| \`^\` | Exponent | \`=A1^2\` (A1 squared) |

Standard order of operations applies: exponents first, then multiplication/division, then addition/subtraction — use **parentheses** to force a different order.

## 📊 Example

\`=A1+B1*C1\` calculates \`B1*C1\` **first**, then adds \`A1\` — multiplication happens before addition. To add \`A1\` and \`B1\` *first*, then multiply by \`C1\`, parentheses are required: \`=(A1+B1)*C1\`.

## ⚠️ Common mistakes

- **Forgetting parentheses when a calculation needs a specific order** — e.g., writing \`=A1+B1*C1\` when \`=(A1+B1)*C1\` was actually intended, silently producing the wrong result.
- **Forgetting the leading \`=\`** — without it, a spreadsheet treats \`A1+B1\` as plain text, not a formula.

## Related concepts

\`\`\`
Excel Tables
  ↓
Arithmetic Operators ← you are here
  ↓
SUM
\`\`\`

## 🎤 Interview preparation

**Q: \`=A1+B1*C1\` — which operation happens first?**
Short answer: Multiplication (\`B1*C1\`) happens first, then the result is added to \`A1\` — standard order of operations applies in spreadsheet formulas, just like in math.

---

### ⚡ Quick Revision

**Operators** → \`+ - * / ^\`
Standard order of operations applies — use parentheses to override it.
`,
});

createSkill('countblank-function', {
  title: 'COUNTBLANK Function',
  category: 'Spreadsheets',
  what_is_it: 'Counting how many cells in a range are empty.',
  why_it_matters: 'It\'s the fastest way to spot missing data in a column before relying on it for analysis — a high COUNTBLANK is an early warning sign.',
  prerequisites: ['counta-function'],
  objectives: [
    'Count empty cells in a range with COUNTBLANK',
    'Explain the relationship between COUNTA, COUNT, and COUNTBLANK on the same range',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-countblank-1', title: 'Check for missing data', description: 'Given a column of 100 rows, use COUNTBLANK to check how many are missing a value before starting analysis.' },
  ],
  verify: ['Can write a COUNTBLANK formula', 'Can explain how COUNTBLANK + COUNTA relate to the total row count'],
  note: `
## 🎯 What is it?

**COUNTBLANK** counts how many cells in a range are empty. It's the direct complement to COUNTA (which counts non-empty cells) — together, they account for every cell in a range.

## 💡 Why is it important?

- It's the fastest way to spot missing data before relying on a column for analysis — a high COUNTBLANK count is an early warning sign worth investigating before building anything on top of that data.
- \`COUNTA + COUNTBLANK\` should always equal the total number of cells in the range — a useful sanity check.

## Syntax

\`\`\`
=COUNTBLANK(range)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | Amir |
| 2 | *(empty)* |
| 3 | Priya |
| 4 | *(empty)* |

\`=COUNTBLANK(A1:A4)\` → \`2\`

## ⚠️ Common mistakes

- **Confusing "blank" with a cell containing an empty-looking string** (like a space character, or a formula returning \`""\`) — COUNTBLANK treats these differently depending on the exact spreadsheet application, so it's worth spot-checking rather than assuming.
- **Not cross-checking COUNTBLANK against COUNTA** — if \`COUNTA(range) + COUNTBLANK(range)\` doesn't equal the range's total cell count, something unexpected is in the data.

## Related concepts

\`\`\`
COUNTA
  ↓
COUNTBLANK ← you are here
  ↓
MIN
\`\`\`

## 🎤 Interview preparation

**Q: You want to check how much of a column is missing data before analyzing it. What formula would you use?**
Short answer: \`=COUNTBLANK(range)\` — it directly counts empty cells, giving a quick read on how much data is missing before further analysis.

---

### ⚡ Quick Revision

**COUNTBLANK(range)** → counts empty cells
\`COUNTA + COUNTBLANK\` should equal the range's total cell count — a useful sanity check.
`,
});

createSkill('roundup-function', {
  title: 'ROUNDUP Function',
  category: 'Spreadsheets',
  what_is_it: 'Rounding a number up (away from zero) to a specified number of decimal places, regardless of the digit that follows.',
  why_it_matters: 'Whenever any leftover amount still requires a full additional unit — an extra box, an extra truck, an extra staff member — ROUNDUP (not standard rounding) is the correct choice.',
  prerequisites: ['round-function'],
  objectives: [
    'Round a number up with ROUNDUP',
    'Identify a scenario where ROUNDUP is required instead of ROUND',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-roundup-1', title: 'Calculate required units', description: 'Given 21.2 tons of cargo and trucks that hold 5 tons each, calculate the number of trucks needed using ROUNDUP.' },
  ],
  verify: ['Can write a ROUNDUP formula', 'Can identify a scenario requiring ROUNDUP over standard ROUND'],
  note: `
## 🎯 What is it?

**ROUNDUP** rounds a number up (away from zero) to a specified number of decimal places, no matter what the following digit is — unlike ROUND, which rounds to the *nearest* value.

## 💡 Why is it important?

- Whenever any leftover, partial amount still requires a full additional unit — extra packaging, an extra delivery truck, an extra staff shift — ROUNDUP is the only correct choice; standard rounding would understate the real requirement.

## Syntax

\`\`\`
=ROUNDUP(number, num_digits)
\`\`\`

## 📊 Example

You need to ship 21.2 tons of cargo, and each truck holds 5 tons: \`21.2 / 5 = 4.24\` trucks.

\`=ROUNDUP(21.2/5, 0)\` → \`5\`

Rounding to the nearest whole number (\`ROUND\`) would give 4 trucks — not enough to actually ship all the cargo. ROUNDUP correctly accounts for the fact that any partial truckload still needs a full truck.

## ⚠️ Common mistakes

- **Using standard ROUND when a partial amount genuinely requires a full extra unit** — this understates a real resource requirement (trucks, boxes, staff).
- **Assuming ROUNDUP always rounds toward positive infinity** — it actually rounds *away from zero*, so for negative numbers it rounds further negative, not toward positive.

## Related concepts

\`\`\`
ROUND
  ↓
ROUNDUP ← you are here
  ↓
ROUNDDOWN
\`\`\`

## 🎤 Interview preparation

**Q: You need to calculate how many delivery trucks are needed for 21.2 tons of cargo, where each truck holds 5 tons. Which rounding function fits, and why?**
Short answer: ROUNDUP — \`ROUNDUP(21.2/5, 0)\` rounds 4.24 up to 5 trucks, since any partial amount still requires a full additional truck; standard ROUND would understate the requirement at 4.

---

### ⚡ Quick Revision

**ROUNDUP(num, digits)** → always rounds away from zero, regardless of the digit
Use whenever a partial amount still needs a full extra unit.
`,
});

createSkill('rounddown-function', {
  title: 'ROUNDDOWN Function',
  category: 'Spreadsheets',
  what_is_it: 'Rounding a number down (toward zero) to a specified number of decimal places, regardless of the digit that follows.',
  why_it_matters: 'Whenever only fully completed units should count — full months of tenure, full completed items — ROUNDDOWN (not standard rounding) gives the accurate, conservative answer.',
  prerequisites: ['roundup-function'],
  objectives: [
    'Round a number down with ROUNDDOWN',
    'Identify a scenario where ROUNDDOWN is required instead of ROUND',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-rounddown-1', title: 'Calculate completed units', description: 'Given 7.9 completed months of a subscription, use ROUNDDOWN to correctly report only full completed months.' },
  ],
  verify: ['Can write a ROUNDDOWN formula', 'Can identify a scenario requiring ROUNDDOWN over standard ROUND'],
  note: `
## 🎯 What is it?

**ROUNDDOWN** rounds a number down (toward zero) to a specified number of decimal places, no matter what the following digit is — the mirror image of ROUNDUP.

## 💡 Why is it important?

- Whenever only fully-completed units should count — full months of tenure, full completed orders, full years of experience — ROUNDDOWN gives the conservative, accurate answer; standard rounding could overstate it.

## Syntax

\`\`\`
=ROUNDDOWN(number, num_digits)
\`\`\`

## 📊 Example

A customer has been subscribed for 7.9 months. \`=ROUNDDOWN(7.9, 0)\` → \`7\` — they've only *completed* 7 full months; rounding to the nearest whole number would incorrectly report 8 completed months when the 8th isn't finished yet.

## ⚠️ Common mistakes

- **Using standard ROUND when only fully completed units should count** — this can overstate tenure, completed cycles, or any other "whole units only" metric.
- **Assuming ROUNDDOWN always rounds toward negative infinity** — it rounds *toward zero*, so for negative numbers it rounds up (less negative), not further down.

## Related concepts

\`\`\`
ROUNDUP
  ↓
ROUNDDOWN ← you are here
  ↓
Percentage Calculations
\`\`\`
This closes the ROUND/ROUNDUP/ROUNDDOWN trio.

## 🎤 Interview preparation

**Q: A customer has been subscribed for 7.9 months. How many full months should a "months completed" report show?**
Short answer: 7 — \`ROUNDDOWN(7.9, 0)\` correctly reports only fully completed months; standard rounding would incorrectly report 8, since the 8th month isn't actually finished.

---

### ⚡ Quick Revision

**ROUNDDOWN(num, digits)** → always rounds toward zero, regardless of the digit
Use whenever only fully completed units should count.
`,
});

createSkill('percentage-calculations', {
  title: 'Percentage Calculations',
  category: 'Spreadsheets',
  what_is_it: 'Common formula patterns for working with percentages — percent of total, percent change, and percentage-formatted display — all built from simple division.',
  why_it_matters: 'Percentages are one of the most common ways a business communicates a number (growth rate, market share, conversion rate) — getting the formula pattern right (and avoiding a common sign error) matters constantly.',
  prerequisites: ['rounddown-function'],
  objectives: [
    'Write a formula to calculate percent of total',
    'Write a formula to calculate percent change between two periods',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-percentage-calculations-1', title: 'Calculate percent change', description: 'Given last month\'s and this month\'s revenue, write a formula for percent change, and format the result as a percentage.' },
  ],
  verify: ['Can write a percent-of-total formula', 'Can write a percent-change formula and explain the sign of a decrease'],
  note: `
## 🎯 What is it?

**Percentage calculations** covers the common formula patterns for working with percentages in a spreadsheet — all of them are built from simple division, then formatted as a percentage (see Number Formats).

## 💡 Why is it important?

- Percentages are one of the most common ways a business communicates a number — growth rate, market share, conversion rate, percent of budget used.
- The two most common patterns (percent of total, percent change) are simple but easy to get subtly wrong, especially the sign on a decrease.

## Core concept

| Pattern | Formula |
|---|---|
| Percent of total | \`=part/total\` |
| Percent change | \`=(new-old)/old\` |

Both results are raw decimals (e.g., \`0.12\`) — apply a percentage number format to display them as "12%."

## 📊 Example

**Percent of total:** A region had $50,000 in sales out of $400,000 total. \`=50000/400000\` → \`0.125\` → formatted as **12.5%**.

**Percent change:** Revenue went from $80,000 (old) to $92,000 (new). \`=(92000-80000)/80000\` → \`0.15\` → formatted as **+15%**. If revenue had instead *dropped* to $68,000: \`=(68000-80000)/80000\` → \`-0.15\` → formatted as **-15%**, correctly showing a decrease.

## ⚠️ Common mistakes

- **Reversing new and old in the percent-change formula** (\`(old-new)/old\` instead of \`(new-old)/old\`), which flips the sign and reports growth as decline or vice versa.
- **Forgetting to apply a percentage number format**, leaving the result as a confusing raw decimal like \`0.125\` instead of "12.5%."
- **Dividing by the wrong "old" value** in a percent-change formula — always divide by the *starting* value, not the ending one.

## Related concepts

\`\`\`
ROUNDDOWN
  ↓
Percentage Calculations ← you are here
\`\`\`
This closes the Basic Formulas chapter — the next chapter (Logical Functions) builds conditional logic on top of these basics.

## 🎤 Interview preparation

**Q: Revenue went from $80,000 to $68,000. Write the percent-change formula and explain the sign of the result.**
Short answer: \`=(68000-80000)/80000\` → \`-0.15\`, or -15% — the negative sign correctly indicates a decrease; always compute \`(new-old)/old\`, never the reverse.

---

### ⚡ Quick Revision

**Percent of total** → \`part/total\` · **Percent change** → \`(new-old)/old\`
Format the raw decimal result as a percentage — and always divide by the *starting* value in a percent-change formula.
`,
});

// round-function previously bundled ROUND/ROUNDUP/ROUNDDOWN into one note.
// Now that ROUNDUP and ROUNDDOWN have their own topics above, this
// rewrites round-function to cover ROUND on its own — full rewrite (not a
// patch), consistent with how the Reference-locking trio was split earlier.
createSkill('round-function', {
  title: 'ROUND Function',
  category: 'Spreadsheets',
  what_is_it: 'Rounding a number to a specified number of decimal places, using standard rounding rules (0.5 and above rounds up).',
  why_it_matters: 'Unrounded numbers with long decimal tails look unprofessional in a report and can cause small display/reality mismatches — ROUND is how you control precision deliberately.',
  prerequisites: ['max-function'],
  objectives: [
    'Round a number to a specified number of decimal places',
    'Explain the difference between formatting a cell to show fewer decimals and actually using ROUND',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-round-1', title: 'Clean up a currency column', description: 'Given a column of prices with long decimal tails from a division formula, round them to 2 decimal places for a clean report.' },
  ],
  verify: ['Rounded values match the correct decimal precision', 'Can explain the difference between ROUND and just formatting a cell to show fewer decimals'],
  note: `
## 🎯 What is it?

**ROUND** rounds a number to a specified number of decimal places, using standard rounding rules (0.5 and above rounds up, below 0.5 rounds down).

## 💡 Why is it important?

Unrounded numbers with long decimal tails (like \`14.386274193\`) look unprofessional in a report and can cause confusing small mismatches between a displayed total and a "true" calculated one — ROUND is how you control precision deliberately, instead of just changing how a number *displays* without changing its actual stored value (see Number Formats).

## Syntax

\`\`\`
=ROUND(number, num_digits)
\`\`\`

- **num_digits** — how many decimal places to keep; \`0\` rounds to a whole number, negative numbers round to the left of the decimal (e.g., \`-2\` rounds to the nearest hundred).

## 📊 Example

| | A |
|---|---|
| 1 | 14.386274 |

**Formula:** \`=ROUND(A1,2)\` → \`14.39\`
**Formula:** \`=ROUND(A1,0)\` → \`14\`

## Multiple examples

**Beginner:** \`=ROUND(B2,2)\` — round a price to 2 decimal places (cents).
**Intermediate:** \`=ROUND(B2,-2)\` — round a large number to the nearest hundred.
**Real-world:** Rounding a calculated commission to 2 decimal places for a payroll report, since displaying a commission to 6 decimal places would look unprofessional and doesn't reflect real currency precision.

## ⚠️ Common mistakes

- **Confusing "rounding for display" (formatting a cell to show 2 decimals) with actually rounding the underlying value.** Cell formatting only changes what's *displayed* — the true stored value still has the full decimal tail, which can cause a displayed total to not quite match the sum of displayed line items. ROUND changes the actual stored value.
- **Using ROUND when the situation actually calls for ROUNDUP or ROUNDDOWN** — e.g., calculating "how many trucks are needed" should always round up even for a small remainder, which standard ROUND won't do (see ROUNDUP).

## Real-world Data Analyst use cases

- **Finance analysis:** rounding calculated monetary values to 2 decimal places for a clean, professional report.
- **Reporting:** rounding a percentage or ratio to a consistent, readable number of decimal places across a whole dashboard.

## Related concepts

\`\`\`
MIN → MAX → ROUND ← you are here
  ↓
ROUNDUP → ROUNDDOWN
\`\`\`

## Practice questions

### Easy
1. Write a formula that rounds A1 to 2 decimal places.

### Medium
2. Why might a report's displayed total not exactly match the sum of its displayed line items, even though both look "correctly rounded" on screen?

### Interview/Advanced
3. When would ROUND give the wrong answer for a business calculation, even though it's working exactly as designed?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=ROUND(A1,2)\`
2. If the underlying values were only *formatted* to display 2 decimals (not actually rounded with ROUND), the true stored values still carry their full decimal precision — the displayed total is computed from the true values, which can differ slightly from the sum of the displayed (rounded-looking) line items.
3. Whenever any leftover, partial amount still requires a full additional unit (an extra truck, an extra box) — standard ROUND can round down a value like 4.24 to 4, understating the real requirement; ROUNDUP is needed instead.

</details>

## 🎤 Interview preparation

**Q: What's the difference between formatting a cell to show 2 decimals and using ROUND?**
Short answer: Formatting only changes how the value is *displayed*; the underlying stored value keeps its full precision. ROUND actually changes the stored value itself, which is why it matters when the rounded value feeds into further calculations.

## Best practices

- Use ROUND (not just cell formatting) whenever a rounded value will be used in a further calculation.
- Reach for ROUNDUP or ROUNDDOWN instead when a business rule requires always rounding in one specific direction.

---

### ⚡ Quick Revision

**ROUND(num, digits)** → standard rounding (0.5 and above rounds up)
**Remember:** cell formatting changes display only; ROUND changes the actual stored value.
`,
});

console.log('Created 5 new Basic Formulas (2.2) skills, plus rewrote round-function.');
