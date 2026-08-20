// data_analyst_roadmap_curriculum.md — Section 01.1 "Introduction to Data
// Analytics". Reuses existing what-is-data-analytics, types-of-data-
// analytics, and data-analytics-lifecycle (their notes already cover
// several of this chapter's bullets — "What does a Data Analyst do",
// "vs Data Scientist", "vs Data Engineer" — so those aren't recreated as
// separate near-duplicate stubs). New skills fill the genuine gaps: what
// data itself is, vs Business Analyst specifically, the four analytics
// types individually, the analyst workflow, and the tools analysts use.
import { createSkill } from './_create.mjs';

createSkill('what-is-data', {
  title: 'What is Data?',
  category: 'Foundations',
  what_is_it: 'The raw facts, numbers, and observations recorded about the world — the material every later stage of analysis (cleaning, analyzing, visualizing) is built from.',
  why_it_matters: 'Before learning tools or techniques, an analyst needs a precise mental model of what "data" actually is, so later classifications (structured, qualitative, ratio, etc.) have something concrete to attach to.',
  prerequisites: [],
  objectives: [
    'Define data in plain language',
    'Distinguish data from information and from insight',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-what-is-data-1', title: 'Trace one data point', description: 'Pick one number from a dashboard you use and trace it backward: what raw event or record produced it?' },
  ],
  verify: ['Can define data in one sentence', 'Can explain the difference between data, information, and insight'],
  note: `
## 🎯 What is it?

**Data** is a raw fact, observation, or measurement recorded about the world — a number, a label, a timestamp, an event. On its own, a single piece of data usually means little: "47" is just a number until you know it's "47 orders placed yesterday."

Data becomes **information** once it's organized and given context (e.g., "47 orders were placed yesterday, up from 30 the day before"). Information becomes an **insight** once someone interprets *why* it matters and what to do about it (e.g., "orders spiked because of the email promotion — we should run more of them").

## 💡 Why is it important?

- It's the raw material every later step — cleaning, analyzing, visualizing — is built from; without a clear sense of what counts as data, it's easy to skip straight to tools without understanding what's actually being manipulated.
- The data → information → insight chain is the backbone of the entire analyst role: the job is to move raw data all the way to an insight someone can act on.
- It sets up every later classification (structured/unstructured, qualitative/quantitative) — those are all ways of describing *properties of data*.

## Core concept

\`\`\`
Data            "47"
  ↓
Information     "47 orders yesterday, up from 30"
  ↓
Insight         "Orders spiked because of yesterday's promo email — run more promos like it"
\`\`\`

Each step adds context and judgment. Data alone answers "what." Information adds "how much, compared to what." Insight adds "why, and what should we do."

## 📊 Example

A raw database row — \`order_id: 8842, amount: 59.00, date: 2024-03-14\` — is data. Summed across a day and compared to the prior day, it becomes information: "Tuesday's revenue was $12,400, down 8% from Monday." Investigated further and explained, it becomes an insight: "Tuesday's dip matches a site outage from 2–4pm — fixing that recovers the lost revenue."

## ⚠️ Common mistakes

- **Presenting raw data as if it were an insight.** A table of numbers with no interpretation doesn't tell a stakeholder what to do — that's the most common gap between a junior and a senior analyst.
- **Skipping straight from data to a conclusion** without the "information" step of proper context (comparison, trend, benchmark) — a number without context is easy to misread.

## Related concepts

\`\`\`
What is Data ← you are here
  ↓
What is Data Analytics
  ↓
Types of Data Analytics
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between data, information, and insight?**
Short answer: Data is a raw fact ("47"); information is data with context ("47 orders, up from 30"); insight is an interpretation that suggests an action ("orders rose because of the promo — run more").

---

### ⚡ Quick Revision

**Data** → raw facts and observations
**Information** → data with context
**Insight** → an interpretation that suggests an action
The analyst's job is to move all the way from data to insight.
`,
});

createSkill('data-analyst-vs-business-analyst', {
  title: 'Data Analyst vs Business Analyst',
  category: 'Foundations',
  what_is_it: 'How the data analyst role differs from the business analyst role — two frequently confused, sometimes overlapping titles with different core focuses.',
  why_it_matters: 'Job titles for these two roles overlap heavily in job postings — knowing the real difference helps you target the right roles and answer "why this role, not the other" confidently in an interview.',
  prerequisites: ['what-is-data-analytics'],
  objectives: [
    'Explain the core difference between a data analyst and a business analyst',
    'Identify which role a given job posting is more likely describing',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-da-vs-ba-1', title: 'Classify job postings', description: 'Find three job postings titled "Business Analyst" or "Data Analyst" and note which core activities (SQL, requirements gathering, dashboards, process mapping) each emphasizes.' },
  ],
  verify: ['Can state the core difference between the two roles', 'Can point to one skill each role emphasizes that the other doesn\'t'],
  note: `
## 🎯 What is it?

A **Data Analyst** focuses on working directly with data — querying, cleaning, analyzing, and visualizing it — to answer specific questions. A **Business Analyst** focuses more broadly on understanding business processes, gathering requirements, and translating business needs into solutions, which may or may not involve deep hands-on data work.

In practice, the titles overlap heavily and company-to-company usage varies a lot — some "Business Analyst" roles are essentially data analyst roles, and vice versa.

## 💡 Why is it important?

- Job postings use these titles inconsistently, so an analyst job-hunting needs to read the actual responsibilities, not just the title.
- Interviewers sometimes ask directly why you're pursuing "data analyst" over "business analyst" (or the reverse) — a vague answer suggests you haven't researched the distinction.

## Core concept

| | Data Analyst | Business Analyst |
|---|---|---|
| Core focus | Working directly with data (querying, cleaning, visualizing) | Understanding business processes and requirements |
| Typical output | Dashboards, reports, statistical findings | Requirements documents, process improvements, recommendations |
| Core tools | SQL, Excel, Python, BI tools | Excel, process-mapping tools, stakeholder interviews |
| Closer to | Engineering/technical side | Product/strategy side |

## 📊 Example

A data analyst is asked "why did signups drop last week?" — they'd query the database, segment the drop by channel, and report the finding with supporting numbers. A business analyst might instead be asked "should we change our onboarding process?" — they'd interview stakeholders, map the current process, and recommend a new one, using data as one input among several.

## ⚠️ Common mistakes

- **Assuming the two roles are strictly separate everywhere.** In smaller companies, one person often does both — deep hands-on data work *and* stakeholder-facing requirements gathering.
- **Picking a role based on title alone.** Always read the actual day-to-day responsibilities in a job posting; titles are inconsistent across companies.

## Related concepts

\`\`\`
What is Data Analytics
  ↓
Data Analyst vs Business Analyst ← you are here
\`\`\`
(See the existing "What is Data Analytics" topic for the analyst-vs-scientist and analyst-vs-engineer comparisons.)

## 🎤 Interview preparation

**Q: How would you describe the difference between a data analyst and a business analyst?**
Short answer: A data analyst spends most of their time directly in the data — querying, cleaning, visualizing; a business analyst spends more time on process and requirements, using data as one of several inputs. The titles overlap in practice, so it's worth reading a specific job's actual responsibilities.

---

### ⚡ Quick Revision

**Data Analyst** → hands-on with data: SQL, dashboards, statistical findings
**Business Analyst** → process/requirements-focused: stakeholder interviews, recommendations
Titles overlap heavily in practice — always check the actual responsibilities.
`,
});

createSkill('descriptive-analytics', {
  title: 'Descriptive Analytics',
  category: 'Foundations',
  what_is_it: 'Analytics that summarizes what has already happened — the most common and foundational type of analysis a data analyst performs.',
  why_it_matters: "It's the type of analysis behind almost every dashboard and report — before diagnosing why something happened or predicting what's next, you first have to accurately describe what did happen.",
  prerequisites: ['types-of-data-analytics'],
  objectives: [
    'Define descriptive analytics and give an example',
    'Explain why descriptive analytics is usually the first step in any analysis',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-descriptive-analytics-1', title: 'Write a descriptive summary', description: 'Pick any metric you track (spending, steps, screen time) and write one sentence purely describing what happened last week — no explanation, no prediction.' },
  ],
  verify: ['Can define descriptive analytics', 'Can distinguish it from diagnostic analytics'],
  note: `
## 🎯 What is it?

**Descriptive analytics** answers "what happened?" — it summarizes historical data into a clear picture of past events, using counts, sums, averages, and trends. "Revenue was $1.2M last month" and "signups grew 8% week over week" are both descriptive statements.

## 💡 Why is it important?

- It's the foundation every other type of analytics builds on — you can't diagnose *why* something happened, or predict what's next, without first accurately describing what did happen.
- Nearly every dashboard a business runs is primarily descriptive analytics — KPI cards, trend lines, and summary tables.
- It's usually the fastest, cheapest type of analysis to produce, which is why it's almost always the first step.

## Core concept

| Type | Question | Example |
|---|---|---|
| **Descriptive** | What happened? | "Revenue was $1.2M last month" |
| Diagnostic | Why did it happen? | "Revenue dropped because of a stockout" |
| Predictive | What will happen? | "Revenue is forecast to grow 5% next month" |
| Prescriptive | What should we do? | "Increase inventory by 20% to avoid the next stockout" |

## 📊 Example

A weekly sales dashboard showing total revenue, order count, and average order value for the past 8 weeks is pure descriptive analytics — it summarizes what happened, with no explanation of *why* revenue moved, and no prediction of what comes next.

## ⚠️ Common mistakes

- **Stopping at descriptive analytics when a stakeholder actually wanted diagnostic or prescriptive insight.** "Revenue dropped 10%" (descriptive) isn't useful on its own if the real question was "why, and what do we do about it?"
- **Adding unsupported explanations into a descriptive report.** "Revenue dropped because of the weather" is a diagnostic claim — it needs its own investigation, not just an assumption tacked onto a descriptive summary.

## Related concepts

\`\`\`
Types of Data Analytics
  ↓
Descriptive Analytics ← you are here (what happened)
  ↓
Diagnostic Analytics (why it happened)
  ↓
Predictive Analytics (what will happen)
  ↓
Prescriptive Analytics (what to do)
\`\`\`

## 🎤 Interview preparation

**Q: Give an example of a descriptive analytics statement versus a diagnostic one.**
Short answer: Descriptive: "Weekly signups fell from 500 to 420." Diagnostic: "Signups fell because a broken signup form silently rejected 15% of attempts." The first only describes; the second explains.

---

### ⚡ Quick Revision

**Descriptive analytics** → summarizes what already happened — the most common, foundational type of analysis
Nearly every dashboard is primarily descriptive.
`,
});

createSkill('diagnostic-analytics', {
  title: 'Diagnostic Analytics',
  category: 'Foundations',
  what_is_it: 'Analytics that investigates why something happened — digging past a descriptive summary to find the underlying cause.',
  why_it_matters: 'A number moving is rarely the end of the question a stakeholder is really asking — diagnostic analytics is what turns "revenue dropped" into an explanation someone can act on.',
  prerequisites: ['descriptive-analytics'],
  objectives: [
    'Define diagnostic analytics and give an example',
    'Describe one common technique used in diagnostic analysis',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-diagnostic-analytics-1', title: 'Diagnose a change', description: 'Take a descriptive statement ("X went up/down") about anything you track, and list three plausible causes you\'d investigate to explain it.' },
  ],
  verify: ['Can define diagnostic analytics', 'Can name a technique used to find a root cause'],
  note: `
## 🎯 What is it?

**Diagnostic analytics** answers "why did this happen?" — it digs past a descriptive summary ("revenue dropped 10%") to find the underlying cause, typically by segmenting the data, comparing time periods, and looking for correlated events.

## 💡 Why is it important?

- A stakeholder who sees "revenue dropped 10%" almost always immediately asks "why?" — diagnostic analytics is what answers that follow-up.
- It's where **root cause analysis** and **segmentation** — core analyst techniques — get used the most.
- Correctly diagnosing a cause (versus guessing) is what separates a credible analysis from an unsupported assumption.

## Core concept

Typical diagnostic technique: **segment and compare**.

| Step | Example |
|---|---|
| 1. Confirm the change is real | Re-pull the number, rule out a reporting bug |
| 2. Segment | By region, channel, product, customer type |
| 3. Compare | Find where the change is concentrated vs. flat |
| 4. Correlate | Check for events lining up with the change (a price change, an outage, a competitor promo) |

## 📊 Example

Descriptive: "Revenue dropped 10% last week." Diagnostic investigation: segmenting by region shows the drop is entirely in one country; checking recent changes reveals a payment provider outage in that country for 6 hours — that outage is the diagnosed cause.

## ⚠️ Common mistakes

- **Jumping to a cause without segmenting first.** "Revenue dropped because of the economy" is a guess; segmenting to find *where* the drop is concentrated usually points to a much more specific, verifiable cause.
- **Confusing correlation with causation** — two things happening around the same time doesn't prove one caused the other; diagnostic analysis should look for a plausible, verifiable mechanism, not just a coincidence in timing.

## Related concepts

\`\`\`
Descriptive Analytics (what happened)
  ↓
Diagnostic Analytics ← you are here (why it happened)
  ↓
Predictive Analytics (what will happen)
\`\`\`
Closely related to Root Cause Analysis and Correlation vs Causation (see Analytical Thinking chapter).

## 🎤 Interview preparation

**Q: Walk through how you'd diagnose a 10% weekly revenue drop.**
Short answer: Confirm the drop is real (rule out a data bug), segment by region/channel/product to find where it's concentrated, then look for a plausible cause that lines up in time and scope with the concentrated segment — rather than guessing at a broad explanation.

---

### ⚡ Quick Revision

**Diagnostic analytics** → answers "why did this happen?" via segmenting, comparing, and correlating
Core technique: confirm → segment → compare → correlate.
`,
});

createSkill('predictive-analytics', {
  title: 'Predictive Analytics',
  category: 'Foundations',
  what_is_it: 'Analytics that forecasts what is likely to happen next, based on patterns in historical data.',
  why_it_matters: 'Businesses plan budgets, staffing, and inventory around forecasts — a data analyst is often expected to at least understand simple predictive methods, even without building full machine-learning models.',
  prerequisites: ['diagnostic-analytics'],
  objectives: [
    'Define predictive analytics and give an example',
    'Explain the difference between predictive analytics and diagnostic analytics',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-predictive-analytics-1', title: 'Make a simple forecast', description: 'Using the last 4–6 data points of any trend you track, write a simple prediction for the next period and state your reasoning.' },
  ],
  verify: ['Can define predictive analytics', 'Can name one simple predictive technique'],
  note: `
## 🎯 What is it?

**Predictive analytics** answers "what's likely to happen next?" — using patterns in historical data to forecast a future value or outcome. "Revenue is forecast to grow 5% next quarter based on the last 8 quarters' trend" is a predictive statement.

## 💡 Why is it important?

- Businesses plan budgets, staffing, and inventory around forecasts — being able to build or interpret a simple prediction is a practical, frequently-used analyst skill.
- Entry-level data analysts typically use simpler predictive methods (trend extrapolation, moving averages, basic regression) rather than full machine-learning models — that deeper work usually belongs to a data scientist.
- It builds directly on Statistics topics like Regression and Forecasting/Trend Analysis covered later in the roadmap.

## Core concept

| Type | Question | Example |
|---|---|---|
| Diagnostic | Why did it happen? | "Revenue dropped because of a stockout" |
| **Predictive** | What will happen? | "Revenue is forecast to grow 5% next month" |
| Prescriptive | What should we do? | "Increase inventory by 20%" |

Common entry-level predictive techniques: moving averages, simple linear regression, and trend extrapolation.

## 📊 Example

Given the last 12 months of revenue showing a steady 3% month-over-month increase, a simple predictive statement is: "If the trend continues, next month's revenue is likely to land around 3% above this month's." This is a lightweight forecast, not a formal machine-learning model — and it's often exactly what a business needs.

## ⚠️ Common mistakes

- **Presenting a forecast as a certainty.** A prediction should always come with a sense of its uncertainty or a range, not a single confident number.
- **Extrapolating a trend blindly without checking for seasonality or a one-off event** that might not repeat (e.g., a holiday spike shouldn't be assumed to continue every month).

## Related concepts

\`\`\`
Diagnostic Analytics (why it happened)
  ↓
Predictive Analytics ← you are here (what will happen)
  ↓
Prescriptive Analytics (what to do about it)
\`\`\`
Builds toward Statistics — Regression and Business Analytics — Forecasting & Trend Analysis, covered later in the roadmap.

## 🎤 Interview preparation

**Q: What's the difference between predictive and diagnostic analytics?**
Short answer: Diagnostic analytics explains a past event ("why did revenue drop"); predictive analytics forecasts a future one ("what will revenue likely be next month"), typically using patterns found during diagnostic and descriptive analysis.

---

### ⚡ Quick Revision

**Predictive analytics** → forecasts what's likely to happen next, based on historical patterns
Entry-level analysts typically use simple techniques: moving averages, trend extrapolation, basic regression.
`,
});

createSkill('prescriptive-analytics', {
  title: 'Prescriptive Analytics',
  category: 'Foundations',
  what_is_it: 'Analytics that recommends a specific action to take, based on descriptive, diagnostic, and predictive findings.',
  why_it_matters: "It's the type of analytics that most directly drives business decisions — the ultimate goal of most real analyst work is to end with a clear, actionable recommendation, not just a finding.",
  prerequisites: ['predictive-analytics'],
  objectives: [
    'Define prescriptive analytics and give an example',
    'Explain how prescriptive analytics builds on the other three types',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-prescriptive-analytics-1', title: 'Turn a finding into a recommendation', description: 'Take any finding you\'ve made about a personal metric (spending, time use) and write one specific, actionable recommendation based on it.' },
  ],
  verify: ['Can define prescriptive analytics', 'Can turn a descriptive finding into a prescriptive recommendation'],
  note: `
## 🎯 What is it?

**Prescriptive analytics** answers "what should we do?" — it turns descriptive, diagnostic, and predictive findings into a specific, actionable recommendation. "Increase inventory by 20% ahead of next month's forecasted demand spike" is a prescriptive statement.

## 💡 Why is it important?

- It's the type of analytics that most directly drives a business decision — most real-world analyst work is expected to end here, not stop at a description or a diagnosis.
- Interviewers and stakeholders consistently reward analysts who end an analysis with a clear recommendation rather than just a pile of numbers.
- It requires synthesizing all three earlier types (what happened, why, what's likely next) into one clear next step.

## Core concept

| Type | Question | Example |
|---|---|---|
| Descriptive | What happened? | "Revenue dropped 10%" |
| Diagnostic | Why? | "Because of a stockout" |
| Predictive | What's next? | "Demand is forecast to rise again next month" |
| **Prescriptive** | What should we do? | "Increase inventory by 20% before next month" |

## 📊 Example

Full chain: revenue dropped 10% (descriptive) → because a key product went out of stock for a week (diagnostic) → demand for that product is trending back up (predictive) → recommendation: pre-order 20% more stock than usual ahead of the next demand cycle (prescriptive). The recommendation is the part a stakeholder actually acts on.

## ⚠️ Common mistakes

- **Giving a vague recommendation** ("we should improve inventory management") instead of a specific, actionable one ("increase safety stock of Product X by 20% starting next order cycle").
- **Skipping straight to a recommendation without the supporting descriptive/diagnostic/predictive chain** — a recommendation without evidence is much easier for a stakeholder to dismiss.

## Related concepts

\`\`\`
Descriptive → Diagnostic → Predictive → Prescriptive Analytics ← you are here
\`\`\`
This closes the four types of data analytics — most real analyses move through all four, ending with a recommendation someone can act on.

## 🎤 Interview preparation

**Q: Why is prescriptive analytics considered the "highest value" type of the four?**
Short answer: Because it's the only one that directly tells a stakeholder what to do — descriptive, diagnostic, and predictive analytics all build toward it, but a business ultimately acts on a recommendation, not a description.

---

### ⚡ Quick Revision

**Prescriptive analytics** → recommends a specific action, built on descriptive + diagnostic + predictive findings
The type of analysis most directly tied to a business decision.
`,
});

createSkill('typical-analyst-workflow', {
  title: 'Typical Analyst Workflow',
  category: 'Foundations',
  what_is_it: "The recurring, day-to-day pattern of work a data analyst actually follows — receive a question, pull data, analyze it, and report back — repeated across most tasks.",
  why_it_matters: 'Knowing this pattern in advance sets realistic expectations for what the job feels like day to day, beyond just the list of tools and techniques.',
  prerequisites: ['data-analytics-lifecycle'],
  objectives: [
    'Describe the typical steps in a data analyst\'s day-to-day workflow',
    'Distinguish the analyst workflow from the broader data analytics lifecycle',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-analyst-workflow-1', title: 'Map a real request', description: 'Imagine a stakeholder asks "why did our conversion rate drop last week?" — write out the concrete steps you\'d take from that message to a final answer.' },
  ],
  verify: ['Can list the typical steps of an analyst\'s day-to-day workflow', 'Can explain how this differs from the broader analytics lifecycle'],
  note: `
## 🎯 What is it?

The **typical analyst workflow** is the recurring day-to-day pattern most analyst tasks follow: a stakeholder asks a question → the analyst clarifies it → pulls and cleans the relevant data → analyzes it → builds a chart or report → presents findings and a recommendation. It's the practical, everyday shape of the broader Data Analytics Lifecycle, applied to one specific request at a time.

## 💡 Why is it important?

- It sets realistic day-to-day expectations for the job — a large share of the work is clarifying vague requests and pulling/cleaning data, not just "doing analysis."
- Recognizing this pattern helps a new analyst move faster: instead of guessing where to start on a new request, they can follow the same repeatable steps.

## Core concept

| Step | What it looks like |
|---|---|
| 1. Receive a question | Often vague: "can you check on our numbers?" |
| 2. Clarify | Ask what decision this will inform, what time window, which metric exactly |
| 3. Pull data | Query a database, export a report |
| 4. Clean & prepare | Handle missing values, duplicates, wrong types |
| 5. Analyze | Summarize, segment, compare |
| 6. Visualize | Build a chart or dashboard |
| 7. Communicate | Present findings and a recommendation |

## 📊 Example

A marketing manager asks, "How did last week's email campaign do?" A typical workflow: clarify what "did well" means (opens? clicks? conversions?) → pull the campaign's data from the email platform and the sales database → clean and join them → calculate open rate, click rate, and conversion rate → chart them against the last 3 campaigns for comparison → present a one-page summary with a recommendation (e.g., "this subject line outperformed — reuse the format").

## ⚠️ Common mistakes

- **Skipping the clarify step** and pulling data based on an assumption about what the stakeholder meant — this often leads to redoing the whole analysis.
- **Treating every request as a from-scratch project** instead of recognizing the repeatable shape — experienced analysts build reusable queries and templates specifically because this workflow repeats so often.

## Related concepts

\`\`\`
Data Analytics Lifecycle (the broader, formal process)
  ↓
Typical Analyst Workflow ← you are here (the everyday, request-by-request version)
  ↓
Tools Used by Data Analysts
\`\`\`

## 🎤 Interview preparation

**Q: Walk me through your typical process when a stakeholder sends you a data question.**
Short answer: Clarify exactly what's being asked and why, pull and clean the relevant data, analyze and visualize it, then present findings with a clear recommendation — not just raw numbers.

---

### ⚡ Quick Revision

**Typical analyst workflow** → clarify → pull data → clean → analyze → visualize → communicate
The everyday, repeatable shape of most analyst requests.
`,
});

createSkill('tools-used-by-data-analysts', {
  title: 'Tools Used by Data Analysts',
  category: 'Foundations',
  what_is_it: 'A map of the core tool categories a data analyst uses — spreadsheets, SQL, BI/visualization tools, and Python — and what each is typically used for.',
  why_it_matters: 'It gives a concrete answer to "what will I actually be learning," and previews how the rest of this roadmap\'s stages map onto real job tools.',
  prerequisites: ['typical-analyst-workflow'],
  objectives: [
    'Name the core tool categories a data analyst uses',
    'Match a common analyst task to the tool category most likely used for it',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-analyst-tools-1', title: 'Map tasks to tools', description: 'List five tasks a data analyst does day to day, and note which tool category (spreadsheets, SQL, BI tool, Python) is most likely used for each.' },
  ],
  verify: ['Can name the core tool categories a data analyst uses', 'Can match at least two tasks to the right tool category'],
  note: `
## 🎯 What is it?

Data analysts rely on a small set of tool categories, each suited to a different part of the workflow: **spreadsheets** (Excel/Google Sheets) for quick, flexible analysis; **SQL** for querying data stored in databases; **BI/visualization tools** (Power BI, Tableau) for dashboards stakeholders use directly; and **Python** (with pandas, NumPy) for larger or more repeatable analysis than a spreadsheet comfortably handles.

## 💡 Why is it important?

- It previews exactly what the rest of this roadmap teaches — each stage (Spreadsheets, SQL, Python, Visualization, Power BI/Tableau) maps directly onto one of these tool categories.
- Job postings frequently list required tools without explaining what each is for — knowing this map helps you read a posting and immediately understand the role's actual day-to-day work.

## Core concept

| Tool category | Used for | Roadmap stage |
|---|---|---|
| Spreadsheets (Excel/Sheets) | Quick analysis, small datasets, ad hoc reports | Spreadsheets |
| SQL | Querying data stored in a database | SQL |
| Python (pandas, NumPy) | Larger, repeatable, more complex analysis | Python |
| BI tools (Power BI, Tableau) | Interactive dashboards for stakeholders | Power BI / Tableau |
| Statistics | Testing whether a pattern is real, not noise | Statistics |

## 📊 Example

A typical week might involve: pulling data with a SQL query, doing a first-pass exploration in a spreadsheet, running a deeper analysis in Python once the spreadsheet gets unwieldy, then publishing the final result as a Power BI dashboard stakeholders can explore themselves — each tool used where it's strongest.

## ⚠️ Common mistakes

- **Assuming you need to master every tool before applying for jobs.** Most postings emphasize one or two of these categories (commonly SQL + one BI tool, or SQL + Excel) rather than requiring deep expertise in all of them.
- **Sticking with a spreadsheet long after a dataset has outgrown it** — a common signal it's time to move to SQL or Python is a spreadsheet that's become slow, error-prone, or too large to sanity-check by eye.

## Related concepts

\`\`\`
Typical Analyst Workflow
  ↓
Tools Used by Data Analysts ← you are here
\`\`\`
This closes the "Introduction to Data Analytics" chapter — the rest of this roadmap teaches each of these tool categories in depth, in roughly this order.

## 🎤 Interview preparation

**Q: Which tools would you use to investigate a sudden drop in weekly revenue?**
Short answer: Start with SQL to pull the relevant order data from the database, do a first-pass exploration in a spreadsheet or Python, and if it becomes a recurring report, build it into a BI dashboard so stakeholders can monitor it themselves going forward.

---

### ⚡ Quick Revision

**Core analyst tools** → Spreadsheets (quick analysis) · SQL (querying databases) · Python (larger/repeatable analysis) · BI tools (dashboards)
Most postings emphasize SQL plus one or two of the others, not all of them at expert level.
`,
});

console.log('Created 8 Introduction to Data Analytics skills.');
