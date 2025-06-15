import { useState, useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";

const LoadingScreen = () => {
  const { progress } = useProgress();
  const overlayRef = useRef(null);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    // Animate displayProgress to the real progress value
    gsap.to(
      { val: displayProgress },
      {
        val: progress,
        duration: 1.5,
        ease: "power2.out",
        onUpdate: function () {
          setDisplayProgress(this.targets()[0].val);
        },
      }
    );

    // Ensure minimum loading time of 3 seconds
    const minLoadTime = 3;
    const startTime = performance.now();

    const checkCompletion = () => {
      const elapsedTime = (performance.now() - startTime) / 1000;
      if (progress === 100 && elapsedTime >= minLoadTime) {
        gsap.to(overlayRef.current, {
          y: "-100vh",
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            document.body.style.overflow = "auto";
            gsap.set(overlayRef.current, {
              display: "none",
            });
          },
        });
      }
    };

    const timer = setInterval(checkCompletion, 1000);
    return () => clearInterval(timer);
  }, [progress, displayProgress]);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        color: "white",
        fontSize: "48px",
        fontWeight: "bold",
        transition: "opacity 0.5s ease-out",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {Math.round(displayProgress)}%
    </div>
  );
};

export default LoadingScreen;