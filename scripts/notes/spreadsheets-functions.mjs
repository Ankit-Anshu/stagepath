import { setNote } from './_lib.mjs';

setNote('sum-function', `
## 🎯 What is it?

**SUM** adds up a range of numbers. It's the single most-used function in any spreadsheet — the starting point for almost every total you'll ever calculate.

## 💡 Why is it important?

Almost every business report starts with a total — total revenue, total units, total cost. SUM is the foundation every other aggregate (AVERAGE, pivot tables) builds on, and getting the *range* right is a habit that prevents silent reporting errors later.

## Syntax

\`\`\`
=SUM(range)
=SUM(number1, number2, ...)
\`\`\`

- **range** — the cells to add, e.g. \`B2:B50\`.
- Can also take individual values/cells separated by commas: \`=SUM(B2, B5, B9)\`.
- Text and blank cells inside the range are ignored automatically (not treated as errors).

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Product | Revenue |
| 2 | Widget | 120 |
| 3 | Gadget | 340 |
| 4 | Gizmo | 210 |

**Formula:** \`=SUM(B2:B4)\`
**Result:** \`670\`

**Explanation:** Adds every numeric value in B2 through B4.

## Multiple examples

**Beginner:** \`=SUM(B2:B100)\` — total a revenue column.
**Intermediate:** \`=SUM(B2:B100)-SUM(C2:C100)\` — total profit as revenue minus cost, in one formula.
**Real-world:** \`=SUM(B2:B100)/SUM(D2:D100)\` — total revenue divided by total units sold, to get a blended average price (note: this is different from \`AVERAGE\` of a per-order price column — see Common mistakes).

## ⚠️ Common mistakes

- **Range doesn't cover new rows added later.** \`=SUM(B2:B50)\` silently ignores row 51 onward. → Use a Table/structured range, or extend the range generously.
- **Summing a column that mixes numbers stored as text** (common after a CSV import) — SUM silently skips text-formatted numbers, quietly under-reporting the total.
- **Confusing "sum of a rate column" with "a rate calculated from sums."** Averaging a column of per-order profit margins is not the same as (total profit ÷ total revenue) — they can differ meaningfully when order sizes vary.

## Real-world Data Analyst use cases

- **Sales analysis:** total revenue for a period.
- **Finance analysis:** total expenses across categories.
- **Operations analysis:** total units shipped in a week.

## Related concepts

\`\`\`
SUM → AVERAGE → COUNT → MIN/MAX → SUMIFS/conditional aggregation → Pivot Tables
\`\`\`

## Practice questions

### Easy
1. Write a formula to sum column \`C2:C20\`.

### Medium
2. Given revenue in column B and cost in column C (rows 2–100), write one formula for total profit.

### Interview/Advanced
3. Why might \`=SUM(B:B)/SUM(C:C)\` give a different (and more useful) answer than \`=AVERAGE(D2:D100)\` where D is a per-row ratio of B/C?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=SUM(C2:C20)\`
2. \`=SUM(B2:B100)-SUM(C2:C100)\`
3. The ratio-of-sums is a *weighted* average (larger orders count more), while averaging a per-row ratio treats every row equally regardless of size — the two are only equal when all rows have the same denominator.

</details>

## 🎤 Interview preparation

**Q: What does SUM do, and what does it silently ignore?**
Short answer: It adds a range of numeric values, and silently ignores text and blank cells rather than erroring — which can hide a data-quality issue if numbers were accidentally imported as text.

## Interview traps / tricky points

- SUM does **not** error on text-formatted numbers — it just excludes them, which can under-report a total without any visible warning.
- A ratio of sums ≠ an average of ratios — a classic interview gotcha.

## Best practices

- Use a Table (structured reference) or a deliberately generous range so SUM automatically includes new rows.
- Spot-check large totals against a manual count on a small sample.

---

### ⚡ Quick Revision

**SUM(range)** → adds numeric values, ignores text/blanks silently
**Watch for:** ranges that don't grow with new data, numbers stored as text
`);

setNote('average-function', `
## 🎯 What is it?

**AVERAGE** calculates the mean of a range of numbers — the sum divided by the count of numeric values.

## 💡 Why is it important?

Averages appear in nearly every report — but they're also one of the most frequently misused statistics. Knowing how to compute one correctly is step one to knowing when an average is the wrong number to report at all.

## Syntax

\`\`\`
=AVERAGE(range)
\`\`\`

- **range** — the cells to average. Text and blank cells are ignored (not counted as zero).

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Order | Amount |
| 2 | 1 | 40 |
| 3 | 2 | 60 |
| 4 | 3 | 200 |

**Formula:** \`=AVERAGE(B2:B4)\`
**Result:** \`100\`

**Explanation:** (40+60+200)/3 = 100.

## Multiple examples

**Beginner:** \`=AVERAGE(B2:B100)\` — average order value.
**Intermediate:** \`=AVERAGE(IF(C2:C100="West",B2:B100))\` (array formula) — average order value for the West region only.
**Real-world:** Compare \`=AVERAGE(B2:B100)\` against \`=MEDIAN(B2:B100)\` — a large gap signals the average is being skewed by outliers, which is common with order-value or salary data.

## ⚠️ Common mistakes

- **Reporting an average without checking for skew.** A single $50,000 order can drag the "average" order value far above what a typical customer actually spends — the median is often more representative.
- **Averaging a rate/percentage column directly** instead of computing a weighted average — this treats a segment of 10 customers the same as a segment of 10,000.
- **Not sanity-checking**: AVERAGE should roughly equal SUM ÷ COUNT — if it doesn't, something (like a hidden filter) is off.

## Real-world Data Analyst use cases

- **Sales analysis:** average order value.
- **Product analysis:** average session duration.
- **Finance analysis:** average monthly expense per category.

## Related concepts

\`\`\`
SUM → AVERAGE → COUNT → MIN/MAX
\`\`\`
Also connects to [Statistics — Descriptive Statistics](/skills/stats-descriptive) (mean vs. median vs. mode).

## Practice questions

### Easy
1. Write a formula for the average of \`B2:B50\`.

### Medium
2. Given an order-value column with one $50,000 outlier among typical $20–$200 orders, which statistic — AVERAGE or MEDIAN — better represents a "typical" order? Why?

### Interview/Advanced
3. Explain why averaging a column of per-store conversion-rate percentages can mislead if stores have very different traffic volumes.

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=AVERAGE(B2:B50)\`
2. MEDIAN — it isn't pulled toward the extreme outlier the way AVERAGE is, so it better reflects what a typical order looks like.
3. A simple average treats a low-traffic store's rate the same as a high-traffic store's rate, even though the high-traffic store represents far more actual conversions — a traffic-weighted average (total conversions ÷ total visits) is more accurate.

</details>

## 🎤 Interview preparation

**Q: When would you use MEDIAN instead of AVERAGE?**
Short answer: When the data has outliers or is skewed — median isn't affected by extreme values the way average is, so it better represents a "typical" case.

## Interview traps / tricky points

- AVERAGE silently ignores blanks (doesn't treat them as zero) — a common source of confusion when a formula's result looks "too high."
- Averaging an already-averaged column (average of averages) without weighting is a classic and easy-to-miss error.

## Best practices

- Pair AVERAGE with MEDIAN when reporting a "typical" value — a large gap between them is worth flagging.
- Use a weighted average (SUM/SUM) instead of AVERAGE of a per-row rate when segments differ in size.

---

### ⚡ Quick Revision

**AVERAGE(range)** → mean of numeric values, ignores blanks/text
**Watch for:** outliers skewing the result — compare against MEDIAN
`);

setNote('count-function', `
## 🎯 What is it?

**COUNT** counts how many cells in a range contain a number. **COUNTA** counts how many cells are not empty (numbers, text, or dates alike).

## 💡 Why is it important?

Counting rows correctly is the basis for almost every rate or percentage — conversion rate, completion rate, and more all start with a correct count of the numerator and denominator.

## Syntax

\`\`\`
=COUNT(range)    → counts numeric cells only
=COUNTA(range)   → counts non-empty cells (any type)
\`\`\`

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Order | Delivered Date |
| 2 | 1 | 2024-01-05 |
| 3 | 2 | *(blank)* |
| 4 | 3 | 2024-01-07 |

**Formula:** \`=COUNT(B2:B4)\` → \`2\` (counts dates, which are stored as numbers)
**Formula:** \`=COUNTA(B2:B4)\` → \`2\` (same here, since the only difference matters with text values)

If column B instead held text status labels ("Delivered", blank, "Delivered"), \`COUNT\` would return \`0\` (no numbers) while \`COUNTA\` would return \`2\`.

## Multiple examples

**Beginner:** \`=COUNTA(A2:A100)\` — how many orders exist at all.
**Intermediate:** \`=COUNT(B2:B100)\` — how many of those orders have a numeric delivered-date, i.e. how many were actually delivered.
**Real-world:** \`=COUNT(B2:B100)/COUNTA(A2:A100)\` — delivery completion rate.

## ⚠️ Common mistakes

- **Using COUNT when the column is text**, expecting it to count non-empty text cells — COUNT only counts numbers; COUNTA is needed for text/dates/mixed content.
- **Confusing COUNT/COUNTA with COUNTIF/COUNTIFS**, which count based on a condition, not just presence.
- **Forgetting that a formula returning an empty string (\`""\`) still counts as non-empty for COUNTA** — a cell with a formula that "looks empty" isn't actually empty.

## Real-world Data Analyst use cases

- **Marketing analysis:** counting how many leads exist (COUNTA) vs. how many have a recorded numeric score (COUNT).
- **Operations analysis:** counting completed shipments (COUNT of a numeric delivery-time column) against total shipments (COUNTA).

## Related concepts

\`\`\`
SUM → AVERAGE → COUNT ← you are here → MIN/MAX → SUMIFS/COUNTIFS
\`\`\`

## Practice questions

### Easy
1. What does COUNTA return for a range with 10 rows, 2 of which are blank?

### Medium
2. Given an \`orders\` column (always filled) and a \`refund_date\` column (filled only for refunded orders), write a formula for the refund rate.

### Interview/Advanced
3. Why would COUNT and COUNTA return different results on the exact same range?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`8\` — COUNTA counts all non-empty cells regardless of type.
2. \`=COUNT(B2:B100)/COUNTA(A2:A100)\` (assuming refund_date is column B, orders is column A).
3. COUNT only counts cells holding numbers (including dates); COUNTA counts any non-empty cell, so a range containing text or mixed content will show a higher COUNTA than COUNT.

</details>

## 🎤 Interview preparation

**Q: What's the difference between COUNT and COUNTA?**
Short answer: COUNT counts only numeric cells; COUNTA counts any non-empty cell, regardless of whether it's a number, text, or date.

## Interview traps / tricky points

- A cell containing a formula that evaluates to an empty string \`""\` is *not* truly blank — COUNTA will still count it, which can quietly inflate a count.
- Dates are stored as numbers internally, so COUNT works on date columns even though they display as text-like values.

## Best practices

- Choose COUNT vs. COUNTA deliberately based on the column's data type, and document which one a report uses.
- Sanity-check a count against a manual filter/spot check before trusting it in a report.

---

### ⚡ Quick Revision

**COUNT** → numeric cells only
**COUNTA** → any non-empty cell (text, number, date)
**Watch for:** formulas returning \`""\` still count as non-empty for COUNTA
`);

setNote('min-max-function', `
## 🎯 What is it?

**MIN** finds the smallest value in a range; **MAX** finds the largest.

## 💡 Why is it important?

Spotting the best, worst, earliest, or latest value in a column is a constant reporting need — and MIN/MAX is also a fast, practical way to catch a likely data-entry error, like an impossible outlier.

## Syntax

\`\`\`
=MIN(range)
=MAX(range)
\`\`\`

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Product | Price |
| 2 | Widget | 12 |
| 3 | Gadget | 340 |
| 4 | Gizmo | 25 |

**Formula:** \`=MAX(B2:B4)\` → \`340\`
**Formula:** \`=MIN(B2:B4)\` → \`12\`

## Multiple examples

**Beginner:** \`=MAX(B2:B100)\` — highest-priced product.
**Intermediate:** \`=MAX(B2:B100)-MIN(B2:B100)\` — the price range (spread) of the catalog.
**Real-world:** Using \`=MAX(B2:B100)\` as a quick data-quality check — if the maximum order amount is $9,999,999, that's very likely a data-entry error worth investigating before it's reported as real.

## ⚠️ Common mistakes

- **Treating the MAX value as automatically "the best."** A maximum order amount could just as easily be a duplicate-entry error — always sanity-check an extreme value before reporting it.
- **Using MIN/MAX on a column with mixed text and numbers** and assuming errors will be raised — like SUM and AVERAGE, they silently ignore non-numeric cells.

## Real-world Data Analyst use cases

- **Sales analysis:** largest single order, for both reporting and error-checking.
- **Operations analysis:** longest and shortest delivery time, to flag anomalies.
- **HR/finance analysis:** salary range within a department.

## Related concepts

\`\`\`
SUM → AVERAGE → COUNT → MIN/MAX ← you are here → SUMIFS/COUNTIFS
\`\`\`

## Practice questions

### Easy
1. Write a formula for the largest value in \`C2:C50\`.

### Medium
2. Your MAX(order_amount) is $250,000 in a dataset where every other order is under $500. What's your next step?

### Interview/Advanced
3. How would you find the *second*-largest value in a range (not just the maximum)?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=MAX(C2:C50)\`
2. Investigate before reporting it — check the source record, look for a possible decimal/typo error or a legitimate bulk order, and only include it in analysis once confirmed.
3. \`=LARGE(range, 2)\` returns the second-largest value (LARGE(range,1) is equivalent to MAX).

</details>

## 🎤 Interview preparation

**Q: How would you use MIN/MAX as a data-quality check?**
Short answer: Extreme values that are far outside a plausible range (like a $9M order in a small-business dataset) are an easy, quick signal to investigate before trusting a dataset for analysis.

## Interview traps / tricky points

- MIN/MAX don't distinguish between a real extreme value and a data-entry error — that judgment is on the analyst, not the function.
- MIN/MAX ignore text and blanks silently, same as SUM/AVERAGE.

## Best practices

- Run MIN/MAX as a first-pass sanity check on any new dataset before deeper analysis.
- Combine with \`LARGE\`/\`SMALL\` when you need the Nth largest/smallest value, not just the extreme.

---

### ⚡ Quick Revision

**MIN(range)** → smallest value
**MAX(range)** → largest value
**Use case:** quick data-quality sanity check for implausible extremes
`);

setNote('if-function', `
## 🎯 What is it?

**IF** returns one value when a condition is true and another when it's false. It's the core building block of conditional logic in a spreadsheet — the spreadsheet version of "if this, then that."

## 💡 Why is it important?

IF is the gateway to every conditional rule you'll ever write in a spreadsheet: flagging a late order, grading a score, labeling a customer segment. Nearly every "smart" column in a real spreadsheet has an IF (or a function built on the same logic) behind it.

## Syntax

\`\`\`
=IF(condition, value_if_true, value_if_false)
\`\`\`

- **condition** — anything that evaluates to TRUE or FALSE, e.g. \`B2>100\`.
- **value_if_true / value_if_false** — what to return for each case; can be text, a number, or another formula.

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Order | Amount |
| 2 | 1 | 450 |
| 3 | 2 | 80 |

**Formula (C2):** \`=IF(B2>200,"Large","Standard")\`
**Result:** \`"Large"\` for row 2, \`"Standard"\` for row 3.

## Multiple examples

**Beginner:** \`=IF(B2>=60,"Pass","Fail")\` — grade a score.
**Intermediate — nested IF:** \`=IF(B2>=90,"A",IF(B2>=80,"B",IF(B2>=70,"C","D")))\` — multi-tier grading.
**Real-world:** \`=IF(AND(B2>100,C2="VIP"),"Priority","Standard")\` — combining IF with AND for a business rule that depends on two conditions.

## Types / Variations

| Form | Use case |
|---|---|
| Simple IF | One condition, two outcomes |
| Nested IF | More than two outcomes (chain of conditions) |
| IF + AND/OR | A condition that depends on multiple factors |
| IFS (modern alternative) | Multiple conditions without deep nesting: \`=IFS(B2>=90,"A",B2>=80,"B",TRUE,"D")\` |

## ⚠️ Common mistakes

- **Deeply nesting IFs (4+ levels) instead of using IFS or a lookup table.** It becomes unreadable and error-prone fast.
- **Forgetting the false branch**, e.g. \`=IF(B2>100,"Large")\` — this silently returns \`FALSE\` when the condition isn't met, which is rarely intended.
- **Comparing text case-sensitively without realizing it isn't** — \`="vip"\` and \`="VIP"\` are treated as equal in most spreadsheet comparisons, which can surprise people expecting exact-case matching.

## Real-world Data Analyst use cases

- **Sales analysis:** flagging orders above a large-order threshold.
- **Marketing analysis:** labeling leads as "Qualified"/"Not Qualified" based on a score.
- **Operations analysis:** flagging shipments as "Late" if delivery date exceeds a promised date.

## Related concepts

\`\`\`
IF ← you are here → DATEDIF → Text cleaning (UPPER/LOWER/PROPER, TRIM, REPLACE/SUBSTITUTE) → Lookup functions
\`\`\`

## Practice questions

### Easy
1. Write an IF formula that labels an order "Large" if amount (B2) is over 300, otherwise "Standard".

### Medium
2. Write a nested IF that assigns "A" (≥90), "B" (≥80), "C" (≥70), or "D" (below 70) based on score in B2.

### Interview/Advanced
3. Rewrite your answer to Q2 using IFS instead of nested IF, and explain one advantage of doing so.

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=IF(B2>300,"Large","Standard")\`
2. \`=IF(B2>=90,"A",IF(B2>=80,"B",IF(B2>=70,"C","D")))\`
3. \`=IFS(B2>=90,"A",B2>=80,"B",B2>=70,"C",TRUE,"D")\` — it reads top-to-bottom without nested parentheses, which is far easier to audit and edit as tiers change.

</details>

## 🎤 Interview preparation

**Q: When would you use IFS instead of nested IF?**
Short answer: When there are more than two or three outcomes — IFS avoids deep parenthesis nesting and is much easier to read and maintain.

## Interview traps / tricky points

- Forgetting the false-branch argument returns \`FALSE\` (a boolean), not blank — a subtle bug in downstream formulas.
- Text comparisons inside IF are not case-sensitive by default, which trips up people expecting \`="VIP"\` to fail against \`"vip"\`.

## Best practices

- Prefer IFS or a lookup table over 3+ levels of nested IF.
- Always include an explicit false-branch value, even if it's just \`""\`.

---

### ⚡ Quick Revision

**IF(condition, if_true, if_false)** → the core conditional building block
**Nested IF** → chain for 3+ outcomes; prefer IFS for readability past 2 conditions
**Watch for:** missing false branch, case-insensitive text comparison
`);

setNote('datedif-function', `
## 🎯 What is it?

**DATEDIF** calculates the difference between two dates — in days, months, or years — with a single formula.

## 💡 Why is it important?

Tenure, age, days-since-signup, and days-overdue are all just date differences. DATEDIF computes them directly, without manual date-math that's easy to get subtly wrong (leap years, differing month lengths).

## Syntax

\`\`\`
=DATEDIF(start_date, end_date, unit)
\`\`\`

| Unit | Returns |
|---|---|
| \`"D"\` | Days between the dates |
| \`"M"\` | Complete months between the dates |
| \`"Y"\` | Complete years between the dates |
| \`"YM"\` | Months, ignoring years (0–11) |
| \`"MD"\` | Days, ignoring months and years |

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Signup Date | |
| 2 | 2023-03-15 | |

**Formula:** \`=DATEDIF(A2,TODAY(),"M")\`
**Result (if today is 2024-01-05):** \`9\` (9 complete months of tenure)

## Multiple examples

**Beginner:** \`=DATEDIF(A2,B2,"D")\` — days between two dates.
**Intermediate:** \`=DATEDIF(A2,TODAY(),"Y")\` — a customer's tenure in complete years.
**Real-world:** \`=DATEDIF(order_date, ship_date, "D")\` compared against a promised SLA (e.g., 3 days) to flag late shipments.

## ⚠️ Common mistakes

- **Putting the later date first.** \`start_date\` must come before \`end_date\`, or DATEDIF returns an error (\`#NUM!\`).
- **Confusing "M" (complete months) with a simple month-number subtraction.** DATEDIF with "M" correctly handles a case like Jan 30 → Feb 28 as an edge case; naive subtraction often doesn't.
- **Forgetting DATEDIF is undocumented/legacy** in some spreadsheet tools — it still works, but always test it before relying on it in a shared template.

## Real-world Data Analyst use cases

- **Customer analysis:** calculating customer tenure in months for a cohort report.
- **Operations analysis:** days between order and delivery, to flag SLA breaches.
- **HR analysis:** employee tenure in years for retention reporting.

## Related concepts

\`\`\`
IF → DATEDIF ← you are here → Text cleaning (UPPER/LOWER/PROPER, TRIM) → Lookup functions
\`\`\`

## Practice questions

### Easy
1. Write a formula for the number of days between A2 and B2.

### Medium
2. Given a signup-date column, write a formula for each customer's tenure in complete months as of today.

### Interview/Advanced
3. What happens if you accidentally swap \`start_date\` and \`end_date\`?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=DATEDIF(A2,B2,"D")\`
2. \`=DATEDIF(A2,TODAY(),"M")\`
3. DATEDIF returns a \`#NUM!\` error, because it requires start_date ≤ end_date.

</details>

## 🎤 Interview preparation

**Q: How would you calculate a customer's tenure in months?**
Short answer: \`=DATEDIF(signup_date, TODAY(), "M")\` — it directly returns complete months without manual date arithmetic.

## Interview traps / tricky points

- \`"M"\` returns *complete* months, not a rounded value — a customer who signed up 29 days ago shows 0 complete months, which can surprise someone expecting rounding.
- Swapped start/end dates cause an error rather than a negative number, unlike simple subtraction.

## Best practices

- Always confirm \`start_date\` is chronologically before \`end_date\` before using DATEDIF in a formula that will run on many rows.
- Use \`"YM"\` and \`"MD"\` together when you need an "X years, Y months" style display, not just one unit.

---

### ⚡ Quick Revision

**DATEDIF(start, end, unit)** → difference between two dates
**Units:** "D" days, "M" months, "Y" years, "YM"/"MD" partial combinations
**Watch for:** start_date must be before end_date, or it errors
`);

setNote('text-upper-lower-proper', `
## 🎯 What is it?

**UPPER**, **LOWER**, and **PROPER** standardize the casing of text — all uppercase, all lowercase, or Proper Case (each word capitalized) — so the same value doesn't appear inconsistently across rows.

## 💡 Why is it important?

Inconsistent casing ("john", "JOHN", "John") makes lookups, grouping, and deduplication fail even though the values mean the same thing to a human reader — spreadsheets and databases generally treat text comparisons as case-sensitive in some contexts (like exact matching or grouping) but not others, which is exactly the kind of inconsistency that causes silent bugs.

## Syntax

\`\`\`
=UPPER(text)   → ALL CAPS
=LOWER(text)   → all lowercase
=PROPER(text)  → Each Word Capitalized
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | john SMITH |
| 2 | MARIA ruiz |

**Formula (B1):** \`=PROPER(A1)\`
**Result:** \`John Smith\`

## Multiple examples

**Beginner:** \`=UPPER(A2)\` — standardize a country-code column to all caps.
**Intermediate:** \`=PROPER(TRIM(A2))\` — combine with TRIM to fix both casing and stray spaces in one step.
**Real-world:** Standardizing a \`customer_name\` column before a VLOOKUP against another sheet — mismatched casing alone doesn't usually break an exact-match lookup, but it *does* break a grouping or pivot table, which will treat "Acme Corp" and "ACME CORP" as two different customers.

## ⚠️ Common mistakes

- **Assuming casing differences don't matter for grouping/pivot tables.** They do — "Retail", "retail", and "RETAIL" will appear as three separate categories in a pivot table unless standardized first.
- **Forgetting to wrap the result and paste as values** if you need to replace the original column rather than keep a helper column with the formula.
- **Using PROPER on text that shouldn't be title-cased**, like an email address or an all-caps product code — PROPER is for human names/titles, not identifiers.

## Real-world Data Analyst use cases

- **Customer analysis:** standardizing company or contact names before deduplication.
- **Marketing analysis:** normalizing campaign-name casing so a pivot table groups them correctly.

## Related concepts

\`\`\`
Aggregate functions (SUM/AVERAGE/COUNT/MIN-MAX)
  ↓
UPPER/LOWER/PROPER ← you are here → TRIM → REPLACE/SUBSTITUTE → CONCAT
\`\`\`

## Practice questions

### Easy
1. Write a formula to convert A2 to all uppercase.

### Medium
2. Given a name column with inconsistent casing, write a formula to standardize it to Proper Case.

### Interview/Advanced
3. Why might two visually-different values ("Acme Corp" and "ACME CORP") both appear correctly in an exact-match VLOOKUP, but incorrectly as two separate rows in a pivot table?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=UPPER(A2)\`
2. \`=PROPER(A2)\`
3. Many spreadsheet lookup functions perform case-*insensitive* text matching by default, so a VLOOKUP still finds the match — but pivot tables group by the literal text value, which is case-sensitive for grouping purposes, so differently-cased text creates separate groups.

</details>

## 🎤 Interview preparation

**Q: Why does inconsistent text casing matter even if lookups still work?**
Short answer: Because grouping operations like pivot tables and COUNTIF/SUMIF families are effectively case-sensitive for bucketing purposes, so the same real-world value can silently split into multiple categories.

## Interview traps / tricky points

- Case-insensitivity in lookups can mask a casing problem for a long time — it only surfaces once someone groups or pivots the same column.

## Best practices

- Standardize casing on any text field that will later be grouped, pivoted, or deduplicated — do it once, early in the cleaning process.
- Combine with TRIM in the same formula to fix spacing and casing together.

---

### ⚡ Quick Revision

**UPPER** → ALL CAPS · **LOWER** → all lowercase · **PROPER** → Each Word Capitalized
**Watch for:** pivot tables/grouping treat differently-cased text as different categories
`);

setNote('trim-function', `
## 🎯 What is it?

**TRIM** removes extra leading, trailing, and repeated internal spaces from a text value, leaving single spaces between words.

## 💡 Why is it important?

Invisible extra spaces are one of the most common reasons a lookup or match silently fails — the values look identical to the eye but aren't identical to the spreadsheet.

## Syntax

\`\`\`
=TRIM(text)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | " Acme  Corp " |

**Formula:** \`=TRIM(A1)\`
**Result:** \`"Acme Corp"\`

**Explanation:** Leading/trailing spaces are removed, and the double space between "Acme" and "Corp" is collapsed to one.

## Multiple examples

**Beginner:** \`=TRIM(A2)\` — clean a single column of extra spaces.
**Intermediate:** \`=TRIM(PROPER(A2))\` — fix spacing and casing together.
**Real-world:** A VLOOKUP that returns \`#N/A\` even though the value "appears" to match — wrapping the lookup key with TRIM (\`=VLOOKUP(TRIM(A2),...)\`) is one of the most common practical fixes for a broken-looking lookup.

## ⚠️ Common mistakes

- **Assuming two cells "look the same" means they match exactly.** A trailing space is invisible but breaks exact-match comparisons.
- **Only trimming the lookup value, not the lookup table's key column** — both sides need to be clean, or the mismatch persists.
- **Using TRIM expecting it to also fix non-breaking spaces** (common when data is pasted from a website) — TRIM handles regular spaces; non-breaking spaces sometimes need a SUBSTITUTE step first.

## Real-world Data Analyst use cases

- **Data cleaning (any domain):** fixing a broken VLOOKUP/merge caused by inconsistent spacing after a CSV import.
- **Customer analysis:** cleaning a name or email column before deduplication.

## Related concepts

\`\`\`
UPPER/LOWER/PROPER → TRIM ← you are here → REPLACE/SUBSTITUTE → CONCAT
\`\`\`
Also directly supports [Lookup & Reference Functions](/skills/spreadsheets-lookup) — a "broken" lookup is very often actually a whitespace problem.

## Practice questions

### Easy
1. Write a formula to remove extra spaces from A2.

### Medium
2. A VLOOKUP fails to find a match even though the value looks identical in both sheets. What's your first thing to try?

### Interview/Advanced
3. Why can TRIM alone sometimes fail to fix a lookup, even on data pasted from a webpage?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=TRIM(A2)\`
2. Wrap both the lookup value and the target key column with TRIM (and check casing too) — invisible extra spaces are the most common cause of an apparently-identical match failing.
3. Web-pasted data sometimes contains non-breaking spaces (a different character than a normal space), which TRIM doesn't remove — a SUBSTITUTE replacing that specific character first is needed.

</details>

## 🎤 Interview preparation

**Q: A lookup fails on values that look identical. What's your first diagnostic step?**
Short answer: Suspect invisible whitespace or casing differences first — wrap both sides of the comparison in TRIM (and consider UPPER/LOWER) before assuming the data itself is wrong.

## Interview traps / tricky points

- TRIM doesn't remove tabs or non-breaking spaces in every spreadsheet tool — know the limitation rather than assuming it's a universal fix.

## Best practices

- Apply TRIM as a standard first step when importing any external or manually-entered text data.
- Trim both sides of a lookup/merge key, not just one.

---

### ⚡ Quick Revision

**TRIM(text)** → removes leading/trailing spaces and collapses repeated internal spaces
**Use case:** the #1 fix for a lookup that "should" match but doesn't
`);

setNote('concat-function', `
## 🎯 What is it?

**CONCAT** (or CONCATENATE, or the \`&\` operator) joins values from multiple cells into a single text value — such as combining first and last name into a full name.

## 💡 Why is it important?

Real data is often split across columns that need to be combined for reporting, matching, or display — building a full name, a full address, or a composite ID are all everyday CONCAT jobs.

## Syntax

\`\`\`
=CONCAT(text1, text2, ...)
=A2 & " " & B2        (the & operator, equivalent for two values)
\`\`\`

## 📊 Example

| | A | B |
|---|---|---|
| 1 | First | Last |
| 2 | Ana | Silva |

**Formula:** \`=CONCAT(A2," ",B2)\` or \`=A2&" "&B2\`
**Result:** \`"Ana Silva"\`

## Multiple examples

**Beginner:** \`=A2&" "&B2\` — build a full name.
**Intermediate:** \`=A2&"-"&B2&"-"&TEXT(C2,"YYYYMMDD")\` — build a composite ID from name and date.
**Real-world:** \`=TRIM(A2)&", "&TRIM(B2)\` — combining a city and country column into one display field, using TRIM to guard against stray spaces in either source column.

## ⚠️ Common mistakes

- **Forgetting the separator.** \`=CONCAT(A2,B2)\` produces \`"AnaSilva"\` with no space — the separator (\`" "\`, \`", "\`) must be added explicitly.
- **Not handling a missing value.** If a middle name column is sometimes blank, a naive concatenation can leave a double space or trailing separator — wrap with logic (e.g., IF) for a clean result across all rows.
- **Concatenating numbers without formatting them first**, e.g. combining a date column directly often shows an internal serial number instead of a readable date — wrap with \`TEXT(date, "format")\` first.

## Real-world Data Analyst use cases

- **Customer analysis:** building a full-name display column from first/last name fields.
- **Reporting:** building a composite key (e.g., \`region-month\`) to use as a unique lookup value across two tables.

## Related concepts

\`\`\`
TRIM → REPLACE/SUBSTITUTE → CONCAT ← you are here → Aggregate functions
\`\`\`

## Practice questions

### Easy
1. Write a formula that joins A2 and B2 with a space between them.

### Medium
2. Given separate first-name and (sometimes blank) middle-name and last-name columns, write a formula that builds a clean full name without a double space when middle name is blank.

### Interview/Advanced
3. Why might concatenating a date column directly produce an unexpected result like "45312" instead of a readable date?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=A2&" "&B2\`
2. \`=TRIM(A2&" "&B2&" "&C2)\` — TRIM collapses the extra space left behind when the middle name is blank.
3. Dates are stored internally as serial numbers; concatenation treats the cell's underlying value, not its display format, so it shows the raw number unless wrapped in \`TEXT(date_cell,"format")\` first.

</details>

## 🎤 Interview preparation

**Q: How do you avoid a double space when concatenating a column that's sometimes blank?**
Short answer: Wrap the whole concatenation in TRIM, which collapses any doubled-up spaces left by the blank field.

## Interview traps / tricky points

- Concatenating a formatted number or date directly shows its raw underlying value, not its displayed format — always wrap with TEXT() when combining formatted values into a string.

## Best practices

- Always account for optional/blank fields when building a concatenation used across many rows.
- Use TEXT() to control the exact formatting of dates/numbers before combining them into a string.

---

### ⚡ Quick Revision

**CONCAT(text1, text2, ...)** or **&** → joins text values
**Watch for:** missing separators, blank fields causing double separators, unformatted dates/numbers
`);

setNote('text-replace-substitute', `
## 🎯 What is it?

**REPLACE** changes part of a text value by *position* (start character and length); **SUBSTITUTE** changes part of a text value by *matching the exact text* to swap.

## 💡 Why is it important?

Fixing a recurring typo, removing a unit from a number field, or swapping a delimiter across a whole column is a REPLACE/SUBSTITUTE job, not something to fix manually cell by cell.

## Syntax

\`\`\`
=REPLACE(old_text, start_num, num_chars, new_text)
=SUBSTITUTE(text, old_text, new_text, [instance_num])
\`\`\`

- **REPLACE** — replaces characters at a known *position*, regardless of what they are.
- **SUBSTITUTE** — replaces a specific *matching string*, wherever it appears (or a specific occurrence, with \`instance_num\`).

## 📊 Example

| | A |
|---|---|
| 1 | $1,200.00 |

**Formula:** \`=SUBSTITUTE(SUBSTITUTE(A1,"$",""),",","")\`
**Result:** \`"1200.00"\` (now convertible to a real number with \`VALUE()\`)

## Multiple examples

**Beginner:** \`=SUBSTITUTE(A2,"-","/")\` — swap all dashes for slashes in a date-like text field.
**Intermediate:** \`=REPLACE(A2,1,3,"***")\` — mask the first 3 characters of an ID for a shared report.
**Real-world:** Cleaning a price column exported as text with a currency symbol: \`=VALUE(SUBSTITUTE(SUBSTITUTE(A2,"$",""),",",""))\` turns \`"$1,200.00"\` into the usable number \`1200\`.

## Types / Variations

| Function | Matches by | Typical use |
|---|---|---|
| REPLACE | Position (start, length) | Fixed-format fields (e.g., masking digits 1–3 of an ID) |
| SUBSTITUTE | Exact text match | Cleaning a specific character/word wherever it appears |

## ⚠️ Common mistakes

- **Using REPLACE when the text to fix isn't always in the same position.** REPLACE blindly replaces by character position — if row lengths vary, it can cut the wrong characters.
- **Forgetting SUBSTITUTE is case-sensitive by default.** \`SUBSTITUTE(A2,"NA","N/A")\` won't touch "na" in lowercase.
- **Not nesting SUBSTITUTE calls when more than one thing needs removing** (like both \`$\` and \`,\` in a price field) — each SUBSTITUTE only handles one target string per call.

## Real-world Data Analyst use cases

- **Finance analysis:** stripping currency symbols and thousand-separators from an exported price field before converting to a usable number.
- **Data cleaning (any domain):** standardizing a delimiter (e.g., all dashes to slashes) across a text-based date or ID column.

## Related concepts

\`\`\`
TRIM → REPLACE/SUBSTITUTE ← you are here → CONCAT → Aggregate functions
\`\`\`

## Practice questions

### Easy
1. Write a formula that replaces all dashes with slashes in A2 using SUBSTITUTE.

### Medium
2. Given a price column stored as text like \`"$1,200.00"\`, write a formula that returns it as a usable number.

### Interview/Advanced
3. When would REPLACE be a better choice than SUBSTITUTE?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=SUBSTITUTE(A2,"-","/")\`
2. \`=VALUE(SUBSTITUTE(SUBSTITUTE(A2,"$",""),",",""))\`
3. When the text to change is defined by a fixed *position* rather than a specific matching string — e.g., always masking the first 3 characters of every ID, regardless of what those characters happen to be.

</details>

## 🎤 Interview preparation

**Q: What's the difference between REPLACE and SUBSTITUTE?**
Short answer: REPLACE changes characters at a specific position; SUBSTITUTE changes a specific piece of matching text wherever (or however many times) it appears.

## Interview traps / tricky points

- SUBSTITUTE without an \`instance_num\` replaces *every* occurrence of the matched text — if only the first occurrence should change, the 4th argument is required.
- SUBSTITUTE is case-sensitive by default; combine with UPPER/LOWER if a case-insensitive match is intended.

## Best practices

- Nest multiple SUBSTITUTE calls when more than one character/string needs cleaning in the same field.
- Convert a cleaned numeric-looking text value with VALUE() so it can actually be summed/averaged, not just displayed.

---

### ⚡ Quick Revision

**REPLACE(text, start, length, new)** → replace by position
**SUBSTITUTE(text, old, new, [instance])** → replace by matching text
**Watch for:** case sensitivity, need to nest for multiple targets, wrap with VALUE() to make numeric
`);
