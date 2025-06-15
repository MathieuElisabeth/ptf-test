import styled from "styled-components";

export const ContactSection = styled.section`
  /* height: 100vh; */
  background-color: #ffff;
  margin: auto;
  overflow: hidden;
  padding: 0;
  z-index: 1;
  .contact-canvas {
    position: absolute !important;
    inset: 0;
    height: 100%;
    width: 100%;
    background-color: var(--bg-color);
  }
`;

export const ContactWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  .contact-mask {
    mix-blend-mode: lighten;
    height: 100vh;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    .contact-h2 {
      font-size: 250px;
      text-transform: uppercase;
      color: #000;

      @media (max-width: 1024px) {
        font-size: 140px;
      }

      @media (max-width: 600px) {
        font-size: 70px;
      }
    }
  }
`;

export const ContactInfo = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  opacity: 0;

  & > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 40px;
    pointer-events: auto;

    & > p {
      margin: 0;
    }

    & > svg {
      margin: 0;
      padding: 0;
      width: 60px;
      height: 60px;
    }

    @media (max-width: 600px) {
      & > p {
        font-size: 20px;
      }

      & > svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
