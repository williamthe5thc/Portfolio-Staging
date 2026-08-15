// src/pages/ProjectDetailPage.tsx
import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import {
  ArtifactList,
  BulletSection,
  CaseStudySection,
  MetricGrid,
  ProcessTimeline,
  ProjectFacts,
  TestimonialBlock
} from '@/components/features/portfolio/CaseStudy';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { projects } from '@/content';
import BasePage from './BasePage';

/**
 * A single project rendered as a case study.
 *
 * The section order follows how reviewers actually read: context first, then
 * the headline outcome, then the problem and the reasoning that connects the
 * two. Detail — objectives, challenges, tooling — sits below that for anyone
 * who keeps scrolling. Every section is self-hiding, so projects that have
 * not been written up yet degrade to the short description rather than
 * showing a page of empty headings.
 */
const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === projectId);

  // Unknown id: send the visitor back to the grid rather than a blank page.
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <BasePage
      seo={{
        title: project.title,
        description: project.description,
        image: project.image,
        article: true,
        keywords: project.tags
      }}
      title={project.title}
      subtitle={project.description}
      breadcrumbs={[
        { label: 'Portfolio', href: '/portfolio' },
        { label: project.title, href: `/portfolio/${project.id}` }
      ]}
    >
      <motion.div
        className="py-12 space-y-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <button
          type="button"
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center gap-2 px-3 py-2 -ml-3 rounded-md text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to Portfolio
        </button>

        {project.image && (
          <motion.img
            variants={fadeInUp}
            src={project.image}
            alt={project.imageAlt ?? project.title}
            loading="lazy"
            className="w-full max-h-[28rem] object-cover rounded-xl shadow-lg"
          />
        )}

        <ProjectFacts
          role={project.role}
          client={project.client}
          audience={project.audience}
          duration={project.duration}
          team={project.team}
          date={project.date}
        />

        <MetricGrid metrics={project.metrics} />

        {project.problem && (
          <CaseStudySection title="The Problem">
            <p className="text-text-secondary whitespace-pre-line">{project.problem}</p>
          </CaseStudySection>
        )}

        {project.longDescription && (
          <CaseStudySection title="The Solution">
            <p className="text-text-secondary whitespace-pre-line">
              {project.longDescription}
            </p>
          </CaseStudySection>
        )}

        <ProcessTimeline steps={project.process} />

        <TestimonialBlock testimonial={project.testimonial} />

        <ArtifactList artifacts={project.artifacts} />

        <BulletSection title="Learning Objectives" items={project.learningObjectives} />
        <BulletSection title="Challenges" items={project.challenges} />
        <BulletSection title="How I Solved Them" items={project.solutions} />
        <BulletSection title="Results" items={project.results} />

        <motion.section
          variants={fadeInUp}
          aria-label="Project details"
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-text-primary mb-4">Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-text-light mb-2">
                Skills &amp; Focus
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <li
                    key={tag}
                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {project.tools?.length ? (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-text-light mb-2">
                  Tools
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <li
                      key={tool}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.methodology && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-text-light mb-2">
                  Methodology
                </h3>
                <p className="text-text-primary">{project.methodology}</p>
              </div>
            )}

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-text-light mb-2">
                Date
              </h3>
              <p className="text-text-primary">{project.date}</p>
            </div>
          </div>

          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            >
              View Live Project
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </motion.section>
      </motion.div>
    </BasePage>
  );
};

export default ProjectDetailPage;
