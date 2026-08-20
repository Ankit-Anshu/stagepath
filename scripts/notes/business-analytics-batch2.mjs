import { setNote } from './_lib.mjs';

setNote('funnel-analysis', `
## 🎯 What is it?

**Funnel analysis** maps a multi-step process — like signup → activation → purchase — and measures the conversion rate and drop-off at **each individual step**, not just the overall start-to-finish rate.

## 💡 Why is it important?

Knowing the overall conversion rate tells you *something* is wrong. Funnel analysis tells you exactly *which step* it's wrong at — which is what actually leads to a specific, testable fix, rather than a vague "improve conversion" initiative that could target the wrong part of the process entirely.

## Core concept

### Defining funnel steps
Break a process into clear, ordered, measurable steps — each one representing a specific, unambiguous user action (e.g., "viewed pricing page," "started signup form," "completed signup," "made first purchase").

### Step-by-step conversion
Calculate what percentage of users make it from each step to the *next* one — this is different from (and more useful than) each step's percentage of the very first step.

### Finding the biggest drop-off
The step with the largest percentage-point drop **relative to its own starting point** is usually the biggest opportunity — though the step losing the most *absolute* users can also matter, depending on the business question.

## Syntax / Formula / Structure

\`\`\`
Step-to-step conversion rate = (Users reaching step N+1) ÷ (Users reaching step N)
Overall conversion rate       = (Users completing final step) ÷ (Users entering step 1)
\`\`\`

## 📊 Example

Signup funnel over one week:

| Step | Users | Step-to-step conversion |
|---|---|---|
| 1. Visited signup page | 10,000 | — |
| 2. Started form | 4,000 | 40% |
| 3. Completed form | 3,600 | 90% |
| 4. Verified email | 1,200 | 33% |
| 5. First login | 1,100 | 92% |

**Overall conversion (step 1 → 5):** 1,100 / 10,000 = 11%.

**Finding:** The biggest drop is step 3 → 4 (90% → 33%) — losing users at the "email verification" step, not at the signup form itself.

**Recommendation:** Investigate the email verification step specifically (e.g., are emails landing in spam? Is the verification link expiring too fast?) rather than redesigning the signup form, which is actually performing fine.

## Multiple examples

**Beginner:** A 3-step funnel (visit → add to cart → purchase) with simple step-to-step percentages.
**Intermediate:** A 5-step onboarding funnel where the biggest relative drop is identified and a specific, testable hypothesis is proposed for the cause.
**Real-world:** Segmenting a funnel by traffic source reveals that paid-search users convert at half the rate of organic users at the "started form" step specifically — pointing to a landing-page-experience mismatch for paid traffic, not a general funnel problem.

## ⚠️ Common mistakes

- **Only looking at the overall conversion rate.** This identifies *that* there's a problem but gives no actionable direction for where to focus.
- **Comparing a step's users to the very first step instead of the previous step.** This makes every later step look artificially worse and obscures which specific transition is actually weak.
- **Assuming the step with the largest raw drop-off is automatically the biggest opportunity**, without considering it relative to its own starting volume — a step losing 200 users out of 300 (67% drop) is a bigger relative opportunity than one losing 500 out of 5,000 (10% drop), even though 500 is a bigger number.
- **Stopping at "step X is weak" without forming a specific, testable hypothesis** for *why* — which is what actually leads to a fix.

## Real-world Data Analyst use cases

- **Product analysis:** finding the weakest step in a user onboarding flow.
- **Marketing analysis:** finding where paid-traffic users drop off differently than organic traffic.
- **E-commerce analysis:** finding the exact checkout step causing the most cart abandonment.

## Related concepts

\`\`\`
Business Analytics
  ↓
Funnel Analysis ← you are here
  ↓
A/B Testing (testing a fix for the weakest step)
  ↓
Cohort & Retention Analysis
\`\`\`

## Practice questions

### Easy
1. Given 1,000 users at step 1 and 400 at step 2, what's the step-to-step conversion rate?

### Medium
2. A funnel has steps losing 60%, 10%, and 70% of users respectively (relative to each prior step). Which step is the biggest opportunity, and what would you do next?

### Interview/Advanced
3. Why is "the step losing the most total users" not always the same answer as "the step with the weakest relative conversion"?

<details><summary><strong>Answer / Solution</strong></summary>

1. 400 / 1,000 = 40%.
2. The step losing 70% is the biggest relative opportunity; the next step is forming a specific, testable hypothesis for why that step underperforms (e.g., a UX issue, unclear messaging, a technical bug) before proposing a fix.
3. A step earlier in the funnel with more total users flowing through it can lose more *absolute* users even at a relatively strong conversion rate, while a later step with fewer total users but a much weaker *relative* conversion rate can represent a bigger untapped opportunity — which one matters most depends on the specific business question being asked.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What does funnel analysis add beyond knowing the overall conversion rate?**
Short answer: It shows conversion at each individual step, revealing exactly where in the process users are lost — the overall rate alone can't localize the problem.

### Conceptual questions
**Q: Why calculate step-to-step conversion instead of comparing every step back to the first step?**
Short answer: Comparing to the first step makes every later step look progressively worse regardless of its actual performance; step-to-step conversion isolates exactly how well each individual transition is performing on its own.

### Scenario-based questions
**Q: A funnel step shows a huge relative drop, but it's the very last step with very few users by that point. How do you weigh this?**
Short answer: Consider both the relative drop and the absolute number of users affected — a huge relative drop on a small remaining user base may represent less total opportunity than a smaller relative drop earlier in the funnel where far more users are affected.

### Practical questions
**Q: How would you segment a funnel to investigate why mobile users convert worse than desktop?**
Short answer: Rebuild the same step-by-step funnel separately for mobile and desktop traffic, then compare step-to-step conversion rates between the two to find the specific step where the gap is concentrated.

## Interview traps / tricky points

- Relative drop-off and absolute user loss can point to different "biggest opportunity" steps — always clarify which framing the business question actually needs.
- A funnel step's weak conversion could reflect a genuine problem, or it could reflect that step correctly filtering out unqualified users — not every drop-off is a "problem" to fix.

## Best practices

- Always calculate step-to-step (not first-step-relative) conversion rates.
- Consider both relative drop-off and absolute user volume when prioritizing which step to investigate.
- Pair a weak step finding with a specific, testable hypothesis before recommending a fix.
- Segment a funnel by traffic source, device, or cohort when the aggregate funnel doesn't reveal an obvious cause.

---

### ⚡ Quick Revision

**Step-to-step conversion** → users at step N+1 ÷ users at step N
**Biggest opportunity** → weigh both relative drop-off % and absolute user volume
**Rule:** always end with a specific, testable hypothesis for *why* a step underperforms
`);

setNote('customer-segmentation', `
## 🎯 What is it?

**Customer segmentation** is grouping customers into meaningful segments based on behavior or characteristics — like purchase frequency or spend — instead of treating every customer as if they were "average."

## 💡 Why is it important?

Averages hide meaningful differences between customer groups. Segmentation is what lets a business target the right message, offer, or intervention at the right group, instead of a one-size-fits-all approach that's suboptimal for almost everyone.

## Core concept

### Rule-based segmentation
The simplest approach: grouping customers using straightforward thresholds — e.g., "high spend" = over $500/month, "low spend" = under $50/month. Easy to explain and implement, though the thresholds are somewhat arbitrary and need business judgment to set sensibly.

### RFM segmentation
A standard, widely-used framework segmenting customers on three dimensions:

| Component | Measures | Example |
|---|---|---|
| **Recency** | How recently did they last purchase? | Days since last order |
| **Frequency** | How often do they purchase? | Number of orders in the last year |
| **Monetary** | How much do they spend? | Total or average spend |

Customers are typically scored (e.g., 1–5) on each dimension, then combined into segments like "Champions" (high on all three) or "At-risk" (was high, now low recency).

### Comparing segments
Once defined, segments should be compared on metrics that matter (retention, average order value, response to a campaign) — a segmentation that doesn't reveal meaningfully different behavior across groups isn't actually useful yet.

## Syntax / Formula / Structure

\`\`\`
Recency  = days since customer's most recent order
Frequency = count of orders in a defined period (e.g., last 12 months)
Monetary  = total (or average) spend in that same period
\`\`\`

A simple rule-based segment example:

\`\`\`
IF total_spend > 500 AND order_count >= 5   → "VIP"
IF total_spend > 500 AND order_count < 5    → "Big Spender, Infrequent"
IF days_since_last_order > 180              → "At Risk / Churned"
ELSE                                          → "Regular"
\`\`\`

## 📊 Example

\`customers\` (summarized):

| customer_id | days_since_last_order | order_count_12mo | total_spend_12mo |
|---|---|---|---|
| 1 | 5 | 12 | 1,200 |
| 2 | 200 | 2 | 800 |
| 3 | 10 | 1 | 40 |

**RFM-style read:**
- **Customer 1:** Recent, frequent, high spend → "Champion" — the segment to protect and reward.
- **Customer 2:** High past spend, but hasn't ordered in 200 days → "At Risk" — a strong win-back campaign target.
- **Customer 3:** Recent but only 1 low-value order → "New/Low-value" — needs nurturing to become a repeat customer.

**Explanation:** Three customers with wildly different profiles would all just look like "one customer" in an averaged report — segmentation reveals each one needs a completely different action.

## Multiple examples

**Beginner:** A simple high/medium/low spend segmentation using fixed thresholds.
**Intermediate:** A full RFM segmentation scoring each customer 1–5 on all three dimensions.
**Real-world:** Using RFM segments to target three different email campaigns: a loyalty reward for "Champions," a win-back discount for "At Risk," and an onboarding nurture sequence for "New" customers — each segment getting a message actually relevant to its behavior, instead of one generic email to everyone.

## ⚠️ Common mistakes

- **Setting arbitrary thresholds without checking the actual data distribution.** A "high spend" cutoff of $500 might describe almost everyone or almost no one, depending on the business — always check against real percentiles first.
- **Creating segments that don't actually differ meaningfully in behavior.** If two segments have nearly identical retention/response rates, the segmentation isn't adding useful information yet.
- **Segmenting once and never revisiting it.** Customer behavior changes; segments should be recalculated periodically, not treated as a permanent, one-time label.
- **Recommending the same action for every segment**, which defeats the entire purpose of segmenting in the first place.

## Real-world Data Analyst use cases

- **Marketing analysis:** targeting different email campaigns to different RFM segments.
- **Customer analysis:** identifying "at risk" customers (high past value, declining recency) for proactive retention outreach.
- **Product analysis:** comparing feature adoption between high-frequency and low-frequency user segments.

## Related concepts

\`\`\`
Pandas (GroupBy is the core tool for building segments)
  ↓
Business Analytics
  ↓
Customer Segmentation ← you are here
  ↓
Cohort & Retention Analysis
\`\`\`

## Practice questions

### Easy
1. What do the three components of RFM stand for?

### Medium
2. A customer hasn't ordered in 250 days but historically had high spend and frequency. What RFM segment does this suggest, and what action would you recommend?

### Interview/Advanced
3. Why might a rule-based "high/medium/low spend" segmentation with arbitrary thresholds fail to be useful in practice?

<details><summary><strong>Answer / Solution</strong></summary>

1. Recency (how recently), Frequency (how often), Monetary (how much spent).
2. "At risk" or "churned" — high historical value but poor recent recency; recommend a targeted win-back campaign rather than a generic offer, since this customer has demonstrated high value in the past.
3. If the thresholds don't reflect the actual distribution of the customer base, a segment could end up nearly empty or containing almost everyone, making the segmentation useless for targeting — thresholds should be checked against real percentiles/quantiles of the data, not chosen arbitrarily.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What is RFM segmentation?**
Short answer: A framework that segments customers based on Recency (how recently they purchased), Frequency (how often), and Monetary value (how much they've spent).

### Conceptual questions
**Q: Why is segmentation more useful than looking at an average customer metric?**
Short answer: Averages blend together very different customer behaviors, hiding meaningful differences — segmentation reveals distinct groups that each warrant a different message, offer, or intervention.

### Scenario-based questions
**Q: A marketing team wants to send the same win-back email to "all inactive customers." How would segmentation improve this approach?**
Short answer: Distinguish inactive customers by their prior value (e.g., high-value churned vs. low-value churned) so the win-back offer and effort can be prioritized toward the segment most worth recovering, rather than treating every inactive customer identically.

### Practical questions
**Q: How would you calculate an RFM score for each customer from a raw transactions table?**
Short answer: Group transactions by customer_id; compute days since the most recent order (recency), count of orders in the period (frequency), and total or average spend (monetary); then score or bucket each dimension (e.g., quintiles) and combine into a segment label.

## Interview traps / tricky points

- A segmentation that isn't revisited over time can become stale — customer behavior shifts, and segments should be recalculated on a regular cadence.
- Rule-based thresholds set without checking the underlying data distribution are a common, easy-to-miss source of an unbalanced or meaningless segmentation.

## Best practices

- Check the actual data distribution (percentiles) before setting rule-based thresholds.
- Validate that defined segments actually differ meaningfully on a relevant metric before using them to drive decisions.
- Recalculate segments periodically, since customer behavior changes over time.
- Pair each segment with a specific, distinct recommended action — not a uniform one-size-fits-all response.

---

### ⚡ Quick Revision

**Recency** → how recently they purchased · **Frequency** → how often · **Monetary** → how much spent
**Rule-based segmentation** → simple thresholds; check real data distribution first
**Validate:** segments should differ meaningfully in behavior, and be recalculated periodically
`);

setNote('cohort-retention-analysis', `
## 🎯 What is it?

**Cohort analysis** groups users by a shared starting point — like the week they signed up — and tracks how their behavior changes over time, most commonly to measure **retention**: what percentage of a cohort is still active in each subsequent period.

## 💡 Why is it important?

Average metrics hide what's really happening. A company can be growing in raw user count while its actual retention is quietly getting worse — cohort analysis is what reveals whether a product or campaign is genuinely improving retention over time, not just growing in top-line numbers.

## Core concept

### Defining a cohort
A cohort is a group of users who share a starting event — most commonly signup week/month, but it could be first purchase date, or the date they were exposed to a specific campaign. The right boundary depends on the business question being asked.

### Building a cohort table
A cohort table lays cohorts (rows, by start period) against **time-since-start** (columns, e.g., week 0, week 1, week 2...) — each cell showing what percentage of that cohort was still active that many periods after joining.

### Retention rate calculation
For a given cohort and period: the percentage of the *original* cohort size still active in that period.

### Reading a retention curve
A **healthy** retention curve declines initially, then **plateaus** at some non-zero level — meaning a core group of users sticks around indefinitely. An **unhealthy** curve keeps trending toward zero with no plateau — meaning the product isn't building a durable, retained user base.

## Syntax / Formula / Structure

\`\`\`
Retention rate (cohort, period N) = (Cohort members active in period N) ÷ (Total original cohort size)
\`\`\`

A cohort table's shape:

\`\`\`
Cohort        Week 0   Week 1   Week 2   Week 3
Jan 1 cohort   100%      45%      38%      35%
Jan 8 cohort   100%      50%      42%      —
Jan 15 cohort  100%      48%      —        —
\`\`\`

## 📊 Example

Weekly signup cohort, tracked over 4 weeks:

| Cohort | Week 0 | Week 1 | Week 2 | Week 3 |
|---|---|---|---|---|
| Jan 1 (1,000 users) | 100% | 40% | 25% | 24% |
| Jan 8 (1,200 users) | 100% | 42% | 26% | — |

**Reading it:** The Jan 1 cohort drops sharply through week 2 (100% → 25%) but then **plateaus** at week 3 (25% → 24%) — this plateau is a healthy sign; the users who make it past the initial drop-off tend to stick around.

**Explanation:** If instead week 3 had continued falling toward 10%, 5%, and so on with no plateau, that would signal the product isn't retaining even its most engaged early users — a much more serious problem than the initial drop-off itself.

## Multiple examples

**Beginner:** A simple monthly signup cohort table tracking 3 months of retention.
**Intermediate:** Comparing two consecutive weekly cohorts to see whether retention is *improving* over time (e.g., after a new onboarding flow launched).
**Real-world:** Building a weekly cohort retention table from a raw signup and activity log, identifying that a specific cohort (the week a pricing change launched) shows meaningfully worse week-1 retention than surrounding cohorts — directly implicating that specific change as worth investigating.

## ⚠️ Common mistakes

- **Looking only at overall active-user counts**, which can mask declining retention if new signups are simultaneously growing fast enough to offset it.
- **Comparing cohorts of very different sizes without noting it**, which can make small-sample cohorts look noisier or more volatile than they really are.
- **Misreading a normal initial drop-off as a crisis.** Some early drop-off (week 0 → week 1) is completely normal for most products — the more important signal is whether the curve plateaus afterward, not the size of the very first drop.
- **Inconsistent cohort boundaries** (e.g., mixing calendar weeks and rolling 7-day windows) that make cohorts not directly comparable to each other.

## Real-world Data Analyst use cases

- **Product analysis:** the standard way to measure whether product changes are genuinely improving long-term retention, not just short-term engagement.
- **Marketing analysis:** comparing retention of users acquired through different channels (organic vs. paid) to judge acquisition quality, not just acquisition volume.
- **Subscription business analysis:** tracking whether retention is improving or worsening cohort over cohort, a leading indicator for long-term revenue health.

## Related concepts

\`\`\`
Business Analytics
  ↓
Cohort & Retention Analysis ← you are here
  ↓
Forecasting & Trend Analysis (retention trends feed revenue forecasts)
\`\`\`
Also connects to [KPIs & Metrics](/skills/kpis-metrics)' leading vs. lagging indicator framing — retention is often a leading indicator of future revenue health.

## Practice questions

### Easy
1. What defines a "cohort" in cohort analysis?

### Medium
2. A cohort's retention curve drops from 100% to 20% by week 2, then holds steady at 19-20% through week 8. Is this a healthy or unhealthy pattern? Why?

### Interview/Advanced
3. A company's total active user count is growing every month, but a cohort analysis shows retention worsening for each successive signup cohort. How do you reconcile these two facts, and which one should leadership be more concerned about?

<details><summary><strong>Answer / Solution</strong></summary>

1. A group of users who share a common starting event, most often the same signup period (week/month), used to track how their behavior evolves over time from that shared starting point.
2. Healthy — the sharp initial drop is common, but the plateau at week 2 onward shows a stable core of retained users who continue engaging over the long term, rather than continuing to decay toward zero.
3. Growing total active users can mask worsening retention if new signup volume is growing fast enough to offset the declining retention rate per cohort — leadership should be more concerned about the retention trend, since it signals a structural problem with the product's ability to keep users, which will eventually catch up with total user growth once new-signup growth slows.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What does a cohort retention table show that a simple monthly active user count doesn't?**
Short answer: It shows how a *specific group* of users, who all started at the same time, behaves over subsequent periods — revealing genuine retention trends that an aggregate active-user count can mask if new signups are simultaneously changing.

### Conceptual questions
**Q: What does a "plateau" in a retention curve indicate?**
Short answer: A stable core of users who continue engaging long-term after the initial drop-off — generally a healthy sign, since it suggests the product has found a durable, retained user base rather than continuously losing everyone eventually.

### Scenario-based questions
**Q: Two consecutive weekly cohorts show meaningfully different week-1 retention. What would you investigate?**
Short answer: What changed between the two cohorts' signup periods — a product change, a different acquisition channel mix, a pricing change, or an external factor — to form a specific hypothesis for the retention difference.

### Practical questions
**Q: How would you build a cohort retention table from a raw signup and activity log?**
Short answer: Assign each user to a cohort based on their signup period, then for each subsequent period, calculate what percentage of that cohort's original members had any activity — laying cohorts as rows and time-since-signup as columns.

## Interview traps / tricky points

- Rising total user counts can coexist with worsening retention — a classic scenario interviewers use to test whether a candidate reflexively trusts an aggregate growth number.
- A large initial drop-off (week 0 → week 1) is often normal and not itself alarming — the plateau (or lack of one) afterward is the more important signal.

## Best practices

- Always define cohort boundaries consistently (e.g., always calendar weeks, not a mix of windows) so cohorts are genuinely comparable.
- Look for a plateau, not just the size of the initial drop, when judging whether a retention curve is healthy.
- Pair a declining cohort-over-cohort retention trend with a specific hypothesis (a product change, an acquisition channel shift) rather than reporting it in isolation.

---

### ⚡ Quick Revision

**Cohort** → users grouped by a shared starting event (e.g., signup week)
**Retention rate** → active in period N ÷ original cohort size
**Healthy curve** → declines then plateaus at a stable, non-zero level
**Remember:** rising total users can mask worsening retention — check cohorts, not just aggregates
`);

setNote('forecasting-trend-analysis', `
## 🎯 What is it?

**Forecasting** extends a historical trend into a simple estimate of the future, while recognizing **seasonality** (a repeating pattern) and **noise** (random fluctuation) along the way, so a forecast reflects genuine signal, not just the most recent up-or-down blip.

## 💡 Why is it important?

Planning questions — "how much revenue next quarter," "do we need to staff up" — need a forecast, not just a description of the past. Descriptive reporting alone can't answer forward-looking business questions, which is exactly the gap [predictive analytics](/skills/types-of-data-analytics) fills.

## Core concept

### Trend vs. seasonality vs. noise
Any time series can be thought of as three overlapping components:

| Component | Meaning | Example |
|---|---|---|
| **Trend** | The genuine long-term direction | Revenue steadily growing 3%/month |
| **Seasonality** | A repeating pattern tied to a calendar cycle | Sales spike every December |
| **Noise** | Random, unexplained fluctuation | A single unusually slow Tuesday |

Separating these matters because a single data point (a slow week) might just be noise, not a genuine change in trend — reacting to noise as if it were a trend is a common forecasting mistake.

### Simple forecasting
The most basic approach: extend the historical trend line forward, ideally adjusted for a known seasonal pattern (e.g., "add the typical December boost on top of the underlying trend").

### Forecast vs. target
A **forecast** is an honest estimate of what will likely happen, based on data. A **target** is what the business *wants* to happen — the two are conceptually different, and conflating them (treating a target as if it were a forecast, or vice versa) leads to poor planning decisions.

## Syntax / Formula / Structure

A simple linear trend-based forecast (extending [Correlation & Regression](/skills/stats-correlation-regression)):

\`\`\`
Forecast for next period = Trend line's predicted value for that period
                            [+ seasonal adjustment, if a seasonal pattern applies]
\`\`\`

Always state the forecast as a range, not a single number:

\`\`\`
"We expect revenue between $X and $Y next month, with $Z as our best estimate,
based on the current trend and historical seasonal pattern."
\`\`\`

## 📊 Example

12 months of revenue data shows a steady upward trend of about $10K/month, with a consistent seasonal spike each December (+30% above trend).

**Forecast for next December:** trend-line estimate ($150K) × 1.30 seasonal adjustment ≈ **$195K**, stated as a range (e.g., $180K–$210K) to reflect normal uncertainty.

**Explanation:** A naive forecast that only extended the linear trend (ignoring seasonality) would have significantly underestimated December — recognizing the seasonal component is what makes the forecast realistic.

## Multiple examples

**Beginner:** Extending a simple linear trend line one period forward, with no seasonality present.
**Intermediate:** Identifying a clear seasonal pattern (e.g., weekly cycle in daily data) and adjusting a trend-based forecast to account for it.
**Real-world:** Forecasting next quarter's revenue for a staffing decision — presenting a range with a stated confidence caveat and the single biggest source of uncertainty (e.g., "this assumes no major new competitor launches"), rather than a single falsely-precise number that implies more certainty than the data supports.

## ⚠️ Common mistakes

- **Treating a single data point (or a short blip) as a trend change.** One unusually good or bad week is very often just noise — a real trend shift needs to be confirmed over multiple periods.
- **Ignoring an obvious seasonal pattern**, producing a forecast that's systematically wrong every time that season recurs.
- **Presenting a forecast as a single precise number** instead of a range, implying far more certainty than the underlying method actually supports.
- **Confusing a forecast with a target.** A sales target of "$500K next quarter" is a goal, not a data-driven estimate — presenting it as if it were a forecast (or vice versa) misleads planning decisions.

## Real-world Data Analyst use cases

- **Finance analysis:** forecasting next quarter's revenue for a staffing or budget decision.
- **Operations analysis:** forecasting seasonal demand to plan inventory or staffing levels ahead of a known peak period.
- **Sales analysis:** distinguishing a genuine downward trend from ordinary month-to-month noise before recommending a response.

## Related concepts

\`\`\`
Statistics — Correlation & Regression
  ↓
Business Analytics → Cohort & Retention Analysis
  ↓
Forecasting & Trend Analysis ← you are here
\`\`\`
This closes the Business Analytics stage — the next stages, Portfolio and Job Preparation, turn everything learned here into demonstrable, interview-ready evidence.

## Practice questions

### Easy
1. What's the difference between trend, seasonality, and noise in a time series?

### Medium
2. Revenue jumps 40% in one single week after months of flat performance. Is this more likely a genuine trend change or noise, and how would you check?

### Interview/Advanced
3. Why should a forecast always be presented as a range rather than a single number?

<details><summary><strong>Answer / Solution</strong></summary>

1. Trend is the genuine long-term direction; seasonality is a repeating, calendar-tied pattern; noise is random, unexplained fluctuation not attributable to either.
2. Likely noise or a one-off event until confirmed otherwise — check whether the jump persists over the following weeks (suggesting a genuine trend shift or a known cause, like a promotion) versus reverting back to the prior pattern (confirming it was a temporary blip).
3. A single point estimate implies a level of precision and certainty the underlying data and method don't actually support — a range communicates the genuine uncertainty honestly, helping stakeholders plan for a realistic set of outcomes rather than anchoring on one falsely-precise number.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between a forecast and a target?**
Short answer: A forecast is a data-driven estimate of what will likely happen; a target is a goal for what the business wants to happen — they can differ, and conflating them leads to poor planning.

### Conceptual questions
**Q: Why is it risky to react immediately to a single unusual data point?**
Short answer: A single data point could just be random noise rather than a genuine trend shift — confirming a pattern over multiple periods (or checking for a specific, known cause) avoids over-reacting to what might just be normal variation.

### Scenario-based questions
**Q: A stakeholder wants a single exact number for "next quarter's revenue" to put in a board deck. How do you respond?**
Short answer: Provide a best-estimate number alongside a realistic range and the key assumption(s) behind it — a single falsely-precise number risks setting an expectation the forecast can't actually guarantee, and being transparent about the range and its assumptions is more useful and more honest.

### Practical questions
**Q: How would you build a simple forecast for a business with a clear weekly seasonal pattern in daily data?**
Short answer: Identify the underlying trend across weeks (smoothing out the day-to-day seasonal swings), then apply the typical day-of-week adjustment on top of that trend line to produce a forecast for a specific upcoming day.

## Interview traps / tricky points

- Presenting a forecast without any stated uncertainty is a common red flag interviewers probe for — a forecast is inherently an estimate, and pretending otherwise is a communication failure.
- Ignoring an obvious, well-documented seasonal pattern (like December retail spikes) when it clearly applies is a basic, avoidable forecasting mistake.

## Best practices

- Always separate trend, seasonality, and noise before building a forecast.
- State a forecast as a range with a best estimate, never a single falsely-precise number.
- Explicitly name the forecast's biggest source of uncertainty or key assumption when presenting it.
- Keep "forecast" (a data-driven estimate) and "target" (a business goal) clearly distinct in any communication.

---

### ⚡ Quick Revision

**Trend** → genuine long-term direction · **Seasonality** → repeating calendar pattern · **Noise** → random fluctuation
**Forecast ≠ target** → an estimate of what will happen vs. a goal for what's wanted
**Always present:** a range with a best estimate and the key uncertainty/assumption, never a single bare number
`);
