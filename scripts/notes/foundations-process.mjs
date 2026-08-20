// data_analyst_roadmap_curriculum.md — Section 01.3 "Data Analysis
// Process". The "Clean Data" step reuses the existing, unmodified
// data-cleaning skill (already a full Foundations topic) rather than
// duplicating it under a new id — the other 10 steps are new, concise,
// process-stage topics.
import { createSkill } from './_create.mjs';

createSkill('define-business-problem', {
  title: 'Define the Business Problem',
  category: 'Foundations',
  what_is_it: 'The first step of any analysis — pinning down exactly what question is being asked and what decision the answer will inform, before touching any data.',
  why_it_matters: 'Skipping this step is the single most common cause of wasted analyst work — a technically correct analysis that answers the wrong question has zero business value.',
  prerequisites: ['what-is-data-analytics'],
  objectives: [
    'Explain why defining the business problem comes before touching data',
    'Write clarifying questions that turn a vague request into a well-defined problem',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-define-problem-1', title: 'Turn a vague ask into a defined problem', description: 'Take the vague request "can you look at our numbers?" and write 3 clarifying questions you\'d ask before starting.' },
  ],
  verify: ['Can explain why this step comes first', 'Can write clarifying questions for a vague request'],
  note: `
## 🎯 What is it?

**Defining the business problem** means pinning down exactly what question is being asked, why it matters, and what decision the answer will inform — before writing a single query. It's the first step of the Data Analysis Process, and the one most often skipped under time pressure.

## 💡 Why is it important?

- A technically flawless analysis that answers the wrong question has zero business value — and is one of the most common ways junior analysts waste days of work.
- Stakeholders often start with a vague ask ("can you check our numbers?") — the analyst's job is to turn that into a specific, answerable question.
- It determines everything downstream: what data to pull, what level of precision is needed, and how to present the result.

## Core concept

Good clarifying questions:
- What decision will this analysis inform?
- What specific metric, time window, and segment matter?
- What would "done" look like — a number, a chart, a recommendation?
- Is there a deadline or a specific audience this needs to be ready for?

## 📊 Example

Vague ask: "Can you check on our sales?" Defined problem, after clarifying: "Leadership wants to know whether Q1 revenue is on track to hit the $2M target, broken down by region, to decide whether to increase the marketing budget for underperforming regions before Q2 starts."

## ⚠️ Common mistakes

- **Starting to pull data immediately** to seem responsive, rather than spending 10 minutes clarifying first — this usually costs far more time later when the analysis has to be redone.
- **Assuming you know what "the numbers" means** without confirming — different stakeholders often mean different metrics by the same vague phrase.

## Related concepts

\`\`\`
Define the Business Problem ← you are here
  ↓
Collect Data
  ↓
Understand Data
\`\`\`

## 🎤 Interview preparation

**Q: A stakeholder asks "can you check on our numbers?" — what's your first move?**
Short answer: Ask clarifying questions before touching any data — which metric, what time period, what decision this will inform — since "the numbers" is too vague to act on directly.

---

### ⚡ Quick Revision

**Define the business problem** → clarify the real question and the decision it informs, before pulling any data
The most commonly skipped step, and the costliest to skip.
`,
});

createSkill('collect-data', {
  title: 'Collect Data',
  category: 'Foundations',
  what_is_it: 'Gathering the raw data needed to answer a defined business question — from a database, an export, an API, or a survey.',
  why_it_matters: 'Knowing where and how to get the right data — not just any data — is a practical skill that determines whether the rest of the analysis is even possible.',
  prerequisites: ['define-business-problem'],
  objectives: [
    'List common sources a data analyst collects data from',
    'Explain how the defined business problem shapes what data to collect',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-collect-data-1', title: 'Map data sources', description: 'For a business question you\'re curious about, list every system or source that might hold relevant data.' },
  ],
  verify: ['Can name three common data sources an analyst pulls from', 'Can explain how the defined problem narrows down what to collect'],
  note: `
## 🎯 What is it?

**Collecting data** means gathering the raw data needed to answer the defined business question — querying a database, exporting a report, calling an API, or running a survey. What gets collected is driven directly by the problem defined in the previous step.

## 💡 Why is it important?

- The wrong or incomplete data collected here undermines everything downstream, no matter how good the later analysis is.
- Real data often lives across multiple systems (a sales database, an ad platform, a support tool) — knowing where to look is itself a skill.

## Core concept

| Source | Example |
|---|---|
| Internal database | Orders, customers, transactions |
| Third-party platform | Google Analytics, an ad platform, a CRM |
| File export | A CSV or Excel report shared by another team |
| API | Pulling live data from a web service |
| Survey | Data collected directly for the analysis (primary data) |

## 📊 Example

To answer "did the March email campaign drive signups?", an analyst would need to collect data from at least two sources: the email platform (who received/opened/clicked the campaign) and the product's own signup database (who actually signed up, and when) — joined together by email address or a tracking ID.

## ⚠️ Common mistakes

- **Collecting only the most convenient data** rather than the data that actually answers the question — e.g., using only in-app data when the real answer requires joining with an ad platform's data.
- **Not checking data access/permissions early** — discovering you can't access a needed system partway through an analysis wastes time that clarifying up front would have caught.

## Related concepts

\`\`\`
Define the Business Problem
  ↓
Collect Data ← you are here
  ↓
Understand Data
\`\`\`

## 🎤 Interview preparation

**Q: You need to analyze whether a marketing campaign drove signups. What data would you collect, and from where?**
Short answer: Campaign engagement data from the email/ad platform (sends, opens, clicks) and signup data from the product's own database, joined by a shared identifier like email address, over the campaign's time window.

---

### ⚡ Quick Revision

**Collect data** → gather the raw data the defined problem actually requires, from databases, exports, APIs, or surveys
What to collect is driven by the problem, not by what's most convenient.
`,
});

createSkill('understand-data', {
  title: 'Understand the Data',
  category: 'Foundations',
  what_is_it: "Getting familiar with a newly collected dataset's structure, size, columns, and quality before attempting to clean or analyze it.",
  why_it_matters: 'Jumping straight into analysis without understanding the data first leads to wrong assumptions about what a column means or how complete the data is.',
  prerequisites: ['collect-data'],
  objectives: [
    'List the basic questions to ask when first opening a new dataset',
    'Explain why understanding data comes before cleaning it',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-understand-data-1', title: 'First-look checklist', description: 'Open any dataset you have access to and answer: how many rows/columns, what does one row represent, and which columns have missing values?' },
  ],
  verify: ['Can list at least three questions to ask when first opening a dataset', 'Can explain what "the grain" of a dataset means'],
  note: `
## 🎯 What is it?

**Understanding the data** is the step where an analyst gets familiar with a newly collected dataset before touching it further: how many rows and columns, what each column means, what one row represents (the "grain"), and roughly how complete or messy it looks.

## 💡 Why is it important?

- Cleaning or analyzing a dataset before understanding it leads to wrong assumptions — e.g., accidentally double-counting because one row wasn't actually "one order," it was "one line item within an order."
- It's usually the fastest step in the process, but skipping it causes the most expensive mistakes later.

## Core concept

First-look questions:
- How many rows and columns are there?
- What does **one row** represent (the "grain")? One customer? One order? One order line-item?
- What does each column mean, and what data type is it?
- Roughly how much is missing or looks wrong?
- Does the data cover the time period and scope the business problem needs?

## 📊 Example

A dataset named \`orders\` might actually have one row per **item within** an order, not one row per order — summing a "quantity" column without first checking the grain would silently overcount total orders. Five minutes spent understanding the grain avoids a wrong headline number later.

## ⚠️ Common mistakes

- **Assuming a table's name describes its grain accurately.** Always verify by checking whether a known key (like \`order_id\`) repeats across multiple rows.
- **Skipping this step because the dataset "looks familiar."** Even a dataset you've used before can change shape (new columns, a new grain) between exports.

## Related concepts

\`\`\`
Collect Data
  ↓
Understand the Data ← you are here
  ↓
Clean Data
\`\`\`

## 🎤 Interview preparation

**Q: Why would you check "the grain" of a table before summing a column?**
Short answer: If one row doesn't represent what you assume (e.g., one order-line-item instead of one order), summing directly will overcount — checking the grain first (does a key like order_id repeat?) prevents a wrong headline number.

---

### ⚡ Quick Revision

**Understand the data** → check size, columns, grain, and rough completeness before cleaning or analyzing
"The grain" = what one row actually represents.
`,
});

createSkill('transform-data', {
  title: 'Transform Data',
  category: 'Foundations',
  what_is_it: 'Reshaping cleaned data into the form actually needed for analysis — aggregating, joining, filtering, or deriving new columns.',
  why_it_matters: 'Clean data isn\'t automatically analysis-ready — it usually still needs reshaping (e.g., turning transaction-level data into a daily summary) before it can answer the business question.',
  prerequisites: ['data-cleaning'],
  objectives: [
    'Explain the difference between cleaning data and transforming data',
    'Name two common transformation operations',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-transform-data-1', title: 'Reshape a dataset', description: 'Take any transaction-level dataset and describe the steps to transform it into a daily summary table.' },
  ],
  verify: ['Can distinguish cleaning from transforming', 'Can name two transformation operations'],
  note: `
## 🎯 What is it?

**Transforming data** reshapes already-clean data into the form actually needed to answer the business question — aggregating rows, joining tables together, filtering to a relevant subset, or deriving new calculated columns. It's a distinct step from cleaning: cleaning fixes *errors*, transforming changes *shape*.

## 💡 Why is it important?

- Clean data usually isn't analysis-ready by itself — e.g., transaction-level rows need aggregating into a daily or monthly summary before they answer a trend question.
- It's where most of the actual "shaping" work happens — joining a customer table to an orders table, filtering to the right date range, or calculating a new ratio column.

## Core concept

| Operation | Example |
|---|---|
| Aggregate | Sum daily transactions into a daily revenue total |
| Join | Combine \`orders\` and \`customers\` tables by customer ID |
| Filter | Keep only orders from the last 90 days |
| Derive | Calculate \`profit_margin\` from \`revenue\` and \`cost\` columns |
| Reshape | Pivot rows into columns (or vice versa) for a specific chart |

## 📊 Example

Clean, transaction-level order data (one row per order) is transformed into a "daily revenue" table by grouping and summing by date — the underlying data was already clean, but it needed to be reshaped into daily totals before it could feed a trend chart.

## ⚠️ Common mistakes

- **Confusing transformation with cleaning** — transforming doesn't fix errors in the data; it should always happen *after* cleaning, on already-trustworthy data.
- **Joining tables without checking for duplicate matches** — a join that unexpectedly multiplies rows (a many-to-many join where one-to-many was intended) silently inflates totals.

## Related concepts

\`\`\`
Clean Data
  ↓
Transform Data ← you are here
  ↓
Explore Data
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between cleaning and transforming data?**
Short answer: Cleaning fixes errors and inconsistencies in the data itself (missing values, duplicates, wrong types); transforming reshapes already-clean data into the form needed for analysis (aggregating, joining, filtering, deriving new columns).

---

### ⚡ Quick Revision

**Transform data** → reshape clean data into an analysis-ready form: aggregate, join, filter, derive
Distinct from cleaning: cleaning fixes errors, transforming changes shape.
`,
});

createSkill('explore-data', {
  title: 'Explore Data',
  category: 'Foundations',
  what_is_it: "Looking at cleaned, transformed data with fresh eyes to spot patterns, outliers, and initial answers before committing to a specific analysis direction.",
  why_it_matters: "Skipping exploration and jumping straight to a final chart risks missing an obvious pattern, outlier, or data issue that changes the whole story.",
  prerequisites: ['transform-data'],
  objectives: [
    'Explain the purpose of exploring data before formal analysis',
    'Describe common exploration techniques (summary stats, quick charts)',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-explore-data-1', title: 'Ten-minute exploration', description: 'Take any dataset and spend 10 minutes producing quick summary statistics and a rough chart before forming any conclusion.' },
  ],
  verify: ['Can explain why exploration comes before formal analysis', 'Can name two quick exploration techniques'],
  note: `
## 🎯 What is it?

**Exploring data** means looking at cleaned, transformed data with fresh eyes — quick summary statistics, rough charts, sorting by extremes — to spot patterns, outliers, or surprises before committing to a specific analysis direction. It's less formal than the full "Analyze" step that follows.

## 💡 Why is it important?

- It catches problems and surprises early — an unexpected outlier or a pattern that contradicts the initial assumption is far cheaper to discover now than after a final report is built.
- It often reveals the *actual* interesting story, which can be different from what the original question assumed.

## Core concept

Quick exploration techniques:
- Summary statistics (min, max, mean, median) for key numeric columns
- Sorting by the extremes (top/bottom 10 rows) to spot outliers
- A rough histogram or bar chart, without formatting polish
- Counting unique values in a categorical column to check for unexpected variety

## 📊 Example

Exploring a cleaned \`orders\` table by sorting by \`amount\` descending might reveal a handful of orders worth $50,000+ — far above the typical $50 order. That's worth investigating before building a "top customers" report, since it may be a data error or a genuinely important segment (bulk B2B orders) that changes how the whole analysis should be framed.

## ⚠️ Common mistakes

- **Skipping exploration and jumping straight to a polished chart** — this is how outliers or data issues end up baked silently into a final report.
- **Treating exploration as the final analysis.** It's meant to be quick and rough — formal analysis with a clear methodology comes next.

## Related concepts

\`\`\`
Transform Data
  ↓
Explore Data ← you are here
  ↓
Analyze Data
\`\`\`

## 🎤 Interview preparation

**Q: Why would you explore a dataset before building your final analysis?**
Short answer: Quick summary stats and rough charts catch outliers, surprises, or data issues early — cheaper to catch now than after a polished report has already been built and shared.

---

### ⚡ Quick Revision

**Explore data** → quick, informal look (summary stats, rough charts, sorting by extremes) to catch surprises early
Comes after transforming, before formal analysis.
`,
});

createSkill('analyze-data', {
  title: 'Analyze Data',
  category: 'Foundations',
  what_is_it: 'The step where an analyst formally applies a chosen method — comparison, segmentation, statistical testing — to answer the defined business question.',
  why_it_matters: "It's the core, deliberate step the rest of the process supports — everything before it prepares the data, and everything after it communicates the result.",
  prerequisites: ['explore-data'],
  objectives: [
    'Explain how analyzing data differs from exploring data',
    'Name two common analysis techniques',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-analyze-data-1', title: 'Choose an analysis method', description: 'For a business question you\'re curious about, decide which technique (comparison, segmentation, correlation, statistical test) fits best, and why.' },
  ],
  verify: ['Can distinguish analyzing from exploring', 'Can name two analysis techniques'],
  note: `
## 🎯 What is it?

**Analyzing data** is the deliberate, methodical step where an analyst applies a chosen technique — comparison, segmentation, trend analysis, correlation, or a formal statistical test — to answer the defined business question with a clear, defensible finding.

## 💡 Why is it important?

- It's the step everything else in the process supports: collecting and cleaning prepare the data, exploring builds intuition, analyzing produces the actual answer.
- Choosing the right technique matters — the wrong method (e.g., comparing raw totals across groups of very different sizes without normalizing) can produce a misleading answer even with perfectly clean data.

## Core concept

| Technique | Used for |
|---|---|
| Comparison | Is X higher/lower than Y, or than last period? |
| Segmentation | Does the answer differ by group (region, channel, customer type)? |
| Trend analysis | Is a metric moving up, down, or staying flat over time? |
| Correlation | Do two variables move together? |
| Statistical testing | Is an observed difference real, or could it be random noise? |

## 📊 Example

To answer "did the new checkout design increase conversion rate?", the analysis step might compare conversion rate before vs. after the change, segment by device type to check the effect held across mobile and desktop, and run a statistical test to confirm the difference wasn't just random variation.

## ⚠️ Common mistakes

- **Choosing a technique that doesn't fit the question** — e.g., comparing raw counts between a small and a large group without normalizing (rates, not raw totals) misleads.
- **Treating a plausible-looking pattern from exploration as a confirmed finding** without applying a more rigorous analysis or test.

## Related concepts

\`\`\`
Explore Data
  ↓
Analyze Data ← you are here
  ↓
Visualize Data
\`\`\`

## 🎤 Interview preparation

**Q: How would you analyze whether a new checkout design actually improved conversion rate?**
Short answer: Compare conversion rate before and after the change, segment by device/traffic source to check consistency, and ideally confirm the difference is statistically significant rather than random noise — not just eyeball two numbers.

---

### ⚡ Quick Revision

**Analyze data** → apply a deliberate technique (comparison, segmentation, correlation, testing) to answer the defined question
The core step — everything before prepares the data, everything after communicates the result.
`,
});

createSkill('visualize-data', {
  title: 'Visualize Data',
  category: 'Foundations',
  what_is_it: 'Turning an analysis finding into a chart or dashboard that communicates it clearly to someone who wasn\'t involved in producing it.',
  why_it_matters: 'A correct finding that\'s poorly visualized often fails to land with stakeholders — the right chart choice is what makes a finding actually legible and persuasive.',
  prerequisites: ['analyze-data'],
  objectives: [
    'Explain why visualization is a distinct step from analysis',
    'Name a basic principle of choosing the right chart',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-visualize-data-1', title: 'Chart a finding', description: 'Take any finding you\'ve made (from an earlier exercise) and decide which chart type would communicate it most clearly, and why.' },
  ],
  verify: ['Can explain why visualization matters even after the analysis is done', 'Can name one chart-choice principle'],
  note: `
## 🎯 What is it?

**Visualizing data** turns an analysis finding into a chart, table, or dashboard that communicates it clearly to someone who wasn't involved in producing it. It's a distinct step from analysis itself — a correct finding still needs to be made legible.

## 💡 Why is it important?

- Most stakeholders will never see the underlying data or queries — the chart *is* the analysis, as far as they're concerned.
- A correct finding presented in a confusing or misleading chart often fails to land, or worse, gets misread.
- This roadmap covers chart selection and dashboard design in much more depth in the Data Visualization stage — this topic is the conceptual entry point.

## Core concept

Basic chart-choice principle: match the chart type to the *type of comparison* being shown.

| Comparison type | Chart |
|---|---|
| Trend over time | Line chart |
| Comparing categories | Bar chart |
| Part-to-whole | Stacked bar, (sparingly) pie chart |
| Relationship between two variables | Scatter plot |
| A single key number | KPI card |

## 📊 Example

The finding "revenue grew steadily each month this year" is best shown as a line chart (trend over time) — showing the same finding as a pie chart would obscure the trend entirely, even though the underlying numbers are identical.

## ⚠️ Common mistakes

- **Picking a chart type out of habit rather than fit** — e.g., defaulting to a pie chart for a comparison that would be much clearer as a bar chart.
- **Overloading one chart with too many series or categories**, making it harder to read than a table would have been.

## Related concepts

\`\`\`
Analyze Data
  ↓
Visualize Data ← you are here
  ↓
Interpret Results
\`\`\`
This roadmap's Data Visualization stage covers chart types and dashboard design in full depth.

## 🎤 Interview preparation

**Q: You have a finding showing steady revenue growth over 12 months. What chart would you use, and why?**
Short answer: A line chart — it's built specifically to show a trend over time, which is exactly what this finding is; a pie or bar chart would obscure the time-based pattern.

---

### ⚡ Quick Revision

**Visualize data** → turn a finding into a chart/dashboard a stakeholder can read without seeing the underlying data
Match the chart type to the type of comparison (trend → line, categories → bar, relationship → scatter).
`,
});

createSkill('interpret-results', {
  title: 'Interpret Results',
  category: 'Foundations',
  what_is_it: "Explaining what an analysis's findings actually mean in business terms — not just reporting a number, but what it implies.",
  why_it_matters: 'A chart or number alone rarely tells a stakeholder what to think about it — interpretation is what bridges "here\'s a chart" to "here\'s what it means for us."',
  prerequisites: ['visualize-data'],
  objectives: [
    'Explain the difference between reporting a result and interpreting it',
    'Practice turning a chart into a one-sentence interpretation',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-interpret-results-1', title: 'Interpret a chart', description: 'Take any chart you\'ve made or seen recently and write one sentence interpreting what it means, not just describing what it shows.' },
  ],
  verify: ['Can distinguish reporting a result from interpreting it', 'Can write a one-sentence interpretation of a chart'],
  note: `
## 🎯 What is it?

**Interpreting results** means explaining what an analysis's findings actually mean in business terms — going beyond "here's what the chart shows" to "here's what this implies, and why it matters." It's the step that turns a chart into something a non-technical stakeholder can use.

## 💡 Why is it important?

- A chart alone doesn't tell a stakeholder what to think — two people can look at the same chart and draw different conclusions without a clear interpretation attached.
- It's the step most closely tied to the earlier data → information → insight progression (see "What is Data?") — interpretation is what turns information into an insight.

## Core concept

| | Reporting | Interpreting |
|---|---|---|
| Says | "Revenue grew 8% this quarter" | "Revenue grew 8% this quarter, driven mostly by the new region launch, ahead of our original 5% target" |
| Reader's takeaway | A number | A number, why it happened, and how it compares to expectations |

## 📊 Example

Reported result: "Signups from the email channel dropped 15% last month." Interpretation: "This drop is concerning because email is our lowest-cost acquisition channel — the likely cause is the reduced send frequency we tested, and reverting it should recover most of the lost signups."

## ⚠️ Common mistakes

- **Stopping at the number.** "Revenue grew 8%" leaves the stakeholder to guess whether that's good, expected, or concerning — always compare against a benchmark, target, or prior trend.
- **Over-interpreting without support.** An interpretation should be traceable back to the analysis — speculating beyond what the data actually shows undermines credibility.

## Related concepts

\`\`\`
Visualize Data
  ↓
Interpret Results ← you are here
  ↓
Communicate Insights
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between reporting a finding and interpreting it?**
Short answer: Reporting states the number ("revenue grew 8%"); interpreting explains what it means — compared to a target or prior trend, likely cause, and why it matters to the business.

---

### ⚡ Quick Revision

**Interpret results** → explain what a finding means, not just what it shows — compare to a benchmark, explain likely cause, state why it matters
Turns information into an insight.
`,
});

createSkill('communicate-insights', {
  title: 'Communicate Insights',
  category: 'Foundations',
  what_is_it: 'Presenting an analysis\'s findings and interpretation to stakeholders clearly enough that they can act on it — verbally, in a written summary, or via a dashboard.',
  why_it_matters: 'An analysis that never gets understood by the people who need to act on it has no business impact, regardless of how rigorous the underlying work was.',
  prerequisites: ['interpret-results'],
  objectives: [
    'Explain why communication is treated as a core analyst skill, not an afterthought',
    'Describe a simple structure for presenting a finding',
  ],
  estimated_minutes: 25,
  resources: ['r-storytelling-with-data'],
  practice: [
    { id: 'ex-communicate-insights-1', title: 'Write a one-page summary', description: 'Take any finding from an earlier exercise and write a 3-sentence summary suitable for a non-technical stakeholder: what happened, why, what to do.' },
  ],
  verify: ['Can explain why communication is a core analyst skill', 'Can structure a finding as: what happened, why, what to do'],
  note: `
## 🎯 What is it?

**Communicating insights** means presenting an analysis's findings and interpretation clearly enough that stakeholders — who usually aren't technical and weren't involved in the analysis — can understand and act on it. It can take the form of a verbal readout, a written summary, a slide, or a dashboard.

## 💡 Why is it important?

- An analysis that's technically correct but poorly communicated has zero business impact — this is one of the most common gaps between junior and senior analysts.
- It's a distinct skill from the analysis itself, and interviewers frequently probe it directly ("walk me through how you'd present this finding to a non-technical VP").

## Core concept

A simple, reusable structure for communicating a finding:

\`\`\`
1. What happened      (the headline finding, in one sentence)
2. Why it happened     (the likely cause, briefly)
3. What to do about it (a specific, actionable recommendation)
\`\`\`

Lead with the headline, not the methodology — stakeholders want the answer first, with supporting detail available if they ask for it.

## 📊 Example

Poor communication: a 12-slide deck walking through every query and intermediate chart before reaching a conclusion. Good communication: "Revenue is on track to miss the Q1 target by 8%, mainly due to a slowdown in the EU region. I recommend reallocating 15% of the EU ad budget to the US region, which is currently outperforming its target." — headline, cause, recommendation, in three sentences, with supporting detail available on request.

## ⚠️ Common mistakes

- **Leading with methodology instead of the finding.** Most stakeholders want the answer first; the "how" belongs later or in an appendix.
- **Using unexplained jargon** (p-values, joins, grains) with a non-technical audience — translate the finding into plain business language.

## Related concepts

\`\`\`
Interpret Results
  ↓
Communicate Insights ← you are here
  ↓
Make Recommendations
\`\`\`
Closely related to the existing Storytelling topic (Visualization stage), which covers dashboard-level narrative in more depth.

## 🎤 Interview preparation

**Q: How would you present a technical finding to a non-technical executive?**
Short answer: Lead with the headline finding in plain language, briefly explain the likely cause, and end with a specific recommendation — save methodology and supporting detail for if they ask, rather than leading with it.

---

### ⚡ Quick Revision

**Communicate insights** → present findings so non-technical stakeholders can act on them
Structure: what happened → why → what to do. Lead with the headline, not the method.
`,
});

createSkill('make-recommendations', {
  title: 'Make Recommendations',
  category: 'Foundations',
  what_is_it: 'The final step of the analysis process — converting findings into a specific, actionable suggestion for what the business should do next.',
  why_it_matters: 'Most stakeholders ultimately want to know what to do, not just what the data shows — a strong recommendation is what closes the loop from data back to a business decision.',
  prerequisites: ['communicate-insights'],
  objectives: [
    'Explain what makes a recommendation specific and actionable',
    'Practice converting a finding into a recommendation',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-make-recommendations-1', title: 'Write a recommendation', description: 'Take a finding from an earlier exercise and write a specific, actionable recommendation based on it — not a vague suggestion.' },
  ],
  verify: ['Can explain what makes a recommendation actionable', 'Can write a specific recommendation from a finding'],
  note: `
## 🎯 What is it?

**Making recommendations** is the final step of the data analysis process — converting an interpreted, communicated finding into a specific, actionable suggestion for what the business should do next. It's the practical expression of prescriptive analytics, applied at the end of any individual analysis.

## 💡 Why is it important?

- It's what most stakeholders actually want from an analysis — the finding matters mainly because of what it implies should happen next.
- A strong recommendation is what separates an analyst who's seen as a strategic partner from one who's seen purely as a report-generator.

## Core concept

A good recommendation is:
- **Specific** — not "improve marketing," but "reallocate 15% of EU budget to the US region."
- **Actionable** — something a real person or team can actually do.
- **Tied to the finding** — clearly follows from the analysis, not a generic best practice.
- **Honest about confidence** — flags if the recommendation depends on an assumption or has real uncertainty.

## 📊 Example

Weak: "We should look into improving retention." Strong: "New users who don't complete onboarding within 48 hours retain 3x worse — I recommend adding a reminder email at the 24-hour mark, targeting the highest-drop-off step specifically."

## ⚠️ Common mistakes

- **Ending an analysis with only a finding, no recommendation** — leaving the "so what do we do" question for the stakeholder to answer themselves.
- **Making a recommendation broader than the data supports.** A finding about one region shouldn't be turned into a company-wide recommendation without checking whether it generalizes.

## Related concepts

\`\`\`
Communicate Insights
  ↓
Make Recommendations ← you are here
\`\`\`
This closes the Data Analysis Process chapter — the same nine steps (define → collect → understand → clean → transform → explore → analyze → visualize → interpret → communicate → recommend) recur, at different depths, across almost every stage of this roadmap.

## 🎤 Interview preparation

**Q: What makes a recommendation "good," beyond just being correct?**
Short answer: It should be specific and actionable (not vague), clearly tied to the finding that produced it, and honest about any assumptions or uncertainty behind it — a correct but vague recommendation is much less useful than a specific one.

---

### ⚡ Quick Revision

**Make recommendations** → convert a finding into a specific, actionable next step
Good recommendations are specific, actionable, tied to the finding, and honest about confidence.
`,
});

console.log('Created 10 Data Analysis Process skills (data-cleaning reused for "Clean Data").');
