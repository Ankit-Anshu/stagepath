// Full Tableau curriculum tree, transcribed from the user-supplied
// "TABLEAU.md" folder structure. Same treatment as the SQL, Power BI, and
// Git & GitHub curricula: a reference map only, not individually authored
// topic pages. Topic names come straight from the source file names with
// the ordering prefix stripped and remaining hyphens turned into spaces
// (aside from compound terms like "E-Commerce" and "Real-Time", kept as
// written); section titles are lightly cleaned up for readability but map
// 1:1 to the source's numbered folders. Some topics (e.g. "Custom SQL",
// "Cohort Analysis", "Permissions") intentionally appear in more than one
// section, same as the source doc.
export interface TableauSection {
  id: string;
  title: string;
  topics: string[];
}

export const TABLEAU_CURRICULUM: TableauSection[] = [
  { id: 'foundations', title: 'Foundations', topics: ['What is Tableau', 'Tableau Ecosystem', 'Tableau Desktop', 'Tableau Public', 'Tableau Server', 'Tableau Cloud', 'Tableau Prep', 'Tableau Interface', 'Tableau Workflow', 'Tableau File Types'] },
  { id: 'data-connections', title: 'Data Connections', topics: ['Connecting to Data', 'Excel', 'CSV', 'Text Files', 'Google Sheets', 'SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'Cloud Databases', 'Data Warehouse', 'Data Lake', 'Extract vs Live'] },
  { id: 'data-understanding', title: 'Data Understanding', topics: ['Dimensions', 'Measures', 'Discrete', 'Continuous', 'Data Types', 'Geographic Data', 'Date Fields', 'Measure Names', 'Measure Values', 'Data Interpretation'] },
  { id: 'data-preparation', title: 'Data Preparation', topics: ['Data Cleaning', 'Data Types', 'Missing Values', 'Duplicates', 'Null Values', 'Rename Fields', 'Split Fields', 'Group Values', 'Pivot Data', 'Unpivot Data', 'Custom SQL', 'Data Validation'] },
  { id: 'tableau-prep', title: 'Tableau Prep', topics: ['Tableau Prep Basics', 'Input Step', 'Cleaning Step', 'Join Step', 'Union Step', 'Aggregate Step', 'Pivot Step', 'Script Step', 'Output Step', 'Data Profiling', 'Prep Flows'] },
  { id: 'data-modeling', title: 'Data Modeling', topics: ['Relationships', 'Logical Layer', 'Physical Layer', 'Joins', 'Inner Join', 'Left Join', 'Right Join', 'Full Join', 'Cross Join', 'Unions', 'Relationships vs Joins', 'Data Granularity', 'Data Modeling Best Practices'] },
  { id: 'basic-visualizations', title: 'Basic Visualizations', topics: ['Text Tables', 'Bar Charts', 'Line Charts', 'Area Charts', 'Pie Charts', 'Donut Charts', 'Scatter Plots', 'Histograms', 'Box Plots', 'Highlight Tables', 'Heatmaps', 'Treemaps', 'Packed Bubbles', 'Gantt Charts'] },
  { id: 'advanced-visualizations', title: 'Advanced Visualizations', topics: ['Waterfall Charts', 'Funnel Charts', 'Pareto Charts', 'Bullet Charts', 'Lollipop Charts', 'Dumbbell Charts', 'Dual Axis Charts', 'Combination Charts', 'Small Multiples', 'Calendar Heatmaps', 'Bump Charts', 'Advanced Custom Charts'] },
  { id: 'filters', title: 'Filters', topics: ['Dimension Filters', 'Measure Filters', 'Date Filters', 'Context Filters', 'Extract Filters', 'Data Source Filters', 'Quick Filters', 'Relative Date Filters', 'Top N Filters', 'Conditional Filters', 'Parameter Filters', 'Filter Order of Operations'] },
  { id: 'sorting-grouping', title: 'Sorting & Grouping', topics: ['Basic Sorting', 'Custom Sorting', 'Manual Sorting', 'Nested Sorting', 'Groups', 'Sets', 'Combined Sets', 'Hierarchies'] },
  { id: 'calculated-fields', title: 'Calculated Fields', topics: ['Calculated Field Basics', 'Arithmetic Calculations', 'String Calculations', 'Date Calculations', 'Logical Calculations', 'Aggregate Calculations', 'Conditional Calculations', 'IF', 'CASE', 'IIF', 'ZN', 'IFNULL', 'Advanced Calculations'] },
  { id: 'table-calculations', title: 'Table Calculations', topics: ['Table Calculation Basics', 'Running Total', 'Difference', 'Percent Difference', 'Percent of Total', 'Rank', 'Moving Average', 'Window Calculations', 'Index', 'First Last', 'Addressing and Partitioning'] },
  { id: 'lod-expressions', title: 'LOD Expressions', topics: ['LOD Concept', 'FIXED', 'INCLUDE', 'EXCLUDE', 'LOD vs Table Calculations', 'Customer Level Metrics', 'Order Level Metrics', 'Cohort Analysis', 'Customer Lifetime Value', 'Advanced LOD'] },
  { id: 'date-analytics', title: 'Date Analytics', topics: ['Date Basics', 'Date Parts', 'Date Values', 'Year', 'Quarter', 'Month', 'Week', 'Day', 'Date Difference', 'Date Add', 'Relative Dates', 'Rolling Dates', 'YoY', 'MoM', 'QoQ', 'Time Series Analysis'] },
  { id: 'time-series', title: 'Time Series', topics: ['Trend Analysis', 'Seasonality', 'Moving Averages', 'Rolling Metrics', 'Growth Rates', 'Year over Year', 'Month over Month', 'Quarter over Quarter', 'Forecasting', 'Trend Lines', 'Time Series Modeling'] },
  { id: 'parameters', title: 'Parameters', topics: ['Parameter Basics', 'Parameter Controls', 'Dynamic Calculations', 'Dynamic Measures', 'Dynamic Dimensions', 'What If Analysis', 'Parameter Actions', 'Advanced Parameters'] },
  { id: 'sets', title: 'Sets', topics: ['Set Basics', 'Fixed Sets', 'Dynamic Sets', 'Top N Sets', 'Combined Sets', 'Set Actions', 'IN OUT Analysis', 'Advanced Sets'] },
  { id: 'maps', title: 'Maps', topics: ['Geographic Roles', 'Symbol Maps', 'Filled Maps', 'Density Maps', 'Dual Axis Maps', 'Custom Geographies', 'Spatial Data', 'Spatial Joins', 'Advanced Mapping'] },
  { id: 'dashboards', title: 'Dashboards', topics: ['Dashboard Basics', 'Dashboard Layout', 'Containers', 'Tiled vs Floating', 'Device Layouts', 'Dashboard Filters', 'Dashboard Actions', 'Navigation', 'Dashboard Optimization', 'Executive Dashboards'] },
  { id: 'interactivity', title: 'Interactivity', topics: ['Filter Actions', 'Highlight Actions', 'URL Actions', 'Set Actions', 'Parameter Actions', 'Navigation Actions', 'Viz in Tooltip', 'Drill Down', 'Interactive Workflows'] },
  { id: 'tooltips', title: 'Tooltips', topics: ['Tooltip Basics', 'Tooltip Formatting', 'Dynamic Tooltips', 'Viz in Tooltip', 'Tooltip Calculations', 'Tooltip Best Practices'] },
  { id: 'storytelling', title: 'Storytelling', topics: ['Data Storytelling', 'Story Structure', 'Story Points', 'Story Narrative', 'Business Context', 'Finding Insights', 'Recommendations', 'Executive Storytelling'] },
  { id: 'dashboard-design', title: 'Dashboard Design', topics: ['Design Principles', 'Visual Hierarchy', 'Layout', 'Spacing', 'Typography', 'Color', 'Accessibility', 'KPI Cards', 'Executive Dashboard', 'Operational Dashboard', 'Analytical Dashboard', 'Dashboard UX'] },
  { id: 'kpi-analytics', title: 'KPI Analytics', topics: ['KPI Concepts', 'Revenue KPIs', 'Sales KPIs', 'Marketing KPIs', 'Customer KPIs', 'Product KPIs', 'Financial KPIs', 'Operations KPIs', 'HR KPIs', 'KPI Dashboards'] },
  { id: 'business-analytics', title: 'Business Analytics', topics: ['Sales Analytics', 'Marketing Analytics', 'Customer Analytics', 'Product Analytics', 'Financial Analytics', 'HR Analytics', 'Operations Analytics', 'Supply Chain Analytics', 'Cohort Analysis', 'Funnel Analysis', 'Retention Analysis', 'Segmentation'] },
  { id: 'statistical-analysis', title: 'Statistical Analysis', topics: ['Descriptive Statistics', 'Distribution Analysis', 'Correlation', 'Trend Analysis', 'Regression', 'Statistical Significance', 'Hypothesis Testing', 'Statistical Functions'] },
  { id: 'forecasting', title: 'Forecasting', topics: ['Forecast Basics', 'Forecast Models', 'Time Series', 'Trend', 'Seasonality', 'Forecast Parameters', 'Forecast Accuracy', 'Business Forecasting'] },
  { id: 'advanced-tableau', title: 'Advanced Tableau', topics: ['Advanced Calculations', 'Advanced LOD', 'Advanced Table Calculations', 'Nested Calculations', 'Dynamic Parameters', 'Dynamic Sets', 'Advanced Actions', 'Advanced Dashboards', 'Custom SQL', 'Advanced Analytics'] },
  { id: 'performance-optimization', title: 'Performance Optimization', topics: ['Performance Basics', 'Extract Optimization', 'Data Source Optimization', 'Query Optimization', 'Workbook Optimization', 'Calculation Optimization', 'Dashboard Optimization', 'Performance Recording', 'Performance Best Practices'] },
  { id: 'tableau-server', title: 'Tableau Server', topics: ['Server Basics', 'Projects', 'Workbooks', 'Data Sources', 'Users', 'Groups', 'Permissions', 'Publishing', 'Refreshes', 'Schedules', 'Subscriptions', 'Server Administration'] },
  { id: 'tableau-cloud', title: 'Tableau Cloud', topics: ['Cloud Basics', 'Publishing', 'Data Sources', 'Refreshes', 'Permissions', 'Projects', 'User Management', 'Subscriptions', 'Governance'] },
  { id: 'security-governance', title: 'Security & Governance', topics: ['User Authentication', 'Permissions', 'Row Level Security', 'Data Security', 'Workbook Security', 'Data Source Security', 'Governance', 'Data Access', 'Security Best Practices'] },
  { id: 'analytics-extensions', title: 'Analytics Extensions', topics: ['Python Integration', 'R Integration', 'TabPy', 'External Services', 'Advanced Predictive Analytics', 'Machine Learning Integration'] },
  { id: 'sql-tableau', title: 'SQL with Tableau', topics: ['SQL Connections', 'Custom SQL', 'SQL Calculations', 'Database Queries', 'Query Optimization', 'SQL to Tableau Workflow'] },
  { id: 'projects', title: 'Projects', topics: ['Sales Dashboard', 'Superstore Analysis', 'Regional Sales Analysis', 'E-Commerce Dashboard', 'Marketing Dashboard', 'Customer Analytics', 'Financial Dashboard', 'Customer Churn', 'Cohort Retention', 'Sales Forecasting', 'Product Analytics', 'Marketing Analytics', 'Executive BI Dashboard', 'Enterprise Analytics', 'End to End Analytics', 'Real-Time Dashboard', 'Advanced Interactive Dashboard'] },
  { id: 'practice', title: 'Practice', topics: ['Calculated Field Problems', 'LOD Problems', 'Table Calculation Problems', 'Dashboard Challenges', 'Data Modeling Challenges', 'Visualization Challenges', 'Business Case Studies', 'Real World Challenges'] },
  { id: 'portfolio', title: 'Portfolio', topics: ['Dashboard Projects', 'Business Case Studies', 'Interactive Visualizations', 'Tableau Public Profile', 'Project Documentation', 'Project Presentations'] },
  { id: 'interview', title: 'Interview Practice', topics: ['Tableau Basics', 'Calculated Fields', 'LOD Expressions', 'Table Calculations', 'Filters', 'Parameters', 'Sets', 'Data Modeling', 'Dashboard Design', 'Performance', 'Tableau Server', 'Scenario Based', 'Business Case Studies', 'Mock Interviews'] },
  { id: 'cheatsheets', title: 'Cheat Sheets', topics: ['Tableau Shortcuts', 'Calculated Fields', 'Table Calculations', 'LOD Expressions', 'Date Functions', 'String Functions', 'Logical Functions', 'Filters', 'Parameters', 'Sets', 'Dashboard Actions', 'Interview Questions'] },
];
