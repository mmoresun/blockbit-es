import styled from "styled-components";

import { device } from "../../utils/media-queries";

const StyledH2 = styled.h2`

/* H2 text color settings: red by default (it means error), 
black (#000000), white (#FFFFFF), blue (#101820) and grey (#6E778C) set by user */

color: red;
color: ${props => props.h2Color === "black" && "#000000"};
color: ${props => props.h2Color === "white" && "#FFFFFF"};
color: ${props => props.h2Color === "blue" && "#101820"};
color: ${props => props.h2Color === "grey" && "#6E778C"};

/* other settings */
/* font-style: normal; */
font-weight: 700;
font-size: 54px;
line-height: 65px;

@media ${device.tablet} {
	font-size: 42px;
  }

  @media ${device.mobile} {
    font-size: 32px;
    line-height: 38px;
  }
  

`;



export default StyledH2;
