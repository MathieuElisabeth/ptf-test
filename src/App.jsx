import { Suspense, useEffect, useRef, useState } from "react";
import Layout from "./layout";
import { Canvas } from "./components";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "./utils/hook/useMediaQuery";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import "./App.css";

// eslint-disable-next-line no-undef
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollTrigger.normalizeScroll(true);

function App() {
  const heroRef = useRef(null);
  const lenisRef = useRef();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <Suspense>
      <ReactLenis
        root
        options={{ autoRaf: false, syncTouch: true, syncTouchLerp: 0.1 }}
        ref={lenisRef}
      >
        <LoadingScreen />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Layout ref={heroRef} />
            {!isMobile && <Canvas onIncline ref={heroRef} />}
          </div>
        </div>
      </ReactLenis>
    </Suspense>
  );
}

export default App;
