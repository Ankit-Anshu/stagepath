import { createSkill } from './_create.mjs';

createSkill('today-function', {
  title: 'TODAY Function',
  category: 'Spreadsheets',
  what_is_it: 'Returning the current date, updating automatically every time the spreadsheet recalculates.',
  why_it_matters: 'The building block behind every "days since," "days until," and "as of today" calculation — like tenure or overdue-days formulas.',
  prerequisites: ['substitute-function'],
  objectives: ['Use TODAY to get the current date', 'Explain why TODAY changes automatically without being edited'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-today-1', title: 'Calculate days since signup', description: 'Use TODAY combined with a signup-date column to calculate how many days ago each customer signed up.' }],
  verify: ['TODAY correctly returns the current date', 'Combined formula correctly calculates a duration up to the current date'],
  note: `
## 🎯 What is it?

**TODAY** returns the current date, and updates automatically every time the spreadsheet recalculates — no manual editing needed.

## 💡 Why is it important?

It's the building block behind every "days since," "days until," and "as of today" calculation — like customer tenure, days overdue, or days until a deadline — all of which need to always reflect the *current* date, not a date typed in once and left stale.

## Syntax

\`\`\`
=TODAY()
\`\`\`

Takes no arguments — it simply returns the current date.

## 📊 Example

| | A |
|---|---|
| 1 | 2024-01-05 |

**Formula:** \`=TODAY()-A1\`
**Result:** the number of days between the signup date in A1 and whatever "today" is when the formula is calculated — this result changes automatically every day.

## Multiple examples

**Beginner:** \`=TODAY()\` — display today's date in a cell.
**Intermediate:** \`=DATEDIF(A2,TODAY(),"D")\` — combining TODAY with [DATEDIF](/skills/datedif-function) to compute an always-current duration.
**Real-world:** A dashboard's "days since last order" column, using TODAY so it stays accurate every time the sheet is opened, without anyone manually updating a reference date.

## ⚠️ Common mistakes

- **Confusing TODAY with a typed-in date.** A typed date stays fixed forever; TODAY() recalculates to the actual current date every time the sheet is opened or recalculated.
- **Using TODAY in a report meant to represent a fixed historical snapshot.** If a report needs to always show "as of March 1st" regardless of when it's viewed, a typed-in fixed date is actually more appropriate than TODAY.

## Real-world Data Analyst use cases

- **Any recurring report:** calculating "days since," "days until," or "current age" values that should always reflect the actual current date.

## Related concepts

\`\`\`
Substitute → TODAY ← you are here → NOW → DATE → YEAR/MONTH/DAY
\`\`\`

## Practice questions

### Easy
1. Write a formula that displays today's date.

### Interview/Advanced
2. Why might using TODAY() be the wrong choice in a report meant to represent a fixed historical snapshot?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=TODAY()\`
2. TODAY() always reflects the actual current date whenever the sheet recalculates — a report meant to freeze a specific past moment (e.g., "sales as of March 1st") would show a different, incorrect date if reopened later using TODAY(), so a fixed, typed-in date is more appropriate for that use case.

</details>

## 🎤 Interview preparation

**Q: Why does TODAY() update automatically without anyone editing the cell?**
Short answer: It's a volatile function that recalculates every time the spreadsheet recalculates (on open, on edit, or on manual recalculation), always returning the actual current date rather than a fixed value.

## Best practices

- Use TODAY() for any calculation that should always reflect the current date; use a fixed typed date for a report meant to represent a frozen historical snapshot.

---

### ⚡ Quick Revision

**TODAY()** → current date, updates automatically, no arguments
`,
});

createSkill('now-function', {
  title: 'NOW Function',
  category: 'Spreadsheets',
  what_is_it: 'Returning the current date AND time, updating automatically every time the spreadsheet recalculates.',
  why_it_matters: 'Needed whenever a timestamp — not just a date — matters, like logging exactly when a row was last updated.',
  prerequisites: ['today-function'],
  objectives: ['Use NOW to get the current date and time', 'Explain the difference between TODAY and NOW'],
  estimated_minutes: 15,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-now-1', title: 'Timestamp a data entry', description: 'Add a "last updated" column using NOW that shows the exact date and time each row was last edited.' }],
  verify: ['NOW correctly returns the current date and time'],
  note: `
## 🎯 What is it?

**NOW** returns the current date **and** time, updating automatically every time the spreadsheet recalculates — the time-inclusive counterpart to [TODAY](/skills/today-function).

## 💡 Why is it important?

Needed whenever a precise timestamp — not just a date — matters, such as logging exactly when a row was last updated or when a form response was submitted.

## Syntax

\`\`\`
=NOW()
\`\`\`

Takes no arguments — returns the current date and time together.

## 📊 Example

**Formula:** \`=NOW()\`
**Result (example):** \`2024-01-05 14:32\` — the current date and time at the moment of calculation.

## Multiple examples

**Beginner:** \`=NOW()\` — display the current date and time in a cell.
**Real-world:** A "last refreshed" cell at the top of a dashboard using NOW, so anyone viewing it can immediately see how current the data is.

## ⚠️ Common mistakes

- **Using NOW when only the date matters.** NOW includes a time component that can clutter a report or cause unexpected behavior in a date-only comparison — use TODAY instead if time isn't relevant.
- **Expecting NOW to "freeze" at the moment a row was created.** Like TODAY, NOW recalculates every time the sheet updates — it does not remember the time a formula was first entered; a separate logging approach (or a script) is needed for a true "created at" timestamp that shouldn't change.

## Real-world Data Analyst use cases

- **Dashboard freshness indicators:** showing exactly when a report was last refreshed.

## Related concepts

\`\`\`
TODAY → NOW ← you are here → DATE
\`\`\`

## Practice questions

### Easy
1. What's the difference between TODAY() and NOW()?

<details><summary><strong>Answer / Solution</strong></summary>

1. TODAY() returns just the current date; NOW() returns the current date and time together.

</details>

## 🎤 Interview preparation

**Q: Why would a dashboard use NOW() instead of TODAY() for a "last refreshed" indicator?**
Short answer: A precise timestamp (including time) is more useful for showing data freshness within a single day, which TODAY's date-only output can't convey.

## Best practices

- Use NOW only when the time component genuinely adds value; default to TODAY for date-only needs.

---

### ⚡ Quick Revision

**NOW()** → current date and time, updates automatically
**vs. TODAY():** NOW includes time, TODAY is date-only
`,
});

createSkill('date-function', {
  title: 'DATE Function',
  category: 'Spreadsheets',
  what_is_it: 'Building a real date value from separate year, month, and day numbers.',
  why_it_matters: 'A common need when combining year/month/day values that live in separate columns, or when constructing a specific date dynamically inside a formula.',
  prerequisites: ['now-function'],
  objectives: ['Build a date from separate year, month, and day components with DATE'],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-date-1', title: 'Combine separate date parts', description: 'Given separate Year, Month, and Day columns, use DATE to build one combined, real date value.' }],
  verify: ['DATE correctly constructs a real, usable date value from the three components'],
  note: `
## 🎯 What is it?

**DATE** builds a real, usable date value from separate year, month, and day numbers.

## 💡 Why is it important?

A common need when year/month/day values live in separate columns (a frequent layout in exported data), or when constructing a specific date dynamically inside a larger formula, such as a date-range condition in [SUMIFS](/skills/sumifs-function).

## Syntax

\`\`\`
=DATE(year, month, day)
\`\`\`

## 📊 Example

| | A | B | C |
|---|---|---|---|
| 1 | Year | Month | Day |
| 2 | 2024 | 3 | 15 |

**Formula:** \`=DATE(A2,B2,C2)\`
**Result:** \`2024-03-15\` — a real, calculable date value, not just text that looks like a date.

## Multiple examples

**Beginner:** \`=DATE(2024,1,1)\` — construct a specific fixed date.
**Real-world:** \`=SUMIFS(revenue,order_date,">="&DATE(2024,1,1),order_date,"<"&DATE(2024,2,1))\` — using DATE to dynamically build the boundaries of a date-range condition inside SUMIFS, instead of hardcoding a text string that might not be interpreted as a real date.

## ⚠️ Common mistakes

- **Combining year/month/day with text concatenation instead of DATE**, e.g. \`=A2&"-"&B2&"-"&C2\`, which produces text that *looks* like a date but isn't a real, calculable date value — this breaks any date-math formula applied to it (see [Data Types](/skills/spreadsheet-data-types)).
- **Passing an out-of-range month or day number.** DATE actually handles this gracefully by rolling over (e.g., month 13 becomes January of the next year) — useful, but can be a subtle source of confusion if not expected.

## Real-world Data Analyst use cases

- **Data cleaning:** combining separately-imported year/month/day columns into one real, usable date field.
- **Formula building:** dynamically constructing date boundaries for a SUMIFS or COUNTIFS condition.

## Related concepts

\`\`\`
NOW → DATE ← you are here → YEAR → MONTH → DAY
\`\`\`

## Practice questions

### Easy
1. Write a formula that builds the date March 15, 2024.

### Interview/Advanced
2. Why does \`=A2&"-"&B2&"-"&C2\` (concatenating year/month/day as text) fail to produce a usable date, even if it looks correct?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=DATE(2024,3,15)\`
2. Concatenation produces a text string that visually resembles a date but isn't internally stored as a real date value (see [Data Types](/skills/spreadsheet-data-types)) — any date-math function (like DATEDIF or a date comparison) applied to it will fail or behave unpredictably, since it's not actually a date to the spreadsheet.

</details>

## 🎤 Interview preparation

**Q: Why use DATE instead of concatenating year/month/day as text?**
Short answer: DATE produces a real, calculable date value that works correctly with date-math functions and comparisons — text concatenation only produces something that visually resembles a date, which breaks any genuine date arithmetic applied to it.

## Best practices

- Always use DATE (not text concatenation) when combining separate year/month/day values into one date.

---

### ⚡ Quick Revision

**DATE(year, month, day)** → builds a real, calculable date value
**Never** concatenate year/month/day as text — it only looks like a date
`,
});

createSkill('year-function', {
  title: 'YEAR Function',
  category: 'Spreadsheets',
  what_is_it: 'Extracting just the year number from a full date value.',
  why_it_matters: 'A common building block for grouping or filtering data by year, especially when summarizing multi-year data.',
  prerequisites: ['date-function'],
  objectives: ['Extract the year from a date with YEAR'],
  estimated_minutes: 15,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-year-1', title: 'Group orders by year', description: 'Given an order-date column, use YEAR to create a helper column for grouping orders by year in a pivot table.' }],
  verify: ['YEAR correctly extracts the year from a real date value'],
  note: `
## 🎯 What is it?

**YEAR** extracts just the year number from a full date value.

## 💡 Why is it important?

A common building block for grouping or filtering data by year — especially useful as a helper column when summarizing multi-year data in a report or pivot table.

## Syntax

\`\`\`
=YEAR(date)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | 2024-03-15 |

**Formula:** \`=YEAR(A1)\` → \`2024\`

## Multiple examples

**Beginner:** \`=YEAR(A2)\` — extract the year from an order-date column.
**Real-world:** \`=YEAR(order_date)\` as a helper column used to build a "revenue by year" pivot table or SUMIFS breakdown, without needing a separate lookup or manual grouping.

## ⚠️ Common mistakes

- **Applying YEAR to a text value that only looks like a date** (see [Data Types](/skills/spreadsheet-data-types)) — this will error or return an unexpected result, since YEAR requires a real, underlying date value to work with.

## Real-world Data Analyst use cases

- **Finance analysis:** grouping revenue or expenses by year for a multi-year trend report.

## Related concepts

\`\`\`
DATE → YEAR ← you are here → MONTH → DAY → EOMONTH
\`\`\`

## Practice questions

### Easy
1. Write a formula that extracts the year from A1.

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=YEAR(A1)\`

</details>

## 🎤 Interview preparation

**Q: Why would you add a YEAR helper column before building a pivot table on multi-year data?**
Short answer: It lets the pivot table group and summarize by year directly, without needing a more complex date-grouping configuration, and makes any related SUMIFS/COUNTIFS formulas simpler to write.

## Best practices

- Confirm the source column is a real date (not text) before applying YEAR.

---

### ⚡ Quick Revision

**YEAR(date)** → extracts the year as a number
`,
});

createSkill('month-function', {
  title: 'MONTH Function',
  category: 'Spreadsheets',
  what_is_it: 'Extracting just the month number (1-12) from a full date value.',
  why_it_matters: 'A common building block for grouping data by month, or for building a month-over-month report.',
  prerequisites: ['year-function'],
  objectives: ['Extract the month from a date with MONTH'],
  estimated_minutes: 15,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-month-1', title: 'Group orders by month', description: 'Given an order-date column, use MONTH to create a helper column for a month-over-month revenue breakdown.' }],
  verify: ['MONTH correctly extracts the month number from a real date value'],
  note: `
## 🎯 What is it?

**MONTH** extracts just the month number (1 for January through 12 for December) from a full date value.

## 💡 Why is it important?

A common building block for grouping data by month, or as a component in a month-over-month report or seasonal analysis (see [Forecasting & Trend Analysis](/skills/forecasting-trend-analysis)).

## Syntax

\`\`\`
=MONTH(date)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | 2024-03-15 |

**Formula:** \`=MONTH(A1)\` → \`3\`

## Multiple examples

**Beginner:** \`=MONTH(A2)\` — extract the month number from an order-date column.
**Real-world:** \`=MONTH(order_date)\` combined with YEAR as helper columns, letting a pivot table or SUMIFS breakdown group revenue by year and month together for a full trend view.

## ⚠️ Common mistakes

- **Assuming MONTH returns a month name** (like "March") — it returns a plain number (3); use a TEXT formatting function or a lookup table if a month name is needed for display.
- **Applying MONTH to a text-formatted date** (see [Data Types](/skills/spreadsheet-data-types)), which fails since MONTH requires a real underlying date value.

## Real-world Data Analyst use cases

- **Sales analysis:** building a month-over-month revenue trend using MONTH (and YEAR) as helper columns.

## Related concepts

\`\`\`
YEAR → MONTH ← you are here → DAY → EOMONTH
\`\`\`

## Practice questions

### Easy
1. Write a formula that extracts the month number from A1.

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=MONTH(A1)\`

</details>

## 🎤 Interview preparation

**Q: Does MONTH return a month name or a number?**
Short answer: A number (1-12) — displaying it as a name requires additional text formatting or a lookup, MONTH alone only returns the numeric value.

## Best practices

- Combine YEAR and MONTH together as helper columns for any month-over-month trend analysis spanning multiple years.

---

### ⚡ Quick Revision

**MONTH(date)** → extracts the month as a number (1-12), not a name
`,
});

createSkill('day-function', {
  title: 'DAY Function',
  category: 'Spreadsheets',
  what_is_it: 'Extracting just the day-of-month number from a full date value.',
  why_it_matters: 'Completes the YEAR/MONTH/DAY trio, useful for breaking a date into its three components for grouping or display.',
  prerequisites: ['month-function'],
  objectives: ['Extract the day of the month from a date with DAY'],
  estimated_minutes: 15,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-day-1', title: 'Extract the day of month', description: 'Given an order-date column, use DAY to extract just the day-of-month number for each order.' }],
  verify: ['DAY correctly extracts the day-of-month number from a real date value'],
  note: `
## 🎯 What is it?

**DAY** extracts just the day-of-month number (1-31) from a full date value, completing the trio alongside [YEAR](/skills/year-function) and [MONTH](/skills/month-function).

## 💡 Why is it important?

Useful for breaking a date into its three components, or for a specific analysis question like "which day of the month do most orders come in?" (e.g., checking for a pattern around a monthly payday or billing cycle).

## Syntax

\`\`\`
=DAY(date)
\`\`\`

## 📊 Example

| | A |
|---|---|
| 1 | 2024-03-15 |

**Formula:** \`=DAY(A1)\` → \`15\`

## Multiple examples

**Beginner:** \`=DAY(A2)\` — extract the day-of-month number from a date.
**Real-world:** \`=DAY(order_date)\` used to check whether orders cluster around specific days of the month (like the 1st or 15th), a common pattern tied to payday or billing cycles.

## ⚠️ Common mistakes

- **Confusing DAY (day-of-month, 1-31) with a day-of-week function.** DAY has no awareness of which weekday a date falls on — a separate function (like WEEKDAY) is needed for that.

## Real-world Data Analyst use cases

- **Pattern analysis:** checking whether order or payment timing clusters around specific days of the month.

## Related concepts

\`\`\`
MONTH → DAY ← you are here → EOMONTH → Working Days
\`\`\`

## Practice questions

### Easy
1. Write a formula that extracts the day-of-month number from A1.

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=DAY(A1)\`

</details>

## 🎤 Interview preparation

**Q: What would you check DAY for in a real analysis?**
Short answer: Whether a metric (like orders or payments) clusters around specific days of the month, such as near a common payday or billing date, which YEAR and MONTH alone can't reveal.

## Best practices

- Use DAY specifically for day-of-month pattern questions, not general date sorting (which works fine on the full date value directly).

---

### ⚡ Quick Revision

**DAY(date)** → extracts the day-of-month as a number (1-31)
`,
});

createSkill('eomonth-function', {
  title: 'EOMONTH Function',
  category: 'Spreadsheets',
  what_is_it: 'Finding the last day of a month, a specified number of months before or after a given date — commonly used to find "end of this month" or "end of last month."',
  why_it_matters: 'Manually calculating a month\'s last day is surprisingly fiddly (months have different lengths, leap years complicate February) — EOMONTH handles this reliably in one formula.',
  prerequisites: ['day-function'],
  objectives: ['Find the last day of the current or a nearby month with EOMONTH', 'Use EOMONTH as a date-range boundary in a SUMIFS formula'],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-eomonth-1', title: 'Find month-end deadlines', description: 'Given a list of dates, use EOMONTH to find the last day of each corresponding month for a billing-deadline column.' }],
  verify: ['EOMONTH correctly returns the last day of the intended month', 'Formula correctly handles months of different lengths'],
  note: `
## 🎯 What is it?

**EOMONTH** finds the last day of a month, a specified number of months before or after a given date — commonly used to find "end of this month" or "end of last month" without manually accounting for how many days each month has.

## 💡 Why is it important?

Manually calculating a month's last day is surprisingly fiddly — months have different lengths (28, 29, 30, or 31 days), and leap years complicate February specifically. EOMONTH handles all of this reliably in one formula, with zero manual logic.

## Syntax

\`\`\`
=EOMONTH(start_date, months)
\`\`\`

- **months** — \`0\` for the end of the same month as start_date, a positive number for future months, a negative number for past months.

## 📊 Example

| | A |
|---|---|
| 1 | 2024-02-10 |

**Formula:** \`=EOMONTH(A1,0)\` → \`2024-02-29\` (correctly accounting for 2024 being a leap year)
**Formula:** \`=EOMONTH(A1,-1)\` → \`2024-01-31\` (the last day of the *previous* month)

## Multiple examples

**Beginner:** \`=EOMONTH(TODAY(),0)\` — the last day of the current month.
**Intermediate:** \`=EOMONTH(TODAY(),1)\` — the last day of *next* month, useful for calculating a deadline.
**Real-world:** \`=SUMIFS(revenue,order_date,">="&EOMONTH(TODAY(),-2)+1,order_date,"<="&EOMONTH(TODAY(),-1))\` — dynamically calculating "last month's" full date range for a recurring report, without hardcoding specific dates that would need manual updating every month.

## ⚠️ Common mistakes

- **Manually trying to calculate a month's last day with IF statements accounting for month length and leap years** — EOMONTH replaces all of that fragile logic with one reliable function call.
- **Forgetting EOMONTH returns the last day of the month, not the first.** A common companion need — "first day of the month" — is instead \`=EOMONTH(date,-1)+1\`.

## Real-world Data Analyst use cases

- **Finance analysis:** calculating billing or reporting periods that always align to month boundaries, automatically.
- **Recurring reports:** dynamically defining "last month" or "this month" date ranges without manual date updates each time the report runs.

## Related concepts

\`\`\`
DAY → EOMONTH ← you are here → Working Days
\`\`\`

## Practice questions

### Easy
1. Write a formula for the last day of the current month.

### Interview/Advanced
2. How would you get the *first* day of the current month using EOMONTH?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=EOMONTH(TODAY(),0)\`
2. \`=EOMONTH(TODAY(),-1)+1\` — the last day of the *previous* month, plus one day, lands exactly on the first day of the current month.

</details>

## 🎤 Interview preparation

**Q: Why is EOMONTH more reliable than manually calculating a month's last day?**
Short answer: It automatically accounts for months of different lengths and leap years without any manual conditional logic, eliminating an entire category of easy-to-get-wrong edge cases.

## Best practices

- Use EOMONTH (not manual date math) for any formula needing a reliable month boundary.
- Combine with TODAY() for a recurring report's dynamic "this month" / "last month" date ranges.

---

### ⚡ Quick Revision

**EOMONTH(start_date, months)** → last day of a month, N months before/after start_date
**First day of a month:** \`=EOMONTH(date,-1)+1\`
`,
});

createSkill('working-days', {
  title: 'Working Days',
  category: 'Spreadsheets',
  what_is_it: 'Calculating a duration or a future/past date in terms of business days only, excluding weekends (and optionally holidays), using NETWORKDAYS and WORKDAY.',
  why_it_matters: 'A raw calendar-day duration overstates real business time whenever a weekend falls within the range — NETWORKDAYS and WORKDAY are the correct way to measure or project business-day timelines.',
  prerequisites: ['eomonth-function'],
  objectives: ['Calculate the number of working days between two dates with NETWORKDAYS', 'Calculate a future or past working date with WORKDAY'],
  estimated_minutes: 30,
  resources: ['r-exceljet-functions'],
  practice: [{ id: 'ex-working-days-1', title: 'Calculate a business-day SLA', description: 'Given an order date, use WORKDAY to calculate a shipping deadline exactly 3 business days later, correctly skipping weekends.' }],
  verify: ['NETWORKDAYS correctly excludes weekends from the count', 'WORKDAY correctly skips weekends when projecting a future/past date'],
  note: `
## 🎯 What is it?

**NETWORKDAYS** counts the number of working (business) days between two dates, excluding weekends (and optionally a list of holidays). **WORKDAY** does the reverse — given a start date, it finds a date a specified number of *working* days in the future or past, correctly skipping weekends.

## 💡 Why is it important?

A raw calendar-day duration overstates real business time whenever a weekend falls within the range — a task due "in 5 days" that spans a weekend actually has fewer real working days available than the raw calendar count suggests. NETWORKDAYS and WORKDAY are the correct way to measure or project business-day timelines, like an SLA deadline.

## Syntax

\`\`\`
=NETWORKDAYS(start_date, end_date, [holidays])
=WORKDAY(start_date, days, [holidays])
\`\`\`

- **holidays** (optional) — a range of specific dates to also exclude, beyond just weekends.

## 📊 Example

An order is placed on Thursday, and the SLA is "ship within 3 business days."

**Formula:** \`=WORKDAY(order_date,3)\`

If order_date is a Thursday, WORKDAY correctly skips the weekend and lands on the following Tuesday (Fri, Mon, Tue = 3 working days) — a plain \`order_date+3\` would have incorrectly landed on Sunday.

## Multiple examples

**Beginner:** \`=NETWORKDAYS(A2,B2)\` — count working days between a start and end date.
**Intermediate:** \`=WORKDAY(A2,5)\` — find the date 5 working days after A2.
**Real-world:** \`=NETWORKDAYS(order_date,ship_date,holiday_list)\` used to accurately measure whether a shipment met a "3 business day" SLA, correctly excluding both weekends and a company holiday calendar from the count.

## ⚠️ Common mistakes

- **Using a plain \`date+N\` calculation for a "business days" deadline**, which silently lands on a weekend whenever the range crosses one — this is the single most common reason a "days to ship" or SLA calculation is subtly wrong.
- **Forgetting the optional holidays argument** when a business has recognized holidays that should also be excluded from the working-day count, not just weekends.

## Real-world Data Analyst use cases

- **Operations analysis:** measuring whether a shipment or support ticket met a business-day SLA.
- **Project planning:** calculating a realistic deadline that accounts for weekends (and holidays).

## Related concepts

\`\`\`
EOMONTH → Working Days ← you are here
\`\`\`
This closes the Date & Time group.

## Practice questions

### Easy
1. Write a formula for the number of working days between A2 and B2.

### Medium
2. An order is placed on a Friday with a "2 business day" shipping SLA. What date should it ship by, and which function calculates this correctly?

### Interview/Advanced
3. Why would a report measuring "average days to ship" using plain date subtraction (not NETWORKDAYS) systematically overstate performance on some orders and understate it on others?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`=NETWORKDAYS(A2,B2)\`
2. \`=WORKDAY(order_date,2)\` — a Friday order plus 2 working days correctly lands on Tuesday (skipping Saturday and Sunday), whereas \`order_date+2\` would incorrectly land on Sunday.
3. Plain date subtraction counts every calendar day including weekends — an order placed just before a weekend appears to take much longer (in calendar days) to ship than one placed mid-week, even if both were shipped in the same number of actual working days, systematically distorting the comparison between orders depending on which day of the week they happened to be placed.

</details>

## 🎤 Interview preparation

**Q: Why use NETWORKDAYS instead of simple date subtraction to measure an SLA?**
Short answer: Simple subtraction counts every calendar day, including weekends (and holidays), which can make an SLA look missed or exceeded purely due to which days of the week the range happened to span — NETWORKDAYS measures the actual business-day duration, which is what an SLA is meant to track.

## Best practices

- Use NETWORKDAYS/WORKDAY (not plain date math) for any deadline, SLA, or duration measured in "business days."
- Include a holiday list in the optional argument whenever the business recognizes holidays that should also be excluded.

---

### ⚡ Quick Revision

**NETWORKDAYS(start, end, [holidays])** → counts working days between two dates
**WORKDAY(start, days, [holidays])** → finds a date N working days in the future/past
**Rule:** never use plain date math for a "business days" deadline — it silently includes weekends
`,
});
