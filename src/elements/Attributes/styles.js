import styled from "styled-components";

import {device} from '../../utils/media-queries';

const StyledAttrWrapper = styled.div`
 width: 100%;
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 background-color: rgb(255, 255, 255);
 color: rgb(16, 24, 32);
 padding: 160px 0px 240px;

 @media ${device.laptop} {
    padding: 120px 48px;
 }
 @media ${device.mobile} {
    padding: 80px 20px;
 }
`;
export default StyledAttrWrapper;