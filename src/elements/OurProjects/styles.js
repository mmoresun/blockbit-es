import styled from "styled-components";
import { device } from '../../utils/media-queries';
import { Link } from "gatsby";

export const OurProjectWrapper = styled.div`
 width: 100%;
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 background: rgb(245, 248, 254);
 padding: 80px;

@media ${device.desktop} {
 padding: 40px 48px;
}

@media ${device.laptop} {
 padding: 40px 48px;
}

@media ${device.mobile} {
 padding: 40px 20px;
}
`;

export const OurProjectContentWrapper = styled.div`
 width: 100%;
 max-width: 1030px;
 display: flex;
 flex-direction: column;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center; 
`;

export const OurProjectTitleWrapper = styled.div`
 width: 100%;
 display: flex;
 -webkit-box-pack: justify;
 justify-content: space-between;
 align-items: start;
`;

export const OurProjectListWrapper = styled.div`
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 gap: 20px;

 @media ${device.tablet} {
 gap: 32px;
 flex-direction: column;
}
 @media ${device.mobile} {
 gap: 32px;
 flex-direction: column;
}
`;


export const TopProjectButton = styled(Link)`
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 width: 100%;
 max-width: 190px;
 margin-top: 15px;
 height: 48px;
 font-size: 16px;
 font-weight: 700;
 color: rgb(255, 255, 255);
 background-color: rgb(41, 130, 226);
 border-radius: 30px;
 border: none;
 text-decoration: none;
 cursor: pointer;
 transition: all 0.25s ease 0s;

 @media ${device.tablet} {
 display: none; 
 }
 @media ${device.mobile} {
 display: none; 
 }

 `;

export const BottomProjectButton = styled(Link)`
 display: none;
 background-color: transparent;
 color: rgb(41, 130, 226);
 margin-top: 35px;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 width: 100%;
 max-width: 190px;
 height: 48px;
 font-size: 16px;
 font-weight: 700;
 border-radius: 30px;
 border: none;
 text-decoration: none;
 cursor: pointer;
 transition: all 0.25s ease 0s;

 @media ${device.tablet} {
 display: flex;
}
`;

export const ProjectIMG = styled.img`
 width: 100%;
 height: auto;
 background-color: grey;
 border-radius: 30px;
 transition: all 0.3s ease 0s;

 @media ${device.mobile} {
 border-radius: 15px;
 }

&:hover {
 transform: scale(1.05);
}

`;

export const ProjectTitle = styled.h4`
 margin: 24px 0px 16px; 
 font-size: 24px;
 font-weight: 700;
 transition: all 0.3s ease 0s;

 @media ${device.tablet} {
 font-size: 24px;
 margin: 8px 0px 4px;
 line-height: 100%;
 }

 @media ${device.mobile} {
 font-size: 16px;
 margin: 8px 0px 0px;
 line-height: 150%;
 overflow-wrap: break-word;
 }

 &:hover {
 color: rgb(41,130,226);
 }
`;

