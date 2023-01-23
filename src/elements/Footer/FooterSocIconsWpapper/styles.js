import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledFooterSocIconsWpapper = styled.div`
 display: flex;
 -webkit-box-pack: justify;
 justify-content: space-between;
 -webkit-box-align: center;
 align-items: center;
 gap: 42px;

 @media ${device.tablet} {
 position: relative;
 border-top: 2px solid rgb(0, 255, 202);
 padding-top: 20px;
 }

`;
export default StyledFooterSocIconsWpapper;