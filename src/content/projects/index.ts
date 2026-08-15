// src/content/projects/index.ts
import { ProjectBase } from '@/types/content';

/**
 * Auto-import every project file in this directory.
 *
 * Files prefixed with an underscore are excluded, which keeps `_TEMPLATE.ts`
 * next to the real project files without it showing up on the site.
 */
const projectModules = import.meta.glob<{ default: ProjectBase }>(
  ['./*.ts', '!./_*.ts'],
  { eager: true }
);

/**
 * Display order: featured projects first, then by explicit `order`, then
 * alphabetically by title so the grid is stable rather than dependent on
 * filesystem iteration order.
 *
 * Reviewers rarely get past the first few cards, so what sits at the top of
 * the grid matters more than how many cards follow it.
 */
const byDisplayOrder = (a: ProjectBase, b: ProjectBase): number => {
  if (a.featured !== b.featured) return a.featured ? -1 : 1;

  const orderA = a.order ?? Number.MAX_SAFE_INTEGER;
  const orderB = b.order ?? Number.MAX_SAFE_INTEGER;
  if (orderA !== orderB) return orderA - orderB;

  return a.title.localeCompare(b.title);
};

export const projects: ProjectBase[] = Object.values(projectModules)
  .filter(module => module.default)
  .map(module => module.default)
  .sort(byDisplayOrder);

/** The subset surfaced on the home page. */
export const featuredProjects: ProjectBase[] = projects.filter(p => p.featured);

export type ProjectId = typeof projects[number]['id'];
