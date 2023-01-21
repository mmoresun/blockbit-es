import styled from "styled-components";

import { device } from '../../utils/media-queries'

const StyledFooter = styled.div`
 width: 100%;
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 background-color: rgb(16, 24, 32);
 padding: 160px 0px 70px;
 font-size: 16px;

 @media ${device.desktop} {
 padding: 70px 80px;
 }
 @media ${device.laptop} {
 padding: 70px 40px 24px;
 }
 @media ${device.tablet} {
 padding: 70px 40px 24px;
 }
 @media ${device.mobile} {
 padding: 70px 20px 24px;
 }

`;
export default StyledFooter;