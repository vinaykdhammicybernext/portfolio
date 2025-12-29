import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-3 justify-between gap-x-8">
      {projects.map((project) => {
        return (
          <Link href={`/projects/${project.slug}`} key={project.slug}>
            <div className="w-full">
              <div className="pb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="rounded-2xl w-full"
                />
              </div>
              <div>
                <span className="uppercase text-xs text-[#c34f4b] font-medium tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="font-medium text-xl">{project.title}</h3>
                <p>{project.content}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProjectsList;
