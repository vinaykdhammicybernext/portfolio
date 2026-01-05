"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type LinkType = {
  href: string;
  className: string;
  children: ReactNode;
  onClick?: () => void;
};

const NavLink = ({ href, className, children, onClick }: LinkType) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
