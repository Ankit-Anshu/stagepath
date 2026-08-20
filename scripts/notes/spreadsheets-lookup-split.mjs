import { createSkill } from './_create.mjs';

createSkill('vlookup-function', {
  title: 'VLOOKUP Function',
  category: 'Spreadsheets',
  what_is_it: 'Searching down the first column of a table for a matching value, then returning a value from a specified column to the right of it.',
  why_it_matters: 'VLOOKUP is the classic, most widely-known way to pull matching data from another table by a shared key — still the most common lookup function you\'ll encounter in existing spreadsheets.',
  prerequisites: ['averageifs-function'],
  objectives: ['Write a VLOOKUP with an exact match', 'Explain VLOOKUP\'s left-to-right search limitation'],
  estimated_minutes: 40,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-vlookup-1', title: 'Pull a customer name by ID', description: 'Given a customers table and an orders table, use VLOOKUP to pull the customer name into the orders table by customer ID.' }],
  verify: ['VLOOKUP returns the correct matching value', 'Exact match (FALSE) is used deliberately, not left to default'],
  note: `
## 🎯 What is it?

**VLOOKUP** searches **down** the first column of a table for a matching value, then returns a value from a column to the **right** of it, at a specified position.

## 💡 Why is it important?

VLOOKUP is the classic, most widely-known way to pull matching data from another table by a shared key — it's still the most common lookup function you'll find in existing, real-world spreadsheets, even though [XLOOKUP](/skills/xlookup-function) is the modern replacement for new work.

## Syntax

\`\`\`
=VLOOKUP(lookup_value, table_range, col_index_num, [exact_match])
\`\`\`

- **lookup_value** — the value to search for.
- **table_range** — the table to search, where the first column holds the values to match against.
- **col_index_num** — which column (counting from the table's first column as 1) to return a value from.
- **exact_match** — \`FALSE\` (or \`0\`) for an exact match, which should almost always be used; \`TRUE\` allows an approximate match, a rarely-needed, riskier default.

## 📊 Example

\`customers\` table (A:C):

| customer_id | name | region |
|---|---|---|
| 101 | Ana Silva | West |
| 102 | Wei Chen | East |

**Formula:** \`=VLOOKUP(102, A:C, 2, FALSE)\`
**Result:** \`"Wei Chen"\`

**Explanation:** VLOOKUP finds 102 in the first column (A), then returns the value 2 columns over (column B, name).

## Multiple examples

**Beginner:** \`=VLOOKUP(A2,customers!A:C,2,FALSE)\` — pull a name by ID.
**Intermediate:** \`=IFERROR(VLOOKUP(A2,customers!A:C,3,FALSE),"Unknown")\` — combining VLOOKUP with IFERROR to handle a missing match gracefully.
**Real-world:** Pulling a customer's region into an orders sheet by customer ID, to enable a regional revenue breakdown without manually merging two tables.

## ⚠️ Common mistakes

- **Forgetting the 4th argument (exact match).** Leaving it blank can default to an approximate match on unsorted data, silently returning a wrong result.
- **Hardcoding col_index_num, then inserting a new column** into the source table — this silently shifts which value gets returned, since the index number no longer points at the intended column.
- **Trying to look "left" of the lookup column.** VLOOKUP can only return a value to the right of its search column — see [INDEX + MATCH](/skills/index-match-function) or [XLOOKUP](/skills/xlookup-function) for lookups that need to go left.

## Real-world Data Analyst use cases

- **Customer analysis:** merging customer attributes (name, region, tier) into a transactions sheet by customer ID.
- **Finance analysis:** pulling a department's budget target from a reference tab.

## Related concepts

\`\`\`
Averageifs → VLOOKUP ← you are here → HLOOKUP → INDEX → MATCH → INDEX+MATCH → XLOOKUP → XMATCH
\`\`\`
This is the direct spreadsheet analog of [SQL — JOIN](/skills/sql-joins), which you'll learn in the SQL stage.

## Practice questions

### Easy
1. Write a VLOOKUP that returns a customer's name from a table in A:C, given an ID in B2.

### Interview/Advanced
2. Why can VLOOKUP break silently when a new column is inserted into the source table?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=VLOOKUP(B2,A:C,2,FALSE)\`
2. Because col_index_num is a hardcoded number counting columns from the table's start — inserting a new column shifts every column after it by one position, but the hardcoded index number doesn't automatically adjust, so it now points at a different (wrong) column.

</details>

## 🎤 Interview preparation

**Q: What is VLOOKUP's biggest limitation compared to INDEX-MATCH or XLOOKUP?**
Short answer: It can only search the first column of the given range and return a value to the right of it — it can't look left, and it breaks if a column is inserted into the source table, since its column-index argument is a hardcoded number.

## Best practices

- Always set the exact-match argument to FALSE explicitly.
- Consider INDEX-MATCH or XLOOKUP for new work, since both are more resilient to structural changes in the source table.

---

### ⚡ Quick Revision

**VLOOKUP(value, table, col_index, FALSE)** → searches first column, returns a value to the right
**Watch for:** missing exact-match argument, column-index breaking after an inserted column
`,
});

createSkill('hlookup-function', {
  title: 'HLOOKUP Function',
  category: 'Spreadsheets',
  what_is_it: 'Searching across the first row of a table for a matching value, then returning a value from a specified row below it — the row-based counterpart to VLOOKUP.',
  why_it_matters: 'Most real data is organized in columns, so HLOOKUP is used far less often than VLOOKUP — but it\'s the right tool whenever a dataset is instead laid out with categories across a row.',
  prerequisites: ['vlookup-function'],
  objectives: ['Write an HLOOKUP with an exact match', 'Explain when HLOOKUP is the right choice instead of VLOOKUP'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-hlookup-1', title: 'Pull a value from a row-based layout', description: 'Given a table with months across the top row and a metric in the row below, use HLOOKUP to pull the value for a specific month.' }],
  verify: ['HLOOKUP returns the correct matching value', 'Exact match (FALSE) is used deliberately'],
  note: `
## 🎯 What is it?

**HLOOKUP** searches **across** the first row of a table for a matching value, then returns a value from a specified row **below** it — the row-based counterpart to [VLOOKUP](/skills/vlookup-function)'s column-based search.

## 💡 Why is it important?

Most real data is organized in columns (one row per record), so HLOOKUP is used far less often than VLOOKUP — but it's the right tool whenever a dataset is instead laid out with categories spread across a row, such as months running left to right along the top.

## Syntax

\`\`\`
=HLOOKUP(lookup_value, table_range, row_index_num, [exact_match])
\`\`\`

Same logic as VLOOKUP, just rotated 90 degrees: it searches the **first row** instead of the first column, and \`row_index_num\` counts rows down instead of columns across.

## 📊 Example

| | A | B | C |
|---|---|---|---|
| 1 | Month | Jan | Feb |
| 2 | Revenue | 4200 | 5100 |

**Formula:** \`=HLOOKUP("Feb",A1:C2,2,FALSE)\`
**Result:** \`5100\`

**Explanation:** HLOOKUP finds "Feb" in the first row, then returns the value 1 row down (row 2, the Revenue row).

## Multiple examples

**Beginner:** \`=HLOOKUP("Q1",A1:E2,2,FALSE)\` — pull a value from a row-oriented quarterly summary.
**Real-world:** A dashboard sheet where months run across the top as column headers (a common layout for a trend view) — HLOOKUP pulls a specific month's value into a KPI cell elsewhere on the sheet.

## ⚠️ Common mistakes

- **Reaching for HLOOKUP out of habit when the data is actually column-oriented** (the far more common layout) — VLOOKUP is almost always the right choice unless the specific table is genuinely row-oriented.
- **Forgetting the exact-match argument**, same risk as VLOOKUP.

## Real-world Data Analyst use cases

- **Financial reporting:** pulling a specific month's or quarter's value from a summary table laid out with time periods across the top row.

## Related concepts

\`\`\`
VLOOKUP → HLOOKUP ← you are here → INDEX → MATCH
\`\`\`

## Practice questions

### Easy
1. When would HLOOKUP be the right choice instead of VLOOKUP?

### Interview/Advanced
2. A table has product categories across the top row and monthly figures below. Which lookup function fits, and why?

<details><summary><strong>Answer / Solution</strong></summary>

1. When the data being searched is organized with the lookup values running across a row (horizontally) rather than down a column.
2. HLOOKUP — since the categories to search for run across the top row, and the values to return sit in the rows beneath them, matching HLOOKUP's row-based search pattern exactly.

</details>

## 🎤 Interview preparation

**Q: Why is HLOOKUP used less often than VLOOKUP in practice?**
Short answer: Most real datasets are organized with one record per row (column-oriented), which fits VLOOKUP's search pattern — HLOOKUP is only needed for the less common case of data organized horizontally, across a row.

## Best practices

- Check the table's actual orientation before choosing HLOOKUP vs. VLOOKUP — don't default to one out of habit.

---

### ⚡ Quick Revision

**HLOOKUP(value, table, row_index, FALSE)** → searches first row, returns a value below it
**Use when:** the lookup data runs horizontally across a row, not down a column
`,
});

createSkill('index-function', {
  title: 'INDEX Function',
  category: 'Spreadsheets',
  what_is_it: 'Returning the value at a specific row and column position within a range — the building block that, combined with MATCH, forms one of the most flexible lookup patterns in spreadsheets.',
  why_it_matters: 'INDEX alone is simple, but it\'s the foundation for INDEX+MATCH, one of the most powerful and resilient lookup techniques, fixing VLOOKUP\'s biggest limitations.',
  prerequisites: ['hlookup-function'],
  objectives: ['Use INDEX to return a value at a specific position in a range', 'Explain why INDEX alone isn\'t a full lookup, just a positional retrieval'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-index-1', title: 'Retrieve a value by position', description: 'Given a range of product names, use INDEX to return the 3rd product in the list.' }],
  verify: ['INDEX correctly returns the value at the specified position', 'Can explain the difference between INDEX and a full lookup'],
  note: `
## 🎯 What is it?

**INDEX** returns the value at a specific **row and column position** within a range — e.g., "give me the value in the 3rd row of this range." On its own, it's simple; combined with [MATCH](/skills/match-function), it becomes one of the most flexible lookup patterns in spreadsheets.

## 💡 Why is it important?

INDEX alone is just positional retrieval, not a full lookup — but it's the essential building block for [INDEX + MATCH](/skills/index-match-function), which fixes VLOOKUP's two biggest limitations: it can look in any direction (not just right), and it doesn't break when a column is inserted into the source range.

## Syntax

\`\`\`
=INDEX(range, row_num, [column_num])
\`\`\`

- **range** — the range to pull a value from.
- **row_num** — which row within the range (counting from 1).
- **column_num** — which column within the range (optional if the range is a single column).

## 📊 Example

| | A |
|---|---|
| 1 | Widget |
| 2 | Gadget |
| 3 | Gizmo |

**Formula:** \`=INDEX(A1:A3,2)\`
**Result:** \`"Gadget"\` — the 2nd value in the range.

## Multiple examples

**Beginner:** \`=INDEX(A1:A10,5)\` — the 5th value in a single-column range.
**Intermediate:** \`=INDEX(A1:C10,3,2)\` — the value at row 3, column 2 of a multi-column range.
**Real-world:** \`=INDEX(product_names, MATCH(target_id, product_ids, 0))\` — INDEX alone doesn't know *which* row to look at; combining it with MATCH (which finds the position of a value) turns this into a full, flexible lookup — this exact combination is covered in depth in [INDEX + MATCH](/skills/index-match-function).

## ⚠️ Common mistakes

- **Expecting INDEX alone to search for a value.** INDEX only retrieves by *position* — it has no way to find *which* position matches a value on its own; that's MATCH's job.
- **Off-by-one confusion**, since INDEX counts positions starting at 1, not 0.

## Real-world Data Analyst use cases

- **The foundation of INDEX+MATCH**, a lookup pattern used constantly across real spreadsheet work wherever VLOOKUP's limitations become a problem.

## Related concepts

\`\`\`
HLOOKUP → INDEX ← you are here → MATCH → INDEX + MATCH
\`\`\`

## Practice questions

### Easy
1. Write a formula that returns the 4th value in range B1:B20.

### Interview/Advanced
2. Why is INDEX alone not considered a "lookup" function in the same sense as VLOOKUP?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=INDEX(B1:B20,4)\`
2. VLOOKUP searches for a matching value and returns a related result; INDEX only retrieves a value from a *known* position — it has no search capability of its own, which is why it's almost always paired with MATCH (which does the searching) to form a complete lookup.

</details>

## 🎤 Interview preparation

**Q: What does INDEX do on its own, and what's it missing to be a full lookup?**
Short answer: INDEX returns a value at a specified row/column position within a range — it's missing the ability to search for *which* position matches a given value, which is exactly what MATCH provides when the two are combined.

## Best practices

- Think of INDEX as "retrieve by position" and MATCH as "find the position" — understanding this split makes INDEX+MATCH intuitive rather than a memorized formula.

---

### ⚡ Quick Revision

**INDEX(range, row_num, [col_num])** → returns the value at a specific position
**Alone:** just positional retrieval, not a search — pairs with MATCH for a full lookup
`,
});

createSkill('match-function', {
  title: 'MATCH Function',
  category: 'Spreadsheets',
  what_is_it: 'Finding the position of a value within a range, returning its row/column number rather than the value itself — the search half of the INDEX+MATCH lookup pattern.',
  why_it_matters: 'MATCH is what turns INDEX from a simple positional retrieval into a genuine, flexible lookup — together they solve nearly every lookup VLOOKUP can\'t handle.',
  prerequisites: ['index-function'],
  objectives: ['Use MATCH to find the position of a value in a range', 'Explain the three match-type options'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-match-1', title: 'Find a value\'s position', description: 'Given a list of product IDs, use MATCH to find the position of a specific ID within the list.' }],
  verify: ['MATCH correctly returns the position of the target value', 'Exact match (0) is used deliberately'],
  note: `
## 🎯 What is it?

**MATCH** finds the **position** of a value within a range — returning a row or column number (like "3rd item"), not the value itself. It's the search half of the [INDEX + MATCH](/skills/index-match-function) lookup pattern.

## 💡 Why is it important?

MATCH is what turns [INDEX](/skills/index-function) from a simple positional retrieval into a genuine, flexible lookup — together they solve nearly every lookup scenario VLOOKUP can't handle, including looking left and surviving inserted columns.

## Syntax

\`\`\`
=MATCH(lookup_value, lookup_range, [match_type])
\`\`\`

- **match_type**: \`0\` for exact match (the standard, almost-always-correct choice), \`1\` for the largest value less than or equal to the target (requires sorted ascending data), \`-1\` for the smallest value greater than or equal to it (requires sorted descending data).

## 📊 Example

| | A |
|---|---|
| 1 | Widget |
| 2 | Gadget |
| 3 | Gizmo |

**Formula:** \`=MATCH("Gizmo",A1:A3,0)\`
**Result:** \`3\` — Gizmo is the 3rd item in the range.

**Note:** MATCH returns the *position* (3), not the value ("Gizmo") — this is why it's almost always paired with INDEX, which uses that position to actually retrieve a value.

## Multiple examples

**Beginner:** \`=MATCH(102,A1:A10,0)\` — find the position of customer ID 102 in a list.
**Real-world:** \`=INDEX(customer_names, MATCH(102, customer_ids, 0))\` — MATCH finds *where* ID 102 sits, and INDEX retrieves the corresponding name at that position — the complete [INDEX + MATCH](/skills/index-match-function) pattern.

## ⚠️ Common mistakes

- **Forgetting the match_type argument, or using 1 by mistake.** Match type 1 requires the data to be sorted ascending and finds an *approximate* match — using it on unsorted data (or expecting an exact match) produces a silently wrong result.
- **Confusing MATCH's returned position with the actual value.** MATCH never returns the matched value itself — always pair it with INDEX (or another function) to retrieve the actual value at that position.

## Real-world Data Analyst use cases

- **The search half of INDEX+MATCH**, used throughout real spreadsheet work as a VLOOKUP alternative.
- **Finding a column's position dynamically** in a formula, so it still works correctly even if columns are reordered.

## Related concepts

\`\`\`
INDEX → MATCH ← you are here → INDEX + MATCH → XLOOKUP → XMATCH
\`\`\`

## Practice questions

### Easy
1. Write a formula that finds the position of "Gadget" in range A1:A10.

### Interview/Advanced
2. Why does MATCH alone rarely appear by itself in a finished spreadsheet?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=MATCH("Gadget",A1:A10,0)\`
2. Because it only returns a *position* number, not a usable value — on its own it rarely answers a real business question directly, so it's almost always combined with INDEX (to retrieve the actual value at that position) rather than used standalone.

</details>

## 🎤 Interview preparation

**Q: What does MATCH return, and why is that different from what VLOOKUP returns?**
Short answer: MATCH returns a position number (like "item 3"), while VLOOKUP returns an actual data value — this is why MATCH is almost always paired with INDEX, which uses that position to retrieve the real value.

## Best practices

- Default to match_type 0 (exact match) unless you specifically need an approximate match on sorted data.

---

### ⚡ Quick Revision

**MATCH(value, range, [0])** → returns a position number, not the value itself
**Match type 0** → exact match (the standard choice)
`,
});

createSkill('index-match-function', {
  title: 'INDEX + MATCH',
  category: 'Spreadsheets',
  what_is_it: 'Combining INDEX and MATCH into a single, flexible two-way lookup that isn\'t limited to VLOOKUP\'s left-to-right, first-column-only search.',
  why_it_matters: 'This is the classic, battle-tested alternative to VLOOKUP — it can look in any direction and doesn\'t break when a column is inserted into the source table.',
  prerequisites: ['match-function'],
  objectives: ['Build a two-way lookup with INDEX-MATCH', 'Explain why INDEX-MATCH is more resilient than VLOOKUP'],
  estimated_minutes: 40,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-index-match-1', title: 'Look up a value to the left of the key', description: 'Given a table where the value needed is to the LEFT of the lookup key, build an INDEX-MATCH formula to retrieve it (a case VLOOKUP alone cannot handle).' }],
  verify: ['INDEX-MATCH correctly retrieves the value regardless of its position relative to the key', 'Formula survives a column being inserted into the source table'],
  note: `
## 🎯 What is it?

**INDEX + MATCH** combines [MATCH](/skills/match-function) (which finds *where* a value is) with [INDEX](/skills/index-function) (which retrieves a value at that position) into a single, flexible lookup — one that isn't limited to VLOOKUP's left-to-right, first-column-only search.

## 💡 Why is it important?

This is the classic, battle-tested alternative to VLOOKUP, used throughout real-world spreadsheets for years before [XLOOKUP](/skills/xlookup-function) existed. It can look in **any** direction (including to the left of the key) and — because it references two separate ranges rather than one hardcoded column-index number — doesn't silently break when a column is inserted into the source table.

## Syntax

\`\`\`
=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))
\`\`\`

**How to read it:** MATCH finds the *position* of \`lookup_value\` within \`lookup_range\`; INDEX then returns the value at that same position, but from a completely different range (\`return_range\`) — which can be located anywhere relative to \`lookup_range\`, including to its left.

## 📊 Example

\`customers\` table:

| region | customer_id | name |
|---|---|---|
| West | 101 | Ana Silva |
| East | 102 | Wei Chen |

**Task:** Given customer_id 102, find the **region** — which is to the **left** of customer_id. A plain VLOOKUP cannot do this at all.

**Formula:** \`=INDEX(A:A, MATCH(102, B:B, 0))\`

**Explanation:** MATCH finds that 102 is in row 2 of column B; INDEX then returns the value in row 2 of column A ("East") — successfully looking left, which VLOOKUP structurally cannot do.

## Multiple examples

**Beginner:** \`=INDEX(B:B,MATCH(A2,C:C,0))\` — a straightforward one-way lookup, functionally equivalent to a VLOOKUP.
**Intermediate:** Looking left of the key column, as in the example above — VLOOKUP's core structural limitation.
**Real-world:** A two-way lookup — \`=INDEX(data_range, MATCH(row_value,row_labels,0), MATCH(column_value,column_headers,0))\` — retrieving a value from a matrix (like a table of revenue by region and month) by matching both a row label and a column header simultaneously.

## ⚠️ Common mistakes

- **Forgetting the \`0\` (exact match) argument in MATCH**, causing an approximate-match search on data that isn't sorted for it.
- **Mismatching the size of \`return_range\` and \`lookup_range\`** — MATCH finds a position within \`lookup_range\`, and INDEX applies that same position number to \`return_range\`; if the two ranges don't correspond row-for-row, the result will be wrong.
- **Reaching for a more complex formula than needed** when a plain VLOOKUP would have worked fine — INDEX-MATCH is more powerful, but adds complexity that isn't always necessary for a simple, standard left-to-right lookup.

## Real-world Data Analyst use cases

- **Customer analysis:** looking up a customer's region when the region column sits to the left of the ID column in the source table.
- **Financial modeling:** a two-way lookup retrieving a specific cell from a matrix, like revenue by product and month.

## Related concepts

\`\`\`
INDEX → MATCH → INDEX + MATCH ← you are here → XLOOKUP → XMATCH
\`\`\`
This is the direct spreadsheet-level equivalent of an [SQL — JOIN](/skills/sql-joins), extended to handle any lookup direction.

## Practice questions

### Easy
1. What two functions combine to form INDEX-MATCH, and what does each one contribute?

### Medium
2. Write an INDEX-MATCH formula to look up a value in column A, using a key in column C (to the right of A).

### Interview/Advanced
3. Why doesn't INDEX-MATCH break the way VLOOKUP does when a new column is inserted into the source table?

<details><summary><strong>Answer / Solution</strong></summary>

1. MATCH finds the *position* of the lookup value within a range; INDEX retrieves the value at that position from a separate range — together they form a complete, flexible lookup.
2. \`=INDEX(A:A, MATCH(lookup_value, C:C, 0))\`
3. VLOOKUP relies on a hardcoded column-index *number*, which silently points at the wrong column if a new column shifts everything after it. INDEX-MATCH instead references the *return range* directly by its own column letter — inserting a column shifts that reference automatically along with it (Excel/Sheets auto-adjusts range references), so the formula keeps pointing at the correct column.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: How does INDEX-MATCH work, at a high level?**
Short answer: MATCH searches a range for a value and returns its position; INDEX then uses that position to retrieve the corresponding value from a separate range — together forming a flexible, two-part lookup.

### Conceptual questions
**Q: Why is INDEX-MATCH considered more robust than VLOOKUP?**
Short answer: It can search and return values in any direction (not just left-to-right), and it references ranges directly rather than a hardcoded column-index number, so it doesn't silently break when the source table's structure changes.

### Scenario-based questions
**Q: A stakeholder needs to look up a value that sits to the left of the lookup key. What approach do you use?**
Short answer: INDEX-MATCH (or XLOOKUP) — VLOOKUP structurally cannot look to the left of its search column, so a different function is required.

### Practical questions
**Q: How would you build a two-way lookup that finds a value based on both a row and a column match?**
Short answer: Use INDEX with two MATCH calls — one finding the row position by matching a row label, and another finding the column position by matching a column header — passed as INDEX's row_num and column_num arguments respectively.

## Interview traps / tricky points

- INDEX-MATCH and XLOOKUP solve the same core problems — being asked "why not just use XLOOKUP" is a fair follow-up, and the honest answer is that INDEX-MATCH remains essential for older spreadsheet versions or tools that lack XLOOKUP support.

## Best practices

- Prefer INDEX-MATCH (or XLOOKUP) over VLOOKUP for any lookup that might need to survive structural changes to the source table.
- Always use exact match (0) in MATCH unless specifically working with sorted data and an approximate match is intended.

---

### ⚡ Quick Revision

**INDEX(return_range, MATCH(value, lookup_range, 0))** → flexible two-part lookup
**Advantage over VLOOKUP:** works in any direction, survives inserted columns
`,
});

createSkill('xlookup-function', {
  title: 'XLOOKUP Function',
  category: 'Spreadsheets',
  what_is_it: 'The modern lookup function that searches in any direction, has a built-in "not found" default, and doesn\'t break when a column is inserted — designed to directly replace VLOOKUP.',
  why_it_matters: 'It fixes VLOOKUP\'s two biggest limitations in a single, simpler function, without needing to combine two functions like INDEX-MATCH does.',
  prerequisites: ['index-match-function'],
  objectives: ['Replace a VLOOKUP with an XLOOKUP', 'Use XLOOKUP\'s built-in not-found default'],
  estimated_minutes: 35,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-xlookup-1', title: 'Rebuild a VLOOKUP as an XLOOKUP', description: 'Take an existing VLOOKUP formula and rewrite it as an XLOOKUP, including a default value for a missing match.' }],
  verify: ['XLOOKUP correctly returns the matching value', 'A missing match returns the specified default instead of a raw error'],
  note: `
## 🎯 What is it?

**XLOOKUP** is the modern lookup function — it can search in **any direction** (not just left-to-right like VLOOKUP), has a **built-in "not found" default**, and doesn't break when a column is inserted into the source table. It's designed as a direct, simpler replacement for VLOOKUP.

## 💡 Why is it important?

It fixes VLOOKUP's two biggest limitations — direction and structural fragility — in a single, simpler function, without needing to combine two functions the way [INDEX + MATCH](/skills/index-match-function) does. Where available, it's the recommended default choice for new lookup formulas.

## Syntax

\`\`\`
=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])
\`\`\`

- **lookup_array** and **return_array** are separate ranges (like INDEX-MATCH), not one combined table — this is what lets XLOOKUP search and return in any direction.
- **if_not_found** — an optional 4th argument providing a clean default value instead of a raw \`#N/A\` error.

## 📊 Example

\`customers\` table:

| customer_id | name | region |
|---|---|---|
| 101 | Ana Silva | West |
| 102 | Wei Chen | East |

**Formula:** \`=XLOOKUP(102, A:A, C:C, "Unknown")\`
**Result:** \`"East"\`

If customer_id 999 (not present) were searched instead, the result would be \`"Unknown"\` — the specified default — instead of a raw \`#N/A\` error.

## Multiple examples

**Beginner:** \`=XLOOKUP(A2,customers!A:A,customers!B:B)\` — a direct VLOOKUP replacement.
**Intermediate:** \`=XLOOKUP(A2,customers!C:C,customers!A:A)\` — looking left of the key column, something VLOOKUP structurally cannot do, in one simple call.
**Real-world:** Replacing a workbook's VLOOKUP formulas with XLOOKUP as a cleanup pass, immediately eliminating both the direction limitation and the risk of a formula breaking after a column is inserted, while also removing the need for a separate IFERROR wrapper thanks to the built-in default argument.

## ⚠️ Common mistakes

- **Not using the built-in \`if_not_found\` argument**, and instead still wrapping XLOOKUP in a separate IFERROR — redundant, since XLOOKUP already handles this natively.
- **Assuming XLOOKUP is available in every spreadsheet tool/version.** It's a newer function; older versions of Excel or other spreadsheet tools may not support it, in which case INDEX-MATCH remains the fallback.

## Real-world Data Analyst use cases

- **Any new lookup formula**, where XLOOKUP should generally be the first choice over VLOOKUP.
- **Cleaning up a legacy workbook** by replacing fragile VLOOKUPs with more resilient XLOOKUPs.

## Related concepts

\`\`\`
INDEX + MATCH → XLOOKUP ← you are here → XMATCH
\`\`\`

## Practice questions

### Easy
1. Rewrite \`=VLOOKUP(A2,customers!A:C,2,FALSE)\` as an XLOOKUP.

### Interview/Advanced
2. Why might a team still use INDEX-MATCH instead of XLOOKUP in some workbooks?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=XLOOKUP(A2,customers!A:A,customers!B:B)\`
2. XLOOKUP is a newer function not available in every spreadsheet version or tool — a workbook that needs to remain compatible with older software, or a shared template used across an organization with mixed software versions, may need to stick with the more universally-supported INDEX-MATCH.

</details>

## 🎤 Interview preparation

**Q: What are XLOOKUP's two main advantages over VLOOKUP?**
Short answer: It can search in any direction (not just left-to-right), and it has a built-in default value for a missing match, removing the need for a separate IFERROR wrapper — and unlike VLOOKUP, it isn't vulnerable to breaking when a column is inserted into the source table.

## Best practices

- Default to XLOOKUP for new lookup work where it's available; fall back to INDEX-MATCH for compatibility with older tools/versions.
- Use the built-in \`if_not_found\` argument instead of a separate IFERROR wrapper.

---

### ⚡ Quick Revision

**XLOOKUP(value, lookup_array, return_array, [default])** → any direction, built-in not-found default
**Modern default choice** where available; INDEX-MATCH remains the fallback for compatibility
`,
});

createSkill('xmatch-function', {
  title: 'XMATCH Function',
  category: 'Spreadsheets',
  what_is_it: 'The modern version of MATCH — finding the position of a value within a range, with more flexible search options (including searching from the last item first).',
  why_it_matters: 'It closes out the modern lookup family alongside XLOOKUP, and is occasionally the more direct choice when you specifically need a position, not a full lookup.',
  prerequisites: ['xlookup-function'],
  objectives: ['Use XMATCH to find the position of a value in a range', 'Explain how XMATCH differs from MATCH'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-xmatch-1', title: 'Find a position with XMATCH', description: 'Given a list of product IDs, use XMATCH to find the position of a specific ID, and compare the formula to an equivalent MATCH formula.' }],
  verify: ['XMATCH correctly returns the position of the target value', 'Can explain at least one XMATCH feature MATCH lacks'],
  note: `
## 🎯 What is it?

**XMATCH** is the modern version of [MATCH](/skills/match-function) — it finds the **position** of a value within a range, with more flexible search options than the original MATCH function, including exact-match-by-default behavior and the ability to search from the last item backward.

## 💡 Why is it important?

It closes out the modern lookup function family alongside [XLOOKUP](/skills/xlookup-function). While XLOOKUP alone covers most day-to-day lookup needs, XMATCH is occasionally the more direct choice when you specifically need just a *position*, not a full value retrieval — e.g., as an input to another formula.

## Syntax

\`\`\`
=XMATCH(lookup_value, lookup_array, [match_mode], [search_mode])
\`\`\`

- Defaults to an **exact match** automatically (unlike MATCH, which defaults to an approximate match if the 3rd argument is omitted) — a small but meaningful safety improvement.
- **search_mode** can search from the last item first, useful for finding the *most recent* match in a chronologically-ordered list.

## 📊 Example

| | A |
|---|---|
| 1 | Widget |
| 2 | Gadget |
| 3 | Gizmo |

**Formula:** \`=XMATCH("Gizmo",A1:A3)\`
**Result:** \`3\` — same result as \`=MATCH("Gizmo",A1:A3,0)\`, but XMATCH doesn't require explicitly specifying exact match, since that's its default behavior.

## Multiple examples

**Beginner:** \`=XMATCH(102,A1:A10)\` — find the position of a value, defaulting to exact match automatically.
**Real-world:** \`=XMATCH(target_date, date_range, 0, -1)\` — searching from the last row backward to find the most recent occurrence of a repeated value in a chronological log, something the original MATCH cannot do directly.

## ⚠️ Common mistakes

- **Assuming XMATCH and MATCH are identical**, missing XMATCH's safer exact-match default and its reverse-search capability.
- **Using XMATCH when a full lookup (XLOOKUP) was actually needed.** XMATCH only returns a position, not a value — same distinction as MATCH vs. INDEX-MATCH.

## Real-world Data Analyst use cases

- **Finding the most recent occurrence** of a value in a chronologically-ordered dataset, using XMATCH's reverse search mode.
- **As a component inside a larger formula** wherever a position (not a full value) is specifically needed.

## Related concepts

\`\`\`
XLOOKUP → XMATCH ← you are here
\`\`\`
This closes the Lookup & Reference group.

## Practice questions

### Easy
1. What does XMATCH default to, that MATCH does not, when the match-type argument is left off?

### Interview/Advanced
2. How would you find the position of the *most recent* occurrence of a repeated value in a date-ordered list?

<details><summary><strong>Answer / Solution</strong></summary>

1. XMATCH defaults to an exact match automatically; MATCH defaults to an approximate match (requiring sorted data) if its match-type argument is omitted — a common source of MATCH errors that XMATCH avoids by design.
2. \`=XMATCH(value, range, 0, -1)\` — the \`-1\` search_mode searches from the last row backward, returning the position of the most recent (last) match instead of the first one.

</details>

## 🎤 Interview preparation

**Q: What's one safety improvement XMATCH has over the original MATCH function?**
Short answer: XMATCH defaults to an exact match automatically, while MATCH defaults to an approximate match (which requires sorted data) if the match-type argument is left off — a common source of silent errors in the original MATCH.

## Best practices

- Prefer XMATCH over MATCH for new work where it's available, for its safer default behavior.

---

### ⚡ Quick Revision

**XMATCH(value, range, ...)** → modern MATCH; defaults to exact match automatically
**Bonus feature:** can search from the last item backward to find the most recent match
`,
});
