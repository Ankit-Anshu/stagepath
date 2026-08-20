import { createSkill } from './_create.mjs';

createSkill('ifs-function', {
  title: 'IFS Function',
  category: 'Spreadsheets',
  what_is_it: 'Checking multiple conditions in order and returning the result for the first one that\'s true — a flatter, more readable alternative to nesting many IF functions inside each other.',
  why_it_matters: 'Nested IFs become unreadable past 2-3 levels; IFS handles any number of conditions in one flat, top-to-bottom list that\'s much easier to audit and edit.',
  prerequisites: ['if-function'],
  objectives: ['Write an IFS formula with 3 or more conditions', 'Explain why IFS is easier to maintain than nested IF'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-ifs-1', title: 'Grade a score with tiers', description: 'Rewrite a 4-tier nested IF grading formula (A/B/C/D) using IFS instead.' }],
  verify: ['IFS returns the correct tier for every test value', 'Includes a final catch-all TRUE condition'],
  note: `
## 🎯 What is it?

**IFS** checks multiple conditions in order and returns the result for the first one that's true — a flatter, more readable alternative to nesting many [IF](/skills/if-function) functions inside each other.

## 💡 Why is it important?

Nested IFs become unreadable and error-prone past 2-3 levels of parentheses. IFS handles any number of conditions in one flat, top-to-bottom list, which is far easier to audit, debug, and edit as business rules change.

## Syntax

\`\`\`
=IFS(condition1, result1, condition2, result2, ..., TRUE, default_result)
\`\`\`

- Conditions are checked **in order**; the first TRUE one wins.
- A final \`TRUE, default_result\` pair acts as a catch-all "else" — without it, IFS returns an \`#N/A\` error if no condition matches.

## 📊 Example

| | A |
|---|---|
| 1 | 85 |

**Formula:** \`=IFS(A1>=90,"A",A1>=80,"B",A1>=70,"C",TRUE,"D")\`
**Result:** \`"B"\`

**Compare to nested IF:** \`=IF(A1>=90,"A",IF(A1>=80,"B",IF(A1>=70,"C","D")))\` — same result, but IFS reads top-to-bottom without stacked parentheses.

## Multiple examples

**Beginner:** \`=IFS(A1>10,"High",TRUE,"Low")\` — a 2-tier check, equivalent to a simple IF.
**Real-world:** \`=IFS(score>=90,"A",score>=80,"B",score>=70,"C",score>=60,"D",TRUE,"F")\` — a 5-tier grading rule that stays readable as a flat list instead of 4 levels of nesting.

## ⚠️ Common mistakes

- **Forgetting the final \`TRUE, default\` catch-all** — without it, any value that doesn't match an earlier condition returns \`#N/A\` instead of a sensible default.
- **Ordering conditions incorrectly.** Since IFS stops at the first TRUE condition, a broader condition placed before a narrower one can shadow it — conditions should generally go from most specific/highest to least specific/lowest.

## Real-world Data Analyst use cases

- **Sales analysis:** tiered commission-rate lookups based on sales volume.
- **Customer analysis:** segmenting customers into 4+ tiers based on spend, without deeply nested IFs.

## Related concepts

\`\`\`
IF → IFS ← you are here → AND → OR → IFERROR
\`\`\`

## Practice questions

### Easy
1. Rewrite \`=IF(A1>=60,"Pass","Fail")\` using IFS.

### Interview/Advanced
2. Why is condition order important in IFS but not in a simple IF?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=IFS(A1>=60,"Pass",TRUE,"Fail")\`
2. IFS evaluates conditions top-to-bottom and stops at the first TRUE one — if a broader/less specific condition is placed earlier, it can "catch" a value before a later, more specific condition ever gets checked, silently producing the wrong result.

</details>

## 🎤 Interview preparation

**Q: Why choose IFS over nested IF?**
Short answer: IFS avoids stacked parentheses and reads as a flat, top-to-bottom list of conditions, making it much easier to read, audit, and modify than 3+ levels of nested IF.

## Best practices

- Always include a final \`TRUE, default\` catch-all condition.
- Order conditions from most specific to least specific.

---

### ⚡ Quick Revision

**IFS(cond1,result1,cond2,result2,...)** → checks conditions in order, first TRUE wins
**Always end with:** \`TRUE, default_result\` as a catch-all
`,
});

createSkill('and-function', {
  title: 'AND Function',
  category: 'Spreadsheets',
  what_is_it: 'Checking whether multiple conditions are ALL true at once, returning a single TRUE or FALSE — most often used together with IF to build a rule that depends on more than one factor.',
  why_it_matters: 'Many real business rules depend on multiple conditions holding simultaneously (e.g., "large AND overdue") — AND is how you express that precisely.',
  prerequisites: ['ifs-function'],
  objectives: ['Use AND to check whether multiple conditions are all true', 'Combine AND with IF to build a multi-condition rule'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-and-1', title: 'Flag priority orders', description: 'Flag an order as "Priority" only if it is both over $500 AND from a VIP customer, using AND inside an IF.' }],
  verify: ['AND correctly returns TRUE only when every condition holds', 'Combined IF+AND formula matches the stated business rule exactly'],
  note: `
## 🎯 What is it?

**AND** checks whether multiple conditions are **all** true at once, returning a single TRUE or FALSE — most often used together with [IF](/skills/if-function) to build a rule that depends on more than one factor holding simultaneously.

## 💡 Why is it important?

Many real business rules depend on more than one condition being true at the same time (e.g., "flag as priority only if the order is both large **and** from a VIP customer") — AND is how you express that precisely, rather than approximating it with separate, error-prone formulas.

## Syntax

\`\`\`
=AND(condition1, condition2, ...)
=IF(AND(condition1, condition2), value_if_true, value_if_false)
\`\`\`

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Amount | Customer Type |
| 2 | 600 | VIP |

**Formula:** \`=IF(AND(A2>500,B2="VIP"),"Priority","Standard")\`
**Result:** \`"Priority"\` — both conditions (amount over 500, and VIP status) are true.

If the amount were 400, AND would return FALSE (even though the customer is VIP), so the result would be "Standard" — every condition must hold for AND to return TRUE.

## Multiple examples

**Beginner:** \`=AND(A1>0,A1<100)\` — check whether a value falls within a range.
**Real-world:** \`=IF(AND(days_overdue>30,amount>1000),"Escalate","Monitor")\` — a collections rule that only escalates an account when it's both significantly overdue AND a large balance, avoiding over-escalating small overdue amounts.

## ⚠️ Common mistakes

- **Using AND when OR was actually needed.** AND requires *every* condition to be true; a rule that should trigger if *any* condition is true needs [OR](/skills/or-function) instead — mixing these up silently produces the opposite of the intended rule.
- **Nesting too many conditions inside one AND**, making the rule hard to read — breaking a very complex rule into a helper column can improve clarity.

## Real-world Data Analyst use cases

- **Sales analysis:** flagging orders that meet multiple criteria at once (large AND from a specific region).
- **Operations analysis:** flagging a shipment as high-risk only if it's both overdue AND high-value.

## Related concepts

\`\`\`
IFS → AND ← you are here → OR → IFERROR
\`\`\`

## Practice questions

### Easy
1. Write a formula that returns TRUE only if A1 is greater than 10 AND less than 50.

### Interview/Advanced
2. A formula \`=IF(AND(A2>500,B2="VIP"),"Priority","Standard")\` marks a $400 VIP order as "Standard." Is this a bug?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=AND(A1>10,A1<50)\`
2. Not a bug — AND requires *both* conditions to be true; since the amount ($400) doesn't exceed 500, the AND correctly returns FALSE even though the customer is VIP, so "Standard" is the correct, intended result for this rule.

</details>

## 🎤 Interview preparation

**Q: What's the difference between AND and OR in a formula?**
Short answer: AND requires every listed condition to be true to return TRUE; OR only requires at least one of them to be true.

## Best practices

- Choose AND vs. OR deliberately based on whether the business rule requires "all conditions" or "any condition."

---

### ⚡ Quick Revision

**AND(cond1, cond2, ...)** → TRUE only if every condition is true
**Common pattern:** \`=IF(AND(...), true_result, false_result)\`
`,
});

createSkill('or-function', {
  title: 'OR Function',
  category: 'Spreadsheets',
  what_is_it: 'Checking whether at least one of multiple conditions is true, returning a single TRUE or FALSE — the counterpart to AND, used when any one factor should trigger a rule.',
  why_it_matters: 'Many business rules should trigger if any one of several conditions is met (e.g., "flag if overdue OR high-value") — OR is how you express that precisely.',
  prerequisites: ['and-function'],
  objectives: ['Use OR to check whether at least one condition is true', 'Combine OR with IF to build a multi-condition rule'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-or-1', title: 'Flag at-risk orders', description: 'Flag an order as "Review" if it is either overdue OR flagged as a high-value order, using OR inside an IF.' }],
  verify: ['OR correctly returns TRUE when at least one condition holds', 'Combined IF+OR formula matches the stated business rule exactly'],
  note: `
## 🎯 What is it?

**OR** checks whether **at least one** of multiple conditions is true, returning a single TRUE or FALSE — the direct counterpart to [AND](/skills/and-function), used when any one factor should be enough to trigger a rule.

## 💡 Why is it important?

Many business rules should trigger if any one of several conditions is met — "flag this account if it's overdue **or** unusually large" — OR is how you express that precisely, rather than writing separate rules for each condition.

## Syntax

\`\`\`
=OR(condition1, condition2, ...)
=IF(OR(condition1, condition2), value_if_true, value_if_false)
\`\`\`

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Days Overdue | Amount |
| 2 | 45 | 200 |

**Formula:** \`=IF(OR(A2>30,B2>1000),"Review","OK")\`
**Result:** \`"Review"\` — days overdue (45) exceeds 30, so OR returns TRUE even though the amount doesn't meet the second condition.

## Multiple examples

**Beginner:** \`=OR(A1="Yes",A1="Maybe")\` — check if a value matches either of two acceptable answers.
**Real-world:** \`=IF(OR(status="Cancelled",status="Refunded"),"Exclude","Include")\` — excluding any order in either of two non-revenue-generating statuses from a revenue report.

## ⚠️ Common mistakes

- **Using OR when AND was actually needed.** OR only requires *one* condition to be true; a rule that genuinely needs *every* condition to hold needs [AND](/skills/and-function) instead — using the wrong one silently over- or under-triggers the rule.
- **Assuming OR checks conditions in a particular priority order.** OR simply returns TRUE if any condition is true — it doesn't distinguish which one, unlike IFS.

## Real-world Data Analyst use cases

- **Collections/operations analysis:** flagging an account for review if it meets any one of several risk criteria.
- **Data cleaning:** excluding a row if its status matches any one of several "non-standard" values (cancelled, refunded, test).

## Related concepts

\`\`\`
AND → OR ← you are here → IFERROR
\`\`\`

## Practice questions

### Easy
1. Write a formula that returns TRUE if A1 equals "Red" OR "Blue".

### Interview/Advanced
2. When would AND and OR give the same result for a given set of conditions?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=OR(A1="Red",A1="Blue")\`
2. When exactly one condition is being checked (AND and OR behave identically with a single condition), or when every condition happens to be true or false together in the specific data being tested — in general, with 2+ genuinely independent conditions, AND and OR will diverge whenever the conditions don't all match.

</details>

## 🎤 Interview preparation

**Q: How would you flag a row that meets any one of three different risk criteria?**
Short answer: Wrap all three conditions in a single OR, then use that OR inside an IF to produce the flag — OR returns TRUE as soon as any one condition is met.

## Best practices

- Choose OR vs. AND deliberately based on whether the rule needs "any condition" or "all conditions" to trigger.

---

### ⚡ Quick Revision

**OR(cond1, cond2, ...)** → TRUE if at least one condition is true
**vs. AND:** AND needs every condition true; OR needs just one
`,
});

createSkill('iferror-function', {
  title: 'IFERROR Function',
  category: 'Spreadsheets',
  what_is_it: 'Catching a formula error and replacing it with a clean, intentional result instead of letting a raw error value (like #N/A or #DIV/0!) appear in a report.',
  why_it_matters: 'Real formulas fail sometimes — a missing lookup match, a division by zero — and IFERROR is how you handle that gracefully instead of shipping a report full of alarming error codes.',
  prerequisites: ['or-function'],
  objectives: ['Wrap a formula with IFERROR to handle a likely failure case', 'Explain the risk of using IFERROR too broadly'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-iferror-1', title: 'Clean up a lookup column', description: 'Wrap a VLOOKUP that sometimes fails to find a match with IFERROR, showing "Not found" instead of a raw #N/A error.' }],
  verify: ['IFERROR replaces the error with a clear, intentional message', 'IFERROR does not silently hide a genuine formula bug'],
  note: `
## 🎯 What is it?

**IFERROR** catches any error a formula produces (\`#N/A\`, \`#DIV/0!\`, \`#REF!\`, etc.) and replaces it with a clean, intentional value instead — so a reader sees "Not found" or a blank instead of a raw, alarming-looking error code.

## 💡 Why is it important?

Real formulas fail sometimes — a lookup with no match, a division by a value that turns out to be zero — and IFERROR is how you handle that gracefully in a report meant for a stakeholder, rather than shipping a spreadsheet full of visible \`#N/A\` and \`#DIV/0!\` cells.

## Syntax

\`\`\`
=IFERROR(formula, value_if_error)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | 100 |
| 2 | 0 |

**Formula (without protection):** \`=A1/A2\` → \`#DIV/0!\` error.
**Formula (with IFERROR):** \`=IFERROR(A1/A2,"N/A")\` → \`"N/A"\`

**Explanation:** The underlying division-by-zero problem still exists, but instead of an alarming raw error, the report shows a clean, intentional "N/A" — readable and clearly not a bug.

## Multiple examples

**Beginner:** \`=IFERROR(A1/B1,0)\` — return 0 instead of a division error.
**Intermediate:** \`=IFERROR(VLOOKUP(A2,customers!A:B,2,FALSE),"Not found")\` — a lookup that clearly labels a missing match instead of showing \`#N/A\`.
**Real-world:** Wrapping every formula in a stakeholder-facing dashboard with IFERROR so a data-quality issue in the source data (a missing row, an unexpected zero) never produces a visible, unexplained error cell in front of an executive audience.

## ⚠️ Common mistakes

- **Using IFERROR to silently hide a genuine bug**, rather than to handle a known, expected edge case. If a formula is erroring because of an actual mistake in its logic, IFERROR just makes that mistake invisible instead of fixing it — the underlying formula is still wrong.
- **Replacing an error with a misleading value**, like \`0\`, when the honest answer is "unknown" or "not found" — this can silently distort a downstream SUM or AVERAGE that treats the 0 as a real value.
- **Wrapping every formula in IFERROR by default**, out of habit, instead of understanding *why* a specific formula might error and handling that specific case intentionally.

## Real-world Data Analyst use cases

- **Any lookup-heavy report:** replacing raw \`#N/A\` errors from unmatched VLOOKUP/XLOOKUP results with a clear, intentional label.
- **Ratio/rate calculations:** protecting a division formula (like a conversion rate) from a \`#DIV/0!\` error when the denominator happens to be zero for a given row.

## Related concepts

\`\`\`
AND → OR → IFERROR ← you are here
\`\`\`
This closes the core logic building blocks — the SUMIF/COUNTIF/AVERAGEIF family that follows builds directly on IF's conditional logic.

## Practice questions

### Easy
1. Write a formula that returns "Error" instead of a raw error if A1/B1 fails.

### Medium
2. Why is replacing a lookup error with 0 sometimes worse than replacing it with "Not found"?

### Interview/Advanced
3. When is using IFERROR actually a bad practice?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=IFERROR(A1/B1,"Error")\`
2. Because 0 looks like a real, valid numeric result — a downstream SUM or AVERAGE would silently include it as if it were a genuine zero value, distorting the result, whereas "Not found" is clearly not a number and won't be miscounted.
3. When it's used to mask a genuine formula bug rather than handle a known, expected edge case — this hides the real problem instead of fixing it, and can make a broken formula look like it's working correctly.

</details>

## 🎤 Interview preparation

**Q: Why would you wrap a lookup formula with IFERROR in a report meant for stakeholders?**
Short answer: To replace a raw, technical-looking error (like #N/A) with a clear, intentional message, so the report reads cleanly rather than looking broken — while still making sure the underlying missing-match issue is understood, not just hidden.

## Interview traps / tricky points

- IFERROR can mask a genuine bug just as easily as it can handle a legitimate edge case — always be able to explain *why* a specific formula might error before wrapping it.

## Best practices

- Use IFERROR intentionally for known, expected failure cases — not as a blanket habit on every formula.
- Choose a replacement value that won't be misread as real data downstream (prefer a text label like "Not found" over a numeric 0 in most cases).

---

### ⚡ Quick Revision

**IFERROR(formula, value_if_error)** → catches any error, replaces with a clean value
**Watch for:** using it to hide a real bug instead of handling a known edge case
`,
});

createSkill('sumif-function', {
  title: 'SUMIF Function',
  category: 'Spreadsheets',
  what_is_it: 'Summing a range, but only for rows that meet one specific condition — like summing revenue for just one region.',
  why_it_matters: 'Most real summary questions are conditional ("total revenue in the West region," not just "total revenue") — SUMIF answers this directly without a pivot table.',
  prerequisites: ['iferror-function'],
  objectives: ['Write a SUMIF formula with one condition', 'Explain the three arguments of SUMIF'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-sumif-1', title: 'Sum revenue by region', description: 'Given a transactions list, use SUMIF to total revenue for just the "West" region.' }],
  verify: ['SUMIF correctly sums only rows matching the condition', 'Range and criteria range are correctly aligned'],
  note: `
## 🎯 What is it?

**SUMIF** sums a range, but only for the rows that meet **one specific condition** — like summing revenue for just one region, without first filtering or sorting the data.

## 💡 Why is it important?

Most real summary questions are conditional ("total revenue in the West region," not just "total revenue across everything") — SUMIF answers this directly with a single formula, no pivot table required.

## Syntax

\`\`\`
=SUMIF(criteria_range, criteria, sum_range)
\`\`\`

- **criteria_range** — the column to check the condition against.
- **criteria** — the condition to match (a value, text, or expression like \`">100"\`).
- **sum_range** — the column to actually sum, for the rows where the condition matched.

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Region | Revenue |
| 2 | West | 200 |
| 3 | East | 150 |
| 4 | West | 300 |

**Formula:** \`=SUMIF(A2:A4,"West",B2:B4)\`
**Result:** \`500\` (200 + 300, the two West rows only)

## Multiple examples

**Beginner:** \`=SUMIF(A2:A100,"Completed",B2:B100)\` — total revenue for only completed orders.
**Intermediate:** \`=SUMIF(B2:B100,">500",B2:B100)\` — total of only the values themselves over 500 (criteria_range and sum_range can be the same range).
**Real-world:** \`=SUMIF(region_range,"West",revenue_range)\` copied across a list of regions in another column, producing a quick regional revenue breakdown without building a full pivot table.

## ⚠️ Common mistakes

- **Misaligning criteria_range and sum_range** — they must correspond row-for-row, or the sum will be calculated against the wrong values entirely.
- **Forgetting quotes around a text criteria** (\`"West"\`, not \`West\`) — a common syntax error.
- **Needing more than one condition** and trying to force it into SUMIF, which only supports a single criteria — see [SUMIFS](/skills/sumifs-function) for multiple conditions.

## Real-world Data Analyst use cases

- **Sales analysis:** total revenue for one specific region, product category, or time period.
- **Finance analysis:** total expenses for one specific cost category.

## Related concepts

\`\`\`
IFERROR → SUMIF ← you are here → SUMIFS → COUNTIF → COUNTIFS → AVERAGEIF → AVERAGEIFS
\`\`\`

## Practice questions

### Easy
1. Write a SUMIF that totals column B where column A equals "Completed".

### Interview/Advanced
2. Why would \`=SUMIF(A2:A10,"West",B2:B20)\` (mismatched range sizes) produce an unreliable result?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=SUMIF(A:A,"Completed",B:B)\`
2. The criteria_range and sum_range must be the same size and aligned row-for-row — a mismatch means the function is checking conditions against one set of rows but summing a differently-sized range, producing a result that doesn't correspond correctly to the intended rows.

</details>

## 🎤 Interview preparation

**Q: What are SUMIF's three arguments?**
Short answer: The criteria_range (where the condition is checked), the criteria itself (the condition to match), and the sum_range (the values to actually total for matching rows).

## Best practices

- Always ensure criteria_range and sum_range are the same size and properly aligned.
- Use SUMIFS instead as soon as more than one condition is needed.

---

### ⚡ Quick Revision

**SUMIF(criteria_range, criteria, sum_range)** → conditional sum, one condition
**Need 2+ conditions?** → use SUMIFS instead
`,
});

createSkill('sumifs-function', {
  title: 'SUMIFS Function',
  category: 'Spreadsheets',
  what_is_it: 'Summing a range based on two or more conditions at once — like summing revenue for the West region AND the current month.',
  why_it_matters: 'Real business questions are often multi-conditional, and SUMIFS is the direct, single-formula way to answer them without a pivot table.',
  prerequisites: ['sumif-function'],
  objectives: ['Write a SUMIFS formula with two or more conditions', 'Explain the argument order difference between SUMIF and SUMIFS'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-sumifs-1', title: 'Sum revenue by region and month', description: 'Given a transactions list, use SUMIFS to total revenue for the "West" region in "January" only.' }],
  verify: ['SUMIFS correctly sums only rows matching every condition', 'All criteria ranges are correctly aligned with the sum range'],
  note: `
## 🎯 What is it?

**SUMIFS** sums a range based on **two or more conditions at once** — like summing revenue for the West region **and** the current month, in a single formula.

## 💡 Why is it important?

Real business questions are often multi-conditional ("revenue in the West region, in January, for completed orders only") — SUMIFS is the direct, single-formula answer, avoiding the need to build a full pivot table for a quick, targeted total.

## Syntax

\`\`\`
=SUMIFS(sum_range, criteria_range1, criteria1, criteria_range2, criteria2, ...)
\`\`\`

> ⚠️ **Note the argument order difference from SUMIF:** SUMIFS puts \`sum_range\` **first**, while SUMIF puts it **last**. This is a very common source of confusion when switching between the two.

## 📊 Example

| | A | B | C |
|---|---|---|---|
| 1 | Region | Month | Revenue |
| 2 | West | Jan | 200 |
| 3 | West | Feb | 150 |
| 4 | East | Jan | 300 |

**Formula:** \`=SUMIFS(C2:C4,A2:A4,"West",B2:B4,"Jan")\`
**Result:** \`200\` (only row 2 matches both the region and month conditions)

## Multiple examples

**Beginner:** \`=SUMIFS(B2:B100,A2:A100,"Completed")\` — SUMIFS with just one condition, functionally identical to SUMIF but with reordered arguments.
**Intermediate:** \`=SUMIFS(revenue,region,"West",status,"Completed")\` — two conditions combined.
**Real-world:** \`=SUMIFS(revenue,region,"West",order_date,">="&DATE(2024,1,1),order_date,"<"&DATE(2024,2,1))\` — summing revenue for one region within a specific date range, combining a text condition with two date-range conditions in one formula.

## ⚠️ Common mistakes

- **Confusing SUMIF's argument order with SUMIFS's.** SUMIF: \`(criteria_range, criteria, sum_range)\`. SUMIFS: \`(sum_range, criteria_range1, criteria1, ...)\` — the sum_range moves to the front, a frequent source of formula errors when switching between the two.
- **Mismatched range sizes across the different criteria ranges**, which causes an error since every criteria range and the sum range must all be the same size.
- **Using AND-only logic without realizing it.** SUMIFS combines all conditions with AND (every condition must match) — there's no built-in OR logic across conditions within one SUMIFS call.

## Real-world Data Analyst use cases

- **Sales analysis:** revenue for one region within one specific date range.
- **Finance analysis:** total expenses for one cost category, in one department, within one quarter.

## Related concepts

\`\`\`
SUMIF → SUMIFS ← you are here → COUNTIF → COUNTIFS → AVERAGEIF → AVERAGEIFS
\`\`\`

## Practice questions

### Easy
1. Write a SUMIFS that totals column C where column A = "West" and column B = "Q1".

### Interview/Advanced
2. Why does SUMIFS put sum_range first, unlike SUMIF which puts it last?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=SUMIFS(C:C,A:A,"West",B:B,"Q1")\`
2. This is simply how Microsoft designed the function's argument order (to accommodate multiple criteria-range/criteria pairs of variable length after it) — there's no deeper logical reason, but it's a well-known, frequently-tested "gotcha" specifically because it differs from SUMIF's order.

</details>

## 🎤 Interview preparation

**Q: How would you sum revenue for a specific region within a specific date range?**
Short answer: Use SUMIFS with the revenue column as sum_range, and two additional criteria pairs — one for the region and two for the date range's lower and upper bounds.

## Interview traps / tricky points

- The SUMIF vs. SUMIFS argument-order swap is one of the most commonly tested "gotcha" details in spreadsheet interviews.

## Best practices

- Double-check argument order whenever switching between SUMIF and SUMIFS.
- Keep all criteria ranges and the sum range the same size to avoid errors.

---

### ⚡ Quick Revision

**SUMIFS(sum_range, crit_range1, crit1, crit_range2, crit2, ...)** → sum_range comes FIRST (unlike SUMIF)
**All conditions combine with AND** — every condition must match
`,
});

createSkill('countif-function', {
  title: 'COUNTIF Function',
  category: 'Spreadsheets',
  what_is_it: 'Counting how many cells in a range meet one specific condition — like counting how many orders are "Completed".',
  why_it_matters: 'Counting rows by category is one of the most common reporting needs, and COUNTIF answers it directly without a pivot table.',
  prerequisites: ['sumifs-function'],
  objectives: ['Write a COUNTIF formula with one condition', 'Use COUNTIF to check for duplicate values'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-countif-1', title: 'Count orders by status', description: 'Given a list of orders, use COUNTIF to count how many have status "Completed".' }],
  verify: ['COUNTIF correctly counts only matching rows', 'Can use COUNTIF to identify duplicate values in a column'],
  note: `
## 🎯 What is it?

**COUNTIF** counts how many cells in a range meet **one specific condition** — like counting how many orders have status "Completed," without manually filtering and counting rows.

## 💡 Why is it important?

Counting rows by category ("how many are X?") is one of the most common reporting needs, and COUNTIF answers it directly in a single formula. It's also the standard way to check for duplicate values in a column.

## Syntax

\`\`\`
=COUNTIF(range, criteria)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | Completed |
| 2 | Pending |
| 3 | Completed |

**Formula:** \`=COUNTIF(A1:A3,"Completed")\`
**Result:** \`2\`

## Multiple examples

**Beginner:** \`=COUNTIF(A2:A100,"West")\` — how many rows are the West region.
**Intermediate:** \`=COUNTIF(A2:A100,A2)>1\` — checking whether the value in A2 appears more than once in the range, a common building block for spotting duplicates.
**Real-world:** \`=COUNTIF(email_range,email_range)\` (as an array formula) applied down a column, flagging every row whose email address appears more than once — a fast, formula-based duplicate-detection technique.

## ⚠️ Common mistakes

- **Forgetting quotes around text criteria** (\`"Completed"\`, not \`Completed\`).
- **Trying to check two conditions with COUNTIF**, which only supports one — see [COUNTIFS](/skills/countifs-function) for multiple conditions.
- **Using COUNTIF for duplicate detection without understanding the count includes the row itself** — a count of 1 means unique; a count of 2+ means the value is duplicated.

## Real-world Data Analyst use cases

- **Data cleaning:** flagging duplicate customer IDs or email addresses before deduplication.
- **Marketing analysis:** counting how many leads fall into a specific status or source category.

## Related concepts

\`\`\`
SUMIFS → COUNTIF ← you are here → COUNTIFS → AVERAGEIF → AVERAGEIFS
\`\`\`
COUNTIF-based duplicate detection connects directly to [Data Cleaning & Quality](/skills/data-cleaning)'s duplicate-detection principles.

## Practice questions

### Easy
1. Write a COUNTIF that counts how many cells in A2:A50 equal "Yes".

### Interview/Advanced
2. How would you use COUNTIF to flag every duplicate value in a column?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=COUNTIF(A2:A50,"Yes")\`
2. A formula like \`=COUNTIF($A$2:$A$100,A2)>1\` in a helper column, copied down — it counts how many times each row's value appears across the whole range (using absolute references for the range and a relative reference for the value being checked), flagging TRUE for any value that appears more than once.

</details>

## 🎤 Interview preparation

**Q: How would you check for duplicate values in a column using COUNTIF?**
Short answer: Use COUNTIF with the entire column locked as an absolute reference and the current row's value as the criteria, copied down — any result greater than 1 indicates that value is duplicated somewhere in the column.

## Best practices

- Use absolute references for the range when copying a COUNTIF-based duplicate check down a column.
- Switch to COUNTIFS as soon as more than one condition is needed.

---

### ⚡ Quick Revision

**COUNTIF(range, criteria)** → conditional count, one condition
**Duplicate check:** \`=COUNTIF($A$2:$A$100,A2)>1\`
`,
});

createSkill('countifs-function', {
  title: 'COUNTIFS Function',
  category: 'Spreadsheets',
  what_is_it: 'Counting how many rows meet two or more conditions at once — like counting orders that are both "Completed" AND from the "West" region.',
  why_it_matters: 'Real counting questions are often multi-conditional, and COUNTIFS answers them directly without a pivot table.',
  prerequisites: ['countif-function'],
  objectives: ['Write a COUNTIFS formula with two or more conditions', 'Explain how COUNTIFS combines multiple conditions'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-countifs-1', title: 'Count completed West orders', description: 'Given a list of orders, use COUNTIFS to count how many are both "Completed" and from the "West" region.' }],
  verify: ['COUNTIFS correctly counts only rows matching every condition', 'All criteria ranges are correctly aligned'],
  note: `
## 🎯 What is it?

**COUNTIFS** counts how many rows meet **two or more conditions at once** — like counting orders that are both "Completed" **and** from the "West" region, in a single formula.

## 💡 Why is it important?

Real counting questions are often multi-conditional, and COUNTIFS answers them directly, following the same pattern as [SUMIFS](/skills/sumifs-function) but for counting rows instead of summing a value.

## Syntax

\`\`\`
=COUNTIFS(criteria_range1, criteria1, criteria_range2, criteria2, ...)
\`\`\`

Unlike SUMIFS, COUNTIFS has no separate "range to total" — it just counts rows where every criteria pair matches.

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Region | Status |
| 2 | West | Completed |
| 3 | West | Pending |
| 4 | East | Completed |

**Formula:** \`=COUNTIFS(A2:A4,"West",B2:B4,"Completed")\`
**Result:** \`1\` (only row 2 matches both conditions)

## Multiple examples

**Beginner:** \`=COUNTIFS(A2:A100,"West")\` — COUNTIFS with just one condition, equivalent to COUNTIF.
**Intermediate:** \`=COUNTIFS(region,"West",status,"Completed")\` — two conditions combined.
**Real-world:** \`=COUNTIFS(region,"West",order_date,">="&DATE(2024,1,1),order_date,"<"&DATE(2024,2,1))\` — counting how many West-region orders fell within January specifically.

## ⚠️ Common mistakes

- **Mismatched criteria range sizes** — every criteria range must be the same size as every other, or the formula errors.
- **Assuming OR logic between conditions.** Like SUMIFS, COUNTIFS combines all conditions with AND — every condition must be true for a row to count.

## Real-world Data Analyst use cases

- **Sales analysis:** counting completed orders in a specific region and time period.
- **Operations analysis:** counting shipments that are both overdue and above a certain value, to size an escalation queue.

## Related concepts

\`\`\`
COUNTIF → COUNTIFS ← you are here → AVERAGEIF → AVERAGEIFS
\`\`\`

## Practice questions

### Easy
1. Write a COUNTIFS that counts rows where column A = "West" and column B = "Completed".

### Interview/Advanced
2. How would you count orders that are either overdue OR high-value (not both required)?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=COUNTIFS(A:A,"West",B:B,"Completed")\`
2. COUNTIFS alone only combines conditions with AND — for an OR-style count, add two separate COUNTIFS (or COUNTIF) calls together and subtract the overlap counted twice: \`=COUNTIF(overdue_range,TRUE)+COUNTIF(highvalue_range,TRUE)-COUNTIFS(overdue_range,TRUE,highvalue_range,TRUE)\`.

</details>

## 🎤 Interview preparation

**Q: Does COUNTIFS support OR logic between its conditions?**
Short answer: No — every condition passed to COUNTIFS is combined with AND; achieving OR logic requires combining separate COUNTIF/COUNTIFS calls (and typically subtracting any double-counted overlap).

## Best practices

- Keep all criteria ranges the same size and correctly aligned.
- Remember COUNTIFS is AND-only; build OR logic by combining multiple counts.

---

### ⚡ Quick Revision

**COUNTIFS(range1, crit1, range2, crit2, ...)** → conditional count, 2+ conditions, all combined with AND
`,
});

createSkill('averageif-function', {
  title: 'AVERAGEIF Function',
  category: 'Spreadsheets',
  what_is_it: 'Averaging a range, but only for rows that meet one specific condition — like the average order value for just the West region.',
  why_it_matters: 'A single overall average often hides meaningful differences between segments — AVERAGEIF lets you compute a segment-specific average directly.',
  prerequisites: ['countifs-function'],
  objectives: ['Write an AVERAGEIF formula with one condition', 'Explain how AVERAGEIF differs from AVERAGE'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-averageif-1', title: 'Average order value by region', description: 'Given a transactions list, use AVERAGEIF to calculate the average order value for just the "West" region.' }],
  verify: ['AVERAGEIF correctly averages only matching rows', 'Range and average range are correctly aligned'],
  note: `
## 🎯 What is it?

**AVERAGEIF** averages a range, but only for the rows that meet **one specific condition** — like the average order value for just the West region, following the same pattern as [SUMIF](/skills/sumif-function) but computing a mean instead of a total.

## 💡 Why is it important?

A single overall average often hides meaningful differences between segments (see [Descriptive Statistics](/skills/stats-descriptive)) — AVERAGEIF lets you compute a segment-specific average directly, without filtering the data first.

## Syntax

\`\`\`
=AVERAGEIF(criteria_range, criteria, average_range)
\`\`\`

## 📊 Example

| | A | B |
|---|---|---|
| 1 | Region | Amount |
| 2 | West | 100 |
| 3 | East | 200 |
| 4 | West | 300 |

**Formula:** \`=AVERAGEIF(A2:A4,"West",B2:B4)\`
**Result:** \`200\` — the average of 100 and 300, the two West rows only.

## Multiple examples

**Beginner:** \`=AVERAGEIF(A2:A100,"Completed",B2:B100)\` — average order amount for completed orders only.
**Real-world:** Comparing \`=AVERAGEIF(region,"West",amount)\` against \`=AVERAGEIF(region,"East",amount)\` side by side to spot a meaningful regional difference in typical order size.

## ⚠️ Common mistakes

- **Misaligning criteria_range and average_range**, same risk as SUMIF — they must correspond row-for-row.
- **Not checking for skew before trusting the average.** A segment-specific average can still be misleading if that segment has outliers — pairing it with a MEDIAN check is good practice, same as with plain AVERAGE.

## Real-world Data Analyst use cases

- **Sales analysis:** average order value for one specific region or product category.
- **HR analysis:** average tenure or salary for one specific department.

## Related concepts

\`\`\`
COUNTIFS → AVERAGEIF ← you are here → AVERAGEIFS
\`\`\`

## Practice questions

### Easy
1. Write an AVERAGEIF that averages column B where column A equals "Completed".

### Interview/Advanced
2. Why might comparing AVERAGEIF results across two segments be misleading without also checking each segment's spread?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=AVERAGEIF(A:A,"Completed",B:B)\`
2. A segment average can be skewed by a small number of outliers within that segment, just like an overall average can be — comparing averages alone can hide that one segment is more volatile or has different extremes than the other, which a standard deviation or median comparison would reveal.

</details>

## 🎤 Interview preparation

**Q: When would you use AVERAGEIF instead of plain AVERAGE?**
Short answer: When you need the average for a specific segment or category, not the whole dataset — AVERAGEIF filters and averages in one step.

## Best practices

- Pair a segment-specific average with a check on that segment's spread (standard deviation) or median before drawing a strong conclusion.

---

### ⚡ Quick Revision

**AVERAGEIF(criteria_range, criteria, average_range)** → conditional average, one condition
`,
});

createSkill('averageifs-function', {
  title: 'AVERAGEIFS Function',
  category: 'Spreadsheets',
  what_is_it: 'Averaging a range based on two or more conditions at once — like the average order value for the West region in January only.',
  why_it_matters: 'This completes the *IF/*IFS family — the same pattern (SUM, COUNT, AVERAGE, each with a single-condition and multi-condition version) covers the vast majority of real conditional-summary needs in a spreadsheet.',
  prerequisites: ['averageif-function'],
  objectives: ['Write an AVERAGEIFS formula with two or more conditions', 'Explain the full *IF/*IFS function family'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-averageifs-1', title: 'Average order value by region and month', description: 'Given a transactions list, use AVERAGEIFS to calculate the average order value for the "West" region in "January" only.' }],
  verify: ['AVERAGEIFS correctly averages only rows matching every condition', 'All criteria ranges are correctly aligned with the average range'],
  note: `
## 🎯 What is it?

**AVERAGEIFS** averages a range based on **two or more conditions at once** — like the average order value for the West region in January only, following the same multi-condition pattern as [SUMIFS](/skills/sumifs-function) and [COUNTIFS](/skills/countifs-function).

## 💡 Why is it important?

This completes the conditional-aggregation family: SUM/SUMIF/SUMIFS, COUNT/COUNTIF/COUNTIFS, and AVERAGE/AVERAGEIF/AVERAGEIFS together cover the vast majority of real "give me a number, but only for this specific slice of data" questions in a spreadsheet — no pivot table required for a quick, targeted calculation.

## Syntax

\`\`\`
=AVERAGEIFS(average_range, criteria_range1, criteria1, criteria_range2, criteria2, ...)
\`\`\`

> Note: like SUMIFS, the range to calculate (\`average_range\`) comes **first**, followed by the criteria pairs — the same argument-order pattern as SUMIFS, different from the single-condition AVERAGEIF.

## 📊 Example

| | A | B | C |
|---|---|---|---|
| 1 | Region | Month | Amount |
| 2 | West | Jan | 100 |
| 3 | West | Feb | 300 |
| 4 | West | Jan | 200 |

**Formula:** \`=AVERAGEIFS(C2:C4,A2:A4,"West",B2:B4,"Jan")\`
**Result:** \`150\` — the average of rows 2 and 4 (100 and 200), the only rows matching both "West" and "Jan".

## Multiple examples

**Beginner:** \`=AVERAGEIFS(B2:B100,A2:A100,"Completed")\` — AVERAGEIFS with one condition.
**Real-world:** \`=AVERAGEIFS(amount,region,"West",status,"Completed",order_date,">="&DATE(2024,1,1))\` — average order value for completed West-region orders from a specific date onward, combining three conditions in one formula.

## ⚠️ Common mistakes

- **Confusing AVERAGEIF's argument order (range last) with AVERAGEIFS's (range first)** — the same trap as SUMIF vs. SUMIFS.
- **Averaging a segment with very few matching rows**, producing a number that's technically correct but not statistically meaningful — always sanity-check the underlying count (with COUNTIFS) alongside a conditional average.

## Real-world Data Analyst use cases

- **Sales analysis:** average order value for a specific region and time period combined.
- **HR analysis:** average performance score for a specific department and tenure band.

## Related concepts

\`\`\`
AVERAGEIF → AVERAGEIFS ← you are here
\`\`\`
This closes the Logic & Conditional group. Together with SUMIF/SUMIFS and COUNTIF/COUNTIFS, this family answers almost any conditional summary question directly — [Pivot Tables](/skills/spreadsheets-pivot-tables) handle the same job when the breakdown needs to be interactive or cover many categories at once.

## Practice questions

### Easy
1. Write an AVERAGEIFS that averages column C where column A = "West" and column B = "Jan".

### Interview/Advanced
2. Why is it good practice to check COUNTIFS alongside AVERAGEIFS for the same conditions?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=AVERAGEIFS(C:C,A:A,"West",B:B,"Jan")\`
2. To confirm how many rows the average is actually based on — an average computed from only 1 or 2 matching rows can be technically correct but misleadingly unstable or unrepresentative, and checking the count first prevents over-interpreting a small-sample average.

</details>

## 🎤 Interview preparation

**Q: How would you calculate the average order value for one region within one specific month?**
Short answer: \`=AVERAGEIFS(amount_range, region_range, "West", month_range, "Jan")\` — combining the two conditions in one AVERAGEIFS call.

## Best practices

- Always sanity-check a conditional average's underlying row count with COUNTIFS before trusting or reporting it, especially for a narrow, multi-condition slice.

---

### ⚡ Quick Revision

**AVERAGEIFS(average_range, crit_range1, crit1, ...)** → average_range comes FIRST (like SUMIFS)
**Sanity check:** pair with COUNTIFS to confirm the underlying sample size isn't too small
`,
});
