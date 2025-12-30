import { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectsList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project: Project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className="group flex flex-col gap-4 overflow-hidden"
        >
          <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-muted">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-wider text-primary">
              {project.category}
            </p>
            <h3 className="text-xl font-semibold leading-none group-hover:underline">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsList;
