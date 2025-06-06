
import type { Metadata } from 'next';
import Link from 'next/link';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Contact Me - Brady Osburn",
  description: "Get in touch with me via email, GitHub, or LinkedIn.",
};

export default function ContactPage() {
  const contactDetails = {
    email: "bosburn517@gmail.com",
    githubUsername: "Brady517",
    linkedinUsername: "brady-osburn-b20661341/",
  };

  const githubUrl = `https://github.com/${contactDetails.githubUsername}`;
  const linkedinUrl = `https://linkedin.com/in/${contactDetails.linkedinUsername}`;

  return (
    <div className="space-y-12 py-8">
      <div className="text-center">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl text-primary"
          style={{ textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)' }}
        >
          Get In Touch
        </h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto text-base-content/70">
          I'm always open to discussing new opportunities, creative projects, or collaborations.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-lg">
      
        <div className="card card-bordered border-primary bg-base-200 shadow-xl shadow-primary/50">
          <div className="card-body space-y-4"> 
            <h2 className="card-title text-2xl justify-center mb-4">Contact Information</h2>

            {/* Email Section */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-1 flex items-center justify-center">
                <FaEnvelope className="mr-3 text-primary" size={20} />
                Email
              </h3>
              <a href={`mailto:${contactDetails.email}`} className="link link-hover text-lg break-all">
                {contactDetails.email}
              </a>
            </div>

            {/* Use a colored divider to separate sections */}
            <div className="divider divider-primary"></div>

            {/* GitHub Section */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-1 flex items-center justify-center">
                <FaGithub className="mr-3 text-primary" size={20} />
                GitHub
              </h3>
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="link link-hover text-lg break-all">
                {githubUrl}
              </Link>
            </div>

            <div className="divider divider-primary"></div>

            {/* LinkedIn Section */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-1 flex items-center justify-center">
                <FaLinkedin className="mr-3 text-primary" size={20} />
                LinkedIn
              </h3>
              <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="link link-hover text-lg break-all">
                {linkedinUrl}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}