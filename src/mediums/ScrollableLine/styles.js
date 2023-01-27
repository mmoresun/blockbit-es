import styled from "styled-components";
import { device } from "../../utils/media-queries";

export const ScrollLineWrapper = styled.div`
max-width: 1030px;
width: 100%;
display: flex;
justify-content: center;
`;

export const Container = styled.div`
 width: 100%; 
`;

export const Parent = styled.div`
 display: flex;
 flex-direction: column; 
 align-items: center; 
`;

export const ContentWrapper = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 overflow-x: auto;
 overflow-y: hidden; 
 scroll-behavior: smooth; 
 
 @media ${device.laptop} {
 padding: 0 48px;
}

 @media ${device.mobile} {
    padding: 0 20px;
} 
`;

export const MagicWrapper = styled.div`
 height: 64px;
 overflow-y: hidden;
 width: 100%; 
`;

