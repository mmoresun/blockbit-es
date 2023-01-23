import styled from "styled-components";
import { device } from "../../../utils/media-queries";

const StyledAttributesCard = styled.div`
 padding: 32px;
 display: flex;
 flex-direction: column;
 -webkit-box-pack: justify;
 justify-content: space-between;
 align-items: flex-start;
 border-radius: 30px;
 gap: 20px;
 background-color: rgb(245, 248, 254);
 max-width: 400px;
 min-height: 426px;
 box-shadow: rgb(0 0 0 / 4%) 0px 10px 17px;

 @media ${device.tablet} {
    max-width: unset;
    min-height: unset;
    -webkit-box-pack: unset;
    justify-content: unset;
    height: min-content;
 }

 @media ${device.mobile} {
    min-height: unset;
 }

 `;
export default StyledAttributesCard;