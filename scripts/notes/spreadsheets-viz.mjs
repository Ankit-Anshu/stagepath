import { createSkill } from './_create.mjs';

createSkill('bar-chart', {
  title: 'Bar Chart',
  category: 'Spreadsheets',
  what_is_it: 'A chart using horizontal bars to compare values across categories, with category labels running down the left side.',
  why_it_matters: 'The best chart type for comparing many categories, or categories with long text labels that would be cramped and unreadable along a vertical column-chart axis.',
  prerequisites: ['grouping-spreadsheets'],
  objectives: ['Build a bar chart from a pivot table or range', 'Explain when a bar chart is preferable to a column chart'],
  estimated_minutes: 20,
  resources: ['r-datavizcatalogue'],
  practice: [{ id: 'ex-bar-chart-1', title: 'Compare revenue by category', description: 'Build a sorted horizontal bar chart comparing revenue across 8 product categories with long names.' }],
  verify: ['Chart correctly represents the underlying data', 'Categories are sorted by value for easy comparison, not left in arbitrary order'],
  note: `
## 🎯 What is it?

A **bar chart** uses horizontal bars to compare values across categories, with category labels running down the left side and bar length representing the value.

## 💡 Why is it important?

It's the best chart type for comparing many categories, or categories with long text labels — a horizontal layout gives labels room to read fully, something a vertical [column chart](/skills/column-chart) struggles with once labels get long or numerous (see [Charts](/skills/charts) for the full chart-selection framework).

## Core concept

| When to use a bar chart | When NOT to |
|---|---|
| Comparing many categories (8+) | Showing a trend over time — use a [line chart](/skills/line-chart) instead |
| Category labels are long text | Only 2-3 short categories — a column chart works fine too |

**Always sort a bar chart by value** (largest to smallest, typically) unless there's a specific reason to keep a different order (like alphabetical or chronological) — sorting makes ranking and comparison immediate.

## 📊 Example

Revenue by product category, 8 categories with names like "Home & Kitchen Appliances."

A **bar chart**, sorted largest-to-smallest, with categories down the left side, reads far more easily than the same data in a column chart, where 8 long category names crammed along the bottom axis would need to be rotated or truncated to fit.

## Multiple examples

**Beginner:** A simple bar chart comparing revenue across 5 regions.
**Real-world:** A sorted bar chart of the top 15 products by units sold, immediately showing the ranking at a glance — something much harder to read in a column chart with 15 rotated labels along the bottom.

## ⚠️ Common mistakes

- **Leaving categories in an arbitrary (unsorted) order** instead of sorting by value — this is the single easiest, highest-impact fix for a bar chart's readability.
- **Using a bar chart for a small number of categories with short labels**, where a column chart would work just as well and is often a more familiar format to most readers.
- **Truncating the value axis (not starting at zero)**, exaggerating the visual difference between bars — see [Charts](/skills/charts)'s misleading-chart guidance.

## Real-world Data Analyst use cases

- **Sales analysis:** ranking product categories or sales reps by revenue.
- **Marketing analysis:** comparing conversion rate across many campaigns with long, descriptive names.

## Related concepts

\`\`\`
Grouping → Bar Chart ← you are here → Column Chart → Line Chart → Scatter Plot
\`\`\`

## Practice questions

### Easy
1. When would a bar chart be preferred over a column chart?

<details><summary><strong>Answer / Solution</strong></summary>

1. When comparing many categories, or categories with long text labels that need horizontal room to read clearly.

</details>

## 🎤 Interview preparation

**Q: Why sort a bar chart's categories by value instead of leaving them in the order they appear in the source data?**
Short answer: Sorting makes ranking and comparison immediate — a reader can see the highest and lowest values at a glance, instead of having to scan every bar to find them.

## Best practices

- Sort a bar chart by value unless there's a specific reason to preserve a different order.
- Start the value axis at zero.

---

### ⚡ Quick Revision

**Bar chart** → horizontal bars, best for many categories or long labels
**Always:** sort by value, start the axis at zero
`,
});

createSkill('column-chart', {
  title: 'Column Chart',
  category: 'Spreadsheets',
  what_is_it: 'A chart using vertical bars to compare values across categories, with category labels running along the bottom.',
  why_it_matters: 'The most familiar, default chart type for comparing a small number of categories, and the standard choice when categories have a natural chronological or ranked order.',
  prerequisites: ['bar-chart'],
  objectives: ['Build a column chart from a range or pivot table', 'Explain when a column chart is preferable to a bar chart'],
  estimated_minutes: 15,
  resources: ['r-datavizcatalogue'],
  practice: [{ id: 'ex-column-chart-1', title: 'Compare quarterly revenue', description: 'Build a column chart comparing revenue across 4 quarters, in chronological order.' }],
  verify: ['Chart correctly represents the underlying data', 'Categories are in a sensible order (chronological, where relevant)'],
  note: `
## 🎯 What is it?

A **column chart** uses vertical bars to compare values across categories, with category labels running along the bottom — the vertical counterpart to a [bar chart](/skills/bar-chart).

## 💡 Why is it important?

It's the most familiar, default chart type for comparing a small number of categories, and the standard choice when categories have a natural chronological or ranked order (like quarters or years), where reading left-to-right matches how the reader naturally expects to interpret the sequence.

## Core concept

| When to use a column chart | When NOT to |
|---|---|
| A small number of categories (roughly 2-7) | Many categories or long labels — use a [bar chart](/skills/bar-chart) instead |
| Categories with a natural left-to-right order (quarters, years) | A continuous trend over many time points — use a [line chart](/skills/line-chart) instead |

## 📊 Example

Revenue by quarter (Q1, Q2, Q3, Q4) — a column chart, left to right in chronological order, matches how a reader naturally expects to scan a short time sequence.

## Multiple examples

**Beginner:** A column chart comparing revenue across 4 quarters.
**Real-world:** A column chart comparing this year's and last year's revenue side by side for each quarter (a clustered column chart), making a year-over-year comparison immediately visible.

## ⚠️ Common mistakes

- **Using a column chart for many categories or long labels**, cramming labels along the bottom axis until they need to be rotated or truncated to fit — a bar chart handles this far better.
- **Using a column chart to show a trend across many time points** (like 52 weeks), where a [line chart](/skills/line-chart) reads more clearly as a continuous trend rather than a series of separate bars.

## Real-world Data Analyst use cases

- **Finance analysis:** comparing revenue or expenses across a handful of quarters or years.
- **Marketing analysis:** comparing performance across a small number of campaigns.

## Related concepts

\`\`\`
Bar Chart → Column Chart ← you are here → Line Chart → Scatter Plot
\`\`\`

## Practice questions

### Easy
1. When would you choose a column chart over a bar chart?

<details><summary><strong>Answer / Solution</strong></summary>

1. When there's a small number of categories with short labels, especially ones with a natural left-to-right order like quarters or years.

</details>

## 🎤 Interview preparation

**Q: Why might a column chart become a poor choice as the number of categories grows?**
Short answer: Labels along the bottom axis get cramped and need to be rotated or truncated to fit, hurting readability — a horizontal bar chart handles many categories or long labels much more gracefully.

## Best practices

- Reserve column charts for a small number of categories, ideally with a natural left-to-right order.
- Switch to a bar chart once category count or label length grows.

---

### ⚡ Quick Revision

**Column chart** → vertical bars, best for a small number of ordered categories
**Grows past ~7 categories or long labels?** → switch to a bar chart
`,
});

createSkill('line-chart', {
  title: 'Line Chart',
  category: 'Spreadsheets',
  what_is_it: 'A chart connecting data points with a continuous line, purpose-built to show a trend over time.',
  why_it_matters: 'The single best chart type for answering "how has this changed over time?" — the most common question shape in business reporting.',
  prerequisites: ['column-chart'],
  objectives: ['Build a line chart showing a trend over time', 'Explain why a line chart fits a time-based question better than a column chart'],
  estimated_minutes: 20,
  resources: ['r-datavizcatalogue'],
  practice: [{ id: 'ex-line-chart-1', title: 'Chart a revenue trend', description: 'Build a line chart showing monthly revenue over the past 12 months.' }],
  verify: ['Chart correctly represents the trend', 'Time periods are in correct chronological order along the x-axis'],
  note: `
## 🎯 What is it?

A **line chart** connects data points with a continuous line, purpose-built to show a **trend over time** — how a metric moves up, down, or stays flat across a sequence of time periods.

## 💡 Why is it important?

It's the single best chart type for answering "how has this changed over time?" — the most common question shape in business reporting (weekly revenue, daily signups, monthly churn) — because the connecting line makes the *direction and rate* of change visually obvious in a way separate bars cannot.

## Core concept

| When to use a line chart | When NOT to |
|---|---|
| A trend across many time points | Comparing unordered categories — use a bar/column chart instead |
| Showing the *rate* of change, not just individual values | Only 2-3 time points — a column chart may communicate just as well |
| Comparing multiple trends together (multiple lines) | More than ~5-6 lines at once — becomes cluttered and hard to read |

## 📊 Example

Monthly revenue over 12 months — a line chart immediately shows whether revenue is trending up, down, flat, or seasonal, something a table of 12 numbers requires much more effort to perceive.

## Multiple examples

**Beginner:** A single line showing monthly revenue over a year.
**Intermediate:** Two lines on the same chart comparing this year's and last year's monthly revenue, to visualize year-over-year change.
**Real-world:** A line chart of daily active users over 90 days, with the underlying trend line making clear whether a recent product change coincided with a genuine shift in the metric, versus normal day-to-day noise.

## ⚠️ Common mistakes

- **Using a line chart for unordered, categorical data** (like product categories) — the connecting line implies a sequence or trend that doesn't actually exist between unrelated categories, which is misleading.
- **Plotting too many lines at once** (6+), turning the chart into an unreadable tangle — consider small multiples (several small individual charts) instead.
- **Not starting the y-axis at zero when the visual magnitude of change matters** — though for a line chart specifically, this is a more nuanced call than for bar charts, since the shape of the trend still communicates direction even without a zero baseline; be deliberate either way and label clearly.

## Real-world Data Analyst use cases

- **Sales analysis:** monthly or weekly revenue trend.
- **Product analysis:** daily active users or engagement metric trend over time.

## Related concepts

\`\`\`
Column Chart → Line Chart ← you are here → Scatter Plot → KPI → Dashboard
\`\`\`

## Practice questions

### Easy
1. What question shape is a line chart specifically designed to answer?

### Interview/Advanced
2. Why would plotting product categories on a line chart be misleading?

<details><summary><strong>Answer / Solution</strong></summary>

1. "How has this metric changed over time?" — trend questions, not category comparisons.
2. A line chart's connecting line visually implies a sequence or trend between adjacent points — but unrelated categories (like product types) have no meaningful order or trend between them, so the connecting line falsely suggests a relationship that doesn't exist.

</details>

## 🎤 Interview preparation

**Q: Why is a line chart the right choice for "how has revenue trended this year?" instead of a column chart?**
Short answer: A line chart's continuous connecting line makes the direction and rate of change visually obvious, which is the actual point of a trend question — a column chart of the same data technically shows the same values but requires more effort to perceive the trend shape.

## Best practices

- Reserve line charts for genuinely time-ordered or sequential data.
- Limit simultaneous lines on one chart to roughly 5-6 before switching to small multiples.

---

### ⚡ Quick Revision

**Line chart** → best for trend-over-time questions
**Never use for:** unordered categorical comparisons — implies a false sequence
`,
});

createSkill('scatter-plot', {
  title: 'Scatter Plot',
  category: 'Spreadsheets',
  what_is_it: 'A chart plotting individual data points on two numeric axes, used to explore the relationship between two variables.',
  why_it_matters: 'The standard chart for visually assessing whether — and how — two variables relate, before or alongside computing a formal correlation.',
  prerequisites: ['line-chart'],
  objectives: ['Build a scatter plot to explore the relationship between two variables', 'Visually assess a scatter plot for correlation strength and outliers'],
  estimated_minutes: 25,
  resources: ['r-datavizcatalogue'],
  practice: [{ id: 'ex-scatter-plot-1', title: 'Explore a relationship', description: 'Build a scatter plot of ad spend vs. revenue across 20 campaigns, and visually assess the strength and direction of the relationship.' }],
  verify: ['Chart correctly plots both variables against each other', 'Can describe the visual pattern (strength, direction, outliers) in plain language'],
  note: `
## 🎯 What is it?

A **scatter plot** plots individual data points on two numeric axes — one variable on each axis — used to visually explore the **relationship** between two variables.

## 💡 Why is it important?

It's the standard chart for visually assessing whether, and how, two variables relate — before or alongside computing a formal [correlation coefficient](/skills/stats-correlation-regression), a scatter plot often reveals the *shape* of a relationship (linear, curved, no relationship, an outlier) that a single correlation number alone can hide.

## Core concept

| Pattern in a scatter plot | Suggests |
|---|---|
| Points trending up-and-to-the-right | A positive relationship |
| Points trending down-and-to-the-right | A negative relationship |
| Points scattered with no visible pattern | Little to no linear relationship |
| A tight, narrow band of points | A strong relationship |
| A wide, loose cloud of points | A weak relationship |
| One or a few points far from the rest | Likely outliers, worth investigating separately |

## 📊 Example

Plotting weekly ad spend (x-axis) against weekly revenue (y-axis) for 20 campaigns. Points trending clearly up-and-to-the-right, in a fairly tight band, visually suggest a strong positive relationship — matching a high correlation coefficient computed for the same data.

## Multiple examples

**Beginner:** A scatter plot of hours studied vs. exam score for a class.
**Intermediate:** A scatter plot revealing a clear positive trend, but with one clear outlier point far from the rest — worth investigating separately rather than letting it skew interpretation of the overall pattern.
**Real-world:** A scatter plot of employee tenure vs. performance score, used alongside a correlation coefficient (see [Correlation & Regression](/skills/stats-correlation-regression)) to visually confirm the relationship's shape and spot any outliers before drawing a business conclusion.

## ⚠️ Common mistakes

- **Relying only on a correlation number without ever visualizing the data.** A scatter plot can reveal a strong *non-linear* relationship that a linear correlation coefficient near 0 would completely miss, or expose that an apparent correlation is actually driven by one or two outlier points.
- **Assuming a scattered, patternless plot means "no relationship" is fully explored.** It rules out a *linear* relationship in that data, but a different kind of pattern (non-linear, conditional) is still worth checking separately.

## Real-world Data Analyst use cases

- **Marketing analysis:** visually exploring the relationship between spend and revenue before formalizing it with a regression.
- **Data quality:** spotting an outlier visually, before it distorts a downstream statistical calculation.

## Related concepts

\`\`\`
Line Chart → Scatter Plot ← you are here → KPI → Dashboard
\`\`\`
Directly pairs with [Correlation & Regression](/skills/stats-correlation-regression) — a scatter plot is the visual companion to a correlation coefficient, not a replacement for it.

## Practice questions

### Easy
1. What does a scatter plot show that a bar chart cannot?

### Interview/Advanced
2. Why might a correlation coefficient near 0 still come with a visually striking scatter plot pattern?

<details><summary><strong>Answer / Solution</strong></summary>

1. The relationship between two numeric variables — how they move together (or don't) — plotted as individual points, rather than comparing a single value across categories.
2. A correlation coefficient specifically measures *linear* relationship strength — a scatter plot can reveal a strong *non-linear* pattern (like a U-shape or curve) that produces a correlation near 0 despite a very real, visually obvious relationship existing in the data.

</details>

## 🎤 Interview preparation

**Q: Why would you look at a scatter plot in addition to computing a correlation coefficient?**
Short answer: A scatter plot can reveal the actual shape of a relationship — including non-linear patterns or outliers — that a single correlation number alone can hide or be misled by.

## Best practices

- Always visualize a relationship with a scatter plot alongside (not instead of) a computed correlation coefficient.
- Investigate any visually obvious outlier points separately before drawing a conclusion about the overall relationship.

---

### ⚡ Quick Revision

**Scatter plot** → plots two variables against each other, one point per observation
**Reveals:** relationship direction, strength, shape (linear vs. non-linear), and outliers
`,
});

createSkill('kpi-spreadsheets', {
  title: 'KPI',
  category: 'Spreadsheets',
  what_is_it: 'Displaying a single, prominent, high-priority number (a Key Performance Indicator) as its own dedicated element on a dashboard — often with a comparison to a target or a prior period.',
  why_it_matters: 'A stakeholder scanning a dashboard needs the single most important number to be instantly visible, not buried inside a chart or a table.',
  prerequisites: ['scatter-plot'],
  objectives: ['Build a KPI cell/card showing a key metric with a comparison', 'Explain why a KPI card is designed for instant scanning, not detailed analysis'],
  estimated_minutes: 25,
  resources: ['r-datavizcatalogue'],
  practice: [{ id: 'ex-kpi-1', title: 'Build a KPI card', description: 'Build a KPI display showing "Total Revenue" alongside a percentage change from the prior period, styled to stand out prominently.' }],
  verify: ['KPI number is prominent and immediately readable', 'Comparison (to target or prior period) is included and clearly labeled'],
  note: `
## 🎯 What is it?

A **KPI** display shows a single, prominent, high-priority number as its own dedicated element on a dashboard — a Key Performance Indicator (see [KPIs & Metrics](/skills/kpis-metrics) for the underlying concept) — often paired with a comparison, like a percentage change from a target or a prior period.

## 💡 Why is it important?

A stakeholder scanning a dashboard needs the single most important number to be instantly visible — not buried inside a chart's axis or a pivot table's cell — a KPI display exists specifically to answer "how are we doing?" in under a second.

## Core concept

A well-built KPI display typically includes:

| Element | Purpose |
|---|---|
| The number itself, large and prominent | The core answer, readable at a glance |
| A label | What the number represents (e.g., "Total Revenue") |
| A comparison (vs. target, vs. prior period) | Context — is this good, bad, on track? |
| A visual cue (color, arrow) | Reinforces the comparison at a glance |

## 📊 Example

A KPI card showing:

\`\`\`
TOTAL REVENUE
$1.2M
▲ 8% vs. last month
\`\`\`

**Explanation:** The number is large and immediate; the comparison ("8% vs. last month") gives instant context on whether this is a good or concerning result, without requiring the viewer to know last month's number themselves.

## Multiple examples

**Beginner:** A single large cell showing "Total Orders" with no comparison yet.
**Intermediate:** Adding a percentage-change comparison against the prior period, with conditional formatting coloring it green (up) or red (down).
**Real-world:** A dashboard's top row containing 3-4 KPI cards (Revenue, Orders, Conversion Rate, Average Order Value), each with its own comparison — giving a stakeholder the full "how are we doing" picture in the first few seconds of opening the dashboard, before they even look at any chart.

## ⚠️ Common mistakes

- **Showing a raw number with no comparison or context.** "$1.2M" alone doesn't tell a viewer whether that's good, bad, or on track — a comparison is what makes a KPI actionable, not just informative.
- **Building too many KPI cards on one dashboard**, diluting which number is actually the *most* important — see [Dashboard Design](/skills/dashboard-design)'s visual hierarchy principle.
- **Using a color cue (green/red) without a backup label**, which can be inaccessible to colorblind viewers — see [Color & Accessibility in Visualization](/skills/dataviz-color-accessibility).

## Real-world Data Analyst use cases

- **Any executive dashboard:** the "at a glance" answer to "how is the business doing" that everything else on the dashboard supports and explains.

## Related concepts

\`\`\`
Scatter Plot → KPI ← you are here → Dashboard
\`\`\`
Directly builds on [KPIs & Metrics](/skills/kpis-metrics)' concept of a well-chosen, precisely-defined metric — this topic is about how to *display* one prominently.

## Practice questions

### Easy
1. What does a KPI card typically need beyond just the raw number itself?

### Interview/Advanced
2. Why is a raw number like "$1.2M revenue" with no comparison considered an incomplete KPI display?

<details><summary><strong>Answer / Solution</strong></summary>

1. A comparison — to a target, a prior period, or both — giving the viewer context on whether the number represents good, bad, or on-track performance.
2. Without a comparison, a viewer has no way to judge whether $1.2M is good or concerning — the number is informative on its own, but not actionable, since it lacks the context needed to interpret it.

</details>

## 🎤 Interview preparation

**Q: What makes a KPI display effective on a dashboard?**
Short answer: A large, prominent number paired with a clear comparison (to a target or prior period) and a visual cue reinforcing that comparison — giving a viewer instant, actionable context, not just a bare figure.

## Best practices

- Always pair a KPI number with a comparison for context.
- Limit a dashboard to a small number of true KPI cards, so the most important number doesn't get lost among many.
- Pair a color-based comparison cue with a text/icon backup for accessibility.

---

### ⚡ Quick Revision

**KPI display** → a large, prominent number + a comparison (target or prior period)
**Rule:** a number alone isn't actionable — the comparison is what gives it meaning
`,
});

createSkill('dashboard-spreadsheets', {
  title: 'Dashboard',
  category: 'Spreadsheets',
  what_is_it: 'Assembling KPIs, charts, and slicers onto a single spreadsheet tab, laid out so a viewer can answer a specific question in seconds.',
  why_it_matters: 'This is the culmination of the entire Visualization & Dashboards group — every chart type and KPI display comes together into one finished, decision-ready artifact.',
  prerequisites: ['kpi-spreadsheets'],
  objectives: ['Assemble KPIs, charts, and slicers into one dashboard tab', 'Apply visual hierarchy so the most important element is the most prominent'],
  estimated_minutes: 40,
  resources: ['r-datavizcatalogue', 'r-ms-powerbi-training'],
  practice: [{ id: 'ex-dashboard-spreadsheets-1', title: 'Build a one-tab sales dashboard', description: 'Combine 2 KPI cards, a line chart, a bar chart, and a slicer into one clean, readable dashboard tab answering "how is this month\'s sales performance trending?"' }],
  verify: ['The dashboard\'s core question is answerable in under 10 seconds', 'Slicer(s) correctly update every connected chart and KPI', 'Layout has a clear visual hierarchy, not equally-weighted clutter'],
  note: `
## 🎯 What is it?

A **Dashboard** assembles [KPIs](/skills/kpi-spreadsheets), charts (bar, column, line, scatter), and [slicers](/skills/slicers) onto a single spreadsheet tab, laid out so a viewer can answer a specific question in seconds — the practical, hands-on culmination of everything in the Visualization & Dashboards group.

## 💡 Why is it important?

This is where every individual chart type and KPI display comes together into one finished, decision-ready artifact — a dashboard is not a pile of charts, but a tool designed around one specific decision-maker's specific question (see [Dashboard Design](/skills/dashboard-design) for the full design principles this applies).

## Core concept

A practical spreadsheet dashboard build sequence:

\`\`\`
1. Identify the ONE core question this dashboard must answer
2. Convert source data into a Table (auto-expanding, structured references)
3. Build the Pivot Table(s) needed to summarize that data
4. Build Pivot Charts from those pivot tables
5. Add KPI cards for the 1-3 most important numbers, each with a comparison
6. Add Slicers connected to every relevant chart/pivot table
7. Lay out with visual hierarchy — most important element largest/most prominent
8. Test: can a first-time viewer answer the core question in under 10 seconds?
\`\`\`

## 📊 Example

**Core question:** "How is this month's sales performance trending against target?"

**Layout:**
- **Top-left, largest:** a KPI card — "$1.2M / $1.5M target (80%)"
- **Center:** a line chart of daily revenue vs. a target line
- **Right:** a bar chart of revenue by region
- **Top filter bar:** a Region slicer connected to both charts and the KPI card

**Explanation:** A first-time viewer sees the core answer (80% to target) immediately, and the supporting charts answer the natural follow-up questions ("is this trending up or down?", "which region is behind?") without any further explanation needed.

## Multiple examples

**Beginner:** A single-page dashboard with one KPI card and one supporting chart.
**Intermediate:** Adding a slicer connected to both the chart and the KPI card, so filtering updates everything together.
**Real-world:** A full monthly sales dashboard built entirely from a Table-based source, with Pivot Tables/Pivot Charts that automatically update as new weekly data is pasted in, KPI cards with month-over-month comparisons, and a Region+Product slicer — the complete, self-updating spreadsheet dashboard pattern used across real recurring reporting.

## ⚠️ Common mistakes

- **Skipping the "what's the core question" step** and just assembling every chart that seems interesting — this produces clutter, not a dashboard (see [Dashboard Design](/skills/dashboard-design)).
- **Building on a plain range instead of a Table**, requiring manual range updates on every pivot table and chart each time new data arrives.
- **Not testing whether a first-time viewer can actually answer the core question quickly** — this is the real test of whether a dashboard succeeded, not how many charts it contains.

## Real-world Data Analyst use cases

- **Any recurring stakeholder report:** a self-updating, one-tab dashboard is one of the most commonly requested deliverables from a data analyst.

## Related concepts

\`\`\`
KPI → Dashboard ← you are here
\`\`\`
This closes the Visualization & Dashboards group and the Spreadsheets stage's practical tool-building sequence. The underlying design principles are covered in full in [Dashboard Design](/skills/dashboard-design), later in the Visualization stage.

## Practice questions

### Easy
1. What's the first step before building any dashboard, according to this build sequence?

### Interview/Advanced
2. Why should a spreadsheet dashboard be built on a Table rather than a plain range?

<details><summary><strong>Answer / Solution</strong></summary>

1. Identify the single core question the dashboard needs to answer — everything else in the build follows from that.
2. A Table auto-expands as new data is added, so every pivot table, Pivot Chart, and formula built on top of it automatically stays current — building on a plain range instead means manually updating every range reference each time new data arrives.

</details>

## 🎤 Interview preparation

**Q: How would you test whether a finished dashboard is actually successful?**
Short answer: Have someone unfamiliar with it try to answer the dashboard's core question within about 10 seconds of looking at it — if they can't, the layout, hierarchy, or KPI prominence needs rework, regardless of how much data or how many charts it contains.

## Best practices

- Always start from a single, clearly identified core question.
- Build on a Table, so the whole dashboard stays current automatically as data grows.
- Test the finished dashboard on a first-time viewer before considering it done.

---

### ⚡ Quick Revision

**Dashboard build sequence:** core question → Table → Pivot Table → Pivot Chart → KPI cards → Slicers → hierarchy
**Test:** can a first-time viewer answer the core question in under 10 seconds?
`,
});
