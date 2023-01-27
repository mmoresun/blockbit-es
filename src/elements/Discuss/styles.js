import styled from "styled-components";
import { device } from "../../utils/media-queries";

/* Discuss block wrapper */
export const StyledDiscuss = styled.div`
    width: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(41, 130, 226);
`;

/* content wrapper for Discuss block */
export const StyledDiscussContentWrapper = styled.div`
 width: 100%;
 max-width: 1030px;
 padding: 80px 0px;
 display: flex;
 -webkit-box-pack: justify;
 justify-content: space-between;
 -webkit-box-align: center;
 align-items: center;
 background-color: rgb(41, 130, 226);
 color: rgb(16, 24, 32);

 @media ${device.desktop} {
 padding: 80px 48px;
 gap: 32px;
 }

 @media ${device.laptop} {
 padding: 48px;
 gap: 32px;
 }

 @media ${device.mobile} {
 flex-direction: column;
 padding: 32px 20px;
 gap: 32px; 
 }
`;

/* wrapper for H2 text left from the button*/
export const StyledDiscussTitleWrapper = styled.div`
max-width: 400px;
`;