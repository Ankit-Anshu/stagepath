# Contributing to StagePath

Thanks for helping improve StagePath. Contributions to roadmap content, learning resources, projects, datasets, documentation, and the website are welcome.

## Before you start

- Search existing [issues](https://github.com/Ankit-Anshu/stagepath/issues) and [pull requests](https://github.com/Ankit-Anshu/stagepath/pulls) to avoid duplicate work.
- Small corrections can be submitted directly as a pull request.
- Open an issue before creating a new roadmap, changing the content model, redesigning the interface, or adding a dependency.
- Keep each pull request focused on one clear improvement.

## Local setup

Requirements:

- Node.js 22.12 or later
- npm

```bash
git clone https://github.com/Ankit-Anshu/stagepath.git
cd stagepath
npm install
npm run dev
```

Before submitting a pull request, run:

```bash
npm run build
```

The build validates every YAML content file and generates all website routes.

## Find the right place to contribute

| Contribution | Location | Guide |
| --- | --- | --- |
| Career roadmap | `content/roadmaps/` | [Roadmap schema](./content/roadmaps/README.md) |
| Skill or learning note | `content/skills/` | [Skill schema](./content/skills/README.md) |
| Reusable skill chapter | `content/chapters/` | [Chapter schema](./content/chapters/README.md) |
| Learning resource | `content/resources/` | [Resource schema](./content/resources/README.md) |
| Project brief | `content/projects/` | [Project schema](./content/projects/README.md) |
| Assessment | `content/assessments/` | [Assessment schema](./content/assessments/README.md) |
| Project dataset | `public/datasets/` | [Dataset guidelines](./public/datasets/README.md) |
| Skill curriculum | `src/lib/*-curriculum.ts` | [Architecture](./ARCHITECTURE.md) |
| Website or UI | `src/` | [Architecture](./ARCHITECTURE.md) |

All content IDs come from filenames. Use lowercase kebab-case and search the repository before creating a new ID.

## Contribution workflow

1. Fork the repository and create a branch.
2. Make one focused change.
3. Connect new content to the relevant roadmap, skill, resource, or project by ID.
4. Verify links, facts, examples, and dataset permissions.
5. Run `npm run build`.
6. Open a pull request and explain what changed and how it helps learners.

Example branch names:

```text
add-python-testing-skill
improve-data-engineer-roadmap
fix-broken-sql-resource
add-customer-churn-project
```

## Content standards

Every contribution should be:

- **Relevant:** include skills and resources that materially help someone progress toward the roadmap goal.
- **Accurate:** verify technical claims, examples, prerequisites, and terminology.
- **Clear:** write for a learner encountering the topic for the first time.
- **Practical:** connect theory to decisions, exercises, or work a learner can demonstrate.
- **Current:** verify external links and use the actual verification date.
- **Original:** do not copy protected course material, articles, or datasets.

Do not submit:

- Resources you have not reviewed
- Affiliate links, promotional links, or low-quality listicles
- Duplicate skills or resources under slightly different names
- Large collections of links without explanation or selection
- Generated filler that has not been checked for accuracy and usefulness
- Personal, confidential, or unlicensed data

Content should be written in English. Use direct language, short paragraphs, descriptive headings, and examples where they improve understanding.

## Adding or improving a roadmap

A roadmap should describe a realistic progression toward a specific role. It must include:

- A clear audience and outcome
- Ordered stages with meaningful titles
- Skills arranged by prerequisite and practical importance
- Projects or assessments at useful checkpoints
- Enough detail to guide learning without listing every tool in the industry

For a new roadmap, open an issue first with:

- Target role
- Intended learner level
- Proposed stages
- Key skills and projects
- Sources used to validate the structure

After approval, follow the [roadmap schema](./content/roadmaps/README.md).

## Adding a skill note

A strong skill note usually contains:

1. What the topic is
2. Why it matters
3. Core concepts
4. A worked example
5. Common mistakes
6. Practice questions
7. Interview preparation where relevant
8. A short revision summary

Follow the complete [skill schema and writing guide](./content/skills/README.md).

## Adding a resource

Only add a resource after reviewing it. Confirm that:

- The link works
- The title and provider are correct
- Free or paid status is accurate
- Difficulty and estimated duration are reasonable
- The resource adds value beyond existing entries

Add the YAML file in `content/resources/`, then reference its ID from at least one relevant skill. See the [resource guide](./content/resources/README.md).

## Adding a project or dataset

Projects should produce work a learner can explain or include in a portfolio. Include a realistic problem statement, requirements, milestones, expected deliverables, and evaluation criteria.

Datasets must be synthetic, public domain, or licensed for redistribution. Remove personal or confidential information and document the source. See the [project guide](./content/projects/README.md) and [dataset guidelines](./public/datasets/README.md).

## Code and design changes

- Follow existing Astro and styling patterns.
- Keep pages responsive and keyboard accessible.
- Reuse existing components and design tokens where possible.
- Avoid unrelated refactoring in the same pull request.
- Include screenshots for visible interface changes.
- Read [ARCHITECTURE.md](./ARCHITECTURE.md) before changing routes, schemas, shared layouts, or roadmap rendering.

## Pull request checklist

- [ ] The change addresses one clear problem.
- [ ] New IDs are unique and use lowercase kebab-case.
- [ ] Content is accurate, useful, and written clearly.
- [ ] External links were opened and verified.
- [ ] Dataset licensing and attribution are documented.
- [ ] `npm run build` passes.
- [ ] UI changes include screenshots when appropriate.
- [ ] The pull request explains the learner benefit.

All contributions must follow the [Code of Conduct](./CODE_OF_CONDUCT.md) and are accepted under the [MIT License](./LICENSE).
