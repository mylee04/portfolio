"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo } from "../lib/data";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/projects", name: "Projects" },
    { href: "/publications", name: "Publications" },
    { href: "/presentations", name: "Presentations" },
    { href: "/contact", name: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === basePath || pathname === `${basePath}/`;
    return pathname.startsWith(`${basePath}${href}`);
  };

  return (
    <nav className="fixed w-full top-0 z-50 flex items-center justify-between py-4 px-4 sm:px-8 bg-white/90 dark:bg-black/80 backdrop-blur-sm shadow-sm">
      <Link href="/" className="text-lg sm:text-xl font-mono font-bold flex-shrink-0">
        {personalInfo.name}
      </Link>
      <div className="flex items-center gap-2 sm:gap-6">
        <ul className="flex gap-2 sm:gap-6 text-xs sm:text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? "font-bold text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                } hover:underline transition-colors whitespace-nowrap`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>
  );
} 