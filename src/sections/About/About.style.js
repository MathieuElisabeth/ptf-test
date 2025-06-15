import styled from "styled-components";

export const AboutSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 200px 0;
  margin: auto;
  min-height: 100vh;
  z-index: 2;
  border-radius: 5px 5px 0 0;
  box-sizing: border-box;
  overflow: hidden;
  h2 {
    text-align: center;
    color: var(--bg-color);
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 200px;

  @media (max-width: 1024px) {
    padding: 0 70px;
  }

  @media (max-width: 600px) {
    padding: 0 8px;
  }
`;
export const AboutDescription = styled.div`
  font-family: var(--font-sans);
  color: var(--bg-color);
  font-size: var(--fz-lg);

  & .line-wrapper {
    overflow: hidden;
  }
`;
