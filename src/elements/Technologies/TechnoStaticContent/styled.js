import styled from "styled-components";

import { device } from "../../../utils/media-queries";

export const StyledCardsWrapper = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: repeat(5, 1fr);
 grid-template-rows: 1fr 1fr;
 gap: 24px;
 padding: 48px 117px;
 background-color: rgb(245, 248, 254);
 border-radius: 35px;

 @media ${device.desktop} {
 padding: 48px;
 -webkit-box-align: center;
 place-items: center;
 }

 @media ${device.laptop} {
 padding: 20px;
 gap: 16px;
 }

 @media ${device.tablet} {
 display: none;
 }
 @media ${device.mobile} {
 display: none;
 }
`;

// export const StyledCardsCarousel = styled(Carousel)`
// display: none;
// @media ${device.tablet} {
//  display: block;
//  outline: none;
// }

// @media ${device.mobile} {
//  display: block;
//  outline: none;
// }

// `;