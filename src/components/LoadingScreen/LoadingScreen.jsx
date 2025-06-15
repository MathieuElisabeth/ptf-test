import { useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { Overlay } from "./LoadingScreen.style";
import { useRef } from "react";

const LoadingScreen = () => {
  const { progress } = useProgress();
  const overlayRef = useRef(null);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    // Animer `displayProgress` vers la vraie valeur `progress`
    gsap.to(
      { val: displayProgress },
      {
        val: progress,
        duration: 1.5, // Animation fluide
        ease: "power2.out",
        onUpdate: function () {
          setDisplayProgress(this.targets()[0].val);
        },
      }
    );

    // Assurer un chargement minimum de 3 secondes
    const minLoadTime = 3;
    const startTime = performance.now();

    const checkCompletion = () => {
      const elapsedTime = (performance.now() - startTime) / 1000;
      if (progress === 100 && elapsedTime >= minLoadTime) {
        gsap.to(overlayRef.current, {
          y: "-100vh", // Déplacer l'overlay vers le haut
          duration: 1, // Animation fluide du fade-out
          ease: "power2.out",
          onComplete: () => {
            document.body.style.overflow = "auto"; // Réactiver le scroll
            gsap.set(overlayRef.current, {
              display: "none",
            });
          },
        });
      }
    };

    const timer = setInterval(checkCompletion, 1000);
    return () => clearInterval(timer);
  }, [progress]);

  return <Overlay ref={overlayRef}>{Math.round(displayProgress)}%</Overlay>;
};

export default LoadingScreen;
