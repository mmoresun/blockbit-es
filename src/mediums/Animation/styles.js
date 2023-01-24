import styled from "styled-components";

import { device } from "../../utils/media-queries";

const StyledAnimation = styled.div`

 width: 1600px;
 position: relative; 

 @media ${device.desktop} {
    width: 100%;
 }

 @media ${device.mobile} {
    width: 0px;
 }
`;

export default StyledAnimation;