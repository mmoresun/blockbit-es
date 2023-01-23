import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledAttrCardTextWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 gap: 32px;
 line-height: 150%; 

 @media ${device.mobile} {
    gap: 16px;
 }
`;

export default StyledAttrCardTextWrapper;