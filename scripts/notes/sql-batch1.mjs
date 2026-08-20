import { setNote } from './_lib.mjs';

setNote('sql-filtering', `
## 🎯 What is it?

**WHERE** narrows a query's results down to the rows that match a condition. Almost no real business question is "show me everything" — it's "show me the subset that matters" — and WHERE is how you get there.

## 💡 Why is it important?

Filtering is the second thing every analyst learns after SELECT, because raw, unfiltered data is rarely useful on its own — "show me pending orders older than 7 days," "show me customers in California" are both filtering questions, and they're the shape of most real analyst requests.

## Core concept

WHERE evaluates a condition for every row and keeps only the rows where it's TRUE.

| Operator | Meaning |
|---|---|
| \`=\`, \`!=\` (or \`<>\`) | Equal to, not equal to |
| \`>\`, \`<\`, \`>=\`, \`<=\` | Greater/less than (or equal) |
| \`BETWEEN a AND b\` | Inclusive range |
| \`IN (a, b, c)\` | Matches any value in a list |
| \`LIKE\` | Pattern match on text |
| \`IS NULL\` / \`IS NOT NULL\` | Presence or absence of a value |

### Combining conditions
\`AND\`, \`OR\`, and \`NOT\` combine multiple conditions. **AND has higher precedence than OR**, meaning \`a OR b AND c\` is evaluated as \`a OR (b AND c)\` — not left to right — so parentheses are essential once you mix AND and OR.

### NULL handling
NULL means "unknown" or "absent," not zero or empty text. It cannot be compared with \`=\` — \`WHERE customer_id = NULL\` returns **nothing**, even for rows where customer_id genuinely is NULL. You must use \`IS NULL\` / \`IS NOT NULL\`.

### Pattern matching
\`LIKE\` uses wildcards: \`%\` matches any sequence of characters, \`_\` matches exactly one character.

## Syntax

\`\`\`sql
SELECT columns
FROM table_name
WHERE condition;
\`\`\`

## 📊 Example

\`orders\` table:

| order_id | status | days_open | customer_id |
|---|---|---|---|
| 1 | pending | 9 | 101 |
| 2 | pending | 3 | 102 |
| 3 | pending | 12 | NULL |
| 4 | completed | 20 | 103 |

**Query:**

\`\`\`sql
SELECT order_id, status, days_open
FROM orders
WHERE status = 'pending'
  AND days_open > 7
  AND customer_id IS NOT NULL;
\`\`\`

**Output:**

| order_id | status | days_open |
|---|---|---|
| 1 | pending | 9 |

**Explanation:** Row 3 matches "pending" and "days_open > 7" but is excluded because customer_id IS NULL — required explicitly, since \`customer_id != NULL\` would not have excluded it (it wouldn't match anything, including intentionally, so this must be an explicit IS NOT NULL check).

## Multiple examples

**Beginner:** \`WHERE country = 'Brazil'\` — a single equality filter.
**Intermediate:** \`WHERE amount BETWEEN 100 AND 500 AND status IN ('shipped','delivered')\` — range + list filter combined.
**Real-world:** \`WHERE (status = 'pending' OR status = 'processing') AND created_at < CURRENT_DATE - INTERVAL '7 days'\` — parenthesized OR combined with AND, the exact shape of a real "at-risk orders" business rule.

## Types / Variations

| Pattern | Matches |
|---|---|
| \`LIKE 'A%'\` | Starts with "A" |
| \`LIKE '%burger%'\` | Contains "burger" anywhere |
| \`LIKE '_at'\` | Any single character followed by "at" (e.g., "cat", "bat") |

## ⚠️ Common mistakes

- **Using \`= NULL\` instead of \`IS NULL\`.** This is the single most common SQL filtering bug — it silently returns zero matching rows instead of erroring.
- **Mixing AND/OR without parentheses**, relying on default precedence — this frequently produces a *different* result than intended, silently.
- **Forgetting LIKE is case-sensitive in some databases** (though not others) — always check your specific database's behavior, or use a case-insensitive comparison explicitly.
- **Filtering with WHERE on an aggregated value** (e.g., \`WHERE COUNT(*) > 5\`) — this isn't valid; aggregated results must be filtered with HAVING, covered in the next topic.

## Real-world Data Analyst use cases

- **Sales analysis:** filtering orders to a specific date range and status.
- **Customer analysis:** filtering to customers in a specific region with no NULL email.
- **Operations analysis:** filtering shipments that are overdue (past a promised date) and not yet delivered.

## Related concepts

\`\`\`
SELECT
  ↓
WHERE (filter rows) ← you are here
  ↓
GROUP BY (create groups)
  ↓
HAVING (filter groups)
  ↓
JOIN
\`\`\`

## Practice questions

### Easy
1. Write a query that returns customers where country = 'Canada'.

### Medium
2. Write a query returning orders where status is 'pending' OR 'processing', AND amount is over 100.

### Interview/Advanced
3. Why does \`WHERE customer_id = NULL\` return zero rows even for rows where customer_id is actually NULL, and what's the correct way to write it?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`SELECT * FROM customers WHERE country = 'Canada';\`
2. \`SELECT * FROM orders WHERE (status = 'pending' OR status = 'processing') AND amount > 100;\`
3. NULL represents "unknown," and any comparison (including \`=\`) against an unknown value is itself unknown — so it never evaluates to TRUE, no matter what. The correct form is \`WHERE customer_id IS NULL\`.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What does WHERE do?**
Short answer: It filters rows, keeping only those where a specified condition evaluates to TRUE.

### Conceptual questions
**Q: Why can't you filter NULLs with \`= NULL\`?**
Short answer: NULL represents an unknown value, and SQL's three-valued logic means any comparison to NULL (including \`=\`) evaluates to unknown, not true — so \`IS NULL\`/\`IS NOT NULL\` exist specifically to test for NULL directly.

### Scenario-based questions
**Q: A query filtering "active OR trial customers who signed up this year" returns unexpected results. What's the first thing to check?**
Short answer: Operator precedence — check whether the AND/OR conditions need explicit parentheses, since AND binds tighter than OR by default and can silently change which rows match.

### Practical questions
**Q: Write a query to find orders placed in the last 30 days with a NULL shipping address.**
Short answer: \`SELECT * FROM orders WHERE order_date >= CURRENT_DATE - INTERVAL '30 days' AND shipping_address IS NULL;\`

## Interview traps / tricky points

- \`NOT IN\` with a list that contains a NULL silently returns zero rows for the *entire* query — one of the most notorious SQL gotchas, worth mentioning explicitly if it comes up.
- LIKE's case-sensitivity depends on the database engine and collation — never assume without checking.

## Best practices

- Always use \`IS NULL\` / \`IS NOT NULL\`, never \`= NULL\`.
- Parenthesize explicitly whenever AND and OR are mixed, even when precedence would technically give the right answer — it's clearer to the next reader.
- Prefer \`IN\` over a long chain of OR'd equality checks for readability.

---

### ⚡ Quick Revision

**WHERE** → filters rows before grouping
**AND/OR/NOT** → combine conditions; parenthesize when mixing AND/OR
**IS NULL / IS NOT NULL** → the only correct way to test for NULL
**LIKE** → \`%\` = any sequence, \`_\` = exactly one character
`);

setNote('sql-aggregation', `
## 🎯 What is it?

**Aggregation** summarizes many rows into one number per group — using functions like COUNT, SUM, AVG, MIN, MAX together with **GROUP BY** to define the groups, and **HAVING** to filter on the aggregated result.

## 💡 Why is it important?

Business questions are almost always about summaries, not individual rows — "total revenue," "average order size," "count of active users per region" are the actual shape of most real analyst deliverables, not a list of raw transactions.

## Core concept

### Aggregate functions

| Function | Returns |
|---|---|
| \`COUNT(*)\` | Number of rows |
| \`COUNT(column)\` | Number of non-NULL values in that column |
| \`SUM(column)\` | Total of numeric values (ignores NULLs) |
| \`AVG(column)\` | Mean of numeric values (ignores NULLs, doesn't treat them as 0) |
| \`MIN\` / \`MAX\` | Smallest / largest value |

**All aggregate functions silently ignore NULLs** — this affects AVG especially, since it divides by the count of *non-NULL* rows, not all rows.

### GROUP BY
Groups rows sharing the same value(s) in specified columns, so each aggregate function computes one result per group instead of one result overall. **Every selected column that isn't wrapped in an aggregate function must appear in the GROUP BY clause.**

### HAVING vs. WHERE
WHERE filters individual rows **before** grouping/aggregation happens; HAVING filters **groups**, after aggregation, based on the aggregated value. You cannot use WHERE to filter on \`SUM(amount) > 1000\` — that requires HAVING.

## Syntax

\`\`\`sql
SELECT column1, AGG_FUNCTION(column2)
FROM table_name
WHERE row_condition
GROUP BY column1
HAVING aggregate_condition
ORDER BY column1;
\`\`\`

## 📊 Example

\`orders\` table:

| region | month | revenue |
|---|---|---|
| West | Jan | 4,200 |
| West | Jan | 1,800 |
| East | Jan | 3,100 |
| West | Feb | 5,000 |

**Query:**

\`\`\`sql
SELECT region, month, SUM(revenue) AS total_revenue
FROM orders
GROUP BY region, month
HAVING SUM(revenue) > 5000;
\`\`\`

**Output:**

| region | month | total_revenue |
|---|---|---|
| West | Jan | 6,000 |

**Explanation:** Rows are grouped by region+month, summed, and only groups with a total over 5,000 survive the HAVING filter — East/Jan (3,100) and West/Feb (5,000, not strictly over) are excluded.

## Multiple examples

**Beginner:** \`SELECT status, COUNT(*) FROM orders GROUP BY status;\` — order count per status.
**Intermediate:** \`SELECT region, AVG(amount) FROM orders WHERE order_date >= '2024-01-01' GROUP BY region;\` — WHERE filters rows first, then AVG is computed per region.
**Real-world:** \`SELECT customer_id, COUNT(*) AS order_count FROM orders GROUP BY customer_id HAVING COUNT(*) >= 5;\` — finding repeat customers, the classic "loyal customer" segmentation query.

## SQL execution order (why this matters here)

\`\`\`
FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT
\`\`\`

WHERE runs *before* grouping (on raw rows); HAVING runs *after* (on aggregated groups) — this is exactly why WHERE can't reference an aggregate function, but HAVING can.

## ⚠️ Common mistakes

- **Selecting a non-aggregated column that isn't in GROUP BY.** Most databases will either error or (worse, in some engines) silently return an arbitrary value from the group — always include every non-aggregated selected column in GROUP BY.
- **Using WHERE instead of HAVING to filter on an aggregate.** \`WHERE SUM(revenue) > 1000\` is invalid SQL in standard usage — aggregates aren't computed yet at the WHERE stage.
- **Double-counting rows after a join, then aggregating.** If a join fans out rows (e.g., one order joined to multiple line items), a naive \`SUM(order.amount)\` after the join will overcount — aggregate before joining, or use DISTINCT/pre-aggregated subqueries.
- **Assuming AVG treats NULL as 0.** It doesn't — AVG divides by the count of non-NULL values only, which can meaningfully change the result compared to what's expected.

## Real-world Data Analyst use cases

- **Sales analysis:** total and average revenue by region and month.
- **Customer analysis:** identifying repeat customers with HAVING COUNT(*) >= N.
- **Product analysis:** average rating per product, only for products with enough reviews to be statistically meaningful (HAVING COUNT(*) >= 10).

## Related concepts

\`\`\`
SELECT → WHERE
  ↓
GROUP BY (create groups) ← you are here
  ↓
HAVING (filter groups) ← you are here
  ↓
JOIN
  ↓
SUBQUERY / CTE
  ↓
WINDOW FUNCTIONS
\`\`\`

## Practice questions

### Easy
1. Write a query that counts orders per status.

### Medium
2. Write a query returning average order amount per region, only for regions with more than 50 orders.

### Interview/Advanced
3. Why is \`WHERE SUM(amount) > 1000\` invalid, and how do you fix it?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`SELECT status, COUNT(*) FROM orders GROUP BY status;\`
2. \`SELECT region, AVG(amount) FROM orders GROUP BY region HAVING COUNT(*) > 50;\`
3. WHERE filters individual rows *before* aggregation happens, so the aggregate value doesn't exist yet at that stage — the fix is to move the condition to HAVING, which filters groups after aggregation: \`... GROUP BY region HAVING SUM(amount) > 1000\`.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between WHERE and HAVING?**
Short answer: WHERE filters individual rows before grouping; HAVING filters groups after aggregation, based on the aggregated value.

### Conceptual questions
**Q: Why do aggregate functions ignore NULLs?**
Short answer: NULL represents an unknown value, so it can't meaningfully contribute to a sum, average, or count of known values — including it would produce a misleading result, so SQL excludes it by design.

### Scenario-based questions
**Q: A revenue total after joining orders to order line items looks 3x too high. What's the likely cause?**
Short answer: The join likely fanned out — each order matched multiple line-item rows, so summing the order-level revenue column after the join counted it once per matching line item instead of once per order.

### Practical questions
**Q: Write a query to find customers who placed more than 3 orders totaling over $500.**
Short answer: \`SELECT customer_id FROM orders GROUP BY customer_id HAVING COUNT(*) > 3 AND SUM(amount) > 500;\`

## Interview traps / tricky points

- COUNT(*) counts all rows including NULLs in any column; COUNT(column) counts only non-NULL values in that specific column — these can return different numbers on the same table.
- Aggregating after a row-multiplying join (without deduplication) is one of the most common real-world SQL bugs, and a favorite interview "spot the bug" scenario.

## Best practices

- Always double-check whether a join before an aggregation could multiply rows — verify row counts before and after if unsure.
- Include every non-aggregated selected column explicitly in GROUP BY.
- Use HAVING only for conditions on the aggregate; keep row-level filters in WHERE for performance (WHERE filters before the more expensive grouping step).

---

### ⚡ Quick Revision

**COUNT/SUM/AVG/MIN/MAX** → ignore NULLs (except COUNT(*))
**GROUP BY** → defines the groups; every non-aggregated SELECT column must appear here
**HAVING** → filters on the aggregate, after grouping (WHERE filters rows, before grouping)
**Execution order:** FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY
`);

setNote('sql-joins', `
## 🎯 What is it?

A **JOIN** combines rows from two or more tables based on a related column between them — like matching customers to their orders by customer_id. Most real-world analytics work involves combining multiple related datasets, and JOINs are how relational data becomes a single, answerable result.

## 💡 Why is it important?

Real databases split data across many tables by design (a customers table, an orders table, a products table) to avoid duplication — JOINs are the only way to bring that related data back together for analysis. It's arguably the single most important SQL skill for a working analyst, and the most commonly tested in interviews.

## Core concept

### INNER JOIN
Returns only rows that have a match in **both** tables. If a customer has no orders, they simply don't appear in an INNER JOIN's result.

### LEFT JOIN
Returns **every** row from the left table, whether or not it has a match in the right table — unmatched rows get NULL for every column from the right table.

### RIGHT JOIN and FULL JOIN
RIGHT JOIN is the mirror of LEFT JOIN (every row from the right table kept). FULL JOIN (or FULL OUTER JOIN) keeps every row from **both** tables, matching where possible and filling NULLs where not.

| Join type | Keeps |
|---|---|
| INNER JOIN | Only rows matched in both tables |
| LEFT JOIN | All left rows + matches from right (NULL if none) |
| RIGHT JOIN | All right rows + matches from left (NULL if none) |
| FULL JOIN | All rows from both, matched where possible |

### Joining multiple tables
Chain additional JOINs in the same query — each new JOIN connects to any table already brought into the query, not just the original one.

### Avoiding row explosion
If the join key isn't unique on one side, a join can silently multiply rows — e.g., joining orders to order_items (many items per order) means a naive SUM on the orders table after the join will double- or triple-count.

## Syntax

\`\`\`sql
SELECT a.column1, b.column2
FROM table_a a
INNER JOIN table_b b ON a.key = b.key;

SELECT a.column1, b.column2
FROM table_a a
LEFT JOIN table_b b ON a.key = b.key;
\`\`\`

## 📊 Example

\`customers\`:

| customer_id | name |
|---|---|
| 1 | Ana |
| 2 | Wei |
| 3 | Omar |

\`orders\`:

| order_id | customer_id | amount |
|---|---|---|
| 1 | 1 | 200 |
| 2 | 1 | 150 |
| 3 | 2 | 300 |

**Query — customers with their order count, including customers with zero orders:**

\`\`\`sql
SELECT c.name, COUNT(o.order_id) AS order_count
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.name;
\`\`\`

**Output:**

| name | order_count |
|---|---|
| Ana | 2 |
| Wei | 1 |
| Omar | 0 |

**Explanation:** LEFT JOIN keeps Omar even though he has no matching orders row; \`COUNT(o.order_id)\` correctly returns 0 for him because COUNT ignores the NULL produced by the unmatched join (using \`COUNT(*)\` instead would incorrectly return 1 for Omar).

## Multiple examples

**Beginner:** \`INNER JOIN\` customers to orders to list only customers who have actually ordered.
**Intermediate:** \`LEFT JOIN\` to find customers who have **never** ordered: add \`WHERE o.order_id IS NULL\` after the LEFT JOIN.
**Real-world:** Chaining three tables — \`orders JOIN customers ... JOIN products ...\` — to build a report showing customer name, product name, and order amount together in one row.

## Types / Variations

See the Core concept table above for INNER/LEFT/RIGHT/FULL — the same four types are the standard set across virtually all SQL databases.

## ⚠️ Common mistakes

- **Using INNER JOIN when you actually need LEFT JOIN.** This silently drops rows with no match — e.g., "customers without orders" disappears entirely from an INNER JOIN, which is often the opposite of what's needed.
- **Row explosion from a one-to-many join before aggregating.** Always check whether the join key is unique on both sides before trusting a SUM/COUNT computed after the join.
- **Using \`COUNT(*)\` instead of \`COUNT(column)\` after a LEFT JOIN**, which incorrectly counts unmatched rows as 1 instead of 0 (see the Omar example above).
- **Forgetting the ON condition** (or using a comma-style old-style join without a WHERE-based condition), which produces a cartesian product — every row of one table matched with every row of the other.

## Real-world Data Analyst use cases

- **Customer analysis:** LEFT JOIN to find customers who never made a purchase — a common churn/re-engagement target list.
- **Sales analysis:** JOIN orders to products to report revenue by product category.
- **Operations analysis:** JOIN shipments to warehouses to region to find which region has the most delays.

## Related concepts

\`\`\`
SELECT → WHERE → GROUP BY → HAVING
  ↓
JOIN ← you are here
  ↓
SUBQUERY / CTE
  ↓
UNION / Set Operations
  ↓
WINDOW FUNCTIONS
\`\`\`

## Practice questions

### Easy
1. Write an INNER JOIN between \`customers\` and \`orders\` on customer_id.

### Medium
2. Write a query that returns every customer and their order count, including customers with zero orders.

### Interview/Advanced
3. A query joining \`orders\` to \`order_items\` and then summing \`orders.amount\` returns a total 4x higher than the real total. What's happening, and how would you fix it?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`SELECT * FROM customers c INNER JOIN orders o ON c.customer_id = o.customer_id;\`
2. \`SELECT c.name, COUNT(o.order_id) AS order_count FROM customers c LEFT JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.name;\`
3. Each order has multiple order_items rows, so the join multiplies each order's row by its number of items (row explosion) — summing \`orders.amount\` after the join re-counts that same amount once per item row. Fix: aggregate order_items separately (or use a subquery/CTE) before joining, or sum a distinct per-order value rather than the joined, multiplied rows.

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What's the difference between INNER JOIN and LEFT JOIN?**
Short answer: INNER JOIN returns only rows with a match in both tables; LEFT JOIN returns every row from the left table regardless of a match, filling unmatched right-side columns with NULL.

### Conceptual questions
**Q: Why would you choose LEFT JOIN over INNER JOIN for "find customers with no orders"?**
Short answer: INNER JOIN would drop unmatched customers entirely, since it only keeps matched rows — LEFT JOIN keeps every customer, so filtering for NULL on the orders side afterward correctly finds customers with zero matches.

### Scenario-based questions
**Q: A report's total revenue is unexpectedly 3x too high after adding a join to a new table. What's your diagnostic approach?**
Short answer: Compare the row count before and after the join — a jump in row count relative to the original table is the signature of row explosion from a one-to-many join, and the fix is usually to pre-aggregate one side before joining.

### Practical questions
**Q: Write a query joining three tables — orders, customers, and products — to show customer name, product name, and order amount.**
Short answer: \`SELECT c.name, p.name AS product_name, o.amount FROM orders o JOIN customers c ON o.customer_id = c.customer_id JOIN products p ON o.product_id = p.product_id;\`

## Interview traps / tricky points

- \`COUNT(*)\` vs \`COUNT(column)\` behaves differently after a LEFT JOIN — a very common "gotcha" question.
- Forgetting an explicit JOIN condition creates a cartesian product (every row × every row) — a subtle bug that inflates results dramatically without an obvious error.
- NULL values produced by a LEFT JOIN propagate into any calculation on those columns — always account for them explicitly.

## Best practices

- Default to LEFT JOIN when it's unclear whether every row should be preserved — it's the safer choice to catch missing matches.
- Always sanity-check row counts before and after a join, especially before aggregating.
- Use table aliases consistently for readability once more than one table is involved.

---

### ⚡ Quick Revision

**INNER JOIN** → only matched rows in both tables
**LEFT JOIN** → all left rows, NULL for unmatched right side
**Row explosion** → one-to-many joins multiply rows; check counts before aggregating
**COUNT(*) vs COUNT(column)** → behave differently on LEFT JOIN's NULLs
`);

setNote('sql-subqueries', `
## 🎯 What is it?

A **subquery** is a query nested inside another query — in the WHERE clause, the FROM clause, or as a single scalar value — used to answer a question a single flat query can't answer directly.

## 💡 Why is it important?

Before CTEs became widely supported, subqueries were how every complex SQL question got answered, and they still show up constantly in interviews and in existing production codebases you'll need to read and maintain.

## Core concept

### Subqueries in WHERE
Filters rows in the outer query based on the result of an inner query — e.g., "customers whose spend is above the *average* spend across all customers" requires computing that average first, inside a subquery.

### Subqueries in FROM
Treats a query's result as a temporary, unnamed table that the outer query can then select from or join to — useful when you need to aggregate first, then filter or join on the aggregated result.

### Correlated subqueries
A subquery that references a column from the **outer** query — meaning it can't be evaluated once; it's conceptually re-evaluated **for every row** of the outer query. This makes correlated subqueries more powerful, but also potentially much slower on large tables than a non-correlated one.

| Type | Runs |
|---|---|
| Non-correlated subquery | Once, independently of the outer query |
| Correlated subquery | Once per outer row (references the outer row) |

## Syntax

\`\`\`sql
-- Subquery in WHERE (non-correlated)
SELECT customer_id, total_spend
FROM customer_totals
WHERE total_spend > (SELECT AVG(total_spend) FROM customer_totals);

-- Subquery in FROM
SELECT region, avg_order_value
FROM (
  SELECT region, AVG(amount) AS avg_order_value
  FROM orders
  GROUP BY region
) AS region_averages
WHERE avg_order_value > 100;

-- Correlated subquery
SELECT c.customer_id, c.name
FROM customers c
WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id AND o.amount > 1000
);
\`\`\`

## 📊 Example

\`customer_totals\` (a summarized table/view):

| customer_id | total_spend |
|---|---|
| 1 | 900 |
| 2 | 200 |
| 3 | 1,500 |

**Query:**

\`\`\`sql
SELECT customer_id, total_spend
FROM customer_totals
WHERE total_spend > (SELECT AVG(total_spend) FROM customer_totals);
\`\`\`

**Average spend** = (900+200+1500)/3 = 866.67

**Output:**

| customer_id | total_spend |
|---|---|
| 1 | 900 |
| 3 | 1,500 |

**Explanation:** The inner subquery computes a single number (the average) once, and the outer query filters against it — customer 2 (200) falls below the average and is excluded.

## Multiple examples

**Beginner:** \`WHERE amount > (SELECT AVG(amount) FROM orders)\` — filter against a single computed value.
**Intermediate — FROM subquery:** aggregate orders by region in a subquery, then filter that aggregated result in the outer query.
**Real-world — correlated subquery:** \`WHERE EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id)\` — a common, efficient way to check "does this customer have at least one order?" without joining and risking row duplication.

## Types / Variations

| Location | Returns | Typical use |
|---|---|---|
| WHERE (scalar) | A single value | Compare a row against an aggregate |
| WHERE (IN/EXISTS) | A set of values | Check membership or existence |
| FROM | A full result set | Pre-aggregate, then filter/join on top |

## ⚠️ Common mistakes

- **Using a subquery that returns more than one row where a single value is expected**, causing a runtime error (e.g., \`= (SELECT ...)\` when the subquery returns multiple rows — use \`IN\` instead of \`=\` for multi-row results).
- **Not recognizing a subquery is correlated**, and being surprised by its performance on a large table — a correlated subquery effectively runs once per outer row.
- **Nesting subqueries too deeply**, producing a query that's technically correct but very hard to read — this is exactly the problem [CTEs](/skills/sql-ctes) solve.

## Real-world Data Analyst use cases

- **Customer analysis:** finding customers whose spend is above the company average.
- **Sales analysis:** finding products that have never been ordered, using \`NOT EXISTS\`.
- **Marketing analysis:** pre-aggregating campaign performance in a FROM subquery, then filtering the aggregated result.

## Related concepts

\`\`\`
JOIN
  ↓
SUBQUERY ← you are here
  ↓
CTE (often a more readable alternative)
  ↓
UNION / Set Operations
  ↓
WINDOW FUNCTIONS
\`\`\`

## Practice questions

### Easy
1. Write a query that returns orders with an amount above the overall average order amount, using a subquery.

### Medium
2. Write a query that returns customers who have never placed an order, using \`NOT EXISTS\`.

### Interview/Advanced
3. What's the difference between a correlated and a non-correlated subquery, and why does that difference matter for performance on a large table?

<details><summary><strong>Answer / Solution</strong></summary>

1. \`SELECT * FROM orders WHERE amount > (SELECT AVG(amount) FROM orders);\`
2. \`SELECT * FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);\`
3. A non-correlated subquery runs once, independent of the outer query, and its result is reused for every outer row; a correlated subquery references a column from the outer query and is conceptually re-evaluated once per outer row — on a large table, this can be far slower unless the database optimizer rewrites it efficiently (e.g., as a join or semi-join internally).

</details>

## 🎤 Interview preparation

### Basic interview questions
**Q: What is a subquery?**
Short answer: A query nested inside another query, used to compute a value or a filtered set that the outer query then uses.

### Conceptual questions
**Q: What makes a subquery "correlated"?**
Short answer: It references a column from the outer query, meaning it depends on and is logically re-evaluated per row of the outer query, rather than being computed once independently.

### Scenario-based questions
**Q: A query using \`WHERE customer_id = (SELECT customer_id FROM ... )\` throws an error about returning more than one row. What's the fix?**
Short answer: Change \`=\` to \`IN\`, since the subquery is returning a set of multiple values, not a single scalar — \`=\` only works when the subquery is guaranteed to return exactly one row.

### Practical questions
**Q: Write a query finding products that have never appeared in any order.**
Short answer: \`SELECT * FROM products p WHERE NOT EXISTS (SELECT 1 FROM order_items oi WHERE oi.product_id = p.product_id);\`

## Interview traps / tricky points

- \`EXISTS\`/\`NOT EXISTS\` is often more efficient than \`IN\`/\`NOT IN\` for large subqueries, and behaves more predictably around NULLs — \`NOT IN\` with a NULL in the subquery's result silently returns zero rows for the whole query, a classic and dangerous trap.
- A subquery that "looks" non-correlated but references an outer-query column deep in a nested clause is still correlated — always check carefully.

## Best practices

- Prefer \`EXISTS\`/\`NOT EXISTS\` over \`IN\`/\`NOT IN\` when the subquery's result could contain a NULL.
- Consider rewriting a deeply nested subquery as a CTE for readability once it's more than one or two levels deep.
- Always verify whether a subquery is correlated, especially before running it against a large table.

---

### ⚡ Quick Revision

**Subquery in WHERE** → filter against a computed value or set
**Subquery in FROM** → treat a query's result as a temporary table
**Correlated** → references the outer row, re-evaluated per row
**Watch for:** \`NOT IN\` + NULL in the subquery silently returns zero rows — prefer \`NOT EXISTS\`
`);
