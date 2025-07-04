import { forwardRef, useRef } from "react";
import { useGLTF, CubeCamera, MeshRefractionMaterial } from "@react-three/drei";
import { RGBELoader } from "three-stdlib";

//const TEXTURE = new RGBELoader().load("/hdr/aerodynamics_workshop_1k.hdr");

const Diamond = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/model/diamond.glb");

  return (
    <CubeCamera resolution={256} frames={1}>
      {(texture) => (
        <mesh
          castShadow
          ref={ref}
          geometry={nodes.Diamond_1_0.geometry}
          {...props}
        >
          <MeshRefractionMaterial
            envMap={texture}
            bounces={3}
            aberrationStrength={0.01}
            ior={2.75}
            fresnel={1}
            color="white"
            toneMapped={false}
          />
        </mesh>
      )}
    </CubeCamera>
  );
});

useGLTF.preload("/model/diamond.glb");

export default Diamond;