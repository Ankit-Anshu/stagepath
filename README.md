# StagePath

[![CI](https://github.com/Ankit-Anshu/stagepath/actions/workflows/ci.yml/badge.svg)](https://github.com/Ankit-Anshu/stagepath/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-6bc58c.svg)](./LICENSE)
[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build/)

Structured career roadmaps with detailed topics, learning resources, and projects you can build.

[View the website](https://ankit-anshu.github.io/stagepath/) | [Browse roadmaps](https://ankit-anshu.github.io/stagepath/roadmaps/) | [Contribute](./CONTRIBUTING.md)

## About

StagePath turns a career goal into an ordered learning path. Every roadmap is divided into stages, skills, and detailed topics, then connected to curated resources, assessments, project briefs, and practice datasets.

## Roadmaps

| | | |
| --- | --- | --- |
| [AI Engineer](https://ankit-anshu.github.io/stagepath/roadmaps/ai-engineer/) | [Backend Developer](https://ankit-anshu.github.io/stagepath/roadmaps/backend-developer/) | [Business Analyst](https://ankit-anshu.github.io/stagepath/roadmaps/business-analyst/) |
| [Cloud Engineering](https://ankit-anshu.github.io/stagepath/roadmaps/cloud-engineering/) | [Cybersecurity](https://ankit-anshu.github.io/stagepath/roadmaps/cybersecurity-analyst/) | [Data Analyst](https://ankit-anshu.github.io/stagepath/roadmaps/data-analyst/) |
| [Data Engineer](https://ankit-anshu.github.io/stagepath/roadmaps/data-engineer/) | [Data Scientist](https://ankit-anshu.github.io/stagepath/roadmaps/data-scientist/) | [Frontend Developer](https://ankit-anshu.github.io/stagepath/roadmaps/frontend-developer/) |
| [Software Engineer](https://ankit-anshu.github.io/stagepath/roadmaps/software-engineer/) | [UX Designer](https://ankit-anshu.github.io/stagepath/roadmaps/ux-designer/) | [View all roadmaps](https://ankit-anshu.github.io/stagepath/roadmaps/) |

Focused curricula are also available for SQL, Python, Power BI, Tableau, Git and GitHub, Statistics, Spreadsheets, and Machine Learning.

## Features

- Ordered career stages and skill dependencies
- Detailed topic notes with examples and interview preparation
- Curated learning resources with difficulty and duration metadata
- Mini, portfolio, and capstone project briefs
- Downloadable practice datasets
- Interactive knowledge graph and searchable catalogs

## Development

Requires Node.js 22.12 or later.

```bash
git clone https://github.com/Ankit-Anshu/stagepath.git
cd stagepath
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build      # validate content and create the production build
npm run preview    # preview the production build
```

## Project structure

```text
content/             Roadmaps, skills, resources, projects, and assessments
public/datasets/     Datasets used by project briefs
src/pages/           Website routes
src/lib/             Shared roadmap and curriculum data
src/scripts/         Interactive knowledge graph
src/styles/          Global styles and design tokens
.github/             Issue templates, pull request template, CI, and deployment
```

Content is stored as YAML and validated during the production build. Start with [content/README.md](./content/README.md) to understand how the collections connect.

## Contributing

You can help by:

- Improving an existing roadmap or topic
- Adding a useful learning resource
- Writing or improving a project brief
- Adding a reusable, properly licensed dataset
- Fixing inaccurate content, broken links, bugs, or accessibility issues

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening an issue or pull request.

## Community and support

- Use [GitHub issues](https://github.com/Ankit-Anshu/stagepath/issues) for bugs, content suggestions, and feature requests.
- Read the [Code of Conduct](./CODE_OF_CONDUCT.md) before participating.
- Report vulnerabilities according to the [Security Policy](./SECURITY.md).

## License

[MIT](./LICENSE)
