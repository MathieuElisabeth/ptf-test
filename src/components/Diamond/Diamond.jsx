import { forwardRef, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  useGLTF,
  CubeCamera,
  MeshRefractionMaterial,
  useTexture,
} from "@react-three/drei";
import { RGBELoader } from "three-stdlib";
import { gsap } from "gsap";

const TEXTURE = new RGBELoader().load("/hdr/aerodynamics_workshop_1k.hdr");

const Diamond = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/model/diamond.glb");
  // const texture = useLoader(RGBELoader, "/hdr/aerodynamics_workshop_1k.hdr");

  const { mouse } = useThree();
  const vec = new THREE.Vector3();
  // useFrame(({ camera }) => {
  //   const targetPosition = vec.set(
  //     mouse.x * 2,
  //     mouse.y * 1,
  //     ref.current.position.z
  //   );
  //   if (ref.current.position.distanceTo(targetPosition) > 0.01) {
  //     ref.current.position.lerp(targetPosition, 0.004); // Réduire la vitesse d'interpolation
  //   }
  // });

  // useEffect(() => {
  //   if (!ref.current) return;
  //   gsap.to(ref.current.position, {
  //     y: 5,
  //     ease: "power3.out",
  //     scrollTrigger: {
  //       trigger: ".webgl",
  //       start: "top top", // when the top of the trigger hits the top of the viewport
  //       end: "+=2000", // end after scrolling 100vh beyond the start
  //       scrub: 0.8, // smooth scrubbing, takes 0.8 second to "catch up" to the scrollbar
  //     },
  //   });
  // }, []);
  // Use a custom envmap/scene-backdrop for the diamond material
  // This way we can have a clear BG while cube-cam can still film other objects

  return (
    <CubeCamera resolution={256} frames={1} envMap={TEXTURE}>
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
