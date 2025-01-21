import type { Route } from "next";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";

interface NavIcon {
  href: Route;
  icon: ReactNode;
}

const navIcons: NavIcon[] = [
  {
    href: "/about",
    icon: <FaGithub />,
  },
];

function Header({ title }: { title: string }) {
  return (
    <nav className="sticky top-0 h-12 w-full flex items-center py-1 px-3  bg-neutral-800 text-white justify-center">
      <div className="w-[50rem] flex justify-between items-center">
        <div className="text-md font-semibold">{title}</div>
        <ul>
          {navIcons.map(({ href, icon }) => (
            <li key={href}>
              <Link href={href}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
