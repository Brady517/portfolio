
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Projects - Brady Osburn", 
  description: "A showcase of projects I've built.", 
};

// project data
interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string; 
  techStack: string[];
  liveLink?: string; 
  repoLink?: string; 
}

// projects
const myProjects: Project[] = [
  {
    id: "project-1",
    title: "To-Do List application",
    description: "This is just a placeholder for now i have not made this yet",
    imageUrl: "/ToDo.avif",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "daisyUI", "Vercel"],
    repoLink: "https://github.com"
  },
  {
    id: "project-2",
    title: "CS2 Stat Tracker",
    description: "[this is a placeholder for now i have not made this yet] This is a stat tracker for the game Counter-Strike 2. It is a web application that allows you to track your stats and see your progress.",
    imageUrl: "/cs2.webp",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth"],
    repoLink: "https://github.com",
  },
  // Add more projects here when i make them
];

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl">
      <figure className="h-48 sm:h-56 overflow-hidden"> 
        <Image
          src={project.imageUrl}
          alt={`Screenshot of ${project.title}`}
          width={500} 
          height={300} 
          className="w-full h-full object-cover " 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{project.title}</h2>
        <p className="text-base-content/80 text-sm min-h-[60px]">{project.description}</p>
        <div className="mt-2 mb-3">
          <h3 className="font-semibold text-sm mb-2">Tech Stack: </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <div key={tech} className="badge badge-neutral">
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="card-actions justify-end mt-auto"> 
         
          {project.repoLink && (
            <Link href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              GitHub Repo 
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

// Projects Page Component
export default function ProjectsPage() {
  return (
    <div className="space-y-12 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Projects</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto text-base-content/70">
          Here are some of the projects I've worked on. Take a look around!
        </p>
      </div>

      {myProjects.length === 0 ? (
        <p className="text-center text-xl text-base-content/60">
          More projects are on the way. Stay tuned!
        </p>
      ) : (
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}