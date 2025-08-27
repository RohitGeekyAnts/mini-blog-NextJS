"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem({ href, children }) {
  const pathname = usePathname();

  const active =
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={[
        " px-2 md:px-3 py-1 text-sm rounded-lg transition",
        active
          ? "bg-indigo-100 text-indigo-700 font-semibold"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur fixed top-0 w-full mx-auto z-50 ">
      <div className=" h-14 px-4 md:px-16 flex items-center justify-between ">
        <Link href="/" className="font-bold text-sm md:text-xl text-blue-600">
          ModernBlog
        </Link>
        <nav className="flex items-center md:gap-2">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/design">Design</NavItem>
        </nav>
      </div>
    </header>
  );
}
