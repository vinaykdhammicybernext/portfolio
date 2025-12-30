import { projects } from "@/lib/projects";
import type { Project } from "@/lib/projects";

export function getProjects(): Project[] {
  return projects;
}

export function getOtherProjects(slug: string): Project[] {
  return projects.filter((project) => project.slug !== slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
