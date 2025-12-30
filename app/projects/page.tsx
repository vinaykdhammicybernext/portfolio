import ProjectsList from "@/components/projects/ProjectsList";
import { getProjects } from "@/services/projects";

const Projects = () => {
  const allProjects = getProjects();
  return (
    <section className="flex flex-col items-center">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:py-16 py-4 pt-16">
        <ProjectsList projects={allProjects} />
      </div>
    </section>
  );
};

export default Projects;
