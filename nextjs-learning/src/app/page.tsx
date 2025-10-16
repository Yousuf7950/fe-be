import Counter from "./components/counter";
import ThemeToggler from "./components/ThemeToggler";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 ">
      <h1 className="text-3xl font-bold mb-4">Hello, Next.js 14 👋</h1>
      <p className="text-gray-600 text-lg">
        This is my first Next.js app with the new App Router.
      </p>
      <Counter />
      <ThemeToggler />
    </main>
  )
}
