import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const heroProjectRef = useRef(null);
  const gridContainerRef = useRef(null);
  const audiophileRef = useRef(null);
  const resumeRef = useRef(null);
  const kanbanRef = useRef(null);
  const movieRef = useRef(null);
  const feedbackRef = useRef(null);

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
    const gridProjects = [
      audiophileRef.current,
      resumeRef.current,
      kanbanRef.current,
      movieRef.current,
      feedbackRef.current,
    ];

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
        stagger: 0.15,
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
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium">
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
            {/* Audiophile */}
            <div
              ref={audiophileRef}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
            >
              <a
                href="https://audiophilekdg.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video overflow-hidden bg-[#1a1818]">
                  <img
                    src="/images/e-commerce.png"
                    alt="Audiophile App"
                    className="w-full h-full object-contain transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
                    Audiophile E-commerce
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Vue.js</p>
                </div>
              </a>
            </div>

            {/* Resume Builder */}
            <div
              ref={resumeRef}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
            >
              <a
                href="https://nextjs-15-ai-resume-builder-tan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video overflow-hidden bg-[#1a1818]">
                  <img
                    src="/images/resume.png"
                    alt="AI Resume Builder"
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
                    AI Resume Builder
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Next.js</p>
                </div>
              </a>
            </div>

            {/* Kanban */}
            <div
              ref={kanbanRef}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
            >
              <a
                href="https://vuekanbanapp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video overflow-hidden bg-white">
                  <img
                    src="/images/kanban.png"
                    alt="Kanban App"
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
                    Kanban Board
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Vue.js</p>
                </div>
              </a>
            </div>

            {/* Movie App */}
            <div
              ref={movieRef}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
            >
              <a
                href="https://entertainmentwebapp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video overflow-hidden bg-white">
                  <img
                    src="/images/movie.png"
                    alt="Entertainment App"
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
                    Entertainment Web App
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Blazor</p>
                </div>
              </a>
            </div>

            {/* Feedback App */}
            <div
              ref={feedbackRef}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              <a
                href="https://angularproductfeedbackapp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video overflow-hidden bg-white">
                  <img
                    src="/images/feedback.png"
                    alt="Feedback App"
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
                    Product Feedback App
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">Angular</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
