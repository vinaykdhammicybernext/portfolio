import "./app.css";
import Link from "next/link";
import Image from "next/image";
import ProjectsList from "@/components/projects/ProjectsList";

export default function Home() {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center lg:pb-40 pb-16 pt-16 gap-x-12">
        <div className="2xl:w-4/5 w-full lg:mb-0 mb-8">
          <h2 className="text-5xl font-bold tracking-tight xl:text-6xl lg:text-left text-center text-balance mb-6">
            Crafting beautiful digital experiences and spaces.
          </h2>
          <p className="md:text-xl text-md text-muted-foreground leading-relaxed text-pretty mb-6 lg:text-left text-center">
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
      </div>
      <div>
        <div className="mb-12 flex justify-between items-center">
          <div className="">
            <h3 className="font-bold text-3xl">Featured Projects</h3>
            <p>A selection of my recent work across different disciplines.</p>
          </div>
          <Link
            href="/projects"
            className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-9 px-4 py-2 has-[>svg]:px-3 hidden sm:inline-flex"
          >
            All Projects &rarr;
          </Link>
        </div>
        <ProjectsList />
      </div>
    </>
  );
}
