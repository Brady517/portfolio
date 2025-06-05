// src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
// background image
export default function HomePage() {
  return (
    <div className="hero min-h-[calc(100vh-16rem)]">
      <Image
        alt="Synthwave background"
        src="/synthwave-bg.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      {/* overlay */}
      <div className="hero-overlay bg-[#00000099]"></div>

      <div className="hero-content text-center text-base-content">
        <div className="max-w-md">
          <h1
            className="mb-5 text-5xl font-bold text-primary"
            style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)' }}
          >
            Brady Osburn
          </h1>
          <p
            className="mb-5 text-lg"
            style={{ textShadow: '1px 1px 5px rgba(0, 0, 0, 0.7)' }}
          >
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