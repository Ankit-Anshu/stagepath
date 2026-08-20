import { setNote } from './_lib.mjs';

setNote('resume-linkedin', `
## 🎯 What is it?

Framing your **resume and LinkedIn profile** around measurable outcomes and the specific keywords a real data analyst job posting looks for, instead of a generic list of tasks or a one-size-fits-all summary.

## 💡 Why is it important?

Most applications are filtered before a human ever reads them — by an applicant tracking system (ATS) scanning for relevant keywords, or by a recruiter spending seconds per resume. A resume that reads well to a person *and* clears keyword filters gets you to the interview at all — everything else in a job search depends on clearing this first gate.

## Core concept

### Outcome-based bullets
Rewrite a **task** ("built dashboards") as an **outcome** ("cut weekly reporting time by 40% by building an automated Power BI dashboard") — a task describes what you did; an outcome describes the *impact* it had, which is what an employer actually cares about.

| Task-based (weak) | Outcome-based (strong) |
|---|---|
| "Analyzed sales data" | "Identified a $40K/year revenue opportunity by analyzing checkout drop-off across 50K orders" |
| "Built dashboards in Power BI" | "Cut weekly reporting time from 4 hours to 20 minutes by building an automated Power BI dashboard" |
| "Used SQL to query databases" | "Wrote SQL queries that reduced a recurring monthly report's turnaround from 2 days to same-day" |

### Matching a job posting
Mirror the specific tools and language a real posting uses (e.g., if it says "Power BI," don't only write "BI tools") — honestly, based on real experience, not by inventing skills you don't have. This directly helps with both ATS keyword filters and a human reviewer's quick scan.

### A LinkedIn profile that isn't generic
A headline and summary specific enough that it couldn't apply to just anyone — "Aspiring data analyst passionate about data" describes thousands of candidates identically; a specific focus and a concrete example doesn't.

## Syntax / Formula / Structure

A reusable formula for an outcome-based bullet:

\`\`\`
[Action verb] + [what you did] + [specific, measurable result] + [how/tool used]

Example: "Reduced monthly reporting turnaround from 3 days to same-day
          by automating a SQL-based ETL pipeline"
\`\`\`

## 📊 Example

**Before (task-based):** "Responsible for creating reports and dashboards for the marketing team."

**After (outcome-based):** "Built a marketing performance dashboard in Tableau that cut weekly reporting prep time by 5 hours and was adopted by 3 additional teams within 2 months."

**Explanation:** The "after" version quantifies the impact (5 hours saved), adds a credibility signal (adopted by 3 more teams), and states the specific tool (Tableau) — all things a hiring manager scans for and an ATS can match against a posting's keywords.

## Multiple examples

**Beginner:** Rewriting one vague bullet ("worked with data") into a specific, outcome-based one.
**Intermediate:** Comparing a resume's current keyword set against 3 real job postings in the target field to identify consistent gaps (e.g., "SQL" appears in every posting but isn't on the resume at all, despite genuine experience).
**Real-world:** Tailoring the same base resume slightly differently for two different job postings — one emphasizing SQL/dashboarding experience, another emphasizing Python/automation experience — each version honestly reflecting the same underlying experience, just reordered and reworded to match what each specific posting emphasizes.

## ⚠️ Common mistakes

- **Listing tasks instead of outcomes.** "Used SQL and Excel" says nothing about impact — pairing every bullet with a measurable result is what makes a resume compelling.
- **A generic LinkedIn summary** that could describe any candidate ("passionate about data and solving problems") — it's forgettable and wastes the space.
- **Inventing or exaggerating skills to match a posting's keywords.** This backfires immediately in a technical interview and damages trust.
- **A resume that's too long or unfocused**, including every job/skill ever held instead of trimming to what's actually relevant to the target role.

## Real-world Data Analyst use cases

- **Any job application:** the resume is the first (and often only) piece of evidence a recruiter sees before deciding whether to move forward.
- **Recruiter outreach:** a specific, well-optimized LinkedIn profile is what surfaces in a recruiter's keyword search in the first place.

## Related concepts

\`\`\`
Portfolio Building → Case Study Presentations
  ↓
Resume & LinkedIn Optimization ← you are here
  ↓
Technical Interview Practice / Case Study & Take-Home Assignments
  ↓
Job Preparation → Salary Negotiation
\`\`\`

## Practice questions

### Easy
1. Rewrite "responsible for data cleaning" as an outcome-based bullet (you can invent a plausible, reasonable result).

### Medium
2. A job posting repeatedly mentions "Power BI" and "stakeholder communication," but your resume doesn't use either phrase despite having relevant experience. What would you do?

### Interview/Advanced
3. Why can matching a job posting's keywords too aggressively (without real substance behind them) backfire later in the process?

<details><summary><strong>Answer / Solution</strong></summary>

1. Example: "Cleaned and validated a 30K-row customer dataset, reducing downstream reporting errors by identifying and fixing 200+ duplicate and inconsistent records."
2. Rewrite the relevant bullets to explicitly use those exact terms (honestly, since the experience already exists) — this helps both automated keyword filters and a human reviewer quickly recognize the match.
3. If the resume implies a depth of experience that isn't real, it typically becomes obvious in a technical interview or on the job itself — this damages trust and can cost the offer even after clearing the initial resume screen, which is a worse outcome than being honestly specific from the start.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why should resume bullets state outcomes instead of tasks?**
Short answer: Outcomes demonstrate the actual impact and value of your work, which is what a hiring manager is trying to assess — a list of tasks alone doesn't show whether the work actually mattered.

### Conceptual questions
**Q: Why does tailoring a resume to each specific job posting matter, even if it's more work?**
Short answer: Applicant tracking systems and time-constrained recruiters both scan for relevant, specific keywords — a generic resume is less likely to surface as a strong match for any single posting, even if the underlying experience is genuinely relevant.

### Scenario-based questions
**Q: You have strong SQL skills but your current resume buries them in a long, unfocused bullet list. How would you fix it for a SQL-heavy role?**
Short answer: Move SQL-related outcomes to the top of the relevant section, quantify their impact specifically, and trim less relevant bullets so the SQL experience is immediately visible to a quick scanner.

### Practical questions
**Q: How would you write a LinkedIn headline that's specific rather than generic?**
Short answer: Include your specific focus area and a standout skill or result, e.g., "Data Analyst | SQL & Power BI | Turned a messy sales dataset into a $40K/year retention finding" rather than a generic "Data Enthusiast | Aspiring Analyst."

## Interview traps / tricky points

- A resume padded with unfamiliar keywords can lead directly to a technical interview question you can't actually answer — never list a skill you can't discuss in depth.
- Recruiters often notice resumes clearly copy-pasted without any tailoring to their specific posting — some tailoring, even light, signals genuine interest.

## Best practices

- Pair every bullet with a specific, measurable outcome where possible.
- Tailor keywords honestly to each specific job posting's language.
- Write a LinkedIn summary specific enough that it couldn't describe just anyone.
- Trim the resume to what's actually relevant for the target role.

---

### ⚡ Quick Revision

**Outcome-based bullet** → action + specific measurable result + tool/method
**Keyword matching** → mirror a posting's real language, honestly
**LinkedIn** → specific headline/summary, not generic
**Never:** list a skill on a resume you can't discuss in a technical interview
`);

setNote('technical-interview-practice', `
## 🎯 What is it?

**Technical interview practice** is solving SQL and Python problems **out loud**, under time pressure, the way a real technical screen actually works — not just solving them correctly in silence, alone, with unlimited time.

## 💡 Why is it important?

Knowing SQL and being able to write it fluently *while explaining your thinking to an interviewer* are genuinely different skills. Many strong analysts who can solve a problem perfectly on their own struggle the first few times they try to narrate their reasoning simultaneously under time pressure — this topic closes that specific, very common gap.

## Core concept

### Narrating while coding
Explain your plan *before* and *while* writing the query or code, not just presenting a finished answer silently. An interviewer is evaluating your thinking process, not just the final correct answer — silence gives them nothing to evaluate except the end result, and makes it much harder for them to help if you're heading down a wrong path.

### Clarifying the question first
Ask about edge cases and assumptions **before** writing a single line of code. Real interview prompts are often deliberately a bit ambiguous — asking a good clarifying question ("should this include cancelled orders?") is itself a signal of a mature analytical process, not a sign of not understanding the question.

### Self-testing
Check your own answer against at least one edge case before declaring it done, rather than stopping the moment it "looks right." This mirrors real analyst work — verifying your own output is a core professional habit, not an interview-specific performance.

## Syntax / Formula / Structure

A repeatable structure for any live technical problem:

\`\`\`
1. Restate the problem in your own words
2. Ask 1-2 clarifying questions (edge cases, assumptions, data shape)
3. State your plan out loud before writing any code
4. Write the code, narrating key decisions as you go
5. Test against at least one edge case before declaring it done
6. State any remaining assumptions or limitations
\`\`\`

## 📊 Example

**Prompt:** "Write a query to find customers who placed more than 3 orders in the last 30 days."

**Weak approach:** Silently writes the query, presents it, done.

**Strong approach (narrated):**
> "Before I start — does 'orders' include cancelled ones, or only completed? [clarifying question] I'll assume completed only, since that's the more common intent, but I'll note the assumption. My plan is to filter to the last 30 days, group by customer, count orders, and filter to counts over 3 using HAVING. [states plan] ...[writes query]... Let me check an edge case — what if a customer has exactly 3 orders? My condition should be strictly greater than 3, which correctly excludes them, matching the 'more than 3' wording."

**Explanation:** The narrated approach gives the interviewer visibility into the reasoning at every step, catches a subtle wording edge case (exactly 3 vs. more than 3) proactively, and demonstrates the same rigor a real analyst would apply on the job.

## Multiple examples

**Beginner:** Practicing narrating a simple SELECT/WHERE query out loud, even when solving it alone.
**Intermediate:** A timed 20-minute mock SQL problem, recorded, then reviewed afterward for clarity and pacing.
**Real-world:** A pandas problem where the interviewer deliberately gives an ambiguous prompt ("find the top customers") — asking "top by what — total spend, order count, or something else?" before writing any code, rather than guessing silently and potentially solving the wrong problem entirely.

## ⚠️ Common mistakes

- **Solving the problem in silence** and only presenting the finished answer — this gives an interviewer almost nothing to evaluate except the final result, and no chance to course-correct if you're heading in the wrong direction.
- **Writing code immediately without asking any clarifying questions**, then having to redo work after realizing an assumption was wrong.
- **Declaring a solution "done" without testing it against any edge case** — a real interviewer will often probe this directly if you don't address it yourself.
- **Freezing up when stuck**, instead of narrating the struggle ("I'm not sure this handles NULLs correctly, let me think through that") — interviewers generally respond far better to visible, working-through-it reasoning than silence.

## Real-world Data Analyst use cases

- **The technical screen stage** of virtually every data analyst hiring process — this is a direct rehearsal for it.
- **On-the-job pairing/code review**, where explaining your reasoning to a teammate is a routine, transferable version of the same skill.

## Related concepts

\`\`\`
SQL — Window Functions → Pandas
  ↓
Technical Interview Practice (SQL & Python) ← you are here
  ↓
Case Study & Take-Home Assignments
  ↓
Job Preparation
\`\`\`

## Practice questions

### Easy
1. Why does narrating your approach matter, even if you'd get the same correct final answer either way?

### Medium
2. You're given an ambiguous prompt: "find our best customers." What would you do before writing any code?

### Interview/Advanced
3. You realize partway through writing a query that your initial approach won't correctly handle NULL values. What's the best way to handle this out loud, live?

<details><summary><strong>Answer / Solution</strong></summary>

1. It gives the interviewer visibility into your reasoning process, which is what's actually being evaluated — a correct final answer with no visible reasoning provides much weaker evidence of genuine understanding than a clearly narrated approach.
2. Ask a clarifying question about what "best" means (highest total spend? most frequent? highest lifetime value?) and over what time window, before writing any code — this prevents solving the wrong problem based on a guessed interpretation.
3. Say so directly and adjust — e.g., "I realize this won't handle NULLs correctly here, let me fix that with a COALESCE/IS NOT NULL check" — interviewers respond well to catching and fixing your own issue transparently, since it demonstrates real self-review, exactly the skill being tested.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why do technical interviews evaluate how you talk through a problem, not just whether you get the right answer?**
Short answer: The narrated reasoning reveals your actual problem-solving process, which is a better predictor of on-the-job performance than a single correct answer produced in silence — it also lets the interviewer see how you'd communicate and collaborate with a real team.

### Conceptual questions
**Q: Why is asking a clarifying question a strength, not a weakness, in a technical interview?**
Short answer: Real-world prompts and requests are often genuinely ambiguous — asking a good clarifying question demonstrates the same rigor and judgment a real analyst applies before diving into an actual project, rather than guessing and potentially solving the wrong problem.

### Scenario-based questions
**Q: You're 15 minutes into a 20-minute problem and realize your current approach is more complicated than needed. What do you do?**
Short answer: Say so out loud, briefly explain the simpler approach you now see, and pivot — an interviewer generally values recognizing and correcting course more than silently pushing through a needlessly complex solution.

### Practical questions
**Q: How would you test your own SQL query for an edge case before declaring it finished?**
Short answer: Mentally (or actually) run through a boundary case relevant to the problem — an empty result set, a NULL value, a tie, or the exact threshold value (e.g., exactly 3 orders in a "more than 3" query) — and confirm the query handles it as intended.

## Interview traps / tricky points

- Interviewers sometimes give a deliberately underspecified prompt specifically to see whether a candidate asks a clarifying question — silently guessing is a common, avoidable way to lose points.
- Going silent when stuck is worse than narrating a genuine struggle — interviewers are usually looking for how you handle being stuck, not a flawless, uninterrupted performance.

## Best practices

- Always restate the problem and ask at least one clarifying question before writing code.
- Narrate your plan before writing, and key decisions while writing.
- Test against at least one edge case before declaring a solution finished.
- Practice under a real time limit, ideally recorded, to build comfort with the format.

---

### ⚡ Quick Revision

**Narrate** → explain your plan before and while coding, not just the final answer
**Clarify first** → ask about edge cases/assumptions before writing any code
**Self-test** → check at least one edge case before declaring a solution done
**If stuck:** narrate the struggle, don't go silent
`);
