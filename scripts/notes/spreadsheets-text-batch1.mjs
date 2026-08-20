import { createSkill } from './_create.mjs';

createSkill('upper-function', {
  title: 'UPPER Function',
  category: 'Spreadsheets',
  what_is_it: 'Converting text to ALL CAPS.',
  why_it_matters: 'Standardizing casing is essential before grouping or comparing text — inconsistent casing splits what should be one category into several.',
  prerequisites: ['xmatch-function'],
  objectives: ['Convert a text value to uppercase with UPPER'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-upper-1', title: 'Standardize a code column', description: 'Convert a column of inconsistently-cased product codes to all uppercase.' }],
  verify: ['Every value in the column is correctly converted to uppercase'],
  note: `
## 🎯 What is it?

**UPPER** converts text to ALL CAPS.

## 💡 Why is it important?

Standardizing casing is essential before grouping, comparing, or deduplicating text — inconsistent casing ("abc123", "ABC123") can split what should be one category into several in a pivot table or grouped report.

## Syntax

\`\`\`
=UPPER(text)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | widget-a1 |

**Formula:** \`=UPPER(A1)\` → \`"WIDGET-A1"\`

## Multiple examples

**Beginner:** \`=UPPER(A2)\` — standardize a product code column to all caps.
**Real-world:** Standardizing a country-code column to uppercase before joining it against a reference table that uses uppercase codes, so the join doesn't silently fail on a casing mismatch.

## ⚠️ Common mistakes

- **Assuming a casing difference doesn't matter for grouping/pivoting.** It does — see [Data Types](/skills/spreadsheet-data-types) and [UPPER/LOWER/PROPER](/skills/lower-function) common mistakes for the same underlying issue.

## Real-world Data Analyst use cases

- **Data cleaning:** standardizing codes or identifiers before matching or joining two datasets.

## Related concepts

\`\`\`
XMATCH → UPPER ← you are here → LOWER → PROPER → TRIM
\`\`\`

## Practice questions

### Easy
1. Write a formula to convert A1 to uppercase.

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=UPPER(A1)\`

</details>

## 🎤 Interview preparation

**Q: Why standardize text casing before comparing or grouping values?**
Short answer: Grouping and exact-match comparisons are case-sensitive for bucketing purposes, so inconsistent casing can silently split one real-world value into multiple categories.

## Best practices

- Standardize casing on any identifier or code column before matching or grouping it.

---

### ⚡ Quick Revision

**UPPER(text)** → ALL CAPS
`,
});

createSkill('lower-function', {
  title: 'LOWER Function',
  category: 'Spreadsheets',
  what_is_it: 'Converting text to all lowercase.',
  why_it_matters: 'A common standardization step, especially for email addresses and identifiers where case shouldn\'t matter but often does to a spreadsheet.',
  prerequisites: ['upper-function'],
  objectives: ['Convert a text value to lowercase with LOWER'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-lower-1', title: 'Standardize an email column', description: 'Convert a column of inconsistently-cased email addresses to all lowercase before deduplicating.' }],
  verify: ['Every value in the column is correctly converted to lowercase'],
  note: `
## 🎯 What is it?

**LOWER** converts text to all lowercase — the direct counterpart to [UPPER](/skills/upper-function).

## 💡 Why is it important?

A common standardization step, especially for email addresses and usernames — "Ana@Company.com" and "ana@company.com" are the same real address, but a spreadsheet treats them as different text unless standardized to one casing first.

## Syntax

\`\`\`
=LOWER(text)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | Ana@Company.COM |

**Formula:** \`=LOWER(A1)\` → \`"ana@company.com"\`

## Multiple examples

**Beginner:** \`=LOWER(A2)\` — standardize an email column.
**Real-world:** Standardizing email addresses to lowercase before using [COUNTIF](/skills/countif-function) to check for duplicate signups, since two differently-cased entries of the same email would otherwise count as unique.

## ⚠️ Common mistakes

- **Deduplicating a text column without first standardizing casing** — this is the single most common reason a duplicate-detection formula misses real duplicates.

## Real-world Data Analyst use cases

- **Data cleaning:** standardizing email or username columns before deduplication or matching.

## Related concepts

\`\`\`
UPPER → LOWER ← you are here → PROPER → TRIM
\`\`\`

## Practice questions

### Easy
1. Write a formula to convert A1 to lowercase.

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=LOWER(A1)\`

</details>

## 🎤 Interview preparation

**Q: Why standardize an email column to lowercase before deduplicating?**
Short answer: Email addresses are effectively case-insensitive in practice, but a spreadsheet compares text exactly — without standardizing casing first, the same real address entered with different casing would be miscounted as two separate, unique values.

## Best practices

- Standardize casing before any duplicate-detection or matching step on text like emails or usernames.

---

### ⚡ Quick Revision

**LOWER(text)** → all lowercase
`,
});

createSkill('proper-function', {
  title: 'PROPER Function',
  category: 'Spreadsheets',
  what_is_it: 'Converting text to Proper Case — capitalizing the first letter of each word.',
  why_it_matters: 'The right casing choice for human-readable names and titles in a finished report, unlike UPPER or LOWER which read as shouting or informal.',
  prerequisites: ['lower-function'],
  objectives: ['Convert a text value to Proper Case with PROPER'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-proper-1', title: 'Standardize a name column', description: 'Convert a column of inconsistently-cased customer names to Proper Case.' }],
  verify: ['Every value in the column is correctly converted to Proper Case'],
  note: `
## 🎯 What is it?

**PROPER** converts text to Proper Case — capitalizing the first letter of each word (e.g., "john smith" → "John Smith").

## 💡 Why is it important?

It's the right casing choice for human-readable names and titles in a finished report — [UPPER](/skills/upper-function) reads as shouting, [LOWER](/skills/lower-function) reads as informal, but PROPER matches how names are naturally written.

## Syntax

\`\`\`
=PROPER(text)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | john SMITH |

**Formula:** \`=PROPER(A1)\` → \`"John Smith"\`

## Multiple examples

**Beginner:** \`=PROPER(A2)\` — standardize a customer name column for a report.
**Real-world:** \`=PROPER(TRIM(A2))\` — combining PROPER with TRIM to fix both casing and stray spaces in one step, a common real-world data-cleaning pattern.

## ⚠️ Common mistakes

- **Using PROPER on text that shouldn't be title-cased**, like an email address, a product code, or an acronym — PROPER is for human names and titles, not identifiers, and can produce an odd result on non-name text (e.g., "usa" becomes "Usa," not "USA").

## Real-world Data Analyst use cases

- **Customer analysis:** standardizing contact or company names before deduplication or display in a report.

## Related concepts

\`\`\`
LOWER → PROPER ← you are here → TRIM (existing topic)
\`\`\`

## Practice questions

### Easy
1. Write a formula to convert A1 to Proper Case.

### Interview/Advanced
2. Why might PROPER produce an odd result on a value like "usa" or "nba"?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=PROPER(A1)\`
2. PROPER blindly capitalizes the first letter of each "word" — it has no awareness that "usa" or "nba" are acronyms that should stay fully capitalized, so it produces "Usa" or "Nba" instead, which needs manual correction or a different approach for acronym-heavy text.

</details>

## 🎤 Interview preparation

**Q: When is PROPER the wrong function to use?**
Short answer: On text that isn't a human name or title — identifiers, codes, and acronyms often need different (or no) casing treatment than Proper Case provides.

## Best practices

- Reserve PROPER for genuine human names and titles, not codes or acronyms.
- Combine with TRIM when cleaning a name column, to fix spacing and casing together.

---

### ⚡ Quick Revision

**PROPER(text)** → Each Word Capitalized — best for human names/titles, not codes or acronyms
`,
});

createSkill('clean-function', {
  title: 'CLEAN Function',
  category: 'Spreadsheets',
  what_is_it: 'Removing non-printable characters from text — invisible formatting artifacts often left behind after copying data from another system.',
  why_it_matters: 'Some cleaning problems look identical to a whitespace issue but aren\'t fixed by TRIM — CLEAN handles a different, often invisible category of junk characters.',
  prerequisites: ['proper-function'],
  objectives: ['Remove non-printable characters from a text value with CLEAN', 'Explain how CLEAN differs from TRIM'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-clean-1', title: 'Fix text pasted from a PDF', description: 'Given a column of text pasted from a PDF report with invisible line-break characters, use CLEAN to remove them.' }],
  verify: ['Non-printable characters are removed without altering visible text', 'Can explain when to use CLEAN vs. TRIM'],
  note: `
## 🎯 What is it?

**CLEAN** removes non-printable characters from text — invisible formatting artifacts (like line breaks or control characters) that are often left behind after copying data from a PDF, a legacy system, or certain exports.

## 💡 Why is it important?

Some cleaning problems look identical to a whitespace issue but aren't actually fixed by [TRIM](/skills/trim-function) — TRIM removes regular spaces, while CLEAN removes a different category of invisible, non-printable characters. A lookup or comparison can still silently fail even after TRIM if the real culprit is a non-printable character.

## Syntax

\`\`\`
=CLEAN(text)
\`\`\`

Often combined with TRIM for a thorough cleanup: \`=TRIM(CLEAN(text))\`.

## 📊 Example

A cell pasted from a PDF report contains "Total: 1200" followed by an invisible line-break character.

**Formula:** \`=CLEAN(A1)\`

**Explanation:** The visible text looks unchanged, but the invisible non-printable character is removed — this can fix a lookup or length check (LEN) that was mysteriously failing due to that hidden character.

## Multiple examples

**Beginner:** \`=CLEAN(A2)\` — remove invisible characters from a single cell.
**Real-world:** \`=TRIM(CLEAN(A2))\` applied to a whole column of data pasted from an external report, fixing both regular extra spaces and invisible formatting artifacts in one pass, before using that column as a lookup key.

## ⚠️ Common mistakes

- **Assuming TRIM alone fixes every "invisible character" problem.** TRIM only handles regular spaces; CLEAN is needed for non-printable control characters, which TRIM doesn't touch.
- **Not recognizing CLEAN is needed** when a value "looks" identical to another but a formula (like an exact-match lookup) still fails — this is a common, hard-to-spot symptom of a non-printable character.

## Real-world Data Analyst use cases

- **Data cleaning:** fixing text pasted from a PDF, a website, or a legacy export that carries invisible formatting artifacts.

## Related concepts

\`\`\`
PROPER → CLEAN ← you are here → LEFT → RIGHT → MID
\`\`\`
Directly complements [TRIM](/skills/trim-function) — together they cover the two main categories of "invisible junk" in text data.

## Practice questions

### Easy
1. What does CLEAN remove that TRIM does not?

### Interview/Advanced
2. Two cells look visually identical, but an exact-match formula treats them as different. TRIM was already applied. What's your next step?

<details><summary><strong>Answer / Solution</strong></summary>

1. Non-printable, non-space control characters (like line breaks or other formatting artifacts) — TRIM only removes regular spaces.
2. Try wrapping the value with CLEAN as well — a non-printable character invisible to the eye is a common cause of an exact-match failure that TRIM alone doesn't fix.

</details>

## 🎤 Interview preparation

**Q: When would CLEAN succeed where TRIM fails?**
Short answer: When the invisible problem in the text is a non-printable control character (like a hidden line break), not a regular space — TRIM only removes spaces, while CLEAN targets that different category of invisible character.

## Best practices

- When a lookup or exact-match comparison mysteriously fails on visually identical text, try both TRIM and CLEAN together.

---

### ⚡ Quick Revision

**CLEAN(text)** → removes non-printable characters (different from TRIM's regular-space removal)
**Combine:** \`=TRIM(CLEAN(text))\` for thorough text cleanup
`,
});

createSkill('left-function', {
  title: 'LEFT Function',
  category: 'Spreadsheets',
  what_is_it: 'Extracting a specified number of characters from the start (left side) of a text value.',
  why_it_matters: 'A common building block for parsing a structured text field, like pulling a 2-letter country code from the start of a longer ID.',
  prerequisites: ['clean-function'],
  objectives: ['Extract a substring from the start of a text value with LEFT'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-left-1', title: 'Extract a prefix code', description: 'Given a column of product IDs like "US-A1234", extract just the 2-letter country prefix using LEFT.' }],
  verify: ['LEFT correctly extracts the intended number of characters', 'Formula works across the whole column, not just one example'],
  note: `
## 🎯 What is it?

**LEFT** extracts a specified number of characters from the **start** (left side) of a text value.

## 💡 Why is it important?

A common building block for parsing a structured text field — pulling a fixed-length prefix, like a 2-letter country code or a category tag, from the start of a longer ID or code.

## Syntax

\`\`\`
=LEFT(text, num_chars)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | US-A1234 |

**Formula:** \`=LEFT(A1,2)\` → \`"US"\`

## Multiple examples

**Beginner:** \`=LEFT(A2,3)\` — extract the first 3 characters of a code.
**Real-world:** \`=LEFT(order_id,2)\` used to extract a region prefix embedded in every order ID, enabling a quick regional breakdown without a separate lookup table.

## ⚠️ Common mistakes

- **Assuming every value has the same length/structure.** LEFT extracts a fixed number of characters regardless of the text's actual length or format — if some rows don't follow the expected pattern, LEFT will extract the wrong substring without any error.
- **Using LEFT when the piece needed isn't always at a fixed position.** If the prefix length varies, [FIND](/skills/find-function) combined with LEFT is often needed instead of a fixed character count.

## Real-world Data Analyst use cases

- **Data cleaning:** extracting a fixed-length prefix or code embedded at the start of an ID field.

## Related concepts

\`\`\`
CLEAN → LEFT ← you are here → RIGHT → MID → LEN
\`\`\`

## Practice questions

### Easy
1. Write a formula that extracts the first 4 characters of A1.

### Interview/Advanced
2. Why might \`=LEFT(A2,2)\` extract the wrong value for some rows in a real dataset?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=LEFT(A1,4)\`
2. If not every row follows the exact same fixed-length format (e.g., some IDs have a 1-letter prefix instead of 2), a fixed-length LEFT extracts the wrong substring for those inconsistent rows — worth checking the data's actual consistency before relying on a fixed character count.

</details>

## 🎤 Interview preparation

**Q: When would LEFT not be a reliable way to extract a substring?**
Short answer: When the piece you need isn't always the same fixed length or in the same fixed position across every row — in that case, combining FIND (to locate a delimiter) with LEFT is more robust than a hardcoded character count.

## Best practices

- Verify the data's actual format consistency before relying on a fixed-length LEFT extraction.

---

### ⚡ Quick Revision

**LEFT(text, num_chars)** → first N characters from the start
`,
});

createSkill('right-function', {
  title: 'RIGHT Function',
  category: 'Spreadsheets',
  what_is_it: 'Extracting a specified number of characters from the end (right side) of a text value.',
  why_it_matters: 'The mirror image of LEFT — used whenever the piece of text needed is a fixed-length suffix, like a file extension or the last few digits of an ID.',
  prerequisites: ['left-function'],
  objectives: ['Extract a substring from the end of a text value with RIGHT'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-right-1', title: 'Extract a suffix code', description: 'Given a column of order IDs ending in a 4-digit year, extract just the year using RIGHT.' }],
  verify: ['RIGHT correctly extracts the intended number of characters'],
  note: `
## 🎯 What is it?

**RIGHT** extracts a specified number of characters from the **end** (right side) of a text value — the mirror image of [LEFT](/skills/left-function).

## 💡 Why is it important?

Used whenever the piece of text needed is a fixed-length suffix — a file extension, the last 4 digits of an ID, or a year appended to the end of a code.

## Syntax

\`\`\`
=RIGHT(text, num_chars)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | INV-2024 |

**Formula:** \`=RIGHT(A1,4)\` → \`"2024"\`

## Multiple examples

**Beginner:** \`=RIGHT(A2,3)\` — extract the last 3 characters of a code.
**Real-world:** \`=RIGHT(filename,3)\` used to extract a file extension from a column of filenames, to check for and flag any files not matching an expected format (like ".csv").

## ⚠️ Common mistakes

- **Same fixed-length assumption risk as LEFT** — RIGHT extracts a fixed number of characters regardless of whether every row's actual suffix is that same length.

## Real-world Data Analyst use cases

- **Data cleaning:** extracting a fixed-length suffix, like a year or file extension, from the end of a text field.

## Related concepts

\`\`\`
LEFT → RIGHT ← you are here → MID → LEN
\`\`\`

## Practice questions

### Easy
1. Write a formula that extracts the last 2 characters of A1.

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=RIGHT(A1,2)\`

</details>

## 🎤 Interview preparation

**Q: What's the relationship between LEFT and RIGHT?**
Short answer: They extract from opposite ends of a text value — LEFT from the start, RIGHT from the end — both taking a fixed number of characters.

## Best practices

- Verify the data's actual suffix-length consistency before relying on a fixed-length RIGHT extraction.

---

### ⚡ Quick Revision

**RIGHT(text, num_chars)** → last N characters from the end
`,
});

createSkill('mid-function', {
  title: 'MID Function',
  category: 'Spreadsheets',
  what_is_it: 'Extracting a specified number of characters from the middle of a text value, starting at a given position.',
  why_it_matters: 'Completes the LEFT/RIGHT/MID trio — needed whenever the piece of text to extract sits neither at the very start nor the very end.',
  prerequisites: ['right-function'],
  objectives: ['Extract a substring from the middle of a text value with MID'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-mid-1', title: 'Extract a middle segment', description: 'Given IDs formatted like "US-2024-A1234", extract just the "2024" portion using MID.' }],
  verify: ['MID correctly extracts the intended substring using the right start position and length'],
  note: `
## 🎯 What is it?

**MID** extracts a specified number of characters from the **middle** of a text value, starting at a given position — completing the trio alongside [LEFT](/skills/left-function) and [RIGHT](/skills/right-function).

## 💡 Why is it important?

Needed whenever the piece of text to extract sits neither at the very start nor the very end of a value — like a segment sandwiched between two delimiters in a structured code.

## Syntax

\`\`\`
=MID(text, start_num, num_chars)
\`\`\`

- **start_num** — the character position to begin extracting from (counting from 1).
- **num_chars** — how many characters to extract from that position.

## 📊 Example

| | A |
|---|---|
| 1 | US-2024-A1234 |

**Formula:** \`=MID(A1,4,4)\`
**Result:** \`"2024"\` — starting at character 4, extracting 4 characters.

## Multiple examples

**Beginner:** \`=MID(A2,2,3)\` — extract 3 characters starting at position 2.
**Real-world:** \`=MID(product_code,4,4)\` used to extract a fixed-position year segment embedded in the middle of a standardized product code format.

## ⚠️ Common mistakes

- **Miscounting the start position.** MID counts from 1, not 0 — an off-by-one error here extracts the wrong substring.
- **Assuming a fixed position works for every row**, same risk as LEFT and RIGHT — if the format isn't perfectly consistent across all rows, MID will silently extract the wrong segment for inconsistent ones.

## Real-world Data Analyst use cases

- **Data cleaning:** extracting a fixed-position segment (like an embedded date or category code) from a structured identifier.

## Related concepts

\`\`\`
RIGHT → MID ← you are here → LEN → FIND → SEARCH
\`\`\`

## Practice questions

### Easy
1. Write a formula that extracts 3 characters starting at position 5 of A1.

### Interview/Advanced
2. Given "US-2024-A1234", how would you extract just "A1234" (the segment after the second dash)?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=MID(A1,5,3)\`
2. \`=MID(A1,9,5)\` (counting manually to the position after the second dash) — though a more robust real-world approach would combine MID with [FIND](/skills/find-function) to dynamically locate the dash position instead of hardcoding it, in case the surrounding segments vary in length.

</details>

## 🎤 Interview preparation

**Q: When would MID be combined with FIND instead of using a hardcoded start position?**
Short answer: When the position of the segment to extract isn't always the same across every row — FIND dynamically locates a delimiter's position, which MID can then use as its start_num, making the extraction robust to varying-length surrounding text.

## Best practices

- Combine MID with FIND when a fixed start position isn't reliable across all rows.

---

### ⚡ Quick Revision

**MID(text, start_num, num_chars)** → extracts from the middle, starting at a given position
**Counts from 1**, not 0 — watch for off-by-one errors
`,
});

createSkill('len-function', {
  title: 'LEN Function',
  category: 'Spreadsheets',
  what_is_it: 'Counting the number of characters in a text value, including spaces.',
  why_it_matters: 'A simple but essential building block for validating a fixed-format field (like a phone number) and for combining with other text functions like MID and FIND.',
  prerequisites: ['mid-function'],
  objectives: ['Count the number of characters in a text value with LEN', 'Use LEN to validate a fixed-length field'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-len-1', title: 'Validate a phone number length', description: 'Given a column of phone numbers, use LEN to flag any that don\'t have the expected 10 digits.' }],
  verify: ['LEN correctly counts characters including spaces', 'Can use LEN to flag rows that don\'t match an expected length'],
  note: `
## 🎯 What is it?

**LEN** counts the number of characters in a text value, including spaces.

## 💡 Why is it important?

A simple but essential building block — for validating a fixed-format field (like a 10-digit phone number), and as a component inside other text formulas that need to know a string's length (like calculating how many characters MID should extract).

## Syntax

\`\`\`
=LEN(text)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | Hello World |

**Formula:** \`=LEN(A1)\` → \`11\` (including the space between the two words)

## Multiple examples

**Beginner:** \`=LEN(A2)\` — count the characters in a text value.
**Intermediate:** \`=LEN(A2)=10\` — check whether a phone number has exactly 10 characters.
**Real-world:** \`=IF(LEN(phone)<>10,"Check format","OK")\` applied down a phone-number column, quickly flagging any row that doesn't match the expected fixed length before the data is trusted for outreach.

## ⚠️ Common mistakes

- **Forgetting LEN counts spaces too.** A value with unexpected extra spaces (see [TRIM](/skills/trim-function)) will have a longer LEN than expected, even if it visually looks the same length.
- **Using LEN to validate format without also checking content.** LEN only confirms the *count* of characters, not whether they're the *right kind* of characters (e.g., all digits) — pairing it with another check is often needed for full validation.

## Real-world Data Analyst use cases

- **Data quality checks:** validating that a fixed-format field (phone number, postal code, product code) has the expected character count.
- **Building block:** used inside more complex text formulas that need to reference a string's length dynamically.

## Related concepts

\`\`\`
MID → LEN ← you are here → FIND → SEARCH
\`\`\`

## Practice questions

### Easy
1. Write a formula that returns the character count of A1.

### Interview/Advanced
2. A phone number column shows LEN results of both 10 and 11 for values that "look" the same length visually. What's the likely cause?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=LEN(A1)\`
2. A hidden extra space (see [TRIM](/skills/trim-function)) in some values — LEN counts every character including spaces, so an invisible trailing or leading space adds 1 to the count without changing how the value looks visually.

</details>

## 🎤 Interview preparation

**Q: How would you quickly flag phone numbers that don't match an expected 10-digit format?**
Short answer: \`=IF(LEN(phone)<>10,"Check format","OK")\` — comparing each value's character count against the expected length flags any mismatch instantly, though it should be paired with a digits-only check for full validation.

## Best practices

- Use LEN as a fast first-pass validation check on any fixed-format field.
- Remember LEN counts spaces, which can help diagnose an otherwise-invisible whitespace problem.

---

### ⚡ Quick Revision

**LEN(text)** → character count, including spaces
**Use case:** quick validation of a fixed-length field (phone number, code, ID)
`,
});
