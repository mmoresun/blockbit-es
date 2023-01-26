import styled from "styled-components";
import { device } from "../../../utils/media-queries";

export const CardWrapper = styled.div`
 display: flex;
 -webkit-box-pack: start;
 justify-content: flex-start;
 padding: 48px;
 background-color: rgb(230, 237, 253);
 border-radius: 30px;
 width: 100%;
 max-width: 820px;
 margin-top: 80px;
 min-height: 366px;

 @media ${device.laptop} {
 min-height: unset;
 padding: 32px;
 position: relative;
}

@media ${device.tablet} {
 padding: 32px;
 position: relative;
}
 `;

export const CardTextWrapper = styled.div`
 display: flex;
 -webkit-box-pack: start;
 place-content: space-between flex-start;
 flex-direction: column;
 width: 100%;
 max-width: 457px;
 `;

export const CardH3Title = styled.h3`
 font-size: 32px;
 font-weight: 700;
 color: rgb(41, 130, 226);
 line-height: 38px;
 margin-bottom: 32px;

 @media ${device.laptop} {
 font-size: 24px;
 line-height: 150%;
 max-width: 350px;
 }
 @media ${device.tablet} {
 max-width: 250px;
 }

 @media ${device.mobile} {
 font-size: 18px;
 line-height: 150%;
 }
 `;

export const CardIMG = styled.img`
 height: 250px;
 width: auto;
 position: relative;
 align-self: flex-end;
 left: 135px;
 top: 70px;

@media ${device.laptop} {
 height: 200px;
 top: -30px;
 right: -30px;
 left: unset;
 position: absolute;
}

@media ${device.tablet} {
 height: 130px;
 top: -40px;
 right: -10px;
 left: unset;
 position: absolute;
}

@media ${device.mobile} {
 height: 110px;
 top: -30px;
 right: -5px;
 left: unset;
 position: absolute;
}
`;

export const CardText = styled.div`
font-size: 16px;
 line-height: 24px;
 color: rgb(110, 119, 140);
`;

export const CardRecommendText = styled.div`
 font-size: 16px;
 line-height: 24px;
 font-weight: 700;
 margin: 24px 0px 8px;
 color: rgb(110, 119, 140);
`;