import { forwardRef, memo, useEffect, useRef, useState } from "react";
import { NoToneMapping, SRGBColorSpace } from "three";
import { Fluid } from "@whatisjery/react-fluid-distortion";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Canvas as R3FCanvas } from "@react-three/fiber";
import Diamond from "../Diamond/Diamond";
import Text from "../Text/Text";
import { PerformanceMonitor, usePerformanceMonitor } from "@react-three/drei";

const Canvas = forwardRef((props, ref) => {
  // const canvasRef = useRef();
  const [frameloop, setFrameloop] = useState("never");
  const [isGoodPerformance, setIsGoodPerformance] = useState(true);

  const onIncline = () => {
    setIsGoodPerformance(true);
  };

  const onDecline = () => {
    setIsGoodPerformance(false);
  };

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      setFrameloop(isIntersecting ? "always" : "never");
    }, {});

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <R3FCanvas
      // ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
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
        {/* <color attach="background" args={["#1d1d1d"]} /> */}
        <ambientLight intensity={0.5 * Math.PI} />
        {/* <spotLight decay={0} position={[5, 5, -10]} angle={0.15} penumbra={1} />
          <pointLight decay={0} position={[-10, -10, -10]} /> */}
        <Text />
        {/* <Diamond rotation={[0, 0, 0]} position={[0, -1, 0]} /> */}
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
