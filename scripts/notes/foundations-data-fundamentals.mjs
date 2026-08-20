// data_analyst_roadmap_curriculum.md — Section 01.2 "Data Fundamentals".
// 15 short, atomic data-classification concepts. Each pairs/contrasts with
// its natural counterpart (structured/semi-structured/unstructured,
// qualitative/quantitative, discrete/continuous, the 4 levels of
// measurement, primary/secondary) so notes stay concise but complete.
import { createSkill } from './_create.mjs';

createSkill('structured-data', {
  title: 'Structured Data',
  category: 'Foundations',
  what_is_it: 'Data organized into a strict, predictable format — rows and columns with a fixed schema, like a spreadsheet or a database table.',
  why_it_matters: "It's the easiest data to query, aggregate, and visualize, and it's what most of an analyst's day-to-day tooling (SQL, Excel, pivot tables) is built around.",
  prerequisites: ['what-is-data-analytics'],
  objectives: [
    'Define structured data and give two examples',
    'Explain why structured data is easier to analyze than unstructured data',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-structured-data-1', title: 'Spot the structure', description: 'Look at a spreadsheet export from any app you use and identify its columns, data types, and the "grain" of one row.' },
  ],
  verify: ['Can define structured data in one sentence', 'Can name two tools built specifically for structured data'],
  note: `
## 🎯 What is it?

**Structured data** is data organized into a fixed, predictable format — a table of rows and columns where every row has the same fields and every column has a consistent data type. A sales database table (order_id, customer_id, amount, date) is structured data: every row means the same thing, in the same shape.

## 💡 Why is it important?

- It's the easiest data type to store, query, and analyze — SQL, spreadsheets, and BI tools are all built around it.
- Most of an analyst's first year is spent almost entirely in structured data (databases, CSV exports, spreadsheets).
- Recognizing when data *isn't* structured (see Semi-Structured and Unstructured Data) tells you when you need a different toolset before you can analyze it at all.

## Core concept

| Trait | Structured data |
|---|---|
| Schema | Fixed and known in advance |
| Storage | Relational databases, spreadsheets, CSVs |
| Example | A \`customers\` table with columns \`id\`, \`name\`, \`signup_date\`, \`country\` |
| Query tools | SQL, Excel, pandas |

## 📊 Example

A retail \`orders\` table — every row is one order, every column (\`order_id\`, \`customer_id\`, \`product\`, \`amount\`, \`order_date\`) means exactly the same thing for every row. You can \`SUM(amount)\` or \`GROUP BY country\` immediately, with no extra preparation.

## ⚠️ Common mistakes

- **Assuming all business data is structured.** Support tickets, reviews, and PDFs are not — they need cleaning or a different approach before they fit a table.
- **Confusing "structured" with "clean."** A structured table can still have duplicates, nulls, or wrong data types — structure describes the *shape*, not the *quality*, of the data.

## Related concepts

\`\`\`
Structured Data ← you are here
  ↓
Semi-Structured Data (JSON, XML — some structure, no fixed schema)
  ↓
Unstructured Data (text, images — no inherent structure)
\`\`\`

## 🎤 Interview preparation

**Q: Give an example of structured vs. unstructured data.**
Short answer: A sales database table is structured (fixed rows/columns); a folder of customer support emails is unstructured (free text, no fixed fields).

---

### ⚡ Quick Revision

**Structured data** → fixed schema, rows and columns, e.g. a database table
Easiest to query directly with SQL/Excel — most analyst work starts here.
`,
});

createSkill('semi-structured-data', {
  title: 'Semi-Structured Data',
  category: 'Foundations',
  what_is_it: "Data with some organizational structure — tags, keys, or a hierarchy — but no fixed, uniform schema like a database table's.",
  why_it_matters: 'A huge share of real-world data (API responses, logs, config files) arrives this way — an analyst needs to recognize it and flatten it before it can be analyzed like a normal table.',
  prerequisites: ['structured-data'],
  objectives: [
    'Define semi-structured data and give two examples',
    'Explain what "flattening" semi-structured data means',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-semi-structured-1', title: 'Read a JSON response', description: 'Open any public API\'s example JSON response and identify which fields would become columns if you flattened it into a table.' },
  ],
  verify: ['Can define semi-structured data in one sentence', 'Can name a common semi-structured format'],
  note: `
## 🎯 What is it?

**Semi-structured data** has *some* organization — labeled fields, nested keys, tags — but doesn't follow one rigid, uniform schema the way a database table does. JSON, XML, and log files are the classic examples: each record has structure, but records can have different fields, nested objects, or varying depth.

## 💡 Why is it important?

- It's extremely common in real work — API responses, application logs, and NoSQL databases are almost always semi-structured.
- An analyst frequently needs to **flatten** it (extract nested fields into flat columns) before it's usable in SQL, Excel, or a chart.
- Recognizing it early saves time — trying to open a nested JSON file directly in Excel produces a mess.

## Core concept

| | Structured | Semi-structured |
|---|---|---|
| Schema | Fixed, uniform | Present, but flexible/nested |
| Example | Database table | JSON API response, XML file |
| Ready to chart? | Yes | Usually needs flattening first |

## 📊 Example

\`\`\`json
{ "order_id": 501, "customer": { "id": 12, "country": "US" }, "items": ["pen", "notebook"] }
\`\`\`

To analyze this in a table, you'd flatten it into columns: \`order_id\`, \`customer_id\`, \`customer_country\`, and a separate row per item — turning nested structure into the flat shape SQL and Excel expect.

## ⚠️ Common mistakes

- **Trying to paste raw JSON straight into Excel** — it needs a flattening/parsing step first (Power Query's JSON import, or Python's \`pandas.json_normalize\`).
- **Assuming every record has the same fields.** Semi-structured records can differ record to record — always check for missing/extra keys before building a table from them.

## Related concepts

\`\`\`
Structured Data
  ↓
Semi-Structured Data ← you are here (JSON, XML, logs)
  ↓
Unstructured Data (no inherent structure at all)
\`\`\`

## 🎤 Interview preparation

**Q: How would you get a nested JSON API response into a usable table?**
Short answer: Flatten it — extract the nested keys into their own columns (Power Query's JSON connector, or \`pandas.json_normalize\` in Python), producing one flat row per record.

---

### ⚡ Quick Revision

**Semi-structured data** → has structure (keys/tags), but no fixed uniform schema — JSON, XML, logs
Needs flattening before it behaves like a normal table.
`,
});

createSkill('unstructured-data', {
  title: 'Unstructured Data',
  category: 'Foundations',
  what_is_it: 'Data with no predefined format or organization — free text, images, audio, and video that don\'t fit naturally into rows and columns.',
  why_it_matters: "It's the majority of the world's data by volume, and while most entry-level analyst work uses structured data, recognizing unstructured data — and knowing it needs a different approach — is a basic literacy check.",
  prerequisites: ['semi-structured-data'],
  objectives: [
    'Define unstructured data and give two examples',
    "Explain why unstructured data can't be queried with SQL directly",
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-unstructured-data-1', title: 'Classify your own data', description: 'List five pieces of data your phone or laptop stores, and classify each as structured, semi-structured, or unstructured.' },
  ],
  verify: ['Can define unstructured data in one sentence', 'Can explain why it needs extra processing before analysis'],
  note: `
## 🎯 What is it?

**Unstructured data** has no predefined format — free-form text (emails, reviews, support tickets), images, audio, and video. There are no fixed fields or a uniform schema to query directly.

## 💡 Why is it important?

- By volume, it's the majority of the world's data — most of what a phone, a website, or a support inbox generates.
- An analyst can't run \`SELECT\` or \`SUM\` on raw unstructured data — it first needs to be processed (extracting sentiment from text, tagging images, transcribing audio) before it becomes analyzable.
- Recognizing it is a basic data-literacy check — a common early interview or case-study trap is handing a candidate a pile of free-text reviews and seeing if they realize it can't be pivoted directly.

## Core concept

| Data type | Example | Directly queryable with SQL? |
|---|---|---|
| Structured | Sales table | Yes |
| Semi-structured | JSON API response | After flattening |
| Unstructured | Customer support emails, product photos | No — needs processing first |

## 📊 Example

A folder of 10,000 customer reviews is unstructured text. To analyze it as a data analyst, you'd typically extract structure from it first — e.g., a star rating (already structured, if captured), a word count, or a sentiment score — turning free text into a structured column you *can* aggregate.

## ⚠️ Common mistakes

- **Assuming unstructured data can be dropped straight into a pivot table.** It needs an extraction or tagging step first.
- **Underestimating how much of "big data" is unstructured** — social media, video, audio, and documents dwarf structured data in raw volume, even though most entry-level analyst work happens in structured tables.

## Related concepts

\`\`\`
Structured Data
  ↓
Semi-Structured Data
  ↓
Unstructured Data ← you are here (text, images, audio, video)
\`\`\`

## 🎤 Interview preparation

**Q: Can you run a SQL query directly on a folder of customer support emails?**
Short answer: No — it's unstructured; you'd need to extract structured fields from it first (e.g., ticket category, sentiment, response time) before it fits a table you can query.

---

### ⚡ Quick Revision

**Unstructured data** → no predefined format — text, images, audio, video
Must be processed/extracted into structured fields before it can be queried or charted.
`,
});

createSkill('qualitative-data', {
  title: 'Qualitative Data',
  category: 'Foundations',
  what_is_it: 'Descriptive, non-numeric data that captures qualities or characteristics — categories, labels, opinions — rather than measurable quantities.',
  why_it_matters: "Choosing the right summary (a count or a percentage, not an average) depends on recognizing whether a field is qualitative or quantitative — get it wrong and the summary is meaningless.",
  prerequisites: ['unstructured-data'],
  objectives: [
    'Define qualitative data and give two examples',
    'Explain why you can\'t average qualitative data',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-qualitative-data-1', title: 'Classify a dataset\'s columns', description: 'Take any dataset (even a spreadsheet you use for work) and label each column as qualitative or quantitative.' },
  ],
  verify: ['Can define qualitative data', 'Can name two qualitative columns from a real dataset'],
  note: `
## 🎯 What is it?

**Qualitative data** describes a quality or characteristic rather than a measurable amount — it's non-numeric, even when it's stored as a code. Country, product category, customer segment, and survey comments are all qualitative.

## 💡 Why is it important?

- It determines *how* you're allowed to summarize a column: qualitative data is counted or grouped, never averaged.
- Misclassifying a field (e.g., treating a "customer ID" as a number to average) is one of the most common beginner mistakes in exploratory analysis.
- Most real business dimensions — region, channel, product line — are qualitative, and slicing metrics *by* them is most of an analyst's job.

## Core concept

| | Qualitative | Quantitative |
|---|---|---|
| Describes | Categories, labels, qualities | Measurable amounts |
| Example | Country, product category | Revenue, order count |
| Valid summary | Count, mode, percentage | Sum, average, median |

## 📊 Example

A \`country\` column ("US", "UK", "IN") is qualitative — you can count how many customers are in each country, but "averaging" the country column is meaningless. A \`revenue\` column is quantitative — you can sum or average it.

## ⚠️ Common mistakes

- **Averaging an ID or code column** just because it's stored as a number (e.g., a ZIP code or customer ID) — these are qualitative labels, not quantities.
- **Forgetting qualitative data can still be ordered** — see Ordinal Data for qualitative categories that do have a meaningful rank (like "low/medium/high").

## Related concepts

\`\`\`
Qualitative Data ← you are here      Quantitative Data
       ↓                                    ↓
  Nominal / Ordinal              Discrete / Continuous
\`\`\`

## 🎤 Interview preparation

**Q: Why can't you calculate the "average" of a product category column?**
Short answer: It's qualitative — the values are category labels, not quantities. The valid summary is a count or percentage per category, not an average.

---

### ⚡ Quick Revision

**Qualitative data** → describes a quality/category, not a quantity — summarize with counts, not averages
Examples: country, product category, customer segment.
`,
});

createSkill('quantitative-data', {
  title: 'Quantitative Data',
  category: 'Foundations',
  what_is_it: 'Numeric data that represents a measurable quantity — something you can meaningfully count, sum, or average.',
  why_it_matters: "It's the data type behind almost every business metric (revenue, orders, response time) — and further splits into discrete vs. continuous, which determines how you'd visualize or model it.",
  prerequisites: ['qualitative-data'],
  objectives: [
    'Define quantitative data and give two examples',
    'Explain the difference between quantitative and qualitative data',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-quantitative-data-1', title: 'List your metrics', description: 'List five quantitative metrics your team or company tracks, and note whether each is discrete or continuous.' },
  ],
  verify: ['Can define quantitative data', 'Can name two quantitative columns from a real dataset'],
  note: `
## 🎯 What is it?

**Quantitative data** is numeric data that represents a measurable amount — something you can meaningfully add, average, or compare mathematically. Revenue, order count, age, and response time are all quantitative.

## 💡 Why is it important?

- It's the data type behind nearly every KPI and business metric an analyst reports.
- It further splits into **discrete** (countable, whole-number values like order count) and **continuous** (measurable on a scale, like revenue or time) — a distinction that shapes which chart type and statistical test are appropriate.
- Confusing a quantitative-looking field that's actually qualitative (like a ZIP code) leads to nonsensical summaries.

## Core concept

| | Qualitative | Quantitative |
|---|---|---|
| Describes | Categories, labels | Measurable amounts |
| Example | Product category | Order count, revenue |
| Valid summary | Count, mode | Sum, mean, median |
| Further splits into | Nominal / Ordinal | Discrete / Continuous |

## 📊 Example

A \`revenue\` column ($1,204.50, $89.00, ...) is quantitative — you can sum it for total revenue, or average it for average order value. An \`order_count\` column is also quantitative, and specifically **discrete** (whole orders — you can't have 2.5 orders).

## ⚠️ Common mistakes

- **Treating a quantitative-looking ID as quantitative.** A customer ID or ZIP code is stored as a number but is actually qualitative — averaging it is meaningless.
- **Not checking discrete vs. continuous before choosing a chart** — a histogram bin width that makes sense for continuous revenue data may look wrong applied to discrete order counts.

## Related concepts

\`\`\`
Quantitative Data ← you are here
       ↓
  Discrete Data (countable whole numbers)      Continuous Data (measurable on a scale)
\`\`\`

## 🎤 Interview preparation

**Q: Is "number of orders" discrete or continuous, and why does it matter?**
Short answer: Discrete — it's a countable whole number (you can't have 2.5 orders). It matters because discrete data is usually visualized with bar charts or count-based summaries, while continuous data (like revenue) suits histograms and averages.

---

### ⚡ Quick Revision

**Quantitative data** → numeric, measurable amounts — sum, average, or compare mathematically
Splits into discrete (countable) and continuous (measured on a scale).
`,
});

createSkill('categorical-data', {
  title: 'Categorical Data',
  category: 'Foundations',
  what_is_it: 'Data that places each observation into one of a limited set of named categories — a synonym analysts often use interchangeably with "qualitative data."',
  why_it_matters: 'Categorical columns are how you slice and segment every metric — "revenue by region," "orders by channel" — so recognizing and correctly handling them is core to almost every analysis.',
  prerequisites: ['quantitative-data'],
  objectives: [
    'Define categorical data and give two examples',
    'Explain the relationship between categorical and qualitative data',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-categorical-data-1', title: 'Find the segmenting columns', description: 'In any dataset, identify which columns are categorical — these are the ones you\'d typically use in a GROUP BY or a pivot table\'s row labels.' },
  ],
  verify: ['Can define categorical data', 'Can name a categorical column and a metric you\'d segment by it'],
  note: `
## 🎯 What is it?

**Categorical data** places each observation into one of a limited, named set of groups — product category, region, subscription plan, device type. In practice, analysts use "categorical" and "qualitative" almost interchangeably; categorical data is the term you'll see most often in statistics and BI tooling.

## 💡 Why is it important?

- Categorical columns are what you segment and filter by — "revenue by region" and "signups by channel" both depend on a categorical column doing the grouping.
- \`GROUP BY\` in SQL and pivot table row/column labels are built specifically around categorical fields.
- Recognizing which columns are categorical (vs. numeric) is the first step in any exploratory data analysis.

## Core concept

| Categorical example | Categories |
|---|---|
| \`region\` | North, South, East, West |
| \`subscription_plan\` | Free, Pro, Enterprise |
| \`device_type\` | Mobile, Desktop, Tablet |

Categorical data can be **nominal** (no natural order — region) or **ordinal** (a natural order — subscription tier from Free → Pro → Enterprise).

## 📊 Example

\`\`\`sql
SELECT region, SUM(revenue)
FROM orders
GROUP BY region;
\`\`\`

\`region\` is categorical — it defines the groups the query aggregates \`revenue\` into. This is the single most common analytical pattern: one categorical column to group by, one quantitative column to summarize.

## ⚠️ Common mistakes

- **Grouping by a categorical column with too many unique values** (like a raw customer ID) without realizing it — the result is hundreds of rows, not a useful summary.
- **Forgetting to check for inconsistent category labels** — "US", "USA", and "United States" being three different values in the same column silently breaks a \`GROUP BY\`.

## Related concepts

\`\`\`
Qualitative Data ≈ Categorical Data ← you are here
       ↓
  Nominal (no order)   vs.   Ordinal (has order)
\`\`\`

## 🎤 Interview preparation

**Q: What kind of column would you GROUP BY to break revenue down by product line?**
Short answer: A categorical column — in this case, whichever column holds the product line label (e.g., \`product_category\`).

---

### ⚡ Quick Revision

**Categorical data** → groups observations into named categories; the field you segment/filter/GROUP BY on
Nearly synonymous with qualitative data.
`,
});

createSkill('numerical-data', {
  title: 'Numerical Data',
  category: 'Foundations',
  what_is_it: 'Data expressed as numbers that can be used in mathematical operations — the term most commonly used alongside "categorical data" in analytics tooling.',
  why_it_matters: 'Recognizing numerical columns tells you what belongs on a chart\'s value axis and what can legitimately be summed, averaged, or plotted on a histogram.',
  prerequisites: ['categorical-data'],
  objectives: [
    'Define numerical data and give two examples',
    'Explain the relationship between numerical and quantitative data',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-numerical-data-1', title: 'Separate the axes', description: 'For a dataset you know well, list which columns would go on a chart\'s value (numerical) axis versus its category axis.' },
  ],
  verify: ['Can define numerical data', 'Can name a numerical column that would go on a chart\'s value axis'],
  note: `
## 🎯 What is it?

**Numerical data** (also called numeric data) is data expressed as numbers usable in arithmetic — revenue, quantity, age, temperature. Like "categorical" and "qualitative," "numerical" and "quantitative" are largely interchangeable terms; "numerical" is the term you'll see most in BI tools and chart configuration.

## 💡 Why is it important?

- Charting tools split fields into "dimensions" (categorical) and "measures" (numerical) — knowing which is which is required before you build a single chart in Excel, Power BI, or Tableau.
- Only numerical columns can go on a chart's value axis, be summed in a KPI card, or be tested statistically with methods like a t-test.

## Core concept

| | Categorical | Numerical |
|---|---|---|
| Role in a chart | Axis/legend category | Value/measure |
| Example | \`region\`, \`plan\` | \`revenue\`, \`age\` |
| Aggregations | Count, mode | Sum, average, min/max |

## 📊 Example

In a bar chart of "Revenue by Region," \`region\` is the categorical field driving the bars, and \`revenue\` is the numerical field driving each bar's height. Swap them and the chart stops making sense — you can't average \`region\`.

## ⚠️ Common mistakes

- **Building a chart with two categorical fields** and expecting a meaningful value axis — a chart needs at least one numerical measure.
- **Treating a numeric-looking code (ZIP code, phone number) as numerical** when it's actually categorical — see Categorical Data.

## Related concepts

\`\`\`
Quantitative Data ≈ Numerical Data ← you are here
       ↓
  Discrete   vs.   Continuous
\`\`\`

## 🎤 Interview preparation

**Q: In a BI tool, what's the difference between a "dimension" and a "measure"?**
Short answer: A dimension is a categorical field you slice/group by (e.g., region); a measure is a numerical field you aggregate (e.g., revenue) — this maps directly to categorical vs. numerical data.

---

### ⚡ Quick Revision

**Numerical data** → numbers usable in arithmetic; the "measure" in a chart or dashboard
Nearly synonymous with quantitative data.
`,
});

createSkill('discrete-data', {
  title: 'Discrete Data',
  category: 'Foundations',
  what_is_it: 'Numerical data that can only take specific, countable values — usually whole numbers, with no meaningful values in between.',
  why_it_matters: 'It shapes which chart and which statistical treatment is appropriate — you can\'t have "2.3 orders," so discrete counts get bar charts and integer-based analysis, not smooth curves.',
  prerequisites: ['numerical-data'],
  objectives: [
    'Define discrete data and give two examples',
    'Explain why discrete data has no meaningful values "in between"',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-discrete-data-1', title: 'Discrete or continuous?', description: 'List five numeric fields from a dataset you use and classify each as discrete or continuous.' },
  ],
  verify: ['Can define discrete data', 'Can distinguish discrete from continuous data with an example'],
  note: `
## 🎯 What is it?

**Discrete data** is numerical data that only takes specific, countable values, typically whole numbers, with nothing meaningful in between. Number of orders, number of children, and number of website visits are discrete — you can't have 2.5 orders.

## 💡 Why is it important?

- It affects chart choice — discrete counts are usually shown as bar charts or count-based histograms with integer bins, not smooth curves.
- Some statistical distributions (like Poisson) apply specifically to discrete counts, while others (like the Normal distribution) assume continuous data.

## Core concept

| | Discrete | Continuous |
|---|---|---|
| Values | Countable, usually whole numbers | Any value within a range |
| Example | Number of orders, number of visits | Revenue, time, temperature |
| "In-between" values? | Not meaningful (no 2.5 orders) | Meaningful (a purchase can be $19.995) |

## 📊 Example

\`orders_per_customer\` (0, 1, 2, 3...) is discrete — every value is a whole number and there's nothing meaningful between 1 and 2 orders. A bar chart or count histogram fits it naturally.

## ⚠️ Common mistakes

- **Averaging discrete data and reporting a fractional result without context** — "2.3 average orders per customer" is a valid average even though no single customer placed 2.3 orders; the mistake is presenting it as if it described an individual case.
- **Confusing "discrete" with "categorical."** Discrete describes *countable numeric* values; categorical describes *named groups* — a count of orders is discrete, not categorical.

## Related concepts

\`\`\`
Numerical Data
       ↓
Discrete Data ← you are here      Continuous Data
(countable, whole numbers)         (any value on a scale)
\`\`\`

## 🎤 Interview preparation

**Q: Why would you use a count-based histogram rather than a smooth density curve for "number of purchases per customer"?**
Short answer: Because it's discrete — values only exist at whole numbers, so binning at integers (0, 1, 2, 3...) matches the actual data, unlike a smooth curve that implies fractional in-between values.

---

### ⚡ Quick Revision

**Discrete data** → countable, whole-number values, no meaningful "in-between" — order counts, visit counts
Pairs with bar charts / integer-based analysis.
`,
});

createSkill('continuous-data', {
  title: 'Continuous Data',
  category: 'Foundations',
  what_is_it: 'Numerical data that can take any value within a range, including fractions and decimals — measured rather than counted.',
  why_it_matters: 'Continuous data is what histograms, most statistical tests, and regression models are built for — recognizing it tells you which analysis techniques are valid.',
  prerequisites: ['discrete-data'],
  objectives: [
    'Define continuous data and give two examples',
    'Explain why continuous data suits histograms and regression',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-continuous-data-1', title: 'Find the continuous fields', description: 'In a dataset you use, identify which numeric fields are continuous (revenue, time, weight) versus discrete (counts).' },
  ],
  verify: ['Can define continuous data', 'Can name two continuous fields from a real dataset'],
  note: `
## 🎯 What is it?

**Continuous data** is numerical data that can take any value within a range, including fractions and decimals — it's measured, not counted. Revenue, temperature, time-on-page, and weight are all continuous: there's always a meaningful value between any two points (e.g., $19.99 and $20.00).

## 💡 Why is it important?

- Most statistical techniques an analyst uses day to day — averages, standard deviation, regression, t-tests — are designed for continuous data.
- Histograms with adjustable bin widths are the standard way to visualize a continuous variable's distribution, unlike discrete data's natural integer bins.

## Core concept

| | Discrete | Continuous |
|---|---|---|
| Example | Order count | Order value ($), time (seconds) |
| Values between two points | Not meaningful | Always meaningful |
| Typical chart | Bar chart, count histogram | Histogram, box plot, line chart |

## 📊 Example

\`order_value\` ($4.99, $19.50, $102.37...) is continuous — there's a meaningful value between any two amounts. A histogram of order values with $10 bins reveals the distribution's shape (skewed, normal, bimodal) in a way a simple count never could.

## ⚠️ Common mistakes

- **Binning continuous data too coarsely or too finely** — bins that are too wide hide real structure; bins that are too narrow turn the histogram into noise.
- **Applying discrete-only techniques (like a straightforward mode) as the primary summary** for continuous data — mean, median, and standard deviation are usually more informative.

## Related concepts

\`\`\`
Numerical Data
       ↓
Discrete Data      Continuous Data ← you are here
(order count)      (order value, time, weight)
\`\`\`

## 🎤 Interview preparation

**Q: Why is a histogram, rather than a simple bar chart, the standard way to visualize order values?**
Short answer: Order value is continuous — a histogram groups the continuous range into bins to reveal the distribution's shape, which a bar chart (built for discrete categories) can't do meaningfully.

---

### ⚡ Quick Revision

**Continuous data** → measured, can take any value in a range (including decimals) — revenue, time, weight
Pairs with histograms, averages, and regression.
`,
});

createSkill('nominal-data', {
  title: 'Nominal Data',
  category: 'Foundations',
  what_is_it: 'Categorical data with no natural order or ranking between its categories — the values are simply different, not "greater" or "lesser."',
  why_it_matters: 'It\'s the first of the four levels of measurement (nominal, ordinal, interval, ratio) that determine which statistics and chart types are valid for a given field.',
  prerequisites: ['categorical-data'],
  objectives: [
    'Define nominal data and give two examples',
    'Explain why nominal categories can\'t be meaningfully ranked',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-nominal-data-1', title: 'Nominal or ordinal?', description: 'List five categorical columns from a dataset you use, and classify each as nominal (no order) or ordinal (has order).' },
  ],
  verify: ['Can define nominal data', 'Can distinguish nominal from ordinal data with an example'],
  note: `
## 🎯 What is it?

**Nominal data** is categorical data whose values have no natural order — they're simply different labels, not ranked from low to high. Country, gender, product category, and payment method are all nominal: "US" isn't greater or less than "UK," it's just different.

## 💡 Why is it important?

- Nominal data is the first of four **levels of measurement** (nominal → ordinal → interval → ratio) that determine which statistics and charts are valid.
- It rules out anything order-based — you can't meaningfully compute a median or sort by "size" for nominal categories, only count frequencies.

## Core concept

| Level | Has order? | Example | Valid summary |
|---|---|---|---|
| **Nominal** | No | Country, payment method | Count, mode |
| Ordinal | Yes | Rating (Low/Medium/High) | Count, mode, median |

## 📊 Example

A \`payment_method\` column ("Credit Card", "PayPal", "Cash") is nominal — there's no inherent order to sort these by, only counts of how often each occurs. Contrast with an \`education_level\` column ("High School", "Bachelor's", "Master's") — that one is ordinal, because there's a real ranking.

## ⚠️ Common mistakes

- **Sorting nominal categories alphabetically and implying meaning** — alphabetical order isn't the same as a real ranking, and readers can misread it as one.
- **Using a bar chart's default sort for a nominal field without checking whether sorting by value (not alphabet) would communicate better** — e.g., sorting "revenue by payment method" bars from highest to lowest, since there's no natural nominal order to preserve.

## Related concepts

\`\`\`
Categorical Data
       ↓
Nominal Data ← you are here (no order)      Ordinal Data (has order)
       ↓                                            ↓
                Interval Data → Ratio Data
\`\`\`

## 🎤 Interview preparation

**Q: Is "customer segment: Bronze/Silver/Gold" nominal or ordinal?**
Short answer: Ordinal — there's a clear ranking (Bronze < Silver < Gold), unlike a nominal field like country or payment method.

---

### ⚡ Quick Revision

**Nominal data** → categories with no natural order — country, payment method, gender
Valid summaries: count and mode only.
`,
});

createSkill('ordinal-data', {
  title: 'Ordinal Data',
  category: 'Foundations',
  what_is_it: 'Categorical data with a meaningful order or ranking between categories — but where the gap between each category isn\'t necessarily equal or measurable.',
  why_it_matters: 'Survey ratings, customer tiers, and satisfaction scores are all ordinal — knowing this tells you a median makes sense but an average may be misleading.',
  prerequisites: ['nominal-data'],
  objectives: [
    'Define ordinal data and give two examples',
    'Explain why the "gap" between ordinal categories isn\'t necessarily equal',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-ordinal-data-1', title: 'Rank the categories', description: 'Take a survey-style field (satisfaction rating, education level, customer tier) and write out its natural order.' },
  ],
  verify: ['Can define ordinal data', 'Can explain why averaging ordinal ratings can be debatable'],
  note: `
## 🎯 What is it?

**Ordinal data** is categorical data with a meaningful order — but the *distance* between categories isn't guaranteed to be equal or precisely measurable. A satisfaction rating ("Poor" → "Fair" → "Good" → "Excellent") is ordinal: there's a clear order, but "Good" isn't necessarily exactly one measurable unit better than "Fair."

## 💡 Why is it important?

- Common in surveys, reviews, and customer tiers — recognizing ordinal data tells you a **median** or **mode** is safe, while an **average** is a judgment call some analysts and stakeholders will debate.
- It sits between nominal (no order) and interval/ratio (order *and* equal, measurable gaps) in the four levels of measurement.

## Core concept

| Level | Order? | Equal gaps? | Example |
|---|---|---|---|
| Nominal | No | — | Payment method |
| **Ordinal** | Yes | No | Satisfaction rating |
| Interval | Yes | Yes | Temperature (°C) |
| Ratio | Yes | Yes, plus a true zero | Revenue |

## 📊 Example

A 1–5 star rating is ordinal: 5 stars is better than 3 stars, but the "gap" in actual satisfaction between 4 and 5 stars isn't guaranteed to be the same size as the gap between 2 and 3 stars. Many teams still average star ratings in practice (treating it like interval data) — a common, pragmatic simplification worth being aware of.

## ⚠️ Common mistakes

- **Assuming ordinal gaps are equal** — treating "Poor, Fair, Good, Excellent" as if they were evenly spaced numbers (1, 2, 3, 4) is a simplification, not a guarantee.
- **Encoding ordinal categories in the wrong order** in a chart or model (e.g., alphabetizing "High/Low/Medium" instead of ordering them Low → Medium → High).

## Related concepts

\`\`\`
Nominal Data (no order)
       ↓
Ordinal Data ← you are here (has order, unequal gaps)
       ↓
Interval Data (has order, equal gaps, no true zero)
       ↓
Ratio Data (has order, equal gaps, true zero)
\`\`\`

## 🎤 Interview preparation

**Q: Why might a statistician push back on averaging a 1–5 satisfaction survey?**
Short answer: Because it's ordinal — the gap between each rating isn't guaranteed to be equal, so an average treats it like precisely measured interval data, which is a simplification some analysts consider debatable (though it's common practice).

---

### ⚡ Quick Revision

**Ordinal data** → categories with a real order, but unequal/unmeasured gaps — ratings, tiers, satisfaction scores
Median/mode are safe; averaging is a common but debatable simplification.
`,
});

createSkill('interval-data', {
  title: 'Interval Data',
  category: 'Foundations',
  what_is_it: 'Numerical data with a meaningful order and equal, measurable gaps between values — but no true zero point, so ratios between values aren\'t meaningful.',
  why_it_matters: 'It\'s the level of measurement behind classic examples like temperature — understanding it prevents a common statistics mistake (saying "40°C is twice as hot as 20°C").',
  prerequisites: ['ordinal-data'],
  objectives: [
    'Define interval data and give an example',
    'Explain why interval data has no true zero',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-interval-data-1', title: 'Find the "no true zero"', description: 'Explain why 0°C doesn\'t mean "no temperature," and contrast that with $0 revenue meaning "no revenue."' },
  ],
  verify: ['Can define interval data', 'Can explain why "twice as much" doesn\'t apply to interval data'],
  note: `
## 🎯 What is it?

**Interval data** has a meaningful order *and* equal, measurable gaps between values — but no true zero point. Temperature in Celsius or Fahrenheit is the classic example: the gap between 10° and 20° equals the gap between 20° and 30°, but 0° doesn't mean "no temperature," so you can't say 40° is "twice as hot" as 20°.

## 💡 Why is it important?

- It's the level of measurement most likely to trip up a ratio claim — "twice as much" only makes sense with a true zero (see Ratio Data), and interval data doesn't have one.
- Business analysts encounter true interval data less often than ratio data (most business metrics have a real zero — $0 revenue, 0 orders), but the distinction matters whenever a "years" or calendar-based field is involved (e.g., the year 2000 isn't "twice" the year 1000).

## Core concept

| Level | Order? | Equal gaps? | True zero? | Ratio claims valid? |
|---|---|---|---|---|
| Ordinal | Yes | No | No | No |
| **Interval** | Yes | Yes | No | No |
| Ratio | Yes | Yes | Yes | Yes |

## 📊 Example

Temperature: 20°C to 30°C is the same 10-degree gap as 30°C to 40°C (equal intervals) — but 0°C isn't "no heat," it's just the freezing point of water. So "40°C is twice as hot as 20°C" is a common but incorrect claim about interval data.

## ⚠️ Common mistakes

- **Making a ratio claim ("twice as much") about interval data** — this is only valid for ratio data, which has a true zero.
- **Assuming all numeric business data is interval, when it's usually ratio** — revenue, orders, and counts all have a genuine zero, making them ratio data, not interval.

## Related concepts

\`\`\`
Ordinal Data (order, unequal gaps)
       ↓
Interval Data ← you are here (order, equal gaps, no true zero — e.g. temperature)
       ↓
Ratio Data (order, equal gaps, true zero — e.g. revenue)
\`\`\`

## 🎤 Interview preparation

**Q: Why is it incorrect to say "40°C is twice as hot as 20°C"?**
Short answer: Temperature in Celsius is interval data — it has equal gaps but no true zero (0°C isn't "no temperature"), so ratio comparisons like "twice as much" aren't valid the way they are for ratio data like revenue.

---

### ⚡ Quick Revision

**Interval data** → ordered, equal gaps, but no true zero — temperature is the classic example
"Twice as much" claims are invalid without a true zero.
`,
});

createSkill('ratio-data', {
  title: 'Ratio Data',
  category: 'Foundations',
  what_is_it: 'Numerical data with a meaningful order, equal gaps between values, and a true zero — meaning ratios like "twice as much" are valid.',
  why_it_matters: "It's the level of measurement almost every core business metric lives at — revenue, orders, customers, time-on-page — so it's the type of data an analyst works with most.",
  prerequisites: ['interval-data'],
  objectives: [
    'Define ratio data and give two examples',
    'Explain why ratio data supports "twice as much" claims',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-ratio-data-1', title: 'Find the true zero', description: 'List three business metrics you know and confirm each has a true zero (i.e., zero means "none"), confirming they\'re ratio data.' },
  ],
  verify: ['Can define ratio data', 'Can explain why revenue is ratio data, not interval'],
  note: `
## 🎯 What is it?

**Ratio data** has everything interval data has — order, equal gaps — plus a true zero point, where zero genuinely means "none." Revenue, order count, age, and time-on-page are all ratio data: $0 revenue means no revenue, and $200 is genuinely twice as much as $100.

## 💡 Why is it important?

- It's the level of measurement almost every core business metric lives at, so it's the data type an analyst works with the most.
- Because it has a true zero, ratio comparisons ("twice as much," "half as many") are mathematically valid — unlike interval data.
- It's the final and most information-rich of the four levels of measurement (nominal → ordinal → interval → ratio), supporting every summary statistic: mode, median, mean, and ratios.

## Core concept

| Level | Order? | Equal gaps? | True zero? | Example |
|---|---|---|---|---|
| Nominal | No | — | — | Payment method |
| Ordinal | Yes | No | No | Satisfaction rating |
| Interval | Yes | Yes | No | Temperature (°C) |
| **Ratio** | Yes | Yes | Yes | Revenue, order count, age |

## 📊 Example

Revenue is ratio data: $0 genuinely means no revenue, and $2,000 is genuinely twice as much as $1,000 — both the equal-interval property and the ratio ("twice as much") claim hold. This is why revenue supports every kind of summary — sum, average, and ratio comparisons like growth rate.

## ⚠️ Common mistakes

- **Confusing ratio and interval data** — the tell is always: does zero genuinely mean "none of this"? If yes, it's ratio.
- **Assuming ratio claims always require ratio data explicitly checked** — in practice most business metrics *are* ratio data, so this mostly matters as a sanity check when a field feels unusual (like a year, or a temperature).

## Related concepts

\`\`\`
Nominal → Ordinal → Interval → Ratio Data ← you are here
                                (order + equal gaps + true zero)
\`\`\`

This closes the four levels of measurement — the same framework used later in Statistics to decide which summary statistics and tests are valid for a variable.

## 🎤 Interview preparation

**Q: Why is revenue ratio data and not interval data?**
Short answer: Revenue has a true zero — $0 genuinely means no revenue — so ratio comparisons like "twice as much revenue" are mathematically valid, which isn't true for interval data like Celsius temperature.

---

### ⚡ Quick Revision

**Ratio data** → ordered, equal gaps, true zero — revenue, orders, age, time
Supports every summary statistic, including valid ratio ("twice as much") comparisons.
`,
});

createSkill('primary-data', {
  title: 'Primary Data',
  category: 'Foundations',
  what_is_it: 'Data collected firsthand for a specific purpose — a survey you ran, an experiment you designed, or transaction data your own product generated.',
  why_it_matters: 'Knowing whether data is primary or secondary tells you how much you can trust its collection method, and whether you have room to go back and collect more if it\'s incomplete.',
  prerequisites: ['ratio-data'],
  objectives: [
    'Define primary data and give two examples',
    'Explain one advantage and one disadvantage of primary data',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-primary-data-1', title: 'Trace the source', description: 'For a dataset you\'ve worked with, determine whether it was collected specifically for your analysis (primary) or originally for another purpose (secondary).' },
  ],
  verify: ['Can define primary data', 'Can name one advantage and one limitation of primary data'],
  note: `
## 🎯 What is it?

**Primary data** is data collected firsthand, specifically for the question at hand — a survey you designed and ran, an A/B test you launched, or transaction logs your own product generates. You (or your organization) control exactly how it was collected.

## 💡 Why is it important?

- Because you control the collection method, you know exactly what was measured, how, and why — making it easier to trust and interpret.
- It's more expensive and time-consuming to gather than reusing existing (secondary) data, so analysts weigh this tradeoff before commissioning a new survey or experiment.

## Core concept

| | Primary data | Secondary data |
|---|---|---|
| Collected by | You / your org, for this purpose | Someone else, for another purpose |
| Example | A survey you ran, your product's transaction logs | A government census dataset, a public Kaggle dataset |
| Cost/effort | Higher | Lower |
| Fit to your question | Exact | May need adapting |

## 📊 Example

A company's own \`orders\` table, generated by its own checkout system, is primary data — it was collected specifically to record that company's transactions. A public "average retail revenue by industry" report from a government agency, used as a benchmark, is secondary data.

## ⚠️ Common mistakes

- **Assuming primary data is automatically more reliable than secondary data.** A badly designed survey (primary) can be worse than a well-documented public dataset (secondary) — the collection *method* matters more than the label.
- **Not documenting how primary data (like a survey) was collected**, which makes it just as hard to trust later as an undocumented secondary source.

## Related concepts

\`\`\`
Primary Data ← you are here (collected firsthand, for this purpose)
Secondary Data (collected by someone else, for another purpose)
\`\`\`

## 🎤 Interview preparation

**Q: Is your company's own sales database primary or secondary data for a sales analysis?**
Short answer: Primary — it was generated specifically by your own systems, for your own business, even though it wasn't originally built "for this one analysis."

---

### ⚡ Quick Revision

**Primary data** → collected firsthand, for your specific purpose — surveys you run, your own product's data
Higher cost/effort, but exact fit to the question.
`,
});

createSkill('secondary-data', {
  title: 'Secondary Data',
  category: 'Foundations',
  what_is_it: 'Data originally collected by someone else, for a different purpose, that you reuse for your own analysis — public datasets, government statistics, third-party reports.',
  why_it_matters: 'Most analysts use far more secondary data than primary data day to day — knowing its limitations (unknown collection quality, possible mismatch with your exact question) prevents overconfident conclusions.',
  prerequisites: ['primary-data'],
  objectives: [
    'Define secondary data and give two examples',
    'Explain one risk of relying on secondary data',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-secondary-data-1', title: 'Evaluate a public dataset', description: 'Find any public dataset (Kaggle, government open data) and note what it was originally collected for, versus how you might reuse it.' },
  ],
  verify: ['Can define secondary data', 'Can name one risk of using secondary data uncritically'],
  note: `
## 🎯 What is it?

**Secondary data** was originally collected by someone else, for a different purpose, and you're reusing it. Public government statistics, industry reports, Kaggle datasets, and even a partner company's shared data all count — you didn't design the collection method.

## 💡 Why is it important?

- It's cheap and fast to use — no need to run your own survey or experiment — which is why most analyst work leans heavily on secondary data (internal databases from other teams, third-party benchmarks, open datasets).
- You don't control how it was collected, so it may not perfectly fit your question, and its quality can be unknown or undocumented.

## Core concept

| Risk | Why it matters |
|---|---|
| Unknown collection method | You can't verify sampling bias or data quality firsthand |
| Different original purpose | Fields may not map cleanly to what you actually need |
| Staleness | Public/third-party data can be outdated by the time you use it |
| Definitional mismatch | "Active user" in someone else's dataset may not match your definition |

## 📊 Example

A government "average household income by region" dataset used to benchmark a company's own customer base is secondary data — useful and much cheaper than surveying every customer's income directly, but it wasn't collected specifically for that company's question, so it must be interpreted carefully.

## ⚠️ Common mistakes

- **Treating secondary data as automatically representative of your own population** — a public dataset's population may differ meaningfully from your customers.
- **Skipping the source's methodology** before using it — a good analyst checks who collected the data, how, and when, before trusting conclusions built on it.

## Related concepts

\`\`\`
Primary Data (collected firsthand, for this purpose)
Secondary Data ← you are here (collected by someone else, for another purpose)
\`\`\`

This closes the Data Fundamentals chapter — every dataset an analyst touches can be classified along all five of these dimensions: structure, qualitative/quantitative, level of measurement, and primary/secondary source.

## 🎤 Interview preparation

**Q: What's a risk of basing a business decision entirely on a public secondary dataset?**
Short answer: You don't control its collection method or definitions, so its population or metric definitions may not match your own business — it should be used as a directional benchmark, not treated as equivalent to your own primary data.

---

### ⚡ Quick Revision

**Secondary data** → collected by someone else, for another purpose, reused by you — public datasets, third-party reports
Cheap and fast, but requires checking source, methodology, and fit to your question.
`,
});

console.log('Created 15 Data Fundamentals skills.');
