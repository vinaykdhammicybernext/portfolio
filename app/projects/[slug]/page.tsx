import ProjectsList from "@/components/projects/ProjectsList";
import { getOtherProjects, getProjectBySlug } from "@/services/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const ProjectDetail = async ({ params }: Props) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  const otherProjects = getOtherProjects(project.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col lg:gap-32 gap-12 2xl:px-40 md:px-32 sm:px-16 px-8 lg:pt-32 md:pt-16 pt-8">
      <section className="flex flex-col items-center">
        <div className="container ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <div className="md:mb-8 mb-0">
                <Link
                  href="/projects"
                  className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-0 py-2 has-[>svg]:px-3 sm:inline-flex"
                >
                  &larr; Back to all projects
                </Link>
              </div>
              <div className="">
                <div className="">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </p>
                  <h2 className="xl:text-5xl text-4xl font-bold lg:mb-6 mb-3">
                    {project.title}
                  </h2>
                  <p className="lg:text-xl text-lg text-muted-foreground leading-relaxed text-pretty">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="border-t pt-4 flex gap-8">
                <div className="flex flex-col gap-1">
                  <span className="uppercase text-sm text-muted-foreground text-pretty leading-relaxed tracking-wide">
                    Year
                  </span>
                  <span className="font-medium">
                    {new Date(project.date).getFullYear()}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="uppercase text-sm text-muted-foreground text-pretty leading-relaxed tracking-wide">
                    Role
                  </span>
                  <span className="font-medium">{project.role}</span>
                </div>
              </div>
              <div className="border-t pt-4 flex flex-col gap-4">
                <h4 className="text-2xl font-bold">Project Overview</h4>
                <p className="lg:text-xl text-lg text-muted-foreground leading-relaxed text-pretty">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla excepturi id, obcaecati voluptates quidem eveniet dolore
                  aut incidunt eius dolor, inventore aspernatur? Nulla iure
                  molestiae, nostrum iusto ratione velit. Assumenda.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  tempora officia id laborum magnam blanditiis aliquid tenetur
                  qui at. Saepe enim, suscipit temporibus ducimus amet animi
                  explicabo deleniti ipsa at.
                </p>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="flex flex-col items-center">
        <div className="container lg:pb-16 pb-12">
          <h4 className="text-2xl font-bold mb-8">Other Projects</h4>
          <ProjectsList projects={otherProjects} />
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
