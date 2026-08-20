import { createSkill } from './_create.mjs';

createSkill('counta-function', {
  title: 'COUNTA Function',
  category: 'Spreadsheets',
  what_is_it: 'Counting how many cells in a range are not empty, regardless of whether they hold a number, text, or date.',
  why_it_matters: 'It answers "how many rows actually have something in them," a constant need when checking a dataset for completeness or counting mixed-content columns like names or statuses.',
  prerequisites: ['count-function'],
  objectives: ['Count non-empty cells with COUNTA', 'Explain when COUNTA is the right choice over COUNT'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-counta-1', title: 'Count filled rows', description: 'Given a column of customer names (text), count how many rows are actually filled in using COUNTA.' }],
  verify: ['COUNTA correctly counts non-empty cells regardless of type', 'Can explain the difference from COUNT'],
  note: `
## 🎯 What is it?

**COUNTA** counts how many cells in a range are **not empty** — regardless of whether they hold a number, text, a date, or anything else.

## 💡 Why is it important?

It answers "how many rows actually have something in them" — a constant need when checking a dataset's completeness, or counting a column of mixed content like names or status labels, which [COUNT](/skills/count-function) alone can't do since COUNT only counts numeric cells.

## Syntax

\`\`\`
=COUNTA(range)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | Ana |
| 2 | *(blank)* |
| 3 | Wei |

**Formula:** \`=COUNTA(A1:A3)\` → \`2\`

**Explanation:** Counts the two filled text cells, ignoring the blank one — COUNT on this same range would return 0, since none of the values are numbers.

## Multiple examples

**Beginner:** \`=COUNTA(A1:A100)\` — how many rows have any data at all.
**Real-world:** \`=COUNTA(customer_name_range)\` used alongside \`=COUNT(order_amount_range)\` to compare "total customers" against "customers with a recorded order amount," spotting missing data.

## ⚠️ Common mistakes

- **Using COUNTA expecting it to count only numbers.** It counts *any* non-empty cell — use COUNT if you specifically need numeric-only counting.
- **A formula that returns \`""\` (empty string) still counts as non-empty for COUNTA** — a cell that "looks" blank because of a formula can inflate a COUNTA count unexpectedly.

## Real-world Data Analyst use cases

- **Data quality checks:** counting how many rows in a text or status column are actually filled in.
- **Marketing analysis:** counting total leads (COUNTA on a name column) versus leads with a recorded score (COUNT).

## Related concepts

\`\`\`
COUNT → COUNTA ← you are here → MIN → MAX → ROUND
\`\`\`

## Practice questions

### Easy
1. Write a formula counting non-empty cells in A2:A50.

### Interview/Advanced
2. Why might COUNTA and COUNT give different results on the exact same range?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=COUNTA(A2:A50)\`
2. COUNT only counts numeric cells; COUNTA counts any non-empty cell — if the range contains text, dates as text, or mixed content, COUNTA will return a higher (or different) count than COUNT.

</details>

## 🎤 Interview preparation

**Q: When would you use COUNTA instead of COUNT?**
Short answer: When you need to count any non-empty cell regardless of type (like names or status labels), not just numeric values.

## Best practices

- Choose COUNT vs. COUNTA deliberately based on the column's actual data type.

---

### ⚡ Quick Revision

**COUNTA(range)** → counts any non-empty cell, any type
**COUNT(range)** → counts numeric cells only
`,
});

createSkill('min-function', {
  title: 'MIN Function',
  category: 'Spreadsheets',
  what_is_it: 'Finding the smallest value in a range of numbers.',
  why_it_matters: 'Spotting the lowest value in a column is a constant reporting need, and a fast way to catch a data-entry error like an impossible negative value.',
  prerequisites: ['counta-function'],
  objectives: ['Find the minimum value in a range', 'Use MIN to spot a likely data-entry error'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-min-1', title: 'Find the lowest price', description: 'Use MIN to find the lowest price in a product catalog and sanity-check whether it looks like a real value.' }],
  verify: ['MIN correctly identifies the smallest value', 'Can explain whether the result is plausible or a likely error'],
  note: `
## 🎯 What is it?

**MIN** finds the smallest value in a range of numbers.

## 💡 Why is it important?

Spotting the lowest value in a column — the cheapest price, the shortest delivery time, the earliest date — is a constant reporting need, and MIN is also a fast way to catch a data-entry error, like an impossible negative price.

## Syntax

\`\`\`
=MIN(range)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | 45 |
| 2 | 12 |
| 3 | 89 |

**Formula:** \`=MIN(A1:A3)\` → \`12\`

## Multiple examples

**Beginner:** \`=MIN(B2:B50)\` — the lowest order amount.
**Real-world:** \`=MIN(delivery_days_range)\` used as a sanity check — a minimum of 0 or a negative number signals a data-entry error worth investigating before trusting the dataset.

## ⚠️ Common mistakes

- **Assuming the minimum value is automatically valid.** A minimum of $0 or a negative price is often an error, not a real value — always sanity-check an extreme result.
- **MIN silently ignores text and blank cells**, same as SUM and AVERAGE.

## Real-world Data Analyst use cases

- **Operations analysis:** shortest delivery time, as both a metric and a data-quality check.
- **Finance analysis:** lowest recorded transaction amount, to catch a likely refund or error miscoded as a sale.

## Related concepts

\`\`\`
COUNTA → MIN ← you are here → MAX → ROUND
\`\`\`

## Practice questions

### Easy
1. Write a formula for the smallest value in C2:C40.

### Interview/Advanced
2. MIN on a price column returns -50. What would you do next?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=MIN(C2:C40)\`
2. Investigate the source row before trusting the dataset — a negative price is very likely a data-entry error or a refund miscoded as a regular sale, not a genuine price.

</details>

## 🎤 Interview preparation

**Q: How would you use MIN as part of a data-quality check?**
Short answer: Run MIN on a numeric column early in any analysis — an implausible extreme (like a negative price) is a fast signal to investigate before trusting the data.

## Best practices

- Run MIN (and MAX) as a first-pass sanity check on any new numeric column.

---

### ⚡ Quick Revision

**MIN(range)** → smallest value; use as a quick data-quality check for implausible extremes
`,
});

createSkill('max-function', {
  title: 'MAX Function',
  category: 'Spreadsheets',
  what_is_it: 'Finding the largest value in a range of numbers.',
  why_it_matters: 'Spotting the highest value in a column — the biggest order, the longest delay — is a constant reporting need, and a fast way to catch an outlier or data-entry error.',
  prerequisites: ['min-function'],
  objectives: ['Find the maximum value in a range', 'Use MAX to spot a likely outlier or data-entry error'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-max-1', title: 'Find the largest order', description: 'Use MAX to find the largest order amount in a dataset and determine whether it looks like a real value or a likely error.' }],
  verify: ['MAX correctly identifies the largest value', 'Can explain whether the extreme value found is plausible or an error'],
  note: `
## 🎯 What is it?

**MAX** finds the largest value in a range of numbers — the direct counterpart to [MIN](/skills/min-function).

## 💡 Why is it important?

Spotting the highest value in a column — the biggest single order, the longest delivery delay — is a constant reporting need, and just like MIN, it's a fast way to catch an outlier or a data-entry error before it gets reported as real.

## Syntax

\`\`\`
=MAX(range)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | 45 |
| 2 | 12 |
| 3 | 89 |

**Formula:** \`=MAX(A1:A3)\` → \`89\`

## Multiple examples

**Beginner:** \`=MAX(B2:B50)\` — the largest order amount.
**Real-world:** \`=MAX(order_amount_range)\` returning $500,000 in a dataset of otherwise $20–$500 orders — a strong signal to investigate before including it in a "typical order" analysis (see [Descriptive Statistics](/skills/stats-descriptive) on outliers).

## ⚠️ Common mistakes

- **Treating the MAX value as automatically "the best" result** without checking whether it's plausible — a maximum could just as easily be a duplicate-entry error.
- **MAX silently ignores text and blank cells**, same as MIN, SUM, and AVERAGE.

## Real-world Data Analyst use cases

- **Sales analysis:** largest single order, both as a reporting metric and a data-quality check.
- **Operations analysis:** longest delivery delay, to flag a likely process breakdown.

## Related concepts

\`\`\`
MIN → MAX ← you are here → ROUND
\`\`\`

## Practice questions

### Easy
1. Write a formula for the largest value in C2:C40.

### Interview/Advanced
2. How would you find the *second*-largest value in a range, not just the maximum?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=MAX(C2:C40)\`
2. \`=LARGE(range, 2)\` — LARGE returns the Nth largest value; \`LARGE(range,1)\` is equivalent to MAX.

</details>

## 🎤 Interview preparation

**Q: How would you use MAX to catch a likely data-entry error?**
Short answer: Run MAX on a numeric column and check whether the result is a plausible value given the rest of the data — an implausibly large maximum is a fast signal to investigate before trusting a report built on it.

## Best practices

- Pair MIN and MAX together as a standard first-pass sanity check on any new numeric column.

---

### ⚡ Quick Revision

**MAX(range)** → largest value; use alongside MIN as a quick data-quality check
`,
});

createSkill('round-function', {
  title: 'ROUND Function',
  category: 'Spreadsheets',
  what_is_it: 'Rounding a number to a specified number of decimal places, and its close relatives ROUNDUP and ROUNDDOWN for always rounding in one direction.',
  why_it_matters: 'Unrounded numbers with long decimal tails look unprofessional in a report and can cause small display/reality mismatches — ROUND is how you control precision deliberately.',
  prerequisites: ['max-function'],
  objectives: ['Round a number to a specified number of decimal places', 'Explain the difference between ROUND, ROUNDUP, and ROUNDDOWN'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-round-1', title: 'Clean up a currency column', description: 'Given a column of prices with long decimal tails from a division formula, round them to 2 decimal places for a clean report.' }],
  verify: ['Rounded values match the correct decimal precision', 'Can explain when ROUNDUP or ROUNDDOWN would be used instead of ROUND'],
  note: `
## 🎯 What is it?

**ROUND** rounds a number to a specified number of decimal places, using standard rounding rules (0.5 and above rounds up). **ROUNDUP** and **ROUNDDOWN** always round in one specific direction regardless of the digit.

## 💡 Why is it important?

Unrounded numbers with long decimal tails (like \`14.386274193\`) look unprofessional in a report and can cause confusing small mismatches between a displayed total and a "true" calculated one — ROUND is how you control precision deliberately, instead of just changing how a number *displays* without changing its actual stored value.

## Syntax

\`\`\`
=ROUND(number, num_digits)
=ROUNDUP(number, num_digits)
=ROUNDDOWN(number, num_digits)
\`\`\`

- **num_digits** — how many decimal places to keep; \`0\` rounds to a whole number, negative numbers round to the left of the decimal (e.g., \`-2\` rounds to the nearest hundred).

## 📊 Example

| | A |
|---|---|
| 1 | 14.386274 |

**Formula:** \`=ROUND(A1,2)\` → \`14.39\`
**Formula:** \`=ROUNDDOWN(A1,2)\` → \`14.38\` (always rounds down, regardless of the third decimal)

## Multiple examples

**Beginner:** \`=ROUND(B2,2)\` — round a price to 2 decimal places (cents).
**Intermediate:** \`=ROUNDUP(B2,0)\` — round a quantity up to the next whole number (e.g., calculating how many boxes are needed to ship a partial quantity).
**Real-world:** Rounding a calculated commission to 2 decimal places for a payroll report, since displaying a commission to 6 decimal places would look unprofessional and doesn't reflect real currency precision.

## ⚠️ Common mistakes

- **Confusing "rounding for display" (formatting a cell to show 2 decimals) with actually rounding the underlying value.** Cell formatting only changes what's *displayed* — the true stored value still has the full decimal tail, which can cause a displayed total to not quite match the sum of displayed line items. ROUND changes the actual stored value.
- **Using ROUND when ROUNDUP or ROUNDDOWN was actually needed** — e.g., calculating "how many trucks are needed" should round up even for a small remainder (1.1 trucks needs 2 trucks), not round to the nearest whole number.

## Real-world Data Analyst use cases

- **Finance analysis:** rounding calculated monetary values to 2 decimal places for a clean, professional report.
- **Operations analysis:** using ROUNDUP to calculate a required resource count (boxes, trucks, staff) where any partial amount still requires a full additional unit.

## Related concepts

\`\`\`
MIN → MAX → ROUND ← you are here
\`\`\`
This closes the Core Formulas group.

## Practice questions

### Easy
1. Write a formula that rounds A1 to 2 decimal places.

### Medium
2. You need to calculate how many delivery trucks are needed for 21.2 tons of cargo, where each truck holds 5 tons. Which rounding function fits, and why?

### Interview/Advanced
3. Why might a report's displayed total not exactly match the sum of its displayed line items, even though both look "correctly rounded" on screen?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=ROUND(A1,2)\`
2. \`ROUNDUP(21.2/5, 0)\` → rounds 4.24 up to 5 trucks — any partial amount still needs a full additional truck, so rounding down or to nearest would understate the requirement.
3. If the underlying values were only *formatted* to display 2 decimals (not actually rounded with ROUND), the true stored values still carry their full decimal precision — the displayed total is computed from the true values, which can differ slightly from the sum of the displayed (rounded-looking) line items.

</details>

## 🎤 Interview preparation

**Q: What's the difference between formatting a cell to show 2 decimals and using ROUND?**
Short answer: Formatting only changes how the value is *displayed*; the underlying stored value keeps its full precision. ROUND actually changes the stored value itself, which is why it matters when the rounded value feeds into further calculations.

## Best practices

- Use ROUND (not just cell formatting) whenever a rounded value will be used in a further calculation.
- Choose ROUNDUP/ROUNDDOWN deliberately when a business rule requires always rounding in one direction, not standard rounding.

---

### ⚡ Quick Revision

**ROUND(num, digits)** → standard rounding · **ROUNDUP / ROUNDDOWN** → always round in one direction
**Remember:** cell formatting changes display only; ROUND changes the actual stored value
`,
});
