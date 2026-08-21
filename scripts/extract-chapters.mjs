// One-time migration that extracts the inline
// `groups: [{id, title, skills}]` currently embedded in each roadmap stage
// into standalone files under content/chapters/, then rewrites the
// roadmap's `groups` field down to a plain array of chapter ids. Zero
// content changes — every title/skills list is moved verbatim, not
// rewritten, so existing notes and topic lists are fully preserved.
import fs from 'node:fs';
import path from 'node:path';
import * as yaml from 'js-yaml';

const ROOT = path.resolve(import.meta.dirname, '..');
const ROADMAPS_DIR = path.join(ROOT, 'content', 'roadmaps');
const CHAPTERS_DIR = path.join(ROOT, 'content', 'chapters');
fs.mkdirSync(CHAPTERS_DIR, { recursive: true });

let chapterFilesWritten = 0;
let roadmapsRewired = 0;

for (const file of fs.readdirSync(ROADMAPS_DIR)) {
  if (!file.endsWith('.yaml')) continue;
  const filePath = path.join(ROADMAPS_DIR, file);
  const roadmap = yaml.load(fs.readFileSync(filePath, 'utf8'));
  let changed = false;

  for (const stage of roadmap.stages) {
    if (!Array.isArray(stage.groups) || stage.groups.length === 0) continue;
    if (typeof stage.groups[0] === 'string') continue; // already migrated

    const chapterIds = [];
    for (const group of stage.groups) {
      const chapterPath = path.join(CHAPTERS_DIR, `${group.id}.yaml`);
      if (fs.existsSync(chapterPath)) {
        const existing = yaml.load(fs.readFileSync(chapterPath, 'utf8'));
        const sameSkills = JSON.stringify(existing.skills) === JSON.stringify(group.skills);
        if (existing.title !== group.title || !sameSkills) {
          throw new Error(`Chapter id "${group.id}" collision: existing chapter content differs from ${file}'s "${stage.id}" stage group.`);
        }
      } else {
        fs.writeFileSync(
          chapterPath,
          yaml.dump({ title: group.title, skills: group.skills }, { lineWidth: -1, noRefs: true, sortKeys: false }),
          'utf8',
        );
        chapterFilesWritten++;
      }
      chapterIds.push(group.id);
    }
    stage.groups = chapterIds;
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, yaml.dump(roadmap, { lineWidth: -1, noRefs: true, sortKeys: false }), 'utf8');
    roadmapsRewired++;
  }
}

console.log(`Wrote ${chapterFilesWritten} chapter files. Rewired ${roadmapsRewired} roadmap file(s).`);
