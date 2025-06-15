import styled from "styled-components";

export const NavContainer = styled.header`
  position: absolute;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;
export const NavLeft = styled.nav`
  padding-left: 50px;

  a {
    color: var(--white);
    font-size: var(--fz-xxl);
    font-weight: bold;
    font-family: var(--font-sans);

    svg {
      height: 40px;
      fill: var(--white);
    }
  }
`;
export const NavRight = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
export const NavLink = styled.nav`
  font-size: var(--fz-sm);
  color: var(--lightest-slate);
  cursor: pointer;
  margin-left: 26px;

  span {
    color: var(--white);
    margin-right: 5px;
  }

  :hover {
    color: var(--white);
  }
`;
export const NavResumeBtn = styled.button`
  outline: none;
  font-size: 16px;
  background: transparent;
  border: none;
  color: var(--white);
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;

  :hover {
    background: var(--white-tint);
  }
`;

export const NavList = styled.ul`
  background-color: var(--transparent-navy);

  .MuiDivider-root {
    border-color: rgba(185, 185, 185, 0.12) !important;
  }
`;

export const NavListItem = styled.li`
  font-size: var(--fz-sm);
  color: var(--lightest-slate);
  cursor: pointer;
  justify-content: center !important;
`;

export const NameContainer = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  position: relative;
  font-family: "Roboto", sans-serif;

  /* Effet hover */
  &:hover .m {
    transform: translateX(0);
  }

  &:hover .e {
    transform: translateX(120px);
    ::before {
      width: 0;
    }
  }

  &:hover .first-name {
    opacity: 1;
    transform: translateX(35px);
  }

  &:hover .last-name {
    opacity: 1;
    transform: translateX(178px);
  }

  .letter {
    display: inline-block;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .hidden {
    opacity: 0;
    transform: translateX(0);
    position: absolute;
  }

  .e {
    position: relative;
    transform: translateX(-10px);
  }

  .e::before {
    content: "";
    position: absolute;
    top: 0;
    left: 1px;
    height: 100%;
    width: 2px;
    background: var(--bg-color);
  }
`;
