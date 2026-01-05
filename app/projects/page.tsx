import ProjectsList from "@/components/projects/ProjectsList";
import { getProjects } from "@/services/projects";

const Projects = () => {
  const allProjects = getProjects();
  return (
    <section className="flex-column">
      <div className="container py-16 2xl:px-32 px-8">
        <ProjectsList projects={allProjects} />
      </div>
    </section>
  );
};

export default Projects;
