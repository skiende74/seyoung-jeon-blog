import type { Route } from "next";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

interface NavIcon {
  href: Route;
  icon: ReactNode;
}

const navIcons: NavIcon[] = [
  {
    href: "https://www.github.com/skiende74",
    icon: <FaGithub />,
  },
  {
    href: "/about",
    icon: <IoPersonSharp />,
  },
];

function Header({ title }: { title: string }) {
  return (
    <nav className="sticky top-0 h-12 w-full flex items-center py-1 px-3  bg-neutral-800 text-white justify-center">
      <div className="w-[50rem] flex justify-between items-center">
        <Link href="/">
          <div className="text-md font-semibold">{title}</div>
        </Link>
        <ul className="flex gap-x-2">
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
