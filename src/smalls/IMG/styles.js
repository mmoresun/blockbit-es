import styled from "styled-components";

import { device } from "../../utils/media-queries";

const TechIMG = styled.img`
 height: auto;
 width: 60px !important;
 margin-bottom: 16px;

@media ${device.laptop} {
 width: 45px !important;
}

@media ${device.mobile} {
 width: 40px !important;
 margin-bottom: 8px;
}

`;
export default TechIMG;
