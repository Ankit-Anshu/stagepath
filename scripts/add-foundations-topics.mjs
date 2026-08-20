// Rounds out the Foundations stage with the remaining orientation topics
// every "become a data analyst" roadmap opens with: what the job actually
// is, the analytics lifecycle, business understanding, and KPIs/metrics —
// alongside the already-added Types of Data Analytics.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const ROADMAPS_DIR = path.join(ROOT, 'content', 'roadmaps');

function write(id, data) {
  fs.writeFileSync(path.join(SKILLS_DIR, `${id}.yaml`), yaml.dump(data, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}

const skills = [
  {
    id: 'what-is-data-analytics', title: 'What is Data Analytics', category: 'Foundations',
    what_is_it: 'An overview of what data analytics actually is, what a data analyst does day to day, and how the role differs from adjacent roles like data science and data engineering.',
    why_it_matters: 'Starting without a clear picture of the job itself leads to learning skills in the wrong order — or learning skills for a different role entirely, like data science, by mistake.',
    prerequisites: [],
    objectives: ['Define data analytics in plain language', 'Describe a data analyst\'s typical day-to-day work', 'Distinguish a data analyst from a data scientist and data engineer', 'Identify industries and teams that employ data analysts'],
    subtopics: [
      { title: 'What data analytics is', description: 'Turning raw data into decisions — the short definition, and why it matters to a business.', outcomes: ['Explain data analytics in one sentence to a non-technical person'] },
      { title: 'The data analyst role', description: 'What a data analyst actually does day to day: querying, cleaning, visualizing, and reporting.', outcomes: ['List the core day-to-day responsibilities of a data analyst'] },
      { title: 'Data analyst vs. data scientist vs. data engineer', description: 'How these three commonly-confused roles differ in scope and skillset.', outcomes: ['Explain the difference between these three roles to a recruiter'] },
      { title: 'Where data analysts work', description: 'The industries, team types, and company sizes that typically hire data analysts.', outcomes: ['Name three industries or team types that hire data analysts'] },
    ],
    estimated_minutes: 90,
    resources: ['r-grow-google-data-analytics'],
    practice: [{ id: 'ex-what-is-data-analytics-1', title: 'Write your own definition', description: 'Write a 3-sentence explanation of what a data analyst does that a non-technical friend or family member would understand.' }],
    verify: ['Definition is in plain language, no jargon', 'Can name at least one clear difference from a data scientist role', 'Can name where data analysts typically work'],
  },
  {
    id: 'data-analytics-lifecycle', title: 'The Data Analytics Lifecycle', category: 'Foundations',
    what_is_it: 'The repeatable sequence a real analysis follows — from defining the question through collecting, cleaning, analyzing, visualizing, and communicating results.',
    why_it_matters: 'Without a mental model of the full lifecycle, it\'s easy to jump straight to charts before the question is even clear, or skip communicating findings after doing the hard analytical work.',
    prerequisites: ['what-is-data-analytics'],
    objectives: ['Name each stage of the analytics lifecycle in order', 'Explain what happens at each stage', 'Identify which stage a stalled project is stuck in', 'Explain why skipping a stage causes problems later'],
    subtopics: [
      { title: 'Ask & plan', description: 'Defining the question and what a good answer would look like before touching any data.', outcomes: ['Write a clear question and success criteria before starting an analysis'] },
      { title: 'Collect & clean', description: 'Gathering the needed data and preparing it for analysis.', outcomes: ['List where the data for a given question would come from'] },
      { title: 'Analyze', description: 'Applying the right method — summary statistics, segmentation, or modeling — to answer the question.', outcomes: ['Match an analysis method to a stated question'] },
      { title: 'Visualize & communicate', description: 'Turning the result into something a decision-maker can understand and act on.', outcomes: ['Explain why an analysis without communication has no impact'] },
    ],
    estimated_minutes: 90,
    resources: ['r-grow-google-data-analytics'],
    practice: [{ id: 'ex-lifecycle-1', title: 'Map a real analysis to the lifecycle', description: 'Take a past project (yours or a public case study) and label which lifecycle stage each part belongs to.' }],
    verify: ['All four stages are correctly identified and ordered', 'Can explain what goes wrong when a stage is skipped', 'Can diagnose which stage a stalled real-world project is stuck in'],
  },
  {
    id: 'business-understanding', title: 'Business Understanding', category: 'Foundations',
    what_is_it: 'Understanding how a business actually operates — its functional areas, how it makes money, and what its stakeholders care about — so your analysis targets what actually matters.',
    why_it_matters: 'The best SQL query in the world is worthless if it answers a question nobody was asking. Business context is what makes an analysis relevant instead of just technically correct.',
    prerequisites: [],
    objectives: ['Identify a company\'s core business model', 'Name the typical functional areas of a business', 'Identify what a specific stakeholder likely cares about', 'Ask a clarifying question that surfaces the real ask'],
    subtopics: [
      { title: 'Business models & revenue', description: 'How a company actually makes money, and why that shapes which metrics matter.', outcomes: ['Identify how a given company generates revenue'] },
      { title: 'Functional areas', description: 'Sales, marketing, product, operations, and finance — and what each measures success by.', outcomes: ['Name what a marketing team vs. a finance team would each care about in the same dataset'] },
      { title: 'Stakeholder needs', description: 'Figuring out what the person asking for an analysis actually needs, which is often not what they literally said.', outcomes: ['Ask a clarifying question that surfaces the real business need'] },
    ],
    estimated_minutes: 120,
    resources: ['r-grow-google-data-analytics'],
    practice: [{ id: 'ex-business-understanding-1', title: 'Interview a stakeholder request', description: 'Given a vague analysis request ("can you look into why sales are down?"), write three clarifying questions you would ask before starting.' }],
    verify: ['Clarifying questions target the actual decision being made', 'Can explain how two departments would view the same number differently', 'Recognizes when a request is too vague to act on yet'],
  },
  {
    id: 'kpis-metrics', title: 'KPIs & Metrics', category: 'Foundations',
    what_is_it: 'What makes a number a good Key Performance Indicator, and how to choose, define, and avoid being misled by one.',
    why_it_matters: 'Businesses run on a small set of numbers everyone watches. Knowing how to choose and precisely define one is one of the most immediately useful skills a data analyst has.',
    prerequisites: ['business-understanding'],
    objectives: ['Explain what makes a metric a good KPI', 'Distinguish a leading from a lagging indicator', 'Write a precise metric definition', 'Identify a vanity metric'],
    subtopics: [
      { title: 'What makes a good KPI', description: 'Specific, measurable, and tied to a real business goal — not just a number that\'s easy to track.', outcomes: ['Evaluate whether a proposed KPI is actually useful'] },
      { title: 'Leading vs. lagging indicators', description: 'Metrics that predict a result versus metrics that report one after the fact.', outcomes: ['Classify a metric as leading or lagging'] },
      { title: 'Precise metric definitions', description: 'Why "active user" needs an exact definition before anyone can trust a dashboard built on it.', outcomes: ['Write an unambiguous definition for a common business metric'] },
      { title: 'Vanity metrics', description: 'Numbers that look impressive but don\'t actually inform a decision.', outcomes: ['Identify a vanity metric and explain why it\'s misleading'] },
    ],
    estimated_minutes: 120,
    resources: ['r-grow-google-data-analytics'],
    practice: [{ id: 'ex-kpis-1', title: 'Define a KPI precisely', description: 'Pick a common business metric like "active user" or "conversion rate" and write a precise, unambiguous definition for it.' }],
    verify: ['Metric definition is precise enough that two people would compute the same number', 'Can distinguish a leading indicator from a lagging one', 'Can explain why a specific metric is a vanity metric'],
  },
];

for (const s of skills) { const { id, ...rest } = s; write(id, rest); }

const roadmapFile = path.join(ROADMAPS_DIR, 'data-analyst.yaml');
const roadmap = yaml.load(fs.readFileSync(roadmapFile, 'utf8'));
const foundations = roadmap.stages.find((s) => s.id === 'foundations');
// Final order: orientation -> categories -> process -> context -> measurement -> mindset -> hands-on cleaning
foundations.skills = [
  'what-is-data-analytics',
  'types-of-data-analytics',
  'data-analytics-lifecycle',
  'business-understanding',
  'kpis-metrics',
  'data-thinking',
  'data-cleaning',
];
fs.writeFileSync(roadmapFile, yaml.dump(roadmap, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');

console.log(`Added ${skills.length} more Foundations topics; stage now has ${foundations.skills.length} topics.`);
