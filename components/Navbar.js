"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 border-b">
      <Link href="/" className="text-xl font-bold text-blue-600">
        ModernBlog
      </Link>
      <div className="space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-blue-600 ${
              pathname === link.href ? "font-semibold text-blue-600" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
