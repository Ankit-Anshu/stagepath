// data_analyst_roadmap_curriculum.md — Section 02.8 "Data Cleaning in
// Excel". Remove Duplicates, Find & Replace, Text to Columns, and Data
// Validation already exist. 8 new topics fill the rest of the doc's list:
// Missing Values, Duplicate Data, Flash Fill, Error Handling,
// Standardizing Values, Cleaning Text, Cleaning Dates, Cleaning Numbers.
import { createSkill } from './_create.mjs';

createSkill('missing-values-spreadsheets', {
  title: 'Missing Values in Spreadsheets',
  category: 'Spreadsheets',
  what_is_it: 'Identifying and deciding how to handle empty cells in a dataset — leave them, fill them, or flag them — before they distort a calculation.',
  why_it_matters: 'A missing value silently skipped by one formula (like AVERAGE) but silently treated as zero by another (like a plain SUM of a range) can produce two different, both-plausible-looking numbers from the same data.',
  prerequisites: ['lookup-errors'],
  objectives: [
    'Identify missing values in a range using COUNTBLANK or a filter',
    'Explain how AVERAGE and SUM treat blank cells differently from zero',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-missing-values-spreadsheets-1', title: 'Audit a column for gaps', description: 'Given a column of scores with some blank cells, use COUNTBLANK and a filter to find and review every missing entry before calculating an average.' },
  ],
  verify: ['Can find missing values in a column', 'Can explain how AVERAGE handles blanks differently from zeros'],
  note: `
## 🎯 What is it?

**Missing values** are empty cells in a dataset where a value should exist. Before calculating anything from a column, an analyst needs to know how many values are missing, where, and — critically — whether the tool being used treats a blank the same way it treats a zero.

## 💡 Why is it important?

- AVERAGE silently *excludes* blank cells from its calculation, but treats a cell containing \`0\` as a real zero — these can produce very different averages from what looks like "the same" data at a glance.
- Deciding how to handle missing data (leave it blank, fill it, flag and exclude it) should be a deliberate choice, not an accident of which formula happened to be used.

## Core concept

| Function | Blank cell | Cell containing 0 |
|---|---|---|
| \`AVERAGE\` | Excluded from the calculation | Included, counts as a real 0 |
| \`SUM\` | Contributes 0 (same effect either way) | Contributes 0 |
| \`COUNT\` | Not counted | Counted |
| \`COUNTA\` | Not counted | Counted |

## 📊 Example

A column of 10 test scores has 2 blank cells (students who didn't take the test) and 1 score of \`0\` (a student who took it and scored zero). \`AVERAGE\` divides by 8 (excluding the 2 blanks, but including the real 0) — correctly reflecting "average score among those who took the test." Manually treating the blanks as zeros and dividing by 10 would understate the average and misrepresent what actually happened.

## ⚠️ Common mistakes

- **Assuming blank and zero always behave identically** — they don't, especially in AVERAGE, COUNT, and COUNTA.
- **Filling every blank with 0 without checking whether "missing" and "genuinely zero" mean different things** in context (a missing test score is not the same as a score of zero).

## Related concepts

\`\`\`
Date Differences
  ↓
Missing Values ← you are here
  ↓
Duplicate Data
\`\`\`

## 🎤 Interview preparation

**Q: A column has some blank cells and some cells with 0. Does AVERAGE treat them the same?**
Short answer: No — AVERAGE excludes blank cells entirely from the calculation, but includes cells containing 0 as real values. This distinction matters whenever "missing" and "genuinely zero" mean different things in the data.

---

### ⚡ Quick Revision

**Missing values** → empty cells; check with COUNTBLANK before calculating
AVERAGE excludes blanks but includes real zeros — the two are not interchangeable.
`,
});

createSkill('duplicate-data', {
  title: 'Duplicate Data',
  category: 'Spreadsheets',
  what_is_it: 'Rows that repeat the same information — either exact copies, or "business duplicates" that represent the same real-world thing despite small differences.',
  why_it_matters: 'Undetected duplicates silently inflate totals and counts — a customer counted twice looks like two customers.',
  prerequisites: ['missing-values-spreadsheets'],
  objectives: [
    'Distinguish an exact duplicate from a "business duplicate"',
    'Explain why undetected duplicates distort totals and counts',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-duplicate-data-1', title: 'Spot a business duplicate', description: 'Given two rows for "Amir Khan" and "amir khan " (with a trailing space and different casing), explain why they are duplicates despite not being an exact text match.' },
  ],
  verify: ['Can distinguish an exact duplicate from a business duplicate', 'Can explain the impact of undetected duplicates on a total'],
  note: `
## 🎯 What is it?

**Duplicate data** means two or more rows represent the same real-world thing. An **exact duplicate** matches character-for-character; a **business duplicate** represents the same thing despite small differences (extra whitespace, different capitalization, a typo) — like "Amir Khan" and "amir khan " being the same customer.

## 💡 Why is it important?

- Undetected duplicates silently inflate totals and counts — a customer accidentally entered twice looks like two customers, and their combined spend looks like two customers' worth of revenue.
- Business duplicates are much harder to catch than exact ones — a simple "remove exact duplicates" pass won't catch them.

## Core concept

| Type | Example | Caught by exact dedup? |
|---|---|---|
| Exact duplicate | Two identical rows | Yes |
| Business duplicate | "Amir Khan" vs. "amir khan " | No — needs standardizing first |

## 📊 Example

A customer list has "Global Tech Inc." and "Global Tech, Inc" as two separate rows — an exact-match duplicate check won't flag these as duplicates, but they very likely represent the same company, entered slightly differently by two different people at different times.

## ⚠️ Common mistakes

- **Only checking for exact duplicates** and assuming the data is now clean — business duplicates require standardizing text first (see Standardizing Values) before they can be reliably detected.
- **Deduplicating too aggressively**, accidentally merging two genuinely different records that happen to look similar (two different people with the same name).

## Related concepts

\`\`\`
Missing Values
  ↓
Duplicate Data ← you are here
  ↓
Remove Duplicates
\`\`\`

## 🎤 Interview preparation

**Q: Why might "Remove Duplicates" fail to catch every duplicate in a customer list?**
Short answer: Remove Duplicates only catches exact matches — business duplicates (the same customer entered with different capitalization, whitespace, or a typo) need their text standardized first before they'll be recognized as duplicates.

---

### ⚡ Quick Revision

**Duplicate data** → exact duplicates (character-for-character) vs. business duplicates (same real-world thing, different text)
Standardize text before deduplicating to catch business duplicates.
`,
});

createSkill('flash-fill', {
  title: 'Flash Fill',
  category: 'Spreadsheets',
  what_is_it: 'A spreadsheet feature that detects a pattern from one or two manually-typed examples and automatically fills the rest of a column to match.',
  why_it_matters: 'It can do in seconds what would otherwise require a formula (or several) — extracting a first name, combining two columns, or reformatting a phone number — just by example.',
  prerequisites: ['duplicate-data'],
  objectives: [
    'Use Flash Fill to extract or reformat a column based on an example',
    'Recognize when Flash Fill is a good fit versus when a formula is more reliable',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-flash-fill-1', title: 'Extract a first name', description: 'Given a "Full Name" column, type the first name for the first row manually, then use Flash Fill to extract it for every other row.' },
  ],
  verify: ['Can trigger Flash Fill from a typed example', 'Can explain a situation where a formula would be more reliable than Flash Fill'],
  note: `
## 🎯 What is it?

**Flash Fill** detects a pattern from one or two manually-typed examples in a column, then automatically fills in the rest of the column to match — without writing any formula. Typing "Amir" next to a "Full Name" cell containing "Amir Khan" and pressing Enter on the next row often triggers Flash Fill to extract first names for the whole column.

## 💡 Why is it important?

- It can do in seconds what would otherwise take a formula — extracting a first name, combining first and last names, reformatting a phone number — just by demonstrating the pattern once or twice.
- It's genuinely fast for one-off cleanup tasks, though it produces static values (not a live formula), which matters if the source data might change later.

## Core concept

| Task | Example input | Flash Fill result |
|---|---|---|
| Extract first name | "Amir Khan" → type "Amir" | Extracts first names for every row |
| Combine columns | "Amir" + "Khan" → type "Amir Khan" | Combines first+last for every row |
| Reformat | "5551234567" → type "(555) 123-4567" | Reformats every phone number |

## 📊 Example

A "Full Name" column has "Priya Sharma," "Amir Khan," etc. Typing "Priya" in the adjacent cell and pressing Enter, then starting to type "Amir" in the next row often triggers Flash Fill's suggestion — accepting it (Enter) fills the first name for every remaining row automatically.

## ⚠️ Common mistakes

- **Relying on Flash Fill for data that will be updated later** — its result is a static, one-time value, not a live formula; if the source column changes, Flash Fill's output does not automatically update.
- **Not double-checking Flash Fill's guess on inconsistent data** — it works by pattern-matching, and can guess wrong on rows that don't follow the same pattern as the examples given.

## Related concepts

\`\`\`
Duplicate Data
  ↓
Flash Fill ← you are here
  ↓
Data Validation
\`\`\`

## 🎤 Interview preparation

**Q: When would you use Flash Fill instead of a formula like LEFT or MID?**
Short answer: For a quick, one-off cleanup task on data that won't need to update automatically — Flash Fill is faster to set up than a formula, but produces static values, so a formula is the better choice if the source data will keep changing.

---

### ⚡ Quick Revision

**Flash Fill** → learns a pattern from a typed example and auto-fills the rest of a column
Fast for one-off cleanup; produces static values, not a live formula — double-check its guesses.
`,
});

createSkill('error-handling-spreadsheets', {
  title: 'Error Handling in Spreadsheets',
  category: 'Spreadsheets',
  what_is_it: 'Anticipating and gracefully managing formula errors — like #N/A, #DIV/0!, and #VALUE! — instead of letting them silently break downstream calculations.',
  why_it_matters: 'An unhandled error in one cell can cascade through every formula that depends on it — deliberate error handling keeps a report usable and makes real problems easier to spot.',
  prerequisites: ['flash-fill'],
  objectives: [
    'Recognize the common spreadsheet error types and what causes each',
    'Use IFERROR to provide a clean fallback for an anticipated error',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-error-handling-spreadsheets-1', title: 'Handle a division error', description: 'Write a formula that calculates a conversion rate (conversions ÷ visits) and gracefully handles the case where visits is 0.' },
  ],
  verify: ['Can name three common spreadsheet error types', 'Can wrap a risky formula in IFERROR appropriately'],
  note: `
## 🎯 What is it?

**Error handling** means anticipating situations where a formula could fail — a missing lookup value, a division by zero, mismatched data types — and deliberately managing what happens, usually with IFERROR, instead of letting a raw error value cascade through a report.

## 💡 Why is it important?

- An unhandled error in one cell breaks every formula downstream that references it — a single \`#DIV/0!\` can turn an entire summary row into errors.
- Deliberate error handling (a clean fallback message, or a 0 where appropriate) keeps a report readable, while still surfacing genuinely unexpected problems rather than hiding everything indiscriminately.

## Core concept

| Error | Common cause | Typical handling |
|---|---|---|
| \`#DIV/0!\` | Dividing by zero or a blank cell | \`IFERROR(a/b, 0)\` or check \`b<>0\` first |
| \`#N/A\` | A lookup found no match | \`IFERROR(VLOOKUP(...), "Not found")\` |
| \`#VALUE!\` | Wrong data type in an operation | Fix the source data type, or wrap with IFERROR as a stopgap |
| \`#REF!\` | A referenced cell/range was deleted | Fix the broken reference — IFERROR can mask, but not fix, this |

## 📊 Example

A conversion-rate formula \`=conversions/visits\` throws \`#DIV/0!\` for any row with zero visits. \`=IFERROR(conversions/visits, 0)\` (or, more precisely, \`=IF(visits=0, 0, conversions/visits)\`) handles it gracefully, showing a clean 0% instead of an error that would break a downstream SUM or chart.

## ⚠️ Common mistakes

- **Wrapping every formula in IFERROR by default**, which can hide a genuine bug (like a broken reference) behind a generic fallback, making real problems harder to notice.
- **Choosing a fallback value that's misleading** — displaying 0 for a genuinely unknown/missing value (rather than "N/A" or blank) can make missing data look like a real zero in a downstream calculation.

## Related concepts

\`\`\`
Flash Fill
  ↓
Error Handling ← you are here
  ↓
Standardizing Values
\`\`\`

## 🎤 Interview preparation

**Q: A conversion-rate column shows several #DIV/0! errors. How would you handle it?**
Short answer: Wrap the formula with a check for zero (either \`IF(visits=0, 0, conversions/visits)\` or \`IFERROR(conversions/visits, 0)\`), choosing a fallback value that accurately represents "no visits" rather than letting the error propagate into downstream totals.

---

### ⚡ Quick Revision

**Error handling** → anticipate and manage formula errors deliberately, usually with IFERROR
Don't blanket-wrap everything — a hidden error can be a hidden bug.
`,
});

createSkill('standardizing-values', {
  title: 'Standardizing Values',
  category: 'Spreadsheets',
  what_is_it: 'Making inconsistent entries of the same real-world value consistent — like "NY," "N.Y.," and "New York" all becoming one standard form.',
  why_it_matters: 'Inconsistent values silently break GROUP BY-style summaries and lookups — a pivot table sees "NY" and "New York" as two completely different categories.',
  prerequisites: ['error-handling-spreadsheets'],
  objectives: [
    'Identify inconsistent entries representing the same real-world value',
    'Standardize a column using Find & Replace or a mapping formula',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-standardizing-values-1', title: 'Standardize a category column', description: 'Given a column with "NY," "N.Y.," and "New York" all present, standardize every entry to one consistent value.' },
  ],
  verify: ['Can identify inconsistent entries representing the same value', 'Can standardize a column to one consistent form'],
  note: `
## 🎯 What is it?

**Standardizing values** means making inconsistent entries that represent the same real-world thing consistent — "NY," "N.Y.," and "New York" should usually all become one agreed-upon value before any grouping, counting, or lookup is done on that column.

## 💡 Why is it important?

- A pivot table or \`GROUP BY\`-style summary treats "NY" and "New York" as two entirely different categories, silently splitting what should be one group's total into two smaller, both-wrong totals.
- It's a prerequisite for reliably detecting business duplicates (see Duplicate Data) and for any lookup that depends on exact-match category names.

## Core concept

| Approach | When to use |
|---|---|
| Find & Replace | A handful of known inconsistent variants |
| A mapping table + VLOOKUP | Many known variants, reused across files |
| TRIM + UPPER/PROPER | Whitespace and casing inconsistencies |

## 📊 Example

A "State" column contains "NY," "New York," and "ny" — all meant to represent the same state. Standardizing (via Find & Replace or a lookup-based mapping table) to one consistent value ("NY") before building a pivot table ensures New York's total is calculated correctly as one group, not split across three near-identical labels.

## ⚠️ Common mistakes

- **Standardizing only the most obvious variants** and missing subtler ones (extra whitespace, inconsistent capitalization) — always combine with TRIM/UPPER/PROPER as a first pass.
- **Standardizing to a value that loses meaningful distinction** — e.g., merging two genuinely different categories that happen to look similar.

## Related concepts

\`\`\`
Error Handling
  ↓
Standardizing Values ← you are here
  ↓
Cleaning Text
\`\`\`

## 🎤 Interview preparation

**Q: A pivot table shows "NY" and "New York" as two separate rows with smaller totals, when they should be one. What's the fix?**
Short answer: Standardize the source column's values to one consistent form (via Find & Replace or a mapping lookup) before building the pivot table — the pivot table only groups by exact text match, so inconsistent source values produce split, incorrect groups.

---

### ⚡ Quick Revision

**Standardizing values** → make inconsistent entries of the same real-world thing consistent
Required before any grouping, counting, or lookup can trust a text column.
`,
});

createSkill('cleaning-text-spreadsheets', {
  title: 'Cleaning Text in Spreadsheets',
  category: 'Spreadsheets',
  what_is_it: 'Combining TRIM, CLEAN, UPPER/LOWER/PROPER, and Find & Replace into a repeatable routine for turning messy imported text into consistent, analysis-ready values.',
  why_it_matters: 'Messy text (extra spaces, inconsistent casing, invisible characters) is one of the most common reasons a lookup, filter, or GROUP BY silently fails.',
  prerequisites: ['standardizing-values'],
  objectives: [
    'Combine TRIM, CLEAN, and case functions into a text-cleaning routine',
    'Recognize when messy text is the hidden cause of a broken lookup or filter',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-cleaning-text-spreadsheets-1', title: 'Build a cleaning routine', description: 'Given a messy imported text column, build a formula combining TRIM, CLEAN, and PROPER to produce a clean, consistent version.' },
  ],
  verify: ['Can combine TRIM/CLEAN/case functions into one cleaning formula', 'Can explain why messy text can look identical to clean text on screen'],
  note: `
## 🎯 What is it?

**Cleaning text** in a spreadsheet means combining several individual text functions — **TRIM** (extra spaces), **CLEAN** (non-printable characters), and **UPPER/LOWER/PROPER** (casing) — into a repeatable routine that turns messy, inconsistently-formatted imported text into consistent, analysis-ready values.

## 💡 Why is it important?

- Messy text is one of the most common hidden causes of a broken lookup, filter, or pivot table — and it often looks completely identical to clean text on screen, since extra spaces and non-printable characters are invisible.
- A repeatable cleaning formula, applied consistently, is far more reliable than manually fixing individual cells.

## Core concept

\`\`\`
=PROPER(TRIM(CLEAN(A1)))
\`\`\`

Read inside-out: CLEAN strips non-printable characters first, TRIM removes extra spaces, PROPER standardizes capitalization — chaining them handles several common issues in one formula.

## 📊 Example

A cell imported from a web export contains \`"  amir KHAN\\n"\` (leading spaces, inconsistent case, a trailing non-printable line break). \`=PROPER(TRIM(CLEAN(A1)))\` produces a clean \`"Amir Khan"\` — none of the three issues would be obvious just from glancing at the cell, since the extra whitespace and line break are invisible on screen.

## ⚠️ Common mistakes

- **Assuming a cell "looks fine" means it's clean** — extra spaces and non-printable characters are invisible, and are exactly why a lookup can fail even when the text visually appears identical.
- **Cleaning text after already building formulas/lookups on the messy version**, requiring everything downstream to be redone — clean text as early as possible in a workflow.

## Related concepts

\`\`\`
Standardizing Values
  ↓
Cleaning Text ← you are here
  ↓
Cleaning Dates
\`\`\`

## 🎤 Interview preparation

**Q: A VLOOKUP fails to find a value that looks identical to what's in the lookup table. What's a likely hidden cause?**
Short answer: Invisible characters — extra whitespace or a non-printable character from a data import — that make the cell's true content different from what it visually appears to be; wrapping both sides in \`TRIM(CLEAN(...))\` before comparing often resolves it.

---

### ⚡ Quick Revision

**Cleaning text** → \`PROPER(TRIM(CLEAN(text)))\` — strips invisible characters, extra spaces, and standardizes case
Messy text often looks identical to clean text on screen — that's exactly the risk.
`,
});

createSkill('cleaning-dates-spreadsheets', {
  title: 'Cleaning Dates in Spreadsheets',
  category: 'Spreadsheets',
  what_is_it: 'Converting text that merely looks like a date into a true, calculable date value — and standardizing inconsistent date formats from different sources.',
  why_it_matters: 'A "date" imported as text looks identical to a real date but silently fails at sorting, filtering, and date arithmetic until it\'s properly converted.',
  prerequisites: ['cleaning-text-spreadsheets'],
  objectives: [
    'Identify whether a cell holds a true date or text that looks like one',
    'Convert text-formatted dates into real dates',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-cleaning-dates-spreadsheets-1', title: 'Fix imported dates', description: 'Given a column of dates imported as left-aligned text, convert them into true right-aligned date values.' },
  ],
  verify: ['Can identify a text-formatted "fake" date', 'Can convert text into a true date value'],
  note: `
## 🎯 What is it?

**Cleaning dates** means converting text that merely *looks* like a date (often from a CSV import or a system with a different date convention) into a true, calculable date value — and standardizing dates that arrived in inconsistent formats (MM/DD/YYYY vs. DD/MM/YYYY vs. YYYY-MM-DD).

## 💡 Why is it important?

- A cell containing the text \`"03/14/2024"\` looks identical to a real date, but silently fails at sorting correctly, filtering by date range, and date arithmetic (subtraction, DATEDIF) until it's converted to a true date.
- International data sources often use DD/MM/YYYY while a US-based spreadsheet expects MM/DD/YYYY — misreading this silently swaps days and months for any date where both values are ≤ 12.

## Core concept

A quick visual check: true dates are right-aligned by default; text that looks like a date is left-aligned (the same default alignment behavior that reveals numbers vs. text generally — see Data Types).

| Symptom | Likely cause |
|---|---|
| Dates left-aligned instead of right-aligned | Stored as text, not a real date |
| Sorting produces a strange order (not chronological) | Text-formatted dates sorting alphabetically |
| Date subtraction throws an error | One or both cells are text, not real dates |

## 📊 Example

A CSV import produces a "Date" column that's left-aligned. Using \`Data > Text to Columns\` (with the Date option selected) or a \`DATEVALUE\` formula converts the text into a true, right-aligned date — after which sorting, filtering, and date arithmetic all work correctly.

## ⚠️ Common mistakes

- **Not checking alignment** and assuming a column of "dates" is already usable, when it's actually left-aligned text quietly waiting to break the first date-based formula applied to it.
- **Assuming a date format without checking the data's source convention** — a US-based analyst reading DD/MM/YYYY data as MM/DD/YYYY silently swaps day and month for many rows without any error being raised.

## Related concepts

\`\`\`
Cleaning Text
  ↓
Cleaning Dates ← you are here
  ↓
Cleaning Numbers
\`\`\`

## 🎤 Interview preparation

**Q: A "Date" column sorts in a strange, non-chronological order. What's the likely cause and fix?**
Short answer: The dates are likely stored as text, not true dates — text sorts alphabetically rather than chronologically. Converting them with Text to Columns or DATEVALUE fixes the underlying type, after which sorting behaves correctly.

---

### ⚡ Quick Revision

**Cleaning dates** → convert text that looks like a date into a true date value
Check alignment (right = real date, left = text) as a quick diagnostic; watch for DD/MM vs. MM/DD confusion.
`,
});

createSkill('cleaning-numbers-spreadsheets', {
  title: 'Cleaning Numbers in Spreadsheets',
  category: 'Spreadsheets',
  what_is_it: 'Converting text that looks like a number (often with a currency symbol, comma, or extra space) into a true numeric value that can be summed and calculated on.',
  why_it_matters: 'A "number" imported as text can\'t be summed, averaged, or compared numerically until it\'s converted — and it often looks completely normal on screen.',
  prerequisites: ['cleaning-dates-spreadsheets'],
  objectives: [
    'Identify whether a cell holds a true number or text that looks like one',
    'Convert text-formatted numbers into true numeric values',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-cleaning-numbers-spreadsheets-1', title: 'Fix imported numbers', description: 'Given a column of prices imported as text with a "$" prefix, convert them into true numeric values that can be summed.' },
  ],
  verify: ['Can identify a text-formatted "fake" number', 'Can convert text into a true numeric value'],
  note: `
## 🎯 What is it?

**Cleaning numbers** means converting text that merely *looks* like a number — often carrying a currency symbol, thousands separator, or extra whitespace from an import — into a true numeric value that can actually be summed, averaged, or compared.

## 💡 Why is it important?

- A cell containing the text \`"$1,204.50"\` looks like a number but can't be summed directly — \`SUM\` silently treats text-formatted numbers as 0, understating a total without any error being raised.
- It's exactly the numeric counterpart to Cleaning Dates — data imported from CSVs, PDFs, or web sources frequently arrives as text that merely resembles a number.

## Core concept

Same alignment diagnostic as dates: true numbers are right-aligned by default; text that looks like a number is left-aligned.

| Approach | When to use |
|---|---|
| \`VALUE()\` function | Convert a single text-number to a true number |
| Text to Columns | Convert a whole column at once |
| Multiply by 1 (\`=A1*1\`) | Quick trick to force text-to-number conversion |
| Find & Replace to strip symbols first | When a currency symbol or comma blocks conversion |

## 📊 Example

A column imported as \`"$1,204.50"\`, \`"$89.00\"\` (text, left-aligned) produces \`SUM = 0\` if summed directly. Stripping the \`$\` and \`,\` characters (Find & Replace) and converting with \`VALUE()\` or Text to Columns produces true numeric values, right-aligned, that correctly sum to the real total.

## ⚠️ Common mistakes

- **Trusting a SUM of 0 (or an unexpectedly low total) without checking whether the source column is actually text**, rather than immediately suspecting a data or formula bug elsewhere.
- **Formatting a text cell to "look like" a number** (via a number format) without actually converting it — formatting alone does not change a text value into a true number.

## Related concepts

\`\`\`
Cleaning Dates
  ↓
Cleaning Numbers ← you are here
\`\`\`
This closes the Data Cleaning chapter — the next chapter (Data Transformation) builds on clean, correctly-typed data to reshape it for analysis.

## 🎤 Interview preparation

**Q: A SUM formula over a column of prices returns 0, even though the cells clearly show dollar amounts. What's the likely cause?**
Short answer: The prices are likely stored as text (often from a CSV or web import, sometimes with a "$" prefix), not true numbers — SUM silently treats text as 0. Converting with VALUE(), Text to Columns, or stripping the currency symbol first resolves it.

---

### ⚡ Quick Revision

**Cleaning numbers** → convert text that looks like a number into a true numeric value
Check alignment (right = real number, left = text); SUM silently treats text-numbers as 0.
`,
});

console.log('Created 8 new Data Cleaning (2.8) skills.');
