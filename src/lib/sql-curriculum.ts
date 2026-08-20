// Full SQL curriculum tree, transcribed from the user-supplied
// "sql roadmap.md" folder structure. This is a reference map only — a
// section-by-section outline of everything SQL covers, not a set of
// individually authored topic pages. Topic names are taken verbatim from
// the source file names with only the ordering prefix and the ".md"
// extension stripped and remaining hyphens turned into spaces; section
// titles are lightly cleaned up for readability but map 1:1 to the
// source's numbered folders.
export interface SqlSection {
  id: string;
  title: string;
  topics: string[];
}

export const SQL_CURRICULUM: SqlSection[] = [
  { id: 'foundations', title: 'Foundations', topics: ['What is SQL', 'Database Basics', 'RDBMS', 'Tables Rows Columns', 'Keys and Relationships', 'SQL Command Types', 'Setup SQL Environment'] },
  { id: 'sql-basics', title: 'SQL Basics', topics: ['SELECT', 'FROM', 'DISTINCT', 'ALIASES', 'WHERE', 'AND OR NOT', 'IN BETWEEN LIKE', 'NULL', 'ORDER BY', 'LIMIT TOP OFFSET', 'Operators'] },
  { id: 'data-types', title: 'Data Types', topics: ['Numeric', 'String', 'Date Time', 'Boolean', 'Type Conversion'] },
  { id: 'sql-functions', title: 'SQL Functions', topics: ['String Functions', 'Numeric Functions', 'Date Time Functions', 'NULL Functions', 'Type Conversion Functions'] },
  { id: 'aggregations', title: 'Aggregations', topics: ['COUNT', 'SUM', 'AVG', 'MIN MAX', 'GROUP BY', 'HAVING', 'Analytical Queries'] },
  { id: 'joins', title: 'Joins', topics: ['JOIN Fundamentals', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN', 'CROSS JOIN', 'SELF JOIN', 'Multiple JOINs', 'Many to Many', 'SEMI JOIN', 'ANTI JOIN'] },
  { id: 'conditional-logic', title: 'Conditional Logic', topics: ['CASE', 'Simple CASE', 'Searched CASE', 'Nested CASE', 'Conditional Aggregation'] },
  { id: 'subqueries', title: 'Subqueries', topics: ['Scalar Subquery', 'Subquery in WHERE', 'Subquery in FROM', 'Subquery in SELECT', 'Correlated Subquery', 'IN', 'EXISTS', 'NOT EXISTS', 'ANY ALL'] },
  { id: 'set-operations', title: 'Set Operations', topics: ['UNION', 'UNION ALL', 'INTERSECT', 'EXCEPT', 'Set vs JOIN'] },
  { id: 'ctes', title: 'CTEs', topics: ['Basic CTE', 'Multiple CTEs', 'CTE with JOINs', 'CTE with Aggregation', 'CTE with Windows', 'Recursive CTE'] },
  { id: 'window-functions', title: 'Window Functions', topics: ['Window Fundamentals', 'OVER', 'PARTITION BY', 'ROW NUMBER', 'RANK', 'DENSE RANK', 'NTILE', 'LAG', 'LEAD', 'FIRST VALUE', 'LAST VALUE', 'Running Total', 'Moving Average', 'Gaps and Islands'] },
  { id: 'dml', title: 'DML', topics: ['INSERT', 'UPDATE', 'DELETE', 'MERGE', 'UPSERT'] },
  { id: 'ddl', title: 'DDL', topics: ['CREATE DATABASE', 'CREATE TABLE', 'ALTER TABLE', 'DROP', 'TRUNCATE'] },
  { id: 'constraints', title: 'Constraints', topics: ['PRIMARY KEY', 'FOREIGN KEY', 'UNIQUE', 'NOT NULL', 'CHECK', 'DEFAULT'] },
  { id: 'database-design', title: 'Database Design', topics: ['Data Modeling', 'ER Diagrams', 'Cardinality', '1NF', '2NF', '3NF', 'BCNF', 'Denormalization'] },
  { id: 'views-temp-tables', title: 'Views & Temp Tables', topics: ['Views', 'Materialized Views', 'Temporary Tables', 'Temporary Views'] },
  { id: 'stored-procedures', title: 'Stored Procedures & Functions', topics: ['Stored Procedures', 'Parameters', 'Variables', 'User Defined Functions', 'Triggers'] },
  { id: 'transactions', title: 'Transactions', topics: ['Transactions', 'COMMIT', 'ROLLBACK', 'Savepoints', 'ACID', 'Isolation Levels', 'Locking', 'Deadlocks'] },
  { id: 'indexing', title: 'Indexing', topics: ['Why Indexes', 'B Tree', 'Clustered Index', 'Non Clustered Index', 'Composite Index', 'Covering Index', 'Index Strategy'] },
  { id: 'query-optimization', title: 'Query Optimization', topics: ['Execution Order', 'Execution Plans', 'Table Scan', 'Index Scan', 'Index Seek', 'Join Algorithms', 'SARGability', 'Statistics', 'Query Optimization'] },
  { id: 'analytics-sql', title: 'SQL for Analytics', topics: ['Time Series', 'Cohort Analysis', 'Retention Analysis', 'Funnel Analysis', 'Customer Segmentation', 'RFM Analysis', 'Churn Analysis', 'Percentiles', 'Moving Metrics', 'Growth Analysis'] },
  { id: 'data-warehousing', title: 'Data Warehousing', topics: ['OLTP vs OLAP', 'Fact Tables', 'Dimension Tables', 'Star Schema', 'Snowflake Schema', 'SCD Overview', 'SCD Type 1', 'SCD Type 2', 'SCD Type 3', 'Surrogate Keys'] },
  { id: 'etl-elt', title: 'ETL & ELT', topics: ['ETL Basics', 'ELT Basics', 'Full Load', 'Incremental Load', 'CDC', 'Upsert Pipelines', 'Deduplication', 'Data Quality'] },
  { id: 'sql-data-analyst', title: 'SQL for Data Analysts', topics: ['Sales Analytics', 'Customer Analytics', 'Product Analytics', 'Marketing Analytics', 'Financial Analytics', 'HR Analytics', 'KPI Analysis'] },
  { id: 'sql-data-engineering', title: 'SQL for Data Engineering', topics: ['Pipeline SQL', 'Data Transformation', 'Data Validation', 'Data Cleansing', 'CDC', 'Production SQL'] },
  { id: 'cloud-sql', title: 'Cloud SQL', topics: ['Snowflake', 'BigQuery', 'Redshift', 'Databricks SQL', 'SQL Server'] },
  { id: 'sql-python', title: 'SQL with Python', topics: ['Database Connections', 'SQLAlchemy', 'PyODBC', 'Pandas SQL', 'SQL in Pipelines'] },
  { id: 'sql-bi', title: 'SQL for BI Tools', topics: ['SQL Power BI', 'SQL Tableau', 'Import vs DirectQuery', 'Query Folding', 'BI Performance'] },
  { id: 'sql-security', title: 'SQL Security', topics: ['Roles', 'Permissions', 'Access Control', 'SQL Injection', 'Auditing'] },
  { id: 'sql-interview', title: 'Interview Practice', topics: ['Beginner', 'Intermediate', 'Advanced', 'Window Function Problems', 'Business Case Studies', 'SQL Optimization Problems'] },
  { id: 'projects', title: 'Projects', topics: ['Library Database', 'Student Database', 'Employee Database', 'Sales Analytics', 'E-Commerce Analytics', 'Customer Analytics', 'Customer Retention', 'Marketing Funnel', 'Financial Analytics', 'Supply Chain Analytics', 'Data Warehouse', 'ETL Pipeline', 'Incremental Pipeline', 'Production Analytics Platform'] },
  { id: 'practice', title: 'Practice Problems', topics: ['Easy', 'Medium', 'Hard', 'Window Functions', 'JOIN Problems', 'CTE Problems', 'Real World Problems'] },
  { id: 'cheatsheets', title: 'Cheat Sheets', topics: ['SQL Syntax', 'JOIN CheatSheet', 'Window Functions', 'Date Functions', 'String Functions', 'Interview Patterns'] },
  { id: 'database-scripts', title: 'Database Scripts', topics: ['schemas', 'tables', 'sample data', 'views', 'procedures', 'functions'] },
];
