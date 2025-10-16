import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "NextLearn | Learning Next.js",
  description: "A Next.js learning journey with clean UI and structure.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 font-sans">
        {/* ===== Header ===== */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
              NextLearn
            </Link>

            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/dashboard" className="hover:text-blue-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/projects" className="hover:text-blue-600 transition-colors">
                Projects
              </Link>
            </div>
          </nav>
        </header>

        {/* ===== Main Content ===== */}
        <main className="max-w-6xl mx-auto px-6 py-10 min-h-[calc(100vh-160px)]">
          {children}
        </main>

        {/* ===== Footer ===== */}
        <footer className="border-t border-gray-200 bg-white text-gray-600 py-6 mt-auto">
          <div className="max-w-6xl mx-auto text-center text-sm">
            <p>
              © {new Date().getFullYear()} <span className="font-semibold text-blue-600">NextLearn</span>.{" "}
              All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
