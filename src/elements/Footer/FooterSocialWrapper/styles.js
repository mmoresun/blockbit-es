import styled from "styled-components";
import { device } from "../../../utils/media-queries";

const StyledFooterSocialWrapper = styled.div`
 display: flex;
 -webkit-box-pack: justify;
 justify-content: space-between;
 align-items: flex-start;
 flex-direction: column;
 font-size: 16px;
 font-weight: 700;

 @media ${device.tablet} {
 width: 100%;
 order: 3;
 grid-area: 2 / 1 / 3 / 3;
 justify-self: center;
 margin-top: 65px;
 -webkit-box-align: center;
 align-items: center;
 gap: 48px;
 position: relative;
 }
`;

export default StyledFooterSocialWrapper;