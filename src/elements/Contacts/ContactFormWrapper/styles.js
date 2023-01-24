import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledContactFormWrapper = styled.div`
    width: 100%;
    max-width: 1030px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;

    @media ${device.laptop} {
     flex-direction: column;
     gap: 40px;
  }
  `;
export default StyledContactFormWrapper;