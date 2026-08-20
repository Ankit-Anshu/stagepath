import { setNote } from './_lib.mjs';

setNote('case-study-interviews', `
## 🎯 What is it?

Approaching an **open-ended business case or take-home dataset** the way real data analyst interviews actually test for: structured thinking under ambiguity, not a single clean technical question with one right answer.

## 💡 Why is it important?

Many data analyst interviews aren't pure SQL/Python tests — they hand you a vague business problem or a raw dataset and watch how you *structure your thinking*. This is often the stage that most directly separates candidates who can execute a known task from those who can independently figure out what needs to be done in the first place — a core, differentiating analyst skill.

## Core concept

### Structuring ambiguity
Break a vague prompt ("our signups dropped last month, what happened?") into a **concrete, answerable plan** before diving into any data — this mirrors [Data Thinking](/skills/data-thinking) applied directly under interview conditions and time pressure.

### Stating assumptions
Name what you're assuming **out loud**, instead of silently guessing and hoping it's right. If a dataset lacks a clear definition for something (e.g., what counts as an "active" user), state your assumption explicitly and proceed — an interviewer would much rather hear a stated, reasonable assumption than watch you get stuck on ambiguity, or worse, silently make a poor assumption that skews the whole analysis.

### Prioritizing under limited time
A real case study rarely allows time to check everything — identify the 1-2 highest-leverage things to check first, given the time available, rather than trying to be exhaustive and running out of time before reaching any conclusion.

### Ending with a recommendation
Close with what you'd actually **do** about the finding, not just what you found — mirroring [Storytelling](/skills/storytelling)'s recommendation principle, applied specifically to a live interview setting.

## Syntax / Formula / Structure

A repeatable structure for any open-ended case prompt:

\`\`\`
1. Restate the problem in your own words
2. Propose a structure/plan: what would you check, and in what order?
3. State assumptions explicitly wherever the prompt is ambiguous
4. Work through your plan, prioritizing the highest-leverage checks first
5. State a finding — even a partial or preliminary one if time is short
6. End with a specific, actionable recommendation
\`\`\`

## 📊 Example

**Prompt:** "Our app's weekly signups dropped 15% last month. What would you look into?"

**Structured response:**
> "First, I'd confirm the drop is real and not a tracking issue — checking for any changes to how signups are logged. [assumption/check #1] Then I'd segment the drop by channel, since a company-wide 15% drop concentrated in one channel points to a very different cause than a drop spread evenly across all channels. [prioritized plan] I'll assume 'signups' means completed account creation, not just started — I'd confirm that definition if this were a real project. [stated assumption] Given the time I have, I'd prioritize checking the two largest channels first, since they'd explain the most of the drop if something changed there. [prioritization] If I found the drop concentrated in paid search specifically, I'd recommend checking recent changes to that channel's spend or targeting before looking anywhere else."

**Explanation:** This response demonstrates a clear plan, explicit assumptions, sensible prioritization under a time constraint, and ends with a concrete next step — exactly what a case-study interviewer is evaluating, even without ever touching real data.

## Multiple examples

**Beginner:** Practicing structuring a simple prompt ("why did revenue drop?") into a plan before attempting to answer it.
**Intermediate:** A timed 30-minute take-home dataset exercise, ending with a written one-paragraph recommendation.
**Real-world:** A live case interview where the interviewer deliberately withholds some information — successfully navigating this by stating a reasonable assumption ("I'll assume this is a B2C, not B2B, product based on the data shown") and proceeding, rather than stalling because the prompt isn't fully specified.

## ⚠️ Common mistakes

- **Diving straight into calculations without a stated plan first.** This can look like doing work, but it's much harder for an interviewer to follow or evaluate your reasoning without an explicit structure.
- **Silently guessing at an ambiguous detail** instead of stating the assumption out loud — this hides your reasoning process, which is exactly what's being evaluated.
- **Trying to check everything exhaustively** in a time-limited case, running out of time before reaching any conclusion or recommendation at all.
- **Ending with only a finding, no recommendation.** "Revenue is down in the West region" is incomplete without "...so I'd recommend investigating the West sales team's recent activity first."

## Real-world Data Analyst use cases

- **The case-study/take-home stage** of many real data analyst hiring processes — a direct rehearsal for it.
- **On-the-job ambiguous requests:** the same structuring skill applies directly whenever a stakeholder hands you a vague ask like "look into why X happened."

## Related concepts

\`\`\`
Data Thinking → Business Understanding
  ↓
Case Study & Take-Home Assignments ← you are here
  ↓
Technical Interview Practice
  ↓
Job Preparation
\`\`\`

## Practice questions

### Easy
1. Why is stating an assumption out loud better than silently guessing during a case interview?

### Medium
2. Given the prompt "our checkout conversion dropped last week," outline the structure of your response before any data is available.

### Interview/Advanced
3. You're given a 20-minute case study but realize the full analysis would genuinely take hours. How do you handle the time constraint?

<details><summary><strong>Answer / Solution</strong></summary>

1. It makes your reasoning process visible and gives the interviewer a chance to correct a wrong assumption immediately, rather than silently building an entire analysis on a guess that might be wrong — and it demonstrates the same transparency a real stakeholder would want on the job.
2. Example: confirm the drop is real → segment by device/traffic source/region to isolate where it's concentrated → check for an obvious cause (a recent change, an outage) → state a specific, testable hypothesis → close with a recommendation.
3. Prioritize the highest-leverage checks first (the ones most likely to explain the most of the observed change), explicitly state that you're prioritizing given the time constraint, and present a preliminary finding and recommendation based on what was covered — rather than attempting to be exhaustive and running out of time with nothing concrete to show.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What is a case-study interview actually evaluating?**
Short answer: Structured thinking under ambiguity and time pressure — how you break down a vague problem, state assumptions, prioritize, and reach an actionable conclusion, not just whether you arrive at one specific "correct" answer.

### Conceptual questions
**Q: Why do interviewers often deliberately leave a case prompt ambiguous?**
Short answer: Real business problems are genuinely ambiguous — the interviewer is testing whether a candidate can navigate that ambiguity productively (stating assumptions, prioritizing) rather than needing every detail spelled out before making progress.

### Scenario-based questions
**Q: Partway through a case study, you realize your initial assumption was likely wrong. What do you do?**
Short answer: Say so directly, briefly explain what changed your thinking, and adjust your approach — this demonstrates real-time self-correction, which interviewers generally view very favorably compared to silently pushing forward on a flawed assumption.

### Practical questions
**Q: How would you end a case-study response if you ran out of time before reaching a fully confident conclusion?**
Short answer: State the preliminary finding and its confidence level honestly, name what additional information or time would be needed to be more certain, and still provide a specific, actionable next step based on the evidence gathered so far.

## Interview traps / tricky points

- A response that's all calculation with no stated structure or assumptions is a common way strong analytical instincts fail to come across clearly in an interview setting.
- Ending without a recommendation is one of the most common, easily-fixed gaps in an otherwise strong case-study answer.

## Best practices

- Always state a plan/structure before diving into any calculation.
- State assumptions explicitly and proceed, rather than stalling on ambiguity.
- Prioritize the highest-leverage checks first when time is limited.
- Always end with a specific, actionable recommendation, even under a tight time constraint.

---

### ⚡ Quick Revision

**Structure first** → state your plan before any calculation
**State assumptions** → out loud, not silently guessed
**Prioritize** → highest-leverage checks first under time pressure
**Always end with:** a specific, actionable recommendation, not just a finding
`);

setNote('job-preparation', `
## 🎯 What is it?

**Job preparation** is preparing to talk about your projects and skills under real interview conditions — resume framing, behavioral questions, technical questions, and mock interviews — bringing together every skill from the Portfolio and earlier Job Preparation topics into interview-ready form.

## 💡 Why is it important?

Being able to *do* the work and being able to *demonstrate* that you can do the work under interview pressure are genuinely different skills. A strong analyst who hasn't practiced presenting themselves can still struggle in an interview — this stage closes that specific gap deliberately, rather than leaving it to chance on interview day.

## Core concept

### Resume framing
Outcome-based bullets ("reduced X by Y%"), not a list of tasks performed — see [Resume & LinkedIn Optimization](/skills/resume-linkedin) for full depth.

### Behavioral interviews — the STAR structure
A structured way to answer "tell me about a time..." questions:

| Part | Content |
|---|---|
| **Situation** | Brief context — what was the setting? |
| **Task** | What was your specific responsibility or goal? |
| **Action** | What did *you* specifically do (not "we")? |
| **Result** | What was the outcome, ideally quantified? |

### Technical interviews
Talking through a SQL or Python problem out loud while writing it — see [Technical Interview Practice](/skills/technical-interview-practice) for full depth.

### Walking through a project
Summarizing a portfolio project clearly and confidently in **under 3 minutes** — a compressed, spoken version of the [Case Study Presentations](/skills/case-study-presentations) structure (problem → approach → findings → impact), delivered live and conversationally rather than on slides.

## Syntax / Formula / Structure

A STAR-structured behavioral answer template:

\`\`\`
Situation: "In my [role/project], we faced [brief context]..."
Task:      "I was responsible for [specific goal/responsibility]..."
Action:    "I [specific steps YOU took, not the team in general]..."
Result:    "This led to [quantified outcome], and [any follow-on impact]."
\`\`\`

## 📊 Example

**Behavioral question:** "Tell me about a time you found an error in your own analysis."

**Weak answer (no structure, vague):** "Yeah, that's happened before, I just fix it and move on."

**Strong answer (STAR):**
> "**Situation:** While building a churn-rate dashboard for a portfolio project, I noticed the churn numbers looked unusually high. **Task:** I needed to figure out whether this was a real trend or a bug before presenting it. **Action:** I traced it back to my join logic — I was double-counting customers who'd changed plans mid-month, inflating the denominator. I rewrote the join to dedupe on customer ID first. **Result:** The corrected churn rate was 40% lower than my initial (wrong) number — a mistake that would have led to a completely wrong conclusion if I'd presented it as-is, which reinforced why I always sanity-check totals against a manual spot check now."

**Explanation:** The STAR-structured answer gives a specific, concrete story with a real technical detail and a genuine lesson learned — far more convincing and memorable than a vague, generic response.

## Multiple examples

**Beginner:** Preparing one STAR-structured answer for a common question ("tell me about a challenge you faced").
**Intermediate:** Practicing a 3-minute spoken walkthrough of a single portfolio project, timed.
**Real-world:** A full mock interview with a peer or a free platform, covering resume questions, one behavioral question, and one live technical problem — then reviewing afterward for two specific things to improve, rather than treating the mock interview as a one-time pass/fail event.

## ⚠️ Common mistakes

- **Answering behavioral questions vaguely or generically**, without a specific story or structure — this is forgettable and doesn't actually demonstrate the underlying skill being probed.
- **Rambling for 10+ minutes when walking through a project**, losing the interviewer's attention before reaching the actual finding — the 3-minute discipline exists specifically to prevent this.
- **Never actually rehearsing out loud**, so the first time you're saying these answers out loud is in the real interview — this shows in the delivery.
- **Treating a single mock interview as "done" preparation** instead of using it to identify and fix specific weaknesses before the real thing.

## Real-world Data Analyst use cases

- **Every stage of a real interview loop:** resume screen, behavioral round, technical round, and project walkthrough all draw directly on these prepared skills.
- **Networking conversations:** the same 3-minute project walkthrough is useful well beyond formal interviews.

## Related concepts

\`\`\`
Resume & LinkedIn Optimization
Technical Interview Practice
Case Study & Take-Home Assignments
  ↓
Job Preparation ← you are here (brings these together)
  ↓
Salary Negotiation
\`\`\`

## Practice questions

### Easy
1. What do the four letters of STAR stand for?

### Medium
2. Rewrite this vague behavioral answer opener using STAR: "I'm good at handling pressure, like that one time with a tight deadline."

### Interview/Advanced
3. Why is a 3-minute limit useful for practicing a project walkthrough, similar to the 5-slide limit in case study presentations?

<details><summary><strong>Answer / Solution</strong></summary>

1. Situation, Task, Action, Result.
2. Example: "**Situation:** I was two days from a stakeholder deadline when I discovered the underlying data had a formatting issue. **Task:** I needed to fix it without missing the deadline. **Action:** I wrote a quick validation script to catch and flag every affected row, fixed the formatting issue at its source, and re-ran the analysis. **Result:** I delivered on time, and the validation script became a reusable check for future reports."
3. It forces prioritizing the most important information — the finding and its impact — over exhaustive process detail, mirroring the same discipline that makes any communication clear and compelling under real time constraints (like an actual interview).

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why practice a project walkthrough specifically under a time limit?**
Short answer: Real interviews are time-constrained, and practicing under that constraint forces prioritizing the most important information (finding, impact) over exhaustive detail — the same skill needed live, under pressure.

### Conceptual questions
**Q: Why does the STAR structure make a behavioral answer more convincing?**
Short answer: It ensures the answer includes a specific, concrete story with your individual actions and a clear, ideally quantified result — rather than a vague, generic claim that's hard to evaluate or remember.

### Scenario-based questions
**Q: You're asked a behavioral question you haven't specifically prepared for. How do you respond in the moment?**
Short answer: Take a brief moment to think of a genuine, relevant experience, and structure your answer using STAR on the fly — even an imperfect but structured, specific answer is much stronger than a rambling, unstructured one.

### Practical questions
**Q: What are the two things you should always do after a mock interview?**
Short answer: Identify specific, concrete things to improve (not just "do better"), and actually practice those specific improvements before the next attempt or the real interview.

## Interview traps / tricky points

- A behavioral answer using "we" instead of "I" throughout makes it unclear what you specifically contributed — interviewers often probe this directly with a follow-up.
- Rehearsing an answer so heavily it sounds robotic/memorized can backfire — the goal is a clear structure, not a word-for-word script.

## Best practices

- Prepare STAR-structured answers for the most common behavioral questions in advance.
- Practice a project walkthrough out loud, timed, more than once.
- Do at least one full mock interview, and use it to find specific, fixable gaps.
- Use "I," not "we," when describing your specific individual contribution.

---

### ⚡ Quick Revision

**STAR** → Situation, Task, Action, Result — for behavioral questions
**Project walkthrough** → practiced, under 3 minutes, finding-first
**Mock interviews** → use them to find specific gaps, not just as a one-time test
`);

setNote('salary-negotiation', `
## 🎯 What is it?

**Salary negotiation** is researching a fair market range and negotiating an offer professionally — instead of accepting the first number offered, or negotiating blind with no research to back up a counter.

## 💡 Why is it important?

The negotiation conversation happens once per offer. Going in without research or a plan is the single most common way candidates leave money on the table — and unlike almost every other job-search skill, a single well-prepared conversation can have an outsized, immediate, and compounding financial impact (since future raises are often calculated as a percentage of the starting number).

## Core concept

### Researching a market range
Use public salary data (aggregator sites, industry surveys) and role/location comparisons to know what "fair" actually looks like for the specific role, level, and location **before** any negotiation conversation happens — negotiating without this is negotiating blind.

### The negotiation conversation
- **Avoid naming a number first when possible.** Whoever names a number first sets an anchor — if you go first and guess low, you may leave money on the table; if the employer goes first, you have more room to negotiate up from their number.
- **When asked "what are your salary expectations?"** before an offer, it's reasonable to redirect: state you're focused on finding the right fit and would like to understand the role's budgeted range first, or give a well-researched range (not a single number) if pressed.
- **Timing matters** — negotiate after receiving a formal offer, not before, when you have the most leverage (the company has already decided they want you).

### Beyond base salary
Signing bonus, equity, remote flexibility, extra PTO, and start date are all real, negotiable levers besides the base number — especially useful when a company has limited flexibility on base salary specifically but more flexibility elsewhere.

## Syntax / Formula / Structure

A professional negotiation response template:

\`\`\`
"Thank you for the offer — I'm excited about the role. Based on my research
into [role] positions at [comparable companies/level] in [location], and
given my experience with [specific relevant skill/outcome], I was hoping
we could discuss a base closer to $[X]. Is there flexibility there, or
in [other lever, e.g., signing bonus/equity]?"
\`\`\`

## 📊 Example

**Scenario:** An offer comes in at $65,000 for a role where researched market range is $70,000–$80,000 for the specific level and location.

**Weak response:** Accepting immediately without any research or counter, or countering with no specific number or reasoning ("can you do better?").

**Strong response:**
> "Thank you so much for the offer — I'm genuinely excited about this role. Based on my research into data analyst roles at similar companies in [location], and my experience with [a specific, relevant project/skill], I was hoping we could discuss a base salary closer to $75,000. Is there room to move on that, or on the signing bonus if the base is fixed?"

**Explanation:** The strong response is specific (a researched number, not a vague ask), professional in tone, grounded in evidence (comparable roles, specific relevant experience), and offers a fallback lever (signing bonus) if the base truly can't move — giving the employer an easy, low-friction way to say yes to something.

## Multiple examples

**Beginner:** Researching a realistic salary range for a specific role/location before receiving any offer, so you're prepared regardless of when the question comes up.
**Intermediate:** Practicing a response to "what are your salary expectations?" that redirects to the role's budgeted range rather than naming a number first.
**Real-world:** Receiving a lowball offer, responding professionally with a specific researched counter-range and a note about a particularly relevant piece of experience, and separately asking about a signing bonus as a fallback if the base salary genuinely has no room to move.

## ⚠️ Common mistakes

- **Accepting the first offer without any research or counter**, especially when it's below a realistic market range — most employers expect some negotiation and build room into an initial offer.
- **Naming a number first without any research behind it**, potentially anchoring far below what the role could actually support.
- **Being vague or apologetic in the ask** ("I don't know, maybe a little more if that's okay?") instead of a specific, professionally confident, evidence-backed number.
- **Only negotiating base salary**, ignoring other real levers (signing bonus, equity, start date, remote flexibility) that might have more room to move.

## Real-world Data Analyst use cases

- **Every job offer received** — this conversation applies regardless of company size or seniority level.
- **Internal promotions/raises:** the same research-and-ask discipline applies to negotiating a raise, not just a new offer.

## Related concepts

\`\`\`
Resume & LinkedIn Optimization
Technical Interview Practice
Case Study & Take-Home Assignments
Job Preparation
  ↓
Salary Negotiation ← you are here (closes the Job Preparation stage)
\`\`\`

## Practice questions

### Easy
1. Why is it generally better to avoid naming a salary number first, if possible?

### Medium
2. An offer comes in $10K below your researched market range. Draft a one-sentence, professional response asking for more.

### Interview/Advanced
3. A company says the base salary is completely fixed with no flexibility. What would you try negotiating next?

<details><summary><strong>Answer / Solution</strong></summary>

1. Whoever states a number first sets an anchor for the rest of the conversation — going first risks anchoring too low (leaving money on the table) if you don't yet know the employer's actual budgeted range.
2. Example: "Thank you for the offer — based on my research into similar roles in this market, I was hoping we could discuss a base closer to $[researched number]; is there flexibility there?"
3. Non-base levers — a signing bonus, additional equity, extra PTO, a flexible/remote work arrangement, or an accelerated performance review timeline — any of which can add real value even if the base number genuinely can't move.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why does researching a market range matter before negotiating?**
Short answer: It grounds the negotiation in evidence rather than a guess, making a counter-offer more credible and defensible, and prevents either underselling yourself or asking for something wildly unrealistic.

### Conceptual questions
**Q: Why is timing important in salary negotiation — why wait until after a formal offer?**
Short answer: Leverage is highest after a formal offer, since the company has already decided they want you specifically — negotiating too early, before that decision, generally comes with much less leverage.

### Scenario-based questions
**Q: You're asked for your salary expectations very early in the interview process, before any offer. How do you respond?**
Short answer: Redirect professionally — express that you're focused on finding the right fit first and would appreciate understanding the role's budgeted range, or provide a well-researched range rather than a single number if pressed to answer.

### Practical questions
**Q: How would you research a realistic salary range for a data analyst role in a specific city?**
Short answer: Use public salary aggregator data and industry surveys, filtering by role, experience level, and location specifically, and cross-reference a few sources rather than relying on just one to get a more reliable range.

## Interview traps / tricky points

- Negotiating apologetically or vaguely undermines an otherwise reasonable, well-researched ask — tone and specificity both matter, not just the underlying research.
- Focusing only on base salary can leave real value on the table when other levers (signing bonus, equity, PTO) might have more flexibility.

## Best practices

- Always research a realistic market range before any negotiation conversation.
- Avoid naming a number first when possible; let the employer anchor first if you can.
- Negotiate professionally and specifically, backed by research and relevant experience.
- Consider non-base levers (signing bonus, equity, PTO, remote flexibility) when base salary has limited room to move.

---

### ⚡ Quick Revision

**Research first** → know a realistic market range before any conversation
**Avoid anchoring first** → let the employer name a number when possible
**Negotiate after a formal offer** → leverage is highest then
**Beyond base:** signing bonus, equity, PTO, and flexibility are all real, negotiable levers
`);
