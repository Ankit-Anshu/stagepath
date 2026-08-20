// data_analyst_roadmap_curriculum.md — Section 03.1 "Database
// Fundamentals". Adds it as the SQL stage's new first chapter, ahead of
// the existing query-fundamentals/joins-and-combining-data/advanced-
// querying/performance-and-optimization chapters (all left untouched).
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ROADMAP_FILE = path.join(ROOT, 'content', 'roadmaps', 'data-analyst.yaml');
const SKILLS_DIR = path.join(ROOT, 'content', 'skills');
const CHAPTERS_DIR = path.join(ROOT, 'content', 'chapters');

const CHAPTER = {
  id: 'database-fundamentals',
  title: 'Database Fundamentals',
  skills: [
    'what-is-a-database', 'relational-database', 'what-is-dbms', 'what-is-rdbms',
    'database-tables', 'database-rows', 'database-columns', 'primary-key',
    'foreign-key', 'database-relationships', 'database-constraints', 'sql-null',
    'database-schemas',
  ],
};

const chapterFile = path.join(CHAPTERS_DIR, `${CHAPTER.id}.yaml`);
if (fs.existsSync(chapterFile)) throw new Error(`Chapter id "${CHAPTER.id}" already exists`);
for (const id of CHAPTER.skills) {
  if (!fs.existsSync(path.join(SKILLS_DIR, `${id}.yaml`))) throw new Error(`Skill file missing for "${id}"`);
}

fs.writeFileSync(chapterFile, yaml.dump({ title: CHAPTER.title, skills: CHAPTER.skills }, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');

const roadmap = yaml.load(fs.readFileSync(ROADMAP_FILE, 'utf8'));
const stage = roadmap.stages.find((s) => s.id === 'sql');
if (!stage) throw new Error('sql stage not found');

stage.groups = [CHAPTER.id, ...stage.groups];
stage.skills = [...CHAPTER.skills, ...stage.skills];

fs.writeFileSync(ROADMAP_FILE, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
console.log(`SQL stage now has ${stage.groups.length} chapters, ${stage.skills.length} total topics.`);
