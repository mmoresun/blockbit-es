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

opacity: ${props => props.type === "partners" && '.7'};

/* other settings */
font-weight: 700;
font-size: 54px;
line-height: 120%;

@media ${device.tablet} {
	font-size: 42px;
	line-height: 46px;
 }

 @media ${device.mobile} {
	line-height: 110%;
	font-size: 32px;
	line-height: ${props => props.type === 'introduction' && '38px'};
	/* font-size: ${props => props.type === 'introduction' && '32px'}; */
	max-width: ${props => props.type === 'discuss' && 'none'};
	font-size: ${props => props.type === 'discuss' && '42px' };
	font-size: ${props => props.type === 'partners' && '18px'};
	font-size: ${props => props.type === 'partners' && '18px'};    
 }

::after {
 position: relative;
 top: 16px;
 left: ${props => props.underline === "left" && "0px"};
 left: ${props => props.underline === "center" && "calc(50% - 95px)"};
 width: 190px;
 width: ${props => props.underline === 'left' && '100px'};
 height: 2px;
 background-color: rgb(0, 255, 202);
 display: block;
 margin-bottom: 80px;
 /* we need 40px margin-bottom at workflow block, so we have to add this value */
 margin-bottom: ${props => props.underline === "center" && "40px"};
 content: "";
 /* if underline is not set, hide ::after element */
 display: ${props => !props.underline && "none"};

 @media ${device.mobile}
 {width: ${props => props.underline === "left" ? '43px' : '100px'};
 height: 2px;
 left: ${props => props.underline === "left" && "0px"};
 left: ${props => props.underline === "center" && "calc(25%)"};
 align-self: center;
}
};
`;

export default StyledH2;
