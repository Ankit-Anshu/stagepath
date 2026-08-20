// "Skill-based roadmaps" are an alternate lens on the shared skill graph:
// instead of following one career's stage sequence, each entry here pulls a
// single technology straight out of /content/skills and orders it purely by
// its own prerequisite chain — independent of which career roadmap(s) it
// happens to appear in.
import type { CollectionEntry } from 'astro:content';

export interface SkillRoadmapDef {
  id: string;
  title: string;
  description: string;
  match: (id: string) => boolean;
}

// Note: SQL, Power BI, Git & GitHub, Tableau, Python, and Statistics are
// not listed here — each has its own full curriculum tree
// (src/lib/*-curriculum.ts) rendered by its own dedicated page under
// src/pages/skill-roadmaps/ instead of being derived from the shared
// skill graph like the entries below.
export const SKILL_ROADMAPS: SkillRoadmapDef[] = [
  { id: 'power-query', title: 'Power Query', description: 'Import, clean, and transform data into a repeatable, refreshable pipeline.', match: (id) => id.startsWith('power-query-') || id === 'spreadsheets-power-query' },
  { id: 'databases', title: 'Databases', description: 'How relational databases are structured, from tables to keys and constraints.', match: (id) => id.startsWith('database-') || ['databases', 'what-is-a-database', 'what-is-dbms', 'what-is-rdbms', 'relational-database', 'primary-key', 'foreign-key'].includes(id) },
  { id: 'dashboards', title: 'Dashboards & KPIs', description: 'Plan, design, and build interactive dashboards that answer a real question.', match: (id) => id.includes('dashboard') || ['kpi-spreadsheets', 'kpi-selection', 'kpis-metrics', 'slicers', 'interactive-filters', 'drill-down'].includes(id) },
  { id: 'charts', title: 'Charts & Visualization', description: 'Choose and build the right chart for the data and the audience.', match: (id) => id.includes('chart') || ['dataviz-color-accessibility', 'dataviz-geospatial', 'visualize-data', 'choosing-the-right-chart'].includes(id) },
  { id: 'cybersecurity', title: 'Cybersecurity Foundations', description: 'Core security concepts, from networking basics to detection and response.', match: (id) => id.includes('security') || ['networking-systems', 'detection-response'].includes(id) },
  { id: 'web-development', title: 'Web Development', description: 'How the web works, from HTML/CSS foundations to frameworks and deployment.', match: (id) => ['web-foundations', 'web-protocols', 'html-accessibility', 'css-responsive', 'javascript-browser', 'frontend-frameworks', 'api-design', 'backend-testing', 'frontend-deployment', 'deployment-observability', 'git-version-control', 'programming-foundations'].includes(id) },
  { id: 'ux-design', title: 'UX & Product Design', description: 'Research, structure, prototype, and test real user experiences.', match: (id) => ['user-research', 'information-architecture', 'interaction-design', 'prototyping-testing', 'design-foundations', 'ui-design-systems', 'ux-portfolio', 'portfolio-website'].includes(id) },
];

// Orders a technology's skills by their own prerequisite chain: a skill is
// placed only after every prerequisite it has *within this same set* has
// already been placed. Prerequisites outside the set (foundations that
// belong to a different technology) are ignored here — this is one
// technology's path, not the whole graph. Declaration order (the original
// order skills come back from the collection, which mirrors their natural
// reading order) breaks ties and keeps the result stable.
export function orderByPrerequisites(items: CollectionEntry<'skills'>[]): CollectionEntry<'skills'>[] {
  const ids = new Set(items.map((item) => item.id));
  const byId = new Map(items.map((item) => [item.id, item]));
  const result: CollectionEntry<'skills'>[] = [];
  const visited = new Set<string>();
  const visiting = new Set<string>();

  function visit(item: CollectionEntry<'skills'>) {
    if (visited.has(item.id) || visiting.has(item.id)) return;
    visiting.add(item.id);
    for (const prereqId of item.data.prerequisites) {
      if (ids.has(prereqId)) {
        const prereq = byId.get(prereqId);
        if (prereq) visit(prereq);
      }
    }
    visiting.delete(item.id);
    visited.add(item.id);
    result.push(item);
  }

  for (const item of items) visit(item);
  return result;
}
