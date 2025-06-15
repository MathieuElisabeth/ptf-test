import styled from "styled-components";

/* Top Half of card, image. */

export const PropertyImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
/* Bottom Card Section */

export const PropertyDescription = styled.div`
  background: rgba(0, 0, 64, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: white;
  font-size: 13px;
  /* font-weight: bold; */
  height: 15em;
  width: 100%;
  position: absolute;
  bottom: 0em;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  text-align: center;

  h1 {
    margin: 0;
  }
`;

/* Social Icons */

export const PropertySocialIcons = styled.div`
  width: 1em;
  height: 1em;
  padding: 20px;
  color: #fff;
  position: absolute;
  bottom: 0px;
  left: 0px;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  :hover {
    color: var(--white);
    cursor: pointer;
  }
`;

export const ImageOverlay = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  /* top:30%; */
  opacity: 0.4;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
  color: black;
  font-size: 1.2em;
`;

// Card

export const PropertyCard = styled.div`
  height: 18em;
  width: 300px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  z-index: 5;

  /* :hover ${PropertyDescription} {
    height:0em;
    padding:0px 1em;
  } */

  :hover ${PropertyImage} {
    height: 18em;
  }

  :hover ${ImageOverlay} {
    opacity: 0;
  }

  .fa-github {
    padding: 5px;
    border-radius: 50%;
    transition: all ease-out 0.3s;
  }

  :hover .fa-github {
    background: rgba(0, 0, 64, 0.25);
  }
`;
export const LanguagesContainer = styled.div`
  margin: 10px 0;
`;

/* ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. */

export const LanguagesChip = styled.span`
  font-size: 10px;
  color: ${({ $textColor }) => $textColor};
  background-color: ${({ $bgColor }) => $bgColor};
  padding: 10px;
  margin: 2px;
  height: 0px;

  .MuiChip-label {
    padding: 0;
    font-weight: bold;
  }
`;
