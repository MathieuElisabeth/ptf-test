import styled, { keyframes } from "styled-components";

const scrollDown = keyframes`
  0% {
    transform: translateY(0);
  }

  30% {
    transform: translateY(3.75rem);
  }
`;

export const Scroll = styled.div`
  position: absolute;
  bottom: 100px;
  margin-top: 60px;
  text-align: center;
  z-index: 5;
`;

export const ScrollButton = styled.a`
  .wheel {
    animation: ${scrollDown} 2s ease infinite;
  }
`;
