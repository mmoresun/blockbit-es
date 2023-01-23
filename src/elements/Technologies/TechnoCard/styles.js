import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledTechnoCard = styled.div`
 display: flex;
 flex-direction: column;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 width: 150px;
 height: 150px;
 border-radius: 15px;
 background-color: rgb(255, 255, 255);
 box-shadow: rgb(0 0 0 / 4%) 0px 10px 17px 0px;

 @media ${device.laptop} {
 width: 115px;
 height: 115px;
 }

 @media ${device.mobile} {
    width: 100px;
    height: 100px;
 }
`;

export default StyledTechnoCard;