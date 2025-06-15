import React, { useEffect, useRef, useState } from "react";
import { ContactInfo, ContactSection, ContactWrapper } from "./Contact.style";
import { NoToneMapping, SRGBColorSpace } from "three";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Canvas as R3FCanvas } from "@react-three/fiber";
import Diamond from "../../components/Diamond/Diamond";
import { ReactComponent as LinkedinLogo } from "../../assets/svg/linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/svg/github-mark-white.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Float, PerformanceMonitor } from "@react-three/drei";
import { useMediaQuery } from "../../utils/hook/useMediaQuery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contact() {
  const contactref = useRef(null);
  const heading2Ref = useRef(null);
  const wrapperRef = useRef(null);
  const diamondRef = useRef(null);
  const contactRef = useRef(null);
  const [frameloop, setFrameloop] = useState("never");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [isGoodPerformance, setIsGoodPerformance] = useState(true);

  const onIncline = () => {
    setIsGoodPerformance(true);
  };

  const onDecline = () => {
    setIsGoodPerformance(false);
  };

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        id: "contact-section",
      });

      gsap.to(".contact-h2", {
        scale: isMobile ? 800 : 100,
        scrollTrigger: {
          trigger: heading2Ref.current,
          scrub: 1,
          start: "top+=80% top",
          end: "+=80%",
          id: "contact-heading",
        },
      });

      if (diamondRef.current) {
        gsap.from(".contact-canvas", {
          opacity: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading2Ref.current,
            start: "top+=100% top", // when the top of the trigger hits the top of the viewport
            scrub: 1, // smooth scrubbing, takes 0.8 second to "catch up" to the scrollbar
            id: "diamond-animation",
          },
        });
      }

      if (!contactRef.current) return;

      gsap.to(contactRef.current, {
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading2Ref.current,
          start: "top+=100% top", // when the top of the trigger hits the top of the viewport
          end: "+=150%", // end after scrolling 100vh beyond the start
          scrub: 1, // smooth scrubbing, takes 0.8 second to "catch up" to the scrollbar
          id: "contact-info",
        },
      });
    },
    { scope: contactref }
  );

  useEffect(() => {
    if (!contactref.current) return;

    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      setFrameloop(isIntersecting ? "always" : "never");
    }, {});

    observer.observe(contactref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ContactSection ref={contactref} id="contact">
      <ContactWrapper ref={wrapperRef} className="wrapper">
        <R3FCanvas
          camera={{ far: 100 }}
          onCreated={({ gl }) => {
            gl.toneMapping = NoToneMapping;
            gl.outputEncoding = SRGBColorSpace;
          }}
          className="contact-canvas"
          frameloop={frameloop}
        >
          <PerformanceMonitor onIncline={onIncline} onDecline={onDecline}>
            <color attach="background" args={["#1d1d1d"]} />
            <ambientLight intensity={0.5 * Math.PI} />

            <Float
              speed={1} // Animation speed, defaults to 1
              rotationIntensity={1} // XYZ rotation intensity, defaults to 1
              floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
              floatingRange={[-2, 2]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
            >
              <Diamond
                ref={diamondRef}
                rotation={[0, 0, 0]}
                position={[0, 0, 0]}
              />
            </Float>

            {/* {isGoodPerformance && (
              <EffectComposer>
                {frameloop === "always" && (
                  <Bloom
                    luminanceThreshold={1}
                    intensity={2}
                    levels={9}
                    mipmapBlur
                  />
                )}
              </EffectComposer>
            )} */}
          </PerformanceMonitor>
        </R3FCanvas>
        <ContactInfo ref={contactRef}>
          <a
            href="https://www.linkedin.com/in/mathieu-elisabeth-643974219/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo />
            <p>LinkedIn</p>
          </a>
          <a
            href="https://github.com/MathieuElisabeth"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo />
            <p>Github</p>
          </a>
        </ContactInfo>
        <div className="contact-mask">
          <h2 className="contact-h2" ref={heading2Ref}>
            Réseaux
          </h2>
        </div>
      </ContactWrapper>
    </ContactSection>
  );
}

export default Contact;
