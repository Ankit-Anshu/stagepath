// Full Power BI curriculum tree, transcribed from the user-supplied
// "powerbi.md" folder structure. Same treatment as the SQL curriculum
// (src/lib/sql-curriculum.ts): a reference map only, not individually
// authored topic pages. Topic names come straight from the source file
// names with the ordering prefix stripped and remaining hyphens turned
// into spaces (aside from compound terms like "E-Commerce", kept as
// written); section titles are lightly cleaned up for readability but map
// 1:1 to the source's numbered folders. One duplicate leaf the source
// listed twice ("Composite-Models" under Power BI Architecture) is kept
// only once here.
export interface PowerBiSection {
  id: string;
  title: string;
  topics: string[];
}

export const POWERBI_CURRICULUM: PowerBiSection[] = [
  { id: 'foundations', title: 'Foundations', topics: ['What is Power BI', 'Power BI Ecosystem', 'Power BI Desktop', 'Power BI Service', 'Power BI Mobile', 'Power BI Report Server', 'Power Query', 'DAX', 'Data Modeling'] },
  { id: 'power-bi-setup', title: 'Power BI Setup', topics: ['Install Power BI Desktop', 'Interface', 'Workspaces', 'Files and Extensions', 'Options and Settings', 'Keyboard Shortcuts'] },
  { id: 'data-connections', title: 'Data Connections', topics: ['Excel', 'CSV', 'Text Files', 'SQL Server', 'MySQL', 'PostgreSQL', 'Web', 'APIs', 'SharePoint', 'Azure', 'Databricks', 'Snowflake', 'Other Connectors'] },
  { id: 'power-query', title: 'Power Query', topics: ['Power Query Interface', 'Query Editor', 'Applied Steps', 'Data Types', 'Rename Columns', 'Remove Columns', 'Remove Rows', 'Filter Rows', 'Sort Rows', 'Replace Values', 'Fill Down', 'Fill Up', 'Split Columns', 'Merge Columns', 'Group By', 'Pivot Columns', 'Unpivot Columns', 'Transpose', 'Duplicate Queries', 'Reference Queries', 'Query Dependencies'] },
  { id: 'm-language', title: 'M Language', topics: ['M Language Basics', 'Variables', 'Expressions', 'Functions', 'Lists', 'Records', 'Tables', 'Custom Functions', 'Parameters', 'Advanced M Queries'] },
  { id: 'data-cleaning', title: 'Data Cleaning', topics: ['Missing Values', 'Duplicate Values', 'Incorrect Data Types', 'Null Values', 'Errors', 'Outliers', 'Text Cleaning', 'Date Cleaning', 'Number Cleaning', 'Standardization', 'Data Validation'] },
  { id: 'data-transformation', title: 'Data Transformation', topics: ['Merge Queries', 'Append Queries', 'Grouping', 'Aggregation', 'Conditional Columns', 'Custom Columns', 'Index Columns', 'Parameters', 'Dynamic Transformations', 'Reusable Transformations'] },
  { id: 'data-modeling', title: 'Data Modeling', topics: ['What is Data Modeling', 'Tables', 'Relationships', 'Primary Keys', 'Foreign Keys', 'Cardinality', 'Cross Filter Direction', 'Active Relationships', 'Inactive Relationships', 'Star Schema', 'Snowflake Schema', 'Fact Tables', 'Dimension Tables', 'Role Playing Dimensions', 'Bridge Tables', 'Model Optimization'] },
  { id: 'date-table', title: 'Date Table', topics: ['Date Table Concept', 'Creating Date Table', 'Mark as Date Table', 'Calendar', 'Fiscal Year', 'Fiscal Quarter', 'Week Logic', 'Month Logic', 'Working Days', 'Custom Date Attributes'] },
  { id: 'dax-foundations', title: 'DAX Foundations', topics: ['What is DAX', 'DAX Syntax', 'Calculated Columns', 'Measures', 'Calculated Tables', 'DAX Operators', 'Variables', 'Comments', 'Evaluation Order'] },
  { id: 'dax-functions', title: 'DAX Functions', topics: ['Aggregation Functions', 'SUM', 'AVERAGE', 'MIN MAX', 'COUNT', 'COUNTROWS', 'DISTINCTCOUNT', 'Iterator Functions', 'SUMX', 'AVERAGEX', 'MINX MAXX', 'COUNTX', 'CONCATENATEX'] },
  { id: 'dax-filtering', title: 'DAX Filtering', topics: ['FILTER', 'CALCULATE', 'CALCULATETABLE', 'ALL', 'ALLEXCEPT', 'ALLSELECTED', 'REMOVEFILTERS', 'KEEPFILTERS', 'VALUES', 'DISTINCT', 'SELECTEDVALUE'] },
  { id: 'dax-logical', title: 'DAX Logical Functions', topics: ['IF', 'SWITCH', 'AND', 'OR', 'NOT', 'TRUE', 'FALSE', 'Conditional DAX'] },
  { id: 'dax-text', title: 'DAX Text Functions', topics: ['CONCATENATE', 'CONCATENATEX', 'LEFT', 'RIGHT', 'MID', 'LEN', 'SEARCH', 'FIND', 'FORMAT', 'Text Logic'] },
  { id: 'dax-date-time', title: 'DAX Date & Time', topics: ['TODAY', 'NOW', 'DATE', 'YEAR', 'MONTH', 'DAY', 'WEEKDAY', 'WEEKNUM', 'EDATE', 'EOMONTH', 'DATEDIFF', 'Date Calculations'] },
  { id: 'dax-time-intelligence', title: 'DAX Time Intelligence', topics: ['TOTALYTD', 'TOTALQTD', 'TOTALMTD', 'DATEADD', 'SAMEPERIODLASTYEAR', 'PREVIOUSMONTH', 'PREVIOUSQUARTER', 'PREVIOUSYEAR', 'NEXTMONTH', 'NEXTYEAR', 'YTD', 'QTD', 'MTD', 'MoM', 'QoQ', 'YoY'] },
  { id: 'dax-context', title: 'DAX Context', topics: ['Row Context', 'Filter Context', 'Context Transition', 'CALCULATE Context', 'Evaluation Context', 'Context Propagation', 'Context Debugging'] },
  { id: 'dax-advanced', title: 'Advanced DAX', topics: ['RANKX', 'TOPN', 'EARLIER', 'HASONEVALUE', 'ISFILTERED', 'ISCROSSFILTERED', 'ISINSCOPE', 'HASONEFILTER', 'USERELATIONSHIP', 'CROSSFILTER', 'TREATAS', 'INTERSECT', 'UNION', 'EXCEPT', 'Advanced DAX Patterns'] },
  { id: 'dax-patterns', title: 'DAX Patterns', topics: ['Running Total', 'Moving Average', 'Ranking', 'Top N', 'Bottom N', 'Percent of Total', 'Contribution Analysis', 'Dynamic Target', 'Dynamic Title', 'Dynamic Formatting', 'Pareto Analysis', 'ABC Analysis', 'Cohort Analysis', 'Retention Analysis', 'Churn Analysis', 'Funnel Analysis'] },
  { id: 'visualizations', title: 'Visualizations', topics: ['Bar Chart', 'Column Chart', 'Line Chart', 'Area Chart', 'Pie Chart', 'Donut Chart', 'Scatter Chart', 'Combo Chart', 'Waterfall Chart', 'Funnel Chart', 'TreeMap', 'Gauge', 'Card', 'KPI', 'Table', 'Matrix', 'Map', 'Filled Map', 'Decomposition Tree'] },
  { id: 'report-design', title: 'Report Design', topics: ['Visual Hierarchy', 'Layout', 'Alignment', 'Spacing', 'Typography', 'Color Theory', 'Themes', 'Conditional Formatting', 'Tooltips', 'Buttons', 'Icons', 'Images', 'Bookmarks', 'Navigation', 'Drillthrough', 'Drilldown', 'Report UX'] },
  { id: 'interactivity', title: 'Interactivity', topics: ['Slicers', 'Filters', 'Visual Interactions', 'Bookmarks', 'Buttons', 'Page Navigation', 'Drillthrough', 'Drilldown', 'Tooltips', 'Sync Slicers', 'What If Parameters'] },
  { id: 'advanced-reporting', title: 'Advanced Reporting', topics: ['Dynamic Reports', 'Dynamic Metrics', 'Dynamic Titles', 'Field Parameters', 'Calculation Groups', 'Disconnected Tables', 'Dynamic Slicers', 'Scenario Analysis', 'What If Analysis'] },
  { id: 'power-bi-service', title: 'Power BI Service', topics: ['Power BI Service Basics', 'Workspaces', 'Reports', 'Dashboards', 'Semantic Models', 'Apps', 'Publishing', 'Sharing', 'Subscriptions', 'Comments', 'Alerts', 'Collaboration'] },
  { id: 'refresh-data', title: 'Refresh & Gateways', topics: ['Manual Refresh', 'Scheduled Refresh', 'Incremental Refresh', 'Refresh History', 'Refresh Errors', 'Data Gateway', 'On Premises Gateway', 'Cloud Gateway'] },
  { id: 'security', title: 'Security', topics: ['Workspace Roles', 'Dataset Permissions', 'Row Level Security', 'Static RLS', 'Dynamic RLS', 'Object Level Security', 'Sensitivity Labels', 'Security Best Practices'] },
  { id: 'performance-optimization', title: 'Performance Optimization', topics: ['Model Size', 'Storage Engine', 'Formula Engine', 'VertiPaq', 'Performance Analyzer', 'DAX Studio', 'Query Performance', 'Model Optimization', 'Relationship Optimization', 'DAX Optimization', 'Report Optimization'] },
  { id: 'power-bi-architecture', title: 'Power BI Architecture', topics: ['Power BI Architecture', 'Semantic Models', 'Dataset vs Semantic Model', 'Composite Models', 'Import Mode', 'DirectQuery', 'Live Connection', 'Dual Mode', 'Direct Lake'] },
  { id: 'data-warehousing', title: 'Data Warehousing', topics: ['OLTP vs OLAP', 'Fact Tables', 'Dimension Tables', 'Star Schema', 'Snowflake Schema', 'Slowly Changing Dimensions', 'Data Marts', 'Semantic Layer'] },
  { id: 'power-bi-with-sql', title: 'Power BI with SQL', topics: ['SQL Connections', 'SQL Views', 'Stored Procedures', 'Query Folding', 'Import vs DirectQuery', 'SQL Performance'] },
  { id: 'power-bi-with-python', title: 'Power BI with Python', topics: ['Python Integration', 'Python Data Cleaning', 'Python Visuals', 'Pandas', 'Python in Power Query'] },
  { id: 'power-bi-with-azure', title: 'Power BI with Azure', topics: ['Azure SQL', 'Azure Data Lake', 'Azure Synapse', 'Azure Data Factory', 'Microsoft Fabric'] },
  { id: 'microsoft-fabric', title: 'Microsoft Fabric', topics: ['Fabric Overview', 'Lakehouse', 'Warehouse', 'Data Pipelines', 'Notebooks', 'Semantic Models', 'Direct Lake', 'Power BI in Fabric'] },
  { id: 'business-analytics', title: 'Business Analytics', topics: ['Sales Analytics', 'Marketing Analytics', 'Customer Analytics', 'Product Analytics', 'Financial Analytics', 'HR Analytics', 'Operations Analytics', 'Supply Chain Analytics'] },
  { id: 'kpi-analytics', title: 'KPI Analytics', topics: ['Revenue', 'Profit', 'Gross Margin', 'AOV', 'Conversion Rate', 'Customer Acquisition Cost', 'Customer Lifetime Value', 'Retention', 'Churn', 'Growth', 'MoM', 'QoQ', 'YoY'] },
  { id: 'real-world-dashboards', title: 'Real-World Dashboards', topics: ['Sales Dashboard', 'Executive Dashboard', 'Finance Dashboard', 'Marketing Dashboard', 'HR Dashboard', 'Customer Dashboard', 'Product Dashboard', 'Operations Dashboard', 'Supply Chain Dashboard'] },
  { id: 'projects', title: 'Projects', topics: ['Sales Dashboard', 'HR Dashboard', 'Student Performance Dashboard', 'E-Commerce Dashboard', 'Customer Analytics', 'Marketing Dashboard', 'Financial Dashboard', 'Supply Chain Dashboard', 'Customer Retention', 'Executive Dashboard', 'Enterprise BI Solution', 'End to End Analytics Platform', 'Fabric Analytics Project', 'Production BI Architecture'] },
  { id: 'practice', title: 'Practice', topics: ['Visualization', 'Power Query', 'DAX Beginner', 'DAX Intermediate', 'DAX Advanced', 'Data Modeling', 'Real World Scenarios', 'Case Studies'] },
  { id: 'pl-300', title: 'PL-300 Exam Prep', topics: ['Data Preparation', 'Data Modeling', 'Data Analysis', 'Visualization', 'Power BI Service', 'Security', 'Practice Questions', 'Mock Tests'] },
  { id: 'power-bi-interview', title: 'Interview Practice', topics: ['Beginner', 'Intermediate', 'Advanced', 'Power Query', 'DAX', 'Data Modeling', 'Scenario Based', 'Case Studies', 'Performance Questions'] },
  { id: 'cheatsheets', title: 'Cheat Sheets', topics: ['Power BI Shortcuts', 'Power Query Cheatsheet', 'M Language Cheatsheet', 'DAX Cheatsheet', 'DAX Functions', 'Time Intelligence', 'Data Modeling', 'Visualization Guide'] },
];
