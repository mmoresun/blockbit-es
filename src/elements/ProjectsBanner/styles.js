import styled from "styled-components";
import { device } from "../../utils/media-queries";
import { Link } from "gatsby";

export const StyledBanner = styled.div`
 width: 100%;
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 background: linear-gradient(80.9deg, rgb(41, 130, 226) 33.12%, rgb(0, 255, 202) 120.72%);
 color: rgb(255, 255, 255);
`;

export const ProjectsBannerContentWrapper = styled.div`
 width: 100%;
 max-width: 610px;
 display: flex;
 -webkit-box-pack: justify;
 justify-content: space-between;
 -webkit-box-align: center;
 align-items: center;
 padding: 272px 0px 160px;

@media ${device.laptop} {
 padding: 180px 40px 80px;
}
@media ${device.tablet} { 
 padding: 100px 40px 48px;
}

@media ${device.mobile} { 
 padding: 100px 35px 48px;
}
`;

export const ProjectBannerTextWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column; 
 -webkit-box-align: center;
 align-items: center;
 -webkit-box-pack: justify;
 justify-content: space-between;
 gap: 32px;
`;

export const ProjectDesc = styled.p`
font-size: 16px;
 width: 100%;
 max-width: 600px;
 line-height: 150%;
 text-align: center;
`;

export const ProjectTitle = styled.h1`
 font-weight: 800;
 font-size: 56px;
 letter-spacing: -0.01em;
 line-height: 72px;
 text-align: center;
`;

export const MyProjectsWrapper = styled.div`
background-color: rgb(245,248,254)
width: 100%;
min-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 50px;
`;

export const MyProjectLink = styled(Link)`
color: #000000;
 font-weight: 700;
 font-size: 54px;
 line-height: 120%;

@media ${device.tablet} {
 font-size: 40px;
 line-height: 46px;
}
`;