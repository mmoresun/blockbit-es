import styled from "styled-components";
import { device } from '../../utils/media-queries';

export const PartnersWrapper = styled.div`
 width: 100%;
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 padding: 160px 0px;
 font-size: 16px;

 @media ${device.desktop} {
 padding: 80px 48px;
 margin-bottom: 65px;
 }

 @media ${device.laptop} { 
 padding: 80px 48px;
 margin-bottom: -15px;
 }

 @media ${device.tablet} { 
 padding: 80px 0px 80px 20px;
 
 } 
 `;

export const PartnersContentWrapper = styled.div`
 width: 100%;
 max-width: 1030px;
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 flex-direction: column;
 color: rgb(255, 255, 255);
 `;

export const PartnersTextWrapper = styled.div`
 text-align: center;
 max-width: 610px;
 margin-bottom: 120px;

 @media ${device.laptop} {
    margin-bottom: 40px;
 }

 @media ${device.tablet} {
 margin-bottom: 80px;
 }
 @media ${device.mobile} {
 margin-bottom: 48px;
 font-size: 18px;
 line-height: 24px;
 max-width: 220px;
 margin-right: 20px;
 }
`;

export const PartnerPicsWrapper = styled.div`
 width: 1030px;
 display: flex;
 -webkit-box-pack: justify;
 justify-content: space-between;
 max-height: 50px; 
 gap: 32px; 
 margin-bottom: 100px; 

 @media ${device.laptop} {
 margin-top: 0px; 
 gap: 32px;
 }
`;

export const PartnerIMGWrapper = styled.img`
    height: auto;
    max-height: 50px;
    max-width: 200px;
`;