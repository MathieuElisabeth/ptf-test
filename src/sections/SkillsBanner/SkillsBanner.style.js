import styled, { keyframes } from 'styled-components'

const scrolling = keyframes`
  0% { 
    transform: translateX(0); 
  }

  100% {
    transform: translateX(calc(-1 * var(--marquee-element-width) * var(--marquee-elements))); 
  }
`

export const Skills = styled.div`
  height: var(--marquee-height);
  background-color: #111;
  color: #eee;
  overflow: hidden;
  position: relative;

:before, :after {
  position: absolute;
  top: 0;
  width: 10rem;
  height: 100%;
  content: "";
  z-index: 1;
}
:before {
  left: 0;
  background: linear-gradient(to right, #111 0%, transparent 100%);
}
:after {
  right: 0;
  background: linear-gradient(to left, #111 0%, transparent 100%);
}
`

export const SkillsContent = styled.ul`
  list-style: none;
  height: 100%;
  display: flex;
  animation: ${scrolling} var(--marquee-animation-duration) linear infinite;

/* .marquee-content:hover {
  animation-play-state: paused;
} */
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: var(--marquee-element-width);
    max-height: 100%;
    font-size: calc(var(--marquee-height)*3/4); /* 5rem; */
    white-space: nowrap;
  }

  li img {
    width: 100%;
    height: 100px;
    /* border: 2px solid #eee; */
    @media (max-width: 900px) {
      height: 85px;
    }
  }

`

export const SkillsBannerContainer = styled.div`
  padding: 20px 50px;
  padding-bottom: 50px;
  margin: 20px 0;
  background-color: #111;
  text-align: center;

@media (max-width: 600px) {
  :root {
    --marquee-width: 100vw;
    --marquee-height: 16vh;
    --marquee-elements-displayed: 3;
  }
  ${Skills}:before, ${Skills}:after { width: 5rem; }
}
`