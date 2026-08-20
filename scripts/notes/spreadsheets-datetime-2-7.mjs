// data_analyst_roadmap_curriculum.md — Section 02.7 "Date & Time".
// TODAY/NOW/DATE/YEAR/MONTH/DAY/DATEDIF/EOMONTH/working-days already
// exist. WEEKDAY, WEEKNUM, EDATE, and Date Differences are new.
import { createSkill } from './_create.mjs';

createSkill('weekday-function', {
  title: 'WEEKDAY Function',
  category: 'Spreadsheets',
  what_is_it: 'Returning which day of the week a date falls on, as a number (1-7 by default).',
  why_it_matters: 'It\'s how you identify weekends, flag Monday-specific reports, or build any logic that depends on which day of the week a date is.',
  prerequisites: ['day-function'],
  objectives: [
    'Return a date\'s day of the week with WEEKDAY',
    'Use WEEKDAY to flag weekend dates',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-weekday-1', title: 'Flag weekends', description: 'Given a column of dates, use WEEKDAY inside an IF to flag which ones fall on a Saturday or Sunday.' },
  ],
  verify: ['Can return a date\'s weekday number', 'Can use WEEKDAY to identify weekend dates'],
  note: `
## 🎯 What is it?

**WEEKDAY** returns which day of the week a date falls on, as a number. By default, \`1\` = Sunday through \`7\` = Saturday, though an optional second argument can change the numbering scheme.

## 💡 Why is it important?

- It's the standard way to identify weekends, flag Monday-specific reports, or build any logic that depends on the day of the week — like excluding weekends from a business-day calculation.

## Syntax

\`\`\`
=WEEKDAY(date, [return_type])
\`\`\`

\`return_type\` \`1\` (default): 1=Sunday...7=Saturday. \`return_type\` \`2\`: 1=Monday...7=Sunday.

## 📊 Example

| | A |
|---|---|
| 1 | 2024-03-14 (a Thursday) |

\`=WEEKDAY(A1)\` → \`5\` (Thursday, with Sunday=1)
\`=WEEKDAY(A1, 2)\` → \`4\` (Thursday, with Monday=1)

Flagging weekends: \`=IF(OR(WEEKDAY(A1)=1, WEEKDAY(A1)=7), "Weekend", "Weekday")\`

## ⚠️ Common mistakes

- **Assuming WEEKDAY always starts the week on Monday** — the default \`return_type\` starts on Sunday; always check or specify the return type explicitly to avoid off-by-one weekend/weekday misclassification.
- **Hardcoding weekday numbers without documenting which \`return_type\` was used**, making the formula's meaning unclear to a future reader.

## Related concepts

\`\`\`
DAY
  ↓
WEEKDAY ← you are here
  ↓
WEEKNUM
\`\`\`

## 🎤 Interview preparation

**Q: How would you flag which rows in a dataset fall on a weekend?**
Short answer: \`=IF(OR(WEEKDAY(date_cell)=1, WEEKDAY(date_cell)=7), "Weekend", "Weekday")\` — using the default Sunday=1 numbering, or adjust the check if using a different \`return_type\`.

---

### ⚡ Quick Revision

**WEEKDAY(date, [return_type])** → returns the day of the week as a number
Default: Sunday=1...Saturday=7 — double-check the return_type before assuming a numbering scheme.
`,
});

createSkill('weeknum-function', {
  title: 'WEEKNUM Function',
  category: 'Spreadsheets',
  what_is_it: 'Returning which numbered week of the year a date falls in (1-52 or 53).',
  why_it_matters: 'It\'s how weekly reports group and compare data by calendar week rather than by exact date range.',
  prerequisites: ['weekday-function'],
  objectives: [
    'Return a date\'s week number with WEEKNUM',
    'Use WEEKNUM to group data into weekly buckets',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-weeknum-1', title: 'Group by week', description: 'Given a column of daily transaction dates, add a WEEKNUM column and use it to group/summarize revenue by week.' },
  ],
  verify: ['Can return a date\'s week number', 'Can use WEEKNUM to group dates into weekly buckets'],
  note: `
## 🎯 What is it?

**WEEKNUM** returns which numbered week of the year a date falls in — a value from 1 to 52 (or 53 in some years), based on which week-numbering system is specified.

## 💡 Why is it important?

- It's how weekly reports group and compare data by calendar week — "Week 11 revenue vs. Week 10 revenue" — instead of manually working with exact date ranges.
- Combined with YEAR, it enables grouping data into consistent weekly buckets across a pivot table or summary formula.

## Syntax

\`\`\`
=WEEKNUM(date, [return_type])
\`\`\`

\`return_type\` controls which day the week starts on (commonly \`1\` for Sunday-start, \`2\` for Monday-start).

## 📊 Example

| | A |
|---|---|
| 1 | 2024-03-14 |

\`=WEEKNUM(A1)\` → \`11\` (the 11th week of 2024, Sunday-start numbering)

Grouping revenue by week: \`=SUMPRODUCT((WEEKNUM($A$2:$A$100)=11)*($B$2:$B$100))\` sums revenue for only the rows falling in week 11.

## ⚠️ Common mistakes

- **Comparing week numbers across different years without also checking the year** — "Week 11" alone is ambiguous without knowing which year, since every year has its own Week 11.
- **Mixing return_type conventions inconsistently** across a workbook, causing week boundaries to shift depending on which formula is used.

## Related concepts

\`\`\`
WEEKDAY
  ↓
WEEKNUM ← you are here
  ↓
DATEDIF
\`\`\`

## 🎤 Interview preparation

**Q: How would you build a "revenue by week" summary from daily transaction data?**
Short answer: Add a WEEKNUM (and YEAR, to disambiguate across years) column to the transaction data, then group/summarize revenue by that combination — either with a pivot table or a SUMIFS/SUMPRODUCT formula.

---

### ⚡ Quick Revision

**WEEKNUM(date, [return_type])** → returns the week number of the year (1-52/53)
Always pair with YEAR when comparing across multiple years.
`,
});

createSkill('edate-function', {
  title: 'EDATE Function',
  category: 'Spreadsheets',
  what_is_it: 'Calculating a date a specified number of months before or after a given date — the month-based counterpart to simple date addition.',
  why_it_matters: 'It correctly handles month-length differences (like January 31 + 1 month) that simple day-based addition would get wrong.',
  prerequisites: ['weeknum-function'],
  objectives: [
    'Calculate a date N months in the future or past with EDATE',
    'Explain why EDATE handles month-length differences correctly',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-edate-1', title: 'Calculate a renewal date', description: 'Given a subscription start date, use EDATE to calculate the renewal date 12 months later.' },
  ],
  verify: ['Can calculate a future/past date with EDATE', 'Can explain why simply adding 30 days is not equivalent to adding 1 month'],
  note: `
## 🎯 What is it?

**EDATE** calculates a date a specified number of months before or after a given date — correctly handling the fact that months have different lengths, which simple day-based addition (\`date + 30\`) gets wrong.

## 💡 Why is it important?

- Adding "30 days" is not the same as adding "1 month" — EDATE correctly lands on the same day-of-month in the target month (or the last valid day, if the target month is shorter).
- It's the standard way to calculate renewal dates, payment due dates, or any recurring monthly schedule.

## Syntax

\`\`\`
=EDATE(start_date, months)
\`\`\`

A positive \`months\` moves forward; a negative \`months\` moves backward.

## 📊 Example

\`=EDATE(DATE(2024,1,31), 1)\` → \`2024-02-29\` (2024 is a leap year) — EDATE correctly lands on the last valid day of February, since February 31 doesn't exist. Simply adding 30 days to January 31 would instead land on March 1, which is not "one month later" in the calendar sense.

## ⚠️ Common mistakes

- **Using \`date + 30\` as a substitute for "one month later"** — this drifts across months of different lengths and produces the wrong date for many use cases (like billing cycles).
- **Forgetting EDATE returns a date serial number**, which may need a date number format applied to display correctly rather than showing as a raw number.

## Related concepts

\`\`\`
WEEKNUM
  ↓
EDATE ← you are here
  ↓
EOMONTH
\`\`\`

## 🎤 Interview preparation

**Q: Why is \`EDATE(date, 1)\` more reliable than \`date + 30\` for calculating "one month later"?**
Short answer: Months have different lengths (28-31 days), so adding a fixed 30 days drifts away from the actual same-day-next-month — EDATE correctly accounts for each month's real length, including landing on the last valid day when the target month is shorter.

---

### ⚡ Quick Revision

**EDATE(start_date, months)** → the date N months before/after start_date
Correctly handles month-length differences — never approximate "1 month" as "30 days."
`,
});

createSkill('date-differences', {
  title: 'Date Differences',
  category: 'Spreadsheets',
  what_is_it: 'Calculating the gap between two dates — in days with simple subtraction, or in months/years with DATEDIF — and choosing the right unit for the question being asked.',
  why_it_matters: 'It\'s one of the most common real calculations (tenure, age, days since last purchase, turnaround time) and easy to get subtly wrong by picking the wrong unit or method.',
  prerequisites: ['edate-function'],
  objectives: [
    'Calculate the number of days between two dates with subtraction',
    'Choose between simple subtraction and DATEDIF based on the unit needed',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-date-differences-1', title: 'Calculate tenure', description: 'Given a hire date and today\'s date, calculate both the number of days employed and the number of full years employed.' },
  ],
  verify: ['Can calculate days between two dates with subtraction', 'Can choose the right method for a given date-difference question'],
  note: `
## 🎯 What is it?

**Date differences** covers calculating the gap between two dates. For a simple day count, subtracting one date from another works directly (\`end_date - start_date\`). For a difference in complete months or years, DATEDIF (covered separately) is the more precise tool.

## 💡 Why is it important?

- It's one of the most common real-world calculations — tenure, age, days since last purchase, support ticket turnaround time — and choosing the wrong method for the unit needed is an easy, common mistake.
- Dates are stored as serial numbers internally, which is exactly why subtracting two dates directly gives a meaningful day count.

## Core concept

| Need | Method |
|---|---|
| Number of days between two dates | \`=end_date - start_date\` |
| Number of complete months/years between two dates | \`=DATEDIF(start_date, end_date, "unit")\` |
| Business days only (excluding weekends) | \`NETWORKDAYS\` (see Workday Calculations) |

## 📊 Example

Start date: 2024-01-15. End date: 2024-03-20.

\`=end_date - start_date\` → \`65\` (total calendar days)
\`=DATEDIF(start_date, end_date, "m")\` → \`2\` (complete months)

Both are "correct" — they just answer different questions. A tenure report asking "how many days has this customer been active?" wants the first; one asking "how many full months?" wants the second.

## ⚠️ Common mistakes

- **Using simple subtraction when a "complete months/years" figure was actually needed** — 65 days isn't the same information as "2 complete months," and presenting one when the other was asked for misleads.
- **Forgetting that date subtraction requires both cells to actually be true date values**, not text that merely looks like a date — subtracting two text-formatted "dates" produces an error or a nonsensical result.

## Related concepts

\`\`\`
EDATE
  ↓
Date Differences ← you are here
\`\`\`
This closes the Date & Time chapter — the next chapter (Data Cleaning) covers fixing exactly the kind of text-formatted "fake dates" that break date arithmetic like this.

## 🎤 Interview preparation

**Q: You calculate \`end_date - start_date\` and get an error instead of a number. What's the likely cause?**
Short answer: One or both cells likely contain text that merely looks like a date, rather than a true date value — date arithmetic requires both operands to be real dates, not text; converting the text with DATEVALUE or re-entering it as a real date fixes it.

---

### ⚡ Quick Revision

**Simple subtraction** → total days between two dates
**DATEDIF** → complete months/years between two dates
Pick the method that matches the actual unit the question is asking for.
`,
});

console.log('Created 4 new Date & Time (2.7) skills.');
