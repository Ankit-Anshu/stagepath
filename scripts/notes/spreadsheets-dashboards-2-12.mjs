// data_analyst_roadmap_curriculum.md — Section 02.12 "Excel Dashboards".
// Slicers, Charts, and Dashboard Design reuse existing topics (slicers,
// chart-fundamentals-spreadsheets, dashboard-spreadsheets) rather than
// duplicating them. The other 7 bullets are new: Dashboard Planning, KPI
// Selection, Dashboard Layout, Interactive Filters, and the three
// applied dashboard-type topics (Executive/Sales/Performance).
import { createSkill } from './_create.mjs';

createSkill('dashboard-planning', {
  title: 'Dashboard Planning',
  category: 'Spreadsheets',
  what_is_it: 'Deciding a dashboard\'s audience, the one or two decisions it needs to support, and which metrics actually belong on it — before opening a blank sheet and adding charts.',
  why_it_matters: 'A dashboard built without a plan tends to become a pile of every chart someone thought was interesting, rather than a tool that actually helps anyone decide anything.',
  prerequisites: ['data-storytelling-spreadsheets'],
  objectives: [
    'Identify a dashboard\'s intended audience and the decisions it should support',
    'Explain why planning comes before building in a dashboard project',
  ],
  estimated_minutes: 25,
  resources: ['r-storytelling-with-data'],
  practice: [
    { id: 'ex-dashboard-planning-1', title: 'Write a one-page dashboard brief', description: 'Before building anything, write down a dashboard\'s intended audience, the one key decision it should support, and the 3-5 metrics that actually matter for that decision.' },
  ],
  verify: ['Can identify a dashboard\'s intended audience and purpose before building it', 'Can explain the risk of skipping planning'],
  note: `
## 🎯 What is it?

**Dashboard planning** means deciding, before opening a blank sheet, who a dashboard is for, what decision or question it needs to support, and which handful of metrics actually matter for that — the same "define the business problem" thinking from the Foundations stage, applied specifically to a dashboard.

## 💡 Why is it important?

- A dashboard built without a plan tends to become a pile of every chart someone thought was interesting, rather than a focused tool that helps a specific audience make a specific decision.
- Planning up front is far cheaper than redesigning a crowded, unfocused dashboard after it's already been built and shared.

## Core concept

A simple planning checklist before building:
- **Audience** — who will actually look at this, and how often?
- **Purpose** — what decision or question should this help answer?
- **Key metrics** — the 3-5 numbers that genuinely matter for that decision (see KPI Selection)
- **Update frequency** — daily, weekly, monthly — which affects what data source and refresh setup is needed

## 📊 Example

Before building anything, a plan might read: "Audience: VP of Sales, checked every Monday morning. Purpose: quickly spot if any region is falling behind its quarterly target. Key metrics: revenue vs. target by region, top/bottom 3 performing products. Update: weekly, refreshed automatically via Power Query." This plan alone rules out dozens of "interesting but unnecessary" charts before any time is spent building them.

## ⚠️ Common mistakes

- **Skipping straight to building charts** without a plan, producing a dashboard that's technically impressive but doesn't clearly serve anyone's actual decision.
- **Designing for "everyone" instead of a specific audience** — a dashboard trying to serve every possible viewer's needs usually serves none of them well.

## Related concepts

\`\`\`
Data Storytelling
  ↓
Dashboard Planning ← you are here
  ↓
KPI Selection
\`\`\`

## 🎤 Interview preparation

**Q: Before building a dashboard, what would you want to know first?**
Short answer: Who the audience is, what decision or question the dashboard needs to support, and which handful of metrics genuinely matter for that — skipping this planning step is the most common reason dashboards end up cluttered and unfocused.

---

### ⚡ Quick Revision

**Dashboard planning** → decide audience, purpose, and key metrics before building anything
Cheaper to plan upfront than to redesign a cluttered dashboard later.
`,
});

createSkill('kpi-selection', {
  title: 'KPI Selection',
  category: 'Spreadsheets',
  what_is_it: 'Choosing the small handful of metrics that actually belong on a dashboard, out of every metric that could theoretically be shown.',
  why_it_matters: 'A dashboard with 20 metrics is harder to use than one with 5 well-chosen ones — selection is as important a design skill as any chart-building technique.',
  prerequisites: ['dashboard-planning'],
  objectives: [
    'Apply the KPI criteria from the Foundations stage to select dashboard metrics',
    'Explain why more metrics on a dashboard isn\'t automatically better',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-kpi-selection-1', title: 'Narrow a metric list', description: 'Given a list of 15 possible metrics for a sales dashboard, narrow it down to the 5 that would actually belong, and explain why you excluded the rest.' },
  ],
  verify: ['Can select a focused set of metrics for a specific dashboard purpose', 'Can explain why excluding metrics is part of good dashboard design'],
  note: `
## 🎯 What is it?

**KPI selection** is choosing the small handful of metrics that actually belong on a specific dashboard, applying the KPI criteria from the Foundations stage (specific, measurable, tied to a real goal, actionable) to decide what makes the cut — and just as importantly, what doesn't.

## 💡 Why is it important?

- A dashboard with 20 metrics is genuinely harder to use than one with 5 well-chosen ones — a viewer has to work to find what matters, which defeats the purpose of a dashboard.
- Deliberately excluding a metric because it's not tied to the dashboard's specific purpose (even if it's a "good" metric in another context) is itself a real design skill.

## Core concept

Reapplying the earlier KPIs & Metrics criteria specifically to dashboard selection:

| Question | Keeps a metric on the dashboard if... |
|---|---|
| Tied to this dashboard's purpose? | Yes — directly relevant to the decision it supports |
| Actionable by this audience? | Yes — the viewer can actually do something if it moves |
| Avoids redundancy? | Yes — doesn't just restate another metric already shown |

## 📊 Example

A sales dashboard planned for "spot underperforming regions" should show revenue vs. target by region — a directly relevant, actionable metric. A metric like "total historical page views on the company blog" might be interesting, but doesn't belong on this specific dashboard — it's not tied to its stated purpose.

## ⚠️ Common mistakes

- **Adding a metric because a stakeholder mentioned it once**, without checking whether it's actually tied to the dashboard's core purpose.
- **Including several metrics that all measure roughly the same thing**, adding clutter without adding new information.

## Related concepts

\`\`\`
Dashboard Planning
  ↓
KPI Selection ← you are here
  ↓
Dashboard Layout
\`\`\`
Directly applies KPIs & Metrics from the Foundations stage.

## 🎤 Interview preparation

**Q: A stakeholder wants 20 metrics added to a dashboard. How would you respond?**
Short answer: Push back constructively — ask which decision each metric supports, and whether the dashboard's core purpose actually needs all 20; a focused set of 5-8 well-chosen metrics almost always serves the audience better than a comprehensive but cluttered one.

---

### ⚡ Quick Revision

**KPI selection** → choose the small set of metrics genuinely tied to the dashboard's specific purpose
Excluding a metric deliberately is as much a design skill as including one.
`,
});

createSkill('dashboard-layout', {
  title: 'Dashboard Layout',
  category: 'Spreadsheets',
  what_is_it: 'Arranging a dashboard\'s charts and KPIs so the most important information is seen first, using position and visual hierarchy deliberately.',
  why_it_matters: 'The same set of charts, arranged well versus poorly, can be the difference between a dashboard a viewer understands in 5 seconds and one they give up on.',
  prerequisites: ['kpi-selection'],
  objectives: [
    'Arrange dashboard elements using a deliberate visual hierarchy',
    'Explain the common "top-left first" reading pattern and how it should guide layout',
  ],
  estimated_minutes: 25,
  resources: ['r-storytelling-with-data'],
  practice: [
    { id: 'ex-dashboard-layout-1', title: 'Sketch a layout', description: 'Given a set of 5 charts/KPIs for a dashboard, sketch a layout that puts the most important elements where a viewer will see them first.' },
  ],
  verify: ['Can arrange dashboard elements with a deliberate visual hierarchy', 'Can explain why position affects what a viewer notices first'],
  note: `
## 🎯 What is it?

**Dashboard layout** is the deliberate arrangement of charts and KPIs on the page — using position, size, and grouping so the most important information is what a viewer sees first, rather than scattering elements in whatever order they were built.

## 💡 Why is it important?

- The same set of charts, arranged well versus poorly, can be the difference between a dashboard a viewer understands in 5 seconds and one they struggle with — layout is a real, high-leverage design decision, not an afterthought.
- Most viewers (in left-to-right reading cultures) scan top-left first — the single most important number or chart should live there, not buried at the bottom.

## Core concept

| Layout principle | Why |
|---|---|
| Most important element top-left | Matches how most viewers naturally scan a page first |
| Bigger = more important | Size signals priority — don't make a minor metric as large as the headline one |
| Group related items together | Related charts near each other read as connected; scattered ones don't |
| Consistent grid alignment | Misaligned elements look unpolished and are harder to scan |

## 📊 Example

A sales dashboard puts total revenue vs. target (the single most important number) as a large KPI card top-left, with supporting detail (revenue by region, top products) arranged below and to the right in decreasing order of importance — a viewer gets the headline answer instantly, with supporting detail available without hunting for it.

## ⚠️ Common mistakes

- **Arranging charts in the order they were built**, rather than deliberately by importance — this is one of the most common, easiest-to-fix layout mistakes.
- **Making every element the same size**, giving no visual cue about what matters most.
- **Inconsistent spacing and alignment**, which makes a dashboard feel unpolished even when the underlying data and charts are solid.

## Related concepts

\`\`\`
KPI Selection
  ↓
Dashboard Layout ← you are here
  ↓
Interactive Filters
\`\`\`

## 🎤 Interview preparation

**Q: Where should the single most important number on a dashboard be placed, and why?**
Short answer: Top-left, and sized larger than supporting elements — most viewers scan a page starting top-left, so that position (combined with size) is the strongest signal of what matters most.

---

### ⚡ Quick Revision

**Dashboard layout** → arrange by importance: top-left first, size signals priority, group related items, align consistently
The same charts, laid out well vs. poorly, dramatically changes how fast a viewer understands them.
`,
});

createSkill('interactive-filters', {
  title: 'Interactive Filters',
  category: 'Spreadsheets',
  what_is_it: 'Letting a dashboard\'s viewer change what\'s displayed themselves — by region, date range, or category — without needing a new chart built for every possible slice.',
  why_it_matters: 'One well-built interactive dashboard can answer many different viewers\' specific questions, instead of requiring a separate static report for each one.',
  prerequisites: ['dashboard-layout'],
  objectives: [
    'Explain the value of interactivity over a static, single-view report',
    'Identify which controls (slicers, dropdowns, timelines) provide interactivity in a spreadsheet dashboard',
  ],
  estimated_minutes: 20,
  resources: ['r-ms-pivot-tables'],
  practice: [
    { id: 'ex-interactive-filters-1', title: 'Plan an interactive dashboard', description: 'Given a dashboard showing revenue by region, decide which interactive control would let a viewer drill into a single region\'s detail themselves.' },
  ],
  verify: ['Can explain the benefit of interactivity over a static report', 'Can identify appropriate interactive controls for a given dashboard'],
  note: `
## 🎯 What is it?

**Interactive filters** let a dashboard's viewer change what's displayed themselves — filtering to one region, one date range, or one product category — without needing the dashboard builder to create a separate static chart for every possible combination. Slicers, dropdown-based filters, and timelines are the common mechanisms in a spreadsheet.

## 💡 Why is it important?

- One well-built interactive dashboard can answer many different viewers' specific questions ("show me just my region") instead of requiring a separate static report per audience.
- It shifts exploration work from the dashboard builder (who'd otherwise need to build dozens of static variations) to the viewer, who can self-serve the specific slice they need.

## Core concept

| Control | Use |
|---|---|
| Slicer | Filter by a category (region, product) with clickable buttons |
| Timeline | Filter by a date range with a visual slider |
| Dropdown-based filter | A cell-linked dropdown driving formulas or a pivot table |

## 📊 Example

A regional sales manager and a national VP can both use the same dashboard: the VP leaves the region slicer unfiltered to see the national picture, while the manager clicks their own region's slicer button to instantly see just their data — one dashboard, two different useful views, with zero extra building required.

## ⚠️ Common mistakes

- **Building a static dashboard when the audience genuinely needs different slices** — this either produces many redundant dashboards, or one dashboard useful to no one specifically.
- **Adding interactivity nobody asked for**, adding complexity to a dashboard that would have been clearer as a focused, static view for its one intended audience.

## Related concepts

\`\`\`
Dashboard Layout
  ↓
Interactive Filters ← you are here
  ↓
Slicers
\`\`\`

## 🎤 Interview preparation

**Q: When would you add interactive filters to a dashboard rather than keeping it static?**
Short answer: When the same dashboard genuinely needs to serve different viewers with different slice needs — like regional managers each wanting their own region's view — interactivity lets one dashboard self-serve many audiences instead of requiring a separate static version for each.

---

### ⚡ Quick Revision

**Interactive filters** → slicers, timelines, dropdowns that let a viewer change what's shown themselves
Lets one dashboard serve many audiences' specific slice needs without separate static versions.
`,
});

createSkill('executive-dashboard', {
  title: 'Executive Dashboard',
  category: 'Spreadsheets',
  what_is_it: 'A dashboard built for senior leadership — extremely high-level, focused on a handful of top-line KPIs against target, designed to be understood in seconds.',
  why_it_matters: 'An executive audience has the least time and the highest-level view of all dashboard audiences — designing for them requires the most aggressive prioritization of any dashboard type.',
  prerequisites: ['interactive-filters'],
  objectives: [
    'Identify what makes an executive dashboard different from an operational one',
    'Select appropriate top-line KPIs for a leadership audience',
  ],
  estimated_minutes: 20,
  resources: ['r-storytelling-with-data'],
  practice: [
    { id: 'ex-executive-dashboard-1', title: 'Design an executive summary', description: 'Given a full operational sales dashboard with 15 metrics, select the 3-4 that belong on an executive summary version for the CEO.' },
  ],
  verify: ['Can explain what distinguishes an executive dashboard from an operational one', 'Can select appropriate top-line KPIs for a leadership audience'],
  note: `
## 🎯 What is it?

An **executive dashboard** is built for senior leadership — extremely high-level, focused on a handful of top-line KPIs measured against target, designed to be fully understood in seconds by someone with no time to explore detail.

## 💡 Why is it important?

- An executive audience has the least time and the broadest, highest-level view of any dashboard audience — this requires more aggressive prioritization (see KPI Selection) than almost any other dashboard type.
- It's a common, concrete deliverable analysts are asked to build, and a common interview/case-study scenario ("design a dashboard for our CEO").

## Core concept

| Trait | Executive dashboard | Operational dashboard |
|---|---|---|
| Metric count | 3-5 top-line KPIs | Can go deeper, more detail |
| Detail level | High-level, summarized | Granular, drill-down friendly |
| Update frequency | Often weekly/monthly | Often daily/real-time |
| Primary need | "Are we on track?" at a glance | "What exactly is happening, and where?" |

## 📊 Example

An executive dashboard for a CEO might show just: total revenue vs. annual target, overall customer growth, and one or two other company-wide health indicators — each with a simple on-track/at-risk visual cue — deliberately leaving out the region-by-region, product-by-product detail an operational dashboard would include.

## ⚠️ Common mistakes

- **Including operational-level detail** that an executive audience doesn't have time to parse — if it takes more than a glance to understand, it's probably too detailed for this audience.
- **Omitting a clear "are we on track" signal** (like a target comparison or a red/yellow/green indicator) — executives specifically need the "is this good or bad" judgment made easy, not just raw numbers.

## Related concepts

\`\`\`
Interactive Filters
  ↓
Executive Dashboard ← you are here
  ↓
Sales Dashboard
\`\`\`

## 🎤 Interview preparation

**Q: How would an executive dashboard differ from the operational dashboard the same data might feed into a sales team?**
Short answer: Far fewer metrics (3-5 top-line KPIs vs. many detailed ones), more summarized (less drill-down detail), and built around an immediate "on track / at risk" judgment rather than granular exploration — the executive audience needs a glance-level answer, not a workspace.

---

### ⚡ Quick Revision

**Executive dashboard** → 3-5 top-line KPIs vs. target, understood in seconds, minimal detail
The most aggressive prioritization of any dashboard audience.
`,
});

createSkill('sales-dashboard', {
  title: 'Sales Dashboard',
  category: 'Spreadsheets',
  what_is_it: 'A dashboard tracking sales performance — revenue, pipeline, and rep/region/product breakdowns — built for a sales team or sales leadership to monitor and act on.',
  why_it_matters: 'It\'s one of the most commonly requested dashboard types in real analyst work, combining several patterns from this stage (KPIs, trend charts, segmented breakdowns) into one practical example.',
  prerequisites: ['executive-dashboard'],
  objectives: [
    'Identify the core metrics a sales dashboard typically needs',
    'Design a sales dashboard layout appropriate for a sales team audience',
  ],
  estimated_minutes: 20,
  resources: ['r-storytelling-with-data'],
  practice: [
    { id: 'ex-sales-dashboard-1', title: 'Design a sales dashboard', description: 'Sketch a sales dashboard layout including revenue vs. target, a trend chart, and a breakdown by region or rep.' },
  ],
  verify: ['Can identify core metrics for a sales dashboard', 'Can design a layout appropriate for a sales team audience'],
  note: `
## 🎯 What is it?

A **sales dashboard** tracks sales performance for a sales team or sales leadership — typically combining revenue vs. target, a trend over time, and a breakdown by rep, region, or product, so the audience can both monitor overall performance and spot where attention is needed.

## 💡 Why is it important?

- It's one of the most commonly requested real-world dashboard types, and a natural way to combine nearly every pattern covered in this stage — KPI cards, trend charts, category breakdowns, and interactive filters — into one practical, portfolio-worthy example.

## Core concept

Common sales dashboard elements:
- **Headline KPI** — revenue vs. target (this period)
- **Trend chart** — revenue over the last 6-12 periods
- **Breakdown** — by region, rep, or product (bar chart or pivot table)
- **Interactive filter** — a slicer to view any single region/rep's detail

## 📊 Example

A sales dashboard for a regional sales manager: a large KPI card up top showing "Revenue: $340K vs. $350K target," a line chart of weekly revenue trend below it, and a bar chart breaking revenue down by sales rep — with a region slicer letting the manager (or their VP) filter to just one team if needed.

## ⚠️ Common mistakes

- **Showing revenue with no target or comparison**, leaving the viewer unable to judge whether the number is good or concerning.
- **Omitting a trend view**, showing only a snapshot — a sales team usually needs to know the *direction* (improving or declining), not just the current number.

## Related concepts

\`\`\`
Executive Dashboard
  ↓
Sales Dashboard ← you are here
  ↓
Performance Dashboard
\`\`\`

## 🎤 Interview preparation

**Q: What are the essential elements of a sales dashboard, at minimum?**
Short answer: Revenue (or the key sales metric) compared against a target, a trend view showing direction over time, and a breakdown by a meaningful dimension like region or rep — together they let a viewer judge current status, direction, and where to focus attention.

---

### ⚡ Quick Revision

**Sales dashboard** → revenue vs. target + trend + breakdown by rep/region/product
Combines KPI cards, trend charts, and category breakdowns — one of the most common real dashboard requests.
`,
});

createSkill('performance-dashboard', {
  title: 'Performance Dashboard',
  category: 'Spreadsheets',
  what_is_it: 'A dashboard tracking operational or team performance against a set of goals or SLAs — broader than a sales-specific dashboard, applicable to support, operations, or project tracking.',
  why_it_matters: 'It generalizes the sales dashboard pattern (KPI vs. target, trend, breakdown) to any team or process that needs to monitor its own performance.',
  prerequisites: ['sales-dashboard'],
  objectives: [
    'Identify appropriate performance metrics for a non-sales team context',
    'Design a performance dashboard tracking goals or SLAs',
  ],
  estimated_minutes: 20,
  resources: ['r-storytelling-with-data'],
  practice: [
    { id: 'ex-performance-dashboard-1', title: 'Design a support performance dashboard', description: 'Design a dashboard for a customer support team tracking ticket volume, average response time vs. an SLA target, and resolution rate.' },
  ],
  verify: ['Can identify appropriate metrics for a non-sales performance dashboard', 'Can design a dashboard tracking goals or SLAs'],
  note: `
## 🎯 What is it?

A **performance dashboard** tracks operational or team performance against a set of goals or SLAs (service-level agreements) — the same core pattern as a Sales Dashboard (KPI vs. target, trend, breakdown), generalized to any team or process: customer support, operations, project delivery, and more.

## 💡 Why is it important?

- It shows the sales-dashboard pattern isn't sales-specific — the same design thinking (pick a few KPIs, compare to target, show trend, break down by a meaningful dimension) applies to nearly any team that needs to monitor its own performance.
- It's a common, practical portfolio project that demonstrates dashboard design skill in a non-sales business context.

## Core concept

| Team | Example KPIs |
|---|---|
| Customer support | Ticket volume, average response time vs. SLA, resolution rate |
| Operations | Order fulfillment time, error rate, capacity utilization |
| Project delivery | On-time delivery rate, budget vs. actual, milestone completion |

Same structure as a sales dashboard: headline KPI(s) vs. target/SLA, a trend view, and a meaningful breakdown (by team, by category, by priority).

## 📊 Example

A customer support performance dashboard shows average response time (2.3 hours) against a 4-hour SLA target as a headline KPI, a trend line of weekly response time, and a breakdown of ticket volume by category — letting the team lead spot both overall SLA health and which ticket category is driving the most volume.

## ⚠️ Common mistakes

- **Copying a sales dashboard's specific metrics onto an unrelated team** instead of selecting metrics genuinely tied to that team's actual goals (see KPI Selection) — the *pattern* generalizes, not the specific metrics.
- **Omitting the target/SLA line entirely**, leaving a viewer unable to judge whether current performance is actually acceptable.

## Related concepts

\`\`\`
Sales Dashboard
  ↓
Performance Dashboard ← you are here
\`\`\`
This closes the Excel Dashboards chapter — the next chapter (Power Query) covers how to feed a live, automatically-refreshing data source into dashboards like these.

## 🎤 Interview preparation

**Q: How would you adapt the sales dashboard pattern for a customer support team?**
Short answer: Keep the same structure (a headline KPI vs. target, a trend view, a meaningful breakdown) but swap in support-specific metrics — like average response time vs. an SLA target, and ticket volume broken down by category — since the pattern generalizes even though the specific metrics don't.

---

### ⚡ Quick Revision

**Performance dashboard** → the sales-dashboard pattern (KPI vs. target + trend + breakdown), generalized to any team or SLA
Same design thinking, different metrics — support, operations, project delivery, and more.
`,
});

console.log('Created 7 new Excel Dashboards (2.12) skills.');
