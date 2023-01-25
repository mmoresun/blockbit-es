import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledLottieWrapper = styled.div`
    width: 1600px;

    @media ${device.desktop} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: 50%;
    }

    @media ${device.mobile} {
        width: 0px;
    }
`;

export default StyledLottieWrapper;