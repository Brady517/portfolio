
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  
  const githubUrl = "https://github.com/Brady517";
  const linkedinUrl = "https://linkedin.com/in/brady-osburn-b20661341/";

  return (
    <footer className="footer items-center p-4 bg-base-200 text-base-content print:hidden">
      <aside className="items-center grid-flow-col">
        
        <p>Built using Next.js, Tailwind CSS, and DaisyUI.</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Brady Osburn's GitHub profile" className="link link-hover">
          <FaGithub size={24} />
        </Link>
        <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Brady Osburn's LinkedIn profile" className="link link-hover">
          <FaLinkedin size={24} />
        </Link>
       
      </nav>
    </footer>
  );
};

export default Footer;