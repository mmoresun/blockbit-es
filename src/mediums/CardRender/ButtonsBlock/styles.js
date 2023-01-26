import styled from "styled-components";

import { device } from "../../../utils/media-queries";

export const ButtonRenderWrapper = styled.div`
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

@media ${device.mobile} {
    padding: 0 20px;
}
 }; 
`;

export const CardButton = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;
 justify-self: center;
 min-width: 257px;
 height: 64px;
 border: none;
 font-size: 16px;
 text-decoration: none;
 color: rgb(41, 130, 226); 
 background: ${props => props.selected ? 'rgb(230, 237, 253)' : 'transparent'};
 border-radius: 30px;
 font-weight: 700;
 margin-bottom: 100px;
`;

export const MagicWrapper = styled.div`
 height: 64px;
 overflow-y: hidden;
 width: 100%; 
`;

