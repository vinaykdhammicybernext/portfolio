import Image from "next/image";
import Link from "next/link";

const ProjectListItem = ({ project }) => {
  return (
    <Link
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
        <p className="project_card__desc">{project.description}</p>
      </div>
    </Link>
  );
};

export default ProjectListItem;
