import { setNote } from './_lib.mjs';

setNote('dashboard-design', `
## 🎯 What is it?

**Dashboard design** is laying out multiple charts and KPIs into a single, coherent view that a specific stakeholder can scan and act on — using a BI tool such as Power BI or Tableau.

## 💡 Why is it important?

A dashboard is not a pile of charts — it's a tool for a specific decision-maker to answer specific questions quickly. Layout and visual hierarchy matter as much as the underlying charts themselves; a dashboard with perfect data but poor layout still fails if a viewer can't find the answer in a few seconds.

## Core concept

### KPI layout
Place the single most important number where a viewer's eye lands first (top-left, largest), with a clear visual hierarchy from there — supporting charts and detail should feel secondary, not compete for equal attention.

### Interactivity
Filters and slicers let a viewer narrow the view (by date, region, category) without needing a different dashboard for every slice — and every chart on the dashboard should update consistently when a filter is applied, not just some of them.

### Publishing & sharing
A dashboard only has value once a stakeholder can actually open and use it — publishing to wherever the audience actually works (a BI platform, an embedded link) is part of the job, not an afterthought once "the analysis is done."

## Syntax / Formula / Structure

A practical dashboard design checklist:

\`\`\`
1. What's the ONE question this dashboard must answer in under 10 seconds?
2. Is the single most important KPI the most visually prominent element?
3. Does every chart support that core question, or is it clutter?
4. Do all filters update every relevant chart consistently?
5. Can the intended audience actually access and use it once published?
\`\`\`

## 📊 Example

**Question the dashboard must answer:** "How is this month's sales performance trending against target?"

**Layout:**
- **Top-left, largest element:** a single KPI card — "$1.2M / $1.5M target (80%)."
- **Below it:** a trend line chart of daily revenue vs. a target line.
- **Right side:** a smaller breakdown chart — revenue by region — for the natural follow-up question ("where is the gap coming from?").
- **Top filter bar:** a date-range and region filter that updates all three elements together.

**Explanation:** A first-time viewer sees the core answer (80% to target) within seconds, and the supporting charts are laid out to answer the *next* question they'd naturally ask, in the order they'd ask it.

## Multiple examples

**Beginner:** A single-page dashboard with one KPI card and one supporting trend chart.
**Intermediate:** Adding a working region filter that updates both the KPI and the trend chart consistently.
**Real-world:** A full sales dashboard wireframed *before* building — sketching the layout on paper first to confirm the most important number is prominent and the supporting charts follow a logical reading order, then building it in a BI tool and publishing it with a shareable link the sales team actually uses weekly.

## ⚠️ Common mistakes

- **Treating a dashboard as "however many charts fit."** Every chart should support the dashboard's core question — charts that don't are just clutter competing for attention.
- **Giving every element equal visual weight.** Without a clear hierarchy (size, position, color), a viewer has to hunt for the most important number instead of seeing it immediately.
- **Building filters that don't update every relevant chart.** A dashboard where only some charts respond to a filter is confusing and erodes trust in the whole tool.
- **Never actually publishing/sharing it**, or publishing it somewhere the intended audience doesn't naturally go — a technically great dashboard nobody opens has zero impact.

## Real-world Data Analyst use cases

- **Sales analysis:** a monthly sales-vs-target dashboard leadership checks every week.
- **Marketing analysis:** a campaign performance dashboard with a channel filter for the marketing team's self-service use.
- **Operations analysis:** a shipment-delay dashboard filterable by region and carrier for the ops team's daily standup.

## Related concepts

\`\`\`
Charts → Color & Accessibility → Geospatial Visualization
  ↓
Dashboard Design ← you are here
  ↓
BI Tools (Power BI / Tableau)
  ↓
Storytelling
\`\`\`

## Practice questions

### Easy
1. What's the single most important design decision for a dashboard's top-left, largest element?

### Medium
2. A dashboard has 8 charts of equal size on one page. What's the likely problem, and how would you fix it?

### Interview/Advanced
3. A finished, technically excellent dashboard has almost no weekly views from its intended audience. What would you investigate?

<details><summary><strong>Answer / Solution</strong></summary>

1. It should be the single most important KPI for the dashboard's core question — the number a viewer needs to see first, given the most visual prominence.
2. Likely a lack of visual hierarchy — with 8 equally-weighted charts, a viewer can't tell what matters most at a glance; fix by identifying the one core question, making its KPI/chart the most prominent element, and demoting the rest to smaller, secondary positions.
3. Investigate distribution/access first — is it published where the audience actually works, do they know it exists, is it easy to open? A great dashboard that isn't easily accessible or discoverable will get low usage regardless of its design quality.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What makes a dashboard different from "a page full of charts"?**
Short answer: A dashboard is designed around a specific decision-maker's specific question, with a clear visual hierarchy guiding them to the answer quickly — a page of charts with no hierarchy or focus is not the same thing, even with identical underlying data.

### Conceptual questions
**Q: Why does visual hierarchy matter in dashboard design?**
Short answer: Without it, every element competes equally for attention, forcing the viewer to hunt for what matters most — a clear hierarchy (size, position, color) guides the eye to the most important information first.

### Scenario-based questions
**Q: A stakeholder asks for "everything" to be on one dashboard. How do you respond?**
Short answer: Push back by asking what specific question(s) the dashboard needs to answer — a dashboard trying to serve every possible question usually ends up serving none of them well; propose splitting into a few focused dashboards if the needs are genuinely distinct.

### Practical questions
**Q: How would you decide what goes in the top-left corner of a dashboard?**
Short answer: Identify the single most important number for the dashboard's core question, and place it there with the largest visual weight — everything else should feel secondary to it.

## Interview traps / tricky points

- A dashboard can be technically correct and still fail if its layout doesn't prioritize the actual question the audience needs answered — interviewers often probe design judgment, not just tool proficiency.
- "More charts" is not the same as "more useful" — a bloated dashboard with no hierarchy is a common and testable anti-pattern.

## Best practices

- Identify the one core question a dashboard must answer before designing its layout.
- Give the most important KPI the most visual prominence — size, position, and color.
- Ensure every filter updates every relevant chart consistently.
- Wireframe/sketch the layout before building it in a BI tool.
- Publish where the intended audience actually works, and confirm they know it exists.

---

### ⚡ Quick Revision

**Core question first** → identify it before designing the layout
**Visual hierarchy** → most important KPI gets the most prominent position/size
**Interactivity** → filters must update every relevant chart consistently
**Publish deliberately** → a great dashboard nobody opens has zero impact
`);

setNote('bi-tools', `
## 🎯 What is it?

**BI (Business Intelligence) tools** — like Power BI or Tableau — are dedicated software for connecting to data sources and building interactive, shareable reports and dashboards, without writing code for every chart from scratch.

## 💡 Why is it important?

Most companies standardize on one BI tool for company-wide reporting, so fluency in at least one is one of the most commonly listed requirements in real data analyst job postings — it's frequently the tool stakeholders actually interact with, more than raw SQL or Python output.

## Core concept

### Connecting data sources
BI tools connect directly to files, databases, spreadsheets, or APIs, and can be set to **refresh** automatically or on a schedule — turning a one-time import into a continuously up-to-date report, similar in spirit to Power Query's repeatable transforms.

### Building visuals & filters
Charts, tables, and KPI cards are assembled visually (often drag-and-drop) into a report page, and **slicers/filters** are added to let the viewer interactively narrow what's shown.

### Calculated fields
A derived measure written inside the BI tool itself — e.g., a ratio, a running total, or a year-over-year change — computed from the connected data rather than pre-calculated in the source.

### Publishing & sharing
A report only delivers value once it's published somewhere the intended audience can actually open and interact with it — with appropriate access permissions, not just saved as a local file on the analyst's own machine.

## Syntax / Formula / Structure

A typical BI-tool calculated field (illustrative — exact syntax varies by tool, e.g., DAX in Power BI, calculated fields in Tableau):

\`\`\`
Profit Margin = (Total Revenue - Total Cost) / Total Revenue
\`\`\`

- The calculation references existing fields/measures already connected from the data source.
- It updates automatically whenever the underlying data refreshes — no manual recalculation needed.

## 📊 Example

**Task:** Build a report showing revenue by region, filterable by month, with a profit margin KPI.

**Steps in a BI tool:**
1. Connect to the \`orders\` data source (database or file).
2. Add a bar chart: region on one axis, sum of revenue on the other.
3. Add a calculated field: \`Profit Margin = (Revenue - Cost) / Revenue\`.
4. Add a month filter/slicer, connected to the chart and the profit margin KPI card.
5. Publish the report to the company's BI platform with a shareable link.

**Explanation:** Once published and connected with a scheduled refresh, this report stays current automatically — the stakeholder never needs to ask the analyst to "re-run" anything.

## Multiple examples

**Beginner:** Connecting a BI tool to a single CSV and building one bar chart.
**Intermediate:** Adding a working filter/slicer that updates the chart interactively.
**Real-world:** Rebuilding a chart originally built in pandas/Matplotlib as a fully interactive Power BI/Tableau report — with a live database connection, a calculated profit-margin field, a working region filter, and a published, shareable link the sales team checks weekly without needing the analyst to intervene.

## ⚠️ Common mistakes

- **Building a beautiful report that's never actually published/shared**, leaving it as a local file only the analyst can see.
- **Connecting to a static file export instead of a live/refreshable source** when the underlying data changes regularly — this quietly turns a "live report" into a stale snapshot.
- **Writing an overly complex calculated field** without testing it against a known manual calculation first — an error in a calculated field silently propagates into every visual that uses it.
- **Not setting appropriate access/sharing permissions**, either blocking the intended audience or (worse) exposing sensitive data too broadly.

## Real-world Data Analyst use cases

- **Sales analysis:** a live, refreshable Power BI dashboard connected directly to the company's sales database.
- **Marketing analysis:** a Tableau report combining ad-platform data with internal conversion data, filterable by campaign.
- **Company-wide reporting:** the standard BI tool being the single source of truth stakeholders check instead of asking an analyst for a one-off export every time.

## Related concepts

\`\`\`
Charts → Color & Accessibility → Geospatial Visualization
  ↓
Dashboard Design
  ↓
BI Tools (Power BI / Tableau) ← you are here
  ↓
Storytelling
\`\`\`
Everything learned in [Dashboard Design](/skills/dashboard-design) about layout and hierarchy applies directly inside whichever BI tool you use — the tool is the "how," dashboard design is the "why."

## Practice questions

### Easy
1. What's the benefit of connecting a BI tool to a live data source instead of a static file export?

### Medium
2. Write out (in plain terms) a calculated field for "year-over-year revenue growth %."

### Interview/Advanced
3. A published report's numbers haven't changed in 3 weeks despite the underlying database updating daily. What would you check first?

<details><summary><strong>Answer / Solution</strong></summary>

1. It stays automatically up to date as the underlying data changes (especially with a scheduled refresh), instead of becoming a stale snapshot the moment it's built.
2. \`(This Year's Revenue - Last Year's Revenue) / Last Year's Revenue\`, expressed as a percentage.
3. Check the data source's refresh schedule/settings first — the report is very likely connected correctly but simply isn't refreshing on the expected cadence (or refresh has silently failed), rather than a chart or calculation bug.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why do most companies standardize on a BI tool for reporting?**
Short answer: It gives stakeholders a consistent, self-service, interactive way to view and filter reports without needing an analyst to manually re-run and re-export something every time, and it's usually where non-technical stakeholders are most comfortable working.

### Conceptual questions
**Q: What's the difference between a calculated field in a BI tool and pre-calculating the same value in the source data?**
Short answer: A calculated field is computed dynamically inside the tool based on whatever data is currently connected, so it automatically reflects live/refreshed data — pre-calculating it upstream requires the source data pipeline to be updated every time the logic changes.

### Scenario-based questions
**Q: A stakeholder says a published dashboard "looks wrong" compared to a raw export they pulled themselves. How do you investigate?**
Short answer: Check whether the dashboard and the stakeholder's raw export are using the same filters, time window, and data refresh timestamp — a large share of "wrong dashboard" reports turn out to be a mismatch in scope or refresh timing, not an actual calculation bug.

### Practical questions
**Q: How would you validate a new calculated field before publishing a report that uses it?**
Short answer: Test it against a small, known sample where you can manually verify the expected result (e.g., in a spreadsheet or a simple SQL query), and only trust it in the report once it matches that manual check.

## Interview traps / tricky points

- A "wrong-looking" dashboard is very often actually a scope/filter/refresh-timing mismatch, not a genuine calculation bug — always check the boring explanation first.
- Access/sharing permissions are easy to overlook until launch day — confirm the intended audience can actually open a report well before considering the work "done."

## Best practices

- Connect to live, refreshable data sources rather than static file exports whenever the underlying data changes regularly.
- Validate any new calculated field against a manual spot check before trusting it in a published report.
- Always confirm the intended audience can actually access a published report, with the right permissions, before considering it finished.

---

### ⚡ Quick Revision

**Connect** → live/refreshable data source, not a one-time static file
**Calculated field** → a derived measure computed inside the tool, updates with refreshed data
**Publish & share** → the report isn't finished until the intended audience can actually open it
**Validate** → test any calculated field against a manual spot check first
`);

setNote('storytelling', `
## 🎯 What is it?

**Storytelling** is presenting an analysis so a non-technical audience understands the finding, why it matters, and what to do about it — structured deliberately, not just narrated chronologically the way the analysis was actually done.

## 💡 Why is it important?

An analysis nobody acts on has zero impact, no matter how correct it is. Storytelling is the skill that turns a technically sound analysis into an actual decision — and it's frequently what separates an analyst whose work gets acted on from one whose (equally good) work gets ignored.

## Core concept

### Leading with the finding
Most instinctively-written analysis walks through the process first ("I pulled the data, then I cleaned it, then I checked X, then Y...") before finally arriving at the point. Effective communication does the opposite: **state the finding in the first sentence**, then support it — a busy stakeholder should be able to stop reading after sentence one and already know the headline.

### Narrative structure: context → finding → so-what → recommendation

| Part | Answers |
|---|---|
| **Context** | What question was being investigated, briefly |
| **Finding** | What the data actually showed |
| **So-what** | Why this matters to the business, in plain terms |
| **Recommendation** | What to specifically do about it |

Skipping the "so-what" or the "recommendation" is one of the most common ways a technically correct analysis fails to drive action — a stakeholder is left with a fact, but no clear next step.

### Anticipating questions
Before presenting, list the 1–2 most obvious follow-up questions a stakeholder will ask ("is this statistically significant?", "does this hold across regions?") and pre-empt them in the write-up — this builds credibility and avoids an awkward "let me get back to you" moment.

## Syntax / Formula / Structure

A reusable one-paragraph template for any finished analysis:

\`\`\`
[Finding, in one sentence, with the key number]
[One sentence of context — what was being investigated]
[Why this matters to the business — the "so what"]
[Specific, explicit recommendation]
\`\`\`

## 📊 Example

**Weak (process-first) version:**
> "I pulled Q3 order data, cleaned duplicate records, segmented by region, and compared it to Q2. After removing outliers, I found that West region revenue was down."

**Strong (finding-first) version:**
> "West region revenue dropped 14% in Q3, driven almost entirely by a 30% decline in repeat customer orders. This suggests a retention problem, not an acquisition one — I recommend prioritizing a West-region win-back campaign over increasing ad spend."

**Explanation:** The strong version leads with the number and its cause, states the business implication ("retention problem, not acquisition"), and ends with an explicit, actionable recommendation — a busy executive gets the full picture from this one paragraph alone.

## Multiple examples

**Beginner:** Rewriting a single chalkboard-style chart caption to lead with the finding instead of the chart's title alone.
**Intermediate:** Structuring a 3-slide summary using context → finding → so-what → recommendation for a mid-sized analysis.
**Real-world:** A full quarterly business review is restructured so the very first slide states the single most important finding and recommendation, with every following slide organized as *supporting evidence* for that opening claim — rather than building up to the conclusion at the end, which risks losing a time-constrained executive audience before they reach it.

## ⚠️ Common mistakes

- **Narrating the analytical process instead of leading with the finding.** This is the single most common gap between a technically sound analysis and one that actually gets read and acted on.
- **Stating a finding with no explicit recommendation.** "Revenue is down 14%" leaves the stakeholder to figure out what to do about it themselves — an analyst's job includes proposing the next step, not just reporting the fact.
- **Not anticipating the obvious follow-up question**, leading to a credibility-damaging "I don't know, let me check" in the room when it comes up.
- **Burying the one important number in a wall of supporting detail**, instead of stating it plainly up front.

## Real-world Data Analyst use cases

- **Sales analysis:** a finding-first executive summary explaining a revenue miss and a specific recommended action.
- **Product analysis:** a one-paragraph Slack update on a feature launch's impact, structured context → finding → so-what → recommendation.
- **Any stakeholder-facing deliverable:** the difference between a report stakeholders skim past and one that drives an actual decision.

## Related concepts

\`\`\`
Charts → Dashboard Design → BI Tools
  ↓
Storytelling ← you are here
\`\`\`
This closes the Visualization stage — everything from chart choice to dashboard layout ultimately exists in service of communicating a finding clearly enough that someone acts on it.

## Practice questions

### Easy
1. Rewrite this process-first sentence to lead with the finding: "I looked at signups by channel over the last quarter and noticed organic search was performing well."

### Medium
2. Given the finding "cart abandonment rate is 68%, higher on mobile than desktop," write a one-paragraph summary using the context → finding → so-what → recommendation structure.

### Interview/Advanced
3. Why can a technically perfect analysis still fail to change anything, and what specifically fixes that?

<details><summary><strong>Answer / Solution</strong></summary>

1. Example: "Organic search is our strongest signup channel this quarter — [supporting detail can follow]."
2. Example: "Cart abandonment is at 68% overall, and notably higher on mobile than desktop [finding]. We looked into checkout behavior across devices this quarter [context]. This gap likely means our mobile checkout flow has friction that's costing us real revenue [so-what]. I recommend prioritizing a mobile checkout redesign next sprint, starting with the payment step where the largest drop-off occurs [recommendation]."
3. A technically correct analysis fails to change anything when it doesn't clearly state a finding, its business implication, and a specific recommendation — stakeholders act on clear, actionable communication, not on the underlying rigor of the analysis alone; leading with the finding and always including an explicit recommendation directly fixes this gap.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why does "leading with the finding" matter?**
Short answer: Busy stakeholders often only read the first sentence or two — leading with the finding ensures the most important information gets through even if nothing else is read, rather than being buried at the end of a process narrative.

### Conceptual questions
**Q: What's the difference between a "finding" and a "so-what"?**
Short answer: A finding is what the data shows (a fact); the "so-what" is why that fact actually matters to the business and the decision at hand — a finding without a so-what leaves the audience unsure why they should care.

### Scenario-based questions
**Q: You present a finding and a stakeholder immediately asks "is this statistically significant?" — a question you hadn't addressed. What does this signal, and how do you prevent it next time?**
Short answer: It signals the presentation didn't anticipate an obvious follow-up question; next time, explicitly address likely questions (statistical significance, applicability across segments) proactively in the write-up or presentation, before being asked.

### Practical questions
**Q: How would you compress a 10-page analysis into a single paragraph an executive could read in 20 seconds?**
Short answer: Identify the single most important finding and its business implication, state that finding in the first sentence with the key number, briefly note the context, and end with one explicit, specific recommendation — cutting everything else to supporting detail available on request.

## Interview traps / tricky points

- "More detail" is not the same as "more persuasive" — interviewers often probe whether a candidate defaults to comprehensive detail instead of a focused, finding-first structure.
- A recommendation that's vague ("we should look into this more") is functionally the same as no recommendation at all — a strong answer states a specific, concrete next step.

## Best practices

- State the finding, with the key number, in the first sentence of any summary.
- Always follow a finding with an explicit "so what" and a specific recommendation — never leave either implied.
- Anticipate and pre-empt the 1–2 most obvious follow-up questions before presenting.
- Structure longer presentations so the first slide/paragraph could stand alone as a complete summary.

---

### ⚡ Quick Revision

**Lead with the finding** → state it in the first sentence, not the process
**Structure:** context → finding → so-what → recommendation
**Always include:** an explicit, specific recommendation — never leave it implied
**Anticipate:** the 1–2 most obvious follow-up questions before presenting
`);
