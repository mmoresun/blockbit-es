import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledBannerContentWrapper = styled.div`
 
 width: 100%;
 max-width: 1200px;
 min-height: 950px;
 display: flex;
 -webkit-box-pack: justify;
 justify-content: space-between;
 padding: 200px 0px 88px;

 @media ${device.desktop} {
 padding: 160px 100px;
 }

 @media ${device.laptop} {
 padding: 130px 48px 88px;
 }

 @media ${device.tablet} {
 min-height: unset;
 padding: 130px 48px 88px;
 }

 @media ${device.mobile} {
 padding: 130px 20px 88px;
 min-height: unset;
}
`;

export default StyledBannerContentWrapper;