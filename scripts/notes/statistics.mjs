import { setNote } from './_lib.mjs';

setNote('stats-descriptive', `
## 🎯 What is it?

**Descriptive statistics** summarize a dataset with a handful of numbers — mean, median, mode (measures of center), and standard deviation, range, and quartiles (measures of spread) — so you can describe "what this data looks like" without listing every single value.

Think of it like describing a class of 30 students' test scores to someone in one sentence instead of reading out all 30 scores — you'd naturally reach for the average and maybe how spread out the scores were.

## 💡 Why is it important?

- Before saying anything meaningful about data, you need to describe it accurately — and know when a single summary number is misleading.
- It's the first thing to compute on any new dataset, and it's often enough to catch data-quality problems (implausible min/max, huge standard deviation) before deeper analysis.
- Every dashboard number — an "average order value," a "median session time" — is a descriptive statistic; understanding them well means understanding what you're actually reporting.

## Core concept

### Measures of center

| Statistic | Meaning | Best used when |
|---|---|---|
| **Mean** | Sum ÷ count (the arithmetic average) | Data is roughly symmetric, no major outliers |
| **Median** | The middle value when sorted | Data is skewed or has outliers (e.g., income, order value) |
| **Mode** | The most frequent value | Categorical data, or spotting a common repeated value |

### Measures of spread

| Statistic | Meaning |
|---|---|
| **Range** | Max − Min |
| **Variance** | Average of squared distances from the mean |
| **Standard deviation** | Square root of variance — spread expressed in the *same units* as the data |

### Quartiles & IQR
Quartiles split sorted data into four equal parts. Q1 = 25th percentile, Q2 = median, Q3 = 75th percentile. **IQR (Interquartile Range) = Q3 − Q1** — the spread of the "middle 50%," and a standard way to define outliers: any value more than 1.5×IQR beyond Q1 or Q3.

## Syntax / Formula / Structure

\`\`\`
Mean (x̄)           = (sum of all x values) ÷ n
Variance            = (sum of (x − x̄)²) ÷ n
Standard deviation  = √Variance
\`\`\`

- **x** — each individual value
- **n** — the number of values
- **x̄** — the mean

(Note: dividing by n−1 instead of n gives the *sample* variance/std dev — the version almost always used in practice, since real datasets are usually a sample, not the full population.)

## 📊 Example

Order values: \`20, 25, 30, 30, 500\`

- **Mean:** (20+25+30+30+500)/5 = **121**
- **Median:** sorted middle value = **30**
- **Mode:** **30** (appears twice)
- **Range:** 500 − 20 = **480**

**Interpretation:** The mean (121) is dragged far above what a "typical" order looks like by the single 500 outlier — the median (30) is a much more honest description of a typical order here.

## Multiple examples

**Beginner:** Compute mean and median for 5 test scores; note whether they're close (roughly symmetric data).
**Intermediate:** Compute standard deviation for two products' weekly sales — same average, but one has much higher std dev, meaning much less predictable demand.
**Real-world:** Use IQR to flag outlier transactions in a fraud-review queue: any order more than 1.5×IQR above Q3 gets auto-flagged for manual review.

## ⚠️ Common misconceptions

- **"The mean is always the right summary."** It's misleading whenever data is skewed or has outliers — median is often the better choice (see the order-value example above).
- **"Standard deviation of 0 means no data."** It means every value is identical — a genuinely useful (if unusual) signal, not a lack of data.
- **Confusing variance and standard deviation.** Variance is in *squared* units (hard to interpret directly); standard deviation converts back to the original units, which is why it's reported far more often.

## Real-world Data Analyst use cases

- **Sales analysis:** median order value alongside the mean, to avoid a misleading "average" driven by a few large B2B orders.
- **Operations analysis:** standard deviation of delivery time, to judge consistency, not just average speed.
- **Product analysis:** IQR-based outlier detection on session duration to filter out bot traffic before analyzing real user behavior.

## Related concepts

\`\`\`
Descriptive Statistics ← you are here
  ↓
Probability Basics
  ↓
Distributions
  ↓
Correlation & Regression
  ↓
Hypothesis Testing
\`\`\`

## Practice questions

### Easy
1. For the dataset \`4, 8, 6, 5, 3, 4\`, compute the mean, median, and mode.

### Medium
2. Two products both average 100 units sold per week. Product A has a standard deviation of 5; Product B has a standard deviation of 40. What does this tell a demand planner?

### Interview/Advanced
3. A dataset has a mean of 80 and a median of 45. What does this gap suggest about the data's shape, and which statistic would you lead with in a report to leadership?

<details><summary><strong>Answer / Solution</strong></summary>

1. Mean = (4+8+6+5+3+4)/6 = 5; Median = sorted (3,4,4,5,6,8) → average of 4 and 5 = 4.5; Mode = 4 (appears twice).
2. Product A's demand is far more consistent week to week (low variability), while Product B swings widely — B is riskier to plan inventory around even with the same average.
3. A mean well above the median suggests a right-skewed distribution (a few high values pulling the mean up) — likely a handful of large orders or high-value outliers. Lead with the median, since it better represents the typical value, and mention the mean alongside it for context.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between mean and median?**
Short answer: Mean is the arithmetic average; median is the middle value when sorted — median is more robust to outliers and skew.

### Conceptual questions
**Q: When would you report the median instead of the mean?**
Short answer: When the data is skewed or has significant outliers, since the mean gets pulled toward extreme values while the median doesn't.

### Scenario-based questions
**Q: You're asked for the "average" salary at a company that has a handful of very high earners. How do you respond?**
Short answer: Report both the mean and median, and flag that the mean is likely inflated by a small number of high earners — the median gives a more representative picture of a "typical" salary.

### Practical questions
**Q: Given a list of daily website session durations, how would you identify and handle outliers?**
Short answer: Compute Q1, Q3, and IQR; flag any value beyond 1.5×IQR from Q1/Q3 as a candidate outlier, then investigate (e.g., bot traffic) before deciding whether to exclude it from the main analysis.

## Interview traps / tricky points

- Standard deviation is in the same units as the data; variance is in squared units — mixing them up is a very common and easy-to-catch mistake in an interview.
- "Average" is ambiguous in casual speech — always clarify whether mean or median is meant, especially with skewed data like income or order value.
- A single very large or very small value can dramatically shift the mean while barely moving the median — always sanity-check for this before reporting.

## Best practices

- Report mean *and* median together for any metric that could plausibly be skewed (price, income, session duration).
- Use IQR-based rules, not gut feeling, to define what counts as an outlier.
- Always look at standard deviation alongside a mean — two datasets with the same average can behave very differently.

---

### ⚡ Quick Revision

**Mean** → average, sensitive to outliers
**Median** → middle value, robust to outliers/skew
**Mode** → most frequent value
**Standard deviation** → typical distance from the mean, same units as data
**IQR** → Q3 − Q1, the "middle 50%"; outlier rule: beyond 1.5×IQR from Q1/Q3
`);

setNote('stats-probability', `
## 🎯 What is it?

**Probability** is a number between 0 and 1 (or 0% to 100%) describing how likely an event is to happen. This topic covers the core rules: independent vs. dependent events, conditional probability, and expected value — the language underneath statistics, A/B testing, and most machine learning.

Think of a weather forecast that says "30% chance of rain" — that's a probability statement, built from historical patterns of similar days.

## 💡 Why is it important?

- Probability is the foundation "95% confidence" and "p-value" rest on — without it, those phrases are just repeated jargon, not something you actually understand.
- It underlies A/B testing directly: "is this difference real or just random chance?" is fundamentally a probability question.
- It shows up constantly in everyday analyst reasoning: estimating risk, forecasting a range of outcomes, or judging how surprising a result actually is.

## Core concept

### Independent vs. dependent events
Two events are **independent** if one happening doesn't change the probability of the other (e.g., two separate coin flips). They're **dependent** if one does affect the other (e.g., drawing two cards from a deck *without* replacement — the first draw changes the odds of the second).

### Conditional probability
The probability of event A **given that** event B has already happened — read as "the probability of A given B." This is different from the plain probability of A alone whenever A and B are related.

### Expected value
The average outcome you'd get if a scenario played out many times — each possible outcome weighted by its probability.

## Syntax / Formula / Structure

\`\`\`
P(A and B)        = P(A) × P(B)                 — only valid if A and B are independent
P(A given B)      = P(A and B) ÷ P(B)           — conditional probability
Expected value    = Σ (outcome × probability of that outcome)
\`\`\`

## 📊 Example — Conditional probability

Of 1,000 website visitors: 200 clicked an ad, and of those 200, 40 made a purchase. Overall, 100 of all 1,000 visitors made a purchase.

\`\`\`
P(purchase given clicked ad) = 40 / 200  = 20%
P(purchase overall)          = 100 / 1000 = 10%
\`\`\`

**Interpretation:** Visitors who clicked the ad purchased at double the overall rate — a meaningful signal that the ad is targeting (or influencing) the right people, though this alone doesn't prove the ad *caused* the higher rate (see [Correlation & Regression](/skills/stats-correlation-regression)).

## Multiple examples

**Beginner:** A fair die roll — probability of rolling a 4 = 1/6.
**Intermediate:** Two marketing emails sent independently — P(both opened) = P(email 1 opened) × P(email 2 opened), only valid if opens are truly independent (they often aren't, if it's the same recipient).
**Real-world — expected value:** A promotion has a 5% chance of a customer redeeming a $50 discount and a 95% chance of no redemption. Expected cost per customer = 0.05 × 50 + 0.95 × 0 = **$2.50** — useful for budgeting a campaign before launch.

## ⚠️ Common misconceptions

- **Assuming events are independent when they aren't.** Two purchases from the same household are not independent the way two purchases from unrelated customers are — treating them as independent understates real-world variability.
- **Confusing P(A given B) with P(B given A).** "The probability a purchaser clicked the ad" is a completely different number than "the probability an ad-clicker purchased" — mixing these up is one of the most common statistical reasoning errors (related to the "base rate fallacy").
- **Treating "expected value" as "the most likely single outcome."** It's a probability-weighted average, and may not match any individual possible outcome at all (e.g., an expected value of 2.5 children is meaningful as an average, not as a literal possible outcome).

## Real-world Data Analyst use cases

- **Marketing analysis:** conditional probability of purchase given ad exposure, cart abandonment given device type.
- **Finance analysis:** expected value of a promotion's cost before committing budget.
- **Operations analysis:** probability a shipment arrives late given a specific carrier or route.

## Related concepts

\`\`\`
Descriptive Statistics
  ↓
Probability Basics ← you are here
  ↓
Distributions
  ↓
Correlation & Regression
  ↓
Hypothesis Testing (built directly on probability)
\`\`\`

## Practice questions

### Easy
1. A bag has 4 red and 6 blue marbles. What's the probability of drawing a red marble?

### Medium
2. Of 500 customers, 150 are on a premium plan. Of those 150, 90 renewed. What's P(renew given premium)?

### Interview/Advanced
3. A promotion has a 10% chance of costing $100 and a 90% chance of costing $0. What's the expected cost per customer, and why is this number useful even though no single customer will actually cost exactly that amount?

<details><summary><strong>Answer / Solution</strong></summary>

1. 4/10 = 40%.
2. 90/150 = 60%.
3. Expected cost = 0.10 × 100 + 0.90 × 0 = $10. It's useful because, across a large number of customers, the *average* cost will converge toward $10 per customer — making it the right number to use for budgeting, even though it doesn't describe any individual customer's actual outcome.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between independent and dependent events?**
Short answer: Independent events don't affect each other's probability; dependent events do — one event happening changes the likelihood of the other.

### Conceptual questions
**Q: What is conditional probability, in plain terms?**
Short answer: The probability of one event happening, given that you already know another related event has happened — it narrows the population you're calculating the probability over.

### Scenario-based questions
**Q: A stakeholder says "80% of our fraud cases involve a new account, so new accounts are risky." What's the reasoning gap?**
Short answer: That's P(new account given fraud), not P(fraud given new account) — if most accounts are new anyway, a high rate of new accounts among fraud cases doesn't necessarily mean new accounts are unusually risky; you need the reverse conditional probability to judge that.

### Practical questions
**Q: How would you calculate the expected value of a marketing promotion before launching it?**
Short answer: Estimate the probability of each possible outcome (e.g., redemption vs. no redemption) and the cost of each, then sum each outcome's cost weighted by its probability.

## Interview traps / tricky points

- Mixing up P(A given B) and P(B given A) is one of the most common statistical reasoning traps in interviews — always state clearly which event is the "given."
- Assuming independence without checking is a subtle, easy mistake — always ask whether one event could plausibly influence the other.

## Best practices

- Explicitly state which event is "given" when discussing a conditional probability, out loud or in writing — it prevents the P(A|B) vs. P(B|A) mix-up.
- Check whether an independence assumption is realistic before multiplying probabilities together.
- Pair an expected value with a sense of its variance/spread — two scenarios can have the same expected value with very different risk profiles.

---

### ⚡ Quick Revision

**Independent events** → one doesn't affect the other's probability
**Conditional probability P(A|B)** → probability of A, given B already happened
**Expected value** → probability-weighted average outcome
**Watch for:** P(A|B) ≠ P(B|A) — always confirm which is the "given" event
`);

setNote('stats-distributions', `
## 🎯 What is it?

A **distribution** describes the shape of how values in a dataset are spread out — whether they cluster in the middle (a bell curve), lean to one side (skewed), or bunch around a few distinct values (bimodal). Recognizing the shape tells you what's normal, what's an outlier, and which statistical methods are actually valid to use.

Think of a histogram of adult heights: most people cluster near the average, with fewer people as you move toward very short or very tall — that classic bell shape is a **normal distribution**.

## 💡 Why is it important?

- Many statistical methods (including common hypothesis tests) assume data roughly follows a specific distribution — using them on data that doesn't fit can produce misleading results.
- Recognizing a distribution's shape from a histogram is often the fastest way to spot a data-quality issue or a genuinely interesting business pattern.
- It's the concept that connects raw data to probability statements like "95% of values fall within this range."

## Core concept

### The normal distribution (bell curve)
Symmetric around the mean, with the classic **68-95-99.7 rule**:

| Range | % of data contained |
|---|---|
| Mean ± 1 standard deviation | ~68% |
| Mean ± 2 standard deviations | ~95% |
| Mean ± 3 standard deviations | ~99.7% |

### Skewed & bimodal shapes

- **Right-skewed (positive skew):** a long tail toward high values — mean > median. Common in income, order value.
- **Left-skewed (negative skew):** a long tail toward low values — mean < median. Less common, but seen in things like "time until a scheduled failure" data capped near a maximum.
- **Bimodal:** two distinct peaks — often a sign that two different populations are mixed together in one dataset (e.g., combining new-user and power-user session lengths into one histogram).

### Common named distributions

- **Binomial:** models the number of successes in a fixed number of independent yes/no trials (e.g., number of purchases out of 100 site visits, each with the same conversion probability).
- **Uniform:** every value in a range is equally likely (e.g., a random number generator, or the minute-within-the-hour a random event occurs).

## Syntax / Formula / Structure

\`\`\`
68-95-99.7 rule (normal distribution):
  mean ± 1 std dev  → ~68% of values fall in this range
  mean ± 2 std dev  → ~95% of values fall in this range
  mean ± 3 std dev  → ~99.7% of values fall in this range
\`\`\`

## 📊 Example

Average delivery time is 5 days with a standard deviation of 1 day, and delivery times are roughly normal.

Using the 68-95-99.7 rule:
- ~68% of deliveries arrive between 4 and 6 days.
- ~95% arrive between 3 and 7 days.

**Interpretation:** A delivery that takes 9 days is far outside the "normal" range (more than 3 standard deviations away) — a strong candidate to investigate as an anomaly, not typical variation.

## Multiple examples

**Beginner:** Recognize that adult height data forms a roughly normal, symmetric histogram.
**Intermediate:** Recognize that customer order value is typically right-skewed (many small orders, a few very large ones) — meaning median, not mean, better represents a "typical" order.
**Real-world:** A histogram of session durations shows two peaks — one near 30 seconds, one near 10 minutes. Rather than treating this as one population, investigate whether it's actually two groups (e.g., bounced visitors vs. engaged users) mixed together, and analyze them separately.

## ⚠️ Common misconceptions

- **Assuming all real-world data is normally distributed.** Much business data (order value, wait times, session length) is right-skewed, not normal — checking the shape first matters.
- **Treating a bimodal distribution's overall mean as meaningful.** The "average" of two very different groups combined often doesn't represent either group well.
- **Confusing "binomial" with "any yes/no outcome."** Binomial specifically requires a *fixed number* of *independent* trials with the *same* probability of success each time — real data often violates one of these conditions.

## Real-world Data Analyst use cases

- **Operations analysis:** using the 68-95-99.7 rule on delivery times to define a reasonable "normal" range and flag genuine anomalies.
- **Product analysis:** spotting a bimodal session-length distribution and investigating whether it reflects two distinct user segments.
- **Marketing analysis:** modeling conversion counts out of a fixed number of impressions with a binomial distribution.

## Related concepts

\`\`\`
Descriptive Statistics
  ↓
Probability Basics
  ↓
Distributions ← you are here
  ↓
Correlation & Regression
  ↓
Hypothesis Testing (many tests assume normally-distributed data)
\`\`\`

## Practice questions

### Easy
1. A dataset's histogram shows a single symmetric peak. What distribution shape does this suggest?

### Medium
2. Order values for an e-commerce store show a long tail toward high values, with mean > median. What shape is this, and which measure of center should you lead with?

### Interview/Advanced
3. A histogram of app session lengths shows two separate peaks. What might this indicate, and how would you investigate further?

<details><summary><strong>Answer / Solution</strong></summary>

1. Roughly a normal (bell-curve) distribution.
2. Right-skewed; lead with the median, since the mean is pulled upward by the long tail of high-value orders.
3. It may indicate two distinct sub-populations mixed together (e.g., bounced sessions vs. genuinely engaged sessions). Investigate by segmenting the data (e.g., by traffic source, device, or a behavioral flag) and examining each group's distribution separately rather than analyzing the combined histogram as one population.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What does the 68-95-99.7 rule describe?**
Short answer: For a normal distribution, about 68% of values fall within 1 standard deviation of the mean, 95% within 2, and 99.7% within 3.

### Conceptual questions
**Q: Why does it matter whether data is normally distributed before applying a statistical test?**
Short answer: Many common tests assume roughly normal data; applying them to strongly skewed or bimodal data can produce misleading p-values or confidence intervals.

### Scenario-based questions
**Q: You see mean and median differ substantially in a dataset. What does that tell you, and what would you check next?**
Short answer: It suggests the data is skewed, not symmetric — check a histogram to confirm the shape and decide whether median (or another robust statistic) is more appropriate to report.

### Practical questions
**Q: How would you decide whether an observed value is a genuine outlier, using distribution shape?**
Short answer: If the data is roughly normal, use the standard-deviation-based 68-95-99.7 rule (e.g., beyond 3 std devs is highly unusual); if it's skewed, use an IQR-based rule instead, since standard deviation is less reliable on skewed data.

## Interview traps / tricky points

- Real business data is very often *not* normal — assuming normality without checking is a common and consequential mistake.
- A bimodal shape is easy to miss if you only look at summary statistics (mean/std dev) without ever plotting a histogram — always visualize before assuming.

## Best practices

- Plot a histogram before choosing a summary statistic or a statistical test — don't assume the shape.
- Use the 68-95-99.7 rule only when the data is genuinely close to normal; use IQR-based methods for skewed data.
- If a distribution looks bimodal, investigate whether it's actually two populations that should be analyzed separately.

---

### ⚡ Quick Revision

**Normal distribution** → symmetric bell curve; 68-95-99.7 rule applies
**Right-skewed** → long tail high, mean > median (e.g., order value)
**Bimodal** → two peaks, often two mixed populations
**Binomial** → number of successes in a fixed number of independent trials
**Uniform** → every value in a range equally likely
`);

setNote('stats-correlation-regression', `
## 🎯 What is it?

**Correlation** measures how strongly two variables move together, expressed as a single number between −1 and 1. **Regression** goes further, fitting a line (or curve) through the data to describe and quantify that relationship — e.g., "for every extra $1 spent on ads, revenue tends to rise by $4."

## 💡 Why is it important?

- "These two things are related" is one of the most common — and most often misused — claims in data analysis. This topic is how you back that claim up correctly, and understand its limits.
- Correlation and regression are everywhere in analyst work: relating marketing spend to revenue, tenure to churn, price to demand.
- Misusing correlation as proof of causation is one of the most common and consequential mistakes a data analyst can make — and one of the most commonly tested interview topics.

## Core concept

### Correlation coefficient (r)
A number from **−1 to 1** describing the strength and direction of a linear relationship.

| r value | Meaning |
|---|---|
| +1 | Perfect positive relationship (both rise together) |
| 0 | No linear relationship |
| −1 | Perfect negative relationship (one rises as the other falls) |
| ±0.1 to ±0.3 | Weak |
| ±0.3 to ±0.7 | Moderate |
| ±0.7 to ±1.0 | Strong |

### Correlation vs. causation
A strong correlation between two variables does **not** prove one causes the other. A third, hidden variable — a **confounder** — often explains both. Classic example: ice cream sales and drowning incidents are correlated, but summer heat (the confounder) drives both.

### Simple linear regression
Fits the "best" straight line through the data, described by:

\`\`\`
y = m·x + b
\`\`\`

- **y** — the outcome being predicted (dependent variable)
- **x** — the predictor (independent variable)
- **m** — the **slope**: how much y changes per 1-unit increase in x
- **b** — the **intercept**: the predicted value of y when x = 0

## Syntax / Formula / Structure

\`\`\`
Correlation (r) = how consistently two variables move together,
                   relative to their own individual spread
                   (ranges from −1 to +1)
\`\`\`

In practice, analysts compute r with a spreadsheet's \`CORREL()\` function or a statistical library — the exact hand-calculation formula is worth understanding conceptually (it compares how two variables vary together against how much each varies on its own) rather than calculating by hand routinely.

## 📊 Example

Weekly ad spend and revenue for 6 weeks:

| Week | Ad spend ($) | Revenue ($) |
|---|---|---|
| 1 | 500 | 4,200 |
| 2 | 800 | 5,100 |
| 3 | 1,200 | 6,000 |
| 4 | 1,500 | 7,300 |
| 5 | 900 | 5,400 |
| 6 | 1,800 | 8,100 |

**Correlation:** r ≈ 0.98 (very strong positive relationship).
**Regression line (approx.):** Revenue ≈ 3.1 × Spend + 2,600

**Interpretation:** Each additional dollar in ad spend is associated with about $3.10 more revenue, on average, within this data's range — but this is an *association*, not proof that spend directly *causes* that exact amount of extra revenue (seasonality, promotions, or other factors could be confounders).

## Multiple examples

**Beginner:** Correlate hours studied and exam score for a class — likely a moderate-to-strong positive r.
**Intermediate:** Correlate employee tenure and productivity score — check whether a confounder (like role seniority) might explain both.
**Real-world:** Fit a regression of price vs. demand to estimate price elasticity, but flag that other factors (season, competitor pricing) that changed at the same time as price could bias the estimated slope.

## Types / Variations

| Type | What it measures |
|---|---|
| Positive correlation | Both variables move in the same direction |
| Negative correlation | Variables move in opposite directions |
| No/weak correlation | No consistent linear relationship (may still have a non-linear one!) |

## ⚠️ Common mistakes

- **Treating any correlation as causation.** Always ask "what third factor could explain both?" before concluding one variable drives the other.
- **Assuming r = 0 means "no relationship" at all.** It only rules out a *linear* relationship — two variables can have a strong curved (non-linear) relationship with a correlation near 0.
- **Extrapolating a regression line far beyond the range of the actual data.** A relationship that holds between $500–$1,800 of ad spend may not hold at $50,000 of spend.
- **Ignoring an obvious confounder** (e.g., season, a concurrent promotion) when reporting a correlation as a business insight.

## Real-world Data Analyst use cases

- **Marketing analysis:** correlating ad spend with revenue, while checking for seasonal confounders.
- **HR analysis:** correlating tenure with performance score, then checking whether role or team is a confounder.
- **Product analysis:** regressing feature usage against retention to estimate impact, with the same causation caveat.

## Related concepts

\`\`\`
Descriptive Statistics → Probability → Distributions
  ↓
Correlation & Regression ← you are here
  ↓
Hypothesis Testing (formally testing whether a relationship is statistically significant)
\`\`\`
Also connects directly to [A/B Testing](/skills/ab-testing) — the proper way to establish causation, rather than relying on correlation alone.

## Practice questions

### Easy
1. What does a correlation coefficient of −0.85 indicate about the relationship between two variables?

### Medium
2. A company finds that stores with more employees have higher sales (r = 0.7). Propose a plausible confounding variable.

### Interview/Advanced
3. A regression shows revenue rises $3 for every $1 of ad spend, fit on data ranging from $500–$1,800/week. Why would it be risky to use this line to predict revenue at $50,000/week of spend?

<details><summary><strong>Answer / Solution</strong></summary>

1. A strong negative relationship — as one variable increases, the other tends to decrease substantially.
2. Store size (or location/foot traffic) — larger, higher-traffic stores likely need more employees *and* naturally generate more sales, without more employees directly causing more sales.
3. This is extrapolation far outside the range of observed data — the relationship might not stay linear at that scale (diminishing returns are common in real ad spend), so the prediction is unreliable and unsupported by the actual data.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What does a correlation coefficient measure?**
Short answer: The strength and direction of a linear relationship between two variables, on a scale from −1 to 1.

### Conceptual questions
**Q: Why doesn't correlation imply causation?**
Short answer: A strong correlation can be explained by one variable causing the other, the reverse, or — very commonly — a third confounding variable that influences both, so correlation alone can't distinguish between these explanations.

### Scenario-based questions
**Q: You find a strong correlation between customer support response time and churn. How would you investigate whether it's causal?**
Short answer: Look for plausible confounders (e.g., issue severity might drive both slower response times and higher churn), and ideally design a controlled experiment (A/B test) that manipulates response time directly to isolate its actual effect.

### Practical questions
**Q: How would you interpret a regression slope of 2.5 in a model predicting revenue from website visits?**
Short answer: On average, each additional visit is associated with $2.50 more revenue, within the range of the data used to fit the model — with the caveat that this is an association from the fitted data, not a guaranteed causal effect.

## Interview traps / tricky points

- "Correlation does not imply causation" is often stated without naming an actual plausible confounder — interviewers want the specific confounder, not just the phrase.
- A correlation near 0 doesn't rule out a strong non-linear relationship — always visualize the data (scatter plot) rather than relying on r alone.
- Extrapolating a regression line beyond the observed data range is a subtle but serious error.

## Best practices

- Always propose a concrete, plausible confounder when discussing a correlation — "it might just be coincidence" is a weaker answer than naming a specific alternative explanation.
- Plot a scatter plot alongside any correlation coefficient — the number alone can hide outliers or non-linear patterns.
- Only trust a regression's predictions within (or very close to) the range of data it was fit on.

---

### ⚡ Quick Revision

**Correlation (r)** → strength & direction of a *linear* relationship, −1 to 1
**Correlation ≠ causation** → always consider confounding variables
**Regression slope** → change in y per 1-unit change in x
**Watch for:** extrapolating beyond the data's range, non-linear relationships with r near 0
`);

setNote('stats-hypothesis-testing', `
## 🎯 What is it?

**Hypothesis testing** is a formal process for deciding whether an observed difference in data (e.g., between two groups in an A/B test) is a real effect or just random noise. It involves stating a **null hypothesis** and **alternative hypothesis**, running a statistical test, and interpreting the resulting **p-value** to make a decision.

Think of it like a courtroom: you start by assuming "innocent until proven guilty" (the null hypothesis — no real difference exists), and only reject that assumption if the evidence (the data) is strong enough.

## 💡 Why is it important?

- This is the formal machinery behind every A/B test and every "is this difference real or just noise?" question a data analyst gets asked.
- Without it, teams risk declaring a change "a success" based on random fluctuation, wasting resources rolling it out — or worse, missing a real effect by chance.
- p-values are one of the most commonly *misunderstood* statistical concepts in the industry — getting this right is a meaningful differentiator.

## Core concept

### Null vs. alternative hypothesis
- **Null hypothesis (H0):** the default assumption — there is *no* real difference or effect (e.g., "the new checkout flow has the same conversion rate as the old one").
- **Alternative hypothesis (H1):** what you're testing for — there *is* a real difference (e.g., "the new checkout flow has a different conversion rate").

The hypothesis must be stated **before** looking at the results — deciding it after seeing the data defeats the purpose of the test.

### P-values
A p-value answers: *"If the null hypothesis were actually true (no real effect), how likely would we be to see a difference this large, or larger, just by random chance?"*

A **small p-value** (e.g., below 0.05) suggests the observed difference is unlikely to be pure chance — evidence *against* the null hypothesis.

> ⚠️ **A p-value is NOT the probability that the null hypothesis is true.** This is the single most common misreading — a p-value of 0.03 does not mean "there's a 3% chance there's no real effect."

### Significance thresholds
The **alpha level** (commonly 0.05) is the threshold chosen *before* running the test — if p < alpha, the result is called "statistically significant" and the null hypothesis is rejected.

## Syntax / Formula / Structure

A typical hypothesis test workflow:

\`\`\`
1. State H0 and H1 clearly, before looking at results
2. Choose a significance threshold (alpha), commonly 0.05
3. Collect data / run the experiment
4. Calculate the test statistic and p-value
5. Decision: if p < alpha  → reject H0 (statistically significant)
             if p >= alpha → fail to reject H0 (not enough evidence)
\`\`\`

## 📊 Example

An A/B test compares checkout conversion rates:

| Group | Visitors | Conversions | Conversion rate |
|---|---|---|---|
| A (old checkout) | 5,000 | 400 | 8.0% |
| B (new checkout) | 5,000 | 460 | 9.2% |

**H0:** conversion rate for A and B is the same.
**H1:** conversion rates differ.

Running a statistical significance test (e.g., a two-proportion z-test) on this data yields **p = 0.02**.

**Decision:** Since p (0.02) < alpha (0.05), reject H0 — the difference is statistically significant. The new checkout's higher conversion rate is unlikely to be random chance alone.

**Correct interpretation:** "If there were truly no difference between the two checkouts, we'd see a gap this large or larger only about 2% of the time by chance — that's unlikely enough that we conclude the new checkout likely performs better."

## Multiple examples

**Beginner:** Testing whether a coin is fair after 100 flips landing 60 heads.
**Intermediate:** Testing whether average order value differs between two customer segments.
**Real-world:** A/B testing a pricing page redesign — stating hypotheses and alpha *before* launch, then making a ship/no-ship decision strictly based on the pre-registered threshold, not on "does the number look good."

## ⚠️ Common mistakes

- **Misreading the p-value as "the probability the null hypothesis is true."** It's the probability of seeing data this extreme *if* the null hypothesis is true — a subtle but critical distinction.
- **Checking results repeatedly and stopping as soon as p < 0.05** ("peeking") — this inflates the chance of a false positive; the sample size and test duration should be decided in advance.
- **Treating "not statistically significant" as proof of "no effect."** It only means there wasn't enough evidence to detect one — the test may simply lack statistical power (too small a sample).
- **Confusing statistical significance with practical significance.** A large enough sample can make a tiny, business-irrelevant difference "statistically significant."

## Real-world Data Analyst use cases

- **Marketing analysis:** A/B testing two email subject lines for open rate.
- **Product analysis:** testing whether a new onboarding flow improves activation rate.
- **Pricing analysis:** testing whether a price change significantly affects conversion, not just whether it "looks" different.

## Related concepts

\`\`\`
Descriptive Statistics → Probability → Distributions → Correlation & Regression
  ↓
Hypothesis Testing ← you are here
  ↓
A/B Testing (the direct business application of this topic)
\`\`\`

## Practice questions

### Easy
1. What is the null hypothesis, in plain language?

### Medium
2. An A/B test returns p = 0.20 with alpha set at 0.05. What's the correct decision and interpretation?

### Interview/Advanced
3. A colleague says "our p-value was 0.01, so there's a 99% chance our new feature works." What's wrong with this statement, and how would you correct it?

<details><summary><strong>Answer / Solution</strong></summary>

1. The default assumption that there is no real effect or difference — the thing you're trying to find evidence against.
2. Since p (0.20) ≥ alpha (0.05), fail to reject the null hypothesis — there isn't enough evidence to conclude a real difference exists (this does not prove there's no difference, only that this test didn't detect one with sufficient confidence).
3. This misreads the p-value as the probability the hypothesis is true. Correct interpretation: "If there were truly no effect, we'd see a difference this large or larger only 1% of the time by chance" — the p-value describes the data given the null hypothesis, not the probability the null hypothesis (or its opposite) is true.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What does a p-value tell you?**
Short answer: The probability of observing a result at least as extreme as what was measured, *if* the null hypothesis were actually true — a small p-value is evidence against the null hypothesis.

### Conceptual questions
**Q: What's the difference between statistical significance and practical significance?**
Short answer: Statistical significance means the result is unlikely to be random chance; practical significance means the effect is large enough to actually matter for the business — a result can be statistically significant but too small to be worth acting on.

### Scenario-based questions
**Q: A test shows a "statistically significant" 0.1% lift in conversion rate from a huge sample of 10 million users. Should the company ship the change?**
Short answer: Not automatically — check whether a 0.1% lift is practically meaningful (worth the engineering/maintenance cost) before deciding, since huge sample sizes can make even tiny, business-irrelevant differences statistically significant.

### Practical questions
**Q: How would you explain to a non-technical stakeholder why you can't declare a "winner" after just one day of an A/B test, even if one variant looks ahead?**
Short answer: Explain that early results are noisy and can reverse — the test needs to run for the pre-planned sample size/duration to reach a reliable conclusion, and "peeking" early and stopping increases the risk of a false positive.

## Interview traps / tricky points

- The single most common trap: restating a p-value as "the probability the null hypothesis is true" — always correct this distinction clearly if it comes up.
- "Not statistically significant" ≠ "no effect exists" — it may just mean the test lacked the statistical power (sample size) to detect a real but smaller effect.
- Stopping a test early once it "looks significant" (p-hacking / peeking) is a serious, commonly-tested methodological error.

## Best practices

- State the hypothesis and significance threshold *before* looking at any results.
- Decide the sample size / test duration in advance, and don't stop early based on interim results.
- Always pair statistical significance with a judgment of practical significance before recommending action.

---

### ⚡ Quick Revision

**Null hypothesis (H0)** → assumes no real effect/difference
**P-value** → probability of seeing this data (or more extreme) if H0 is true — NOT the probability H0 is true
**Alpha (0.05 common)** → the pre-chosen significance threshold
**Decision:** p < alpha → reject H0 (statistically significant); p >= alpha → fail to reject H0
**Remember:** statistical significance ≠ practical significance
`);
