import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 70px;
  background-color: var(--bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;
export const FooterLeft = styled.div`
  padding-left: 50px;

  a {
    color: var(--white);
    font-size: var(--fz-xxl);
    font-weight: bold;
    font-family: var(--font-sans);
  }

  svg {
    height: 40px;
    fill: var(--white);
  }

  @media (max-width: 480px) {
    padding-left: 10px;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  @media (max-width: 480px) {
    padding-right: 10px;
    font-size: 10px;
  }
`;
