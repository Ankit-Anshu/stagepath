// data_analyst_roadmap_curriculum.md — Section 02.5 "Lookup & Reference".
// XLOOKUP/VLOOKUP/HLOOKUP/INDEX/MATCH/INDEX+MATCH/XMATCH already exist.
// Only Exact Match, Approximate Match, and Lookup Errors are genuinely
// new — the concepts underlying every lookup function's match behavior
// and its most common failure mode.
import { createSkill } from './_create.mjs';

createSkill('exact-match', {
  title: 'Exact Match',
  category: 'Spreadsheets',
  what_is_it: 'Looking up a value that must match the search key precisely — no rounding, no "closest value" — the default and safest match mode for nearly every lookup.',
  why_it_matters: 'It\'s the setting most lookup formulas need, and forgetting to specify it explicitly (defaulting to approximate match instead) is one of the most common causes of a silently wrong VLOOKUP result.',
  prerequisites: ['xmatch-function'],
  objectives: [
    'Explain what exact match means in a lookup function',
    'Set VLOOKUP/HLOOKUP/MATCH to exact match mode explicitly',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-exact-match-1', title: 'Force exact match', description: 'Given a VLOOKUP formula missing its 4th argument, add FALSE to force exact match and explain why it matters.' },
  ],
  verify: ['Can explain what exact match means', 'Can set exact match explicitly in VLOOKUP, HLOOKUP, and MATCH'],
  note: `
## 🎯 What is it?

**Exact match** means a lookup only returns a result when it finds a value that matches the search key *precisely* — not the closest value, not a rounded value, an exact one. It's controlled explicitly in most lookup functions: \`FALSE\` (or \`0\`) in VLOOKUP/HLOOKUP/MATCH's last argument, and XLOOKUP/XMATCH default to it automatically.

## 💡 Why is it important?

- It's the setting nearly every real-world lookup needs — looking up a customer ID, a product SKU, or an exact category name all require exact match.
- Forgetting to specify it in VLOOKUP/HLOOKUP (which default to approximate match if the argument is omitted) is one of the most common causes of a silently wrong result — the formula doesn't error, it just quietly returns the wrong row.

## Syntax

\`\`\`
=VLOOKUP(lookup_value, table_array, col_index, FALSE)   ← FALSE = exact match
=MATCH(lookup_value, lookup_array, 0)                     ← 0 = exact match
=XLOOKUP(lookup_value, lookup_array, return_array)         ← exact match by default
\`\`\`

## 📊 Example

Looking up a specific customer ID \`10452\` in a customer table with \`VLOOKUP(10452, table, 2, FALSE)\` returns the row where the ID matches exactly — if \`10452\` doesn't exist in the table, the formula correctly returns \`#N/A\` rather than guessing at the closest ID, which would be meaningless for an identifier like this.

## ⚠️ Common mistakes

- **Omitting VLOOKUP's 4th argument**, silently defaulting to approximate match — this is one of the single most common real-world spreadsheet bugs.
- **Assuming exact match means "case-sensitive."** Standard exact match in VLOOKUP/MATCH is case-*insensitive* — "Amir" and "AMIR" are treated as the same match.

## Related concepts

\`\`\`
XMATCH
  ↓
Exact Match ← you are here
  ↓
Approximate Match
\`\`\`

## 🎤 Interview preparation

**Q: Why is it risky to omit VLOOKUP's 4th argument?**
Short answer: Omitting it defaults to approximate match, which can silently return the wrong row for a value that doesn't exist exactly in the table — always pass \`FALSE\` explicitly unless approximate match is genuinely intended.

---

### ⚡ Quick Revision

**Exact match** → \`FALSE\`/\`0\` in VLOOKUP/HLOOKUP/MATCH; the default in XLOOKUP/XMATCH
The setting almost every real-world lookup needs — never rely on it being the default in VLOOKUP.
`,
});

createSkill('approximate-match', {
  title: 'Approximate Match',
  category: 'Spreadsheets',
  what_is_it: 'Looking up the closest value less than or equal to the search key, in a sorted list — used for tiered lookups like tax brackets or grading scales.',
  why_it_matters: 'It\'s the right tool for range-based lookups (which bracket does this value fall into?) but requires a sorted list and is easy to use by accident when exact match was actually needed.',
  prerequisites: ['exact-match'],
  objectives: [
    'Explain what approximate match means and when it\'s appropriate',
    'Use approximate match for a tiered/bracket lookup',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-approximate-match-1', title: 'Build a tax bracket lookup', description: 'Given a sorted table of income brackets and rates, use an approximate-match VLOOKUP to find the correct rate for a given income.' },
  ],
  verify: ['Can explain what approximate match means', 'Can build a working bracket/tier lookup using approximate match'],
  note: `
## 🎯 What is it?

**Approximate match** finds the closest value *less than or equal to* the search key, in a list that must be sorted ascending. It's controlled with \`TRUE\` (or \`1\`) in VLOOKUP/HLOOKUP, or omitting/using \`1\` in MATCH.

## 💡 Why is it important?

- It's exactly the right tool for tiered/range-based lookups — which tax bracket, which grade band, which shipping-cost tier a value falls into — where you're not looking for an exact match, but "which range does this fall in."
- It requires the lookup list to be sorted ascending — using it on unsorted data produces unpredictable, often wrong results.

## Syntax

\`\`\`
=VLOOKUP(lookup_value, table_array, col_index, TRUE)   ← TRUE = approximate match
\`\`\`

## 📊 Example

A tax bracket table (sorted ascending by income threshold):

| Income ≥ | Rate |
|---|---|
| 0 | 10% |
| 50,000 | 20% |
| 100,000 | 30% |

\`=VLOOKUP(72000, table, 2, TRUE)\` → \`20%\` — it finds the largest threshold *less than or equal to* 72,000 (which is 50,000), and returns its rate.

## ⚠️ Common mistakes

- **Using approximate match on unsorted data** — the function's result becomes unpredictable and often silently wrong, since it depends on the list being sorted ascending.
- **Using approximate match by accident when exact match was needed** — e.g., leaving VLOOKUP's 4th argument blank (which defaults to approximate) when looking up a specific ID, silently returning the "closest" ID instead of erroring on a true mismatch.

## Related concepts

\`\`\`
Exact Match
  ↓
Approximate Match ← you are here
  ↓
Lookup Errors
\`\`\`

## 🎤 Interview preparation

**Q: When would you deliberately use approximate match instead of exact match?**
Short answer: For range/tier-based lookups — like tax brackets or grading scales — where you want "the bracket this value falls into," not an exact match; the source list must be sorted ascending for this to work correctly.

---

### ⚡ Quick Revision

**Approximate match** → \`TRUE\`/\`1\`; finds the closest value ≤ the search key
Requires the lookup list to be sorted ascending — the right tool for tiers and brackets, not identifiers.
`,
});

createSkill('lookup-errors', {
  title: 'Lookup Errors',
  category: 'Spreadsheets',
  what_is_it: 'The common error values a lookup formula can return — most often #N/A — and how to read and fix each one.',
  why_it_matters: 'A lookup error left unhandled can silently break every formula downstream of it — knowing what each error means is the fastest way to diagnose and fix a broken lookup.',
  prerequisites: ['approximate-match'],
  objectives: [
    'Identify the meaning of #N/A, #REF!, and #VALUE! in a lookup context',
    'Wrap a lookup formula in IFERROR to handle a missing match gracefully',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-lookup-errors-1', title: 'Diagnose a broken lookup', description: 'Given a VLOOKUP returning #N/A, identify the likely cause and fix it, then wrap the formula in IFERROR for a cleaner fallback.' },
  ],
  verify: ['Can explain what #N/A means in a lookup', 'Can wrap a lookup in IFERROR to handle a missing match'],
  note: `
## 🎯 What is it?

**Lookup errors** are the error values a lookup formula returns when something goes wrong. The most common by far is \`#N/A\` — "value not found" — but \`#REF!\` and \`#VALUE!\` can also appear depending on the mistake.

## 💡 Why is it important?

- A lookup error left unhandled can silently break every formula that depends on it downstream — a summary total referencing a cell showing \`#N/A\` also shows an error.
- Correctly diagnosing *which* error appeared, and why, is the fastest way to fix a broken lookup instead of guessing.

## Core concept

| Error | Common cause |
|---|---|
| \`#N/A\` | The lookup value genuinely isn't in the source range (typo, mismatched spacing, or it really doesn't exist) |
| \`#REF!\` | The formula references a column/row that's been deleted |
| \`#VALUE!\` | An argument is the wrong data type (e.g., a text col_index) |

Wrapping a lookup in **IFERROR** turns a raw error into a clean fallback: \`=IFERROR(VLOOKUP(...), "Not found")\`.

## 📊 Example

\`=VLOOKUP("Amri", table, 2, FALSE)\` returns \`#N/A\` if the table actually contains "Amir" — a simple typo causes a real, diagnosable lookup failure, not a bug in the formula itself. \`=IFERROR(VLOOKUP("Amri", table, 2, FALSE), "Not found")\` returns the friendlier "Not found" instead of a raw \`#N/A\`.

## ⚠️ Common mistakes

- **Wrapping every lookup in IFERROR by default**, which can hide a genuine bug (like a broken range reference) behind a generic fallback message instead of surfacing it for debugging.
- **Assuming \`#N/A\` always means "the formula is broken"** — it usually means the value legitimately isn't in the source data (a typo, extra whitespace, or a mismatched data type like text "123" vs. number 123).
- **Not checking for hidden whitespace or mismatched data types** as the cause of an unexpected \`#N/A\`, which is one of the most common real-world lookup failure causes.

## Related concepts

\`\`\`
Approximate Match
  ↓
Lookup Errors ← you are here
\`\`\`
This closes the Lookup & Reference chapter — the next chapter (Text Functions) covers cleaning up exactly the kind of messy text (extra whitespace, inconsistent casing) that often causes lookup errors in the first place.

## 🎤 Interview preparation

**Q: A VLOOKUP returns #N/A even though the value visually appears in the source table. What would you check first?**
Short answer: Check for hidden whitespace, mismatched data types (text "123" vs. numeric 123), or inconsistent capitalization/formatting — these are the most common causes of an #N/A that looks like it "shouldn't" happen.

---

### ⚡ Quick Revision

**#N/A** → value not found · **#REF!** → referenced range was deleted · **#VALUE!** → wrong argument type
Use IFERROR for a clean fallback, but don't let it hide a genuine bug.
`,
});

console.log('Created 3 new Lookup & Reference (2.5) skills.');
