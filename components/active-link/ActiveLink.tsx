'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: ActiveLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${"hover:underline hover:text-blue-400 mr-2 transition-all"} ${
        pathname === path && "text-blue-500"
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};
