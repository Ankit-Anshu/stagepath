// data_analyst_roadmap_curriculum.md — Section 02.3 "Logical Functions".
// IF, IFS, AND, OR, IFERROR already exist (from the earlier merged
// "Logic & Conditional" chapter). Only NOT and Nested IF are genuinely
// new — this chapter is being split off from Conditional Aggregation
// (2.4) by rewire-spreadsheets-2-2-and-2-3.mjs.
import { createSkill } from './_create.mjs';

createSkill('not-function', {
  title: 'NOT Function',
  category: 'Spreadsheets',
  what_is_it: 'Reversing a TRUE/FALSE result — turning TRUE into FALSE and FALSE into TRUE.',
  why_it_matters: 'It\'s how you test for the absence of a condition without having to rewrite the condition itself in reverse.',
  prerequisites: ['or-function'],
  objectives: [
    'Reverse a logical test with NOT',
    'Combine NOT with another logical test inside IF',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-not-1', title: 'Flag incomplete records', description: 'Use NOT with ISBLANK to flag rows where a required field is missing.' },
  ],
  verify: ['Can write a NOT formula', 'Can combine NOT with another test inside IF'],
  note: `
## 🎯 What is it?

**NOT** reverses a TRUE/FALSE result — \`NOT(TRUE)\` returns \`FALSE\`, and \`NOT(FALSE)\` returns \`TRUE\`. It's most useful wrapped around another test, to check for the *absence* of a condition.

## 💡 Why is it important?

- It lets you test for the absence of a condition without rewriting the condition itself backward — \`NOT(ISBLANK(A1))\` reads naturally as "A1 is not blank," clearer than trying to invent a direct "is filled in" test.
- It's commonly combined with AND/OR and IF for more precise conditional logic.

## Syntax

\`\`\`
=NOT(logical_test)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | Amir |
| 2 | *(empty)* |

\`=NOT(ISBLANK(A1))\` → \`TRUE\` (A1 is not blank)
\`=NOT(ISBLANK(A2))\` → \`FALSE\` (A2 is blank)

Combined with IF: \`=IF(NOT(ISBLANK(A1)), "Complete", "Missing")\` → \`"Complete"\` for A1.

## ⚠️ Common mistakes

- **Double-negating unnecessarily**, producing a confusing formula like \`NOT(NOT(condition))\` when the original condition alone would have worked.
- **Reaching for NOT when a direct comparison would be clearer** — e.g., \`NOT(A1=B1)\` works, but \`A1<>B1\` (SQL/spreadsheet "not equal" operator) is often more direct for a simple inequality check.

## Related concepts

\`\`\`
OR
  ↓
NOT ← you are here
  ↓
IFERROR
\`\`\`

## 🎤 Interview preparation

**Q: How would you flag rows where a required "email" column is missing?**
Short answer: \`=IF(NOT(ISBLANK(email_cell)), "Complete", "Missing")\` — NOT reverses the blank check, so the formula reads naturally as "if it's not blank."

---

### ⚡ Quick Revision

**NOT(logical_test)** → reverses TRUE/FALSE
Useful for testing the absence of a condition, like "not blank."
`,
});

createSkill('nested-if', {
  title: 'Nested IF',
  category: 'Spreadsheets',
  what_is_it: 'Placing one IF function inside another to test more than one condition in sequence, producing more than two possible outcomes.',
  why_it_matters: "It's how IF handles more than a simple two-way decision — though IFS is usually a cleaner choice once there are more than two or three conditions.",
  prerequisites: ['if-function'],
  objectives: [
    'Write a nested IF with three or more outcomes',
    'Explain why IFS is often preferred over deeply nested IFs',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-nested-if-1', title: 'Grade bands', description: 'Write a nested IF that assigns a letter grade (A/B/C/F) based on a numeric score.' },
  ],
  verify: ['Can write a nested IF with 3+ outcomes', 'Can explain a downside of deeply nested IFs'],
  note: `
## 🎯 What is it?

A **nested IF** places one IF function inside another's TRUE or FALSE branch, letting a formula test more than one condition in sequence and produce more than two possible outcomes.

## 💡 Why is it important?

- A single IF only handles a two-way decision (true/false). Nesting lets it handle three, four, or more outcomes — before IFS existed, this was the only way to do it.
- Understanding nested IF is still useful for reading older spreadsheets, even though IFS (covered separately) is usually the cleaner modern choice.

## Syntax

\`\`\`
=IF(condition1, result1, IF(condition2, result2, result3))
\`\`\`

Each IF's "false" branch becomes another IF, testing the next condition.

## 📊 Example

Assigning a letter grade from a numeric score:

\`\`\`
=IF(A1>=90, "A", IF(A1>=80, "B", IF(A1>=70, "C", "F")))
\`\`\`

Read as: if 90+, "A"; otherwise if 80+, "B"; otherwise if 70+, "C"; otherwise "F". Each nested IF only runs if the previous condition was false.

## ⚠️ Common mistakes

- **Nesting too many IFs**, producing a formula that's hard to read, debug, and maintain — beyond 2–3 levels, IFS is almost always clearer.
- **Forgetting a closing parenthesis for each nested IF** — every opened \`IF(\` needs its own matching \`)\`, and deeply nested formulas make this easy to miscount.
- **Getting the condition order wrong** — conditions are checked in order, so a broad condition placed too early can accidentally catch cases meant for a later, more specific one.

## Related concepts

\`\`\`
IF
  ↓
Nested IF ← you are here
  ↓
IFS (the modern, flatter alternative)
\`\`\`

## 🎤 Interview preparation

**Q: When would you use a nested IF instead of IFS?**
Short answer: Rarely, by choice — IFS is almost always clearer for 3+ conditions. Nested IF is mainly relevant for reading/maintaining older spreadsheets built before IFS existed, or in tools that don't support IFS.

---

### ⚡ Quick Revision

**Nested IF** → \`IF(cond1, result1, IF(cond2, result2, result3))\`
Handles 3+ outcomes, but gets hard to read past 2–3 levels — prefer IFS when available.
`,
});

console.log('Created 2 new Logical Functions (2.3) skills.');
