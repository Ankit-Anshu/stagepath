import { setNote } from './_lib.mjs';

setNote('sql-set-operations', `
## 🎯 What is it?

**Set operations** — UNION, UNION ALL, INTERSECT, and EXCEPT — combine the results of two or more separate queries, stacking them or comparing them, rather than matching them side by side like a JOIN does.

## 💡 Why is it important?

Combining similarly-shaped data from different tables or time periods — like this year's and last year's orders, or two regional systems with the same structure — is a set-operation problem, not a JOIN problem. Knowing which tool fits which shape of question is a core SQL fluency signal.

## Core concept

### UNION vs. UNION ALL
Both stack the rows of two queries **on top of each other** (not side by side). \`UNION\` removes duplicate rows from the combined result; \`UNION ALL\` keeps every row, including duplicates, and is faster since it skips the deduplication step.

### Column & type matching
Every query combined with a set operation must return the **same number of columns**, in **compatible data types**, in the **same order** — column *names* in the output come from the first query.

### INTERSECT & EXCEPT
\`INTERSECT\` returns only rows that appear in **both** queries' results. \`EXCEPT\` (called \`MINUS\` in some databases) returns rows that appear in the first query's result but **not** in the second — useful for finding what's missing between two datasets.

| Operation | Returns |
|---|---|
| UNION | Combined rows, duplicates removed |
| UNION ALL | Combined rows, duplicates kept |
| INTERSECT | Rows present in both queries |
| EXCEPT | Rows in the first query but not the second |

## Syntax

\`\`\`sql
SELECT column1, column2 FROM table_a
UNION ALL
SELECT column1, column2 FROM table_b;

SELECT customer_id FROM this_year_customers
EXCEPT
SELECT customer_id FROM last_year_customers;
\`\`\`

## 📊 Example

\`orders_q1\`:

| order_id | amount |
|---|---|
| 1 | 200 |
| 2 | 150 |

\`orders_q2\`:

| order_id | amount |
|---|---|
| 2 | 150 |
| 3 | 300 |

**Query — combine both quarters, tagging the source:**

\`\`\`sql
SELECT order_id, amount, 'Q1' AS period FROM orders_q1
UNION ALL
SELECT order_id, amount, 'Q2' AS period FROM orders_q2;
\`\`\`

**Output:**

| order_id | amount | period |
|---|---|---|
| 1 | 200 | Q1 |
| 2 | 150 | Q1 |
| 2 | 150 | Q2 |
| 3 | 300 | Q2 |

**Explanation:** \`UNION ALL\` keeps order_id 2 from both periods (it's a real, distinct record in each source) — using plain \`UNION\` here would have incorrectly deduplicated it down to one row, since UNION compares entire rows including the period tag... but note the period differs, so it wouldn't actually be deduplicated either way in this specific case. UNION ALL is still the right, faster choice since these are genuinely two different periods' data with no intent to deduplicate.

## Multiple examples

**Beginner:** \`SELECT city FROM customers_us UNION SELECT city FROM customers_ca;\` — a deduplicated list of cities across two tables.
**Intermediate:** \`SELECT customer_id FROM leads INTERSECT SELECT customer_id FROM customers;\` — leads who successfully converted to customers.
**Real-world:** \`SELECT customer_id FROM active_subscribers EXCEPT SELECT customer_id FROM email_opt_outs;\` — the exact audience list for an email campaign, subscribers minus opt-outs.

## Types / Variations

See the Core concept table above — UNION/UNION ALL/INTERSECT/EXCEPT are the four standard set operations across most SQL databases (some databases spell EXCEPT as MINUS).

## ⚠️ Common mistakes

- **Using UNION when UNION ALL is what's actually needed.** UNION's deduplication step has a real performance cost, and is unnecessary (or even incorrect) when the two sources are known to be genuinely distinct records.
- **Mismatched column counts or incompatible types.** A set operation errors immediately if the queries don't return the same number of columns in compatible types — this is stricter than a JOIN's flexibility.
- **Confusing a set operation with a JOIN.** Set operations stack rows *vertically*; JOINs combine columns *horizontally* based on a key — using one where the other is needed produces a completely wrong (or invalid) result.
- **Forgetting that column names in the output come from the first query**, which can make an EXCEPT/INTERSECT result confusing to label if the two queries used different aliases.

## Real-world Data Analyst use cases

- **Sales analysis:** combining this year's and last year's order tables into one comparable dataset with UNION ALL.
- **Marketing analysis:** finding a campaign audience with EXCEPT (subscribers minus opt-outs).
- **Data quality analysis:** using EXCEPT to find records present in a source system but missing from a downstream reporting table.

## Related concepts

\`\`\`
JOIN → SUBQUERY
  ↓
UNION / Set Operations ← you are here
  ↓
CTE
  ↓
WINDOW FUNCTIONS
\`\`\`

## Practice questions

### Easy
1. What's the difference between UNION and UNION ALL?

### Medium
2. Write a query combining \`orders_2023\` and \`orders_2024\` (same columns) into one result set without removing any rows.

### Interview/Advanced
3. How would you find customer IDs that exist in a \`customers\` table but not in an \`orders\` table, using a set operation instead of a JOIN?

<details><summary><strong>Answer / Solution</strong></summary>

1. UNION removes duplicate rows from the combined result; UNION ALL keeps every row, including duplicates, and is faster since it skips deduplication.
2. \`SELECT * FROM orders_2023 UNION ALL SELECT * FROM orders_2024;\`
3. \`SELECT customer_id FROM customers EXCEPT SELECT customer_id FROM orders;\` — this returns customer IDs present in the first list but not the second, directly answering "customers who never ordered" without a JOIN.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: When would you use UNION instead of a JOIN?**
Short answer: When you need to stack rows from two similarly-shaped queries on top of each other (same columns), rather than combine columns from related tables side by side based on a key.

### Conceptual questions
**Q: Why is UNION ALL generally preferred over UNION when you know the two sources don't overlap?**
Short answer: UNION performs a deduplication pass over the combined result, which has a real performance cost that's unnecessary when duplicates aren't possible or aren't a concern.

### Scenario-based questions
**Q: A UNION query errors with a "different number of columns" message. What's the fix?**
Short answer: Ensure both queries in the UNION select exactly the same number of columns, in compatible data types and the same order — add or remove columns (or cast types) until they match.

### Practical questions
**Q: Write a query to find records present in a "legacy" customers table but missing from a "current" customers table.**
Short answer: \`SELECT customer_id FROM legacy_customers EXCEPT SELECT customer_id FROM current_customers;\`

## Interview traps / tricky points

- Column names in a UNION's output always come from the *first* query — a common source of confusion when the two source queries use different aliases.
- EXCEPT/INTERSECT compare entire rows, not just a single "key" column, unless you explicitly select only that column — selecting extra columns can silently change which rows are considered "matching."

## Best practices

- Default to UNION ALL unless deduplication is specifically needed.
- Explicitly select and alias only the columns you need before a set operation, to avoid unintended row-matching differences.
- Add a literal "source" or "period" column (like the Q1/Q2 tag above) when combining data from different time periods or systems, so the combined result stays traceable.

---

### ⚡ Quick Revision

**UNION** → stacks rows, removes duplicates
**UNION ALL** → stacks rows, keeps duplicates, faster
**INTERSECT** → rows in both queries
**EXCEPT** → rows in the first query, not the second
**Rule:** column count, order, and type must match across all combined queries
`);

setNote('sql-ctes', `
## 🎯 What is it?

A **CTE (Common Table Expression)**, written with \`WITH\`, lets you name a subquery and reference it later in the same query — breaking a complex query into readable, named, sequential steps instead of one giant nested expression.

## 💡 Why is it important?

Real analytics queries get complicated fast — filtering, aggregating, joining, and ranking all in one query. CTEs make that complexity readable and testable step by step, and each CTE can be reused multiple times within the same query without repeating its logic.

## Core concept

### WITH syntax
A CTE is defined with \`WITH name AS (subquery)\`, then referenced by name later in the query, just like a real table.

### Chaining CTEs
Multiple CTEs can be defined in sequence, each one able to reference any CTE defined before it — building a multi-step pipeline where each step has a clear, single purpose and a descriptive name.

### CTEs vs. subqueries
A deeply nested subquery forces you to read from the inside out, tracking parentheses. A CTE reads top-to-bottom, each step named for what it does — functionally often equivalent, but far easier for a human (including future-you) to follow, test, and debug.

### Recursive CTEs (intro)
A CTE that references *itself*, used for traversing hierarchical or sequential data — like an employee-to-manager reporting chain, or generating a sequence of dates. Covered here conceptually; full recursive syntax is an advanced topic beyond this stage.

## Syntax

\`\`\`sql
WITH regional_totals AS (
  SELECT region, SUM(amount) AS total_revenue
  FROM orders
  GROUP BY region
),
above_average AS (
  SELECT region, total_revenue
  FROM regional_totals
  WHERE total_revenue > (SELECT AVG(total_revenue) FROM regional_totals)
)
SELECT * FROM above_average
ORDER BY total_revenue DESC;
\`\`\`

## 📊 Example

\`orders\` table:

| region | amount |
|---|---|
| West | 4,200 |
| East | 1,800 |
| North | 5,000 |

**Query (using the CTEs above):**

**Step 1 — \`regional_totals\`:** West: 4,200, East: 1,800, North: 5,000. Average = 3,666.67.
**Step 2 — \`above_average\`:** keeps only West and North.

**Output:**

| region | total_revenue |
|---|---|
| North | 5,000 |
| West | 4,200 |

**Explanation:** Each CTE is a clearly named, self-contained step — reading the query top to bottom tells you exactly what each stage does, unlike the equivalent nested-subquery version.

## Multiple examples

**Beginner:** A single CTE that pre-filters rows before the main query selects from it.
**Intermediate:** Two chained CTEs — one aggregates, the next filters the aggregated result (as in the example above).
**Real-world:** A three-step CTE pipeline: \`cleaned_orders\` (dedupes and filters raw data) → \`customer_totals\` (aggregates spend per customer) → \`top_customers\` (ranks and filters to the top 10%) — each step readable and independently testable by running it alone.

## ⚠️ Common mistakes

- **Turning a CTE chain into a new form of unreadable complexity** by giving CTEs vague names like \`cte1\`, \`cte2\` — the whole point is lost without descriptive names.
- **Assuming a CTE is always materialized (computed once and cached).** In many databases, a CTE referenced multiple times may be re-evaluated each time it's referenced — for performance-critical repeated use, check your specific database's behavior (some support explicit materialization hints).
- **Forgetting a CTE only exists for the single query it's attached to** — it isn't a saved view or table, and can't be referenced by a separate query.

## Real-world Data Analyst use cases

- **Sales analysis:** a multi-step CTE pipeline building from raw orders → cleaned orders → regional summary → top-region flag.
- **Customer analysis:** a CTE computing customer lifetime value, referenced by a later CTE that segments customers into tiers.
- **Any complex report:** replacing a deeply nested subquery with a readable, named sequence of CTEs for easier review and maintenance.

## Related concepts

\`\`\`
JOIN → SUBQUERY
  ↓
CTE ← you are here (often a cleaner alternative to nested subqueries)
  ↓
UNION / Set Operations
  ↓
WINDOW FUNCTIONS (often used together with CTEs)
\`\`\`

## Practice questions

### Easy
1. Rewrite \`SELECT * FROM (SELECT region, SUM(amount) AS total FROM orders GROUP BY region) t WHERE t.total > 1000;\` using a CTE instead of a nested subquery.

### Medium
2. Write a two-step CTE query: first aggregate total spend per customer, then filter to customers with spend over $500.

### Interview/Advanced
3. Why might a team prefer a CTE-based query over an equivalent nested-subquery version, even if performance is identical?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`WITH region_totals AS (SELECT region, SUM(amount) AS total FROM orders GROUP BY region) SELECT * FROM region_totals WHERE total > 1000;\`
2. \`WITH customer_spend AS (SELECT customer_id, SUM(amount) AS total_spend FROM orders GROUP BY customer_id) SELECT * FROM customer_spend WHERE total_spend > 500;\`
3. Readability and maintainability — a CTE query reads top-to-bottom with each named step self-documenting its purpose, making it far easier for another analyst (or future you) to review, debug, and modify than a deeply nested subquery that must be read inside-out.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What is a CTE, and why use one?**
Short answer: A named, temporary result set defined with WITH, used to break a complex query into readable, sequential steps instead of deeply nested subqueries.

### Conceptual questions
**Q: How is a CTE different from a subquery in the FROM clause?**
Short answer: Functionally they can achieve similar things, but a CTE is named and defined upfront, can be referenced multiple times within the same query, and reads top-to-bottom — a FROM subquery is inline and unnamed, and gets harder to read as nesting grows.

### Scenario-based questions
**Q: You inherit a query with 4 levels of nested subqueries and need to add a new filter. How would you approach it?**
Short answer: Refactor the nested subqueries into a sequence of named CTEs first — this makes it much easier to identify exactly where the new filter belongs and to verify each step still produces the expected result.

### Practical questions
**Q: Write a CTE-based query that finds the top 3 customers by total spend.**
Short answer: \`WITH customer_totals AS (SELECT customer_id, SUM(amount) AS total FROM orders GROUP BY customer_id) SELECT * FROM customer_totals ORDER BY total DESC LIMIT 3;\`

## Interview traps / tricky points

- A CTE is scoped to a single query — it cannot be referenced by a different, separate query the way a view or table can.
- Whether a CTE is "materialized" (computed once) or re-evaluated on each reference varies by database engine — don't assume a specific performance behavior without checking.

## Best practices

- Give every CTE a clear, descriptive name that states its purpose (e.g., \`cleaned_orders\`, not \`cte1\`).
- Keep each CTE focused on a single, well-defined transformation step.
- Refactor a deeply nested subquery into CTEs whenever it becomes hard to read at a glance.

---

### ⚡ Quick Revision

**WITH name AS (...)** → defines a named, reusable step within one query
**Chained CTEs** → each can reference any CTE defined before it
**vs. subqueries** → same logical power, far more readable
**Scope:** a CTE only exists for the query it's attached to
`);

setNote('sql-window-functions', `
## 🎯 What is it?

**Window functions** compute a value — a running total, a rank, a comparison to the previous row — **across a set of related rows**, without collapsing those rows into a single summary row the way GROUP BY does. Every original row stays in the output, each with its computed window value attached.

## 💡 Why is it important?

Window functions answer questions plain aggregation cannot: "rank each customer within their region," "running total of revenue by date," "compare this month to the previous month" — all while keeping every individual row visible. This is one of the most powerful and most frequently tested advanced SQL skills for analyst roles.

## Core concept

### OVER and PARTITION BY
\`OVER()\` turns a function into a window function. \`PARTITION BY\` divides rows into groups — like GROUP BY — but **without** collapsing them; the calculation runs separately within each partition while every row remains in the output.

### Ranking functions

| Function | Behavior on ties |
|---|---|
| \`ROW_NUMBER()\` | Assigns a unique number to every row, even ties (arbitrary tiebreak) |
| \`RANK()\` | Ties share the same rank; the next rank skips (1, 1, 3, ...) |
| \`DENSE_RANK()\` | Ties share the same rank; the next rank does NOT skip (1, 1, 2, ...) |

### Running totals
\`SUM(column) OVER (ORDER BY date_column)\` computes a cumulative total up through each row, in the order specified.

### LAG and LEAD
\`LAG(column)\` looks back to a previous row's value; \`LEAD(column)\` looks ahead to a following row's value — both within an ordering you define, making row-to-row comparisons (like month-over-month change) straightforward.

## Syntax

\`\`\`sql
SELECT
  customer_id,
  region,
  total_spend,
  RANK() OVER (PARTITION BY region ORDER BY total_spend DESC) AS region_rank,
  SUM(total_spend) OVER (ORDER BY total_spend) AS running_total,
  LAG(total_spend) OVER (PARTITION BY region ORDER BY total_spend) AS previous_spend
FROM customer_totals;
\`\`\`

## 📊 Example

\`customer_totals\`:

| customer_id | region | total_spend |
|---|---|---|
| 1 | West | 900 |
| 2 | West | 900 |
| 3 | West | 400 |
| 4 | East | 700 |

**Query:**

\`\`\`sql
SELECT customer_id, region, total_spend,
  RANK() OVER (PARTITION BY region ORDER BY total_spend DESC) AS rnk,
  DENSE_RANK() OVER (PARTITION BY region ORDER BY total_spend DESC) AS dense_rnk
FROM customer_totals;
\`\`\`

**Output:**

| customer_id | region | total_spend | rnk | dense_rnk |
|---|---|---|---|---|
| 1 | West | 900 | 1 | 1 |
| 2 | West | 900 | 1 | 1 |
| 3 | West | 400 | 3 | 2 |
| 4 | East | 700 | 1 | 1 |

**Explanation:** RANK() skips to 3 after the tie at 1; DENSE_RANK() continues at 2 — and both restart within each region because of PARTITION BY.

## Multiple examples

**Beginner:** \`ROW_NUMBER() OVER (ORDER BY signup_date)\` — a simple sequential numbering of customers by signup order.
**Intermediate:** \`SUM(revenue) OVER (ORDER BY order_date)\` — a running total of revenue over time, one row per day, without collapsing daily detail.
**Real-world:** \`LAG(monthly_revenue) OVER (PARTITION BY region ORDER BY month)\` combined with a calculated difference column — the standard pattern for a month-over-month change report, broken out per region.

## Types / Variations

See the ranking functions table above — ROW_NUMBER, RANK, and DENSE_RANK are the three standard ranking window functions; the choice depends entirely on how ties should be handled.

## ⚠️ Common mistakes

- **Confusing window functions with GROUP BY.** GROUP BY collapses rows into one row per group; window functions keep every row and attach a computed value — they solve different problems and aren't interchangeable.
- **Forgetting PARTITION BY**, causing a ranking or running total to run across the *entire* result set instead of restarting per group — a common and easy-to-miss bug.
- **Picking the wrong ranking function for the scenario.** Using ROW_NUMBER when ties genuinely should share a rank (e.g., "top 3 by score" where two people tie for 3rd) produces a misleading, arbitrary result.
- **Using a window function in a WHERE clause directly** — not allowed, because of SQL's execution order (window functions are computed after WHERE). Wrap the query in a subquery or CTE and filter in the outer query instead.

## Real-world Data Analyst use cases

- **Sales analysis:** ranking sales reps within each region by total revenue.
- **Finance analysis:** running total of monthly revenue toward an annual target.
- **Product analysis:** month-over-month change in active users using LAG.

## Related concepts

\`\`\`
GROUP BY / Aggregation (collapses rows)
  ↓
CTE
  ↓
WINDOW FUNCTIONS ← you are here (keeps every row)
  ↓
SQL — Query Optimization Basics
\`\`\`

## Practice questions

### Easy
1. Write a query that assigns a row number to each order, ordered by order_date.

### Medium
2. Write a query ranking customers by total_spend within each region, using DENSE_RANK.

### Interview/Advanced
3. Why can't you filter directly on a window function's result in a WHERE clause, and how do you work around it?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`SELECT *, ROW_NUMBER() OVER (ORDER BY order_date) AS row_num FROM orders;\`
2. \`SELECT *, DENSE_RANK() OVER (PARTITION BY region ORDER BY total_spend DESC) AS spend_rank FROM customer_totals;\`
3. WHERE is evaluated before window functions are computed in SQL's logical execution order, so the window function's result doesn't exist yet at that point. Workaround: wrap the window-function query in a subquery or CTE, then filter on the computed column in the outer query's WHERE clause.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between a window function and GROUP BY?**
Short answer: GROUP BY collapses rows into one summary row per group; a window function computes a value across related rows (optionally partitioned) while keeping every original row in the output.

### Conceptual questions
**Q: What's the difference between RANK and DENSE_RANK?**
Short answer: Both give tied rows the same rank, but RANK skips the next rank number(s) equal to the number of ties, while DENSE_RANK continues with the very next consecutive number.

### Scenario-based questions
**Q: A "top 3 per region" query using ROW_NUMBER returns exactly 3 rows per region, but a stakeholder complains it's missing a customer who tied for 3rd place. What's the fix?**
Short answer: ROW_NUMBER assigns a unique, arbitrary rank even to tied values, so it silently drops one of the tied customers — switching to RANK (or DENSE_RANK, depending on whether skipped ranks matter for the use case) will correctly include all tied customers at the cutoff.

### Practical questions
**Q: Write a query showing each month's revenue alongside the previous month's revenue and the change between them.**
Short answer: \`SELECT month, revenue, LAG(revenue) OVER (ORDER BY month) AS prev_revenue, revenue - LAG(revenue) OVER (ORDER BY month) AS change FROM monthly_revenue;\`

## Interview traps / tricky points

- Window functions cannot be referenced directly in the same query's WHERE clause — a very commonly tested execution-order gotcha.
- Forgetting PARTITION BY silently changes a "rank within group" calculation into a "rank across everything" calculation — always double check partitioning matches the actual business question.
- ROW_NUMBER vs. RANK vs. DENSE_RANK is a favorite interview question specifically because the "right" choice depends on how ties should be handled, not just default habit.

## Best practices

- Choose the ranking function deliberately based on how ties should be treated for the specific question, not out of habit.
- Always double-check PARTITION BY matches the actual grouping the business question requires.
- Wrap a window-function query in a CTE/subquery when you need to filter on the computed window value.

---

### ⚡ Quick Revision

**OVER() / PARTITION BY** → compute per group without collapsing rows
**ROW_NUMBER / RANK / DENSE_RANK** → differ in how they handle ties
**LAG / LEAD** → compare a row to the previous/next row in an order
**Rule:** window functions can't be filtered directly in WHERE — wrap in a subquery/CTE
`);

setNote('sql-query-optimization', `
## 🎯 What is it?

**Query optimization basics** means being able to read a query execution plan and understand, at a conceptual level, how indexes make a query fast — enough to recognize *why* a query is slow and propose a specific fix, not just "add an index somewhere."

## 💡 Why is it important?

As tables grow to millions of rows, a query that "just works" during development can quietly become the query that times out in production. Knowing the basics is what separates writing correct SQL from writing SQL that scales — a distinction employers explicitly test for in analyst interviews at companies with large datasets.

## Core concept

### What an index does
An index is a separate, ordered data structure (conceptually similar to a book's index) that lets the database jump directly to matching rows instead of scanning the entire table row by row. It speeds up lookups and filters on the indexed column(s) dramatically, at the cost of extra storage and slightly slower writes (since the index must also be updated).

### Reading a query plan
\`EXPLAIN\` (or \`EXPLAIN ANALYZE\`) shows how the database actually plans to execute a query — most importantly, whether it's using an index (\`Index Scan\`) or reading the whole table (\`Sequential Scan\` / \`Full Table Scan\`) to satisfy a filter.

### Common slow-query causes

| Cause | Why it's slow |
|---|---|
| Missing index on a filtered/joined column | Forces a full table scan |
| \`SELECT *\` on a wide table | Transfers far more data than needed |
| A function applied to a filtered column (e.g., \`WHERE UPPER(name) = 'X'\`) | Often prevents the database from using an existing index on that column |
| Filtering on a low-selectivity column (e.g., a boolean with only 2 values) | An index may not help much — the database might still scan most of the table |

## Syntax

\`\`\`sql
EXPLAIN
SELECT * FROM orders WHERE customer_id = 1042;
\`\`\`

A simplified example of what the output distinguishes:

\`\`\`
Seq Scan on orders  (cost=0.00..18334.00 rows=1 ...)     ← full table scan, no index used
Index Scan using orders_customer_id_idx on orders ...     ← index used, much cheaper
\`\`\`

## 📊 Example

A query filters 10 million rows: \`SELECT * FROM orders WHERE customer_id = 1042;\`

**Without an index on customer_id:** \`EXPLAIN\` shows a \`Seq Scan\` — the database reads every one of the 10 million rows to find matches.

**With an index on customer_id:** \`EXPLAIN\` shows an \`Index Scan\` — the database jumps almost directly to the matching rows.

**Explanation:** The query is functionally identical in both cases — the difference is purely about *how* the database finds the matching rows, and it can mean the difference between a sub-second query and one that times out.

## Multiple examples

**Beginner:** Recognize \`Seq Scan\` vs. \`Index Scan\` in a basic EXPLAIN output.
**Intermediate:** Diagnose a slow query that filters on \`UPPER(email) = 'JOHN@EXAMPLE.COM'\` — the function call on the column likely prevents index use; propose either a functional index or storing a normalized column instead.
**Real-world:** A dashboard query pulling \`SELECT *\` from a 60-column, 50-million-row events table times out — switching to only the 5 needed columns, and confirming an index exists on the date column used in the WHERE clause, together resolve it.

## ⚠️ Common mistakes

- **Assuming "add an index" is always the fix.** Indexes speed up reads but slow down writes and use storage — indexing every column indiscriminately is itself a performance anti-pattern.
- **Applying a function to a filtered column** (\`WHERE UPPER(name) = ...\`, \`WHERE YEAR(date) = 2024\`) without realizing this commonly prevents the database from using a plain index on that column.
- **Using \`SELECT *\`** on wide tables, which transfers unnecessary data regardless of whether an index is used — see [SQL — SELECT](/skills/sql-select) common mistakes.
- **Proposing a vague fix** ("add an index") in an interview or code review instead of identifying the *specific* column and the *specific* query pattern that would benefit.

## Real-world Data Analyst use cases

- **Any dashboard on a large table:** diagnosing why a report is slow to load and proposing a specific, targeted fix.
- **Data engineering handoffs:** explaining to a data engineer, using EXPLAIN output, exactly why a particular recurring report query is timing out.
- **Cost control:** in cloud data warehouses billed by data scanned, reducing unnecessary full scans directly reduces cost, not just speed.

## Related concepts

\`\`\`
JOIN → SUBQUERY → CTE → WINDOW FUNCTIONS
  ↓
SQL — Query Optimization Basics ← you are here
\`\`\`
This closes the SQL stage — the next stage, Python, picks up where SQL's data-pulling ends and programmatic analysis begins.

## Practice questions

### Easy
1. What does an EXPLAIN plan showing "Seq Scan" indicate?

### Medium
2. A query filters \`WHERE YEAR(order_date) = 2024\` and is slow despite an index existing on \`order_date\`. What's the likely cause?

### Interview/Advanced
3. A stakeholder wants every column indexed "to make things faster." What's wrong with this request, and how would you respond?

<details><summary><strong>Answer / Solution</strong></summary>

1. The database is scanning the entire table row by row, rather than using an index to jump directly to matching rows.
2. Wrapping the column in a function (\`YEAR(order_date)\`) typically prevents the database from using a plain index on \`order_date\` — rewriting the filter as a range (\`WHERE order_date >= '2024-01-01' AND order_date < '2025-01-01'\`) usually restores index usage.
3. Indexing every column has real costs: more storage, and slower writes (every insert/update must also update every index) — the response should be to identify which specific columns are actually used in frequent filters/joins and index only those, rather than indexing indiscriminately.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What does an index do, in plain terms?**
Short answer: It lets the database find matching rows quickly by jumping almost directly to them, instead of scanning the entire table row by row.

### Conceptual questions
**Q: Why isn't "just add more indexes" always the right answer?**
Short answer: Every index adds storage overhead and slows down writes (inserts/updates/deletes), since each index must also be kept up to date — indexes should be added deliberately for columns that are actually frequently filtered, joined, or sorted on.

### Scenario-based questions
**Q: A query that used to run in under a second now takes 30 seconds after the table grew to 20 million rows. What's your diagnostic approach?**
Short answer: Run EXPLAIN on the query to see whether it's doing a full table scan; if so, check whether the filtered/joined columns have an appropriate index, and whether any function applied to those columns in the query is preventing that index from being used.

### Practical questions
**Q: How would you explain to a non-technical stakeholder why \`SELECT *\` on a huge table is slower than selecting specific columns?**
Short answer: Compare it to ordering an entire menu when you only wanted one dish — the database still has to retrieve and transfer every column's data for every row, even the columns nobody will actually look at.

## Interview traps / tricky points

- Wrapping a filtered column in a function is a subtle but very common way to accidentally disable index usage — a favorite "why is this slow" interview scenario.
- An index doesn't help every kind of filter — a column with very few distinct values (low selectivity, like a boolean) often gains little from being indexed.
- Indexes speed up reads but slow down writes — this tradeoff is frequently the actual point an interviewer is testing for, not just "do you know what an index is."

## Best practices

- Run EXPLAIN before assuming why a query is slow — diagnose, don't guess.
- Index columns that are frequently filtered, joined, or sorted on — not every column indiscriminately.
- Avoid wrapping filtered/joined columns in functions when an equivalent range-based or pre-normalized approach would preserve index usage.
- Select only the columns actually needed, especially on wide, large tables.

---

### ⚡ Quick Revision

**Index** → lets the database jump to matching rows instead of scanning everything
**EXPLAIN** → shows whether a query uses an index (Index Scan) or not (Seq Scan)
**Common slow-query causes** → missing index, SELECT *, functions on filtered columns
**Tradeoff:** indexes speed up reads, slow down writes, and use storage — index deliberately
`);
