import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const bubuRef = useRef(null);
  const resumeRef = useRef(null);
  const audiophileRef = useRef(null);
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

    // Animations for each app showcase
    const cards = [
      bubuRef.current,
      resumeRef.current,
      audiophileRef.current,
      kanbanRef.current,
      movieRef.current,
      feedbackRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1 * (index + 0.5),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=300",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={bubuRef} className="first-project-wrapper">
            <a
              href="https://www.bubuaimealplanner.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper">
                <img src="/images/bubu1.png" alt="bubu ai" />
              </div>
              <div className="text-content">
                <h2 className="mt-3">
                  Personal Flagship Project: Production Grade AI Recipe
                  Generator Using All The State Of The Art AI Models And Tools
                </h2>
                <p className="text-white-50 md:text-xl">
                  Built with Nextjs, Convex, Clerk for Auth and Billing,
                  Typescript, Shadcn, React Query, OpenRouter, Vercel &
                  TailwindCSS for a super fast, user-friendly experience.
                </p>
              </div>
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={audiophileRef}>
              <a
                href="https://audiophilekdg.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-wrapper bg-[#1a1818]">
                  <img src="/images/e-commerce.png" alt="Audiophile App" />
                </div>
                <h2 className="mt-3">Audiophile - E-commerce App (Vue)</h2>
              </a>
            </div>
            <div className="project" ref={resumeRef}>
              <a
                href="https://nextjs-15-ai-resume-builder-tan.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-wrapper bg-[#1a1818]">
                  <img
                    src="/images/resume.png"
                    alt="AI Powered Resume Builder"
                  />
                </div>
                <h2 className="mt-3">AI Powered Resume Builder (Nextjs)</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-20">
          <div className="extra-projects" ref={kanbanRef}>
            <a
              href="https://vuekanbanapp.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper bg-[#ffffff] p-0">
                <img src="/images/kanban.png" alt="Kanban App" />
              </div>
              <h2 className="mt-3">Kanban App (Vue)</h2>
            </a>
          </div>
          <div className="extra-projects" ref={movieRef}>
            <a
              href="https://entertainmentwebapp.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper bg-[#ffffff] p-0">
                <img src="/images/movie.png" alt="Movie App" />
              </div>
              <h2 className="mt-3">Entertainment Web App (Blazor)</h2>
            </a>
          </div>
          <div className="extra-projects" ref={feedbackRef}>
            <a
              href="https://angularproductfeedbackapp.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="image-wrapper bg-[#ffffff] p-0">
                <img src="/images/feedback.png" alt="Movie App" />
              </div>
              <h2 className="mt-3">Product Feedback App (Angular)</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
