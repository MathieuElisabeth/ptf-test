import {
  NameContainer,
  NavContainer,
  NavLeft,
  NavResumeBtn,
  NavRight,
} from "./Navbar.style";

import CV from "../../assets/pdf/CV-Mathieu_Elisabeth.pdf";
import { useMediaQuery } from "../../utils/hook/useMediaQuery";
// import Logo from '../../assets/svg/logo.svg'

function Navbar() {
  const isMobile = useMediaQuery("(min-width: 768px)");

  return (
    <NavContainer>
      <NavLeft>
        <a href="#home">
          <svg viewBox="0 0 54 56" xmlns="http://www.w3.org/2000/svg">
            <path d="M52.9453 38.5156V44H34.7812V38.5156H52.9453ZM37.0781 9.875V44H30.0469V9.875H37.0781ZM50.5781 23.7734V29.1172H34.7812V23.7734H50.5781ZM52.9219 9.875V15.3828H34.7812V9.875H52.9219Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.7422 9.875H29V20.1038L20.3672 44H15.5859L6.35504 18.4483L7.05469 34.2969V44H0.046875V9.875H3.25781H5.97656H9.21094L17.9766 34.9297L26.7422 9.875ZM28.9998 32L29 31.9963V32H28.9998Z"
            />
          </svg>
        </a>
      </NavLeft>
      <NavRight>
        <a href={CV} target="_blank" rel="noreferrer">
          <NavResumeBtn>Mon CV</NavResumeBtn>
        </a>
      </NavRight>
    </NavContainer>
  );
}

export default Navbar;
