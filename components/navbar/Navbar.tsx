import Link from "next/link";
import React from "react";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "@/components";

const navItems = [
  { text: "About", path: "/about" },
  { text: "Pricing", path: "/pricing" },
  { text: "Contac", path: "/contac" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <ActiveLink key={item.path} {...item} />
      ))}
    </nav>
  );
};
