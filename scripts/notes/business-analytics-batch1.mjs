import { setNote } from './_lib.mjs';

setNote('business-analytics', `
## 🎯 What is it?

**Business Analytics** is applying every prior data skill — SQL, statistics, Python — to real business contexts: revenue, retention, funnels, and experiments, and translating the result into an actual recommendation. This is where technical skill becomes business value.

## 💡 Why is it important?

Knowing which metric actually matters for a given business model and situation is what separates an analyst who produces correct-but-irrelevant numbers from one whose work directly shapes decisions. This stage is the practical convergence point of everything learned so far.

## Core concept

### Core metrics: retention, churn, conversion rate

| Metric | Business meaning | Formula |
|---|---|---|
| **Conversion rate** | % of users completing a desired action | (Users who converted) ÷ (Total eligible users) |
| **Churn rate** | % of customers lost in a period | (Customers lost) ÷ (Customers at period start) |
| **Retention rate** | % of customers who stayed | 1 − Churn rate (over the same period) |

Precision matters — see [KPIs & Metrics](/skills/kpis-metrics): "conversion rate" is meaningless without a stated numerator, denominator, and time window.

### Funnels
A **funnel** is a multi-step process (e.g., visit → signup → activate → purchase), where the conversion rate at *each* step reveals exactly where users are lost — the overall rate alone only tells you *that* something's wrong, not *where*.

### A/B testing basics
A controlled experiment comparing a control group to a variant, with a primary metric and decision rule chosen **before** results are seen — see [A/B Testing & Experimentation](/skills/ab-testing) for full depth.

### Segmentation
Slicing an overall metric by a meaningful group (region, device, plan tier, signup cohort) to find which specific group is actually driving an observed change — the practical, everyday version of [diagnostic analytics](/skills/types-of-data-analytics).

## 📊 Example

**Scenario:** Overall conversion rate dropped from 5.0% to 4.2% this month.

**Segmentation reveals:**

| Segment | Last month | This month |
|---|---|---|
| Desktop | 5.5% | 5.4% |
| Mobile | 4.2% | 2.8% |

**Finding:** The overall drop is almost entirely driven by mobile — desktop is essentially flat. **Recommendation:** investigate the mobile checkout flow specifically, rather than a general "improve conversion" initiative that would misdirect effort toward desktop, which isn't actually the problem.

## Multiple examples

**Beginner:** Calculate a simple month-over-month churn rate from a customer count table.
**Intermediate:** Read a 4-step funnel (visit → signup → trial → paid) and identify the single step with the largest percentage-point drop.
**Real-world:** A full business-analytics workflow: notice a metric change, segment it to isolate the driver, form a specific hypothesis for *why*, and propose a concrete next step — the loop covered in [What is Data Analytics](/skills/what-is-data-analytics).

## ⚠️ Common mistakes

- **Reporting an overall metric change without segmenting it.** "Conversion is down" is a fact; "conversion is down, driven entirely by mobile" is an actionable finding.
- **Using a non-standard metric definition** without stating it explicitly — see the precise-definition discipline from [KPIs & Metrics](/skills/kpis-metrics).
- **Jumping to a recommendation without evidence that actually supports it.** A recommendation should follow logically and specifically from what the segmentation/analysis showed, not from a generic playbook.

## Real-world Data Analyst use cases

- **Sales analysis:** diagnosing a revenue miss by segmenting across region, channel, and product.
- **Product analysis:** reading a signup funnel to find the exact step losing the most users.
- **Marketing analysis:** running and interpreting an A/B test on a landing page redesign.

## Related concepts

\`\`\`
SQL — Aggregation → Statistics — Hypothesis Testing
  ↓
Business Analytics ← you are here
  ↓
A/B Testing / Funnel Analysis / Customer Segmentation / Cohort & Retention Analysis / Forecasting
\`\`\`

## Practice questions

### Easy
1. Define conversion rate, churn rate, and retention rate in your own words.

### Medium
2. Overall signup-to-activation conversion dropped 3 points this month. What's your first analytical move?

### Interview/Advanced
3. Why is "conversion rate dropped 2 points" an incomplete finding on its own, even if it's accurate?

<details><summary><strong>Answer / Solution</strong></summary>

1. Conversion rate: the share of eligible users who complete a target action. Churn rate: the share of customers lost over a period. Retention rate: the share of customers who stayed, the complement of churn.
2. Segment the drop by the most plausible dimensions (channel, device, region, plan) to isolate where the decline is concentrated before forming any hypothesis about cause.
3. It states *that* something changed but not *where* or *why* — without segmentation, a stakeholder has no way to know which part of the business to actually investigate or fix, making the finding non-actionable on its own.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between churn rate and retention rate?**
Short answer: They're complements measured over the same period — retention rate is the share of customers who stayed, churn rate is the share who left; retention = 1 − churn.

### Conceptual questions
**Q: Why is segmentation often the first step after noticing a metric change?**
Short answer: An overall metric can hide very different behavior across sub-groups; segmenting isolates where a change is actually concentrated, which is usually the fastest path to a specific, testable hypothesis for the cause.

### Scenario-based questions
**Q: A stakeholder wants to know "how are we doing" with no more specifics. How do you scope this into an actual analysis?**
Short answer: Ask what decision this will inform and over what time window, then propose 1-2 core metrics (e.g., revenue and retention) tied to that decision — "how are we doing" alone is too broad to analyze directly.

### Practical questions
**Q: Walk through how you'd investigate a conversion rate drop from 5% to 4%.**
Short answer: Confirm the drop is real (not a measurement/tracking bug), segment by the most likely dimensions (device, channel, region, time-of-day), identify where the drop concentrates, form a specific hypothesis, and propose a next step or test.

## Interview traps / tricky points

- Metric definitions vary by company — always state the specific definition being used rather than assuming a universal standard.
- A correlation found during segmentation (e.g., "mobile users convert less") is not automatically the *cause* — see [Correlation & Regression](/skills/stats-correlation-regression).

## Best practices

- Always segment a metric change before forming a hypothesis about its cause.
- State metric definitions explicitly, including time window and inclusion/exclusion rules.
- End every analysis with a specific, evidence-backed recommendation, not just a description of what happened.

---

### ⚡ Quick Revision

**Conversion rate** → converted ÷ eligible · **Churn rate** → lost ÷ starting · **Retention rate** → 1 − churn
**Funnel** → reveals *where* in a process users are lost, not just the overall rate
**Segmentation** → the default first move after noticing any metric change
`);

setNote('ab-testing', `
## 🎯 What is it?

**A/B testing** is a controlled experiment: splitting users randomly into a **control** group (sees the current experience) and a **variant** group (sees the change being tested), then comparing a pre-chosen success metric between them to decide whether the change actually caused an improvement.

## 💡 Why is it important?

Deciding whether a change actually *caused* an improvement — rather than just coinciding with one — is one of the most frequently requested and most frequently botched analyses a data analyst does. It's the proper, rigorous way to establish causation, directly addressing the "correlation ≠ causation" limitation covered in [Correlation & Regression](/skills/stats-correlation-regression).

## Core concept

### Test design
Users are **randomly** assigned to control or variant, so the *only* systematic difference between the two groups is the change being tested — this randomization is what allows a resulting difference to be attributed to the change itself, not to some other pre-existing difference between the groups.

### Choosing a metric up front
The **primary metric** and the decision rule (what result counts as "success") must be committed to **before** the test starts and before any results are seen — deciding this after peeking at results is a form of cherry-picking that invalidates the test's statistical guarantees.

### Sample size & duration
A test needs enough users, run for long enough, to reliably detect a real effect and to average out day-of-week and other short-term noise — stopping early because early results "look good" is one of the most common and serious experimentation mistakes (directly connected to [Hypothesis Testing](/skills/stats-hypothesis-testing)'s "peeking" problem).

### Common pitfalls

| Pitfall | Why it's a problem |
|---|---|
| Peeking early and stopping | Inflates the false-positive rate |
| Testing too many metrics at once | Increases the chance one looks "significant" purely by chance |
| Novelty effect | A short-term boost from something being *new*, not genuinely better, that fades over time |
| Underpowered sample size | Fails to detect a real, but smaller, effect |

## Syntax / Formula / Structure

A standard A/B test setup, before launch:

\`\`\`
1. Hypothesis:        "Changing X will increase [metric] because [reasoning]"
2. Control:            current experience (no change)
3. Variant:            the proposed change
4. Primary metric:      chosen and written down before launch
5. Minimum duration/sample size: decided in advance, not adjusted mid-test
6. Decision rule:       "if p < 0.05 on the primary metric, ship the variant"
\`\`\`

## 📊 Example

**Test:** Does a simplified checkout page increase completed-purchase rate?

- **Control:** current 3-step checkout (5,000 users).
- **Variant:** new 1-step checkout (5,000 users).
- **Primary metric (chosen up front):** completed-purchase rate.
- **Result:** Control 8.0%, Variant 9.2%, p = 0.02 (statistically significant at the pre-chosen alpha = 0.05).

**Decision:** Ship the variant — the improvement is unlikely to be random chance, and the metric and threshold were committed to before the test ran, so this is a trustworthy result, not a post-hoc cherry-pick.

## Multiple examples

**Beginner:** Testing two email subject lines for open rate.
**Intermediate:** Testing a pricing page redesign, with conversion rate as the pre-registered primary metric and revenue-per-visitor as a secondary metric to monitor (but not decide on).
**Real-world:** A product team wants to ship a redesign quickly after 2 days because "it's already looking good" — the analyst holds the line on the pre-committed minimum duration, explaining that early results are noisy and stopping early risks a false positive that could later be reversed.

## ⚠️ Common mistakes

- **Choosing the primary metric after seeing which one "won."** This is a severe form of cherry-picking that invalidates the statistical guarantees of the test.
- **Stopping a test as soon as it "looks significant."** Repeated peeking dramatically inflates the real false-positive rate beyond the stated alpha level.
- **Not accounting for the novelty effect** on short tests — a genuinely neutral or even negative change can look like a short-term win purely because it's new and users are curious.
- **Testing dozens of metrics at once and reporting whichever one moved.** With enough metrics tested, some will appear "significant" purely by chance.

## Real-world Data Analyst use cases

- **Marketing analysis:** testing two email subject lines or ad creatives.
- **Product analysis:** testing a checkout or onboarding flow redesign.
- **Pricing analysis:** testing a price change on a small, randomized subset before a full rollout.

## Related concepts

\`\`\`
Statistics — Hypothesis Testing
  ↓
Business Analytics
  ↓
A/B Testing & Experimentation ← you are here
  ↓
Funnel Analysis (often the metric being A/B tested)
\`\`\`

## Practice questions

### Easy
1. What's the purpose of randomly assigning users to control and variant groups?

### Medium
2. A team wants to declare a "winner" after 2 days of a planned 2-week test, because the variant is currently ahead. What's the risk?

### Interview/Advanced
3. Why must the primary metric be chosen before the test starts, rather than after seeing which metric moved the most?

<details><summary><strong>Answer / Solution</strong></summary>

1. Randomization ensures the only systematic difference between the two groups is the change being tested, so any resulting difference in the outcome can be attributed to that change rather than a pre-existing difference between the groups.
2. Early results are noisy and can reverse as more data comes in ("peeking"); stopping early significantly inflates the risk of declaring a false positive — a result that looks significant now may not hold up over the full planned duration.
3. Choosing the metric after seeing results allows cherry-picking whichever metric happened to move favorably by chance, which invalidates the statistical meaning of "significance" — pre-registering the metric ensures the test's conclusion is trustworthy rather than a coincidental pattern found after the fact.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What makes an A/B test a valid way to establish causation, unlike a simple before/after comparison?**
Short answer: Random assignment to control and variant groups, running concurrently, isolates the change being tested as the only systematic difference between groups — a before/after comparison can be confounded by anything else that changed over time (seasonality, other launches).

### Conceptual questions
**Q: Why is "peeking" at results early and stopping risky?**
Short answer: It inflates the real false-positive rate well beyond the nominal significance threshold, because repeatedly checking increases the chance of catching a moment where random noise happens to look significant.

### Scenario-based questions
**Q: A variant shows a big lift in its first 3 days but the test was planned for 2 weeks. What do you recommend?**
Short answer: Continue running the test for its full pre-planned duration — early results are noisy, can be affected by novelty effects or day-of-week patterns, and stopping early risks shipping a change based on a result that wouldn't hold up over the full test.

### Practical questions
**Q: How would you design a test for a new onboarding flow, from hypothesis to decision rule?**
Short answer: State a specific hypothesis, define control (current flow) and variant (new flow), choose one primary metric (e.g., activation rate) and a significance threshold before launch, determine a minimum sample size/duration, and commit to the decision rule regardless of interim results.

## Interview traps / tricky points

- A statistically significant result isn't automatically worth shipping — always also weigh practical significance and implementation cost (see [Hypothesis Testing](/skills/stats-hypothesis-testing)).
- The novelty effect can produce a real but temporary lift — a test long enough to let novelty fade is more trustworthy than a short one.
- Testing many secondary metrics is fine for context, but the *decision* should rest on the single pre-committed primary metric.

## Best practices

- Write the hypothesis, primary metric, and decision rule down before the test launches.
- Commit to a minimum sample size/duration in advance, and don't stop early based on interim results.
- Watch for and account for novelty effects on short-duration tests.
- Report secondary metrics as context, but base the ship/no-ship decision on the primary metric alone.

---

### ⚡ Quick Revision

**Randomization** → isolates the tested change as the only systematic difference
**Primary metric** → chosen before the test starts, never after seeing results
**Duration/sample size** → decided in advance; don't stop early ("peeking")
**Watch for:** novelty effects, testing too many metrics, underpowered samples
`);
