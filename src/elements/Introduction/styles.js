import styled from "styled-components";

import { device } from "../../utils/media-queries";

const StyledIntroduction = styled.div`
 width: 100%; 
 color: rgb(255, 255, 255);
 background-color: rgb(16, 24, 32);
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 padding: 160px 0px;

 @media ${device.desktop} {
	padding: 100px 48px;
  }

 @media ${device.laptop} {
    padding: 60px 48px;
 }

 @media ${device.tablet} {
    padding: 60px 48px;
 }

 @media ${device.tablet} {
    padding: 60px 20px;
 }

 `;

export default StyledIntroduction;