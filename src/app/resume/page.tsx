

import type { Metadata } from 'next';
import { FaDownload, FaExclamationTriangle } from 'react-icons/fa'; 

export const metadata: Metadata = {
  title: "My Resume - Brady Osburn",
  description: "Download my professional resume to learn more about my skills and experience.",
};

export default function ResumePage() {
  const resumePdfPath = "/MyResume.pdf";

  return (
    <div className="space-y-12 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">My Resume</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto text-base-content/70">
          Here you can download a copy of my resume.
        </p>
      </div>

      {/* Download Section */}
      <section className="container mx-auto px-4 text-center">
        <a
          href={resumePdfPath}
          download
          className="btn btn-primary btn-lg"
          aria-label="Download my resume"
        >
          <FaDownload className="mr-2" /> 
          Download Resume (PDF)
        </a>
        <p className="mt-4 text-sm text-base-content/60">
          Click the button above to download the latest version of my resume.
        </p>
      </section>

      {/* Embedded PDF Section */}
      <section className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">View Online</h2>
        
        {/* Using mockup-window to frame the PDF */}
        <div className="mockup-window border bg-base-300 border-primary max-w-4xl mx-auto">
          <div className="aspect-[8.5/11] w-full bg-base-200">
            <iframe
              src={`${resumePdfPath}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full"
              title="My Resume Embedded PDF"
            />
          </div>
        </div>

        {/* Using alert component for the note */}
        <div role="alert" className="alert alert-warning shadow-lg mt-8 max-w-4xl mx-auto">
          <FaExclamationTriangle />
          <div>
            <h3 className="font-bold">Note</h3>
            <div className="text-xs">
              Embedded PDF viewing experience can vary across browsers and devices. For the best experience, please download the resume.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}