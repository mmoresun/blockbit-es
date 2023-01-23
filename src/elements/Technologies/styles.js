import styled from "styled-components";

import { device } from "../../utils/media-queries";

const TechnologiesWrapper = styled.div`
 width: 100%;
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 background-color: rgb(255, 255, 255);
 color: rgb(16, 24, 32);
 margin-bottom: 240px;

 @media ${device.desktop} {
    margin-bottom: 80px;
    padding: 0px 48px;
 }

 @media ${device.laptop} {
    margin-bottom: 80px;
    padding: 0px 48px;
 }

 @media ${device.tablet} {
    margin-bottom: 70px;
    padding: 0px 48px;
 }

 @media ${device.tablet} {
    margin-bottom: 70px;
    padding: 0px 20px;
 }

`;
export default TechnologiesWrapper;