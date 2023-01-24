import styled from "styled-components";

import { device } from "../../utils/media-queries";

const StyledP = styled.p`

/* P text color settings: red by default (it means error), white (#FFFFFF) and grey (#6E778C) set by user in props */
color: red;
color: ${props => props.pColor === "grey" && "#6E778C"};
color: ${props => props.pColor === "white" && "#FFFFFF"};
color: ${props => props.pColor === "blue" && "rgb(41, 130, 226)"};

/* Margin settings */
margin: ${props => props.pMargin};

/* other settings */
font-style: normal;
font-weight: 400;
font-size: 16px;
padding: 0 0 1px;

@media ${device.mobile} {
font-size: ${props => props.small && "13px"};
}
`;


export default StyledP;

