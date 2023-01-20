import styled from "styled-components";
import { device } from '../../../utils/media-queries'

const StyledHeaderContentWrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 24px 100px;
    box-sizing: border-box; 

    @media ${device.desktop} {
    padding: 24px 60px;
 }
    @media ${device.laptop} {
        padding: 24px;
    }

    @media ${device.tablet} {
        padding: 0;
  }

`;

export default StyledHeaderContentWrapper;