// Content collections for StagePath.
//
// Content lives in /content at the repo root (not src/content) — this
// mirrors the PRD's architecture (section 32), which treats the content
// repository as a distinct layer from the Astro application. Skills,
// resources, projects, and assessments are their own reusable collections
// referenced by id so the same skill (or resource, or project) can be
// pulled into multiple career roadmaps without duplication (PRD section 10,
// section 33).
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const difficulty = z.enum(['beginner', 'intermediate', 'advanced']);

const resources = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './content/resources' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['video', 'article', 'interactive', 'course', 'book', 'documentation']),
    url: z.string().url(),
    provider: z.string(),
    duration_minutes: z.number().int().positive(),
    difficulty,
    free: z.boolean(),
    language: z.string().default('en'),
    last_verified: z.coerce.date(),
    quality_score: z.number().min(0).max(5).optional(),
    recommended: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './content/projects' }),
  schema: z.object({
    title: z.string(),
    level: z.enum(['mini', 'portfolio', 'capstone']),
    duration: z.string(),
    description: z.string(),
    problem_statement: z.string().optional(),
    scenario: z.string().optional(),
    skills: z.array(z.string()).default([]),
    datasets: z.array(z.string()).default([]),
    dataset: z.object({
      name: z.string(),
      description: z.string(),
      source_url: z.string().optional(),
      format: z.string(),
      size: z.string().optional(),
      files: z.array(z.string()).default([]),
    }).optional(),
    tasks: z.array(z.string()).default([]),
    milestones: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    requirements: z.array(z.string()).default([]),
    artifacts: z.array(z.string()).default([]),
    rubric: z.array(z.object({ criterion: z.string(), definition: z.string() })).default([]),
  }),
});

const assessments = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './content/assessments' }),
  schema: z.object({
    title: z.string(),
    skills: z.array(z.string()).default([]),
    type: z.enum(['self-check', 'checkpoint']).default('self-check'),
    checklist: z.array(z.string()),
    pass_criteria: z.string(),
  }),
});

// A Chapter groups related Topics (skill ids) within a broader subject —
// e.g. "SQL / Joins & Combining Data" or "Spreadsheets / Fundamentals".
// It is a first-class, globally reusable entity: one chapter can be referenced by any roadmap stage's
// `groups` list (see below) instead of every roadmap re-declaring its own
// copy of the same grouping and topic list.
const chapters = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './content/chapters' }),
  schema: z.object({
    title: z.string(),
    skills: z.array(z.string()),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './content/skills' }),
  schema: z.object({
    title: z.string(),
    what_is_it: z.string(),
    why_it_matters: z.string(),
    note: z.string().optional(),
    prerequisites: z.array(z.string()).default([]),
    objectives: z.array(z.string()).default([]),
    category: z.string().default('General'),
    subtopics: z.array(z.object({
      title: z.string(),
      description: z.string(),
      outcomes: z.array(z.string()).default([]),
    })).default([]),
    estimated_minutes: z.number().int().positive().optional(),
    resources: z.array(z.string()).default([]),
    practice: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
          description: z.string(),
        }),
      )
      .default([]),
    project: z.string().optional(),
    verify: z.array(z.string()).default([]),
    assessment: z.string().optional(),
  }),
});

const roadmaps = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './content/roadmaps' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('Data'),
    audience: z.string().optional(),
    difficulty,
    estimated_hours: z.number().int().positive(),
    stages: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string().optional(),
        skills: z.array(z.string()),
        // References into the global `chapters` collection (chapter ids) —
        // not inline copies. When present, the roadmap page shows one tile
        // per chapter instead of one tile per individual skill (see
        // src/pages/roadmaps/[id].astro). Multiple roadmaps/stages may
        // reference the same chapter id; its title and topic list live only
        // in content/chapters/<id>.yaml.
        groups: z.array(z.string()).optional(),
        checkpoint: z
          .object({
            id: z.string(),
            title: z.string(),
            requires: z.array(z.string()),
            unlock_message: z.string(),
          })
          .optional(),
      }),
    ),
  }),
});

export const collections = { roadmaps, chapters, skills, resources, projects, assessments };
