import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledAttributesGrid = styled.div`
 width: 100%;
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: 1fr 1fr;
 gap: 40px 20px;

 @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 32px;
 }

 @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 32px;
 } 
`;
export default StyledAttributesGrid;