import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  font-size: 48px;
  font-weight: bold;
  transition: opacity 0.5s ease-out;
  pointer-events: none;
  z-index: 10;
`;
