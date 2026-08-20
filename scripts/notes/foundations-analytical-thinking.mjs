// data_analyst_roadmap_curriculum.md — Section 01.4 "Analytical Thinking".
// Mindset/reasoning topics, distinct from the process-step topics in
// foundations-process.mjs. correlation-vs-causation and trend-analysis are
// deliberately generic here (not tied to a specific tool) so the Statistics
// and Business Analytics stages can later reference these same ids instead
// of duplicating the concept.
import { createSkill } from './_create.mjs';

createSkill('asking-analytical-questions', {
  title: 'Asking Analytical Questions',
  category: 'Foundations',
  what_is_it: 'The skill of turning a vague curiosity or business concern into a specific, answerable question that data can actually address.',
  why_it_matters: 'The quality of an analysis is capped by the quality of the question behind it — a vague question guarantees a vague, hard-to-act-on answer.',
  prerequisites: ['make-recommendations'],
  objectives: [
    'Turn a vague concern into a specific, answerable question',
    'Explain what makes a question "answerable" with available data',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-analytical-questions-1', title: 'Sharpen a question', description: 'Take the vague concern "our users don\'t seem engaged" and turn it into a specific, answerable analytical question.' },
  ],
  verify: ['Can turn a vague concern into a specific question', 'Can explain why specificity matters'],
  note: `
## 🎯 What is it?

**Asking analytical questions** is the skill of turning a vague curiosity ("are we doing okay?") or business concern ("users don't seem engaged") into a specific, answerable question a dataset can actually address ("what percentage of new users complete a core action within their first 7 days, and how has that changed over the last 6 months?").

## 💡 Why is it important?

- The quality of an analysis is capped by the quality of the question — a vague question guarantees a vague, hard-to-act-on answer, no matter how skilled the analyst.
- It's the mental-model foundation for the earlier "Define the Business Problem" process step — this topic is the underlying *thinking skill*, not just the workflow step.

## Core concept

A good analytical question is usually:
- **Specific** — names a metric, a segment, and a time window.
- **Measurable** — answerable with data that exists or can reasonably be collected.
- **Tied to a decision** — the answer changes what someone does next.

| Vague | Specific & answerable |
|---|---|
| "Are we doing okay?" | "Is Q1 revenue on track to hit the $2M target?" |
| "Users don't seem engaged" | "What % of new users complete a core action within 7 days, and how has that trended?" |

## 📊 Example

A product manager says, "I feel like people aren't sticking around." An analyst sharpens this into: "What's the 30-day retention rate for users who signed up in the last 3 months, and how does it compare to the prior 3 months?" — now it's something a query can actually answer.

## ⚠️ Common mistakes

- **Accepting a vague question at face value** and diving into data without sharpening it first — often producing an answer to a question nobody actually asked.
- **Over-narrowing a question too early**, before understanding what the stakeholder actually cares about — sharpening should still capture their real underlying concern.

## Related concepts

\`\`\`
Asking Analytical Questions ← you are here
  ↓
Hypothesis Thinking
  ↓
Root Cause Analysis
\`\`\`

## 🎤 Interview preparation

**Q: A stakeholder says "our marketing doesn't feel like it's working." How do you turn this into an answerable question?**
Short answer: Ask what "working" means to them specifically — leads? conversions? cost per acquisition? — then sharpen it into something measurable, like "has our cost per acquisition increased over the last two quarters compared to target?"

---

### ⚡ Quick Revision

**Asking analytical questions** → turn vague concerns into specific, measurable, decision-relevant questions
The ceiling of any analysis is set by the quality of its question.
`,
});

createSkill('hypothesis-thinking', {
  title: 'Hypothesis Thinking',
  category: 'Foundations',
  what_is_it: 'Forming a specific, testable guess about the answer to a question before diving into the data, then checking whether the data supports or contradicts it.',
  why_it_matters: 'Analyzing with a hypothesis in mind is faster and more focused than open-ended exploration, and it\'s directly testable — you either confirm it, refute it, or learn something more specific.',
  prerequisites: ['asking-analytical-questions'],
  objectives: [
    'Explain what a hypothesis is in an analytical context',
    'Form a testable hypothesis for a given business question',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-hypothesis-thinking-1', title: 'Form a hypothesis', description: 'For a business question you\'re curious about, write a specific hypothesis for what you think the answer is, before looking at any data.' },
  ],
  verify: ['Can define hypothesis thinking', 'Can write a testable hypothesis for a given question'],
  note: `
## 🎯 What is it?

**Hypothesis thinking** means forming a specific, testable guess about the likely answer to a question *before* diving into the data, then using the data to confirm, refute, or refine that guess — rather than exploring with no direction at all.

## 💡 Why is it important?

- It's much faster than fully open-ended exploration — a hypothesis tells you exactly which data to pull and which comparison to make first.
- It's directly testable: a good hypothesis is specific enough that the data can clearly support or contradict it, which produces a sharper finding than vague exploration.
- It's the everyday, informal cousin of formal Hypothesis Testing (covered later in Statistics), which adds statistical rigor to the same basic idea.

## Core concept

\`\`\`
Question:    "Why did signups drop last week?"
Hypothesis:  "I think it's because the signup form change we shipped Tuesday
              introduced a bug that's rejecting some submissions."
Test:        Check the error rate on the signup form before/after Tuesday's deploy.
\`\`\`

A hypothesis should be specific enough to be wrong — "something changed" isn't a hypothesis; "the Tuesday deploy broke the form for mobile users" is.

## 📊 Example

Given "conversion rate dropped this week," instead of exploring every possible angle at once, an analyst forms a hypothesis: "I suspect it's mobile-specific, since we shipped a mobile checkout change Monday." They check mobile vs. desktop conversion rate first — a focused, fast test — rather than starting with an unfocused deep dive across every dimension.

## ⚠️ Common mistakes

- **Only looking for evidence that confirms the hypothesis** (confirmation bias) and ignoring data that contradicts it — a good analyst actively checks for disconfirming evidence too.
- **Treating a hypothesis as a conclusion before it's actually tested against the data.**

## Related concepts

\`\`\`
Asking Analytical Questions
  ↓
Hypothesis Thinking ← you are here
  ↓
Root Cause Analysis
\`\`\`
Builds toward the formal Hypothesis Testing topic in the Statistics stage.

## 🎤 Interview preparation

**Q: How does forming a hypothesis before analyzing data make you faster, not slower?**
Short answer: A specific hypothesis tells you exactly which comparison to check first, instead of exploring every possible angle — it focuses the analysis, and even a wrong hypothesis usually points toward the right one faster than unfocused exploration.

---

### ⚡ Quick Revision

**Hypothesis thinking** → form a specific, testable guess before diving into data, then check it against the data
Faster and sharper than open-ended exploration — but watch for confirmation bias.
`,
});

createSkill('root-cause-analysis', {
  title: 'Root Cause Analysis',
  category: 'Foundations',
  what_is_it: 'Systematically tracing a problem back to its actual underlying cause, rather than stopping at the first plausible-looking explanation.',
  why_it_matters: 'Acting on a surface-level cause instead of the real root cause means the same problem tends to recur — root cause analysis is what prevents that.',
  prerequisites: ['hypothesis-thinking'],
  objectives: [
    'Explain the difference between a symptom and a root cause',
    'Apply a simple root-cause technique (like "5 Whys") to a problem',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-root-cause-1', title: 'Run the 5 Whys', description: 'Pick a problem ("revenue dropped") and ask "why" five times in a row, each answer building on the last, until you reach a root cause.' },
  ],
  verify: ['Can distinguish a symptom from a root cause', 'Can apply the "5 Whys" technique to a simple problem'],
  note: `
## 🎯 What is it?

**Root cause analysis** is the practice of systematically tracing a problem back to its actual underlying cause, instead of stopping at the first plausible-looking explanation (a symptom). A classic technique is the **"5 Whys"** — repeatedly asking "why did that happen?" until you reach something genuinely actionable.

## 💡 Why is it important?

- Fixing a symptom instead of the root cause means the problem tends to come back — e.g., patching one broken report without fixing the pipeline bug that caused it.
- It's a core diagnostic-analytics technique, and a very common interview scenario ("walk me through how you'd figure out why X happened").

## Core concept

\`\`\`
Problem:  Revenue dropped 10% last week.
Why?      Because orders from Region A dropped sharply.
Why?      Because the checkout page errored for Region A users.
Why?      Because a currency conversion bug was introduced in Monday's deploy.
Why?      Because that deploy skipped its usual QA check.
Why?      Because the QA step isn't enforced for hotfix deploys.
                                        ↑ this is the actionable root cause
\`\`\`

The first "why" (orders dropped) is a symptom; the last is something a team can actually fix to prevent recurrence.

## 📊 Example

A support team notices ticket volume spiked. Root cause analysis traces it: spike → mostly about failed payments → payments failing mostly for one card type → that card type's integration silently changed its error format last week → the checkout code wasn't updated to handle the new format. The fix (update the error-handling code) addresses the actual root cause, not just "respond to more tickets faster."

## ⚠️ Common mistakes

- **Stopping at the first explanation that sounds plausible**, without verifying it against the data or asking "why" at least once more.
- **Confusing a contributing factor with the single root cause** — real problems often have multiple contributing factors; root cause analysis should surface the most actionable one(s), not force a single oversimplified answer.

## Related concepts

\`\`\`
Hypothesis Thinking
  ↓
Root Cause Analysis ← you are here
  ↓
Pattern Identification
\`\`\`
Closely related to Diagnostic Analytics, which is the broader category of analysis this technique supports.

## 🎤 Interview preparation

**Q: Walk me through how you'd find the root cause of a sudden spike in customer complaints.**
Short answer: Segment the complaints to find a common pattern (one product, one region, one channel), then keep asking "why" about that specific pattern until reaching something concretely fixable — not stopping at the first surface-level explanation.

---

### ⚡ Quick Revision

**Root cause analysis** → trace a problem to its actual underlying cause, not just its symptom
Technique: "5 Whys" — keep asking why until you reach something actionable.
`,
});

createSkill('pattern-identification', {
  title: 'Pattern Identification',
  category: 'Foundations',
  what_is_it: 'Noticing recurring structure in data — trends, cycles, clusters, or repeated relationships — that isn\'t obvious from a single number.',
  why_it_matters: 'Most valuable insights come from a pattern, not a single data point — spotting them is what turns a pile of numbers into something worth investigating.',
  prerequisites: ['root-cause-analysis'],
  objectives: [
    'Define pattern identification and give an example',
    'Name two common pattern types an analyst looks for',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-pattern-identification-1', title: 'Spot a pattern', description: 'Look at any chart or table you have access to and identify one recurring pattern (a cycle, a cluster, a repeated relationship).' },
  ],
  verify: ['Can define pattern identification', 'Can name two types of patterns an analyst looks for'],
  note: `
## 🎯 What is it?

**Pattern identification** is the skill of noticing recurring structure in data — a trend, a seasonal cycle, a cluster of similar records, or a relationship that keeps showing up — rather than looking at each number in isolation.

## 💡 Why is it important?

- Most valuable findings come from a pattern, not a single data point — "revenue was $50K in March" is a fact; "revenue always dips in March, every year" is a pattern worth investigating and planning around.
- It's the skill underlying trend analysis, segmentation, and correlation — all specific applications of noticing structure in data.

## Core concept

| Pattern type | Example |
|---|---|
| Trend | Steady growth or decline over time |
| Seasonality/cycle | Sales spike every December |
| Cluster | A group of customers behaving similarly |
| Repeated relationship | Higher marketing spend consistently precedes higher signups |
| Outlier pattern | The same few accounts always driving disproportionate revenue |

## 📊 Example

Looking at 3 years of monthly revenue, a single month's number tells you little. Plotting all 36 months reveals a pattern: revenue consistently spikes every November and December — a seasonal pattern worth planning inventory and staffing around, invisible from any single month's number.

## ⚠️ Common mistakes

- **Seeing a pattern in too little data** — a "pattern" based on 2–3 data points is often just noise; genuine patterns usually need to be checked across a longer time period or larger sample.
- **Not verifying a suspected pattern holds across different segments** before treating it as a general truth.

## Related concepts

\`\`\`
Root Cause Analysis
  ↓
Pattern Identification ← you are here
  ↓
Trend Analysis
\`\`\`

## 🎤 Interview preparation

**Q: How do you avoid mistaking random noise for a real pattern?**
Short answer: Check whether the pattern holds across a longer time window or a larger sample, and whether it's consistent across relevant segments — a pattern seen in just 2–3 data points is much more likely to be noise than a real, recurring structure.

---

### ⚡ Quick Revision

**Pattern identification** → notice recurring structure (trends, cycles, clusters, relationships) rather than isolated numbers
Verify a pattern holds across enough data before trusting it.
`,
});

createSkill('trend-analysis', {
  title: 'Trend Analysis',
  category: 'Foundations',
  what_is_it: 'Examining how a metric changes over time to determine whether it\'s consistently rising, falling, staying flat, or moving in cycles.',
  why_it_matters: "A single snapshot number can't tell you direction — trend analysis is what reveals whether things are getting better, worse, or staying the same.",
  prerequisites: ['pattern-identification'],
  objectives: [
    'Define trend analysis and explain what it reveals that a single number can\'t',
    'Distinguish a trend from a one-off spike',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-trend-analysis-1', title: 'Plot a trend', description: 'Take any metric with at least 6 data points over time and describe its trend: rising, falling, flat, or cyclical.' },
  ],
  verify: ['Can define trend analysis', 'Can distinguish a genuine trend from a one-off spike'],
  note: `
## 🎯 What is it?

**Trend analysis** examines how a metric changes over multiple time periods to determine its direction — consistently rising, falling, flat, or moving in a repeating cycle — rather than looking at just one snapshot in time.

## 💡 Why is it important?

- A single number ("revenue was $50K last month") tells you almost nothing about direction; a trend ("$40K → $45K → $50K over the last 3 months") tells a much more useful story.
- It's the analytical thinking skill behind line charts, forecasting, and predictive analytics — you can't reasonably forecast what's next without first understanding the trend so far.

## Core concept

| Trend shape | What it suggests |
|---|---|
| Steady rise/fall | A consistent underlying driver — worth understanding and potentially forecasting |
| Flat | Stability — a change would be the more notable event |
| Cyclical | Seasonality — compare like periods (this December to last December, not to November) |
| One-off spike | Likely a single event, not a trend — investigate the specific cause rather than assuming it continues |

## 📊 Example

Weekly signups: 100, 105, 98, 250, 110, 102. The "250" is a one-off spike (likely a specific campaign or event), not part of the underlying trend, which is roughly flat around 100–110. Reporting "signups are trending up" based on that one week would be a mistake — the trend, excluding the spike, is flat.

## ⚠️ Common mistakes

- **Calling a single spike or dip a "trend."** A trend needs to be observed across multiple consistent periods, not one outlier week.
- **Comparing a cyclical metric to the wrong baseline** — comparing December sales to November's, instead of to last December's, misreads normal seasonality as a real change.

## Related concepts

\`\`\`
Pattern Identification
  ↓
Trend Analysis ← you are here
  ↓
Segmentation
\`\`\`
Builds toward Predictive Analytics and the Business Analytics stage's Forecasting & Trend Analysis topic.

## 🎤 Interview preparation

**Q: Weekly signups jumped from 100 to 250 in one week, then back to 110. Is this a trend?**
Short answer: No — it's a one-off spike, not a trend. A trend requires a consistent direction across multiple periods; this looks like a single event (a campaign, a press mention) worth investigating on its own, not evidence signups are generally rising.

---

### ⚡ Quick Revision

**Trend analysis** → examine direction (up/down/flat/cyclical) across multiple periods, not a single snapshot
A one-off spike is not a trend — verify consistency before calling it one.
`,
});

createSkill('segmentation', {
  title: 'Segmentation',
  category: 'Foundations',
  what_is_it: 'Breaking an overall metric down into meaningful subgroups — by region, channel, customer type, or any other dimension — to see where a pattern is really coming from.',
  why_it_matters: 'An overall average or total often hides very different behavior in different subgroups — segmentation is usually the single most useful technique for finding where a change is actually concentrated.',
  prerequisites: ['trend-analysis'],
  objectives: [
    'Define segmentation and explain why an overall average can be misleading',
    'Name three common ways to segment business data',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-segmentation-1', title: 'Segment an overall number', description: 'Take an overall metric you have (or imagine one) and describe three different ways you could segment it to find more detail.' },
  ],
  verify: ['Can define segmentation', 'Can name three common segmenting dimensions'],
  note: `
## 🎯 What is it?

**Segmentation** breaks an overall metric down into meaningful subgroups — by region, channel, customer type, device, or any other relevant dimension — to see whether the pattern is uniform or concentrated somewhere specific. It's arguably the single most useful, most frequently applied technique in an analyst's toolkit.

## 💡 Why is it important?

- An overall average often hides very different behavior underneath — segmentation is usually the fastest way to find where a change is actually happening.
- It's the core mechanic behind diagnostic analytics (see Root Cause Analysis and Diagnostic Analytics) — "segment and compare" is the standard first move when investigating any change.

## Core concept

Common segmenting dimensions:
- Geography (region, country)
- Channel (organic, paid, email, referral)
- Customer type (new vs. returning, plan tier)
- Device/platform (mobile vs. desktop)
- Time (day of week, time of day)

## 📊 Example

"Overall conversion rate is flat at 3%." Segmented by device: mobile conversion dropped from 4% to 2%, while desktop rose from 2% to 4% — the overall average hid a real, concerning shift that only segmentation revealed. Without segmenting, the mobile problem would have gone completely unnoticed.

## ⚠️ Common mistakes

- **Reporting only the overall/blended number** and never checking whether it hides meaningfully different behavior in subgroups.
- **Segmenting into groups so small that the "pattern" found is just noise** — always sanity-check that a segment has enough data to draw a real conclusion from.

## Related concepts

\`\`\`
Trend Analysis
  ↓
Segmentation ← you are here
  ↓
Comparison
\`\`\`
Directly supports Diagnostic Analytics and Root Cause Analysis — segmenting is usually the first concrete step in both.

## 🎤 Interview preparation

**Q: Overall conversion rate looks flat. How would you check whether something's actually changing underneath?**
Short answer: Segment it — by device, channel, geography, or customer type — since a flat overall average can hide two segments moving in opposite directions that cancel each other out.

---

### ⚡ Quick Revision

**Segmentation** → break an overall metric into subgroups to see where a pattern is really concentrated
Often the fastest way to find what an overall average is hiding.
`,
});

createSkill('comparison', {
  title: 'Comparison',
  category: 'Foundations',
  what_is_it: 'Judging whether a number is good, bad, or normal by comparing it against a meaningful reference point — a target, a prior period, or a benchmark.',
  why_it_matters: "A number in isolation is meaningless — comparison is what gives it meaning, and choosing the right comparison point is a skill in itself.",
  prerequisites: ['segmentation'],
  objectives: [
    'Explain why a number needs a comparison point to be meaningful',
    'Name three common types of comparison an analyst uses',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-comparison-1', title: 'Add a comparison point', description: 'Take any single metric you know (this month\'s spending, steps, etc.) and add a meaningful comparison — to a target, a prior period, or a benchmark.' },
  ],
  verify: ['Can explain why a number alone is hard to judge', 'Can name three types of comparison'],
  note: `
## 🎯 What is it?

**Comparison** is the practice of judging whether a number is good, bad, or normal by measuring it against a meaningful reference point — a target, a prior period, a benchmark, or another segment — rather than looking at it in isolation.

## 💡 Why is it important?

- "Revenue was $1.2M last month" means almost nothing on its own — was that good? Comparison ("...versus a $1.5M target" or "...up 8% from the prior month") is what gives a number meaning.
- It's the analytical thinking skill underlying nearly every business report — nearly every metric that matters is presented alongside some form of comparison.

## Core concept

| Comparison type | Example |
|---|---|
| vs. target/goal | Actual revenue vs. the quarterly target |
| vs. prior period | This month vs. last month, or this year vs. last year |
| vs. another segment | This region vs. that region |
| vs. an external benchmark | Our conversion rate vs. the industry average |

## 📊 Example

"Support response time was 4 hours" says little alone. Adding comparisons: "...versus our 2-hour SLA target" (concerning), "...down from 6 hours last quarter" (improving), and "...compared to the industry average of 5 hours" (still competitive) — three different comparisons, three different (and all useful) angles on the same number.

## ⚠️ Common mistakes

- **Presenting a number with no comparison point at all**, leaving the reader to guess whether it's good or bad.
- **Comparing against the wrong baseline** — e.g., comparing December sales to November's instead of to last December's, misreading normal seasonality as a real change (see Trend Analysis).

## Related concepts

\`\`\`
Segmentation
  ↓
Comparison ← you are here
  ↓
Correlation vs Causation
\`\`\`

## 🎤 Interview preparation

**Q: Why does a metric like "response time: 4 hours" need a comparison point to be useful?**
Short answer: A single number can't be judged as good or bad on its own — it needs a reference point (a target, a prior period, or a benchmark) to tell you whether 4 hours is an improvement, a concern, or roughly normal.

---

### ⚡ Quick Revision

**Comparison** → judge a number by measuring it against a target, prior period, or benchmark
A number without a comparison point is hard to interpret at all.
`,
});

createSkill('correlation-vs-causation', {
  title: 'Correlation vs Causation',
  category: 'Foundations',
  what_is_it: 'The distinction between two things moving together (correlation) and one thing actually causing the other (causation) — one of the most important guardrails in analytical thinking.',
  why_it_matters: "Mistaking correlation for causation leads to confidently wrong conclusions and bad recommendations — it's one of the most common analyst mistakes, and one of the most commonly tested interview concepts.",
  prerequisites: ['comparison'],
  objectives: [
    'Define correlation and causation, and explain the difference',
    'Give an example of a correlation that is not causation',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-correlation-causation-1', title: 'Find a spurious correlation', description: 'Think of (or look up) two variables that correlate but clearly don\'t cause each other, and explain a plausible alternative reason they move together.' },
  ],
  verify: ['Can define correlation and causation', 'Can explain why correlation alone doesn\'t prove causation'],
  note: `
## 🎯 What is it?

**Correlation** means two variables tend to move together — when one goes up, the other tends to go up (or down) too. **Causation** means one variable actually *causes* the change in the other. Correlation does not, by itself, prove causation — two variables can move together for other reasons, including pure coincidence or a hidden third factor driving both.

## 💡 Why is it important?

- Mistaking correlation for causation leads to confidently wrong conclusions — recommending an action that doesn't actually cause the outcome you want.
- It's one of the most frequently tested concepts in analyst interviews and case studies, precisely because it's such a common real mistake.

## Core concept

Ways two variables can correlate without one causing the other:
- **Coincidence** — pure chance, especially in small samples.
- **Reverse causation** — B might actually be causing A, not the other way around.
- **A hidden third factor (confounder)** — something else drives both. Classic example: ice cream sales and drowning deaths both rise in summer — heat drives both, ice cream doesn't cause drowning.

The only reliable way to establish causation is a well-designed experiment (like A/B Testing), which isolates one variable at a time.

## 📊 Example

A company notices that months with higher ad spend also have higher revenue, and concludes "ad spend causes revenue growth." But it's possible a confounder — like a seasonal sales peak — drives both higher ad spend *and* higher revenue independently (the company simply spends more ahead of a season it already expects to be strong). Only a controlled test (spending more in some regions but not others, then comparing) could actually confirm causation.

## ⚠️ Common mistakes

- **Recommending an action based purely on correlation** without considering confounders or reverse causation — a very common, costly mistake.
- **Assuming a strong, statistically significant correlation is automatically causal.** Statistical significance (covered in Statistics) tells you a correlation is unlikely to be random noise — it says nothing about whether it's causal.

## Related concepts

\`\`\`
Comparison
  ↓
Correlation vs Causation ← you are here
  ↓
Data-Driven Decision Making
\`\`\`
Builds directly toward the Statistics stage's Correlation and A/B Testing topics, where this distinction is formalized and tested rigorously.

## 🎤 Interview preparation

**Q: A company finds that customers who use a certain feature have higher retention. Does this mean the feature causes better retention?**
Short answer: Not necessarily — it's correlation. A confounder is possible (more engaged users might both use the feature *and* retain better for unrelated reasons). Establishing causation would require a controlled experiment, like an A/B test, rather than just observing the correlation.

---

### ⚡ Quick Revision

**Correlation** → two variables move together
**Causation** → one variable actually causes the change in the other
Correlation alone never proves causation — watch for confounders and reverse causation.
`,
});

createSkill('data-driven-decision-making', {
  title: 'Data-Driven Decision Making',
  category: 'Foundations',
  what_is_it: 'Making business decisions primarily based on evidence from data, rather than intuition, opinion, or "how we\'ve always done it" alone.',
  why_it_matters: "It's the whole point of the data analyst role existing — an analyst's output only matters if it actually changes a decision.",
  prerequisites: ['correlation-vs-causation'],
  objectives: [
    'Explain what data-driven decision making means in practice',
    'Describe one limitation or risk of relying purely on data',
  ],
  estimated_minutes: 20,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-data-driven-1', title: 'Data vs. intuition', description: 'Think of a recent decision (personal or work) made mostly on intuition, and describe what data could have informed it instead.' },
  ],
  verify: ['Can explain what data-driven decision making means', 'Can name one limitation of relying purely on data'],
  note: `
## 🎯 What is it?

**Data-driven decision making** means basing business decisions primarily on evidence from data — trends, experiment results, customer behavior — rather than on intuition, opinion, or "the way it's always been done" alone. It's the ultimate purpose behind everything else in this Foundations stage: data analysis exists to inform better decisions.

## 💡 Why is it important?

- It's the whole reason the data analyst role exists — an analysis that never changes a decision hasn't accomplished its purpose, however technically correct it was.
- It reduces the influence of bias, guesswork, and the loudest voice in the room — replacing "I think" with "the data shows."

## Core concept

Data-driven doesn't mean data-*only* — good decision-making usually blends:

| Input | Role |
|---|---|
| Data | Evidence of what's actually happening |
| Domain expertise | Context for interpreting the data correctly |
| Judgment | Handling situations data can't fully capture (new markets, ethical tradeoffs) |

## 📊 Example

A team debating whether to redesign a checkout flow could decide based purely on a designer's opinion ("this looks better") — or, data-driven, they could A/B test both versions and let actual conversion-rate data decide, informed by (not replacing) the designer's expertise on why one version might work better.

## ⚠️ Common mistakes

- **Treating "data-driven" as "data-only," ignoring context data can't capture** — e.g., a new market with too little historical data still needs some judgment alongside whatever data exists.
- **Cherry-picking data that supports a decision already made**, rather than letting the data genuinely inform the decision — this is data-driven in name only.

## Related concepts

\`\`\`
Correlation vs Causation
  ↓
Data-Driven Decision Making ← you are here
  ↓
Translating Business Questions into Data Questions
\`\`\`

## 🎤 Interview preparation

**Q: Does "data-driven" mean ignoring intuition and experience entirely?**
Short answer: No — data-driven decision making combines data with domain expertise and judgment; data provides evidence of what's happening, but context and experience are still needed to interpret it correctly and to handle situations data alone can't fully capture.

---

### ⚡ Quick Revision

**Data-driven decision making** → base decisions primarily on data evidence, combined with (not replacing) domain expertise and judgment
The core purpose of the analyst role — an analysis only matters if it changes a decision.
`,
});

createSkill('translating-business-questions-into-data-questions', {
  title: 'Translating Business Questions into Data Questions',
  category: 'Foundations',
  what_is_it: 'Converting a business-language question ("are we losing customers?") into a precise, technical question a dataset and query can actually answer ("what is our monthly churn rate, and how has it trended over the last 6 months?").',
  why_it_matters: "It's the exact skill that connects everything in this chapter to hands-on technical work — every SQL query or Python script an analyst writes starts from a translation like this.",
  prerequisites: ['data-driven-decision-making'],
  objectives: [
    'Translate a business question into a specific, technical data question',
    'Identify the metric, filters, and time window implied by a business question',
  ],
  estimated_minutes: 25,
  resources: ['r-grow-google-data-analytics'],
  practice: [
    { id: 'ex-translate-questions-1', title: 'Translate a business question', description: 'Take the business question "is our marketing working?" and translate it into a specific, technical data question naming a metric, filters, and a time window.' },
  ],
  verify: ['Can translate a business question into a specific data question', 'Can identify the metric, filter, and time window a business question implies'],
  note: `
## 🎯 What is it?

**Translating business questions into data questions** is the skill of converting a stakeholder's business-language question — "are we losing customers?" — into a precise, technical question a dataset and query can directly answer — "what is our monthly customer churn rate for the last 6 months, and is it trending up or down?"

## 💡 Why is it important?

- It's the exact bridge between everything else in this Analytical Thinking chapter (asking questions, hypotheses, comparison) and the hands-on technical stages that follow (SQL, Python, Statistics) — every query starts from a translation like this.
- Getting the translation wrong — defining "losing customers" incorrectly, or picking the wrong time window — produces a technically correct answer to the wrong question.

## Core concept

A useful translation checklist:
- What's the specific **metric**? ("losing customers" → churn rate, or logo count, or revenue churn — these are different things)
- What's the **time window**? (monthly? rolling 90-day?)
- What **filters/segments** are implied? (all customers, or a specific plan/region?)
- What's the **comparison point**? (vs. last period? vs. a target?)

## 📊 Example

Business question: "Are we losing customers?"
Translated data question: "What is our monthly customer churn rate (customers who cancel ÷ customers at start of month) for each of the last 6 months, and how does it compare to the prior 6 months?" — now it names a precise metric, a formula, a time window, and a comparison.

## ⚠️ Common mistakes

- **Picking a definition without confirming it with the stakeholder** — "losing customers" could reasonably mean logo churn, revenue churn, or seat-count churn, and these can tell very different stories.
- **Skipping the time window and comparison point**, leaving the translated question just as unanswerable as the original.

## Related concepts

\`\`\`
Data-Driven Decision Making
  ↓
Translating Business Questions into Data Questions ← you are here
\`\`\`
This closes the Analytical Thinking chapter, and the entire Foundations stage — the next stage (Spreadsheets) begins the hands-on technical work this chapter's thinking skills support.

## 🎤 Interview preparation

**Q: A stakeholder asks, "Is our product sticky?" How would you translate that into a data question?**
Short answer: Clarify what "sticky" means to them — likely some form of engagement or retention — then translate it into something specific and measurable, like "What's our DAU/MAU ratio over the last 6 months, and how does it compare to the prior 6 months?"

---

### ⚡ Quick Revision

**Translating business questions into data questions** → convert vague business language into a specific metric, time window, filter, and comparison point
The exact bridge between business stakeholders and technical analysis work.
`,
});

console.log('Created 10 Analytical Thinking skills.');
