import { createSkill } from './_create.mjs';

createSkill('find-function', {
  title: 'FIND Function',
  category: 'Spreadsheets',
  what_is_it: 'Finding the position of one piece of text within another, case-sensitively — often used to locate a delimiter before extracting a substring with LEFT, RIGHT, or MID.',
  why_it_matters: 'Real-world text isn\'t always a fixed length — FIND lets a formula locate a delimiter dynamically instead of hardcoding a position that might not hold for every row.',
  prerequisites: ['len-function'],
  objectives: ['Use FIND to locate the position of a character or substring', 'Combine FIND with MID or LEFT to extract a variable-length segment'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-find-1', title: 'Extract text before a delimiter', description: 'Given a column of "Name - Department" values, use FIND to locate the dash, then LEFT to extract just the name.' }],
  verify: ['FIND correctly locates the position of the target text', 'Combined formula correctly extracts the intended segment across varying-length values'],
  note: `
## 🎯 What is it?

**FIND** locates the position of one piece of text within another, and is **case-sensitive**. It's most often used to dynamically locate a delimiter (like a dash or comma) before extracting a substring with [LEFT](/skills/left-function), [RIGHT](/skills/right-function), or [MID](/skills/mid-function).

## 💡 Why is it important?

Real-world text isn't always a fixed length — a name followed by a department, separated by a dash, can vary in length row to row. FIND lets a formula locate the delimiter's position *dynamically*, instead of hardcoding a fixed character count that only works for one specific row length.

## Syntax

\`\`\`
=FIND(find_text, within_text, [start_num])
\`\`\`

Returns the position (a number) where \`find_text\` first appears within \`within_text\` — or a \`#VALUE!\` error if it's not found at all.

## 📊 Example

| | A |
|---|---|
| 1 | Ana Silva - Marketing |

**Formula:** \`=FIND("-",A1)\` → \`11\` (the dash is the 11th character)

**Combined with LEFT to extract the name:** \`=LEFT(A1,FIND("-",A1)-1)\` → \`"Ana Silva "\` (everything before the dash; wrap with TRIM to clean the trailing space).

## Multiple examples

**Beginner:** \`=FIND("@",A2)\` — find the position of the @ symbol in an email address.
**Real-world:** \`=TRIM(LEFT(A2,FIND("-",A2)-1))\` used across a whole column of "Name - Department" values with varying name lengths, correctly extracting just the name from every row regardless of how long each name is.

## ⚠️ Common mistakes

- **Not handling the case where the delimiter is missing.** FIND returns a \`#VALUE!\` error if the target text isn't found at all — wrapping with [IFERROR](/skills/iferror-function) handles rows that don't match the expected format.
- **Forgetting FIND is case-sensitive.** Searching for "Marketing" won't match "marketing" — use [SEARCH](/skills/search-function) instead if case-insensitivity is needed.

## Real-world Data Analyst use cases

- **Data cleaning:** dynamically locating a delimiter to split a combined field into its component parts.

## Related concepts

\`\`\`
LEN → FIND ← you are here → SEARCH → TEXTJOIN
\`\`\`

## Practice questions

### Easy
1. Write a formula that finds the position of the comma in A1.

### Interview/Advanced
2. Why is combining FIND with LEFT more robust than a hardcoded LEFT(A1,10) for extracting a name before a delimiter?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=FIND(",",A1)\`
2. A hardcoded character count only works correctly for names of exactly that length — FIND dynamically locates the actual delimiter position for each row, so the extraction correctly adapts to names of any length, not just one specific case.

</details>

## 🎤 Interview preparation

**Q: What's the difference between FIND and SEARCH?**
Short answer: FIND is case-sensitive; SEARCH is not — otherwise they work almost identically for locating a substring's position.

## Best practices

- Combine FIND (or SEARCH) with LEFT/RIGHT/MID whenever a substring's position varies by row, instead of hardcoding a fixed character count.
- Wrap with IFERROR to handle rows where the expected delimiter is missing.

---

### ⚡ Quick Revision

**FIND(find_text, within_text)** → position of a substring, case-sensitive
**Use with LEFT/RIGHT/MID** to extract a variable-length segment dynamically
`,
});

createSkill('search-function', {
  title: 'SEARCH Function',
  category: 'Spreadsheets',
  what_is_it: 'Finding the position of one piece of text within another, case-insensitively — otherwise identical to FIND.',
  why_it_matters: 'Real text data has inconsistent casing constantly, so a case-insensitive search is often what\'s actually needed instead of FIND\'s strict case-sensitive matching.',
  prerequisites: ['find-function'],
  objectives: ['Use SEARCH to locate a substring case-insensitively', 'Explain when SEARCH is preferable to FIND'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-search-1', title: 'Find text regardless of case', description: 'Given a column of product descriptions with inconsistent casing, use SEARCH to find whether each one mentions "sale" regardless of how it\'s capitalized.' }],
  verify: ['SEARCH correctly finds a match regardless of casing'],
  note: `
## 🎯 What is it?

**SEARCH** finds the position of one piece of text within another, just like [FIND](/skills/find-function) — but **case-insensitively**, so "Sale" and "sale" are treated as the same match.

## 💡 Why is it important?

Real text data has inconsistent casing constantly — a case-insensitive search is often what's actually needed, rather than FIND's strict case-sensitive matching, which would miss "SALE" when searching for "sale".

## Syntax

\`\`\`
=SEARCH(find_text, within_text, [start_num])
\`\`\`

Same argument structure as FIND — the only functional difference is case sensitivity.

## 📊 Example

| | A |
|---|---|
| 1 | Limited SALE this week |

**Formula:** \`=SEARCH("sale",A1)\` → \`10\` (found, despite the case difference)
**Formula:** \`=FIND("sale",A1)\` → \`#VALUE!\` error (FIND is case-sensitive, and "sale" ≠ "SALE" to FIND)

## Multiple examples

**Beginner:** \`=SEARCH("urgent",A2)\` — check whether a description mentions "urgent" regardless of case.
**Real-world:** \`=ISNUMBER(SEARCH("refund",notes_column))\` used to flag any customer service note that mentions "refund" in any casing, for a quick keyword-based triage before deeper analysis.

## ⚠️ Common mistakes

- **Using FIND when case shouldn't matter**, silently missing legitimate matches due to a casing difference — this is the most common reason to prefer SEARCH by default for keyword-flagging tasks.
- **SEARCH also supports wildcards** (\`?\` and \`*\`) unlike FIND — forgetting this can mean missing a useful feature, or accidentally triggering it when a literal \`?\` or \`*\` was intended.

## Real-world Data Analyst use cases

- **Text analysis:** flagging rows containing a keyword regardless of how it was capitalized, such as scanning support tickets or free-text survey responses.

## Related concepts

\`\`\`
FIND → SEARCH ← you are here → TEXTJOIN
\`\`\`

## Practice questions

### Easy
1. When would SEARCH find a match that FIND would miss?

### Interview/Advanced
2. Why might \`=ISNUMBER(SEARCH("refund",A2))\` be a more useful formula than \`=SEARCH("refund",A2)\` alone for a flagging task?

<details><summary><strong>Answer / Solution</strong></summary>

1. When the target text and the source text differ only in casing (e.g., searching for "sale" within text containing "SALE") — FIND would fail to match due to its case sensitivity, while SEARCH succeeds.
2. SEARCH alone returns either a position number or a \`#VALUE!\` error, which is awkward to use directly in a TRUE/FALSE flagging formula — wrapping it in ISNUMBER converts that into a clean TRUE (found) or FALSE (not found), ready to use directly in an IF or as a filter condition.

</details>

## 🎤 Interview preparation

**Q: Why default to SEARCH over FIND for a keyword-flagging task?**
Short answer: Real text data has inconsistent casing, and SEARCH's case-insensitivity avoids silently missing a match just because of a capitalization difference — FIND's case sensitivity is a good fit only when case genuinely needs to be distinguished.

## Best practices

- Default to SEARCH over FIND unless case sensitivity is specifically required.
- Wrap with ISNUMBER to convert a SEARCH result into a clean TRUE/FALSE flag.

---

### ⚡ Quick Revision

**SEARCH(find_text, within_text)** → position of a substring, case-INsensitive (unlike FIND)
**Pattern:** \`=ISNUMBER(SEARCH("keyword",text))\` → clean TRUE/FALSE flag
`,
});

createSkill('textjoin-function', {
  title: 'TEXTJOIN Function',
  category: 'Spreadsheets',
  what_is_it: 'Joining multiple text values together with a chosen separator, while automatically skipping any empty cells in the range.',
  why_it_matters: 'It solves CONCAT\'s biggest practical annoyance — manually handling separators and blank values when joining more than 2-3 cells.',
  prerequisites: ['search-function'],
  objectives: ['Join a range of text values with a separator using TEXTJOIN', 'Explain how TEXTJOIN handles blank cells differently from CONCAT'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-textjoin-1', title: 'Build an address from multiple fields', description: 'Join street, city, and state fields (where state is sometimes blank) into one clean address using TEXTJOIN.' }],
  verify: ['TEXTJOIN correctly joins values with the specified separator', 'Blank cells are skipped, not shown as an empty extra separator'],
  note: `
## 🎯 What is it?

**TEXTJOIN** joins multiple text values together with a chosen separator, and automatically **skips any empty cells** in the range — solving [CONCAT](/skills/concat-function)'s biggest practical annoyance when joining more than 2-3 values.

## 💡 Why is it important?

CONCAT requires manually adding a separator between every single value, and doesn't skip blanks — joining 5 fields where 2 might be empty produces a messy result with doubled-up separators. TEXTJOIN handles both problems in one function call.

## Syntax

\`\`\`
=TEXTJOIN(delimiter, ignore_empty, text1, [text2], ...)
\`\`\`

- **delimiter** — the separator to place between values (e.g., \`", "\`).
- **ignore_empty** — \`TRUE\` to skip blank cells automatically (almost always what you want), \`FALSE\` to include them as empty entries.

## 📊 Example

| | A | B | C |
|---|---|---|---|
| 1 | Street | City | State |
| 2 | 123 Main St | Springfield | *(blank)* |

**Formula:** \`=TEXTJOIN(", ",TRUE,A2:C2)\`
**Result:** \`"123 Main St, Springfield"\`

**Explanation:** The blank State cell is automatically skipped — no dangling extra comma at the end, which a manual CONCAT formula would have required extra logic to avoid.

## Multiple examples

**Beginner:** \`=TEXTJOIN(" ",TRUE,A2,B2)\` — join a first and last name with a space, functionally similar to CONCAT for just 2 values.
**Intermediate:** \`=TEXTJOIN(", ",TRUE,A2:E2)\` — join 5 fields with a comma separator, letting TEXTJOIN handle any blanks automatically.
**Real-world:** Building a full mailing address from separate street/city/state/zip columns where some records are missing a secondary address line — TEXTJOIN produces a clean, correctly-punctuated address for every row without a custom IF-based formula to handle the missing field.

## ⚠️ Common mistakes

- **Using CONCAT (or &) for joining many fields with possible blanks**, requiring much more complex manual logic to avoid doubled separators — TEXTJOIN handles this natively.
- **Forgetting the \`ignore_empty\` argument**, or setting it to FALSE without meaning to, which then includes blank entries and produces doubled-up separators exactly like CONCAT would.

## Real-world Data Analyst use cases

- **Data cleaning:** building a clean, combined field (like a full address or a summary tag) from several source columns with inconsistent blanks.

## Related concepts

\`\`\`
SEARCH → TEXTJOIN ← you are here → REPLACE → SUBSTITUTE
\`\`\`
Builds directly on the same joining concept as [CONCAT](/skills/concat-function), adding separator and blank-handling automation.

## Practice questions

### Easy
1. Write a formula that joins A2:C2 with a comma-space separator, skipping blanks.

### Interview/Advanced
2. Why is TEXTJOIN generally preferred over CONCAT/& when joining more than 2-3 fields that might contain blanks?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=TEXTJOIN(", ",TRUE,A2:C2)\`
2. CONCAT/& requires manually inserting a separator between every value and has no built-in way to skip blanks — with several fields where any could be blank, this quickly becomes a complex, error-prone formula; TEXTJOIN handles both the separator placement and blank-skipping automatically in one call.

</details>

## 🎤 Interview preparation

**Q: How does TEXTJOIN improve on CONCAT for joining several fields?**
Short answer: TEXTJOIN takes a separator once and applies it automatically between every value, and can skip blank cells entirely — CONCAT requires manually placing a separator between each value and has no blank-handling logic at all.

## Best practices

- Prefer TEXTJOIN over CONCAT/& whenever joining more than 2 values, or when any value might be blank.

---

### ⚡ Quick Revision

**TEXTJOIN(delimiter, ignore_empty, range)** → joins values with a separator, auto-skips blanks if TRUE
**Advantage over CONCAT:** no manual separator placement, no doubled-up separators from blanks
`,
});

createSkill('replace-function', {
  title: 'REPLACE Function',
  category: 'Spreadsheets',
  what_is_it: 'Replacing part of a text value by position — a fixed starting character and length — regardless of what the existing characters actually are.',
  why_it_matters: 'The right tool when what needs changing is defined by a fixed position, like always masking the first 3 digits of an account number, rather than by matching specific text.',
  prerequisites: ['textjoin-function'],
  objectives: ['Use REPLACE to change characters at a known position', 'Explain when REPLACE fits better than SUBSTITUTE'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-replace-1', title: 'Mask an account number', description: 'Mask the first 4 digits of an account number column with asterisks using REPLACE, for a shared, less-sensitive report.' }],
  verify: ['REPLACE correctly changes only the intended positional range', 'Formula works across the whole column, not just one example'],
  note: `
## 🎯 What is it?

**REPLACE** changes part of a text value by **position** — a fixed starting character and a fixed length — regardless of what the existing characters at that position actually are.

## 💡 Why is it important?

It's the right tool when what needs changing is defined by a fixed *position* (like always masking the first 4 digits of an account number for privacy), rather than by matching specific text — which is [SUBSTITUTE](/skills/substitute-function)'s job instead.

## Syntax

\`\`\`
=REPLACE(old_text, start_num, num_chars, new_text)
\`\`\`

- **start_num** — the character position to begin replacing at.
- **num_chars** — how many characters to replace.
- **new_text** — what to put in their place.

## 📊 Example

| | A |
|---|---|
| 1 | 1234567890 |

**Formula:** \`=REPLACE(A1,1,4,"****")\`
**Result:** \`"****567890"\` — the first 4 characters are replaced with asterisks, regardless of what those original digits were.

## Multiple examples

**Beginner:** \`=REPLACE(A2,1,1,"X")\` — replace just the first character with "X".
**Real-world:** \`=REPLACE(account_number,1,4,"****")\` applied down a whole column of account numbers for a shared report, masking the first 4 digits of every account number for privacy, regardless of each account number's specific digits.

## ⚠️ Common mistakes

- **Using REPLACE when the text to change isn't always in the same position.** Since REPLACE blindly replaces by position, it will corrupt the value if row lengths or formats vary — [SUBSTITUTE](/skills/substitute-function) (matching by text) is safer for inconsistent formats.
- **Miscounting the start position or length**, replacing the wrong characters — always test against a real example before applying broadly.

## Real-world Data Analyst use cases

- **Privacy/masking:** masking a fixed-position portion of a sensitive identifier (account number, SSN) for a report with broader visibility.

## Related concepts

\`\`\`
TEXTJOIN → REPLACE ← you are here → SUBSTITUTE
\`\`\`
This closes the Text Functions group.

## Practice questions

### Easy
1. Write a formula that replaces the first 2 characters of A1 with "XX".

### Interview/Advanced
2. When would REPLACE be a better choice than SUBSTITUTE?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=REPLACE(A1,1,2,"XX")\`
2. When the text to change is defined by a fixed, known *position* rather than a specific matching string — e.g., always masking the first N characters of every value, regardless of what those specific characters happen to be, which SUBSTITUTE (matching by text) can't express directly.

</details>

## 🎤 Interview preparation

**Q: What's the core difference between REPLACE and SUBSTITUTE?**
Short answer: REPLACE changes characters at a specific *position*; SUBSTITUTE changes a specific *matching piece of text* wherever it appears — one is position-based, the other is content-based.

## Best practices

- Use REPLACE only when every row's format is consistent enough for a fixed position to be reliable.

---

### ⚡ Quick Revision

**REPLACE(text, start, length, new)** → replace by fixed position
**vs. SUBSTITUTE:** REPLACE is position-based, SUBSTITUTE is content-based (matches specific text)
`,
});

createSkill('substitute-function', {
  title: 'SUBSTITUTE Function',
  category: 'Spreadsheets',
  what_is_it: 'Replacing a specific matching piece of text wherever it appears within a value, or a specific occurrence of it.',
  why_it_matters: 'The go-to tool for fixing a recurring character or word across a whole column — like stripping a currency symbol from an exported price field.',
  prerequisites: ['replace-function'],
  objectives: ['Use SUBSTITUTE to replace a specific piece of matching text', 'Use the optional instance_num argument to replace only one occurrence'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-substitute-1', title: 'Clean a formatted price field', description: 'Given a price column stored as text with a currency symbol and thousands separator, use nested SUBSTITUTE calls to strip both into a usable number.' }],
  verify: ['SUBSTITUTE correctly replaces the matching text throughout the value', 'Multiple substitutions are correctly nested when more than one target needs removing'],
  note: `
## 🎯 What is it?

**SUBSTITUTE** replaces a specific matching piece of text wherever it appears within a value — or a specific occurrence of it, using the optional 4th argument.

## 💡 Why is it important?

It's the go-to tool for fixing a recurring character or word across a whole column — stripping a currency symbol from an exported price field, or standardizing a delimiter — something [REPLACE](/skills/replace-function)'s position-based approach can't do when the target text isn't always in the same spot.

## Syntax

\`\`\`
=SUBSTITUTE(text, old_text, new_text, [instance_num])
\`\`\`

- Without \`instance_num\`, **every** occurrence of \`old_text\` is replaced.
- With \`instance_num\`, only that specific occurrence (1st, 2nd, etc.) is replaced.

## 📊 Example

| | A |
|---|---|
| 1 | $1,200.00 |

**Formula:** \`=SUBSTITUTE(SUBSTITUTE(A1,"$",""),",","")\`
**Result:** \`"1200.00"\` — both the \`$\` and the \`,\` are stripped, in two nested SUBSTITUTE calls, leaving a value that can be converted to a real number with [VALUE](/skills/spreadsheet-data-types).

## Multiple examples

**Beginner:** \`=SUBSTITUTE(A2,"-","/")\` — swap all dashes for slashes.
**Intermediate:** \`=SUBSTITUTE(A2,"NA","N/A")\` — note SUBSTITUTE is case-sensitive by default, so this won't touch "na" in lowercase.
**Real-world:** \`=VALUE(SUBSTITUTE(SUBSTITUTE(price_text,"$",""),",",""))\` applied across an entire price column exported as text with currency formatting, converting every row into a real, usable number in one pass.

## ⚠️ Common mistakes

- **Forgetting SUBSTITUTE is case-sensitive by default.** \`SUBSTITUTE(A2,"NA","N/A")\` won't touch "na" in lowercase — combine with UPPER/LOWER if case-insensitive replacement is intended.
- **Needing to remove more than one distinct thing and forgetting to nest multiple SUBSTITUTE calls** — each SUBSTITUTE only handles one target string per call.
- **Not realizing SUBSTITUTE replaces every occurrence by default**, which can be wrong if only a specific instance should change — use the \`instance_num\` argument for that case.

## Real-world Data Analyst use cases

- **Finance analysis:** stripping currency symbols and thousand-separators from an exported price field before converting to a usable number.
- **Data cleaning:** standardizing a delimiter (dashes to slashes) across a text-based date or ID column.

## Related concepts

\`\`\`
REPLACE → SUBSTITUTE ← you are here
\`\`\`
This closes the Text Functions group — all 15 topics (UPPER, LOWER, PROPER, TRIM, CLEAN, LEFT, RIGHT, MID, LEN, FIND, SEARCH, CONCAT, TEXTJOIN, REPLACE, SUBSTITUTE) are now covered.

## Practice questions

### Easy
1. Write a formula that replaces all dashes with slashes in A1.

### Medium
2. Given a price stored as text like "$1,200.00", write a formula that returns it as a usable number.

### Interview/Advanced
3. When would REPLACE be a better choice than SUBSTITUTE, and vice versa?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=SUBSTITUTE(A1,"-","/")\`
2. \`=VALUE(SUBSTITUTE(SUBSTITUTE(A1,"$",""),",",""))\`
3. REPLACE fits when the target is defined by a fixed *position* (e.g., always the first 3 characters); SUBSTITUTE fits when the target is defined by *matching specific text* (e.g., every dollar sign), regardless of where it appears.

</details>

## 🎤 Interview preparation

**Q: How would you clean a price column exported as text with a dollar sign and comma?**
Short answer: Nest two SUBSTITUTE calls — one removing the \`$\`, another removing the \`,\` — then wrap the result in VALUE to convert it into a real, usable number.

## Interview traps / tricky points

- SUBSTITUTE's case sensitivity and its "replace every occurrence by default" behavior are both common, easy-to-miss gotchas worth mentioning proactively.

## Best practices

- Nest multiple SUBSTITUTE calls when more than one character/string needs cleaning in the same field.
- Convert a cleaned numeric-looking text value with VALUE() so it can actually be summed/averaged, not just displayed.

---

### ⚡ Quick Revision

**SUBSTITUTE(text, old, new, [instance])** → replace by matching text, every occurrence by default
**vs. REPLACE:** SUBSTITUTE is content-based, REPLACE is position-based
`,
});
