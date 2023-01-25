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
line-height: ${props => props.high && '150%'};

@media ${device.mobile} {
font-size: ${props => props.small && "13px"};
margin: ${props => props.high && '24px 0px 80px'};
max-width: ${props => props.high && '215px'};
}
`;


export default StyledP;

