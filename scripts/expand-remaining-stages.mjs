// Adds real additional topics to SQL, Python, Visualization, Business
// Analytics, Portfolio, and Job Preparation — the stages left thin after
// Foundations/Spreadsheets/Statistics were already expanded.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const RESOURCES_DIR = path.join(ROOT, 'content', 'resources');
const ROADMAPS_DIR = path.join(ROOT, 'content', 'roadmaps');

function write(dir, id, data) {
  fs.writeFileSync(path.join(dir, `${id}.yaml`), yaml.dump(data, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}

// ---------------------------------------------------------------------------
// New resources
// ---------------------------------------------------------------------------
const resources = [
  { id: 'r-python-requests-docs', title: 'Requests: HTTP for Humans', type: 'documentation', url: 'https://requests.readthedocs.io/en/latest/', provider: 'Python Software Foundation', duration_minutes: 45, difficulty: 'intermediate' },
  { id: 'r-jupyter-docs', title: 'Jupyter Documentation', type: 'documentation', url: 'https://docs.jupyter.org/en/latest/', provider: 'Jupyter', duration_minutes: 45, difficulty: 'beginner' },
  { id: 'r-python-re-docs', title: 'Regular Expression Operations (re)', type: 'documentation', url: 'https://docs.python.org/3/library/re.html', provider: 'Python Software Foundation', duration_minutes: 60, difficulty: 'intermediate' },
  { id: 'r-webaim-contrast', title: 'WebAIM Contrast Checker', type: 'interactive', url: 'https://webaim.org/resources/contrastchecker/', provider: 'WebAIM', duration_minutes: 15, difficulty: 'beginner' },
  { id: 'r-github-pages-docs', title: 'GitHub Pages Documentation', type: 'documentation', url: 'https://docs.github.com/en/pages', provider: 'GitHub Docs', duration_minutes: 45, difficulty: 'beginner' },
];
for (const r of resources) {
  write(RESOURCES_DIR, r.id, {
    title: r.title, type: r.type, url: r.url, provider: r.provider, duration_minutes: r.duration_minutes,
    difficulty: r.difficulty, free: true, language: 'en', last_verified: '2026-08-19', recommended: true,
  });
}

// ---------------------------------------------------------------------------
// SQL additions
// ---------------------------------------------------------------------------
const sqlSkills = [
  {
    id: 'sql-subqueries', title: 'SQL — Subqueries',
    what_is_it: 'Nesting one query inside another — in the WHERE clause, the FROM clause, or as a scalar value — to answer questions a single flat query can\'t.',
    why_it_matters: 'Before CTEs became common, subqueries were how every complex question got answered, and they still show up constantly in interviews and existing codebases.',
    prerequisites: ['sql-aggregation'],
    objectives: ['Write a subquery in a WHERE clause', 'Write a subquery in a FROM clause', 'Distinguish a correlated from a non-correlated subquery'],
    subtopics: [
      { title: 'Subqueries in WHERE', description: 'Filtering rows based on the result of a separate inner query.', outcomes: ['Filter using a subquery in a WHERE clause'] },
      { title: 'Subqueries in FROM', description: 'Treating a query\'s result as a temporary table to query again.', outcomes: ['Write a query against a subquery in the FROM clause'] },
      { title: 'Correlated subqueries', description: 'A subquery that references the outer query\'s row, re-evaluated for every row.', outcomes: ['Explain why a correlated subquery runs once per outer row'] },
    ],
    estimated_minutes: 180,
    resources: ['r-postgres-tutorial', 'r-mode-sql-tutorial'],
    practice: [{ id: 'ex-sql-subqueries-1', title: 'Find above-average customers', description: 'Write a query returning customers whose total spend is above the average spend across all customers, using a subquery.' }],
    verify: ['Subquery returns the intended single value or set', 'Correlated vs. non-correlated is used correctly for the question', 'Result matches an equivalent CTE-based rewrite'],
  },
  {
    id: 'sql-set-operations', title: 'SQL — UNION & Set Operations',
    what_is_it: 'Combining the results of two or more queries with UNION, UNION ALL, INTERSECT, and EXCEPT.',
    why_it_matters: 'Combining similarly-shaped data from different tables or time periods — like this year\'s and last year\'s orders — is a UNION problem, not a JOIN problem.',
    prerequisites: ['sql-joins'],
    objectives: ['Combine two queries with UNION', 'Explain the difference between UNION and UNION ALL', 'Use INTERSECT or EXCEPT to compare two result sets'],
    subtopics: [
      { title: 'UNION vs. UNION ALL', description: 'Combining result sets, with and without removing duplicates.', outcomes: ['Choose UNION or UNION ALL correctly based on whether duplicates matter'] },
      { title: 'Column & type matching', description: 'Why combined queries must return the same number of columns in compatible types.', outcomes: ['Fix a UNION query with mismatched columns'] },
      { title: 'INTERSECT & EXCEPT', description: 'Finding rows common to two queries, or rows in one but not the other.', outcomes: ['Use EXCEPT to find records missing from a second table'] },
    ],
    estimated_minutes: 120,
    resources: ['r-postgres-tutorial', 'r-w3schools-join'],
    practice: [{ id: 'ex-sql-union-1', title: 'Combine two periods', description: 'Combine this quarter\'s and last quarter\'s order tables into one result set with UNION ALL, tagging each row with its period.' }],
    verify: ['UNION vs UNION ALL choice matches whether duplicates should be removed', 'Combined columns are correctly typed and ordered', 'Can explain what EXCEPT would reveal about two tables'],
  },
  {
    id: 'sql-query-optimization', title: 'SQL — Query Optimization Basics',
    what_is_it: 'Reading a query plan and understanding how indexes make a query fast — enough to recognize and explain why a query is slow.',
    why_it_matters: 'As tables grow to millions of rows, a query that "just works" can quietly become the query that times out. Knowing the basics is what separates writing correct SQL from writing SQL that scales.',
    prerequisites: ['sql-window-functions'],
    objectives: ['Explain what an index does at a conceptual level', 'Read a basic query execution plan', 'Identify a likely cause of a slow query', 'Explain why SELECT * is often wasteful at scale'],
    subtopics: [
      { title: 'What an index does', description: 'Why an index lets the database avoid scanning every row, and what it costs to maintain one.', outcomes: ['Explain in plain language what an index speeds up'] },
      { title: 'Reading a query plan', description: 'Using EXPLAIN to see whether a query is scanning a full table or using an index.', outcomes: ['Read an EXPLAIN plan and identify a full table scan'] },
      { title: 'Common slow-query causes', description: 'Missing indexes, SELECT *, and functions applied to filtered columns.', outcomes: ['Identify a likely reason a specific query is slow'] },
    ],
    estimated_minutes: 150,
    resources: ['r-postgres-tutorial'],
    practice: [{ id: 'ex-sql-optimization-1', title: 'Diagnose a slow query', description: 'Given a query and its EXPLAIN output, identify whether it\'s using an index and propose one change to speed it up.' }],
    verify: ['Correctly identifies whether a plan uses an index or a full scan', 'Proposed fix is specific, not just "add an index somewhere"', 'Can explain the tradeoff of adding an index'],
  },
];
for (const s of sqlSkills) { const { id, ...rest } = s; write(SKILLS_DIR, id, rest); }

// ---------------------------------------------------------------------------
// Python additions
// ---------------------------------------------------------------------------
const pythonSkills = [
  {
    id: 'python-apis', title: 'Working with APIs',
    what_is_it: 'Fetching data from a web API with Python\'s requests library and turning the response into a usable DataFrame.',
    why_it_matters: 'Not all data comes as a clean CSV. A huge amount of real-world data — weather, finance, product catalogs — is only available through an API, so pulling it yourself is a core skill.',
    prerequisites: ['python-fundamentals'],
    objectives: ['Make a GET request and handle the response', 'Parse a JSON response into a DataFrame', 'Handle a failed request gracefully', 'Explain what an API key/rate limit is for'],
    subtopics: [
      { title: 'Making a request', description: 'Using requests.get() and checking the status code before trusting the response.', outcomes: ['Make a GET request and check for a successful status code'] },
      { title: 'Parsing JSON', description: 'Turning a nested JSON response into a flat, analysis-ready DataFrame.', outcomes: ['Convert a JSON API response into a pandas DataFrame'] },
      { title: 'Handling failures', description: 'Timeouts, rate limits, and error responses — and not letting one bad request crash a script.', outcomes: ['Handle a failed request without crashing the script'] },
    ],
    estimated_minutes: 180,
    resources: ['r-python-requests-docs'],
    practice: [{ id: 'ex-apis-1', title: 'Pull data from a public API', description: 'Fetch data from any free public API, parse the JSON response, and load the result into a pandas DataFrame.' }],
    verify: ['Request checks the status code before parsing the response', 'JSON is correctly flattened into a usable table', 'A failed request is handled instead of crashing the script'],
  },
  {
    id: 'python-notebooks', title: 'Jupyter Notebooks & Exploratory Workflow',
    what_is_it: 'Using a Jupyter notebook to explore data interactively — running cells, inspecting output, and organizing an analysis as a readable narrative.',
    why_it_matters: 'Notebooks are the standard environment for exploratory analysis in Python. Using them well — not just as a place to paste code — is what makes a shared notebook actually readable by someone else.',
    prerequisites: ['python-fundamentals'],
    objectives: ['Run and re-run cells in a sensible order', 'Use markdown cells to narrate an analysis', 'Keep a notebook\'s outputs reproducible from top to bottom', 'Export a notebook as a shareable report'],
    subtopics: [
      { title: 'Cells & execution order', description: 'Why a notebook that "runs out of order" produces misleading results.', outcomes: ['Restart and run a notebook top to bottom without errors'] },
      { title: 'Markdown narration', description: 'Using text cells to explain what each code section does and why.', outcomes: ['Add clear markdown narration between code sections'] },
      { title: 'Reproducibility', description: 'Keeping a notebook\'s results trustworthy after edits, instead of relying on stale output.', outcomes: ['Verify a notebook\'s output is reproducible from a clean run'] },
    ],
    estimated_minutes: 90,
    resources: ['r-jupyter-docs'],
    practice: [{ id: 'ex-notebooks-1', title: 'Clean up a messy notebook', description: 'Take a notebook you\'ve already written, restart it, run it top to bottom, and add markdown narration explaining each section.' }],
    verify: ['Notebook runs top to bottom without errors after a restart', 'Markdown cells explain the reasoning, not just repeat the code', 'A stranger could follow the analysis without asking questions'],
  },
  {
    id: 'python-regex', title: 'Regular Expressions for Data Cleaning',
    what_is_it: 'Using pattern matching to find, extract, and clean text that doesn\'t follow a simple fixed format.',
    why_it_matters: 'Some cleaning problems — extracting a phone number, validating an email format, splitting an inconsistent free-text field — can\'t be solved with simple string functions alone.',
    prerequisites: ['pandas'],
    objectives: ['Write a basic regex pattern with character classes and quantifiers', 'Extract a substring matching a pattern', 'Validate whether a value matches an expected format', 'Apply a regex across a pandas column'],
    subtopics: [
      { title: 'Pattern basics', description: 'Character classes, quantifiers, and anchors — the building blocks of a regex pattern.', outcomes: ['Write a pattern that matches a specific text format'] },
      { title: 'Extracting matches', description: 'Pulling a specific piece out of a larger text value, like a code or ID embedded in a string.', outcomes: ['Extract a substring matching a pattern from a column'] },
      { title: 'Validating format', description: 'Checking whether every value in a column matches an expected pattern, like an email or phone format.', outcomes: ['Flag rows that don\'t match an expected format'] },
    ],
    estimated_minutes: 150,
    resources: ['r-python-re-docs'],
    practice: [{ id: 'ex-regex-1', title: 'Extract and validate IDs', description: 'Given a text column with embedded order IDs in an inconsistent format, extract the ID with a regex and flag rows that don\'t match.' }],
    verify: ['Pattern correctly matches the intended format without false positives', 'Extraction works across the whole column, not just the first example', 'Non-matching rows are flagged, not silently dropped'],
  },
];
for (const s of pythonSkills) { const { id, ...rest } = s; write(SKILLS_DIR, id, rest); }

// ---------------------------------------------------------------------------
// Visualization additions
// ---------------------------------------------------------------------------
const vizSkills = [
  {
    id: 'dataviz-color-accessibility', title: 'Color & Accessibility in Visualization',
    what_is_it: 'Choosing chart colors and contrast that work for colorblind viewers and remain readable at a glance, not just on your own screen.',
    why_it_matters: 'A chart that relies on red-vs-green to convey meaning is unreadable to a meaningful share of any audience — and low contrast fails everyone in a bright room or on a projector.',
    prerequisites: ['charts'],
    objectives: ['Choose a colorblind-safe palette', 'Check a color combination for sufficient contrast', 'Avoid relying on color alone to convey meaning', 'Use color consistently across a set of charts'],
    subtopics: [
      { title: 'Colorblind-safe palettes', description: 'Avoiding red-green combinations that are indistinguishable to common forms of color blindness.', outcomes: ['Choose a colorblind-safe palette for a chart'] },
      { title: 'Contrast', description: 'Ensuring text and key chart elements are readable against their background.', outcomes: ['Check a color pairing against a contrast standard'] },
      { title: 'Beyond color', description: 'Using shape, pattern, or labels alongside color so meaning isn\'t lost for anyone.', outcomes: ['Add a non-color cue to a chart that currently relies on color alone'] },
    ],
    estimated_minutes: 90,
    resources: ['r-webaim-contrast', 'r-datavizcatalogue'],
    practice: [{ id: 'ex-color-accessibility-1', title: 'Audit a chart\'s colors', description: 'Take an existing chart, check its color choices for colorblind-safety and contrast, and fix any issues found.' }],
    verify: ['Palette remains distinguishable under a colorblind simulation', 'Text and key elements meet a reasonable contrast standard', 'Meaning does not depend on color alone'],
  },
  {
    id: 'dataviz-geospatial', title: 'Geospatial & Map Visualization',
    what_is_it: 'Showing data on a map — choropleth (shaded region) maps, point maps, and choosing when a map is actually the right chart.',
    why_it_matters: 'Location-based questions — "where are sales strongest," "which regions are underperforming" — are answered far faster with a map than with a table of region names and numbers.',
    prerequisites: ['charts'],
    objectives: ['Choose between a choropleth and a point map for a question', 'Build a basic map visualization from geographic data', 'Recognize when a map isn\'t actually the right chart'],
    subtopics: [
      { title: 'Choropleth maps', description: 'Shading regions by a value, like sales by state or country.', outcomes: ['Build a choropleth map from region-level data'] },
      { title: 'Point maps', description: 'Plotting individual locations, like store or customer locations.', outcomes: ['Build a point map from latitude/longitude data'] },
      { title: 'When not to map', description: 'Recognizing when a bar chart would answer the question faster than a map would.', outcomes: ['Explain when a map is the wrong chart for a given question'] },
    ],
    estimated_minutes: 120,
    resources: ['r-datavizcatalogue', 'r-kaggle-dataviz'],
    practice: [{ id: 'ex-geospatial-1', title: 'Map regional performance', description: 'Build a choropleth map showing a metric by region, and write one sentence on what it reveals that a table wouldn\'t.' }],
    verify: ['Map type matches the question being asked', 'Regions or points are correctly matched to their data', 'Can justify why a map was the right choice over a table or bar chart'],
  },
];
for (const s of vizSkills) { const { id, ...rest } = s; write(SKILLS_DIR, id, rest); }

// ---------------------------------------------------------------------------
// Business Analytics additions
// ---------------------------------------------------------------------------
const bizSkills = [
  {
    id: 'ab-testing', title: 'A/B Testing & Experimentation', category: 'Business Analytics',
    what_is_it: 'Designing a controlled experiment — splitting users into groups, defining success metrics up front, and running the test long enough to trust the result.',
    why_it_matters: 'Deciding whether a change actually caused an improvement, rather than just coinciding with one, is one of the most frequently requested and most frequently botched analyses a data analyst does.',
    prerequisites: ['stats-hypothesis-testing'],
    objectives: ['Design a test with a clear control and variant', 'Choose a primary metric before running the test', 'Determine an appropriate sample size or test duration', 'Avoid the most common experiment-design mistakes'],
    subtopics: [
      { title: 'Test design', description: 'Randomizing users into control and variant groups so the only difference is the change being tested.', outcomes: ['Design a test with a valid control group'] },
      { title: 'Choosing a metric up front', description: 'Committing to a primary success metric before seeing any results, to avoid cherry-picking afterward.', outcomes: ['State a primary metric before a test begins'] },
      { title: 'Sample size & duration', description: 'Running a test long enough, and with enough users, to trust the result.', outcomes: ['Explain why stopping a test too early is risky'] },
      { title: 'Common pitfalls', description: 'Peeking at results early, testing too many metrics at once, and novelty effects.', outcomes: ['Identify a flaw in a poorly-designed experiment'] },
    ],
    estimated_minutes: 210,
    resources: ['r-grow-google-data-analytics', 'r-fcc-data-analysis-python'],
    project: 'project-ab-testing-analysis',
    practice: [{ id: 'ex-ab-testing-1', title: 'Design an experiment', description: 'Given a proposed product change, design an A/B test: hypothesis, control/variant split, primary metric, and minimum test duration.' }],
    verify: ['Control and variant groups are defined validly', 'Primary metric is stated before any results are considered', 'Can name at least one risk that would invalidate the test'],
  },
  {
    id: 'funnel-analysis', title: 'Funnel Analysis', category: 'Business Analytics',
    what_is_it: 'Mapping a multi-step process — like signup to purchase — and measuring the conversion rate and drop-off at each step.',
    why_it_matters: 'Knowing the overall conversion rate tells you something is wrong. Funnel analysis tells you exactly which step it\'s wrong at, which is what actually leads to a fix.',
    prerequisites: ['business-analytics'],
    objectives: ['Define the steps of a funnel', 'Calculate the conversion rate at each step', 'Identify the step with the largest drop-off', 'Propose a hypothesis for why a step underperforms'],
    subtopics: [
      { title: 'Defining funnel steps', description: 'Breaking a process into clear, measurable, ordered steps.', outcomes: ['Define a funnel\'s steps for a given user journey'] },
      { title: 'Step-by-step conversion', description: 'Calculating what percentage of users make it from one step to the next.', outcomes: ['Calculate conversion rate at each funnel step'] },
      { title: 'Finding the biggest drop-off', description: 'Identifying which single step is losing the most users, relative to its opportunity.', outcomes: ['Identify the weakest step in a funnel and justify why'] },
    ],
    estimated_minutes: 150,
    resources: ['r-grow-google-data-analytics'],
    practice: [{ id: 'ex-funnel-1', title: 'Analyze a signup funnel', description: 'Given step-by-step user counts through a signup funnel, calculate conversion at each step and identify the biggest opportunity.' }],
    verify: ['Conversion rate is calculated correctly at each step', 'Weakest step is correctly identified, not just assumed', 'Hypothesis for the drop-off is specific and testable'],
  },
  {
    id: 'customer-segmentation', title: 'Customer Segmentation', category: 'Business Analytics',
    what_is_it: 'Grouping customers into meaningful segments based on behavior or characteristics, like purchase frequency or spend, instead of treating everyone as average.',
    why_it_matters: 'Averages hide meaningful differences between customer groups. Segmentation is what lets a business target the right message, offer, or intervention at the right group.',
    prerequisites: ['pandas'],
    objectives: ['Segment customers using a simple rule-based approach', 'Explain RFM (recency, frequency, monetary) segmentation', 'Compare behavior across segments', 'Recommend an action based on a segment\'s profile'],
    subtopics: [
      { title: 'Rule-based segmentation', description: 'Grouping customers using simple thresholds, like high/medium/low spend.', outcomes: ['Segment customers using a simple rule-based approach'] },
      { title: 'RFM segmentation', description: 'Segmenting by recency, frequency, and monetary value — a standard, widely-used framework.', outcomes: ['Explain what each component of RFM measures'] },
      { title: 'Comparing segments', description: 'Measuring how behavior actually differs across the segments you\'ve defined.', outcomes: ['Compare a key metric across two or more segments'] },
    ],
    estimated_minutes: 180,
    resources: ['r-kaggle-pandas', 'r-grow-google-data-analytics'],
    practice: [{ id: 'ex-segmentation-1', title: 'Build an RFM segmentation', description: 'Given a transactions dataset, calculate recency, frequency, and monetary value per customer, and assign each to a segment.' }],
    verify: ['RFM values are calculated correctly per customer', 'Segments are meaningfully different from one another on the underlying metric', 'A specific action is recommended for at least one segment'],
  },
  {
    id: 'forecasting-trend-analysis', title: 'Forecasting & Trend Analysis', category: 'Business Analytics',
    what_is_it: 'Extending a historical trend into a simple forecast, and recognizing seasonality and noise along the way.',
    why_it_matters: 'Planning questions — "how much revenue next quarter," "do we need to staff up" — need a forecast, not just a description of the past.',
    prerequisites: ['stats-correlation-regression'],
    objectives: ['Identify a trend and seasonal pattern in time-series data', 'Build a simple trend-based forecast', 'Explain the difference between a forecast and a target', 'State the uncertainty around a forecast'],
    subtopics: [
      { title: 'Trend vs. seasonality vs. noise', description: 'Separating a genuine long-term direction from a repeating seasonal pattern and random fluctuation.', outcomes: ['Identify trend and seasonal components in a time series'] },
      { title: 'Simple forecasting', description: 'Extending a trend line forward as a first-pass forecast.', outcomes: ['Build a simple trend-based forecast for the next period'] },
      { title: 'Forecast vs. target', description: 'Why a forecast (what will likely happen) is a different thing from a target (what you want to happen).', outcomes: ['Explain the difference between a forecast and a target to a stakeholder'] },
    ],
    estimated_minutes: 180,
    resources: ['r-khan-statistics', 'r-grow-google-data-analytics'],
    practice: [{ id: 'ex-forecasting-1', title: 'Forecast next month\'s revenue', description: 'Given 12 months of revenue data, identify the trend and seasonal pattern, and produce a simple forecast for next month with a stated confidence caveat.' }],
    verify: ['Trend and seasonal pattern are correctly identified', 'Forecast is clearly labeled as an estimate, not a guarantee', 'Can explain the forecast\'s biggest source of uncertainty'],
  },
];
for (const s of bizSkills) { const { id, ...rest } = s; write(SKILLS_DIR, id, rest); }

// ---------------------------------------------------------------------------
// Portfolio additions
// ---------------------------------------------------------------------------
const portfolioSkills = [
  {
    id: 'case-study-presentations', title: 'Case Study Presentations', category: 'Portfolio',
    what_is_it: 'Turning a finished project into a short, structured slide deck or write-up that presents the problem, approach, and findings the way you would in a job interview.',
    why_it_matters: 'A GitHub repo alone asks a busy hiring manager to do the work of understanding your project. A tight case study does that work for them.',
    prerequisites: ['portfolio-building'],
    objectives: ['Structure a case study as problem, approach, findings, impact', 'Fit a full project into a 5-slide summary', 'Lead with the result, not the method', 'Anticipate the first follow-up question'],
    subtopics: [
      { title: 'Case study structure', description: 'Problem, approach, findings, and impact — in that order, every time.', outcomes: ['Structure a case study using this four-part framework'] },
      { title: 'Fitting it to 5 slides', description: 'Cutting a full project down to what a reviewer actually needs to see.', outcomes: ['Summarize a full project in 5 slides or less'] },
      { title: 'Leading with the result', description: 'Opening with the finding and impact instead of a slow build-up through the method.', outcomes: ['Write an opening slide that states the result immediately'] },
    ],
    estimated_minutes: 150,
    resources: ['r-storytelling-with-data'],
    practice: [{ id: 'ex-case-study-1', title: 'Turn a project into a case study', description: 'Take one completed portfolio project and turn it into a 5-slide case study following the problem/approach/findings/impact structure.' }],
    verify: ['First slide states the result, not just the topic', 'Case study fits in 5 slides without losing the key finding', 'A stranger could follow it without the original project open'],
  },
  {
    id: 'portfolio-website', title: 'Personal Portfolio Website', category: 'Portfolio',
    what_is_it: 'Publishing a simple, free personal site that links to your best projects, so your portfolio has one clean landing page instead of a list of scattered links.',
    why_it_matters: 'A recruiter spends seconds deciding whether to look further. One page that shows your best work clearly beats making them dig through your GitHub profile.',
    prerequisites: ['git-version-control'],
    objectives: ['Publish a free static site', 'Link to your best 3-4 projects from one page', 'Write a short, clear personal summary', 'Keep the site simple and fast to load'],
    subtopics: [
      { title: 'Publishing for free', description: 'Using GitHub Pages (or an equivalent) to host a personal site at no cost.', outcomes: ['Publish a working site accessible at a public URL'] },
      { title: 'Linking your best work', description: 'Curating 3-4 projects rather than listing everything you\'ve ever built.', outcomes: ['Link to your best 3-4 projects with a one-line description each'] },
      { title: 'A clear personal summary', description: 'A short "who I am and what I do" that\'s specific, not generic.', outcomes: ['Write a personal summary a recruiter could read in 10 seconds'] },
    ],
    estimated_minutes: 180,
    resources: ['r-github-pages-docs', 'r-readme-so'],
    practice: [{ id: 'ex-portfolio-site-1', title: 'Publish a one-page portfolio', description: 'Publish a single-page site with a short summary and links to your 3-4 best projects, using GitHub Pages or an equivalent free host.' }],
    verify: ['Site is publicly accessible at a working URL', 'Only the strongest projects are featured', 'Page loads quickly and reads clearly on a phone screen'],
  },
];
for (const s of portfolioSkills) { const { id, ...rest } = s; write(SKILLS_DIR, id, rest); }

// ---------------------------------------------------------------------------
// Job Preparation additions
// ---------------------------------------------------------------------------
const jobPrepSkills = [
  {
    id: 'resume-linkedin', title: 'Resume & LinkedIn Optimization', category: 'Career',
    what_is_it: 'Framing your resume and LinkedIn profile around measurable outcomes and the specific keywords a data analyst posting looks for.',
    why_it_matters: 'Most applications are filtered before a human ever reads them. A resume that reads well to a person and clears keyword filters gets you to the interview at all.',
    prerequisites: [],
    objectives: ['Rewrite resume bullets around measurable outcomes', 'Match resume keywords to a real job posting', 'Write a LinkedIn headline and summary that aren\'t generic', 'Trim a resume to what actually matters for the target role'],
    subtopics: [
      { title: 'Outcome-based bullets', description: 'Rewriting a task ("built dashboards") as an outcome ("cut reporting time by 40% by building X").', outcomes: ['Rewrite three resume bullets from tasks into outcomes'] },
      { title: 'Matching a job posting', description: 'Mirroring the specific tools and language a real posting uses, without lying about your experience.', outcomes: ['Tailor a resume\'s keywords to a specific job posting'] },
      { title: 'A LinkedIn profile that isn\'t generic', description: 'A headline and summary specific enough that it couldn\'t apply to just anyone.', outcomes: ['Write a specific, non-generic LinkedIn headline and summary'] },
    ],
    estimated_minutes: 150,
    resources: ['r-tech-interview-handbook'],
    practice: [{ id: 'ex-resume-1', title: 'Tailor your resume to a real posting', description: 'Find a real data analyst job posting and rewrite your resume\'s bullets and keywords to match it honestly.' }],
    verify: ['Every bullet states an outcome, not just a task', 'Resume keywords reasonably match the target posting', 'LinkedIn summary is specific to you, not a generic template'],
  },
  {
    id: 'technical-interview-practice', title: 'Technical Interview Practice (SQL & Python)', category: 'Career',
    what_is_it: 'Solving SQL and Python problems out loud, under time pressure, the way a real technical screen works.',
    why_it_matters: 'Knowing SQL and being able to write it fluently while explaining your thinking to an interviewer are different skills — this closes that specific gap.',
    prerequisites: ['sql-window-functions', 'pandas'],
    objectives: ['Solve a timed SQL problem while narrating your approach', 'Solve a timed pandas problem while narrating your approach', 'Ask clarifying questions before writing code', 'Test your own solution before declaring it done'],
    subtopics: [
      { title: 'Narrating while coding', description: 'Explaining your plan before and while writing the query or code, not just presenting a finished answer.', outcomes: ['Narrate your approach clearly while solving a problem live'] },
      { title: 'Clarifying the question first', description: 'Asking about edge cases and assumptions before writing a single line.', outcomes: ['Ask at least one clarifying question before starting a problem'] },
      { title: 'Self-testing', description: 'Checking your own answer against an edge case before calling it finished.', outcomes: ['Test a solution against at least one edge case unprompted'] },
    ],
    estimated_minutes: 240,
    resources: ['r-tech-interview-handbook', 'r-pramp'],
    practice: [{ id: 'ex-tech-interview-1', title: 'Run a timed mock problem', description: 'Set a 20-minute timer and solve one SQL and one pandas problem out loud, recording yourself if possible to review after.' }],
    verify: ['Solution is correct and handles a stated edge case', 'Approach was narrated clearly, not solved in silence', 'At least one clarifying question was asked before starting'],
  },
  {
    id: 'case-study-interviews', title: 'Case Study & Take-Home Assignments', category: 'Career',
    what_is_it: 'Approaching an open-ended business case or take-home dataset the way real data analyst interviews actually test for — structured thinking under ambiguity.',
    why_it_matters: 'Many data analyst interviews aren\'t pure SQL/Python tests — they hand you a vague business problem or a raw dataset and watch how you structure your thinking.',
    prerequisites: ['business-understanding'],
    objectives: ['Structure an open-ended case with a clear framework', 'State assumptions explicitly instead of guessing silently', 'Prioritize what to analyze first given limited time', 'Present a recommendation, not just an analysis'],
    subtopics: [
      { title: 'Structuring ambiguity', description: 'Breaking a vague prompt into a concrete, answerable plan before diving into data.', outcomes: ['Turn an open-ended prompt into a structured analysis plan'] },
      { title: 'Stating assumptions', description: 'Naming what you\'re assuming out loud instead of silently guessing and hoping it\'s right.', outcomes: ['State assumptions explicitly before proceeding with an analysis'] },
      { title: 'Ending with a recommendation', description: 'Closing with what you\'d actually do, not just what you found.', outcomes: ['End a case study response with a specific recommendation'] },
    ],
    estimated_minutes: 180,
    resources: ['r-tech-interview-handbook'],
    practice: [{ id: 'ex-case-interview-1', title: 'Practice a business case', description: 'Time yourself working through an open-ended business case prompt, then write down your structure, assumptions, and final recommendation.' }],
    verify: ['Structure is clear before any numbers are calculated', 'Assumptions are stated, not hidden', 'Response ends with a specific, actionable recommendation'],
  },
  {
    id: 'salary-negotiation', title: 'Salary Negotiation', category: 'Career',
    what_is_it: 'Researching a fair market range and negotiating an offer professionally, instead of accepting the first number or negotiating blind.',
    why_it_matters: 'The negotiation conversation happens once per offer. Going in without research or a plan is the single most common way candidates leave money on the table.',
    prerequisites: [],
    objectives: ['Research a realistic market range for a role and location', 'Avoid naming a number first when possible', 'Negotiate beyond base salary when relevant', 'Respond to a lowball offer professionally'],
    subtopics: [
      { title: 'Researching a market range', description: 'Using public salary data and role/location comparisons to know what "fair" actually looks like.', outcomes: ['Research a realistic salary range for a specific role and location'] },
      { title: 'The negotiation conversation', description: 'Anchoring, timing, and how to respond when asked for a number first.', outcomes: ['Practice responding to "what are your salary expectations?"'] },
      { title: 'Beyond base salary', description: 'Signing bonus, equity, remote flexibility, and other levers besides the base number.', outcomes: ['Identify at least one non-salary lever worth negotiating'] },
    ],
    estimated_minutes: 90,
    resources: ['r-tech-interview-handbook'],
    practice: [{ id: 'ex-negotiation-1', title: 'Draft a negotiation response', description: 'Given a sample offer below your researched market range, draft the email or script you\'d use to negotiate it.' }],
    verify: ['Range is grounded in actual research, not a guess', 'Response is professional and specific, not vague or apologetic', 'At least one non-salary lever is considered'],
  },
];
for (const s of jobPrepSkills) { const { id, ...rest } = s; write(SKILLS_DIR, id, rest); }

// ---------------------------------------------------------------------------
// Wire everything into the Data Analyst roadmap
// ---------------------------------------------------------------------------
const roadmapFile = path.join(ROADMAPS_DIR, 'data-analyst.yaml');
const roadmap = yaml.load(fs.readFileSync(roadmapFile, 'utf8'));

function insertAfter(list, afterId, newIds) {
  const idx = list.indexOf(afterId);
  if (idx === -1) { list.push(...newIds); return; }
  list.splice(idx + 1, 0, ...newIds);
}

for (const stage of roadmap.stages) {
  if (stage.id === 'sql') insertAfter(stage.skills, 'sql-joins', ['sql-subqueries', 'sql-set-operations']);
  if (stage.id === 'sql') insertAfter(stage.skills, 'sql-window-functions', ['sql-query-optimization']);
  if (stage.id === 'python') insertAfter(stage.skills, 'python-fundamentals', ['python-notebooks']);
  if (stage.id === 'python') stage.skills.push('python-apis', 'python-regex');
  if (stage.id === 'visualization') insertAfter(stage.skills, 'charts', ['dataviz-color-accessibility', 'dataviz-geospatial']);
  if (stage.id === 'business-analytics') insertAfter(stage.skills, 'business-analytics', ['ab-testing', 'funnel-analysis', 'customer-segmentation']);
  if (stage.id === 'business-analytics') stage.skills.push('forecasting-trend-analysis');
  if (stage.id === 'portfolio') insertAfter(stage.skills, 'git-version-control', ['portfolio-website']);
  if (stage.id === 'portfolio') stage.skills.push('case-study-presentations');
  if (stage.id === 'job-preparation') stage.skills = ['resume-linkedin', 'technical-interview-practice', 'case-study-interviews', ...stage.skills, 'salary-negotiation'];
}

fs.writeFileSync(roadmapFile, yaml.dump(roadmap, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');

const total = sqlSkills.length + pythonSkills.length + vizSkills.length + bizSkills.length + portfolioSkills.length + jobPrepSkills.length;
console.log(`Added ${total} new skills across SQL, Python, Visualization, Business Analytics, Portfolio, and Job Preparation.`);
