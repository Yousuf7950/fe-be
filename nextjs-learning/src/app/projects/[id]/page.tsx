import { notFound } from "next/navigation";

const projects = [
  { id: "1", name: "Portfolio Website", description: "A personal website built with Next.js and Tailwind CSS.", tech: ["Next.js", "Tailwind", "TypeScript"] },
  { id: "2", name: "E-Commerce Dashboard", description: "A dashboard for managing online store orders and analytics.", tech: ["React", "Node.js", "MongoDB"] },
  { id: "3", name: "Chat Application", description: "A real-time chat app using React, Socket.io, and Node.js.", tech: ["React", "Socket.io", "Express"] },
];

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-3 text-gray-800">{project.name}</h1>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <h3 className="font-semibold mb-2">Tech Stack:</h3>
      <ul className="list-disc ml-6 text-gray-600">
        {project.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
