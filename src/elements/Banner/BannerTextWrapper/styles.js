import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledBannerTextWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 -webkit-box-pack: center;
 justify-content: center;
 max-width: 400px;
 margin-right: 50px;
 z-index: 2;

 @media ${device.tablet} {
 margin-right: 0px;
 }
`;

export default StyledBannerTextWrapper;