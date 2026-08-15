// src/content/projects/_TEMPLATE.ts
//
// Copy this file to `<project-slug>.ts` and fill it in. Files prefixed with an
// underscore are excluded from the auto-import glob, so this template never
// appears on the site.
//
// Only `id`, `title`, `description`, `image`, `category`, `tags`, `status` and
// `date` are required. Everything else is optional and its section disappears
// when omitted — so it is fine to start with a short entry and deepen it later.
//
// Guidance in the comments below reflects what portfolio reviewers in this
// field consistently ask for; see docs/PORTFOLIO-RESEARCH.md for sources.

import { ProjectBase } from '@/types/content';

const templateProject: ProjectBase = {
  // --- Identity -----------------------------------------------------------

  /** URL slug. Lowercase, hyphenated, stable — it becomes /portfolio/<id>. */
  id: 'project-slug',

  /**
   * Lead with the outcome where you can. "Onboarding Redesign That Cut
   * Time-to-Productivity by 40%" works harder than "Onboarding Redesign".
   */
  title: 'Project Title',

  /** One or two sentences shown on the card and in search results. */
  description: 'What this project was and what it achieved, in one sentence.',

  // --- Curation -----------------------------------------------------------

  /** Surfaces on the home page and sorts first. Aim for 3-5 featured total. */
  featured: false,
  /** Sort weight within the grid. Lower comes first. */
  order: 99,
  /** Set true to give this project its own /portfolio/<id> case study page. */
  detailPage: true,

  // --- Media --------------------------------------------------------------

  image: './images/thumbnails/coming_soon.png',
  /** Describe the image for screen readers and image search. */
  imageAlt: 'Screenshot of ...',

  /** External link, if the work is viewable somewhere. Optional. */
  // projectUrl: 'https://example.com',

  // --- Classification -----------------------------------------------------

  category: 'elearning', // elearning | photoshop | premier | id | development | research
  status: 'completed', // completed | in-progress | planned

  /** When the work happened. */
  date: '2026',

  /**
   * Skills and focus areas, not a tool dump — tools have their own field.
   * Four to six is plenty.
   */
  tags: ['Skill One', 'Skill Two', 'Skill Three'],

  // --- Context ------------------------------------------------------------
  // Reviewers cannot judge the work without knowing what was yours and what
  // constrained it. Missing context is the most-cited portfolio red flag.

  /** Be specific about your contribution, especially on team projects. */
  role: 'Lead Instructional Designer',
  /** Use "Confidential — <sector>" if you cannot name the client. */
  client: 'Client or organization',
  /** Who the learners were, plus anything that shaped the design. */
  audience: 'e.g. ~400 field technicians across 12 sites, mixed tech literacy',
  duration: 'e.g. 6 weeks',
  /** "Solo" is a perfectly good answer. */
  team: 'e.g. Solo, with two SMEs for content review',

  // --- The narrative ------------------------------------------------------

  /**
   * The business or performance problem — not the task you were handed.
   * "Support tickets from new hires spiked 60% after a product launch" is a
   * problem. "Build a course on the new product" is an assignment.
   */
  problem: `What was going wrong, for whom, and why it mattered to the
  organization. Include the evidence that told you this was the real problem.`,

  /** How the finished solution works, and the design decisions behind it. */
  longDescription: `What you built, and the reasoning behind the key choices.
  Name the design decisions a reviewer would want to interrogate.`,

  /**
   * How you got from the problem to the solution. This is where design
   * judgement shows — name the model and say what you actually decided.
   */
  process: [
    {
      phase: 'Analysis',
      description:
        'What you investigated, who you talked to, and what you learned that changed the design.',
      deliverables: ['Needs assessment', 'Learner personas']
    },
    {
      phase: 'Design',
      description:
        'The instructional strategy you chose and, importantly, why you chose it over the alternatives.',
      deliverables: ['Design document', 'Storyboard']
    },
    {
      phase: 'Development',
      description: 'How you built it and what you had to solve along the way.',
      deliverables: ['Prototype', 'Final build']
    },
    {
      phase: 'Evaluation',
      description: 'How you measured whether it worked, and what you changed as a result.',
      deliverables: ['Assessment data', 'Revision log']
    }
  ],

  /** The instructional design model or framework used. */
  methodology: 'e.g. SAM (iterative), backward design for assessments',

  /** Software and platforms. Keep this separate from `tags`. */
  tools: ['Articulate Storyline', 'Figma', 'Camtasia'],

  learningObjectives: [
    'By the end, learners can ... (use observable verbs)',
    'By the end, learners can ...'
  ],

  // --- Outcomes -----------------------------------------------------------

  /**
   * Quantified results. These render as tiles near the top of the page and
   * are the single highest-value thing you can add to a case study.
   * If you have no hard number, a concrete qualitative outcome still beats
   * a vague one — but look hard for the number first.
   */
  metrics: [
    {
      label: 'Assessment pass rate',
      value: '+30%',
      detail: 'Pre/post comparison across 142 learners, 90 days after launch'
    },
    {
      label: 'Time to competency',
      value: '-2 weeks',
      detail: 'Manager-reported, cohort of 40'
    }
  ],

  challenges: ['A real constraint you hit', 'Another one'],
  solutions: ['What you did about it', 'What you did about the other one'],
  results: ['An outcome that resists a single number', 'Another outcome'],

  // --- Evidence -----------------------------------------------------------

  /**
   * Things a reviewer can actually open. Files go in `public/`; anything
   * starting with http opens in a new tab automatically.
   */
  artifacts: [
    {
      label: 'Design document (PDF)',
      href: '/documents/project-design-doc.pdf',
      type: 'document',
      description: 'Needs analysis, objectives, and assessment plan'
    },
    {
      label: 'Interactive demo',
      href: 'https://example.com/demo',
      type: 'demo',
      description: 'Two-minute walkthrough of the finished module'
    }
  ],

  /** An attributed quote carries far more weight than an anonymous one. */
  testimonial: {
    quote: 'What the client or stakeholder actually said about the work.',
    author: 'Name',
    title: 'Role, Organization'
  }
};

export default templateProject;
