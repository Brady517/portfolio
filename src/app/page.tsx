
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="hero min-h-[calc(100vh-16rem)] bg-base-200"> 
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Brady Osburn</h1>
          <p className="py-6 text-lg">
            Welcome to my portfolio! I'm a passionate Web Developer and Software Engineer
            specializing in creating modern web applications with React and Next.js.
            Explore my work and get in touch!
          </p>
          <div className="space-x-4">
            <Link href="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Hire Me!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}