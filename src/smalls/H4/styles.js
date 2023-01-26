import styled from "styled-components";
import { device } from "../../utils/media-queries";

const StyledH4 = styled.h4`
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 120%;
color: #101820;

@media ${device.mobile} {
    max-width: 220px;
}

`;
export default StyledH4;