"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, className, children }) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <Link href={href} className={`${className} ${isActive ? "active" : ""}`}>
      {children}
    </Link>
  );
};

export default NavLink;
