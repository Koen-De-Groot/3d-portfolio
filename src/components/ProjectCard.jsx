import { forwardRef } from "react";

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
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 ${className}`}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className={`aspect-video overflow-hidden ${bgColor}`}>
            <img
              src={image}
              alt={alt}
              className={`w-full h-full ${objectFit} transition-transform duration-500`}
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-2 transition-colors">
              {title}
            </h3>
            <p className="text-gray-400 text-sm mb-3">{technology}</p>
          </div>
        </a>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
