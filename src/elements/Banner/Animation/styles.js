import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledAnimation = styled.div`

    width: 100%;
    max-width: 1200px;
    position: absolute;
    left: calc(50vw - 1200px);
    top: 60px;

   @media ${device.desktop} {
      width: 1200px;
      left: calc(50vw - 1200px);
   }

   @media ${device.tablet} {
      width: 900px;
      left: -600px;
      top: 50px;
   }

   @media ${device.mobile} {
      width: 800px;
      left: -500px;
      top: 50px;
   }
`;

export default StyledAnimation;