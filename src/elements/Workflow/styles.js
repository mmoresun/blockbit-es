import styled from "styled-components";
import { device } from "../../utils/media-queries";

export const WorkflowWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 font-size: 16px;
 padding-bottom: 160px;

 @media ${device.laptop} {
 padding-bottom: 120px;
}

@media ${device.tablet} {
 padding-bottom: 80px;
}
`;

export const WorkflowContentWrapper = styled.div`
 width: 100%;
 max-width: 1030px;
 display: flex;
 flex-direction: column;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;

 @media ${device.laptop} {
 padding: 0px 48px;
 }

 @media ${device.tablet} {    
    text-align: center;
 }

 @media ${device.mobile} {
 padding: 0px 20px;
 text-align: center;
 max-width: 350px;
 }
`;

export const WorkflowTextWrapper = styled.div`
font-size: 16px;
 line-height: 24px;
 max-width: 400px;
 text-align: center;
 color: rgb(110, 119, 140);
 margin-bottom: 80px;

 @media ${device.mobile} {
 max-width: 300px;
 }
`;
