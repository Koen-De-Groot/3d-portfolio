import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const AnimatedName = ({ className }) => {
  const nameRef = useRef(null);

  const name = "Koen De Groot";
  const letters = name.split("");

  useEffect(() => {
    if (!nameRef.current) return;

    const letterElements = nameRef.current.querySelectorAll(".letter");
    const tl = gsap.timeline();

    // Initial setup - position letters at varying heights above to fall down
    letterElements.forEach((letter) => {
      const isSpace = letter.textContent === " ";
      if (isSpace) return;

      // Vary initial height for more natural falling effect
      const initialHeight = -120 - Math.random() * 60; // Random height between -120 and -180

      gsap.set(letter, {
        opacity: 0,
        y: initialHeight,
        x: 0,
        rotation: Math.random() * 360, // Random initial rotation
        scale: 0.8,
      });
    });

    // Animate each letter with different effects
    letterElements.forEach((letter, index) => {
      const isSpace = letter.textContent === " ";
      if (isSpace) return;

      // Different falling animation types for each letter
      const animations = [
        // K - tumbling fall with rotation
        () =>
          tl.to(
            letter,
            {
              duration: 0.6,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 720,
              ease: "bounce.out",
            },
            index * 0.1 + Math.random() * 0.1
          ),
        // o (first) - gentle bouncing fall
        () =>
          tl.to(
            letter,
            {
              duration: 0.5,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 360,
              ease: "power2.out",
            },
            index * 0.1 + Math.random() * 0.1
          ),
        // e - spinning fall
        () =>
          tl.to(
            letter,
            {
              duration: 0.4,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: -540,
              ease: "bounce.out",
            },
            index * 0.1 + Math.random() * 0.1
          ),
        // n - wobbling fall
        () =>
          tl.to(
            letter,
            {
              duration: 0.7,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 180,
              ease: "elastic.out(1, 0.6)",
            },
            index * 0.1 + Math.random() * 0.1
          ),
        // space
        null,
        // D - heavy fall with slight bounce
        () =>
          tl.to(
            letter,
            {
              duration: 0.5,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 450,
              ease: "power3.out",
            },
            index * 0.1 + Math.random() * 0.1
          ),
        // e - light tumbling fall
        () =>
          tl.to(
            letter,
            {
              duration: 0.4,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: -360,
              ease: "back.out(1.2)",
            },
            index * 0.1 + Math.random() * 0.1
          ),
        // space
        null,
        // G - dramatic spinning fall
        () =>
          tl.to(
            letter,
            {
              duration: 0.6,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: -720,
              ease: "bounce.out",
            },
            index * 0.1 + Math.random() * 0.1
          ),
        // r - quick fall with multiple spins
        () =>
          tl.to(
            letter,
            {
              duration: 0.5,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 900,
              ease: "power2.out",
            },
            index * 0.1 + Math.random() * 0.1
          ),
        // o (second) - bouncing fall
        () =>
          tl.to(
            letter,
            {
              duration: 0.6,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 540,
              ease: "bounce.out",
            },
            index * 0.1 + Math.random() * 0.1
          ),
        // o (third) - gentle tumbling fall
        () =>
          tl.to(
            letter,
            {
              duration: 0.4,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 270,
              ease: "power2.out",
            },
            index * 0.1 + Math.random() * 0.1
          ),
        // t - final letter with dramatic fall
        () =>
          tl.to(
            letter,
            {
              duration: 0.7,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: -450,
              ease: "elastic.out(1, 0.4)",
            },
            index * 0.1 + Math.random() * 0.1
          ),
      ];

      if (animations[index]) {
        animations[index]();
      }
    });

    // Gentle rotation reset after falling animation
    tl.to(
      letterElements,
      {
        duration: 0.8,
        rotation: 0,
        ease: "power2.inOut",
      },
      "+=0.4"
    );
  }, []);

  return (
    <span ref={nameRef} className={className}>
      {letters.map((letter, index) => {
        return (
          <span
            key={index}
            className={`letter inline-block ${letter === " " ? "w-2" : ""}`}
            style={{
              display: letter === " " ? "inline-block" : "inline-block",
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedName;
