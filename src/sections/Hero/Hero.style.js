import styled from "styled-components";

export const HomeSection = styled.section`
  position: relative;
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--font-sans);
  box-sizing: border-box;
  pointer-events: none;

  a {
    z-index: 5;
  }
`;
export const Heading1 = styled.h1`
  color: var(--white);
  font-size: 120px;
  margin: 0;
  font-weight: bold;
  line-height: 102px;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 80px;
    line-height: 80px;
  }

  @media (max-width: 580px) {
    font-size: 40px;
    line-height: 40px;
  }
`;
export const Greet = styled.p`
  font-family: var(--font-mono);
  font-size: var(--fz-xl);
  /* color: var(--white); */
  color: #939393;
  margin: 10px 0;
  margin-left: 7px;
  text-align: center;

  @media (max-width: 580px) {
    font-size: var(--fz-sm);
  }
`;
export const Heading2 = styled.h1`
  font-size: 65px;
  margin: 0;
  color: var(--slate);

  @media (max-width: 500px) {
    font-size: 35px;
  }
`;
export const Description = styled.p`
  font-size: var(--fz-md);
  width: 65%;
`;
export const CheckOutButton = styled.button`
  outline: none;
  font-size: var(--fz-md);
  background: transparent;
  border: 1px solid var(--white);
  color: var(--white);
  border-radius: 5px;
  padding: 15px 20px;
  width: 235px;
  cursor: pointer;
  margin-top: 15px;

  :hover {
    background: var(--white-tint);
  }
`;
