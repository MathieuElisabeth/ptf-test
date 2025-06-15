import { CheckOutButton, Greet, Heading1, HomeSection } from "./Hero.style";
import { ScrollDown } from "../../components";
import { forwardRef, memo, useRef } from "react";
import { useProgress } from "@react-three/drei";
import { useMediaQuery } from "../../utils/hook/useMediaQuery";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = forwardRef((_, ref) => {
  const scrollRef = useRef(null);
  const { loaded } = useProgress();
  const isMobile = useMediaQuery("(max-width: 1024px)");

  useGSAP(() => {
    if (!scrollRef.current) return;

    gsap.to(scrollRef.current, {
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top top+=5%", // when the top of the trigger hits the top of the viewport
        end: "top+=50%", // end after scrolling 100vh beyond the start
        scrub: 1, // smooth scrubbing, takes 0.8 second to "catch up" to the scrollbar
      },
    });
  }, []);

  return (
    <>
      <HomeSection ref={ref} id="home">
        {(!loaded || isMobile) && (
          <>
            <Greet>Mathieu Elisabeth</Greet>
            <Heading1>Developpeur</Heading1>
            <Heading1>frontend</Heading1>
          </>
        )}
        <ScrollDown ref={scrollRef} />
      </HomeSection>
    </>
  );
});

export default memo(Hero);
