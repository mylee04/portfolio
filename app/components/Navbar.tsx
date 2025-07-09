"use client";

import Link from "next/link";
import { personalInfo } from "../lib/data";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
  const pathname = usePathname();

  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/projects", name: "Projects" },
    { href: "/publications", name: "Publications" },
    { href: "/presentations", name: "Presentations" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-xl font-bold">
          {personalInfo.name}
        </Link>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={`${basePath}${link.href}`}
                  className={`hover:text-white transition-colors ${
                    pathname === `${basePath}${link.href}`
                      ? "text-white"
                      : "text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
} 