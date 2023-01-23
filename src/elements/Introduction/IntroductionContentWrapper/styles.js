import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledIntroContentWrapper = styled.div`
    width: 100%;
    max-width: 1030px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;

@media ${device.laptop} {
    flex-direction: column;
    gap: 40px;
}`;
export default StyledIntroContentWrapper;