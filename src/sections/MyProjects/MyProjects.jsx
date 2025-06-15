import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../../assets/json/projects.json";
import {
  ProjectsSection,
  Fade,
  ProjectList,
  ProjectItem,
  ProjectImage,
  ProjectLanguages,
  ProjectInfo,
  ProjectTitle,
  StickyWrapper,
  ImageCover,
  MaskOverlay,
} from "./MyProjects.style";

function MyProjects() {
  const projectListRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // ScrollTrigger pour la section sticky
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top calc(100vh - 100px)",
      end: "bottom bottom",
      pin: "#mask",
      scrub: true,
      anticipatePin: 1,
    });

    gsap.utils.toArray(".project-item").forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top top",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <ProjectsSection id="projets">
        <div style={{ position: "relative", padding: "0 200px" }}>
          <MaskOverlay id="mask">
            <div>
              <h2 id="sticky-title">Mes projets</h2>

              <Fade id="sticky-fade-up" top />
              <Fade id="sticky-fade-bottom" />
            </div>
          </MaskOverlay>

          <StickyWrapper ref={sectionRef}>
            <ProjectList ref={projectListRef}>
              {projects.map((project, index) => (
                <ProjectItem key={index} className="project-item">
                  <ProjectInfo>
                    <a href={project.live_url}>
                      <ProjectTitle>{project.name}</ProjectTitle>
                    </a>

                    <p>{project.description}</p>
                  </ProjectInfo>
                  <ProjectImage>
                    <ImageCover>
                      <img src={project.image} alt={project.name} />
                    </ImageCover>
                    <ProjectLanguages>
                      {project.languages.join(" - ")}
                    </ProjectLanguages>
                  </ProjectImage>
                </ProjectItem>
              ))}
            </ProjectList>
          </StickyWrapper>
        </div>
      </ProjectsSection>
    </>
  );
}

export default MyProjects;
