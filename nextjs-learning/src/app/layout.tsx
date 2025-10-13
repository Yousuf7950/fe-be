import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js Layouts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <header className="bg-white shadow-md sticky top-0">
          <nav className="flex items-center justify-between max-w-5xl mx-auto py-4 px-6">
            <h1 className="text-xl font-bold">NextLearn</h1>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-blue-500">Home</Link>
              <Link href="/about" className="hover:text-blue-500">About</Link>
              <Link href="/contact" className="hover:text-blue-500">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="max-w-5xl mx-auto p-6">{children}</main>

        <footer className="text-center py-6 border-t mt-10 text-sm text-gray-600">
          © {new Date().getFullYear()} NextLearn — All rights reserved.
        </footer>
      </body>
    </html>
  );
}
