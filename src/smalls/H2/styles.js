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
line-height: 120%;

@media ${device.tablet} {
	font-size: 42px;
 }

 @media ${device.mobile} {
 font-size: 32px;
 line-height: 38px;
 }

::after {
 position: relative;
 top: 16px;
 left: ${props => props.underline === "left" && "0px"};
 right: ${props => props.underline === "center" && "calc(50% - 95px)"};
 width: 100px;
 height: 2px;
 background-color: rgb(0, 255, 202);
 display: block;
 margin-bottom: 80px;
 content: "";
 /* if underline is not set, hide ::after element */
 display: ${props => !props.underline && "none"};
}
`;



export default StyledH2;
