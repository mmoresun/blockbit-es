import styled from "styled-components";
import { device } from '../../utils/media-queries';

export const CollabWrapper = styled.div`
 width: 100%;
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 background: rgb(245, 248, 254);
 padding: 160px 0px 80px;
 margin-bottom: 160px;

 @media ${device.laptop} {
 padding: 80px 48px 60px;
 margin-bottom: 80px;
 }

 @media ${device.tablet} {
 padding: 80px 48px 40px;
 margin-bottom: 80px;
 }

 @media ${device.mobile} {
 padding: 80px 20px 40px;
 margin-bottom: 80px;
 }
 `;

export const CollabContentWrapper = styled.div`
 width: 100%;
 max-width: 820px;
 display: flex;
 -webkit-box-pack: justify;
 justify-content: space-between;
 
 @media ${device.laptop} {
 gap: 40px;
 }

`;

export const CollabColumnWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 max-width: 500px;
`;

export const CollabLogo = styled.img`
 width: 293px;
 height: auto;
 border-radius: 30px;

 @media ${device.tablet} {
  width: 50%;
 align-self: flex-start;
 border-radius: 15px;
 }
`;