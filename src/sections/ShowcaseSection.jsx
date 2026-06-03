import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const heroProjectRef = useRef(null);
  const gridContainerRef = useRef(null);
  const projectRefs = useRef([]);
  const [hovered, setHovered] = useState(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Hero project animation
    gsap.fromTo(
      heroProjectRef.current,
      {
        y: 80,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroProjectRef.current,
          start: "top bottom-=200",
        },
      }
    );

    // Grid projects staggered animation
    const gridProjects = projectRefs.current.filter(Boolean);

    gsap.fromTo(
      gridProjects,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotationX: 45,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: gridContainerRef.current,
          start: "top bottom-=150",
        },
      }
    );
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Hero Project - Full Width */}
        <div
          ref={heroProjectRef}
          className="hero-project-container relative mb-20 group"
          style={{
            perspective: "1000px",
          }}
        >
          <a
            href="https://www.bubuaimealplanner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="relative overflow-hidden rounded-2xl  backdrop-blur-sm transition-all duration-500">
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content wrapper */}
              <div className="relative grid lg:grid-cols-2 gap-8 lg:p-12">
                {/* Text content */}
                <div className="flex flex-col justify-center space-y-6 lg:order-1">
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium">
                      Flagship Project
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                      AI Recipe Generator
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Production-grade AI meal planner using state-of-the-art
                      models and tools.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-400">Built with:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Next.js",
                        "Convex",
                        "Clerk",
                        "TypeScript",
                        "Shadcn",
                        "React Query",
                        "OpenRouter",
                        "Vercel",
                        "TailwindCSS",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:order-2">
                  <div className="relative group/img">
                    <div className="absolute inset-0 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <img
                      src="/images/bubu1.png"
                      alt="Bubu AI Meal Planner"
                      className="relative w-full h-auto rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* Other Projects Grid */}
        <div ref={gridContainerRef} className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Other Featured Projects
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of applications built with various technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(
              (
                {
                  id,
                  href,
                  image,
                  alt,
                  title,
                  technology,
                  bgColor,
                  objectFit,
                  className,
                },
                index
              ) => (
                <ProjectCard
                  key={id}
                  ref={(el) => (projectRefs.current[index] = el)}
                  href={href}
                  image={image}
                  alt={alt}
                  title={title}
                  technology={technology}
                  bgColor={bgColor}
                  objectFit={objectFit}
                  className={className}
                  index={index}
                  hovered={hovered}
                  setHovered={setHovered}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
