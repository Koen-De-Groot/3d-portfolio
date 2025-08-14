import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const AnimatedName = ({ className }) => {
  const nameRef = useRef(null);
  const firstORef = useRef(null);
  const secondORef = useRef(null);

  const name = "Koen De Groot";
  const letters = name.split("");

  useEffect(() => {
    if (!nameRef.current) return;

    const letterElements = nameRef.current.querySelectorAll(".letter");
    const tl = gsap.timeline();

    // Initial setup - hide all letters
    gsap.set(letterElements, {
      opacity: 0,
      y: 50,
      x: 0,
      rotation: 0,
      scale: 0.5,
    });

    // Animate each letter with different effects
    letterElements.forEach((letter, index) => {
      const isSpace = letter.textContent === " ";
      if (isSpace) return;

      // Different animation types for each letter
      const animations = [
        // K
        () =>
          tl.to(
            letter,
            {
              duration: 0.6,
              opacity: 1,
              y: 0,
              scale: 1,
              x: -20,
              rotation: 360,
              ease: "back.out(1.7)",
            },
            index * 0.1
          ),
        // o (first)
        () =>
          tl.to(
            letter,
            {
              duration: 0.5,
              opacity: 1,
              y: 0,
              scale: 1,
              x: 40,
              ease: "bounce.out",
            },
            index * 0.1
          ),
        // e
        () =>
          tl.to(
            letter,
            {
              duration: 0.4,
              opacity: 1,
              y: 0,
              scale: 1,
              x: 20,
              rotation: -180,
              ease: "power2.out",
            },
            index * 0.1
          ),
        // n
        () =>
          tl.to(
            letter,
            {
              duration: 0.7,
              opacity: 1,
              y: 0,
              scale: 1,
              x: -35,
              ease: "elastic.out(1, 0.3)",
            },
            index * 0.1
          ),
        // space
        null,
        // D
        () =>
          tl.to(
            letter,
            {
              duration: 0.5,
              opacity: 1,
              y: 0,
              scale: 1,
              x: -25,
              rotation: 180,
              ease: "power3.out",
            },
            index * 0.1
          ),
        // e
        () =>
          tl.to(
            letter,
            {
              duration: 0.6,
              opacity: 1,
              y: 0,
              scale: 1,
              x: 25,
              ease: "back.out(2)",
            },
            index * 0.1
          ),
        // space
        null,
        // G
        () =>
          tl.to(
            letter,
            {
              duration: 0.4,
              opacity: 1,
              y: 0,
              scale: 1,
              x: -30,
              rotation: -90,
              ease: "power2.out",
            },
            index * 0.1
          ),
        // r
        () =>
          tl.to(
            letter,
            {
              duration: 0.8,
              opacity: 1,
              y: 0,
              scale: 1,
              x: -40,
              ease: "elastic.out(1, 0.5)",
            },
            index * 0.1
          ),
        // o (second)
        () =>
          tl.to(
            letter,
            {
              duration: 0.5,
              opacity: 1,
              y: 0,
              scale: 1,
              x: -45,
              ease: "bounce.out",
            },
            index * 0.1
          ),
        // o (third)
        () =>
          tl.to(
            letter,
            {
              duration: 0.6,
              opacity: 1,
              y: 0,
              scale: 1,
              rotation: 270,
              ease: "back.out(1.5)",
            },
            index * 0.1
          ),
        // t
        () =>
          tl.to(
            letter,
            {
              duration: 0.5,
              opacity: 1,
              y: 0,
              scale: 1,
              x: 30,
              ease: "power2.out",
            },
            index * 0.1
          ),
      ];

      if (animations[index]) {
        animations[index]();
      }
    });

    // Reset positions after initial animation
    tl.to(
      letterElements,
      {
        duration: 0.8,
        x: 0,
        rotation: 0,
        ease: "power2.inOut",
      },
      "+=0.5"
    );

    // Set up the "o" swapping animation
    const setupOSwapping = () => {
      const firstO = firstORef.current;
      const secondO = secondORef.current;

      if (firstO && secondO) {
        // Calculate the distance between the two o's
        const firstORect = firstO.getBoundingClientRect();
        const secondORect = secondO.getBoundingClientRect();
        const distance = secondORect.left - firstORect.left;

        gsap
          .timeline({ repeat: -1, repeatDelay: 2 })
          // First 'o' jumps high over the second 'o'
          .to(firstO, {
            duration: 0.3,
            y: -20,
            x: distance / 2,
            rotation: 180,
            ease: "power2.out",
          })
          .to(firstO, {
            duration: 0.3,
            y: 0,
            x: distance,
            rotation: 360,
            ease: "power2.in",
          })
          // Second 'o' jumps lower under the first 'o'
          .to(
            secondO,
            {
              duration: 0.3,
              y: 10,
              x: -distance / 2,
              rotation: -180,
              ease: "power2.out",
            },
            0
          )
          .to(
            secondO,
            {
              duration: 0.3,
              y: 0,
              x: -distance,
              rotation: -360,
              ease: "power2.in",
            },
            0.3
          )
          .set({}, {}, "+=2"); // 3 second delay before next swap
      }
    };

    // Start o swapping after initial animation completes
    tl.call(setupOSwapping, null, "+=1");
  }, []);

  return (
    <span ref={nameRef} className={className}>
      {letters.map((letter, index) => {
        const isFirstO = letter === "o" && index === 10; // First 'o' in "Groot"
        const isSecondO = letter === "o" && index === 11; // Second 'o' in "Groot"

        return (
          <span
            key={index}
            ref={isFirstO ? firstORef : isSecondO ? secondORef : null}
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
