// Full Statistics curriculum tree, transcribed from the user-supplied
// "Statistics.md" folder structure. Same treatment as the SQL, Power BI,
// Git & GitHub, Tableau, and Python curricula: a reference map only, not
// individually authored topic pages. Topic names come straight from the
// source file names with the ordering prefix stripped and remaining
// hyphens turned into spaces (aside from standard hyphenated stats terms
// like "Z-Score", "T-Test", "P-Value", "Chi-Square", "One-Way", "R-Squared",
// "Mann-Whitney", "Log-Normal", and "Bias-Variance", kept as written);
// section titles are lightly cleaned up for readability but map 1:1 to the
// source's numbered folders. A few source items ("A-B-Test", "A-B-Testing")
// are rendered as "A/B" for readability, and one ambiguous mechanical split
// ("Type-I-Type-II-Errors") is written out as "Type I and Type II Errors".
// Some topics (e.g. "Descriptive Statistics", "Confidence Intervals",
// "Correlation") intentionally appear in more than one section, same as
// the source doc — each section revisits them through that section's lens.
export interface StatisticsSection {
  id: string;
  title: string;
  topics: string[];
}

export const STATISTICS_CURRICULUM: StatisticsSection[] = [
  { id: 'foundations', title: 'Foundations', topics: ['What is Statistics', 'Why Statistics Matters', 'Statistics in Data Analytics', 'Descriptive vs Inferential Statistics', 'Population', 'Sample', 'Parameter', 'Statistic', 'Variable', 'Observation', 'Statistical Workflow'] },
  { id: 'data-types', title: 'Data Types', topics: ['Qualitative Data', 'Quantitative Data', 'Categorical Data', 'Numerical Data', 'Discrete Data', 'Continuous Data', 'Nominal Scale', 'Ordinal Scale', 'Interval Scale', 'Ratio Scale'] },
  { id: 'data-collection', title: 'Data Collection', topics: ['Census', 'Sampling', 'Primary Data', 'Secondary Data', 'Surveys', 'Experiments', 'Observational Studies', 'Sampling Bias', 'Response Bias', 'Data Collection Best Practices'] },
  { id: 'sampling', title: 'Sampling', topics: ['Simple Random Sampling', 'Systematic Sampling', 'Stratified Sampling', 'Cluster Sampling', 'Convenience Sampling', 'Quota Sampling', 'Sampling Distribution', 'Sampling Error', 'Sample Size'] },
  { id: 'descriptive-statistics', title: 'Descriptive Statistics', topics: ['Frequency', 'Frequency Distribution', 'Relative Frequency', 'Cumulative Frequency', 'Mean', 'Weighted Mean', 'Median', 'Mode', 'Geometric Mean', 'Harmonic Mean', 'Five Number Summary'] },
  { id: 'measures-of-dispersion', title: 'Measures of Dispersion', topics: ['Range', 'Variance', 'Standard Deviation', 'Mean Absolute Deviation', 'Interquartile Range', 'Quartile Deviation', 'Coefficient of Variation', 'Interpretation of Spread'] },
  { id: 'percentiles-quartiles', title: 'Percentiles & Quartiles', topics: ['Percentiles', 'Quartiles', 'Deciles', 'Quintiles', 'IQR', 'Box Plot Statistics', 'Outlier Boundaries'] },
  { id: 'data-distributions', title: 'Data Distributions', topics: ['Distribution Basics', 'Frequency Distribution', 'Symmetric Distribution', 'Skewed Distribution', 'Right Skewed', 'Left Skewed', 'Unimodal', 'Bimodal', 'Multimodal'] },
  { id: 'data-visualization', title: 'Data Visualization', topics: ['Histograms', 'Box Plots', 'Bar Charts', 'Pie Charts', 'Frequency Polygons', 'Scatter Plots', 'Density Plots', 'ECDF', 'Statistical Visualization'] },
  { id: 'probability-foundations', title: 'Probability Foundations', topics: ['What is Probability', 'Sample Space', 'Events', 'Outcomes', 'Probability Rules', 'Complement', 'Union', 'Intersection', 'Mutually Exclusive Events', 'Independent Events', 'Probability Axioms'] },
  { id: 'conditional-probability', title: 'Conditional Probability', topics: ['Conditional Probability', 'Independent vs Dependent', 'Multiplication Rule', 'Addition Rule', 'Total Probability', 'Bayes Theorem', 'Bayesian Reasoning'] },
  { id: 'combinatorics', title: 'Combinatorics', topics: ['Counting Principles', 'Factorial', 'Permutations', 'Combinations', 'Binomial Coefficients', 'Counting Applications'] },
  { id: 'random-variables', title: 'Random Variables', topics: ['Random Variables', 'Discrete Random Variables', 'Continuous Random Variables', 'Probability Mass Function', 'Probability Density Function', 'Cumulative Distribution Function', 'Expected Value', 'Variance', 'Moments'] },
  { id: 'discrete-distributions', title: 'Discrete Distributions', topics: ['Bernoulli Distribution', 'Binomial Distribution', 'Geometric Distribution', 'Negative Binomial', 'Hypergeometric Distribution', 'Poisson Distribution', 'Discrete Distribution Applications'] },
  { id: 'continuous-distributions', title: 'Continuous Distributions', topics: ['Uniform Distribution', 'Normal Distribution', 'Standard Normal', 'Exponential Distribution', 'Gamma Distribution', 'Beta Distribution', 'Log-Normal Distribution', 'Continuous Distribution Applications'] },
  { id: 'normal-distribution', title: 'Normal Distribution', topics: ['Normal Curve', 'Mean and Standard Deviation', 'Z-Scores', 'Standardization', 'Empirical Rule', 'Probability with Z-Scores', 'Percentiles', 'Normal Approximation'] },
  { id: 'skewness-kurtosis', title: 'Skewness & Kurtosis', topics: ['Skewness', 'Positive Skew', 'Negative Skew', 'Kurtosis', 'Mesokurtic', 'Leptokurtic', 'Platykurtic', 'Distribution Shape'] },
  { id: 'central-limit-theorem', title: 'Central Limit Theorem', topics: ['Sampling Distributions', 'Central Limit Theorem', 'Standard Error', 'Sampling Mean', 'Sampling Proportion', 'Normal Approximation', 'CLT Applications'] },
  { id: 'estimation', title: 'Estimation', topics: ['Point Estimation', 'Estimators', 'Estimation Error', 'Bias', 'Consistency', 'Efficiency', 'Maximum Likelihood Estimation', 'Method of Moments'] },
  { id: 'confidence-intervals', title: 'Confidence Intervals', topics: ['Confidence Intervals', 'Confidence Level', 'Margin of Error', 'Mean Confidence Interval', 'Proportion Confidence Interval', 'Difference in Means', 'Difference in Proportions', 'T-Confidence Interval', 'Sample Size Calculation'] },
  { id: 'hypothesis-testing', title: 'Hypothesis Testing', topics: ['Hypothesis Testing Basics', 'Null Hypothesis', 'Alternative Hypothesis', 'One Tailed Test', 'Two Tailed Test', 'Test Statistic', 'Critical Value', 'Significance Level', 'P-Value', 'Statistical Decision'] },
  { id: 'statistical-errors', title: 'Statistical Errors', topics: ['Type I Error', 'Type II Error', 'False Positive', 'False Negative', 'Statistical Power', 'Effect Size', 'Power Analysis'] },
  { id: 'z-tests', title: 'Z-Tests', topics: ['One Sample Z-Test', 'Two Sample Z-Test', 'One Proportion Z-Test', 'Two Proportion Z-Test', 'Z-Test Applications'] },
  { id: 't-tests', title: 'T-Tests', topics: ['One Sample T-Test', 'Independent T-Test', 'Paired T-Test', 'T-Test Assumptions', 'Welch T-Test', 'T-Test Applications'] },
  { id: 'chi-square', title: 'Chi-Square', topics: ['Chi-Square Concept', 'Goodness of Fit', 'Test of Independence', 'Test of Homogeneity', 'Expected Frequencies', 'Chi-Square Assumptions', 'Chi-Square Applications'] },
  { id: 'anova', title: 'ANOVA', topics: ['ANOVA Basics', 'One-Way ANOVA', 'Two-Way ANOVA', 'F-Statistic', 'Between Group Variation', 'Within Group Variation', 'ANOVA Assumptions', 'Post Hoc Tests', 'Tukey Test', 'ANOVA Applications'] },
  { id: 'nonparametric-statistics', title: 'Nonparametric Statistics', topics: ['Parametric vs Nonparametric', 'Mann-Whitney U', 'Wilcoxon Signed Rank', 'Kruskal-Wallis', 'Friedman Test', 'Sign Test', 'Nonparametric Applications'] },
  { id: 'correlation', title: 'Correlation', topics: ['Correlation Concept', 'Pearson Correlation', 'Spearman Correlation', 'Kendall Correlation', 'Correlation Coefficient', 'Correlation Matrix', 'Correlation vs Causation', 'Correlation Applications'] },
  { id: 'regression-foundations', title: 'Regression Foundations', topics: ['Regression Concept', 'Simple Linear Regression', 'Independent Variable', 'Dependent Variable', 'Regression Equation', 'Slope', 'Intercept', 'Residuals', 'Least Squares', 'Regression Interpretation'] },
  { id: 'multiple-regression', title: 'Multiple Regression', topics: ['Multiple Linear Regression', 'Regression Coefficients', 'Dummy Variables', 'Interaction Terms', 'Polynomial Regression', 'Adjusted R-Squared', 'Model Selection', 'Regression Interpretation'] },
  { id: 'regression-diagnostics', title: 'Regression Diagnostics', topics: ['Regression Assumptions', 'Linearity', 'Independence', 'Homoscedasticity', 'Normality of Residuals', 'Multicollinearity', 'VIF', 'Influential Points', 'Leverage', "Cook's Distance", 'Residual Analysis'] },
  { id: 'effect-size', title: 'Effect Size', topics: ['What is Effect Size', "Cohen's d", "Hedges' g", 'Odds Ratio', 'Risk Ratio', 'Relative Risk', 'Absolute Risk', 'Practical vs Statistical Significance'] },
  { id: 'a-b-testing', title: 'A/B Testing', topics: ['Experimentation', 'Control Group', 'Treatment Group', 'Randomization', 'Experimental Design', 'Conversion Rate', 'Sample Size', 'Statistical Power', 'Significance', 'Effect Size', 'Confidence Intervals', 'Experiment Interpretation'] },
  { id: 'experimental-design', title: 'Experimental Design', topics: ['Controlled Experiments', 'Randomized Control Trials', 'Blocking', 'Factorial Design', 'Confounding', 'Control Variables', 'Experimental Bias', 'Design Best Practices'] },
  { id: 'bayesian-statistics', title: 'Bayesian Statistics', topics: ['Bayesian Concepts', 'Prior', 'Likelihood', 'Posterior', 'Bayes Theorem', 'Credible Intervals', 'Bayesian Hypothesis Testing', 'Bayesian Regression', 'Bayesian Applications'] },
  { id: 'time-series-statistics', title: 'Time Series Statistics', topics: ['Time Series Basics', 'Trend', 'Seasonality', 'Stationarity', 'Autocorrelation', 'Partial Autocorrelation', 'Moving Average', 'Exponential Smoothing', 'AR', 'MA', 'ARIMA', 'Time Series Applications'] },
  { id: 'multivariate-statistics', title: 'Multivariate Statistics', topics: ['Multivariate Data', 'Covariance', 'Covariance Matrix', 'Correlation Matrix', 'Principal Component Analysis', 'Factor Analysis', 'Multivariate Regression', 'Multivariate Applications'] },
  { id: 'causal-inference', title: 'Causal Inference', topics: ['Correlation vs Causation', 'Causal Questions', 'Confounding', 'Selection Bias', 'Randomized Experiments', 'Observational Studies', 'Counterfactuals', 'Causal Diagrams', 'Difference in Differences', 'Causal Analysis'] },
  { id: 'multiple-testing', title: 'Multiple Testing', topics: ['Multiple Comparisons', 'Familywise Error', 'False Discovery Rate', 'Bonferroni Correction', 'Holm Correction', 'Benjamini-Hochberg', 'Multiple Testing Applications'] },
  { id: 'missing-data', title: 'Missing Data', topics: ['Missing Data', 'MCAR', 'MAR', 'MNAR', 'Missingness Analysis', 'Mean Imputation', 'Median Imputation', 'Regression Imputation', 'Multiple Imputation', 'Missing Data Best Practices'] },
  { id: 'outlier-analysis', title: 'Outlier Analysis', topics: ['What is an Outlier', 'IQR Method', 'Z-Score Method', 'Modified Z-Score', 'Box Plot Method', 'Outlier Detection', 'Outlier Impact', 'Outlier Treatment'] },
  { id: 'statistics-with-excel', title: 'Statistics with Excel', topics: ['Descriptive Statistics', 'Probability', 'Distributions', 'Confidence Intervals', 'Hypothesis Testing', 'Correlation', 'Regression', 'Statistical Analysis'] },
  { id: 'statistics-with-sql', title: 'Statistics with SQL', topics: ['Aggregations', 'Distribution Analysis', 'Percentiles', 'Ranking', 'Variance', 'Standard Deviation', 'Cohort Statistics', 'Statistical SQL'] },
  { id: 'statistics-with-python', title: 'Statistics with Python', topics: ['NumPy', 'Pandas', 'SciPy', 'Statsmodels', 'Descriptive Statistics', 'Probability', 'Hypothesis Testing', 'Correlation', 'Regression', 'ANOVA', 'Statistical Visualization'] },
  { id: 'statistics-for-data-analysis', title: 'Statistics for Data Analysis', topics: ['Business Questions', 'Descriptive Analysis', 'Diagnostic Analysis', 'Statistical Testing', 'Correlation Analysis', 'Regression Analysis', 'Experimentation', 'Customer Analytics', 'Sales Analytics', 'Marketing Analytics', 'Product Analytics', 'Financial Analytics'] },
  { id: 'statistics-for-machine-learning', title: 'Statistics for Machine Learning', topics: ['Probability', 'Distributions', 'Expected Value', 'Variance', 'Covariance', 'Correlation', 'Linear Algebra Foundations', 'Regression', 'Sampling', 'Bias-Variance', 'Model Evaluation Statistics'] },
  { id: 'business-case-studies', title: 'Business Case Studies', topics: ['Sales Performance', 'Revenue Decline', 'Customer Churn', 'Marketing Campaign', 'Conversion Rate', 'Product Experiment', 'Pricing Analysis', 'Employee Performance', 'Customer Satisfaction', 'Demand Analysis'] },
  { id: 'projects', title: 'Projects', topics: ['Descriptive Statistics', 'Distribution Analysis', 'Customer Data Analysis', 'Sales Statistics', 'Customer Analysis', 'Correlation Analysis', 'Regression Analysis', 'A/B Test', 'Cohort Analysis', 'Customer Churn', 'Forecasting', 'Causal Analysis', 'Experimental Design', 'Bayesian Analysis', 'Multivariate Analysis', 'Time Series Analysis', 'End to End Statistical Study'] },
  { id: 'practice', title: 'Practice', topics: ['Descriptive Statistics', 'Probability', 'Distributions', 'Sampling', 'Confidence Intervals', 'Hypothesis Testing', 'T-Tests', 'Chi-Square', 'ANOVA', 'Correlation', 'Regression', 'A/B Testing', 'Bayesian Statistics', 'Time Series', 'Real World Scenarios'] },
  { id: 'interview', title: 'Interview Practice', topics: ['Statistics Basics', 'Probability', 'Distributions', 'Sampling', 'Central Limit Theorem', 'Confidence Intervals', 'Hypothesis Testing', 'P-Value', 'Type I and Type II Errors', 'T-Tests', 'Chi-Square', 'ANOVA', 'Correlation', 'Regression', 'A/B Testing', 'Business Statistics', 'Case Studies', 'Mock Interviews'] },
  { id: 'cheatsheets', title: 'Cheat Sheets', topics: ['Statistics Formulas', 'Probability Rules', 'Distributions', 'Descriptive Statistics', 'Sampling', 'Confidence Intervals', 'Hypothesis Testing', 'T-Tests', 'Chi-Square', 'ANOVA', 'Correlation', 'Regression', 'A/B Testing', 'Interview Questions'] },
];
