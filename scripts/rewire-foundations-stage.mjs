// data_analyst_roadmap_curriculum.md — Section 01 "Data Analytics
// Foundations". Adds 4 new chapters (matching the doc's 1.1-1.4 exactly)
// on top of the existing Foundations stage, and keeps the pre-existing
// "business-thinking" chapter (business-understanding, kpis-metrics,
// data-thinking) appended at the end — that content isn't in the doc, but
// it's valuable, shared with other roadmaps, and nothing says to remove it.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ROADMAP_FILE = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const CHAPTERS_DIR = path.join(ROOT, 'content', 'chapters');

const NEW_CHAPTERS = [
  {
    id: 'intro-to-data-analytics',
    title: 'Introduction to Data Analytics',
    skills: [
      'what-is-data', 'what-is-data-analytics', 'data-analyst-vs-business-analyst',
      'types-of-data-analytics', 'descriptive-analytics', 'diagnostic-analytics',
      'predictive-analytics', 'prescriptive-analytics', 'data-analytics-lifecycle',
      'typical-analyst-workflow', 'tools-used-by-data-analysts',
    ],
  },
  {
    id: 'data-fundamentals',
    title: 'Data Fundamentals',
    skills: [
      'structured-data', 'semi-structured-data', 'unstructured-data',
      'qualitative-data', 'quantitative-data', 'categorical-data', 'numerical-data',
      'discrete-data', 'continuous-data', 'nominal-data', 'ordinal-data',
      'interval-data', 'ratio-data', 'primary-data', 'secondary-data',
    ],
  },
  {
    id: 'data-analysis-process',
    title: 'Data Analysis Process',
    skills: [
      'define-business-problem', 'collect-data', 'understand-data', 'data-cleaning',
      'transform-data', 'explore-data', 'analyze-data', 'visualize-data',
      'interpret-results', 'communicate-insights', 'make-recommendations',
    ],
  },
  {
    id: 'analytical-thinking',
    title: 'Analytical Thinking',
    skills: [
      'asking-analytical-questions', 'hypothesis-thinking', 'root-cause-analysis',
      'pattern-identification', 'trend-analysis', 'segmentation', 'comparison',
      'correlation-vs-causation', 'data-driven-decision-making',
      'translating-business-questions-into-data-questions',
    ],
  },
];

// Safety check: no chapter id collision, every referenced skill file exists.
for (const chapter of NEW_CHAPTERS) {
  const chapterFile = path.join(CHAPTERS_DIR, `${chapter.id}.yaml`);
  if (fs.existsSync(chapterFile)) throw new Error(`Chapter id "${chapter.id}" already exists`);
  for (const id of chapter.skills) {
    if (!fs.existsSync(path.join(SKILLS_DIR, `${id}.yaml`))) throw new Error(`Skill file missing for "${id}" (chapter "${chapter.id}")`);
  }
}

for (const chapter of NEW_CHAPTERS) {
  fs.writeFileSync(
    path.join(CHAPTERS_DIR, `${chapter.id}.yaml`),
    yaml.dump({ title: chapter.title, skills: chapter.skills }, { lineWidth: -1, noRefs: true, sortKeys: false }),
    'utf8',
  );
}

const roadmap = yaml.load(fs.readFileSync(ROADMAP_FILE, 'utf8'));
const stage = roadmap.stages.find((s) => s.id === 'foundations');
if (!stage) throw new Error('foundations stage not found');

const existingBusinessThinkingGroups = stage.groups; // ['the-analyst-role', 'business-thinking', 'process-and-quality']
if (!existingBusinessThinkingGroups.includes('business-thinking')) {
  throw new Error('Expected existing "business-thinking" chapter to still be referenced');
}

const newChapterIds = NEW_CHAPTERS.map((c) => c.id);
stage.groups = [...newChapterIds, 'business-thinking'];

const allChapterSkills = NEW_CHAPTERS.flatMap((c) => c.skills);
const businessThinkingChapter = yaml.load(fs.readFileSync(path.join(CHAPTERS_DIR, 'business-thinking.yaml'), 'utf8'));
const flatSkills = [...new Set([...allChapterSkills, ...businessThinkingChapter.skills])];
stage.skills = flatSkills;

fs.writeFileSync(ROADMAP_FILE, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');

console.log(`Wrote ${NEW_CHAPTERS.length} new chapter files.`);
console.log(`Foundations stage now has ${stage.groups.length} chapters, ${stage.skills.length} total topics.`);
