import { Project } from "@/lib/projects";
import ProjectListItem from "./ProjectListItem";

type Props = {
  projects: Project[];
  limit?: number;
};

const ProjectsList = ({ projects, limit }: Props) => {
  const limitedProjects = projects.slice(0, limit);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {limitedProjects.map((project: Project) => (
        <ProjectListItem key={project.slug} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
