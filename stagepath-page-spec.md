# StagePath page spec

Use this for every page, on every roadmap. It produces a `content/skills/*.yaml` file (see
`content/skills/README.md` for the full field schema) whose `note:` follows the structure and
language rules below, plus a small set of other YAML fields and one page-template entry that the
site renders as real UI instead of as note text. Follow this file exactly and you shouldn't need to
be told any of this again per page.

---

## Structure

These eight H2 headings, in this order, with these exact words, make up the note's markdown body.
Never add, remove, rename or reorder them. Never add subtitles under them.

```
The 30-second answer
What it means
How it works
Example
When to use it
Common mistakes
Interview questions
Related concepts
```

Above the first heading, write only this, nothing else:

```
# {Topic name}

{One plain sentence saying what this is.}
```

Do not write a breadcrumb line (`{Roadmap} / {Stage}`) and do not write a
`Level / Read / Practice / Before this / After this` metadata line as note text. Both used to be
written into the note by hand; both are now real, clickable page UI instead (see
**Site integration** below), and writing them again as plain text would just duplicate what the page
already shows.

Do not separate sections with `---`. Every H2 already gets its own top border as a section divider
(a site-wide style, not something this note controls), so a manual `---` produces two lines stacked
back to back. Just start the next `##` heading directly.

---

## Site integration

Three things this spec used to render as note headings are driven by other YAML fields instead, so
they appear as the site's own real structural sections (with these exact same names, already built
and styled) rather than as duplicate headings inside the note body:

- **Self-review before moving on** → write these as the skill's `objectives:` list (3 to 5 items,
  each starting with a doing verb: write, predict, spot, explain, say, build; never "understand" or
  "know"). The site renders its own "Self-review before moving on" section from this field directly,
  with no separate checklist needed in the note.
- **Resources** → reference real resource ids in the skill's `resources:` list. If a genuinely
  on-topic resource doesn't already exist in `content/resources/`, add one (check the link is live
  right now, set today's date as `last_verified`). 1 to 3 resources, each about this exact topic, not
  a general reference. Zero beats one padded one.
- **Related projects** → only set the skill's `project:` field if a real, matching project brief
  exists or is being written alongside this page. Don't invent a project just to fill the section:
  the site shows a clean "not published yet" empty state when nothing is linked, which is the
  correct outcome most of the time for a single foundational topic.

The breadcrumb + prev/next pager card at the top of the page (the one showing
`{Roadmap} / {Stage}` on the left and `{Next topic} →` on the right) is not written in the note
either. Add an entry for the topic's id in the `CURRICULUM_CONTEXT` map near the top of
`src/pages/skills/[id].astro`, with the roadmap title/href, stage title/href, and prev/next
title/href (link a neighboring topic's own skill page if it has one, otherwise link back to the
roadmap's section anchor, e.g. `/skill-roadmaps/spreadsheet#section-foundations`).

---

## Language rules

1. **No em dashes.** Not one, anywhere. Use a full stop, a colon, a comma
   or brackets. This is the rule most often broken, so scan the finished
   page for the character before returning it.
2. **One idea per sentence.** If a sentence joins two clauses with a comma
   and could be split, split it.
3. **Plain English.** Write for someone whose first language is not
   English. No "leverage", "delve", "seamless", "robust", "crucial",
   "simply", "just", "easy". No slang, no idioms.
4. **Sentence case** for every heading and label.
5. **No emoji.** Anywhere.
6. **Say "you"**, not "the user" or "one".
7. **Digits for numbers**, including small ones.
8. Pick one spelling convention and hold it for the whole site.
9. **Bold is for labels only.** Never bold a phrase mid-sentence for
   emphasis. Technical names go in backticks.

---

## Where to be simple and where to be precise

| Section | Register |
|---|---|
| Title sentence, The 30-second answer, What it means | Simple. This is where a beginner decides whether to keep reading. |
| How it works, Example, Interview answers | Precise. Use the real terms. This is the vocabulary they will need in the room. |
| Common mistakes | Simple in the symptom, precise in the cause. |

A page that is simple all the way through leaves a learner fluent in words
nobody else uses.

---

## Section rules

**The 30-second answer.** 4 to 5 bullets. Must stand alone. Someone who
reads only this should be able to talk about the topic out loud. Not a
teaser. No forward references.

**What it means.** 2 to 3 short paragraphs. No syntax, no tables, no code.
Answer two questions: what is this really, and what goes wrong without it.
The only beginner-only section on the page.

**How it works.** The reference layer. Prefer tables to prose. The parts,
the rules, and the order things happen in. No worked values here.

**Example.** Use the running example named in the input block, unchanged.
Extend it by at most one new element. Show the thing once in full, then
show it repeated or varied so the reader sees a pattern rather than a
one-off. Then a short table of input, result, and what it does. Finish
with a block headed `**Where it bites**` holding two versions that both
look correct, where one is subtly wrong, plus a line saying nothing warns
you. Verify every value.

Choose examples with working meaning. Doubling a number teaches the syntax
and nothing else. Discounts, refunds and missing values teach the syntax
and the job at the same time.

**When to use it.** Three blocks, in this order, with these labels:
`**Use it when**`, `**Use something else when**`, `**Never**`. Be concrete.
"Use it when no other tool is needed" is circular and unusable. Name the
actual condition.

**Common mistakes.** 4 to 6 items. Symptom first, in the reader's own
words, inside quote marks, then the cause and the fix on the same line. "My
total is wrong but there is no error" is how the problem arrives at 11pm,
and it is also how an interviewer phrases the follow-up. Only mistakes
specific to this topic. Push generic ones to their own page.

**Interview questions.** Exactly 5, in this order:

1. Recall. Can you name the parts.
2. Conceptual. Do you know why it behaves the way it does.
3. Diagnosis. Something is wrong. What do you check first.
4. Judgment. When would you choose this over the alternative.
5. Explain this to a non-specialist colleague without using {one banned term}.

Wrap all 5 answers in `<details><summary>Answer</summary>`, including question 5. Question 5 is the
hardest to write well: it should read like something a person would actually say out loud, in plain
words, not a script.

**Related concepts.** A fenced `text` block with exactly 3 nodes and arrows, with
`← you are here` on the middle one. Nothing else in this section.

---

## Check before returning

- [ ] Zero em dashes in the file
- [ ] All 8 note headings present, exact wording, correct order, no subtitles
- [ ] No breadcrumb line, no Level/Read/Practice/Before/After line, no `---` separators in the note
- [ ] The 30-second answer stands alone
- [ ] Running example used unchanged, extended by at most one element
- [ ] Every value in every example verified
- [ ] Mistakes written symptom first, inside quote marks
- [ ] 5 interview questions, all 5 answered in `<details>`
- [ ] `objectives:` has 3 to 5 doing-verb items (drives Self-review before moving on)
- [ ] `resources:` references 1 to 3 real, live-checked, on-topic resource ids, or is left empty
- [ ] `project:` is only set if a real matching project exists
- [ ] `CURRICULUM_CONTEXT` entry added in `src/pages/skills/[id].astro` for this topic's id
- [ ] No jargon in the title sentence or The 30-second answer

---

## This page

```
Roadmap:          {}
Stage:            {}
Parent topic:     {only if this topic sits under a narrower topic within the stage, else leave blank}
Topic:            {}
Level:            {foundational|intermediate|advanced — informs tone and estimated_minutes, not printed}
Read:             {n min — informs estimated_minutes, not printed}
Practice:         {n hour — informs estimated_minutes, not printed}
Before this:      {topic, or "none, this is the first topic" — used for the pager and CURRICULUM_CONTEXT}
After this:       {topic — used for the pager and CURRICULUM_CONTEXT}
Running example:  {the scenario this page uses, with its fixed values}
```

Write the page.
