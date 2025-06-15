import { forwardRef, memo, useEffect, useRef, useState } from "react";
import { NoToneMapping, SRGBColorSpace } from "three";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Canvas as R3FCanvas } from "@react-three/fiber";
import Diamond from "./Diamond.jsx";
import Text from "./Text.jsx";
import { PerformanceMonitor } from "@react-three/drei";

const Canvas = forwardRef((props, ref) => {
  const [frameloop, setFrameloop] = useState("never");
  const [isGoodPerformance, setIsGoodPerformance] = useState(true);

  const onIncline = () => {
    setIsGoodPerformance(true);
  };

  const onDecline = () => {
    setIsGoodPerformance(false);
  };

  useEffect(() => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      setFrameloop(isIntersecting ? "always" : "never");
    }, {});

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  return (
    <R3FCanvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        pointerEvents: "none",
      }}
      className="webgl"
      camera={{ far: 100 }}
      onCreated={({ gl }) => {
        gl.toneMapping = NoToneMapping;
        gl.outputEncoding = SRGBColorSpace;
      }}
      frameloop={frameloop}
      {...props}
    >
      <PerformanceMonitor onIncline={onIncline} onDecline={onDecline}>
        <ambientLight intensity={0.5 * Math.PI} />
        <Text />
        {isGoodPerformance && (
          <EffectComposer>
            <Fluid radius={0.1} showBackground={false} rainbow={true} />
          </EffectComposer>
        )}
      </PerformanceMonitor>
    </R3FCanvas>
  );
});

export default memo(Canvas);