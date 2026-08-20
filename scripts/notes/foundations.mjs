import { setNote } from './_lib.mjs';

setNote('what-is-data-analytics', `
## 🎯 What is it?

**Data analytics** is the practice of examining raw data to find useful patterns, answer questions, and support decisions. A **Data Analyst** is the person who does this day to day: pulling data, cleaning it, analyzing it, and explaining what it means to people who will act on it.

Think of a business like a car dashboard full of gauges. Data is the raw fuel and sensor readings; the data analyst is the person who reads those gauges, notices something is off, and tells the driver what to do about it — rather than just handing over a spreadsheet of numbers.

## 💡 Why is it important?

- It's the role you're training for — getting a clear, accurate picture of what it involves prevents months spent learning the wrong skills.
- Companies in every industry — retail, finance, healthcare, tech, logistics — run on decisions informed by data analysts.
- It sits at the intersection of business and technical work: understanding *what to ask* is just as important as knowing *how to query*.
- It connects directly to hiring: interviewers frequently start with "tell me what a data analyst does," and a vague answer is an easy way to lose credibility early.

## Core concept

### What a data analyst actually does, day to day

| Activity | Example |
|---|---|
| Pull data | Query a database or export a report |
| Clean data | Fix missing values, duplicates, inconsistent formats |
| Analyze | Summarize, segment, compare, find trends |
| Visualize | Build charts and dashboards |
| Communicate | Present findings and a recommendation to stakeholders |

### Data Analyst vs. Data Scientist vs. Data Engineer

| Role | Core focus | Typical tools |
|---|---|---|
| **Data Analyst** | Answering business questions with existing data; reporting and dashboards | SQL, Excel, BI tools (Power BI/Tableau), light Python |
| **Data Scientist** | Building predictive models and running experiments | Python/R, machine learning, statistics |
| **Data Engineer** | Building and maintaining the pipelines that move and store data | SQL, Python, cloud data warehouses, orchestration tools |

A simple way to remember it: the **engineer** builds the pipes, the **analyst** reads what flows through them and explains it, the **scientist** builds models to predict what will flow through them next.

### Where data analysts work

Nearly every mid-to-large company has analysts — e-commerce, SaaS, banking, healthcare, media, logistics, and government. Common team homes: Business Intelligence, Marketing Analytics, Product Analytics, Finance/FP&A, and Operations.

## 📊 Example

A retail company notices weekly sales dipped 12% last month. A data analyst would:
1. Confirm the number is real (pull the sales query, check for a reporting bug).
2. Segment it — by region, product category, channel — to find *where* the dip is concentrated.
3. Look for a plausible cause (a stockout, a pricing change, a competitor promotion).
4. Present a one-page summary: what happened, likely cause, and a recommended next step.

That loop — confirm, segment, explain, recommend — is the shape of most real analyst work, regardless of industry.

## Real-world Data Analyst use cases

- **Sales analysis:** explaining a revenue dip or spike to leadership.
- **Marketing analysis:** reporting which campaigns are actually driving signups.
- **Product analysis:** finding where users drop off in an onboarding flow.
- **Operations analysis:** identifying which warehouse is causing shipping delays.

## Related concepts

\`\`\`
What is Data Analytics
  ↓
Types of Data Analytics (descriptive/diagnostic/predictive/prescriptive)
  ↓
The Data Analytics Lifecycle
  ↓
Business Understanding
  ↓
KPIs & Metrics
\`\`\`

This topic is the entry point — every other Foundations topic builds on having a clear picture of the role itself.

## ⚠️ Common mistakes

- **Confusing the analyst role with the data scientist role** and spending months learning machine learning before ever writing a real SQL query or building a dashboard.
- **Assuming the job is mostly about tools.** In reality, a large part of the job is understanding the business question well enough to know what to pull and why.
- **Underestimating the communication side.** An analysis that's correct but poorly explained often has zero business impact.

## Practice questions

### Easy
1. In one sentence, explain what a data analyst does to someone with no technical background.
2. Name two industries that employ data analysts.

### Medium
3. A friend says "data analyst, data scientist, same thing basically." Give one concrete difference that would correct them.

### Interview/Advanced
4. A hiring manager asks: "Why did you pick data analyst over data scientist?" Draft a two-sentence answer.

<details>
<summary><strong>Answer / Solution</strong></summary>

1. Example: "A data analyst looks at a company's data to figure out what's happening and why, then explains it to the people making decisions."
2. Example: retail/e-commerce, healthcare, finance, logistics, media — any two.
3. Example: a data scientist typically builds predictive models and runs experiments; a data analyst typically answers existing business questions with reporting, dashboards, and SQL — with far less model-building.
4. Example: "I'm energized by translating data into a decision a business can act on right away, rather than spending most of my time building and tuning predictive models — the analyst role's mix of business context and hands-on querying fits how I like to work."

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What does a data analyst do?**
Short answer: Pulls, cleans, analyzes, and visualizes data to answer business questions, then communicates findings and recommendations to stakeholders.

### Conceptual questions
**Q: How is a data analyst different from a data engineer?**
Short answer: A data engineer builds and maintains the infrastructure and pipelines that make data available and reliable; a data analyst consumes that data to answer specific business questions.

### Scenario-based questions
**Q: A stakeholder emails "can you check on our numbers?" — what's your first move?**
Short answer: Ask clarifying questions before touching any data — which numbers, over what time period, and what decision this will inform — since "the numbers" is too vague to act on.

### Practical questions
**Q: Walk through, at a high level, how you'd investigate a reported drop in weekly signups.**
Short answer: Confirm the drop is real, segment by channel/region/device to isolate where it's concentrated, check for an obvious cause (outage, pricing change, seasonality), then summarize findings with a recommendation.

## Interview traps / tricky points

- Interviewers sometimes probe whether you actually understand the *boundary* between analyst/scientist/engineer roles — vague or interchangeable answers signal you haven't worked in or researched the field closely.
- "Tell me about a time you used data to make a decision" is a very common opener — have a concrete, specific example ready, not a general statement about "loving data."

## Best practices

- Always confirm you understand the actual business question before writing a single query.
- Default to the simplest analysis that answers the question — don't reach for a complex method when a straightforward summary will do.
- Practice explaining your findings to a non-technical audience; it's a distinct skill from the analysis itself.

---

### ⚡ Quick Revision

**Data analyst** → answers business questions using existing data (query, clean, analyze, visualize, communicate)
**Data scientist** → builds predictive models and runs experiments
**Data engineer** → builds and maintains the data pipelines/infrastructure
**Core loop** → confirm → segment → explain → recommend
Remember: the job is at least as much about the business question as it is about the tool.
`);

setNote('types-of-data-analytics', `
## 🎯 What is it?

There are four types of analytics, and each answers a different kind of question:

| Type | Question it answers |
|---|---|
| **Descriptive** | What happened? |
| **Diagnostic** | Why did it happen? |
| **Predictive** | What's likely to happen next? |
| **Prescriptive** | What should we do about it? |

Think of a doctor visit: descriptive is your temperature reading, diagnostic is figuring out you have the flu, predictive is estimating how long you'll be sick, and prescriptive is the doctor telling you what medicine to take.

## 💡 Why is it important?

- Every analysis request implicitly asks for one (or more) of these four types — misreading which one is being asked for wastes time and produces the wrong deliverable.
- Not every question needs a machine-learning model. Most business questions are actually descriptive or diagnostic, and treating them otherwise is over-engineering.
- Interviewers use this framework constantly to test whether you can scope a problem correctly before diving in.
- It's a shared vocabulary — saying "this is a diagnostic question" instantly communicates the right approach to a teammate or stakeholder.

## Core concept

### Descriptive Analytics — "What happened?"
Summarizes historical data: totals, averages, trends over time. This is the majority of dashboards and standard reports.

*Example:* "Total revenue last month was $1.2M, up 8% from the prior month."

### Diagnostic Analytics — "Why did it happen?"
Digs into the descriptive result to find a driver — usually by segmenting the data (by region, channel, product, cohort) or comparing it to a related metric.

*Example:* "Revenue grew mainly because the West region had a 20% jump in average order value, not order count."

### Predictive Analytics — "What's likely to happen next?"
Uses historical patterns to forecast a future outcome — anything from a simple trendline to a statistical or machine-learning model.

*Example:* "Based on current trends, next month's revenue is likely to land between $1.25M and $1.35M."

### Prescriptive Analytics — "What should we do?"
Goes one step further than prediction: recommends a specific action, often by weighing trade-offs or running a simulation/optimization.

*Example:* "Increase West-region ad spend by 15% — modeling shows this is the highest-ROI lever available this quarter."

## Types / Variations

| Type | Typical technique | Analyst effort |
|---|---|---|
| Descriptive | Aggregation, dashboards, reporting | Low–medium |
| Diagnostic | Segmentation, correlation, drill-down | Medium |
| Predictive | Trend analysis, regression, forecasting | Medium–high |
| Prescriptive | Optimization, simulation, decision rules | High |

## 📊 Example

A subscription company sees churn rise. Here's the same underlying problem answered four ways:

- **Descriptive:** "Monthly churn rate rose from 3% to 5%."
- **Diagnostic:** "The increase is concentrated in customers on the free-trial-to-paid conversion, mostly in month 2."
- **Predictive:** "If this trend continues, churn will reach 7% by next quarter."
- **Prescriptive:** "Add a month-2 check-in email — a pilot on a similar cohort reduced churn by 1.5 points."

## Real-world Data Analyst use cases

- **Sales analysis:** descriptive dashboard of monthly revenue; diagnostic drill-down when a region underperforms.
- **Marketing analysis:** predictive forecast of next quarter's leads based on current spend trends.
- **Product analysis:** prescriptive recommendation on which onboarding step to redesign first, based on modeled drop-off impact.

## ⚠️ Common mistakes

- **Jumping straight to prediction/prescription when the question is actually descriptive.** Most stakeholder requests just need a clear, accurate summary — building a model is unnecessary and slower.
- **Treating a diagnostic finding as causal proof.** Segmenting data can reveal a strong association, but it doesn't prove causation without a proper experiment (see [A/B Testing](/skills/ab-testing)).
- **Confusing "predictive" with "certain."** A forecast is a range of likely outcomes, not a guarantee — always communicate uncertainty.

## Related concepts

\`\`\`
What is Data Analytics
  ↓
Types of Data Analytics ← you are here
  ↓
The Data Analytics Lifecycle
  ↓
KPIs & Metrics
  ↓
Statistics (Descriptive Stats → Hypothesis Testing)
  ↓
Forecasting & Trend Analysis (predictive)
\`\`\`

## Practice questions

### Easy
1. Classify: "How many units did we sell last week?" — which type of analytics?
2. Classify: "Why did website traffic drop yesterday?" — which type?

### Medium
3. A stakeholder asks "will we hit our Q4 sales target?" — which type of analytics does this require, and what would you need to answer it well?

### Interview/Advanced
4. Give an example of a business question that requires *both* diagnostic and prescriptive analytics to fully answer, and explain why one type alone isn't enough.

<details>
<summary><strong>Answer / Solution</strong></summary>

1. Descriptive — it's a simple historical summary.
2. Diagnostic — it's asking for a cause.
3. Predictive — you'd need historical sales trends and, ideally, known factors like seasonality or pipeline data to forecast whether the target is reachable.
4. Example: "Why is churn rising, and what should we do about it?" — diagnostic identifies the driver (e.g., a broken onboarding step), but stopping there leaves the business without an action; prescriptive analytics is needed to recommend and prioritize a fix.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What are the four types of analytics?**
Short answer: Descriptive (what happened), diagnostic (why), predictive (what's next), prescriptive (what to do).

### Conceptual questions
**Q: What's the difference between diagnostic and predictive analytics?**
Short answer: Diagnostic looks backward to explain a past result; predictive looks forward to estimate a future one.

### Scenario-based questions
**Q: Your manager asks you to "figure out what's going on with sign-ups." What type of analytics do you start with, and why?**
Short answer: Start descriptive (confirm the trend is real and quantify it), then move diagnostic (segment to find the driver) — jumping to prediction or prescription before understanding the "what" and "why" is premature.

### Practical questions
**Q: How would you tell a stakeholder that a forecast is a range, not a guarantee, without sounding evasive?**
Short answer: Frame it concretely — "based on current trends, we expect revenue between $1.2M and $1.35M, with $1.28M as our best estimate" — a range with a best estimate reads as precise, not uncertain.

## Interview traps / tricky points

- Candidates often conflate diagnostic analytics (correlation/segmentation) with proof of causation — interviewers frequently probe this distinction directly.
- "Predictive" doesn't require machine learning — a simple trendline or moving average is still predictive analytics if it's estimating the future.

## Best practices

- Identify which type of analytics a request actually needs *before* choosing a method — it's the single fastest way to avoid over- or under-engineering an answer.
- When presenting diagnostic findings, explicitly flag whether you've established causation or only a correlation/pattern.
- Pair predictive numbers with a range and the key assumptions behind them, not just a single point estimate.

---

### ⚡ Quick Revision

**Descriptive** → what happened (totals, trends, reporting)
**Diagnostic** → why it happened (segmentation, drill-down)
**Predictive** → what's likely next (forecasting, trendlines, models)
**Prescriptive** → what to do about it (recommendations, optimization)
Remember: most business questions are descriptive or diagnostic — don't over-engineer with prediction/prescription unless the question actually calls for it.
`);

setNote('data-analytics-lifecycle', `
## 🎯 What is it?

The **Data Analytics Lifecycle** is the repeatable sequence a real analysis follows, from "what are we even asking?" to "here's what we found and what to do." A common version has four stages: **Ask & Plan → Collect & Clean → Analyze → Visualize & Communicate.**

Think of it like a recipe: skipping "read the whole recipe first" (Ask & Plan) or "taste before serving" (Visualize & Communicate) doesn't just make the process messier — it can ruin the result even if every individual step was technically done correctly.

## 💡 Why is it important?

- Without this mental model, it's easy to jump straight into a dashboard or a chart before the question is even clearly defined — wasted effort chasing the wrong answer.
- It gives you a way to diagnose a stalled analysis: "we're stuck" almost always maps to a specific stage.
- Every real analyst project — from a two-hour ad-hoc request to a multi-week dashboard build — follows this shape, just at different scales.
- Interviewers frequently ask you to "walk me through how you'd approach this problem," and structuring your answer around the lifecycle signals a mature process.

## Core concept

### 1. Ask & Plan
Define the question precisely and agree on what a good answer looks like *before* touching data. Includes clarifying the audience, the decision it will inform, and the deadline.

### 2. Collect & Clean
Gather the data needed (queries, exports, third-party sources) and get it into a trustworthy, analysis-ready state — handling missing values, duplicates, and formatting issues (see [Data Cleaning & Quality](/skills/data-cleaning)).

### 3. Analyze
Apply the right method to the clean data — a simple summary, a segmentation, a statistical test, or a model — chosen to match the type of question (see [Types of Data Analytics](/skills/types-of-data-analytics)).

### 4. Visualize & Communicate
Turn the result into something a decision-maker can understand and act on: the right chart, a clear headline finding, and a specific recommendation.

| Stage | Typical output | Common failure if skipped |
|---|---|---|
| Ask & Plan | A precise, written question | Analysis answers the wrong thing |
| Collect & Clean | A trustworthy dataset | Garbage-in, garbage-out results |
| Analyze | A finding | Wrong method for the question |
| Visualize & Communicate | A decision-ready deliverable | Correct work has zero business impact |

## 📊 Example

A stakeholder says: "Sales feel slow this quarter." Walking the lifecycle:

1. **Ask & Plan:** Reframe as "Is Q3 revenue tracking below Q2, and if so, by how much and in which segment?"
2. **Collect & Clean:** Pull Q2 and Q3 order data; dedupe, fix currency formatting, exclude test orders.
3. **Analyze:** Compare Q3-to-date revenue against the same period in Q2, segmented by region.
4. **Visualize & Communicate:** A one-slide chart showing the two quarters side by side, with a one-sentence headline: "Q3 revenue is down 9%, concentrated in the East region."

## Real-world Data Analyst use cases

- **Sales analysis:** the full lifecycle behind a quarterly business review deck.
- **Product analysis:** a lifecycle run in miniature for a single Slack question like "did the new onboarding flow help?"
- **Operations analysis:** a recurring weekly report that re-runs Collect → Analyze → Communicate on a schedule, having only done Ask & Plan once.

## ⚠️ Common mistakes

- **Skipping "Ask & Plan" and going straight to a query.** This is the single most common cause of analyses that technically work but answer the wrong question.
- **Treating "Analyze" as the finish line.** Good analysis with no clear communication rarely changes a decision.
- **Cleaning data without a defined question first**, which leads to over-cleaning fields that don't matter and under-cleaning ones that do.

## Related concepts

\`\`\`
What is Data Analytics
  ↓
The Data Analytics Lifecycle ← you are here
  ↓
Business Understanding (feeds "Ask & Plan")
  ↓
Data Cleaning & Quality (the "Collect & Clean" stage)
  ↓
KPIs & Metrics / Statistics (the "Analyze" stage)
  ↓
Visualization & Storytelling (the "Communicate" stage)
\`\`\`

## Practice questions

### Easy
1. Name the four stages of the analytics lifecycle in order.
2. Which stage is most often skipped by beginners, and what typically goes wrong as a result?

### Medium
3. A colleague says their dashboard project has been "stuck for two weeks." What questions would you ask to figure out which lifecycle stage it's actually stuck in?

### Interview/Advanced
4. Take a past project (yours or a public case study) and map each part of it to a lifecycle stage.

<details>
<summary><strong>Answer / Solution</strong></summary>

1. Ask & Plan → Collect & Clean → Analyze → Visualize & Communicate.
2. Ask & Plan — beginners often start querying immediately, which leads to an analysis that answers a question nobody actually asked.
3. Example questions: "Is the question/audience/deadline written down anywhere?" (Ask & Plan), "Do you trust the data you're working with?" (Collect & Clean), "Have you found a result yet, even a rough one?" (Analyze), "Has anyone outside the project seen it?" (Communicate).
4. Answers will vary — the key skill is correctly bucketing each real task into one of the four stages.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Walk me through your general process for a new analysis request.**
Short answer: Clarify the question and success criteria, gather and clean the needed data, apply the right analysis method, then package the result into a clear, actionable communication.

### Conceptual questions
**Q: Why does "Ask & Plan" come before touching any data?**
Short answer: Because analyzing before the question is clear risks answering something nobody asked — clarifying scope and success criteria up front is far cheaper than redoing analysis later.

### Scenario-based questions
**Q: You're two days into an analysis and realize the original question was ambiguous. What do you do?**
Short answer: Pause and go back to the stakeholder to clarify rather than guessing and continuing — a short clarifying conversation is cheaper than finishing an analysis that turns out to answer the wrong question.

### Practical questions
**Q: Describe, stage by stage, how you'd approach "did our new checkout redesign reduce cart abandonment?"**
Short answer: Ask & Plan — define "cart abandonment" precisely and the comparison window; Collect & Clean — pull before/after checkout event data; Analyze — compare abandonment rate before vs. after, checking for confounders like seasonality; Communicate — a clear before/after chart with a recommendation.

## Interview traps / tricky points

- Interviewers sometimes present a flawed process (e.g., "I always start by building the dashboard") specifically to see if you catch that the question wasn't defined first.
- The lifecycle is iterative, not strictly linear — clarifying questions can surface mid-analysis and send you back to "Ask & Plan"; acknowledging this shows real-world experience.

## Best practices

- Write the question and success criteria down before writing a single query — even a one-line note prevents scope drift.
- Timebox the "Collect & Clean" stage; perfect data cleaning on fields that don't affect the answer is wasted effort.
- Always end with a specific recommendation or next step, not just a chart.

---

### ⚡ Quick Revision

**Ask & Plan** → define the question and success criteria
**Collect & Clean** → gather and prepare trustworthy data
**Analyze** → apply the right method to answer the question
**Visualize & Communicate** → package the result into a decision-ready deliverable
Remember: a stalled project is almost always stuck in one specific stage — diagnose which one before trying to "just work harder."
`);

setNote('business-understanding', `
## 🎯 What is it?

**Business understanding** means knowing how a company actually makes money, how it's organized, and what each stakeholder cares about — so your analysis targets what's actually useful, not just what's technically interesting.

Imagine being handed a company's entire database with zero context. You could write perfectly correct SQL all day and still produce nothing useful, because you wouldn't know which numbers matter to whom. Business understanding is the missing map.

## 💡 Why is it important?

- The best query in the world is worthless if it answers a question nobody was asking — business context is what makes analysis *relevant*.
- Different teams care about the same data differently: a "customer" means something different to sales (a lead) than to finance (a billing account).
- It's how you turn a vague request ("look into this") into a specific, answerable question.
- It's one of the fastest ways to stand out in an interview — technical skill is assumed, business judgment is what differentiates candidates.

## Core concept

### How a business makes money
Every company has a revenue model — subscriptions, one-time purchases, ads, transaction fees, and so on. The model shapes which metrics matter most (e.g., a subscription business obsesses over churn; a marketplace obsesses over take rate).

### Functional areas and what each measures success by

| Function | Cares most about |
|---|---|
| Sales | Pipeline, deal size, close rate |
| Marketing | Leads, conversion rate, cost per acquisition |
| Product | Engagement, retention, feature adoption |
| Finance | Revenue, margin, cash flow |
| Operations | Efficiency, cost per unit, on-time rate |

### Stakeholder needs
The person asking for an analysis often states a symptom, not the real question. "Can you look into why sales are down?" might actually mean "I need to know if I should be worried in tomorrow's leadership meeting." Getting to the real need usually takes one or two clarifying questions.

## 📊 Example

A stakeholder from **marketing** and a stakeholder from **finance** both ask about "customers" this month.

- Marketing means: how many new leads converted to a first purchase (a growth signal).
- Finance means: how many billing accounts are active and paying (a revenue signal).

The same word, two different, equally valid numbers — using the wrong one in the wrong report causes real confusion and lost trust.

## Real-world Data Analyst use cases

- **Sales analysis:** knowing that "sales" for a SaaS company usually means new + renewed subscription revenue, not one-time transaction count.
- **Marketing analysis:** understanding cost-per-acquisition targets differ wildly between a luxury brand and a budget retailer.
- **Finance analysis:** knowing the difference between "revenue" (booked) and "cash" (collected) before building any report that uses either term.

## ⚠️ Common mistakes

- **Starting an analysis immediately after a vague request**, instead of asking one or two clarifying questions first. This is the single most common way analysts waste days of work.
- **Assuming a term like "active user" or "customer" has one universal definition** across the whole company — it almost never does (see [KPIs & Metrics](/skills/kpis-metrics)).
- **Ignoring who the audience is.** A number that's perfectly correct for an engineering team can be the wrong framing for an executive summary.

## Related concepts

\`\`\`
What is Data Analytics
  ↓
Business Understanding ← you are here
  ↓
KPIs & Metrics
  ↓
Data Thinking
  ↓
The Data Analytics Lifecycle (feeds "Ask & Plan")
\`\`\`

## Practice questions

### Easy
1. Name two functional areas of a business and one metric each would prioritize.
2. Why might "customer" mean different things to two different departments?

### Medium
3. Given the vague request "can you look into why sales are down?" — write three clarifying questions you'd ask before starting.

### Interview/Advanced
4. Explain, with a concrete example, how the same dataset could produce two "correct" but conflicting numbers depending on which department is asking.

<details>
<summary><strong>Answer / Solution</strong></summary>

1. Example: Marketing → cost per acquisition; Finance → gross margin.
2. Because each department defines the term around what it manages — sales owns the funnel, finance owns billing — so their operational definitions diverge even though both are "correct" within their own context.
3. Example: "Which time period are we comparing — this week vs. last week, or this quarter vs. last quarter?" "Do you mean total revenue, unit sales, or a specific product line?" "Is there a specific region or channel you suspect is driving this?"
4. Example: "Total customers" reported by marketing (all-time signups) vs. finance (currently paying accounts) will legitimately differ — both are correct definitions of "customer," just answering different underlying questions.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why does business context matter for a data analyst?**
Short answer: It's what makes analysis relevant to a real decision, rather than just technically correct — the same data can support very different, equally valid questions depending on who's asking.

### Conceptual questions
**Q: How would you find out what a stakeholder actually needs when their request is vague?**
Short answer: Ask a small number of targeted clarifying questions — about the metric, time window, and the decision the analysis will inform — before starting any work.

### Scenario-based questions
**Q: Marketing and Finance report different "total customer" numbers from the same database, and both insist they're right. How do you resolve it?**
Short answer: Confirm each team's operational definition of "customer," document both explicitly, and label each report with its definition so both numbers can coexist without appearing contradictory.

### Practical questions
**Q: You're handed a new company's database with no documentation. What's your first step before writing any query?**
Short answer: Learn the business model and functional structure first — how the company makes money and what each team is measured on — since that context determines which tables and definitions actually matter.

## Interview traps / tricky points

- Interviewers sometimes deliberately give an ambiguous prompt to see whether you ask clarifying questions before diving into a solution — jumping straight to "I'd write a query that..." without clarifying is a common trap.
- Don't assume metric names are self-explanatory across companies or even across teams within the same company.

## Best practices

- Ask clarifying questions before starting any non-trivial analysis — it's faster than redoing work later.
- Document the exact definition behind any metric you report, especially ones like "active user" or "customer" that vary by team.
- When two teams report conflicting numbers on the same topic, resolve it by surfacing both definitions rather than picking a "winner."

---

### ⚡ Quick Revision

**Business understanding** → knowing how a company makes money and what each team is measured on
**Functional areas** → sales, marketing, product, finance, operations — each with different priorities
**Stakeholder need** → often different from the literal request; clarify before starting
Remember: the same word ("customer," "active," "revenue") can mean different, equally correct things depending on who's asking.
`);

setNote('kpis-metrics', `
## 🎯 What is it?

A **KPI (Key Performance Indicator)** is a specific, measurable number a business tracks to judge whether it's succeeding at something important. Not every metric is a KPI — a KPI is a metric that's been deliberately chosen and precisely defined because it's tied to a real goal.

Think of a car's dashboard again: it has dozens of possible readings, but only a handful — speed, fuel, engine temperature — are treated as KPIs the driver actually watches. The rest exist but aren't front-and-center.

## 💡 Why is it important?

- Businesses run on a small set of numbers everyone watches — being the person who can define, calculate, and explain one correctly is immediately useful.
- A poorly defined KPI ("active user") causes different teams to report different numbers and lose trust in the data entirely.
- Choosing the wrong KPI to optimize for can drive genuinely bad decisions, even when every number reported is technically accurate.
- It's one of the most common interview and case-study topics for analyst roles.

## Core concept

### What makes a good KPI

| Trait | Meaning |
|---|---|
| Specific | Precisely defined, not open to interpretation |
| Measurable | Can actually be calculated from available data |
| Tied to a goal | Connects to something the business cares about, not just "trackable" |
| Actionable | If it moves, someone can do something about it |

### Leading vs. lagging indicators

- **Leading indicators** predict a future result — e.g., trial signups predict future revenue.
- **Lagging indicators** report a result after the fact — e.g., quarterly revenue itself.

Leading indicators let you react early; lagging indicators tell you whether past actions worked.

### Precise metric definitions
"Active user" is meaningless until it's defined exactly: Active in what window (daily/weekly/monthly)? Doing what action (any login, or a specific core action)? Two dashboards showing "500K active users" and "80K active users" can both be correct — with different definitions.

### Vanity metrics
A vanity metric looks impressive but doesn't inform a decision — e.g., total signups ever, with no context on how many are still active or paying.

## Syntax / Formula / Structure

A reusable framework for defining any metric precisely:

\`\`\`
Metric name:      [what it's called]
Numerator:        [what's being counted]
Denominator:       [if it's a rate — what it's divided by]
Time window:      [daily / weekly / monthly / rolling 30-day]
Inclusion rule:    [what counts — e.g., "logged in AND completed 1 action"]
Exclusion rule:    [what's explicitly excluded — e.g., test accounts]
\`\`\`

## 📊 Example

**Vague:** "Track active users."

**Precise KPI definition:**
- Metric: Weekly Active Users (WAU)
- Inclusion rule: A registered, non-test account that completed at least one core action (create, edit, or share) in the trailing 7 days
- Time window: rolling 7-day window, refreshed daily

With this definition, any two analysts computing WAU from the same data will get the same number.

## Types / Variations

| KPI type | Example |
|---|---|
| Growth | New signups, MRR growth rate |
| Engagement | DAU/MAU ratio, sessions per user |
| Retention | Churn rate, 30-day retention |
| Efficiency | Cost per acquisition, revenue per employee |
| Quality | Defect rate, support ticket resolution time |

## ⚠️ Common mistakes

- **Tracking a metric just because it's easy to measure**, not because it connects to a real goal — this is how vanity metrics creep into dashboards.
- **Leaving a KPI's definition implicit.** "Active user" without a written definition guarantees eventual disagreement between teams.
- **Confusing a leading indicator with a guarantee.** A rise in trial signups suggests, but doesn't guarantee, future revenue growth.
- **Picking a KPI that can be gamed** without actually improving the underlying goal (e.g., optimizing "signups" while ignoring whether those users stay).

## Real-world Data Analyst use cases

- **Sales analysis:** defining "won deal" precisely (does a deal that later gets refunded still count?).
- **Marketing analysis:** distinguishing "leads" (a leading indicator) from "closed revenue" (a lagging one).
- **Product analysis:** choosing DAU/MAU (stickiness) over raw signups as the KPI that actually reflects product health.

## Related concepts

\`\`\`
Business Understanding
  ↓
KPIs & Metrics ← you are here
  ↓
Data Thinking (choosing the right metric for a question)
  ↓
Statistics — Descriptive Statistics (how KPIs get summarized)
  ↓
Dashboard Design (how KPIs get displayed)
\`\`\`

## Practice questions

### Easy
1. Is "total signups since launch" more likely a good KPI or a vanity metric? Why?
2. Classify "monthly trial signups" as a leading or lagging indicator for future revenue.

### Medium
3. Write a precise, unambiguous definition for "active user" for a note-taking app, including inclusion/exclusion rules and time window.

### Interview/Advanced
4. A team wants to optimize purely for "number of features shipped per quarter." Explain why this could be a bad KPI, even though it's easy to measure.

<details>
<summary><strong>Answer / Solution</strong></summary>

1. Likely a vanity metric — it only grows, never reflects current health, and doesn't tell you whether those users are still engaged.
2. Leading indicator — it signals likely future revenue before that revenue is realized.
3. Example: "A registered, non-test account that created or edited at least one note in the trailing 7 days" (Weekly Active User), refreshed daily on a rolling 7-day window.
4. It rewards shipping volume regardless of whether features are used, well-built, or valuable — a team could hit the KPI by shipping many small, low-impact features while genuinely important work (bug fixes, a major feature) gets deprioritized because it doesn't count toward "features shipped."

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What makes a good KPI?**
Short answer: It's specific, measurable, tied to a real business goal, and actionable — not just easy to track.

### Conceptual questions
**Q: What's the difference between a leading and a lagging indicator?**
Short answer: A leading indicator predicts a future outcome (e.g., trial signups); a lagging indicator reports a result after it's already happened (e.g., quarterly revenue).

### Scenario-based questions
**Q: Two dashboards report different "active user" counts from the same database. How do you investigate?**
Short answer: Compare each dashboard's underlying definition — time window and inclusion/exclusion rules — rather than assuming one is a bug; they're often both "correct" under different definitions.

### Practical questions
**Q: A stakeholder proposes "number of emails sent" as a marketing KPI. What follow-up question exposes whether it's a good choice?**
Short answer: "Does sending more emails actually correlate with more revenue or engagement, or could it just as easily correlate with more unsubscribes?" — probing whether the metric is actionable and tied to a real goal, not just easy to count.

## Interview traps / tricky points

- Interviewers often present a metric that sounds impressive (e.g., "10 million downloads") specifically to test whether you'll identify it as a possible vanity metric.
- A metric can be a leading indicator for one outcome and irrelevant to another — always ask "leading indicator of *what*?"
- "Active" is one of the most commonly under-defined words in analytics interviews — always ask for the precise definition before answering a question that uses it.

## Best practices

- Write every KPI definition down, including time window and inclusion/exclusion rules, and keep that definition in one shared place.
- Prefer a small number of well-chosen KPIs over a large dashboard of loosely related metrics.
- Periodically sanity-check whether a tracked KPI can be gamed without moving the real underlying goal — and adjust if so.

---

### ⚡ Quick Revision

**KPI** → a specific, measurable metric tied to a real business goal
**Leading indicator** → predicts a future result (e.g., trial signups)
**Lagging indicator** → reports a result after the fact (e.g., revenue)
**Vanity metric** → looks impressive, doesn't inform a decision
Remember: always write down a metric's exact inclusion/exclusion rules and time window — "active user" means nothing without them.
`);

setNote('data-thinking', `
## 🎯 What is it?

**Data thinking** is the skill of turning a vague business question into a specific, measurable one — choosing the right metric, the right time window, and knowing in advance what result would actually change the decision.

It's the mental translation step between "sales feel slow" (a feeling) and "is Q3 revenue tracking below Q2, and by how much?" (a question you can actually answer with data).

## 💡 Why is it important?

- Most failed analyses fail before a single query is written — the wrong question got answered well, instead of the right question being answered at all.
- It's what separates someone who can run a query from someone who can actually be trusted to lead an analysis.
- It prevents wasted effort: knowing upfront what evidence would change the decision stops you from over-analyzing a question that only needed a quick check.
- It's the practical, everyday version of the scientific method applied to business problems.

## Core concept

### Framing a question
Take the vague prompt apart: what metric, what time window, and what comparison is actually implied?

*"Sales feel slow"* →
- Metric: revenue (or units sold?)
- Time window: this month vs. what — last month? same month last year?
- Comparison: is "slow" relative to a target, a forecast, or a prior period?

### Choosing a metric
Two common traps: picking a raw count when a rate would be fairer (100 new signups means very different things for a company with 1,000 vs. 1,000,000 existing users), and picking a total when a per-user average would answer the real question.

| Question shape | Better metric choice |
|---|---|
| "Are more people buying?" | Conversion rate, not raw order count |
| "Is engagement healthy?" | DAU/MAU ratio, not total logins |
| "Are we growing efficiently?" | Revenue per customer, not total revenue alone |

### Data sources
Before analyzing, know roughly where the data lives: a transactional database, an event-tracking log, a third-party ads platform, or a spreadsheet someone maintains manually — each has different reliability and freshness.

### Evidence and decisions
Before starting, ask: "what result, if I found it, would actually change what we do?" If no plausible result would change the decision, the analysis isn't worth doing yet — or the real question hasn't been found.

## 📊 Example

**Vague ask:** "Marketing wants to know if the new landing page is working."

**Data-thinking pass:**
- Metric: conversion rate (visits → signups), not raw signup count (traffic could have simply increased).
- Time window: compare a matched period before/after launch, ideally with a control if possible.
- Evidence that changes the decision: if conversion rate is flat or down, recommend reverting; if it's up meaningfully (beyond normal week-to-week noise), recommend keeping it.

## Real-world Data Analyst use cases

- **Sales analysis:** reframing "are we hitting target?" into a specific run-rate-vs-target calculation with a stated time window.
- **Marketing analysis:** choosing conversion rate over raw traffic to judge a campaign's real effect.
- **Product analysis:** choosing retention rate over total user count to judge product health.

## ⚠️ Common mistakes

- **Answering the literal words of a request instead of the underlying need.** "Sales feel slow" is a feeling, not yet a measurable question — translating it is the analyst's job, not the stakeholder's.
- **Defaulting to totals when a rate is more honest.** Totals are easy to compute but often misleading when the underlying population is changing.
- **Skipping the "what evidence would change the decision" question**, leading to over-built analyses that don't actually move anything forward.

## Related concepts

\`\`\`
Business Understanding
  ↓
KPIs & Metrics
  ↓
Data Thinking ← you are here
  ↓
The Data Analytics Lifecycle (this feeds "Ask & Plan")
  ↓
Statistics — Hypothesis Testing (formal version of "what evidence matters")
\`\`\`

## Practice questions

### Easy
1. Rewrite "sales feel slow this quarter" as a specific, measurable question.
2. Why might a raw count be misleading compared to a rate?

### Medium
3. For the question "is our new feature helping?" — name the metric, time window, and comparison you'd use.

### Interview/Advanced
4. A stakeholder wants an analysis, but you determine that no plausible result would change what they do. What do you do next?

<details>
<summary><strong>Answer / Solution</strong></summary>

1. Example: "Is Q3 revenue-to-date tracking below the same period in Q2, and if so, by how much and in which product line?"
2. Because the underlying population size can change over time — 100 new customers is a very different signal for a company with 1,000 existing customers than one with 1,000,000.
3. Example: metric = feature adoption rate among eligible users; time window = 2 weeks post-launch; comparison = adoption rate vs. a pre-defined success threshold, or against a similar past feature launch.
4. Go back to the stakeholder and clarify the actual decision at stake — either the real question hasn't been surfaced yet, or the analysis genuinely isn't needed right now, and it's better to say so than to produce a report that changes nothing.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What is "data thinking" and why does it matter?**
Short answer: It's translating a vague business question into a specific, measurable one before starting analysis — it matters because analyzing the wrong question wastes time even when the work itself is technically correct.

### Conceptual questions
**Q: Why would you choose a rate over a raw count when analyzing growth?**
Short answer: A rate accounts for changes in the underlying population, making comparisons over time fair; a raw count can look impressive or alarming purely because the population itself grew or shrank.

### Scenario-based questions
**Q: A stakeholder says "check if customers are happy." How do you turn this into an answerable question?**
Short answer: Ask what "happy" should be measured by (NPS score, support ticket volume, retention rate) and over what time window, then pick the metric that most directly reflects the decision they're trying to make.

### Practical questions
**Q: Before starting an analysis, what's one question you should always ask yourself?**
Short answer: "What result, if I found it, would actually change the decision?" — if no plausible answer changes anything, the analysis isn't targeting the real need yet.

## Interview traps / tricky points

- Interviewers often give an intentionally vague prompt specifically to see whether you ask clarifying questions or just start describing a SQL query.
- Picking a metric that "sounds right" without checking whether it's a rate or a total is a very common early mistake that experienced interviewers watch for.

## Best practices

- Always restate a vague request as a specific, written question before starting any analysis.
- Default to rates/ratios over raw totals when comparing across time or between groups of different sizes.
- Ask "what would change the decision?" early — it keeps the scope of analysis honest and focused.

---

### ⚡ Quick Revision

**Data thinking** → turning a vague ask into a specific, measurable question
**Metric choice** → prefer rates over raw totals when population size can change
**Time window** → always state explicitly; "this month" is meaningless without a comparison point
**Evidence check** → before starting, know what result would actually change the decision
Remember: most failed analyses fail before the first query — the wrong question, well answered.
`);

setNote('data-cleaning', `
## 🎯 What is it?

**Data cleaning** is the process of finding and fixing problems in raw data — missing values, duplicates, inconsistent formats, and outliers — before any real analysis begins.

Think of it like washing vegetables before cooking: skipping it doesn't mean the meal fails immediately, but whatever's wrong with the ingredients ends up in the final dish, often invisibly.

## 💡 Why is it important?

- "Garbage in, garbage out" — an analysis built on messy data produces confident-sounding, wrong answers, no matter how sound the method is.
- Real-world data is almost always messy: manual entry errors, system migrations, merged data sources, and inconsistent naming are the norm, not the exception.
- It's one of the most time-consuming parts of real analyst work — industry estimates commonly put data cleaning at 50–80% of a project's time.
- Trust: a single obviously-wrong number in a report ("negative revenue," "age 300") can undermine a stakeholder's trust in an entire analysis.

## Core concept

### Missing data strategies

| Strategy | When to use it |
|---|---|
| Drop the row | Missingness is rare and random, and the row isn't critical |
| Fill with a value (mean/median/0/"Unknown") | Missingness is explainable and a reasonable default exists |
| Flag and keep | Missingness itself might be meaningful (e.g., "never logged in") |

Always justify the choice — silently dropping rows can bias an analysis if the missing data isn't random.

### Duplicate detection
Two kinds of duplicates: **exact** (identical rows) and **near-duplicates** (same real-world entity, slightly different text — "Jon Smith" vs. "John Smith"). Exact duplicates are usually safe to drop; near-duplicates need a defined matching rule before merging.

### Inconsistent formatting
Dates stored as text in three different formats, categories entered with inconsistent casing ("Retail", "retail", "RETAIL"), and units mixed within one column (kg and lbs) are all standard real-world problems that must be standardized before aggregation will work correctly.

### Outlier identification
An outlier can be a genuine (if extreme) value or a data-entry error. The fix depends on which: a $50,000 online order might be real (B2B bulk order) or a decimal-point typo of $500.00.

### Validation & reconciliation
After cleaning, check the cleaned dataset against the original: row counts, sums, and a manual spot check of a few records. This catches silent mistakes introduced during cleaning itself.

## 📊 Example

Raw \`orders\` table (before cleaning):

| order_id | customer | order_date | amount |
|---|---|---|---|
| 1 | jon smith | 2024/01/05 | 120 |
| 2 | Jon Smith | 01-05-2024 | 120 |
| 3 | Maria Ruiz | 2024-01-06 | -15 |
| 4 | Maria Ruiz | 2024-01-06 | |

**Issues found:** row 1/2 look like the same order entered twice with inconsistent name casing and date format; row 3 has a negative amount (likely a refund miscoded as a sale, or a data error); row 4 is missing an amount entirely.

**Cleaning actions (with reasons):**
- Standardize \`customer\` casing to Proper Case, standardize \`order_date\` to \`YYYY-MM-DD\`.
- Investigate rows 1 & 2 as likely duplicates — same customer, same date, same amount — keep one, flag for review.
- Flag row 3's negative amount for manual review rather than silently deleting or "fixing" it.
- Row 4: missing amount — flag and exclude from revenue totals rather than guessing a value.

## Real-world Data Analyst use cases

- **Sales analysis:** deduplicating orders that got double-submitted due to a checkout bug before calculating revenue.
- **Customer analysis:** standardizing country names ("USA", "U.S.", "United States") before segmenting customers by geography.
- **Operations analysis:** flagging shipment records with impossible delivery times (negative or multi-year) before computing average delivery time.

## ⚠️ Common mistakes

- **Silently dropping rows with missing or "weird" values** without documenting the decision — this can bias totals and is impossible for someone else to audit later.
- **Fixing an outlier by just deleting it** without investigating whether it's a real (if unusual) value.
- **Cleaning everything equally** instead of prioritizing fields that actually affect the analysis at hand — this wastes time on a real project with a deadline.
- **Not reconciling the cleaned dataset against the raw source**, which means cleaning bugs go completely unnoticed.

## Related concepts

\`\`\`
The Data Analytics Lifecycle (this is the "Collect & Clean" stage)
  ↓
Data Cleaning & Quality ← you are here
  ↓
Spreadsheets — TRIM / REPLACE-SUBSTITUTE / UPPER-LOWER-PROPER (the tools)
  ↓
SQL — WHERE / Aggregation (validating cleaned data at scale)
  ↓
Statistics — Descriptive Statistics (spotting outliers numerically)
\`\`\`

## Practice questions

### Easy
1. Name two common types of data quality issues.
2. What's the difference between an exact duplicate and a near-duplicate?

### Medium
3. Given a column with dates in three different formats, describe your approach to standardizing it.

### Interview/Advanced
4. You find a $500,000 single order in a dataset of otherwise $20–$200 orders. Walk through how you'd decide whether to keep, cap, or remove it.

<details>
<summary><strong>Answer / Solution</strong></summary>

1. Example: missing values and duplicate records (also acceptable: inconsistent formatting, outliers).
2. An exact duplicate is a byte-for-byte identical row; a near-duplicate represents the same real-world entity but with slightly different text (typos, casing, formatting differences).
3. Identify all formats present, pick one standard target format, convert each variant explicitly (don't guess ambiguous cases like 01/02/2024), and spot-check a sample after conversion.
4. Investigate before deciding: check if it's a known account (e.g., a legitimate bulk/B2B order), check the audit log or original source system, and see if similar large orders exist historically. If it's confirmed real, keep it but consider whether it should be excluded from a "typical order" analysis; if it's confirmed an error (e.g., duplicate zero was entered), correct or remove it and document why.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What is data cleaning and why does it matter?**
Short answer: It's finding and fixing data quality issues before analysis — because an analysis built on messy, unvalidated data produces confidently wrong results.

### Conceptual questions
**Q: How do you decide whether to drop, fill, or flag a missing value?**
Short answer: It depends on whether the missingness is random and rare (often safe to drop), has a reasonable default (fill), or might itself be meaningful information (flag and keep, e.g., "never purchased").

### Scenario-based questions
**Q: You find 500 duplicate customer records in a database of 50,000. How do you approach fixing it without losing valid data?**
Short answer: Define a clear matching rule (exact vs. near-duplicate), review a sample manually to validate the rule, then merge or remove according to that rule — always keeping an audit trail of what was changed.

### Practical questions
**Q: How would you validate that your data cleaning didn't introduce new errors?**
Short answer: Reconcile row counts and key totals (e.g., total revenue) between the raw and cleaned datasets, and manually spot-check a handful of records end-to-end.

## Interview traps / tricky points

- Candidates often say they'd "just remove" outliers or missing data — interviewers are listening for whether you'd investigate first, since removing real data silently can bias results.
- NULL/missing handling is a very common trap: NULL is not the same as zero, and treating it as zero in an aggregation can silently skew results (see [SQL — NULL handling](/skills/sql-filtering) type topics).
- Duplicate handling that's too aggressive can delete legitimately repeated transactions (e.g., a customer genuinely placing two identical orders on the same day).

## Best practices

- Document every cleaning decision and the reason behind it — future you (or a teammate) needs to be able to audit it.
- Never silently drop data; flag and report what was excluded and why.
- Reconcile totals between raw and cleaned data as a final validation step, every time.
- Prioritize cleaning the fields that actually feed the current analysis rather than cleaning a whole dataset uniformly.

---

### ⚡ Quick Revision

**Missing data** → drop / fill / flag, always with a stated reason
**Duplicates** → exact (safe to drop) vs. near-duplicate (needs a matching rule)
**Formatting** → standardize dates, casing, and units before aggregating
**Outliers** → investigate before deciding to keep, cap, or remove
**Validation** → always reconcile cleaned totals against the raw source
Remember: garbage in, garbage out — no analysis method can fix a foundation of bad data.
`);
