// src/types/content.ts

/**
 * A single quantified outcome, rendered as a metric tile on the case study.
 *
 * Hiring managers consistently rank measurable results above process
 * description, so prefer a number over an adjective: "+30%" beats "improved".
 * When a hard number genuinely doesn't exist, a concrete qualitative outcome
 * ("adopted by all 12 regional offices") still beats a vague one.
 */
export interface ProjectMetric {
  /** What was measured, e.g. "Assessment pass rate". */
  label: string;
  /** The headline figure, e.g. "+30%", "4.6/5", "12 offices". */
  value: string;
  /** How it was measured — sample size, instrument, timeframe. */
  detail?: string;
}

/**
 * One step of the design process, shown in order.
 *
 * This is the section that demonstrates *how you think*. Name the phase
 * against a real model (ADDIE, SAM, backward design) and say what you
 * actually did and decided in it.
 */
export interface ProcessStep {
  /** Phase name, e.g. "Analysis", "Iteration 2 — prototype". */
  phase: string;
  /** What you did, and more importantly why you chose to do it that way. */
  description: string;
  /** Concrete outputs of this phase, e.g. "Learner personas", "Storyboard". */
  deliverables?: string[];
}

/**
 * A viewable or downloadable piece of evidence — the artifact itself,
 * not a description of it. Reviewers want to open something real.
 */
export interface ProjectArtifact {
  /** Display name, e.g. "Design document (PDF)". */
  label: string;
  /** Path or URL to the artifact. */
  href: string;
  /** Drives the icon and the "opens in a new tab" affordance. */
  type: 'document' | 'video' | 'demo' | 'image' | 'deck' | 'code';
  /** One line on what the reviewer is about to look at. */
  description?: string;
}

/**
 * Third-party endorsement. Social proof outperforms self-description,
 * so an attributed quote is worth more than an unattributed one.
 */
export interface Testimonial {
  quote: string;
  author: string;
  /** Role and organization, e.g. "L&D Director, Acme Co." */
  title?: string;
}

export interface ProjectBase {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  /** Alt text for the hero image. Falls back to the title when absent. */
  imageAlt?: string;
  projectUrl?: string;
  /** When true, the card links to the in-site case study at /portfolio/:id. */
  detailPage?: boolean;
  category: ProjectCategory;
  tags: string[];
  status: ProjectStatus;
  date: string;
  tools?: string[];
  methodology?: string;
  learningObjectives?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];

  // ---------------------------------------------------------------------
  // Curation. With more projects than a reviewer will read, these control
  // what gets seen first; six to ten strong pieces is the usual advice.
  // ---------------------------------------------------------------------

  /** Surfaces the project on the home page and sorts it first in the grid. */
  featured?: boolean;
  /** Manual sort weight within a group. Lower numbers come first. */
  order?: number;

  // ---------------------------------------------------------------------
  // Case study context. Reviewers penalize work shown without it — they
  // cannot judge a solution without knowing the constraints it was built under.
  // ---------------------------------------------------------------------

  /** Your specific contribution, e.g. "Lead Instructional Designer". */
  role?: string;
  /** Client or organization. Use "Confidential — <sector>" when under NDA. */
  client?: string;
  /** Who the learners were, including anything that constrained the design. */
  audience?: string;
  /** Elapsed time, e.g. "6 weeks". */
  duration?: string;
  /** Who else was involved and what they owned. "Solo" is a fine answer. */
  team?: string;

  // ---------------------------------------------------------------------
  // The narrative: problem -> process -> outcome.
  // ---------------------------------------------------------------------

  /** The business or performance problem — not the task you were handed. */
  problem?: string;
  /** Ordered walkthrough of how you got from that problem to the solution. */
  process?: ProcessStep[];
  /** Quantified outcomes, rendered as metric tiles. */
  metrics?: ProjectMetric[];

  // ---------------------------------------------------------------------
  // Evidence.
  // ---------------------------------------------------------------------

  /** Openable proof: storyboards, design docs, demo videos, repos. */
  artifacts?: ProjectArtifact[];
  /** An attributed quote from a client, SME, or stakeholder. */
  testimonial?: Testimonial;
}

export type ProjectStatus = 'in-progress' | 'completed' | 'planned';

export type ProjectCategory = 
  | 'elearning'
  | 'photoshop'
  | 'premier'
  | 'id'
  | 'development'
  | 'research';

export interface ProjectCategoryInfo {
  id: ProjectCategory;
  label: string;
  description: string;
}

export interface SiteConfig {
  title: string;
  author: string;
  description: string;
  slogan: string;
  tagline: string;
  siteUrl: string;
  defaultImage: string;
  social: {
    linkedin: string;
    github: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    linkedin: string;
    location: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationDegree {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  relevantCourses?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialUrl?: string;
}

export interface Education {
  degrees: EducationDegree[];
  certifications: Certification[];
}

export interface Competency {
  icon: keyof typeof import('lucide-react');
  title: string;
  description: string;
  color?: string;
  skills?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}