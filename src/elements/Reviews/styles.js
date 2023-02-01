import styled from "styled-components";
import { device } from "../../utils/media-queries";

export const ReviewWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 padding: 80px 0px;
 font-size: 16px;
 background-color: rgb(245, 248, 254);

 @media ${device.tablet} {
 padding: 40px 0px 16px;
 }
`;

export const ReviewSlideWrapper = styled.div`
display: flex;
justify-content: center;
`;

export const ReviewContentWrapper = styled.div`
 width: 100%;
 max-width: 820px;
 display: flex;
 flex-direction: column; 
 min-height: 385px;
 position: relative;
 padding: 40px 48px;
 margin-bottom: 28px; 

 @media ${device.desktop} {
 margin-bottom: 0px;
 min-height: 0px;
 }

 @media ${device.laptop} {
    margin-bottom: 0px;
 }

 @media ${device.laptop} {
    margin-bottom: 18px;
 }

 @media ${device.mobile} {
    padding: 40px 20px;
    margin-bottom: 18px;
 }

`;

export const ReviewAuthorWrapper = styled.div`
 display: flex;
 flex-direction: column;
 font-weight: 700;
 align-self: flex-end;
 margin-top: 70px;
 color: rgb(110, 119, 140);
 max-width: 185px;
 text-align: left; 
`;

export const ReviewText = styled.h3`
 font-size: 32px;
 font-weight: 600;
 line-height: 38px;
 max-width: 715px;
 color: rgb(110, 119, 140);
 text-align: left;  

 @media ${device.laptop} {
 font-size: 24px;
 line-height: 150%;
 }

 @media ${device.mobile} {
 text-align: left;
 font-weight: 400;
 font-size: 18px;
 line-height: 150%;
 }
`;

export const ReviewIMG = styled.img`
 border: 0;
 vertical-align: top;
 width: 100%;
 display: inline-block;
 pointer-events: none;
 width: 56px;
 height: 38px;
 position: absolute;
 left: -45%;
 top: 0px;

 @media ${device.desktop} {
 position: absolute;
 left: -40%;
 top: 0px;
 }

 @media ${device.tablet} {
 position: absolute;
 left: -40vw;
 top: 10px;
 }
`;

export const ReviewAuthorText = styled.h3`
 font-size: 32px; 
`;

export const ReviewCompanyText = styled.h3`
 font-size: 16px;
 font-weight: 400;
 margin-top: 8px;
`;