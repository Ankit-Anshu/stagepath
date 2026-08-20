import { setNote } from './_lib.mjs';

setNote('charts', `
## 🎯 What is it?

Choosing and building the **right chart type** for a given question — bar, line, scatter, and distribution charts — and avoiding the common mistakes that make correct data look wrong.

## 💡 Why is it important?

The wrong chart type can make correct data look confusing or even misleading, or hide the exact insight you're trying to show. Chart choice is a **communication decision**, not just an aesthetic one — it's one of the most visible, judged parts of an analyst's work, since a chart is often the *only* thing a busy stakeholder actually looks at.

## Core concept

### What type of data is it appropriate for, and when to use it

| Question shape | Chart type | When NOT to use it |
|---|---|---|
| Trend over time | Line chart | Too many overlapping lines (>5-6) becomes unreadable — consider small multiples instead |
| Comparison across categories | Bar chart | Too many categories (>10-15) — consider sorting and showing only the top N |
| Distribution of one variable | Histogram / box plot | Small sample sizes, where a shape isn't meaningful yet |
| Relationship between two variables | Scatter plot | More than ~2 variables at once without added encoding (color/size) — gets cluttered |
| Part-to-whole (a few categories) | Pie/donut chart | More than ~5 slices, or slices that are hard to compare by eye — a bar chart usually communicates this better |

### Misleading charts
- **Truncated (non-zero) y-axis on a bar chart** exaggerates differences that are actually small — bar charts should almost always start at zero.
- **Unnecessary 3D effects** distort the actual proportions being shown and add no real information.
- **Dual axes with different scales** on the same chart can visually imply a relationship between two series that isn't actually there.

### Labeling
A finished chart has a clear **title** stating the finding (not just "Revenue"), labeled **axes** with units, and a **legend** if more than one series/color is shown — it should stand on its own without someone explaining it verbally.

## 📊 Example

**Question:** "How has monthly revenue trended this year?"

**Right choice:** A line chart, x-axis = month, y-axis = revenue, title: "Revenue Grew 18% From January to June."

**Wrong choice:** A pie chart of monthly revenue shares — pie charts don't communicate trend/order at all, and the question is fundamentally about change over time, which a pie chart can't show.

## Multiple examples

**Beginner:** Comparing revenue across 4 regions → a bar chart, sorted highest to lowest.
**Intermediate:** Comparing the relationship between marketing spend and revenue across 20 campaigns → a scatter plot.
**Real-world:** A stakeholder asks "which product categories are underperforming?" — a sorted horizontal bar chart of revenue by category, with a reference line at the target, communicates this far faster than a table of 30 numbers.

## Types / Variations

See the Core concept table above for the primary chart-type-to-question mapping — the single most testable and practically useful piece of visualization knowledge for an analyst.

## ⚠️ Common mistakes

- **Choosing a chart type by habit rather than by the question.** Defaulting to a bar chart or pie chart regardless of what's actually being asked is one of the most common beginner mistakes.
- **Truncating a bar chart's y-axis** to exaggerate a difference — even unintentionally, this misleads the viewer about the actual magnitude of a change.
- **Using a pie chart with too many slices** or slices too close in size to distinguish visually.
- **Shipping an unlabeled or untitled chart**, requiring verbal explanation to be understood.

## Real-world Data Analyst use cases

- **Sales analysis:** a line chart of monthly revenue trend.
- **Product analysis:** a scatter plot of feature usage vs. retention to explore a relationship.
- **Finance analysis:** a sorted bar chart of expenses by category, immediately showing the biggest cost drivers.

## Related concepts

\`\`\`
Charts ← you are here
  ↓
Color & Accessibility in Visualization
  ↓
Geospatial & Map Visualization
  ↓
Dashboard Design
  ↓
BI Tools (Power BI / Tableau)
  ↓
Storytelling
\`\`\`

## Practice questions

### Easy
1. Which chart type best answers "how did revenue change month to month over the past year"?

### Medium
2. A bar chart's y-axis starts at 90 instead of 0, making a 2% difference between two bars look dramatic. What's the fix?

### Interview/Advanced
3. A stakeholder wants to compare 15 product categories' revenue share using a pie chart. What would you recommend instead, and why?

<details><summary><strong>Answer / Solution</strong></summary>

1. A line chart — it's specifically designed to show trend/change over time.
2. Start the y-axis at 0, so the visual difference between bars accurately reflects the actual magnitude of the difference in the data.
3. A sorted horizontal bar chart — with 15 categories, a pie chart's slices become too numerous and similarly-sized to compare accurately by eye; a sorted bar chart makes ranking and comparison immediate and much easier to read.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: How do you decide which chart type to use?**
Short answer: Match the chart type to the shape of the question being asked — trend over time → line, comparison → bar, distribution → histogram/box plot, relationship → scatter — rather than defaulting to a familiar chart type out of habit.

### Conceptual questions
**Q: Why is a truncated y-axis considered misleading, even if the numbers on the chart are technically correct?**
Short answer: Human perception of a bar chart is driven by the *visual* height difference between bars — truncating the axis exaggerates that visual difference beyond what the actual data supports, even though the labeled numbers are accurate.

### Scenario-based questions
**Q: You're asked to build "one chart that shows everything" about a dataset. How do you respond?**
Short answer: Push back on the framing — a single chart answers a single, specific question well; cramming multiple unrelated questions into one chart usually makes it harder to read than building 2-3 focused charts instead.

### Practical questions
**Q: How would you design a chart comparing this year's and last year's monthly revenue on the same view?**
Short answer: A line chart with two lines (this year, last year), clearly labeled with a legend and distinguishable colors/styles, so the comparison across the same months is direct and readable.

## Interview traps / tricky points

- "What's your favorite chart type?" is a trap if answered generically — the right answer explains that chart choice depends on the question, not personal preference.
- A chart can be numerically accurate and still visually misleading (truncated axis, 3D distortion) — this distinction is a common interview probe.

## Best practices

- Choose the chart type based on the specific question being asked, every time.
- Never truncate a bar chart's y-axis; start at zero.
- Every chart needs a title stating the finding, labeled axes with units, and a legend if needed.
- Sort categorical bar charts by value, not alphabetically, unless there's a specific reason not to.

---

### ⚡ Quick Revision

**Trend over time** → line chart · **Comparison** → bar chart · **Distribution** → histogram/box plot · **Relationship** → scatter plot
**Bar charts** → always start the y-axis at zero
**Every chart needs:** a finding-based title, labeled axes, a legend if needed
`);

setNote('dataviz-color-accessibility', `
## 🎯 What is it?

Choosing chart **colors and contrast** that work for colorblind viewers and remain readable at a glance — not just on your own screen, in your own lighting, with your own color vision.

## 💡 Why is it important?

A chart that relies on red-vs-green to convey meaning is unreadable to a meaningful share of any audience (red-green color blindness affects roughly 1 in 12 men and 1 in 200 women) — and low contrast fails everyone equally in a bright room, on a projector, or printed in grayscale. Accessible design isn't a nice-to-have; it's the difference between a chart that actually communicates and one that silently fails part of its audience.

## Core concept

### Colorblind-safe palettes
Avoid encoding meaning purely through red-vs-green, which is indistinguishable to the most common forms of color blindness. Colorblind-safe palettes (blue/orange, or perceptually-distinct sequential palettes) remain distinguishable across the most common types of color vision deficiency.

### Contrast
Text and key chart elements need sufficient contrast against their background to remain readable — especially important for anything projected, printed, or viewed in bright light. The WCAG contrast standard (a widely-used accessibility benchmark) requires a contrast ratio of at least 4.5:1 for normal text.

### Beyond color
Never let color be the *only* way meaning is conveyed — pair it with a label, a pattern, a shape, or direct annotation, so the chart still works for someone who can't distinguish the colors at all (or when printed in black and white).

## Syntax / Formula / Structure

A practical accessibility checklist for any chart:

\`\`\`
1. Would this chart still make sense in grayscale?
2. Are red and green ever both used to distinguish two different categories?
3. Does text meet a 4.5:1 contrast ratio against its background?
4. Is there a non-color cue (label, pattern, shape) backing up every color-coded meaning?
\`\`\`

## 📊 Example

**Before:** A chart marking "on target" in green and "off target" in red, with no other labeling.

**Problem:** A colorblind viewer (or anyone viewing a grayscale printout) sees two bars that look nearly identical, with no way to tell which is which.

**After:** The same chart uses blue for "on target" and orange for "off target" (a colorblind-safe pair), *and* adds a direct text label ("On Target" / "Off Target") next to each bar.

**Explanation:** The fix layers two independent safeguards — a colorblind-safe palette, plus a non-color cue — so the meaning survives even if one safeguard alone would have failed for a given viewer or viewing condition.

## Multiple examples

**Beginner:** Swapping a red/green two-category chart for a blue/orange palette.
**Intermediate:** Checking a dashboard's background/text contrast against the WCAG 4.5:1 standard using a contrast checker tool.
**Real-world:** A performance dashboard that colors metrics red/yellow/green (a common pattern) is redesigned to also show an icon (✓/⚠/✗) or explicit text label next to each color, so it remains interpretable for colorblind viewers, in grayscale, and via a screen reader.

## ⚠️ Common mistakes

- **Defaulting to a stoplight red/yellow/green scheme without a backup cue.** This is one of the most common accessibility failures in business dashboards specifically because it "looks obviously right" to someone without color vision deficiency.
- **Only checking a chart's colors on your own monitor.** Contrast and color distinguishability can look fine on one screen and fail in different lighting, on a projector, or in print.
- **Assuming accessibility only matters for a small edge-case audience.** Given the prevalence of red-green color blindness, most charts shared broadly will reach at least a few affected viewers.

## Real-world Data Analyst use cases

- **Any status/KPI dashboard:** replacing pure red/green status indicators with a colorblind-safe palette plus icons or labels.
- **Executive presentations:** verifying a deck's charts remain legible if printed in grayscale, a common real-world scenario.
- **Company-wide reporting:** establishing a consistent, accessible color palette used across every chart in a reporting suite.

## Real-world use cases / Business use case

Applying a consistent, accessible palette across a whole reporting suite (not just one chart) also builds trust and recognition — stakeholders learn "blue = current period, gray = prior period" once, and that convention holds everywhere.

## ⚠️ Common mistakes (continued)

- **Using color alone in a legend without any other way to distinguish series** (e.g., two very similar shades of blue) — this fails for many people even without formal color blindness, in low light or on a small screen.

## Related concepts

\`\`\`
Charts
  ↓
Color & Accessibility in Visualization ← you are here
  ↓
Geospatial & Map Visualization
  ↓
Dashboard Design
\`\`\`

## Practice questions

### Easy
1. Why is a red/green color scheme risky for conveying meaning in a chart?

### Medium
2. A dashboard uses only color (green checkmark background vs. red X background) to indicate pass/fail. Propose one specific fix.

### Interview/Advanced
3. A chart passes a colorblind simulation check but still fails an accessibility review. What else might be wrong?

<details><summary><strong>Answer / Solution</strong></summary>

1. Red-green color blindness is relatively common, and viewers with this condition may not be able to distinguish the two colors at all, making the chart's meaning invisible to them.
2. Add a non-color cue — a checkmark/X icon or an explicit "Pass"/"Fail" text label — alongside the color, so the meaning survives even without perceiving the color difference.
3. Likely a contrast issue — even with colorblind-safe hues, text or key elements might not meet a sufficient contrast ratio (e.g., 4.5:1) against their background, making them hard to read regardless of color vision.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why does color accessibility matter in data visualization?**
Short answer: A meaningful share of any audience has some form of color vision deficiency, and relying on color alone (especially red/green) to convey meaning makes a chart unreadable for them — accessible design ensures the chart communicates to everyone.

### Conceptual questions
**Q: What's the difference between choosing a "colorblind-safe" palette and adding a "non-color cue"?**
Short answer: A colorblind-safe palette picks colors that remain visually distinguishable under common color vision deficiencies; a non-color cue (label, icon, pattern) is an independent safeguard that conveys the same meaning even if color perception fails entirely or the chart is viewed in grayscale.

### Scenario-based questions
**Q: A stakeholder insists on a red/green status dashboard because "that's how everyone does it." How do you respond?**
Short answer: Keep the familiar red/green convention if desired, but add a non-color cue (icon or label) alongside it — this preserves the familiar look for most viewers while making the dashboard genuinely accessible to colorblind viewers too, without a tradeoff.

### Practical questions
**Q: How would you check whether a chart's text meets an accessible contrast standard?**
Short answer: Use a contrast-checking tool to measure the contrast ratio between the text color and its background, and confirm it meets or exceeds the WCAG minimum (commonly 4.5:1 for normal text).

## Interview traps / tricky points

- "I made it colorblind-safe" isn't complete if color is still the *only* signal — the non-color cue is the actual safeguard for full accessibility, not the palette choice alone.
- Contrast and colorblind-safety are two separate, independent checks — passing one doesn't mean the other is satisfied.

## Best practices

- Never rely on color alone to convey meaning — always pair it with a label, icon, or pattern.
- Avoid red/green as the sole distinguishing pair; use blue/orange or another colorblind-safe combination instead.
- Check contrast against a recognized standard (like WCAG 4.5:1), not just "does it look fine to me."
- Establish one consistent, accessible palette and reuse it across every chart in a reporting suite.

---

### ⚡ Quick Revision

**Avoid:** red/green as the only distinguishing colors
**Always add:** a non-color cue (label, icon, pattern) backing up any color-coded meaning
**Contrast standard:** WCAG 4.5:1 minimum for normal text
**Test:** would this chart still make sense in grayscale?
`);

setNote('dataviz-geospatial', `
## 🎯 What is it?

**Geospatial visualization** shows data on a map — **choropleth maps** (shading regions by a value) and **point maps** (plotting individual locations) — and knowing when a map is genuinely the right chart for a question, versus when it isn't.

## 💡 Why is it important?

Location-based questions — "where are sales strongest," "which regions are underperforming" — are answered far faster with a map than with a table of region names and numbers, since geographic patterns (clustering, regional gaps) are often instantly visible on a map and easy to miss in a table.

## Core concept

### Choropleth maps
Shades geographic regions (states, countries, zip codes) by a value — darker/lighter color representing higher/lower values. Ideal for **region-level aggregated data** (e.g., total sales by state).

### Point maps
Plots individual locations using latitude/longitude — ideal for **discrete, location-specific data** (e.g., individual store locations, customer addresses, delivery stops).

| Map type | Best for | Data needed |
|---|---|---|
| Choropleth | Regional comparison (state, country, zip) | A value per named region |
| Point map | Individual locations | Latitude/longitude pairs |

### When not to map
A map is the wrong chart when the *comparison* matters more than the *location* — e.g., ranking 5 regions by revenue is usually clearer and faster to read as a sorted bar chart than as a choropleth map, since precise value comparison is genuinely harder on a map than on a bar chart's aligned axis.

## Syntax / Formula / Structure

A practical decision framework:

\`\`\`
Is the geographic pattern itself the insight (clustering, regional spread)?
  → YES: a map is likely the right choice
  → NO, it's really about ranking/comparing values
  → a sorted bar chart usually communicates faster and more precisely
\`\`\`

## 📊 Example

**Question:** "Which US states have the highest average order value?"

**Choropleth map:** shades each state by average order value — this instantly reveals *where* (e.g., "the Northeast is consistently darker/higher") in a way a 50-row table doesn't.

**But if the actual follow-up question is** "rank the top 5 states by average order value" — a sorted bar chart of just those states communicates the precise ranking and values far more clearly than trying to compare shading intensity by eye on a map.

## Multiple examples

**Beginner:** A choropleth map of total sales by country for a global company.
**Intermediate:** A point map plotting every store location, colored by whether it's over or under its monthly target.
**Real-world:** A logistics team investigating delivery delays builds a point map of delayed shipments — the map instantly reveals delays are clustered around one specific distribution hub, a pattern that would have been much harder to spot scanning a table of thousands of individual shipment rows.

## Types / Variations

See the Core concept table above (choropleth vs. point map) — the two standard geospatial chart types for business analytics.

## ⚠️ Common mistakes

- **Using a map when a bar chart would communicate the actual comparison better.** A map's strength is showing spatial pattern, not precise value comparison — using one out of habit for "which region is #1" questions often makes the answer harder to read, not easier.
- **Choropleth maps shaded by a raw total instead of a rate**, which can just reflect population/region size rather than a meaningful difference (e.g., a state looking "high" on total sales purely because it's a bigger state) — normalize by population or another denominator when relevant.
- **Point maps with too many overlapping points**, becoming an unreadable solid blob — clustering, heatmap-style density shading, or aggregation may be needed at scale.

## Real-world Data Analyst use cases

- **Sales analysis:** a choropleth map of revenue by region to spot geographic concentration.
- **Operations analysis:** a point map of delivery delays to spot clustering around a specific hub or route.
- **Marketing analysis:** a choropleth map of conversion rate by region to guide where to increase local ad spend.

## Related concepts

\`\`\`
Charts
  ↓
Geospatial & Map Visualization ← you are here
  ↓
Dashboard Design
  ↓
BI Tools (Power BI / Tableau)
\`\`\`

## Practice questions

### Easy
1. Which map type fits "show total sales by country," and which fits "show every customer's exact location"?

### Medium
2. A choropleth map of total revenue by state makes California and Texas look dominant — but this might just reflect their large populations. What's a better metric to map?

### Interview/Advanced
3. A stakeholder asks for "a map showing which of our 5 regions is performing best." Would you build a map, or something else? Why?

<details><summary><strong>Answer / Solution</strong></summary>

1. Choropleth for total sales by country (region-level aggregate); point map for individual customer locations (discrete, location-specific data).
2. Revenue *per capita* (or per customer, or another population-normalized rate) — this removes the effect of raw population size and shows genuine regional differences in performance.
3. A sorted bar chart, not a map — with only 5 regions, the question is fundamentally about *ranking and precise comparison*, which a bar chart communicates faster and more accurately than shading intensity on a map; a map's strength (revealing spatial pattern across many regions) isn't the actual need here.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between a choropleth map and a point map?**
Short answer: A choropleth map shades entire geographic regions by a value; a point map plots individual, discrete locations using latitude/longitude.

### Conceptual questions
**Q: When would a bar chart be a better choice than a map, even for geographic data?**
Short answer: When the question is really about precise ranking or comparison between a small number of regions — a map's strength is showing spatial pattern across many regions at once, not precise value comparison between a few.

### Scenario-based questions
**Q: A choropleth map of total revenue makes the largest-population states look like the best performers. Is this a fair representation? How would you fix it?**
Short answer: Not necessarily — raw totals conflate performance with region size; shading by a normalized rate (revenue per capita, or per customer) removes that bias and better reflects true regional performance.

### Practical questions
**Q: How would you visualize thousands of individual delivery locations without the map becoming an unreadable solid blob of points?**
Short answer: Use density/heatmap-style shading, clustering nearby points together, or aggregating to a coarser region-level choropleth instead of plotting every single point individually.

## Interview traps / tricky points

- A map "looking impressive" isn't the same as a map communicating the actual answer efficiently — interviewers often probe whether a candidate defaults to a map for the wrong reasons (visual appeal) rather than the right ones (spatial pattern is the actual insight).
- Choropleth maps shaded by raw totals (not rates) are a very common, easy-to-miss source of a misleading regional comparison.

## Best practices

- Default to normalized rates (per capita, per customer), not raw totals, when shading a choropleth map for comparison purposes.
- Use a map only when the geographic pattern itself is the insight — otherwise, prefer a bar chart for precise comparison.
- Aggregate or cluster point maps with a large number of locations to avoid an unreadable overlapping blob.

---

### ⚡ Quick Revision

**Choropleth map** → shades regions by a value; best for regional aggregates
**Point map** → plots individual lat/long locations; best for discrete points
**Use a map when:** spatial pattern itself is the insight — otherwise prefer a bar chart
**Shade by rate, not raw total,** to avoid conflating performance with region/population size
`);
