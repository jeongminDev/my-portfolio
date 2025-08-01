'use client';

import { useEffect, useRef, useState } from 'react';
import ProjectCard from './ProjectCard';
import WritingSection from './WritingSection';
import { projects } from '@/data/projects';
import MotionSection from './MotionSection';

const WorkSection = () => {
  const [activeSection, setActiveSection] = useState<'project' | 'interview'>(
    'project'
  );

  const projectRef = useRef<HTMLDivElement>(null);
  const interviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id as 'project' | 'interview');
          }
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (projectRef.current) observer.observe(projectRef.current);
    if (interviewRef.current) observer.observe(interviewRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="work" className="w-full pt-16">
      <div className="grid grid-cols-[1fr_3fr] gap-14 pt-10 px-10">
        <div className="sticky top-10 h-fit self-start">
          <nav className="flex flex-col gap-3 pt-10">
            <button
              onClick={() => handleScrollTo('project')}
              className={`mb-5 font-black text-6xl text-left transition ${
                activeSection === 'project' ? 'text-black' : 'text-text-second'
              }`}
            >
              Project
            </button>
            <button
              onClick={() => handleScrollTo('interview')}
              className={`font-black text-6xl text-left transition ${
                activeSection === 'interview'
                  ? 'text-black'
                  : 'text-text-second'
              }`}
            >
              Interview
            </button>
          </nav>
        </div>
        <div className="flex flex-col gap-60">
          <div id="project" ref={projectRef} className="pt-10">
            <MotionSection>
              <ul className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-x-[2rem] gap-y-[10rem]">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </ul>
            </MotionSection>
          </div>

          {/* ✅ Interview Section */}
          <div id="interview" ref={interviewRef} className="pt-20 border-t-2">
            <WritingSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
