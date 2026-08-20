import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const ROADMAPS_DIR = path.join(ROOT, 'content', 'roadmaps');

function write(dir, id, data) {
  fs.writeFileSync(path.join(dir, `${id}.yaml`), yaml.dump(data, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');
}

write(SKILLS_DIR, 'types-of-data-analytics', {
  title: 'Types of Data Analytics', category: 'Foundations',
  what_is_it: 'The four categories of analytics — descriptive, diagnostic, predictive, and prescriptive — and what kind of question each one answers.',
  why_it_matters: 'Knowing which type of analytics a question actually calls for keeps you from over- or under-engineering an answer. Not every question needs a predictive model, and not every question is answered by a summary chart.',
  prerequisites: [],
  objectives: ['Distinguish descriptive from diagnostic analytics', 'Explain what predictive analytics adds beyond description', 'Explain what prescriptive analytics adds beyond prediction', 'Match a business question to the right type of analytics'],
  subtopics: [
    { title: 'Descriptive Analytics', description: 'Summarizing what already happened — totals, trends, and historical reporting.', outcomes: ['Identify a question that only needs descriptive analytics'] },
    { title: 'Diagnostic Analytics', description: 'Investigating why something happened by drilling into drivers and segments.', outcomes: ['Diagnose a metric change by segmenting the data'] },
    { title: 'Predictive Analytics', description: 'Using historical data to estimate what is likely to happen next.', outcomes: ['Explain what predictive analytics requires that descriptive analytics doesn\'t'] },
    { title: 'Prescriptive Analytics', description: 'Recommending a specific action based on a prediction, not just forecasting it.', outcomes: ['Explain the difference between predicting an outcome and prescribing an action'] },
  ],
  estimated_minutes: 120,
  resources: ['r-grow-google-data-analytics'],
  practice: [{ id: 'ex-types-of-analytics-1', title: 'Classify a set of questions', description: 'Given five business questions, label each one as descriptive, diagnostic, predictive, or prescriptive, and explain why.' }],
  verify: ['Each question is classified as the correct type', 'Can explain what makes a question predictive rather than diagnostic', 'Can name what evidence would be needed to answer a prescriptive question'],
});

const roadmapFile = path.join(ROADMAPS_DIR, 'data-analyst.yaml');
const roadmap = yaml.load(fs.readFileSync(roadmapFile, 'utf8'));
const foundations = roadmap.stages.find((s) => s.id === 'foundations');
foundations.skills = ['types-of-data-analytics', ...foundations.skills];
fs.writeFileSync(roadmapFile, yaml.dump(roadmap, { lineWidth: 100, noRefs: true, sortKeys: false }), 'utf8');

console.log('Added types-of-data-analytics as the first Foundations skill.');
