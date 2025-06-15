import React, { useEffect } from 'react'
import { mySkills } from '../../utils/skills';
import { SkillsBannerContainer, Skills, SkillsContent } from './SkillsBanner.style';

function SkillsBanner() {
  const startSlider = () => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.getElementsByClassName("marquee-content");


    setTimeout(() => {
      root.style.setProperty("--marquee-elements", marqueeContent[0].children.length);
      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        marqueeContent[0].appendChild(marqueeContent[0].children[i].cloneNode(true));
      }
    }, 500)
  }

  useEffect(() => {
    startSlider()
  }, [])

  return (
    <SkillsBannerContainer id='skills'>
      <h1>Compétences</h1>
      <Skills>
        <SkillsContent className='marquee-content'>
          {
            mySkills.map(skill => (
              <li key={skill.name}>{skill.value}</li>
            ))
          }
        </SkillsContent>
      </Skills>
    </SkillsBannerContainer>
  )
}

export default SkillsBanner
