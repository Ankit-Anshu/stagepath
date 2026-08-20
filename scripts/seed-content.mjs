// One-time content authoring script.
//
// This is NOT part of the running app — it exists so the initial content set
// (roadmaps, skills, resources, projects, assessments) can be authored as
// plain JS data and emitted as the YAML files the Astro content collections
// actually read from /content. Future content should be added by hand-editing
// or adding new YAML files directly; this script is a one-time seed, safe to
// re-run (it overwrites the files it owns).
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const CONTENT = path.join(ROOT, 'content');

function write(collection, id, data) {
  const dir = path.join(CONTENT, collection);
  fs.mkdirSync(dir, { recursive: true });
  const body = yaml.dump(data, { lineWidth: 100, noRefs: true, sortKeys: false });
  fs.writeFileSync(path.join(dir, `${id}.yaml`), body, 'utf8');
}

// ---------------------------------------------------------------------------
// Resources — standalone, reusable, referenced by id from many skills.
// ---------------------------------------------------------------------------
const resources = [
  { id: 'r-ms-pivot-tables', title: 'Create a PivotTable to analyze worksheet data', type: 'documentation', url: 'https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576', provider: 'Microsoft Support', duration_minutes: 20, difficulty: 'beginner', quality_score: 4.5, recommended: true },
  { id: 'r-exceljet-functions', title: 'Excel Functions Reference', type: 'documentation', url: 'https://exceljet.net/excel-functions', provider: 'Exceljet', duration_minutes: 30, difficulty: 'beginner', quality_score: 4.6 },
  { id: 'r-khan-statistics', title: 'Statistics and Probability', type: 'interactive', url: 'https://www.khanacademy.org/math/statistics-probability', provider: 'Khan Academy', duration_minutes: 300, difficulty: 'beginner', quality_score: 4.8, recommended: true },
  { id: 'r-seeing-theory', title: 'Seeing Theory: A Visual Introduction to Probability and Statistics', type: 'interactive', url: 'https://seeing-theory.brown.edu/', provider: 'Brown University', duration_minutes: 60, difficulty: 'beginner', quality_score: 4.7 },
  { id: 'r-grow-google-data-analytics', title: 'Google Data Analytics Certificate overview', type: 'article', url: 'https://grow.google/certificates/data-analytics/', provider: 'Google', duration_minutes: 15, difficulty: 'beginner', quality_score: 4.2 },
  { id: 'r-kaggle-data-cleaning', title: 'Data Cleaning', type: 'course', url: 'https://www.kaggle.com/learn/data-cleaning', provider: 'Kaggle Learn', duration_minutes: 240, difficulty: 'beginner', quality_score: 4.6, recommended: true },
  { id: 'r-w3schools-select', title: 'SQL SELECT Statement', type: 'article', url: 'https://www.w3schools.com/sql/sql_select.asp', provider: 'W3Schools', duration_minutes: 15, difficulty: 'beginner', quality_score: 4.3, recommended: true },
  { id: 'r-kaggle-intro-sql', title: 'Intro to SQL', type: 'course', url: 'https://www.kaggle.com/learn/intro-to-sql', provider: 'Kaggle Learn', duration_minutes: 180, difficulty: 'beginner', quality_score: 4.7 },
  { id: 'r-w3schools-where', title: 'SQL WHERE Clause', type: 'article', url: 'https://www.w3schools.com/sql/sql_where.asp', provider: 'W3Schools', duration_minutes: 15, difficulty: 'beginner', quality_score: 4.3, recommended: true },
  { id: 'r-w3schools-groupby', title: 'SQL GROUP BY Statement', type: 'article', url: 'https://www.w3schools.com/sql/sql_groupby.asp', provider: 'W3Schools', duration_minutes: 20, difficulty: 'beginner', quality_score: 4.3, recommended: true },
  { id: 'r-w3schools-join', title: 'SQL JOIN Reference', type: 'article', url: 'https://www.w3schools.com/sql/sql_join.asp', provider: 'W3Schools', duration_minutes: 25, difficulty: 'intermediate', quality_score: 4.4, recommended: true },
  { id: 'r-mode-sql-tutorial', title: 'SQL Tutorial', type: 'interactive', url: 'https://mode.com/sql-tutorial/', provider: 'Mode', duration_minutes: 240, difficulty: 'intermediate', quality_score: 4.8 },
  { id: 'r-postgres-tutorial', title: 'PostgreSQL Tutorial', type: 'documentation', url: 'https://www.postgresqltutorial.com/', provider: 'PostgreSQL Tutorial', duration_minutes: 120, difficulty: 'intermediate', quality_score: 4.5, recommended: true },
  { id: 'r-kaggle-advanced-sql', title: 'Advanced SQL', type: 'course', url: 'https://www.kaggle.com/learn/advanced-sql', provider: 'Kaggle Learn', duration_minutes: 240, difficulty: 'intermediate', quality_score: 4.6 },
  { id: 'r-python-docs-tutorial', title: 'The Python Tutorial', type: 'documentation', url: 'https://docs.python.org/3/tutorial/', provider: 'Python Software Foundation', duration_minutes: 300, difficulty: 'beginner', quality_score: 4.6, recommended: true },
  { id: 'r-automate-boring-stuff', title: 'Automate the Boring Stuff with Python', type: 'book', url: 'https://automatetheboringstuff.com/', provider: 'Al Sweigart', duration_minutes: 600, difficulty: 'beginner', quality_score: 4.8 },
  { id: 'r-kaggle-python', title: 'Python', type: 'course', url: 'https://www.kaggle.com/learn/python', provider: 'Kaggle Learn', duration_minutes: 300, difficulty: 'beginner', quality_score: 4.6 },
  { id: 'r-numpy-quickstart', title: 'NumPy Quickstart', type: 'documentation', url: 'https://numpy.org/doc/stable/user/quickstart.html', provider: 'NumPy', duration_minutes: 45, difficulty: 'beginner', quality_score: 4.5, recommended: true },
  { id: 'r-pandas-10min', title: '10 Minutes to pandas', type: 'documentation', url: 'https://pandas.pydata.org/docs/user_guide/10min.html', provider: 'pandas', duration_minutes: 30, difficulty: 'beginner', quality_score: 4.6, recommended: true },
  { id: 'r-kaggle-pandas', title: 'Pandas', type: 'course', url: 'https://www.kaggle.com/learn/pandas', provider: 'Kaggle Learn', duration_minutes: 240, difficulty: 'intermediate', quality_score: 4.7 },
  { id: 'r-datavizcatalogue', title: 'The Data Visualisation Catalogue', type: 'interactive', url: 'https://datavizcatalogue.com/', provider: 'Data Visualisation Catalogue', duration_minutes: 60, difficulty: 'beginner', quality_score: 4.5, recommended: true },
  { id: 'r-kaggle-dataviz', title: 'Data Visualization', type: 'course', url: 'https://www.kaggle.com/learn/data-visualization', provider: 'Kaggle Learn', duration_minutes: 240, difficulty: 'intermediate', quality_score: 4.6 },
  { id: 'r-ms-powerbi-training', title: 'Power BI training', type: 'course', url: 'https://learn.microsoft.com/en-us/training/powerplatform/power-bi', provider: 'Microsoft Learn', duration_minutes: 300, difficulty: 'intermediate', quality_score: 4.5, recommended: true },
  { id: 'r-storytelling-with-data', title: 'Storytelling with Data (blog)', type: 'article', url: 'https://www.storytellingwithdata.com/blog', provider: 'Storytelling with Data', duration_minutes: 60, difficulty: 'intermediate', quality_score: 4.7, recommended: true },
  { id: 'r-fcc-data-analysis-python', title: 'Data Analysis with Python', type: 'course', url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/', provider: 'freeCodeCamp', duration_minutes: 600, difficulty: 'intermediate', quality_score: 4.5 },
  { id: 'r-readme-so', title: 'readme.so — README editor', type: 'interactive', url: 'https://readme.so/', provider: 'readme.so', duration_minutes: 15, difficulty: 'beginner', quality_score: 4.3, recommended: true },
  { id: 'r-github-best-practices', title: 'Best practices for repositories', type: 'documentation', url: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories', provider: 'GitHub Docs', duration_minutes: 20, difficulty: 'beginner', quality_score: 4.4 },
  { id: 'r-tech-interview-handbook', title: 'Tech Interview Handbook', type: 'documentation', url: 'https://www.techinterviewhandbook.org/', provider: 'Tech Interview Handbook', duration_minutes: 180, difficulty: 'intermediate', quality_score: 4.7, recommended: true },
  { id: 'r-pramp', title: 'Pramp — free peer mock interviews', type: 'interactive', url: 'https://www.pramp.com/', provider: 'Pramp', duration_minutes: 60, difficulty: 'intermediate', quality_score: 4.4 },
  { id: 'r-aws-what-is-etl', title: 'What is ETL?', type: 'article', url: 'https://aws.amazon.com/what-is/etl/', provider: 'AWS', duration_minutes: 15, difficulty: 'beginner', quality_score: 4.2, recommended: true },
  { id: 'r-aws-what-is-data-warehouse', title: 'What is a Data Warehouse?', type: 'article', url: 'https://aws.amazon.com/what-is/data-warehouse/', provider: 'AWS', duration_minutes: 15, difficulty: 'beginner', quality_score: 4.2, recommended: true },
  { id: 'r-dbt-guides', title: 'dbt Getting Started Guides', type: 'documentation', url: 'https://docs.getdbt.com/guides', provider: 'dbt Labs', duration_minutes: 120, difficulty: 'intermediate', quality_score: 4.5, recommended: true },
  { id: 'r-airflow-docs', title: 'Apache Airflow Documentation', type: 'documentation', url: 'https://airflow.apache.org/docs/', provider: 'Apache Airflow', duration_minutes: 120, difficulty: 'intermediate', quality_score: 4.3, recommended: true },
  { id: 'r-google-ml-crash-course', title: 'Machine Learning Crash Course', type: 'course', url: 'https://developers.google.com/machine-learning/crash-course', provider: 'Google', duration_minutes: 900, difficulty: 'intermediate', quality_score: 4.7, recommended: true },
  { id: 'r-sklearn-model-evaluation', title: 'Model evaluation: quantifying the quality of predictions', type: 'documentation', url: 'https://scikit-learn.org/stable/modules/model_evaluation.html', provider: 'scikit-learn', duration_minutes: 90, difficulty: 'advanced', quality_score: 4.5, recommended: true },
];

for (const r of resources) {
  const { id, ...rest } = r;
  write('resources', id, {
    title: rest.title,
    type: rest.type,
    url: rest.url,
    provider: rest.provider,
    duration_minutes: rest.duration_minutes,
    difficulty: rest.difficulty,
    free: true,
    language: 'en',
    last_verified: '2026-08-18',
    ...(rest.quality_score ? { quality_score: rest.quality_score } : {}),
    recommended: !!rest.recommended,
  });
}

// ---------------------------------------------------------------------------
// Skills — the reusable skill graph. Every career roadmap points at these by id.
// ---------------------------------------------------------------------------
const skills = [
  {
    id: 'spreadsheets', title: 'Spreadsheets',
    what_is_it: 'Using a spreadsheet tool (Excel or Google Sheets) to organize, clean, and summarize tabular data with formulas, lookups, and pivot tables.',
    why_it_matters: 'Spreadsheets are still the most common tool business stakeholders use to review data. Being fluent in them lets you clean data quickly and communicate with non-technical teams in a format they already trust.',
    prerequisites: [],
    objectives: ['Clean messy tabular data', 'Use lookup and reference formulas', 'Build and read a pivot table', 'Spot data entry errors and inconsistencies'],
    estimated_minutes: 300,
    resources: ['r-ms-pivot-tables', 'r-exceljet-functions'],
    practice: [{ id: 'ex-spreadsheets-1', title: 'Clean a messy sales export', description: 'Given a CSV with duplicate rows, inconsistent date formats, and blank cells, produce a clean version ready for analysis.' }],
    project: 'project-clean-messy-sales-data',
    verify: ['Removes duplicates without deleting valid rows', 'Formulas reference cells instead of hard-coded values', 'Pivot table correctly summarizes by category and date', 'Can explain each cleaning step taken'],
  },
  {
    id: 'statistics', title: 'Statistics',
    what_is_it: 'The core statistical concepts used in analytics: descriptive statistics, distributions, correlation, and the basics of hypothesis testing.',
    why_it_matters: 'Statistics is what separates "the number went up" from "the number went up and here is whether that is meaningful." It is the foundation for A/B testing, forecasting, and any claim about what data shows.',
    prerequisites: [],
    objectives: ['Summarize a dataset with mean, median, and standard deviation', 'Explain a distribution shape', 'Distinguish correlation from causation', 'Interpret a basic hypothesis test / p-value'],
    estimated_minutes: 600,
    resources: ['r-khan-statistics', 'r-seeing-theory'],
    practice: [{ id: 'ex-statistics-1', title: 'Describe a dataset', description: 'Given a numeric dataset, compute and interpret mean, median, standard deviation, and identify outliers.' }],
    verify: ['Correctly computes descriptive statistics by hand or in a tool', 'Can explain why correlation does not imply causation with an example', 'Can interpret a p-value in plain language', 'Can identify when a sample is too small or biased to trust'],
  },
  {
    id: 'data-thinking', title: 'Data Thinking',
    what_is_it: 'Framing a business question as an answerable data question: defining metrics, choosing the right level of granularity, and knowing what evidence would change a decision.',
    why_it_matters: 'Most failed analyses fail before any query is written — the wrong question was asked. Data thinking is the skill of translating a vague business ask into something measurable.',
    prerequisites: [],
    objectives: ['Turn a vague business question into a measurable one', 'Choose an appropriate metric and time window', 'Identify what evidence would change the decision', 'Recognize when the data cannot answer the question'],
    estimated_minutes: 180,
    resources: ['r-grow-google-data-analytics', 'r-kaggle-data-cleaning'],
    practice: [{ id: 'ex-data-thinking-1', title: 'Reframe a vague ask', description: 'Given the prompt "sales feel slow this quarter," write the specific, measurable question you would actually answer, and what data you would need.' }],
    verify: ['States a specific, measurable question rather than a vague one', 'Identifies the metric, segment, and time window', 'Names what data would be needed and where it might come from', 'Identifies at least one way the analysis could be misleading'],
  },
  {
    id: 'sql-select', title: 'SQL — SELECT',
    what_is_it: 'Retrieving columns and rows from a single table using SELECT, and controlling which data comes back.',
    why_it_matters: 'SELECT is the entry point to every SQL query you will ever write. Every other SQL skill builds directly on top of it.',
    prerequisites: [],
    objectives: ['Select specific columns from a table', 'Use column aliases', 'Sort results with ORDER BY', 'Limit the number of rows returned'],
    estimated_minutes: 120,
    resources: ['r-w3schools-select', 'r-kaggle-intro-sql'],
    practice: [{ id: 'ex-sql-select-1', title: 'Query a customers table', description: 'Write a query that returns customer name and signup date, sorted by signup date, for the 10 most recent signups.' }],
    verify: ['Selects only the required columns', 'Uses meaningful aliases', 'ORDER BY and LIMIT produce the correct rows'],
  },
  {
    id: 'sql-filtering', title: 'SQL — Filtering',
    what_is_it: 'Narrowing query results with WHERE, comparison operators, boolean logic, and pattern matching.',
    why_it_matters: 'Almost no real question is "show me everything" — it is "show me the subset that matters." Filtering is how you get there.',
    prerequisites: ['sql-select'],
    objectives: ['Filter rows with WHERE', 'Combine conditions with AND / OR / NOT', 'Filter on ranges and lists (BETWEEN, IN)', 'Handle NULLs correctly in filters'],
    estimated_minutes: 120,
    resources: ['r-w3schools-where', 'r-kaggle-intro-sql'],
    practice: [{ id: 'ex-sql-filtering-1', title: 'Find at-risk orders', description: 'Write a query that returns orders with status "pending" that are older than 7 days, excluding orders with a NULL customer_id.' }],
    verify: ['Combines multiple conditions correctly', 'Handles NULL explicitly rather than assuming it behaves like a value', 'Filter logic matches the stated business rule exactly'],
  },
  {
    id: 'sql-aggregation', title: 'SQL — Aggregation',
    what_is_it: 'Summarizing rows into totals, counts, and averages using aggregate functions and GROUP BY, with HAVING to filter aggregated results.',
    why_it_matters: 'Business questions are almost always about summaries — total revenue, average order size, count of active users — not individual rows.',
    prerequisites: ['sql-filtering'],
    objectives: ['Use COUNT, SUM, AVG, MIN, MAX', 'Group results with GROUP BY', 'Filter groups with HAVING', 'Avoid mixing aggregated and non-aggregated columns incorrectly'],
    estimated_minutes: 180,
    resources: ['r-w3schools-groupby', 'r-kaggle-intro-sql'],
    practice: [{ id: 'ex-sql-aggregation-1', title: 'Monthly revenue by region', description: 'Write a query that returns total revenue per region per month, only for regions with more than $10,000 in revenue.' }],
    verify: ['GROUP BY includes every non-aggregated selected column', 'HAVING is used to filter on the aggregate, not WHERE', 'Aggregate values match a manual spot check'],
  },
  {
    id: 'sql-joins', title: 'SQL — JOINs',
    what_is_it: 'Combining data from multiple tables using relationships between columns — INNER, LEFT, RIGHT, and FULL joins.',
    why_it_matters: 'Most real-world analytics work involves combining multiple datasets — customers with orders, orders with products. JOINs are how relational data becomes an answer.',
    prerequisites: ['sql-aggregation'],
    objectives: ['Explain the difference between INNER and LEFT JOIN', 'Join three or more tables correctly', 'Avoid accidental row duplication from a join', 'Handle NULLs produced by a LEFT JOIN'],
    estimated_minutes: 240,
    resources: ['r-w3schools-join', 'r-mode-sql-tutorial', 'r-kaggle-intro-sql'],
    practice: [{ id: 'ex-sql-joins-1', title: 'Customers without orders', description: 'Write a query that returns every customer and their order count, including customers who have never ordered.' }],
    project: 'project-ecommerce-customer-analysis',
    verify: ['Correct INNER JOIN', 'Correct LEFT JOIN', 'No accidental row multiplication', 'Handles NULL values produced by the join', 'Can explain why that JOIN type was chosen'],
    assessment: 'assessment-sql-foundations-checkpoint',
  },
  {
    id: 'sql-ctes', title: 'SQL — CTEs',
    what_is_it: 'Breaking a complex query into named, readable steps using WITH (common table expressions), including recursive CTEs.',
    why_it_matters: 'Real analytics queries get complicated fast. CTEs make a query readable, testable step by step, and reusable within itself.',
    prerequisites: ['sql-joins'],
    objectives: ['Write a query using one or more CTEs', 'Explain why a CTE is more readable than a nested subquery', 'Chain multiple CTEs together'],
    estimated_minutes: 180,
    resources: ['r-postgres-tutorial', 'r-kaggle-advanced-sql'],
    practice: [{ id: 'ex-sql-ctes-1', title: 'Refactor a nested subquery', description: 'Given a deeply nested subquery, rewrite it as a sequence of CTEs that produces the same result and is easier to read.' }],
    verify: ['CTE result matches the original nested query exactly', 'Each CTE has a clear, single purpose', 'Can explain the query step by step using the CTE names'],
  },
  {
    id: 'sql-window-functions', title: 'SQL — Window Functions',
    what_is_it: 'Computing running totals, rankings, and row-to-row comparisons without collapsing rows, using OVER, PARTITION BY, and ranking functions.',
    why_it_matters: 'Window functions answer questions aggregation cannot — "rank within group," "running total," "compare to previous row" — while keeping the underlying rows intact.',
    prerequisites: ['sql-ctes'],
    objectives: ['Use ROW_NUMBER, RANK, and DENSE_RANK', 'Partition a window with PARTITION BY', 'Compute a running total', 'Compare a row to the previous row with LAG/LEAD'],
    estimated_minutes: 240,
    resources: ['r-postgres-tutorial', 'r-kaggle-advanced-sql'],
    practice: [{ id: 'ex-sql-window-1', title: 'Rank customers within region', description: 'Write a query that ranks customers by total spend within each region, and flags the top 3 per region.' }],
    verify: ['PARTITION BY groups match the stated business rule', 'Ranking function choice (ROW_NUMBER vs RANK vs DENSE_RANK) is justified', 'Running total or comparison values match a manual spot check'],
    assessment: 'assessment-sql-foundations-checkpoint',
  },
  {
    id: 'python-fundamentals', title: 'Python Fundamentals',
    what_is_it: 'Core Python: variables, data types, control flow, functions, and working with files — enough to write a script that transforms data.',
    why_it_matters: 'Python is the connective tissue of a modern data workflow — it is what you reach for when a spreadsheet or SQL query alone is not enough.',
    prerequisites: [],
    objectives: ['Write functions with parameters and return values', 'Use lists, dicts, and loops to process data', 'Read and write a CSV file', 'Debug a script using error messages'],
    estimated_minutes: 600,
    resources: ['r-python-docs-tutorial', 'r-automate-boring-stuff', 'r-kaggle-python'],
    practice: [{ id: 'ex-python-fundamentals-1', title: 'Parse and summarize a CSV', description: 'Without pandas, write a script that reads a CSV of transactions and prints total amount per category.' }],
    verify: ['Script runs without errors on the sample file', 'Uses functions instead of one long block', 'Correctly handles a malformed row instead of crashing'],
  },
  {
    id: 'numpy', title: 'NumPy',
    what_is_it: 'Working with numeric arrays efficiently using NumPy: vectorized operations, indexing, and broadcasting.',
    why_it_matters: 'NumPy is the numeric foundation pandas and most of the Python data stack are built on. Understanding arrays makes pandas behavior much less mysterious.',
    prerequisites: ['python-fundamentals'],
    objectives: ['Create and index NumPy arrays', 'Use vectorized operations instead of loops', 'Explain broadcasting with a simple example'],
    estimated_minutes: 180,
    resources: ['r-numpy-quickstart'],
    practice: [{ id: 'ex-numpy-1', title: 'Vectorize a calculation', description: 'Rewrite a loop-based calculation (e.g. normalizing a list of numbers) as a single vectorized NumPy operation.' }],
    verify: ['Vectorized version produces identical output to the loop version', 'No unnecessary Python-level loop remains', 'Can explain what broadcasting did in the solution'],
  },
  {
    id: 'pandas', title: 'Pandas',
    what_is_it: 'Loading, cleaning, transforming, and summarizing tabular data in Python using DataFrames — the Python equivalent of a supercharged spreadsheet.',
    why_it_matters: 'Pandas is the default tool for real-world data cleaning and exploratory analysis in Python, and the bridge between raw data and every downstream step, including modeling and visualization.',
    prerequisites: ['numpy'],
    objectives: ['Load and inspect a DataFrame', 'Filter, sort, and group data', 'Handle missing values deliberately', 'Merge two DataFrames correctly'],
    estimated_minutes: 360,
    resources: ['r-pandas-10min', 'r-kaggle-pandas'],
    practice: [{ id: 'ex-pandas-1', title: 'Clean and merge two datasets', description: 'Given a customers DataFrame and an orders DataFrame with missing values, clean both and merge them into one analysis-ready table.' }],
    project: 'project-customer-churn-analysis',
    verify: ['Missing values are handled deliberately, not silently dropped without justification', 'Merge uses the correct join type and key', 'Resulting DataFrame shape matches expectations', 'Can explain each transformation step'],
    assessment: 'assessment-python-foundations-checkpoint',
  },
  {
    id: 'charts', title: 'Charts',
    what_is_it: 'Choosing and building the right chart type for a given question — bar, line, scatter, and distribution charts — and avoiding common chart mistakes.',
    why_it_matters: 'The wrong chart type can make correct data look wrong, or hide the exact insight you are trying to show. Chart choice is a communication decision, not just an aesthetic one.',
    prerequisites: [],
    objectives: ['Match a chart type to a question (comparison, trend, distribution, relationship)', 'Avoid misleading axes and truncated scales', 'Label a chart so it stands on its own without narration'],
    estimated_minutes: 180,
    resources: ['r-datavizcatalogue', 'r-kaggle-dataviz'],
    practice: [{ id: 'ex-charts-1', title: 'Pick the right chart', description: 'Given three business questions (trend over time, comparison across categories, relationship between two variables), choose and sketch the right chart type for each.' }],
    verify: ['Chart type matches the question being asked', 'Axes are not truncated in a misleading way', 'Chart has a clear title and labeled axes'],
  },
  {
    id: 'dashboard-design', title: 'Dashboard Design',
    what_is_it: 'Laying out multiple charts and KPIs into a single dashboard that a stakeholder can scan and act on, using a BI tool such as Power BI or Tableau.',
    why_it_matters: 'A dashboard is not a pile of charts — it is a tool for a specific decision-maker to answer specific questions quickly. Layout and hierarchy matter as much as the charts themselves.',
    prerequisites: ['charts'],
    objectives: ['Design a KPI layout with clear visual hierarchy', 'Add interactive filters', 'Publish and share a dashboard'],
    estimated_minutes: 300,
    resources: ['r-kaggle-dataviz', 'r-ms-powerbi-training'],
    practice: [{ id: 'ex-dashboard-1', title: 'Wireframe a sales dashboard', description: 'Sketch the layout of a dashboard answering "how is this month\'s sales performance trending against target?" before building it.' }],
    project: 'project-sales-dashboard',
    verify: ['Most important KPI is the most visually prominent element', 'Filters work and update every chart correctly', 'A first-time viewer can answer the dashboard\'s core question in under 10 seconds'],
  },
  {
    id: 'storytelling', title: 'Storytelling',
    what_is_it: 'Presenting an analysis so a non-technical audience understands the finding, why it matters, and what to do about it.',
    why_it_matters: 'An analysis nobody acts on has no impact, no matter how correct it is. Storytelling is the skill that turns analysis into a decision.',
    prerequisites: ['dashboard-design'],
    objectives: ['Lead with the finding, not the method', 'Structure a narrative: context, finding, so-what, recommendation', 'Anticipate and pre-empt the obvious follow-up question'],
    estimated_minutes: 180,
    resources: ['r-storytelling-with-data'],
    practice: [{ id: 'ex-storytelling-1', title: 'Write a one-paragraph summary', description: 'Take any completed analysis and write a single paragraph a busy executive could read in 20 seconds and know what to do.' }],
    verify: ['Finding is stated in the first sentence', 'Recommendation is explicit, not implied', 'A non-technical reader could summarize it back correctly'],
  },
  {
    id: 'business-analytics', title: 'Business Analytics',
    what_is_it: 'Applying data skills to real business contexts — revenue, retention, funnels, and experiments — and translating results into a recommendation.',
    why_it_matters: 'This is where technical skill becomes business value: knowing which metric actually matters for a given business model and situation.',
    prerequisites: ['sql-aggregation', 'statistics'],
    objectives: ['Define and calculate a standard business metric (e.g. retention, churn, conversion rate)', 'Read and interpret a funnel', 'Design a simple A/B test and interpret its result'],
    estimated_minutes: 300,
    resources: ['r-grow-google-data-analytics', 'r-fcc-data-analysis-python'],
    practice: [{ id: 'ex-business-analytics-1', title: 'Diagnose a metric drop', description: 'Given a dataset showing a conversion rate drop, segment the data to identify which segment is driving the change and propose a next step.' }],
    project: 'project-ab-testing-analysis',
    verify: ['Metric definition matches the standard definition used in the field', 'Segmentation correctly isolates the driver of the change', 'Recommendation follows logically from the evidence shown'],
    assessment: 'assessment-portfolio-readiness-checkpoint',
  },
  {
    id: 'portfolio-building', title: 'Portfolio Building',
    what_is_it: 'Turning finished projects into evidence a hiring manager can evaluate in minutes — a clear README, a public repository, and a short write-up per project.',
    why_it_matters: 'A finished project nobody can find or understand is functionally the same as an unfinished one. Portfolio building is what makes learning visible to someone else.',
    prerequisites: ['business-analytics'],
    objectives: ['Write a README that explains the problem, approach, and findings', 'Publish a project to a public GitHub repository', 'Select the 3-4 projects that best represent target-role skills'],
    estimated_minutes: 240,
    resources: ['r-readme-so', 'r-github-best-practices'],
    practice: [{ id: 'ex-portfolio-1', title: 'Write a project README', description: 'Take one completed project and write a README covering: problem, approach, tools, key findings, and how to reproduce it.' }],
    verify: ['README explains the problem before the solution', 'A stranger could understand what was done without asking questions', 'Repository is public and actually runs / opens as described'],
  },
  {
    id: 'job-preparation', title: 'Job Preparation',
    what_is_it: 'Preparing to talk about your projects and skills under interview conditions — resume framing, technical questions, and mock interviews.',
    why_it_matters: 'Being able to do the work and being able to demonstrate that you can do the work under interview pressure are different skills. This closes that gap.',
    prerequisites: ['portfolio-building'],
    objectives: ['Frame resume bullets around measurable outcomes', 'Answer a behavioral question using a structured format', 'Walk through a portfolio project out loud in under 3 minutes'],
    estimated_minutes: 240,
    resources: ['r-tech-interview-handbook', 'r-pramp'],
    practice: [{ id: 'ex-job-prep-1', title: 'Do one mock interview', description: 'Complete one full mock interview (technical or behavioral) with a peer or a free platform and note two things to improve.' }],
    assessment: 'assessment-portfolio-readiness-checkpoint',
    verify: ['Can walk through a portfolio project clearly in under 3 minutes', 'Resume bullets state outcomes, not just tasks performed', 'Has completed at least one mock interview'],
  },
  // --- Data Engineer specific ---
  {
    id: 'etl-fundamentals', title: 'ETL Fundamentals',
    what_is_it: 'The extract-transform-load pattern for moving data from source systems into a place it can be analyzed, and the tradeoffs of ETL vs ELT.',
    why_it_matters: 'Nothing downstream — dashboards, models, reports — works if the data pipeline feeding it is unreliable. ETL is the foundation of the data engineer\'s job.',
    prerequisites: ['sql-joins', 'python-fundamentals'],
    objectives: ['Explain the difference between ETL and ELT', 'Identify extract, transform, and load steps in an existing pipeline', 'Design a simple pipeline for a given source and destination'],
    estimated_minutes: 180,
    resources: ['r-aws-what-is-etl'],
    practice: [{ id: 'ex-etl-1', title: 'Diagram a pipeline', description: 'Given a source (an API) and a destination (a warehouse table), diagram the extract, transform, and load steps and where each could fail.' }],
    verify: ['Diagram correctly separates extract, transform, and load stages', 'Identifies at least one realistic failure point', 'Can justify the ETL vs ELT choice made'],
  },
  {
    id: 'data-warehousing', title: 'Data Warehousing',
    what_is_it: 'How analytical databases are structured for fast querying at scale — star schemas, fact and dimension tables, and partitioning.',
    why_it_matters: 'A warehouse schema designed for reporting is not the same as one designed for a transactional app. Getting this wrong makes every downstream query slow or wrong.',
    prerequisites: ['sql-aggregation'],
    objectives: ['Explain fact vs dimension tables', 'Design a simple star schema for a business process', 'Explain why partitioning improves query performance at scale'],
    estimated_minutes: 240,
    resources: ['r-aws-what-is-data-warehouse'],
    practice: [{ id: 'ex-warehousing-1', title: 'Design a star schema', description: 'Given a description of an orders business process, design a fact table and its supporting dimension tables.' }],
    verify: ['Fact table grain is stated explicitly', 'Dimension tables are correctly separated from the fact table', 'Schema supports the stated reporting questions'],
  },
  {
    id: 'dbt-transformations', title: 'dbt Transformations',
    what_is_it: 'Writing modular, version-controlled, testable SQL transformations using dbt, instead of one-off scripts.',
    why_it_matters: 'dbt is the industry-standard way modern data teams manage transformation logic — with version control, testing, and documentation built in.',
    prerequisites: ['sql-ctes'],
    objectives: ['Write a dbt model', 'Add a test to a dbt model', 'Explain how dbt manages dependencies between models'],
    estimated_minutes: 240,
    resources: ['r-dbt-guides'],
    practice: [{ id: 'ex-dbt-1', title: 'Convert a query into a dbt model', description: 'Take an existing multi-CTE SQL query and restructure it as a set of small, testable dbt models.' }],
    verify: ['Each model has a single clear responsibility', 'At least one dbt test is added and passes', 'Model lineage/dependency graph is correct'],
  },
  {
    id: 'workflow-orchestration', title: 'Workflow Orchestration',
    what_is_it: 'Scheduling, sequencing, and monitoring data pipelines so they run reliably and predictably, using a tool such as Apache Airflow.',
    why_it_matters: 'A pipeline that only works when someone runs it by hand is not a production pipeline. Orchestration is what makes data infrastructure trustworthy.',
    prerequisites: ['etl-fundamentals'],
    objectives: ['Explain what a DAG is and why pipelines are modeled as one', 'Schedule a pipeline to run on a recurring basis', 'Design retries and alerting for a failing task'],
    estimated_minutes: 240,
    resources: ['r-airflow-docs'],
    practice: [{ id: 'ex-orchestration-1', title: 'Design a DAG', description: 'Given three dependent pipeline steps, design the DAG, schedule, and retry/alerting behavior for each step.' }],
    verify: ['DAG dependencies match the real order of operations', 'Retry and alerting behavior is defined, not left implicit', 'Schedule matches the stated freshness requirement'],
  },
  // --- Data Scientist specific ---
  {
    id: 'machine-learning-fundamentals', title: 'Machine Learning Fundamentals',
    what_is_it: 'The core supervised learning workflow: framing a prediction problem, splitting data, training a baseline model, and avoiding data leakage.',
    why_it_matters: 'Most of the value (and most of the mistakes) in applied ML happen before any advanced model is chosen — in framing the problem and preparing the data correctly.',
    prerequisites: ['pandas', 'statistics'],
    objectives: ['Frame a business problem as a supervised learning problem', 'Correctly split data into train and test sets', 'Train and evaluate a simple baseline model', 'Identify a source of data leakage'],
    estimated_minutes: 360,
    resources: ['r-google-ml-crash-course'],
    practice: [{ id: 'ex-ml-1', title: 'Build a baseline model', description: 'Given a labeled dataset, split it correctly and train the simplest reasonable baseline model before anything more complex.' }],
    verify: ['Train/test split is done before any preprocessing that uses the full dataset', 'Baseline model result is stated as a benchmark, not a final answer', 'Can name a specific leakage risk in the given dataset'],
  },
  {
    id: 'model-evaluation', title: 'Model Evaluation',
    what_is_it: 'Choosing the right metric for a model and a problem, and interpreting evaluation results honestly, including on imbalanced data.',
    why_it_matters: 'A model with 95% accuracy can be worthless if the underlying classes are imbalanced. Evaluation is where "the model works" claims get tested.',
    prerequisites: ['machine-learning-fundamentals'],
    objectives: ['Choose an evaluation metric appropriate to the problem (accuracy, precision/recall, RMSE, etc.)', 'Read a confusion matrix', 'Explain why accuracy can be misleading on imbalanced data'],
    estimated_minutes: 180,
    resources: ['r-sklearn-model-evaluation'],
    practice: [{ id: 'ex-model-eval-1', title: 'Evaluate an imbalanced classifier', description: 'Given a classifier trained on an imbalanced dataset, choose and justify a metric other than accuracy, and interpret the result.' }],
    verify: ['Metric choice is justified relative to the business cost of false positives/negatives', 'Confusion matrix is read correctly', 'States a clear limitation of the evaluation performed'],
  },
];

for (const s of skills) {
  const { id, ...rest } = s;
  write('skills', id, rest);
}

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
const projects = [
  {
    id: 'project-clean-messy-sales-data', title: 'Sales Data Analysis', level: 'mini', duration: '45-60 minutes',
    description: 'Clean a messy raw sales export and summarize it in a pivot table.',
    skills: ['spreadsheets'],
    datasets: ['Raw sales export (CSV) with duplicate rows, inconsistent date formats, and blank cells'],
    tasks: ['Remove duplicate rows', 'Fix inconsistent date formats', 'Standardize currency values', 'Build a pivot summary by region and month'],
    artifacts: ['Cleaned spreadsheet'],
  },
  {
    id: 'project-ecommerce-customer-analysis', title: 'E-commerce Customer Analysis', level: 'portfolio', duration: '5-8 hours',
    description: 'Use SQL joins and aggregation across a small e-commerce schema to answer real business questions about customers and revenue.',
    skills: ['sql-joins', 'sql-aggregation'],
    datasets: ['customers', 'orders', 'products'],
    tasks: ['Identify the highest-value customers', 'Analyze product revenue', 'Calculate monthly revenue', 'Explain the SQL used'],
    artifacts: ['SQL queries', 'README'],
  },
  {
    id: 'project-customer-churn-analysis', title: 'Customer Churn Analysis', level: 'portfolio', duration: '6-10 hours',
    description: 'Explore a customer/subscription dataset in pandas to identify churn drivers and segment customers by risk.',
    skills: ['pandas', 'statistics'],
    datasets: ['Customer subscription and usage history (CSV)'],
    tasks: ['Explore churn drivers', 'Segment customers by risk', 'Summarize findings and a recommendation in a notebook'],
    artifacts: ['Jupyter Notebook', 'GitHub repository', 'README'],
  },
  {
    id: 'project-sales-dashboard', title: 'Sales Dashboard', level: 'portfolio', duration: '5-8 hours',
    description: 'Design and publish an interactive sales dashboard that a sales manager could actually use.',
    skills: ['dashboard-design', 'charts'],
    datasets: ['Sales transactions dataset'],
    tasks: ['Design a KPI layout with clear hierarchy', 'Build interactive filters', 'Publish a shareable dashboard'],
    artifacts: ['Dashboard', 'Screenshots', 'README'],
  },
  {
    id: 'project-ab-testing-analysis', title: 'A/B Testing Analysis', level: 'portfolio', duration: '4-6 hours',
    description: 'Analyze the results of an A/B test end to end: hypothesis, significance test, and recommendation.',
    skills: ['statistics', 'business-analytics'],
    datasets: ['A/B test experiment results (CSV)'],
    tasks: ['State a clear hypothesis', 'Test for statistical significance', 'Recommend a ship / no-ship decision with reasoning'],
    artifacts: ['Notebook or report', 'README'],
  },
  {
    id: 'project-marketplace-analytics-platform', title: 'Marketplace Analytics Platform', level: 'capstone', duration: '25-35 hours',
    description: 'Build a complete analytics solution for a fictional marketplace company end to end: schema, pipeline, dashboard, and executive summary.',
    skills: ['sql-window-functions', 'pandas', 'dashboard-design', 'business-analytics'],
    datasets: ['users', 'listings', 'transactions', 'reviews'],
    tasks: ['Model the multi-table schema end to end', 'Build a SQL + Python analytics pipeline', 'Publish a dashboard', 'Write an executive summary presentation'],
    artifacts: ['GitHub repository', 'Dashboard', 'Notebook', 'SQL queries', 'README', 'Presentation'],
  },
];

for (const p of projects) {
  const { id, ...rest } = p;
  write('projects', id, rest);
}

// ---------------------------------------------------------------------------
// Assessments (checkpoints)
// ---------------------------------------------------------------------------
const assessments = [
  {
    id: 'assessment-sql-foundations-checkpoint', title: 'SQL Foundations Checkpoint', type: 'checkpoint',
    skills: ['sql-select', 'sql-filtering', 'sql-aggregation', 'sql-joins', 'sql-ctes', 'sql-window-functions'],
    checklist: ['Write queries using JOINs', 'Aggregate data correctly', 'Use CTEs', 'Use window functions', 'Explain query logic', 'Complete the SQL project', 'Pass the checkpoint assessment'],
    pass_criteria: 'All checklist items demonstrated, and the E-commerce Customer Analysis project is complete.',
  },
  {
    id: 'assessment-python-foundations-checkpoint', title: 'Python Foundations Checkpoint', type: 'checkpoint',
    skills: ['python-fundamentals', 'numpy', 'pandas'],
    checklist: ['Write and debug Python scripts independently', 'Manipulate arrays with NumPy', 'Clean and transform data with pandas', 'Complete the Customer Churn Analysis project'],
    pass_criteria: 'All checklist items demonstrated, and the Customer Churn Analysis project is complete.',
  },
  {
    id: 'assessment-portfolio-readiness-checkpoint', title: 'Portfolio Readiness Checkpoint', type: 'checkpoint',
    skills: ['portfolio-building', 'job-preparation'],
    checklist: ['At least 3 portfolio projects published with a README', 'Can explain every published project\'s approach and findings out loud', 'Resume reflects verified skills, not just topics studied', 'Comfortable completing a mock interview'],
    pass_criteria: 'All checklist items demonstrated.',
  },
];

for (const a of assessments) {
  const { id, ...rest } = a;
  write('assessments', id, rest);
}

// ---------------------------------------------------------------------------
// Roadmaps
// ---------------------------------------------------------------------------
const roadmaps = [
  {
    id: 'data-analyst', title: 'Data Analyst', difficulty: 'beginner', estimated_hours: 420,
    description: 'Go from not knowing where to start to being able to prove you can analyze data, build dashboards, and communicate findings a business can act on.',
    stages: [
      { id: 'foundations', title: 'Foundations', description: 'The baseline thinking and tooling every later stage depends on.', skills: ['spreadsheets', 'statistics', 'data-thinking'] },
      { id: 'sql', title: 'SQL', description: 'Query, filter, aggregate, and combine data confidently.', skills: ['sql-select', 'sql-filtering', 'sql-aggregation', 'sql-joins', 'sql-ctes', 'sql-window-functions'],
        checkpoint: { id: 'sql-foundations', title: 'SQL Foundations Checkpoint', requires: ['sql-select', 'sql-filtering', 'sql-aggregation', 'sql-joins', 'sql-ctes', 'sql-window-functions'], unlock_message: 'SQL Foundations unlocked.' } },
      { id: 'python', title: 'Python', description: 'Automate cleaning and analysis beyond what a spreadsheet can do.', skills: ['python-fundamentals', 'numpy', 'pandas'],
        checkpoint: { id: 'python-foundations', title: 'Python Foundations Checkpoint', requires: ['python-fundamentals', 'numpy', 'pandas'], unlock_message: 'Python Foundations unlocked.' } },
      { id: 'visualization', title: 'Visualization', description: 'Turn analysis into something a stakeholder can read at a glance.', skills: ['charts', 'dashboard-design', 'storytelling'] },
      { id: 'business-analytics', title: 'Business Analytics', description: 'Apply everything to real business metrics and decisions.', skills: ['business-analytics'] },
      { id: 'portfolio', title: 'Portfolio', description: 'Turn your projects into evidence.', skills: ['portfolio-building'] },
      { id: 'job-preparation', title: 'Job Preparation', description: 'Get ready to demonstrate everything you\'ve learned under interview conditions.', skills: ['job-preparation'],
        checkpoint: { id: 'portfolio-readiness', title: 'Portfolio Readiness Checkpoint', requires: ['portfolio-building', 'job-preparation'], unlock_message: 'You are portfolio-ready.' } },
    ],
  },
  {
    id: 'data-engineer', title: 'Data Engineer', difficulty: 'intermediate', estimated_hours: 480,
    description: 'Build the pipelines and infrastructure that make every other data role possible: reliable, well-modeled, well-orchestrated data.',
    stages: [
      { id: 'foundations', title: 'Foundations', description: 'The query and scripting skills every pipeline is built on.', skills: ['python-fundamentals', 'sql-select', 'sql-filtering', 'sql-aggregation', 'sql-joins'] },
      { id: 'data-pipelines', title: 'Data Pipelines', description: 'Move and model data reliably.', skills: ['etl-fundamentals', 'data-warehousing'] },
      { id: 'orchestration-and-tools', title: 'Orchestration & Tooling', description: 'Manage transformation logic and scheduling like a production system.', skills: ['dbt-transformations', 'workflow-orchestration'] },
      { id: 'portfolio', title: 'Portfolio', description: 'Turn your pipelines into evidence.', skills: ['portfolio-building'] },
      { id: 'job-preparation', title: 'Job Preparation', description: 'Get ready to demonstrate everything you\'ve learned under interview conditions.', skills: ['job-preparation'] },
    ],
  },
  {
    id: 'data-scientist', title: 'Data Scientist', difficulty: 'intermediate', estimated_hours: 520,
    description: 'Go from data to a defensible model to a decision: statistics, Python, modeling, and communicating results that hold up under scrutiny.',
    stages: [
      { id: 'foundations', title: 'Foundations', description: 'The statistical and problem-framing baseline every model depends on.', skills: ['statistics', 'python-fundamentals', 'data-thinking'] },
      { id: 'data-manipulation', title: 'Data Manipulation', description: 'Prepare data efficiently and correctly.', skills: ['numpy', 'pandas'] },
      { id: 'sql', title: 'SQL', description: 'Pull and shape the data you model on.', skills: ['sql-select', 'sql-filtering', 'sql-aggregation', 'sql-joins'] },
      { id: 'modeling', title: 'Modeling', description: 'Frame, train, and honestly evaluate a model.', skills: ['machine-learning-fundamentals', 'model-evaluation'] },
      { id: 'communication', title: 'Communication', description: 'Make a model\'s result usable by someone who isn\'t a data scientist.', skills: ['storytelling'] },
      { id: 'portfolio', title: 'Portfolio', description: 'Turn your analyses and models into evidence.', skills: ['portfolio-building'] },
      { id: 'job-preparation', title: 'Job Preparation', description: 'Get ready to demonstrate everything you\'ve learned under interview conditions.', skills: ['job-preparation'] },
    ],
  },
];

for (const r of roadmaps) {
  const { id, ...rest } = r;
  write('roadmaps', id, rest);
}

console.log(`Wrote ${resources.length} resources, ${skills.length} skills, ${projects.length} projects, ${assessments.length} assessments, ${roadmaps.length} roadmaps.`);
