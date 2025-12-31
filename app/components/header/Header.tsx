import "./header.css";
import NavLink from "../NavLink";
import Link from "next/link";

const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/projects",
    title: "Projects",
  },
  {
    to: "/contact",
    title: "Contact",
  },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            Portfolio
          </h1>
        </Link>
        <nav>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((link, i) => (
              <li key={i}>
                <NavLink href={link.to} className="main-nav__link link">
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 hidden md:inline-flex bg-transparent cursor-pointer">
          Get in Touch
        </button>
      </div>
    </header>
  );
};

export default Header;
