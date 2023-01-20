import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledHeaderLogoWrapper = styled.img`
  width: 198px;  
  margin-right: 100px;

  
@media ${device.laptop} {
    margin-right: 24px;
}

@media ${device.tablet} {
    margin-right: 24px;
}

`;

export default StyledHeaderLogoWrapper;