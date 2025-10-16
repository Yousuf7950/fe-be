import Link from "next/link";

const projects = [
  { id: "1", name: "Portfolio Website", description: "A personal website built with Next.js and Tailwind CSS." },
  { id: "2", name: "E-Commerce Dashboard", description: "A dashboard for managing online store orders and analytics." },
  { id: "3", name: "Chat Application", description: "A real-time chat app using React, Socket.io, and Node.js." },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Projects</h1>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/projects/${project.id}`}
              className="block p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-blue-600">{project.name}</h2>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
