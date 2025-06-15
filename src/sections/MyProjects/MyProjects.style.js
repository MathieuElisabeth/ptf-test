import styled from "styled-components";

export const ProjectsSection = styled.section`
  background-color: var(--bg-color);
  color: white;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  overflow: hidden;
  z-index: 2;
  padding: 0;
  padding-top: 200px;

  .pin-spacer {
    pointer-events: none;
  }
`;

export const MaskOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  pointer-events: none;

  & > div {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  #sticky-title {
    position: absolute;
    top: -2px;
    text-align: center;
    font-size: 30px;
    background: var(--bg-color);
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding: 30px;
    /* padding-top: 100px; */
    margin: 0;
    z-index: 6;
  }
`;

export const StickyWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Fade = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props) => (props.top ? "30vh" : "20vh")};
  background: linear-gradient(
    ${(props) => (props.top ? "to bottom" : "to top")},
    rgba(29, 29, 29, 1),
    rgba(29, 29, 29, 0)
  );
  z-index: 5;
  ${(props) => (props.top ? "top: 100px;" : "bottom: 0;")}/* ${(props) =>
    props.top ? "top: 110px;" : "bottom: 0;"} */
`;

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProjectItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  /* width: 90vw; */
  max-width: 1200px;

  @media (max-width: 978px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 20px;
  }
`;

export const ProjectImage = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 978px) {
    width: auto;
  }
`;

export const ImageCover = styled.div`
  overflow: hidden;
  border-radius: 5px;
  height: 300px;
  width: 360px;
`;

export const ProjectLanguages = styled.div`
  margin-top: 10px;
  margin-left: 5px;
  font-size: 14px;
  color: #888;
`;

export const ProjectInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 978px) {
    width: auto;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 3rem;
  position: relative;
  margin: 0;
  color: rgba(255, 255, 255, 0.35);

  &:hover {
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    background: -moz-gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );
    background: gradient(
      linear,
      left top,
      right top,
      from(#222),
      to(#222),
      color-stop(0.5, #fff)
    );

    background-repeat: no-repeat;
    background-position: 0 0;
    -webkit-background-size: 125px 100%;
    -moz-background-size: 125px 100%;
    background-size: 125px 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-animation-name: shimmer;
    -moz-animation-name: shimmer;
    animation-name: shimmer;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .shimmer {
    text-align: center;
  }

  @-moz-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @-webkit-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @-o-keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: top left;
    }
    100% {
      background-position: top right;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: 200% center;
    }
    100% {
      background-position: -200% center;
    }
  }
`;
