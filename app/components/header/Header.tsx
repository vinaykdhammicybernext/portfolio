"use client";
import "./header.css";
import NavLink from "../NavLink";
import Link from "next/link";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

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
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden relative z-50 h-6 w-7"
        >
          <span
            className={`absolute left-0 top-0 h-0.5 w-full bg-black transition ${
              isOpen ? "rotate-45 top-3" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-0.5 w-full bg-black transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-6 h-0.5 w-full bg-black transition ${
              isOpen ? "-rotate-45 top-3" : ""
            }`}
          />
        </button>
        {isOpen && (
          <div
            className="fixed inset-0 z-40 h-screen w-full bg-black/50 backdrop-blur-sm peer-checked:block"
            onClick={() => setIsOpen(false)}
          >
            &nbsp;
          </div>
        )}
        <div
          className={`fixed top-0 right-0 z-50 h-screen w-[85%] bg-white px-6 pt-4 shadow-2xl transform transition-transform duration-300 md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav>
            <div className="flex justify-end">
              <button className="text-2xl" onClick={() => setIsOpen(false)}>
                X
              </button>
            </div>
            <ul className="flex flex-col gap-6 text-lg">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    onClick={() => setIsOpen(false)}
                    className="block"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
