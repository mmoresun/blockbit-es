import styled from "styled-components";
import { device } from "../../utils/media-queries";

const StyledH4 = styled.h4`
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 120%;
color: #101820;

@media ${device.tablet} {
    max-width: 98%;
}

@media ${device.mobile} {
    max-width: 100%;
    line-height: 150%;
}

`;
export default StyledH4;