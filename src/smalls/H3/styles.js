import styled from "styled-components";
import { device } from "../../utils/media-queries";

const StyledH3 = styled.h3`

/* H3 text color settings: red by default (it means error), blue (#101820) and lightblue (2982E2) set by user in props */

color: red;
color: ${props => props.h3Color === "blue" && "#101820"};
color: ${props => props.h3Color === "lightblue" && "#2982E2"};

/* other settings */

font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 120%;

@media ${device.laptop} {    
font-size: ${props => props.type === 'collab' && '24px'};
line-height: ${props => props.type === 'collab' && '150%'};

}

@media ${device.tablet} {
    font-size: ${props => props.type === 'collab' && '24px'};
    line-height: ${props => props.type === 'collab' && '150%'};
}

@media ${device.mobile} {
    font-size: ${props => props.type === 'collab' && '18px'};
    line-height: ${props => props.type === 'collab' && '150%'};
}
`;
export default StyledH3;