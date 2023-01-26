import styled from "styled-components";
import { device } from "../../utils/media-queries";

export const CardsContainer = styled.div`
width: 100%;
 max-width: 1030px;
 display: flex;
 flex-direction: column;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;

 @media ${device.laptop} {
 padding: 0px 48px;
 }

 @media ${device.mobile} {
 padding: 0px 20px;
 } 
`;