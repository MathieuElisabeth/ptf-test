import React from "react";
import { AboutContainer, AboutDescription, AboutSection } from "./About.style";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";

// eslint-disable-next-line no-undef
gsap.registerPlugin(ScrollTrigger, SplitText);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger animation
    gsap.fromTo(
      sectionRef.current,
      {
        width: "90%", // Départ avec 50% de la largeur de la fenêtre
      },
      {
        width: "100%", // À la fin, 100% de la largeur
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom", // L'animation commence quand le haut de la section arrive au centre de la fenêtre
          end: "20%", // L'animation se termine quand le haut de la section touche le haut de la fenêtre
          scrub: true,
        },
        ease: "power3.out",
      }
    );

    // eslint-disable-next-line no-undef
    new SplitText(".split-me p", {
      type: "lines",
      linesClass: "line line++",
    });

    document.querySelectorAll(".split-me .line").forEach(function (element) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("line-wrapper");

      // Insère le wrapper avant l'élément
      element.parentNode.insertBefore(wrapper, element);

      // Déplace l'élément dans le wrapper
      wrapper.appendChild(element);
    });

    const lines = gsap.utils.toArray(".line");
    gsap.from(lines, {
      duration: 0.8,
      yPercent: 100,
      opacity: 0,
      ease: "power4",
      stagger: 0.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top+=40%", // L'animation commence quand le haut de la section arrive au centre de la fenêtre
      },
    });
  }, []);

  return (
    <AboutSection ref={sectionRef} id="about">
      <h2>À propos de moi</h2>
      <AboutContainer>
        <AboutDescription className="split-me">
          <p>
            Salut ! Je m'appelle Mathieu Elisabeth, développeur front-end
            passionné par la création d’expériences web immersives.
          </p>

          <p>
            Autodidacte depuis 2020, j’ai rapidement développé un goût prononcé
            pour le design, ce qui m’a naturellement orienté vers le
            développement front-end et l’écosystème React. J’aime créer des
            interfaces modernes, interactives et engageantes.
          </p>

          <p>
            Même si le front-end est mon domaine de prédilection, j’ai aussi
            exploré le back-end, afin de mieux comprendre l’ensemble d’une
            application web. Cette approche fullstack me permet de concevoir des
            projets cohérents, performants et bien pensés, du front au back.
          </p>

          <p>
            Ces dernières années, je me suis particulièrement intéressé à la 3D
            sur le web, aux animations et aux expériences interactives,
            notamment avec Three.js. Ce qui me motive chaque jour, c’est la
            créativité, la résolution de problèmes, et l’envie constante
            d’apprendre de nouvelles technologies.
          </p>

          <p>
            Si vous souhaitez en savoir plus sur mes projets ou discuter
            collaboration, n’hésitez pas à me contacter !
          </p>
        </AboutDescription>
      </AboutContainer>
    </AboutSection>
  );
}

export default About;
