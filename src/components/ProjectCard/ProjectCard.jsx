import React from "react";
import { programmingLang } from "../../utils/projects";
import {
  ImageOverlay,
  LanguagesChip,
  LanguagesContainer,
  PropertyCard,
  PropertyDescription,
  PropertyImage,
  PropertySocialIcons,
} from "./ProjectCard.style";

function ProjectCard({
  title,
  description,
  image,
  languages,
  live_url,
  github_url,
}) {
  return (
    <div>
      <PropertyCard>
        <a href={live_url} target="_blank" rel="noreferrer">
          <PropertyImage image={image}>
            <ImageOverlay></ImageOverlay>
          </PropertyImage>
          <PropertyDescription>
            <div position="relative" height="100%" padding="0.5em 1em">
              <h1> {title} </h1>
              <LanguagesContainer>
                {languages.map((lang) => (
                  <LanguagesChip
                    key={programmingLang[lang].value}
                    label={programmingLang[lang].name}
                    $textColor={programmingLang[lang].textColor}
                    $bgColor={programmingLang[lang].bgColor}
                  />
                ))}
              </LanguagesContainer>
              <p>{description}</p>
            </div>
          </PropertyDescription>
        </a>
        <a href={github_url} target="_blank" rel="noreferrer">
          <PropertySocialIcons>
            <i className="fab fa-github"></i>
          </PropertySocialIcons>
        </a>
      </PropertyCard>
    </div>
  );
}

export default ProjectCard;
