import "./app.css";
import Link from "next/link";
import Image from "next/image";
import ProjectsList from "@/components/projects/ProjectsList";
import { getProjects } from "./services/projects";

export default function Home() {
  const allProjects = getProjects();

  return (
    <div className="flex-column lg:py-16 py-8 2xl:px-40 md:px-32 px-12">
      <section className="container grid lg:grid-cols-2 grid-cols-1 items-center justify-center lg:pb-40 pb-16 gap-x-12 ">
        <div className="w-full lg:mb-0 mb-8">
          <h2 className="heading-secondary">
            Crafting beautiful digital experiences and spaces.
          </h2>
          <p className="description">
            I'm a multi-disciplinary designer focused on building clean,
            functional, and aesthetically pleasing solutions for the modern
            world.
          </p>
          <div className="flex gap-4 lg:justify-start justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/pexels-jvdm-1457842.jpg"
            width={600}
            height={300}
            alt=""
            className="rounded-lg w-full"
            loading="eager"
          />
        </div>
      </section>

      <section className="container">
        <div className="md:mb-12 mb-6 flex justify-between items-center">
          <div className="">
            <h3 className="font-bold text-3xl sm:text-left text-center">
              Featured Projects
            </h3>
            <p className="description sm:text-left text-center">
              A selection of my recent work across different disciplines.
            </p>
          </div>
          <Link
            href="/projects"
            className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 hidden sm:inline-flex"
          >
            All Projects &rarr;
          </Link>
        </div>

        <ProjectsList projects={allProjects} limit={3} />
      </section>
    </div>
  );
}
