
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me - Brady Osburn",
  description: "Learn more about my skills, experience, and journey.",
};

const skills: string[] = [
  "Next.js", "TypeScript", "Tailwind CSS", "daisyUI", "React",
  "JavaScript", "Python", "C++", "Git & GitHub",
  "Responsive Design", "Problem Solving"
];


const badgeColors = ["badge-primary", "badge-secondary", "badge-accent"];

export default function AboutPage() {
  return (
    <div className="space-y-16 py-8">
      <div className="text-center">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl text-primary"
          style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)' }}
        >
          About Me
        </h1>
      </div>

      {/* Profile Section */}
      <section className="container mx-auto px-4">
        
        <div className="p-8 bg-base-200 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="avatar">
                <div className="w-48 md:w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                  <Image
                    src="/profilepic.jpg"
                    alt="Brady Osburn - Profile Picture"
                    width={250}
                    height={250}
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-3xl font-semibold">Hello, I'm Brady Osburn</h2>
             
              <p className="text-lg leading-relaxed text-base-content/80">
                I am a driven Software Engineering student at Western Governors University with a passion for building elegant and effective web solutions. My journey into technology began with a deep curiosity for how things work, which has evolved into a dedicated pursuit of software development.
              </p>
              <p className="text-lg leading-relaxed text-base-content/80">
                I specialize in modern web technologies like Next.js, React, and TypeScript, and I enjoy leveraging component libraries like Tailwind CSS and DaisyUI to create clean, responsive, and user-friendly interfaces. I am a firm believer in continuous learning and am always exploring new tools and techniques to enhance my skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={skill} className={`badge badge-lg ${badgeColors[index % badgeColors.length]} p-4 sm:p-5 text-sm sm:text-base`}>
              {skill}
            </div>
          ))}
        </div>
        <p className="mt-6 text-base-content/70">
          ...and I'm always eager to learn new technologies!
        </p>
      </section>
    </div>
  );
}