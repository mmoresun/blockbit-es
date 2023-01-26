import styled from "styled-components";

import { device } from "../../utils/media-queries";

const TechIMG = styled.img`
 height: auto;
 width: 60px !important; 

@media ${device.laptop} {
 height: 45px !important; 
}

@media ${device.mobile} {
 width: 40px !important;
 margin-bottom: -1px;
}

`;
export default TechIMG;
