import { forwardRef } from "react";
import { cn } from "../lib/utils";

const ProjectCard = forwardRef(
  (
    {
      href,
      image,
      alt,
      title,
      technology,
      bgColor = "bg-[#1a1818]",
      objectFit = "object-contain",
      className = "",
      index,
      hovered,
      setHovered,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        onMouseEnter={() => setHovered?.(index)}
        onMouseLeave={() => setHovered?.(null)}
        className={cn(
          "group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
          className
        )}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <div className={`aspect-video overflow-hidden relative ${bgColor}`}>
            <img
              src={image}
              alt={alt}
              className={`w-full h-full ${objectFit} transition-transform duration-500`}
            />
            {/* Overlay that appears on hover */}
            <div
              className={cn(
                "absolute inset-0 bg-black/50 flex items-end p-6 transition-opacity duration-300",
                hovered === index ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="text-white space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
                  {title}
                </h3>
                <p className="text-gray-300 text-sm">{technology}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
