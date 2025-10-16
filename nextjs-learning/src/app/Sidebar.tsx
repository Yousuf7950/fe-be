"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  label: string;
}

export default function SidebarLink({ href, label }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
        isActive
          ? "bg-blue-50 text-blue-600 font-semibold"
          : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
      }`}
    >
      {label}
    </Link>
  );
}
