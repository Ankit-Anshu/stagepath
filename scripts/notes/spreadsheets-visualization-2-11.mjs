// data_analyst_roadmap_curriculum.md — Section 02.11 "Excel
// Visualization". Column/Bar/Line/Scatter charts and KPI Cards already
// exist. The old bundled "spreadsheets-charts" (Charts & Dashboards) has
// been retired — Chart Fundamentals gets a fresh, focused topic here, and
// Data Storytelling gets its own spreadsheet-specific topic (distinct
// from the general "storytelling" skill in the Visualization stage).
import { createSkill } from './_create.mjs';

createSkill('chart-fundamentals-spreadsheets', {
  title: 'Chart Fundamentals',
  category: 'Spreadsheets',
  what_is_it: 'The basic building blocks every spreadsheet chart is made from — a data series, category axis, value axis, legend, and title.',
  why_it_matters: 'Every specific chart type (bar, line, scatter) is a variation on these same building blocks — understanding them once makes every chart type faster to build and troubleshoot.',
  prerequisites: ['preparing-data-for-pivot-tables'],
  objectives: [
    'Identify a chart\'s data series, category axis, value axis, and legend',
    'Build a basic chart from a selected range',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-chart-fundamentals-1', title: 'Build and label a basic chart', description: 'Select a small table and insert a chart, then identify its category axis, value axis, and legend.' },
  ],
  verify: ['Can identify the core parts of any chart', 'Can build a basic chart from a selected range'],
  note: `
## 🎯 What is it?

Every spreadsheet chart is built from the same core pieces: a **data series** (the values being plotted), a **category axis** (what each data point represents — usually along the bottom), a **value axis** (the scale the data is measured against — usually along the side), a **legend** (identifying multiple series), and a **title**.

## 💡 Why is it important?

- Every specific chart type covered in this chapter (bar, line, scatter, pie...) is a variation on these same building blocks — understanding them once makes every chart type faster to build, read, and troubleshoot.
- Knowing the vocabulary (series, axis, legend) is required to follow any chart documentation or troubleshoot a chart showing something unexpected.

## Core concept

| Part | What it is |
|---|---|
| Data series | The actual values being plotted (e.g., monthly revenue) |
| Category axis | What each data point represents (e.g., months) — typically horizontal |
| Value axis | The numeric scale the data is measured against — typically vertical |
| Legend | Identifies which color/style belongs to which series, when there's more than one |
| Title | Names what the chart shows |

## 📊 Example

A chart of monthly revenue has \`Month\` (Jan, Feb, Mar...) on the category axis, \`Revenue\` values on the value axis, one data series (Revenue) plotted as bars or a line, and a title like "Monthly Revenue, 2024."

## ⚠️ Common mistakes

- **Selecting the wrong range before inserting a chart**, causing Excel to guess the wrong series/category split — always select the intended range (including headers) deliberately.
- **Building a chart with no title or unclear axis labels**, leaving a viewer to guess what's actually being shown.

## Related concepts

\`\`\`
Preparing Data for Pivot Tables
  ↓
Chart Fundamentals ← you are here
  ↓
Column Chart → Bar Chart → Line Chart
\`\`\`

## 🎤 Interview preparation

**Q: What's the difference between a chart's category axis and its value axis?**
Short answer: The category axis shows what each data point represents (like months or products), typically along the bottom; the value axis shows the numeric scale the data is measured against, typically along the side.

---

### ⚡ Quick Revision

**Chart building blocks** → data series, category axis, value axis, legend, title
Every specific chart type is a variation on these same core pieces.
`,
});

createSkill('pie-donut-chart', {
  title: 'Pie / Donut Chart',
  category: 'Spreadsheets',
  what_is_it: 'A circular chart showing each category\'s share of a whole — a pie chart as a full circle, a donut chart with a hollow center.',
  why_it_matters: 'It\'s one of the most overused and most misused chart types — knowing when it genuinely fits (a handful of categories, part-to-whole) versus when a bar chart would communicate better is a real skill.',
  prerequisites: ['scatter-plot'],
  objectives: [
    'Build a pie or donut chart to show part-to-whole composition',
    'Explain when a bar chart communicates better than a pie chart',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-pie-donut-chart-1', title: 'Build and critique a pie chart', description: 'Build a pie chart of 8 categories, then rebuild the same data as a bar chart and compare which communicates the differences more clearly.' },
  ],
  verify: ['Can build a pie or donut chart', 'Can explain a scenario where a bar chart would be clearer than a pie chart'],
  note: `
## 🎯 What is it?

A **pie chart** shows each category's share of a whole as a slice of a circle; a **donut chart** is the same idea with a hollow center (often used to display a total or KPI in the middle). Both work best for **part-to-whole** comparisons with a small number of categories.

## 💡 Why is it important?

- It's one of the most recognizable — and most overused — chart types; knowing its real limits prevents reaching for it out of habit when it isn't the clearest choice.
- Understanding when it fits (a handful of categories, genuinely summing to a meaningful whole) versus when it doesn't (many categories, or comparing values that aren't parts of one whole) is a real, frequently-tested visualization judgment call.

## Core concept

| Good fit | Poor fit |
|---|---|
| 2–5 categories | 7+ categories (slices become too thin to read) |
| Values that genuinely sum to a meaningful whole | Values that aren't parts of one whole (e.g., separate metrics) |
| A single point-in-time snapshot | Comparing change over time (use a line chart instead) |

## 📊 Example

Market share across 4 competitors (summing to 100%) is a reasonable pie chart. The same data for 15 competitors becomes a wall of unreadable thin slices — a sorted bar chart communicates the same information far more clearly at that scale.

## ⚠️ Common mistakes

- **Using a pie chart for more than 5-6 categories**, producing slices too thin to compare accurately by eye.
- **Using a pie chart to compare values across time or between unrelated metrics** — pie charts are for part-to-whole composition at one snapshot, not trends or unrelated comparisons.
- **3D pie charts** — the perspective distortion makes slice sizes even harder to compare accurately; avoid them.

## Related concepts

\`\`\`
Scatter Plot
  ↓
Pie / Donut Chart ← you are here
  ↓
Area Chart
\`\`\`

## 🎤 Interview preparation

**Q: When would you choose a bar chart over a pie chart for showing category shares?**
Short answer: When there are more than about 5-6 categories, or precise comparison between similarly-sized categories matters — bar charts let a viewer compare lengths accurately, while pie chart slices become hard to distinguish once there are many or similarly-sized categories.

---

### ⚡ Quick Revision

**Pie/Donut chart** → part-to-whole composition, best with 2–5 categories
Beyond ~5-6 categories, or for comparisons over time, a bar chart usually communicates better.
`,
});

createSkill('area-chart', {
  title: 'Area Chart',
  category: 'Spreadsheets',
  what_is_it: 'A line chart with the area beneath the line filled in — emphasizing the magnitude of a trend over time, and useful for showing stacked totals across multiple series.',
  why_it_matters: 'The filled area adds visual weight to volume/magnitude that a plain line chart doesn\'t emphasize as strongly, and stacked area charts show how multiple parts contribute to a changing total.',
  prerequisites: ['pie-donut-chart'],
  objectives: [
    'Build an area chart to emphasize trend magnitude',
    'Explain when a stacked area chart is appropriate versus a plain line chart',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-area-chart-1', title: 'Build a stacked area chart', description: 'Given monthly revenue by 3 product categories, build a stacked area chart showing both the total trend and each category\'s contribution.' },
  ],
  verify: ['Can build an area chart', 'Can explain when a stacked area chart is the right choice over a line chart'],
  note: `
## 🎯 What is it?

An **area chart** is a line chart with the region beneath the line filled in — visually emphasizing the magnitude of a trend, not just its direction. A **stacked area chart** layers multiple series on top of each other, showing both the total and each series' contribution to it.

## 💡 Why is it important?

- The filled area gives a stronger visual sense of volume/magnitude than a plain line, which can matter when communicating "how much," not just "which direction."
- Stacked area charts are one of the few chart types that clearly show both a changing total *and* the composition of that total over time in one view.

## Core concept

| Chart | Best for |
|---|---|
| Line chart | Comparing trend direction across a few series |
| Area chart | Emphasizing magnitude/volume of a single trend |
| Stacked area chart | Showing a total's composition changing over time |

## 📊 Example

Monthly revenue by product category, shown as a stacked area chart, reveals both the company's total revenue trend (the top of the stack) and which categories are growing or shrinking as a share of that total — information a set of separate line charts would make much harder to see at once.

## ⚠️ Common mistakes

- **Stacking too many series**, making individual bands hard to distinguish and compare — beyond 4-5 series, consider a different chart or breaking it into smaller groups.
- **Using a stacked area chart when the series aren't meaningfully additive** (i.e., summing them doesn't represent something real) — stacking implies the total is meaningful; don't stack unrelated metrics.

## Related concepts

\`\`\`
Pie / Donut Chart
  ↓
Area Chart ← you are here
  ↓
Combo Chart
\`\`\`

## 🎤 Interview preparation

**Q: When would a stacked area chart be a better choice than several separate line charts?**
Short answer: When you want to show both the overall trend of a total *and* how each component contributes to that total over time — a stacked area chart shows both in one view, while separate line charts would require the viewer to mentally combine them.

---

### ⚡ Quick Revision

**Area chart** → a filled line chart emphasizing magnitude
**Stacked area chart** → shows a changing total's composition over time — don't stack more than 4-5 series
`,
});

createSkill('combo-chart', {
  title: 'Combo Chart',
  category: 'Spreadsheets',
  what_is_it: 'A single chart combining two chart types (commonly bars and a line) — often to show two related metrics with very different scales together.',
  why_it_matters: 'It\'s the standard way to show a total alongside a rate or percentage (like revenue and margin %) on one chart, using a secondary axis so both are readable.',
  prerequisites: ['area-chart'],
  objectives: [
    'Build a combo chart with a secondary axis',
    'Explain when two metrics need a secondary axis to be shown together clearly',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-combo-chart-1', title: 'Combine revenue and margin', description: 'Build a combo chart showing monthly revenue as bars and profit margin % as a line on a secondary axis.' },
  ],
  verify: ['Can build a combo chart with two chart types', 'Can explain why a secondary axis is needed for two very differently-scaled metrics'],
  note: `
## 🎯 What is it?

A **combo chart** combines two chart types in one — most commonly bars for one metric and a line for another — often paired with a **secondary axis** so two metrics with very different scales (like revenue in thousands and a percentage) can both be read clearly on the same chart.

## 💡 Why is it important?

- It's the standard way to show a total alongside a rate — revenue (bars) and profit margin % (line) — where plotting both on the same axis would make one of them unreadable (a percentage line would look flat next to bars in the thousands).
- It lets a viewer see the relationship between two related metrics — like whether margin holds steady as revenue grows — in one glance, instead of comparing two separate charts.

## Core concept

Without a secondary axis, a metric measured in single-digit percentages plotted alongside one measured in thousands of dollars would appear as a flat line at the bottom of the chart — a **secondary axis** gives the second series its own independent scale.

## 📊 Example

Monthly revenue ($10K–$50K range) as bars, and profit margin (15%–25% range) as a line on a secondary axis — both series are clearly readable at their own natural scale, and a viewer can see at a glance whether margin is holding steady, rising, or falling as revenue changes.

## ⚠️ Common mistakes

- **Forgetting to move the second series to a secondary axis**, causing it to appear flat or invisible next to a much larger-scaled series.
- **Combining more than two genuinely different scales in one combo chart**, which quickly becomes cluttered and hard to read — two is usually the practical limit.

## Related concepts

\`\`\`
Area Chart
  ↓
Combo Chart ← you are here
  ↓
KPI Cards
\`\`\`

## 🎤 Interview preparation

**Q: You want to show monthly revenue and profit margin % on one chart. Why would you need a secondary axis?**
Short answer: Revenue (in the thousands) and margin (a percentage) have very different scales — plotted on the same axis, the margin line would appear nearly flat at the bottom. A secondary axis gives margin its own scale so both series are readable together.

---

### ⚡ Quick Revision

**Combo chart** → combines two chart types (e.g., bars + line), often with a secondary axis
Use when two related metrics have very different scales but need to be compared together.
`,
});

createSkill('choosing-the-right-chart', {
  title: 'Choosing the Right Chart',
  category: 'Spreadsheets',
  what_is_it: 'Matching a chart type to the type of comparison being shown — trend, category comparison, part-to-whole, or relationship — rather than picking a chart out of habit.',
  why_it_matters: 'The wrong chart type can make a correct finding look confusing or even misleading, no matter how accurate the underlying data is.',
  prerequisites: ['combo-chart'],
  objectives: [
    'Match a comparison type to the appropriate chart type',
    'Critique a chart choice that doesn\'t fit its underlying comparison',
  ],
  estimated_minutes: 25,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-choosing-right-chart-1', title: 'Pick the right chart for 3 findings', description: 'Given three different findings (a trend over time, a category comparison, and a relationship between two variables), pick the right chart type for each and explain why.' },
  ],
  verify: ['Can match a comparison type to the appropriate chart', 'Can explain why a specific chart choice fits a given finding'],
  note: `
## 🎯 What is it?

**Choosing the right chart** means deliberately matching a chart type to the *type of comparison* being shown, rather than defaulting to a familiar chart out of habit. This directly applies the Foundations stage's Visualize Data concept to the specific chart types covered in this chapter.

## 💡 Why is it important?

- The wrong chart type can make a correct finding look confusing, or actively mislead a viewer, even when every underlying number is accurate.
- It's one of the most commonly tested visualization judgment calls in interviews and case studies — being handed a finding and asked "what chart would you use?"

## Core concept

| Comparison type | Best chart |
|---|---|
| Trend over time | Line chart, area chart |
| Comparing categories | Bar chart, column chart |
| Part-to-whole (few categories) | Pie/donut chart |
| Part-to-whole over time | Stacked area/bar chart |
| Relationship between two variables | Scatter plot |
| Two related metrics, different scales | Combo chart |
| A single key number | KPI card |

## 📊 Example

A finding "revenue grew steadily each month" is a trend — a line chart fits. The same underlying data forced into a pie chart (one slice per month) would completely obscure the trend, even though the numbers are identical — the chart type, not the data, determines whether the finding actually comes through.

## ⚠️ Common mistakes

- **Picking a chart type out of habit or personal preference** rather than matching it to the comparison being shown.
- **Trying to cram too many comparison types into one chart** — a chart trying to show a trend, a category breakdown, and a part-to-whole split all at once usually communicates none of them well; sometimes two focused charts beat one crowded one.

## Related concepts

\`\`\`
Combo Chart
  ↓
Choosing the Right Chart ← you are here
  ↓
Chart Formatting
\`\`\`
Directly builds on Visualize Data from the Foundations stage.

## 🎤 Interview preparation

**Q: You have data showing how five product categories' market share has changed over the last 3 years. What chart type fits, and why?**
Short answer: A stacked area or stacked bar chart — it's a part-to-whole comparison (market share) that's also changing over time, and stacking shows both dimensions (the total and each category's share) in one view, unlike a single pie chart which only captures one point in time.

---

### ⚡ Quick Revision

**Choosing the right chart** → match chart type to comparison type: trend→line, categories→bar, part-to-whole→pie, relationship→scatter
The wrong chart can obscure or mislead, even with perfectly accurate data.
`,
});

createSkill('chart-formatting', {
  title: 'Chart Formatting',
  category: 'Spreadsheets',
  what_is_it: 'Polishing a chart\'s titles, labels, colors, and gridlines so it communicates clearly and looks presentation-ready — without changing the underlying data.',
  why_it_matters: 'An unformatted default chart is functional but forgettable — deliberate formatting is what makes a chart\'s point immediately obvious to a viewer.',
  prerequisites: ['choosing-the-right-chart'],
  objectives: [
    'Apply clear titles, axis labels, and data labels to a chart',
    'Remove unnecessary visual clutter from a chart',
  ],
  estimated_minutes: 20,
  resources: ['r-exceljet-functions'],
  practice: [
    { id: 'ex-chart-formatting-1', title: 'Polish a default chart', description: 'Take a default, unformatted chart and add a clear title, axis labels, and remove any unnecessary gridlines or clutter.' },
  ],
  verify: ['Can add a clear title and axis labels to a chart', 'Can identify and remove unnecessary chart clutter'],
  note: `
## 🎯 What is it?

**Chart formatting** covers the finishing touches that turn a default, generic chart into one that communicates clearly and looks presentation-ready — a specific title (not "Chart 1"), labeled axes, appropriate colors, and removing anything that doesn't help the viewer.

## 💡 Why is it important?

- An unformatted default chart is functional but forgettable — a viewer has to work to figure out what it's showing, which is exactly the opposite of what a chart is for.
- Deliberate formatting is often what separates a chart that gets glanced at and dismissed from one that makes its point immediately.

## Core concept

| Formatting choice | Why |
|---|---|
| A specific, descriptive title | "Monthly Revenue, 2024" beats "Chart 1" |
| Labeled axes | A viewer shouldn't have to guess what's being measured |
| Minimal gridlines | Heavy gridlines compete with the actual data |
| Deliberate color, not defaults | Highlight what matters; keep the rest muted |
| Data labels where they help | Direct labels can beat forcing a viewer to read off an axis |

## 📊 Example

A default bar chart titled "Chart 1," with default blue bars and heavy gridlines, retitled "Revenue by Region — Q1 2024," with gridlines removed and the top-performing region highlighted in a distinct color while the rest stay muted gray — same data, dramatically clearer message.

## ⚠️ Common mistakes

- **Leaving the default title** ("Chart 1," or just the series name), forcing a viewer to guess what the chart is actually about.
- **Over-formatting** — too many colors or 3D effects competes for attention just as much as too little formatting; the goal is clarity, not decoration.
- **Formatting decoratively without making the finding easier to see** — every formatting choice should serve communication, not just appearance.

## Related concepts

\`\`\`
Choosing the Right Chart
  ↓
Chart Formatting ← you are here
  ↓
Data Storytelling
\`\`\`

## 🎤 Interview preparation

**Q: What's the fastest formatting change that improves almost any default chart?**
Short answer: Replacing the default title ("Chart 1") with a specific, descriptive one that states what the chart shows — it's a small change that immediately tells a viewer what they're looking at, without requiring them to interpret the chart first.

---

### ⚡ Quick Revision

**Chart formatting** → specific titles, labeled axes, minimal clutter, deliberate color
Every formatting choice should make the chart's point clearer, not just prettier.
`,
});

createSkill('data-storytelling-spreadsheets', {
  title: 'Data Storytelling in Spreadsheets',
  category: 'Spreadsheets',
  what_is_it: 'Sequencing and annotating charts within a spreadsheet to lead a viewer through a finding — context, then the data, then the takeaway — rather than presenting an isolated, unexplained chart.',
  why_it_matters: 'A well-formatted chart still needs a narrative around it — without context and a clear takeaway, even a perfect chart can be misread or ignored.',
  prerequisites: ['chart-formatting'],
  objectives: [
    'Sequence a chart with a title, annotation, and takeaway that tells a complete story',
    'Explain the difference between an accurate chart and a chart that actually communicates',
  ],
  estimated_minutes: 25,
  resources: ['r-storytelling-with-data'],
  practice: [
    { id: 'ex-data-storytelling-spreadsheets-1', title: 'Annotate a chart with a takeaway', description: 'Take a chart showing a revenue dip and add a text box annotation pointing to the dip with a one-line explanation of what caused it.' },
  ],
  verify: ['Can add context and a takeaway annotation to a chart', 'Can explain the difference between an accurate chart and one that actually communicates'],
  note: `
## 🎯 What is it?

**Data storytelling** in a spreadsheet means sequencing and annotating charts to lead a viewer through a finding — providing context, showing the data, and stating a clear takeaway — rather than dropping an isolated, unexplained chart into a sheet and expecting the viewer to draw the right conclusion themselves.

## 💡 Why is it important?

- A perfectly accurate, well-formatted chart can still fail to communicate if it's presented with no context — a viewer might draw the wrong conclusion, or no conclusion at all.
- This directly applies the Foundations stage's Communicate Insights topic to spreadsheet charts specifically — the same "what happened, why, what to do" structure applies here.

## Core concept

A simple structure for a chart that tells a story:

\`\`\`
1. Context      — a short text box or title stating what question this answers
2. The chart    — clearly formatted, showing the actual data
3. Annotation   — pointing directly at the key moment (a spike, a dip)
4. Takeaway     — one sentence stating what it means and/or what to do
\`\`\`

## 📊 Example

A revenue chart alone shows a dip in March — a viewer might not know why, or whether it matters. Adding a text box annotation pointing directly at the March dip ("March dip: 3-day payment outage") and a one-line takeaway below the chart ("Recovered fully by April — no further action needed") turns the same chart into a complete, self-explanatory story.

## ⚠️ Common mistakes

- **Presenting a chart with no annotation or takeaway**, leaving the viewer to interpret (and possibly misinterpret) what it means on their own.
- **Burying the takeaway in a separate document or email** instead of placing it directly next to the chart, where a viewer will actually see it.

## Related concepts

\`\`\`
Chart Formatting
  ↓
Data Storytelling ← you are here
\`\`\`
This closes the Excel Visualization chapter — the next chapter (Excel Dashboards) assembles multiple such charts into one complete, decision-ready view. Builds directly on Communicate Insights from the Foundations stage.

## 🎤 Interview preparation

**Q: You've built a perfectly accurate, well-formatted chart. Why might it still fail to communicate its point?**
Short answer: Without context (what question it answers) and a clear takeaway (what it means or what to do), a viewer has to interpret the chart entirely on their own — accuracy and formatting alone don't guarantee the right conclusion gets drawn.

---

### ⚡ Quick Revision

**Data storytelling** → context → chart → annotation → takeaway
An accurate, well-formatted chart still needs a narrative to reliably communicate its point.
`,
});

console.log('Created 7 new Excel Visualization (2.11) skills.');
