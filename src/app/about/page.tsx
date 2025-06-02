
import Image from 'next/image'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me - Brady Osburn",
  description: "Learn more about my skills, experience, and journey.",
};


const skills: string[] = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "daisyUI",
  "React",
  "JavaScript",
  "Python",
  "C++",
  "Git & GitHub",
  "Responsive Design",
  "Problem Solving"
];

export default function AboutPage() {
  return (
    <div className="space-y-12 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h1>
      </div>

      {/* Profile Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            {/* Profile Picture */}
            <Image
              src="/profilepic.jpg" 
              alt="Brady Osburn - Profile Picture"
              width={250} 
              height={250} 
              className="rounded-full shadow-xl object-cover w-[200px] h-[200px] md:w-[250px] md:h-[250px]"
              priority
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-3xl font-semibold">Hello, I'm Brady Osburn</h2>
            {/*Bio */}
            <p className="text-lg leading-relaxed">
           vhfjbvhdjfbkjdfshdgshdgysdgsvcgdsf hcghsdjycgsd sdgfdsygcydsvvc sdgsydfcsdf hsdjgcyds
            </p>
            <p className="text-lg leading-relaxed">
              fbvhdgfysdhjcsd gdysysdg fhsduhfu shdfkjs dhfushd 
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill) => (
            
            <div key={skill} className="badge badge-lg badge-primary p-4 sm:p-5 text-sm sm:text-base">
              {skill}
            </div>
          ))}
        </div>
        <p className="mt-6 text-neutral-content">
        I'm always eager to learn new technologies!
        </p>
      </section>
    </div>
  );
}