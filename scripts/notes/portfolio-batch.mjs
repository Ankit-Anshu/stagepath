import { setNote } from './_lib.mjs';

setNote('git-version-control', `
## 🎯 What is it?

**Git** is a tool for tracking changes to a project over time — saving snapshots (**commits**) you can review, compare, or revert to. **GitHub** is a website that hosts Git repositories online, making your work visible and reviewable by anyone with the link.

Think of Git like a video game's save system: instead of one single save file that gets overwritten, you keep a full history of every meaningful checkpoint, with a note on what changed at each one.

## 💡 Why is it important?

- Every portfolio project needs to live somewhere reviewable — a hiring manager can't evaluate a project that only exists on your laptop.
- Git is how virtually every data team manages code and collaborates, making it a baseline expectation for any technical role, not a nice-to-have.
- A clean, meaningful commit history is itself a signal of how you work — messy, unexplained commits (or one giant "final version" commit) read very differently than a clear, incremental story.

## Core concept

### Commits & history
A commit is a saved snapshot of your project at a point in time, with a message describing what changed. A sequence of good commits tells the story of how a project was built, step by step — genuinely useful both for you (to undo a mistake) and for anyone reviewing your work.

### Writing clear commit messages
A commit message should explain *what* changed and *why*, specifically enough that a stranger (or you, six months later) understands it without needing to open the code. "update" or "fix stuff" convey nothing; "Fix incorrect revenue calculation in monthly summary" does.

### Branches
A branch lets you work on a change in isolation from the main project, then **merge** it back once it's ready — useful for trying something without risking the working version, and standard practice on any real team project.

### Pushing to GitHub
\`git push\` publishes your local repository's commits to GitHub, making the project (and its full history) visible and reviewable online.

## Syntax

\`\`\`bash
git init                              # start tracking a new project
git add file.py                       # stage a specific file's changes
git commit -m "Add revenue by region analysis script"
git branch feature-cleanup            # create a new branch
git checkout feature-cleanup          # switch to it
git merge feature-cleanup             # merge it back into the current branch
git push origin main                  # publish commits to GitHub
\`\`\`

## 📊 Example

A messy vs. clean commit history for the same project:

**Messy:** \`"update"\`, \`"fix"\`, \`"more fixes"\`, \`"final version"\`, \`"final version 2"\`

**Clean:**
\`\`\`
1. "Add initial data cleaning script for raw sales export"
2. "Fix incorrect handling of missing region values"
3. "Add revenue-by-region summary and chart"
4. "Add README with problem statement and findings"
\`\`\`

**Explanation:** The clean history reads like a table of contents for how the project was built — a reviewer can understand the project's evolution just by scanning the commit log, without opening a single file.

## Multiple examples

**Beginner:** Initializing a repository for a single script and making one commit.
**Intermediate:** Making a sequence of 3-4 meaningful commits as a project is built, each with a clear, specific message.
**Real-world:** Creating a branch to try an alternative cleaning approach, keeping the working main branch untouched until the new approach is verified, then merging it in — the same low-risk experimentation workflow used on real data teams.

## ⚠️ Common mistakes

- **One giant commit at the end** ("final project") instead of an incremental history — this hides the actual process and makes it impossible to review individual changes.
- **Vague commit messages** like "update" or "fix" that convey no information about what actually changed.
- **Committing sensitive data or credentials** (like an API key) directly into a public repository — a real security mistake, not just a style issue.
- **Never actually pushing to GitHub**, leaving the project invisible to anyone reviewing a portfolio.

## Real-world Data Analyst use cases

- **Any portfolio project:** version-controlling and publishing analysis scripts and notebooks for review.
- **Team collaboration:** the standard way any data team tracks and reviews changes to shared analysis code.
- **Reproducibility:** being able to see exactly what changed, and why, at any point in a project's history.

## Related concepts

\`\`\`
Git & Version Control ← you are here
  ↓
Personal Portfolio Website
  ↓
Portfolio Building
  ↓
Case Study Presentations
\`\`\`

## Practice questions

### Easy
1. What's the difference between \`git add\` and \`git commit\`?

### Medium
2. Why is "final version 2" a poor commit message, even if it's technically accurate?

### Interview/Advanced
3. Why might a hiring manager care about a portfolio project's commit history, not just its final code?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`git add\` stages specific changes to be included in the next commit; \`git commit\` actually saves a snapshot of the staged changes with a descriptive message.
2. It describes nothing about what actually changed, forcing anyone reviewing the history (including future you) to open the code to understand it — a good message states the specific change and its purpose.
3. A clean, incremental commit history reveals how someone actually works and thinks through a problem step by step — it's a signal of process and habits, not just the end result, which a single "final" commit can't demonstrate.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between Git and GitHub?**
Short answer: Git is the version-control tool itself, tracking changes locally; GitHub is a website that hosts Git repositories online, making them visible and shareable.

### Conceptual questions
**Q: Why use a branch instead of just editing the main project directly?**
Short answer: A branch isolates a change so it can be tried, tested, or abandoned without risking or disrupting the working main version — it's a low-risk way to experiment before committing to a change.

### Scenario-based questions
**Q: A recruiter opens your GitHub and sees a single commit labeled "final project." What impression does this create, and how would you fix it going forward?**
Short answer: It suggests the work wasn't actually built incrementally, or that history wasn't preserved — going forward, committing in small, meaningful, well-described steps throughout a project demonstrates process, not just a finished result.

### Practical questions
**Q: How would you version-control and publish a completed data analysis project?**
Short answer: Initialize a Git repository, commit the work in a logical sequence of meaningful steps with clear messages, add a README explaining the project, and push it to a public GitHub repository.

## Interview traps / tricky points

- Committing credentials or sensitive data to a public repository is a genuine, embarrassing mistake that's easy to make accidentally — always double-check before pushing.
- A commit history entirely of "wip" or "update" messages signals the same lack of process as a single giant commit, even though it looks incremental.

## Best practices

- Commit in small, logical steps, each with a specific, descriptive message.
- Never commit credentials, API keys, or sensitive data — use a \`.gitignore\` file to exclude them.
- Push regularly so work is backed up and visible, not just saved locally.
- Use a branch for any experimental or risky change before merging it into the main version.

---

### ⚡ Quick Revision

**Commit** → a saved, described snapshot of the project
**Commit message** → should explain what changed and why, specifically
**Branch** → isolate a change before merging it back in
**Push** → publishes commits (and the full history) to GitHub for review
`);

setNote('portfolio-website', `
## 🎯 What is it?

A **personal portfolio website** is a simple, free, single-page site that links to your best 3-4 projects — giving your portfolio one clean landing page instead of a scattered list of links a recruiter has to hunt for.

## 💡 Why is it important?

A recruiter spends only seconds deciding whether to look further at a candidate. One page that shows your best work clearly beats making them dig through a GitHub profile full of every project you've ever started, including unfinished or low-quality ones.

## Core concept

### Publishing for free
Free static-site hosting (like GitHub Pages) lets you publish a working, public-URL site at zero cost — there's no reason a portfolio site should be blocked by cost or hosting complexity.

### Linking your best work
Curate your **strongest 3-4 projects**, not every project you've ever built. A page listing 15 projects of mixed quality is worse than a page showing 3 excellent ones — quantity dilutes the signal of your best work.

### A clear personal summary
A short "who I am and what I do" statement, specific enough that a recruiter understands your focus in 10 seconds — "aspiring data analyst passionate about data" is generic and forgettable; "Data analyst focused on turning messy e-commerce data into clear business decisions, with SQL and Python" is specific and memorable.

## Syntax / Formula / Structure

A minimal, effective portfolio page structure:

\`\`\`
1. Name + one-line role statement (specific, not generic)
2. 2-3 sentence summary of your focus/strengths
3. 3-4 project cards, each with:
   - Project title
   - One-line description of the problem solved
   - Link to the repo/case study
4. Contact info (email, LinkedIn, GitHub)
\`\`\`

## 📊 Example

**Weak summary:** "I'm a data enthusiast who loves working with numbers and finding insights."

**Strong summary:** "Data analyst who turns messy sales and marketing data into clear, actionable dashboards — comfortable across SQL, Python, and Power BI. Recently analyzed a 50K-row e-commerce dataset to find a $40K/year opportunity in customer retention."

**Explanation:** The strong version is specific about focus, tools, and a concrete result — it gives a recruiter something memorable to latch onto, instead of a generic statement that could apply to anyone.

## Multiple examples

**Beginner:** A single-page site with a summary and 3 project links, no styling beyond a clean template.
**Intermediate:** Adding a one-line "what problem this solved" description under each project link, instead of just a bare title.
**Real-world:** A portfolio site tested on a phone screen for load speed and readability before sharing the link on a resume or LinkedIn — since a meaningful share of recruiters will open it on mobile, not just desktop.

## ⚠️ Common mistakes

- **Listing every project ever built**, diluting the impact of the genuinely strong ones.
- **A generic, forgettable personal summary** that could describe literally any candidate.
- **A slow-loading or cluttered site**, especially on mobile — a recruiter won't wait or scroll far.
- **Broken project links** — always verify every link actually works before sharing the site.

## Real-world Data Analyst use cases

- **Job applications:** a single link on a resume/LinkedIn that gives a recruiter everything they need in one place.
- **Networking:** a quick, professional link to share in a conversation or cold outreach message.

## Related concepts

\`\`\`
Git & Version Control
  ↓
Personal Portfolio Website ← you are here
  ↓
Portfolio Building
  ↓
Case Study Presentations
\`\`\`

## Practice questions

### Easy
1. How many projects should a portfolio site typically feature, and why not more?

### Medium
2. Rewrite this generic summary to be more specific: "I love data and am eager to learn."

### Interview/Advanced
3. Why might a recruiter prefer a single portfolio page over browsing a candidate's full GitHub profile directly?

<details><summary><strong>Answer / Solution</strong></summary>

1. 3-4 — enough to show range without diluting attention across too many, including weaker, projects.
2. Example: "Data analyst who builds SQL and Python-driven dashboards to help teams find revenue opportunities in customer data — recently identified a $40K/year retention gap in an e-commerce dataset."
3. A curated page does the work of filtering for the recruiter — showing only the strongest, most relevant work — whereas a full GitHub profile requires them to sort through every repository themselves, including unfinished or low-quality ones, within the few seconds they're willing to spend.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why build a dedicated portfolio site instead of just linking to GitHub?**
Short answer: It curates your strongest work into one focused, easy-to-scan page, rather than requiring a recruiter to sift through a full GitHub profile with mixed-quality projects.

### Conceptual questions
**Q: Why does a specific personal summary work better than a generic one?**
Short answer: A specific summary is memorable and communicates your actual focus and skills immediately, while a generic one blends in with every other candidate's near-identical statement.

### Scenario-based questions
**Q: Your portfolio site lists 12 projects, several unfinished. A mentor suggests trimming it. Why would you agree?**
Short answer: A long list of mixed-quality projects dilutes attention away from your strongest work — showing only your best 3-4 projects makes a stronger, more focused impression in the limited time a recruiter spends looking.

### Practical questions
**Q: What should you check before sharing your portfolio site's link on a resume?**
Short answer: That every project link works, the site loads quickly and reads clearly on a phone screen, and the summary and project descriptions are current and specific.

## Interview traps / tricky points

- A portfolio site is often the very first impression a recruiter forms — treating it as a "someday" task rather than a priority is a common and costly mistake.
- Broken links or a slow-loading site can undermine an otherwise strong body of work before it's even seen.

## Best practices

- Curate only your 3-4 strongest projects.
- Write a specific, memorable personal summary — not a generic statement.
- Test the site on a phone before sharing it, since many recruiters will view it on mobile.
- Verify every link works before sharing.

---

### ⚡ Quick Revision

**Curate** → 3-4 best projects, not every project ever built
**Summary** → specific and memorable, not generic
**Test** → mobile load speed and readability, and every link, before sharing
`);

setNote('portfolio-building', `
## 🎯 What is it?

**Portfolio building** is turning finished projects into evidence a hiring manager can actually evaluate in minutes — a clear README, a well-organized public repository, and a short write-up per project.

## 💡 Why is it important?

A finished project nobody can find or understand is functionally the same as an unfinished one, from a hiring manager's perspective. Portfolio building is what makes learning visible to someone else — it's the bridge between "I did the work" and "I can prove I did the work, and someone can verify it in minutes."

## Core concept

### README writing
A README should present, in order: the **problem** being solved, the **approach** taken, the **tools** used, and the **key findings** — scannable by a busy hiring manager in a couple of minutes, not requiring them to read every line of code to understand what happened.

### Publishing on GitHub
A public, well-organized repository — clear folder structure, a working README, code that actually runs as described — is what makes a project genuinely reviewable, versus a private or disorganized repo that asks too much effort from a stranger.

### Choosing what to show
Select the **3-4 projects** that best represent the skills your target role actually needs — not every project you've built, and not necessarily your most *technically* complex one if it doesn't map to what the role is hiring for.

## Syntax / Formula / Structure

A strong project README structure:

\`\`\`
# Project Title

## Problem
[1-3 sentences: what business question or problem this addresses]

## Approach
[Brief: what data, what methods/tools, what steps]

## Key Findings
[The 1-3 most important results, stated plainly — with a chart if relevant]

## Tools Used
[SQL, Python, Power BI, etc.]

## How to Reproduce
[Steps or a link to the notebook/script]
\`\`\`

## 📊 Example

**Weak README:** A wall of code with no explanation, or a one-line description: "Sales analysis project."

**Strong README:**
\`\`\`
# E-Commerce Revenue Analysis

## Problem
The client wanted to know why Q2 revenue was flat despite a 20% increase
in site traffic.

## Approach
Cleaned and joined 3 months of order and traffic data in SQL; segmented
by channel and device to isolate the driver.

## Key Findings
Mobile conversion rate dropped 40% in Q2 due to a broken checkout step,
fully offsetting traffic gains. Desktop performance was stable.

## Tools Used
PostgreSQL, Python (pandas), Tableau

## How to Reproduce
See /notebooks/analysis.ipynb — run against the sample data in /data.
\`\`\`

**Explanation:** A reviewer understands the entire project's value in under a minute, without opening a single script — the finding is stated plainly, and the path to verify it (reproduction steps) is explicit.

## Multiple examples

**Beginner:** A README for a single, simple project stating problem, approach, and one key finding.
**Intermediate:** A README with a chart image embedded showing the key finding visually, alongside the text summary.
**Real-world:** Selecting 3 projects — one SQL-heavy, one Python/pandas-heavy, one dashboard-focused — deliberately chosen to demonstrate range across the specific skills a target job posting lists, rather than 3 projects that happen to overlap in the same skill.

## ⚠️ Common mistakes

- **A repository with code but no README**, forcing a reviewer to reverse-engineer the project's purpose from the code alone.
- **Burying the finding** at the bottom of a long README instead of stating it clearly near the top.
- **Showcasing every project ever built**, including unfinished or low-quality ones, diluting the strength of the best work.
- **A repository that doesn't actually run as described** — an unverified "how to reproduce" section is worse than none at all, since it actively wastes a reviewer's time.

## Real-world Data Analyst use cases

- **Job applications:** the primary evidence a hiring manager reviews before an interview.
- **Interview preparation:** a well-documented project is easy to discuss confidently, since the README itself is a rehearsed summary.

## Related concepts

\`\`\`
Git & Version Control → Personal Portfolio Website
  ↓
Portfolio Building ← you are here
  ↓
Case Study Presentations
\`\`\`

## Practice questions

### Easy
1. What four things should a project README cover, in order?

### Medium
2. A finished project has clean code but no README. Why is this a problem for a job search?

### Interview/Advanced
3. How would you choose between two strong projects when only 4 portfolio slots are available and a target job posting emphasizes SQL and dashboarding?

<details><summary><strong>Answer / Solution</strong></summary>

1. Problem, approach, tools used, and key findings — in that order, so a reviewer understands the project's value before digging into details.
2. A hiring manager typically has only minutes to review a portfolio — without a README, they can't quickly understand the problem or the value of the work, effectively making a good project invisible.
3. Prioritize the project(s) that most directly demonstrate SQL and dashboarding skills specifically, since the goal is to show the exact skills the target role is hiring for — a technically impressive but less relevant project (e.g., a machine learning project for an analyst role) is a weaker choice even if it required more work.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What should a project README include?**
Short answer: The problem being solved, the approach taken, the tools used, and the key findings — structured so a reviewer can understand the project's value in a couple of minutes.

### Conceptual questions
**Q: Why does portfolio building matter as much as the analysis work itself?**
Short answer: A project's value to a job search depends entirely on whether someone else can find, understand, and verify it — a technically strong but poorly documented project provides almost no signal to a hiring manager who won't invest the time to reverse-engineer it.

### Scenario-based questions
**Q: You have 6 completed projects but should only showcase 3-4. How do you decide which to cut?**
Short answer: Prioritize the projects that best demonstrate the specific skills your target role needs, show genuine range (not 4 versions of the same skill), and are the most polished/complete — cut projects that are redundant with a stronger one or are unfinished/unpolished.

### Practical questions
**Q: How would you write a README for a project with a genuinely surprising or counterintuitive finding?**
Short answer: State the surprising finding clearly and early (it's inherently more compelling than an expected result), then walk through the approach that led to it, so the reader immediately understands why the project is interesting before the details.

## Interview traps / tricky points

- A hiring manager is very unlikely to run code themselves — the README's clarity, not the code's cleverness, is often the actual deciding factor in whether a project makes an impression.
- Choosing "most technically impressive" over "most relevant to the role" is a common portfolio-selection mistake.

## Best practices

- Write the README before considering a project "done" — it's part of the deliverable, not an afterthought.
- State the key finding clearly and early in the README.
- Curate for relevance to the target role, not just technical difficulty.
- Verify the "how to reproduce" steps actually work before publishing.

---

### ⚡ Quick Revision

**README structure:** problem → approach → tools → key findings → how to reproduce
**Curate:** 3-4 projects matched to the target role's actual required skills
**Rule:** a project nobody can understand quickly is functionally invisible to a hiring manager
`);

setNote('case-study-presentations', `
## 🎯 What is it?

A **case study presentation** turns a finished project into a short, structured slide deck or write-up presenting the problem, approach, and findings — the way you would in a real job interview, not the way a technical README does.

## 💡 Why is it important?

A GitHub repo alone asks a busy hiring manager to do the work of understanding your project. A tight case study does that work *for* them — and being able to present your own work clearly and concisely is itself a skill being directly evaluated in the interview process.

## Core concept

### Case study structure: problem → approach → findings → impact
Every case study follows the same four-part shape, in the same order, every time:

| Part | Content |
|---|---|
| **Problem** | What business question was being investigated, and why it mattered |
| **Approach** | What data and methods were used, briefly (not every technical detail) |
| **Findings** | The 1-2 most important results, stated plainly |
| **Impact** | What this enabled — a decision made, an opportunity sized, a recommendation given |

### Fitting it to 5 slides
The discipline of a 5-slide limit forces you to identify what a reviewer actually needs to see, cutting everything else — this mirrors [Storytelling](/skills/storytelling)'s finding-first principle, applied to a portfolio project specifically.

### Leading with the result
Just like storytelling generally, open with the finding and its impact — not a slow build-up through the method — since a reviewer (or interviewer) may only give the first slide their full attention.

## Syntax / Formula / Structure

A 5-slide case study template:

\`\`\`
Slide 1: The result, stated plainly — "Found a $40K/year retention opportunity
          by analyzing checkout drop-off across 50K e-commerce orders"
Slide 2: The problem — what question was being investigated, and why
Slide 3: The approach — data, tools, and method, briefly
Slide 4: The finding — the key chart/evidence supporting the result
Slide 5: The impact — what this enabled, or what was recommended
\`\`\`

## 📊 Example

**Weak opening (method-first):** "For this project, I used SQL to pull 3 months of transaction data, then cleaned it in Python, then built a funnel analysis..."

**Strong opening (result-first):** "Mobile checkout drop-off was silently costing this e-commerce business an estimated $40K/year — I traced it to one broken step in the payment flow."

**Explanation:** The strong opening states the compelling result immediately — a reviewer skimming slide 1 alone already understands the project's value, while the weak opening requires them to read through the entire method before reaching the point.

## Multiple examples

**Beginner:** A 3-slide case study for a small project: result, approach, impact.
**Intermediate:** A full 5-slide case study following problem → approach → findings → impact, with one supporting chart.
**Real-world:** Practicing the case study out loud before an interview, anticipating the interviewer's most likely follow-up question ("how did you validate that finding?", "what would you do differently?") and having a specific, prepared answer ready — exactly the [Storytelling](/skills/storytelling) principle of anticipating questions, applied to portfolio work.

## ⚠️ Common mistakes

- **Building a method-first narrative** instead of leading with the result — a common instinct that undersells a strong finding by delaying it.
- **Trying to cram every technical detail into 5 slides.** The case study is a summary, not the full technical documentation (that's what the README is for) — cutting detail is a feature, not a loss.
- **Skipping the "impact" slide.** A finding without a stated impact ("so what did this actually enable?") feels incomplete and less compelling.
- **Not rehearsing an answer to the obvious follow-up question**, leading to an unprepared, less confident response in an actual interview.

## Real-world Data Analyst use cases

- **Job interviews:** presenting a portfolio project confidently and concisely when asked to "walk me through a project."
- **Networking/informational interviews:** a quick, compelling summary that doesn't require the listener to already understand technical details.
- **Internal presentations:** the same finding-first, 4-part structure applies directly to presenting real work findings to stakeholders on the job.

## Related concepts

\`\`\`
Git & Version Control → Personal Portfolio Website → Portfolio Building
  ↓
Case Study Presentations ← you are here
  ↓
Job Preparation stage (Technical Interview Practice, Case Study Interviews)
\`\`\`
This closes the Portfolio stage — the next stage, Job Preparation, is where this case study gets rehearsed and stress-tested under real interview conditions.

## Practice questions

### Easy
1. What are the four parts of the case study structure, in order?

### Medium
2. Rewrite this method-first opening to lead with the result instead: "I pulled transaction data from the last 6 months and built a cohort analysis to look at retention trends."

### Interview/Advanced
3. Why is a 5-slide limit a useful constraint rather than just an arbitrary restriction?

<details><summary><strong>Answer / Solution</strong></summary>

1. Problem, approach, findings, impact — in that order, every time.
2. Example: "Customer retention had quietly dropped 15% over 6 months — a cohort analysis of transaction data revealed exactly when and why."
3. The constraint forces a clear prioritization of what a reviewer actually needs to see — without it, it's tempting to include every technical detail, which buries the actual finding and impact under unnecessary process narration; the limit is a forcing function for the same finding-first discipline that makes any communication effective.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: Why prepare a case study presentation in addition to a project's README?**
Short answer: A README is a technical, scannable document for someone reviewing on their own; a case study is a concise, spoken/presented narrative for actively walking someone through the project's value — they serve different, complementary purposes.

### Conceptual questions
**Q: Why does a case study lead with the result instead of the method?**
Short answer: An interviewer's attention is highest at the very start — leading with the compelling result immediately establishes the project's value, rather than risking losing their attention during a lengthy method walkthrough before ever reaching the point.

### Scenario-based questions
**Q: An interviewer says "walk me through a project" and you have 2 minutes. How do you structure your answer?**
Short answer: State the result and its impact first in one or two sentences, briefly cover the problem and approach next, and be ready to go deeper into any part if the interviewer asks a follow-up — rather than starting from the beginning and running out of time before reaching the finding.

### Practical questions
**Q: How would you prepare for the follow-up question "what would you do differently?" for a finished project?**
Short answer: Reflect honestly on a genuine limitation or a decision you'd reconsider (e.g., a better data source, a different segmentation approach) and prepare a specific, thoughtful answer in advance — an interviewer views a genuine, reflective answer far more favorably than a defensive "nothing, it was perfect."

## Interview traps / tricky points

- A case study that's really just the README read aloud, in the same order, misses the point — a case study should feel like a story with a lead result, not a technical document narrated verbatim.
- Not having a rehearsed answer to "what would you do differently" is a common gap that reads as a lack of reflection or self-awareness.

## Best practices

- Always open with the result and its impact, not the method.
- Keep the case study to the 4-part structure and a 5-slide (or equivalent) limit — resist the urge to include every technical detail.
- Rehearse the case study out loud, and prepare for the 1-2 most likely follow-up questions in advance.

---

### ⚡ Quick Revision

**Structure:** problem → approach → findings → impact, every time
**Open with:** the result and its impact — not the method
**Constraint:** 5 slides forces prioritizing what actually matters
**Prepare for:** the obvious follow-up question ("what would you do differently?")
`);
