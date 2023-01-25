import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledBannerTextWrapper = styled.div`
 width: 100%;
 max-width: 400px;
 display: flex;
 flex-direction: column;
 -webkit-box-pack: center;
 justify-content: center; 
 margin-right: 50px;
 z-index: 2;

 @media ${device.tablet} {
 margin-right: 0px;
 width: 50%;
 }
 @media ${device.mobile} {
    width: 100%;
 }
`;

export default StyledBannerTextWrapper;