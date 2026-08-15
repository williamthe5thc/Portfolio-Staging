// src/components/features/portfolio/CaseStudy.tsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  MonitorPlay,
  Presentation,
  Quote,
  Video
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import type {
  ProcessStep,
  ProjectArtifact,
  ProjectMetric,
  Testimonial
} from '@/types/content';

/**
 * Presentational building blocks for a project case study.
 *
 * Every section renders nothing when its data is absent, so a project can
 * adopt the case-study fields one at a time without leaving empty headings
 * behind. That keeps the older, sparser project files rendering cleanly
 * while newer ones fill out the full narrative.
 */

const cardClass = 'bg-white rounded-xl shadow-lg overflow-hidden';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/** A titled block of the case study. Uses <section> + <h2> for landmark nav. */
export const CaseStudySection: React.FC<SectionProps> = ({
  title,
  children,
  className = ''
}) => (
  <motion.section variants={fadeInUp} className={`${cardClass} p-6 ${className}`}>
    <h2 className="text-2xl font-bold text-text-primary mb-4">{title}</h2>
    {children}
  </motion.section>
);

// ---------------------------------------------------------------------------
// Context bar
// ---------------------------------------------------------------------------

export interface ProjectFactsProps {
  role?: string;
  client?: string;
  audience?: string;
  duration?: string;
  team?: string;
  date?: string;
}

/**
 * Role, client, audience, timeline, team.
 *
 * Work shown without this context is the most commonly cited portfolio red
 * flag — a reviewer cannot judge a solution without knowing the constraints
 * it was built under, or which parts of it were actually yours.
 */
export const ProjectFacts: React.FC<ProjectFactsProps> = ({
  role,
  client,
  audience,
  duration,
  team,
  date
}) => {
  const facts = [
    { label: 'My role', value: role },
    { label: 'Client', value: client },
    { label: 'Audience', value: audience },
    { label: 'Timeline', value: duration ?? date },
    { label: 'Team', value: team }
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));

  if (facts.length === 0) return null;

  return (
    <motion.section
      variants={fadeInUp}
      aria-label="Project context"
      className={`${cardClass} p-6`}
    >
      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        {facts.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-xs font-semibold uppercase tracking-wide text-text-light">
              {label}
            </dt>
            <dd className="mt-1 text-text-primary">{value}</dd>
          </div>
        ))}
      </dl>
    </motion.section>
  );
};

// ---------------------------------------------------------------------------
// Metrics
// ---------------------------------------------------------------------------

export interface MetricGridProps {
  metrics?: ProjectMetric[];
}

/**
 * Quantified outcomes, shown as tiles.
 *
 * Placed high on the page on purpose: reviewers skim, and a concrete number
 * is the fastest way to communicate that the work moved something.
 */
export const MetricGrid: React.FC<MetricGridProps> = ({ metrics }) => {
  if (!metrics?.length) return null;

  return (
    <motion.section
      variants={fadeInUp}
      aria-label="Results at a glance"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {metrics.map(metric => (
        <div
          key={metric.label}
          className={`${cardClass} p-6 border-l-4 border-primary-600`}
        >
          <p className="text-3xl font-bold text-primary-700">{metric.value}</p>
          <p className="mt-1 font-medium text-text-primary">{metric.label}</p>
          {metric.detail && (
            <p className="mt-2 text-sm text-text-secondary">{metric.detail}</p>
          )}
        </div>
      ))}
    </motion.section>
  );
};

// ---------------------------------------------------------------------------
// Process
// ---------------------------------------------------------------------------

export interface ProcessTimelineProps {
  steps?: ProcessStep[];
}

/**
 * The ordered walkthrough of how the problem became the solution.
 *
 * Rendered as <ol> because the order carries meaning. This is the section
 * that shows design judgement rather than just the finished artifact.
 */
export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  if (!steps?.length) return null;

  return (
    <CaseStudySection title="My Process">
      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li key={step.phase} className="flex gap-4">
            <span
              aria-hidden="true"
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-600 text-white text-sm font-semibold"
            >
              {index + 1}
            </span>
            <div className="flex-1">
              <h3 className="font-semibold text-text-primary">{step.phase}</h3>
              <p className="mt-1 text-text-secondary">{step.description}</p>
              {step.deliverables?.length ? (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {step.deliverables.map(deliverable => (
                    <li
                      key={deliverable}
                      className="px-2 py-1 bg-primary-50 text-primary-700 rounded text-sm"
                    >
                      {deliverable}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </CaseStudySection>
  );
};

// ---------------------------------------------------------------------------
// Artifacts
// ---------------------------------------------------------------------------

const artifactIcons: Record<ProjectArtifact['type'], LucideIcon> = {
  document: FileText,
  video: Video,
  demo: MonitorPlay,
  image: ImageIcon,
  deck: Presentation,
  code: Code2
};

export interface ArtifactListProps {
  artifacts?: ProjectArtifact[];
}

/**
 * Openable evidence — the storyboard, design doc, or demo itself.
 *
 * Reviewers want to look at real work products, not read a description of
 * them. External links carry a visible "opens in a new tab" cue.
 */
export const ArtifactList: React.FC<ArtifactListProps> = ({ artifacts }) => {
  if (!artifacts?.length) return null;

  return (
    <CaseStudySection title="Project Artifacts">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {artifacts.map(artifact => {
          const Icon = artifactIcons[artifact.type] ?? FileText;
          const isExternal = /^https?:\/\//.test(artifact.href);

          return (
            <li key={artifact.href}>
              <a
                href={artifact.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:border-primary-400 hover:bg-primary-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              >
                <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-600" aria-hidden="true" />
                <span className="flex-1">
                  <span className="font-medium text-text-primary flex items-center gap-1">
                    {artifact.label}
                    {isExternal && (
                      <>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </>
                    )}
                  </span>
                  {artifact.description && (
                    <span className="block mt-1 text-sm text-text-secondary">
                      {artifact.description}
                    </span>
                  )}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </CaseStudySection>
  );
};

// ---------------------------------------------------------------------------
// Testimonial
// ---------------------------------------------------------------------------

export interface TestimonialBlockProps {
  testimonial?: Testimonial;
}

/** Attributed third-party endorsement. Social proof beats self-description. */
export const TestimonialBlock: React.FC<TestimonialBlockProps> = ({ testimonial }) => {
  if (!testimonial) return null;

  return (
    <motion.figure
      variants={fadeInUp}
      className={`${cardClass} p-6 border-l-4 border-primary-600`}
    >
      <Quote className="w-8 h-8 text-primary-200 mb-2" aria-hidden="true" />
      <blockquote className="text-lg text-text-primary italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm text-text-secondary">
        <span className="font-semibold text-text-primary">{testimonial.author}</span>
        {testimonial.title && <span> &middot; {testimonial.title}</span>}
      </figcaption>
    </motion.figure>
  );
};

// ---------------------------------------------------------------------------
// Generic bulleted section
// ---------------------------------------------------------------------------

export interface BulletSectionProps {
  title: string;
  items?: string[];
}

/** Renders one of the simple string-list fields, or nothing when empty. */
export const BulletSection: React.FC<BulletSectionProps> = ({ title, items }) => {
  if (!items?.length) return null;

  return (
    <CaseStudySection title={title}>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item} className="flex gap-3 text-text-secondary">
            <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-600 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </CaseStudySection>
  );
};
