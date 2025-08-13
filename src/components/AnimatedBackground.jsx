import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Background gradient */}
      <div className="animated-gradient"></div>

      {/* Floating geometric shapes */}
      <div className="floating-shapes">
        {/* Large circles */}
        <div className="shape circle large shape-1"></div>
        <div className="shape circle large shape-2"></div>
        <div className="shape circle large shape-3"></div>

        {/* Medium circles */}
        <div className="shape circle medium shape-4"></div>
        <div className="shape circle medium shape-5"></div>
        <div className="shape circle medium shape-6"></div>

        {/* Small circles */}
        <div className="shape circle small shape-7"></div>
        <div className="shape circle small shape-8"></div>
        <div className="shape circle small shape-9"></div>
        <div className="shape circle small shape-10"></div>

        {/* Rectangular shapes */}
        <div className="shape rectangle rect-1"></div>
        <div className="shape rectangle rect-2"></div>
        <div className="shape rectangle rect-3"></div>

        {/* Hexagonal shapes */}
        <div className="shape hexagon hex-1"></div>
        <div className="shape hexagon hex-2"></div>
      </div>

      {/* Animated lines */}
      <div className="animated-lines">
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
