import { Text as DreiText } from "@react-three/drei";
import { suspend } from "suspend-react";
import { useEffect, useRef, useState } from "react";

const jost = import("../assets/font/Jost-Bold.ttf");
const jetBrain = import("../assets/font/JetBrainsMono-Regular.ttf");

const Text = () => {
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(1);

  const adjustTextPosition = () => {
    const screenWidth = window.innerWidth;
    if (textRef.current) {
      if (screenWidth < 1024) {
        const newFontSize = (screenWidth * 100) / 1024 / 100;
        setFontSize(newFontSize);
      } else {
        setFontSize(1);
      }
    }
  };

  useEffect(() => {
    adjustTextPosition();
    window.addEventListener("resize", adjustTextPosition);
    return () => {
      window.removeEventListener("resize", adjustTextPosition);
    };
  }, []);

  return (
    <group ref={textRef} position-y={0} scale={[1.5, 1.5, 1.5]}>
      <DreiText
        font={suspend(jost).default}
        letterSpacing={-0.07}
        fontSize={fontSize}
        renderOrder={1}
        position-y={0.8}
        color="#ffffff"
      >
        DEVELOPPEUR
      </DreiText>

      <DreiText
        font={suspend(jost).default}
        letterSpacing={-0.07}
        position-y={-0.12}
        fontSize={fontSize}
        color="#ffffff"
      >
        FRONTEND
      </DreiText>

      <DreiText
        font={suspend(jetBrain).default}
        maxWidth={4.2}
        textAlign="center"
        fontSize={0.1}
        lineHeight={1.5}
        position-y={1.5}
        color="#939393"
      >
        Mathieu Elisabeth
      </DreiText>
    </group>
  );
};

export default Text;