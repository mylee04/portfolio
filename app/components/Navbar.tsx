"use client";

import Link from "next/link";

export default function Navbar() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  
  return (
    <nav className="w-full flex items-center justify-between py-6 px-8">
      <div className="text-3xl font-mono font-bold">
        Myungeun Lee
      </div>
        {/* 여기서 text-lg를 text-sm으로 변경 */}
      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link href={`${basePath}/`} className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href={`${basePath}/about`} className="hover:underline">About</Link>
        </li>
        <li>
          <Link href={`${basePath}/projects`} className="hover:underline">Projects</Link>
        </li>
        <li>
          <Link href={`${basePath}/publications`} className="hover:underline">Publications</Link>
        </li>
        <li>
          <Link href={`${basePath}/contact`} className="hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
} 