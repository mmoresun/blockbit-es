import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledFooterContentWrapper = styled.div`
 width: 100%;
 max-width: 1030px;
 display: flex;
 -webkit-box-pack: justify;
 justify-content: space-between;
 color: rgb(255, 255, 255);

 @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2,minmax(0px,1fr));
    justify-items: flex-start;
 }
 
`;

export default StyledFooterContentWrapper;