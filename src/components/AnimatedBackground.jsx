import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Background gradient */}
      <div className="animated-gradient"></div>

      <div className="floating-shapes">
        <div className="shape circle large shape-1"></div>
        <div className="shape circle large shape-2"></div>
        <div className="shape circle large shape-3"></div>

        <div className="shape circle small shape-7"></div>
        <div className="shape circle small shape-8"></div>
        <div className="shape circle small shape-9"></div>
        <div className="shape circle small shape-10"></div>

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
