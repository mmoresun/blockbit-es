import styled from "styled-components";
import { Link } from "gatsby";
import { device } from "../../../utils/media-queries";

export const BurgerLogoLink = styled(Link)`
 position: fixed; 
 top: 0;
 left: 0; 
 padding: 8px 0 0 20px;
`;

export const BurgerIMG = styled.img`
 width: 101px;
`;

export const BurgerHeaderCanvas = styled.div`
width: 100%;
min-height: 51px;
position: fixed;
top: 0;
left: 0;
background-color: ${props => props.isScrolled ? 'rgb(41, 130, 226)' : 'transparent'};
transition: all 0.5s ease 0s;
`;

export const BurgerLinkWrapper = styled(Link)`

@media ${device.tablet}{
 font-weight: 700;
 color: rgb(255, 255, 255);
 font-size: 42px;
 line-height: 46px;
 text-decoration: none;
 cursor: pointer;
}

@media ${device.mobile} {
 font-size: 32px;
 line-height: 38px;
}
 `;

export const BurgerTextWrapper = styled.div`
 display: flex !important;
 flex-direction: column !important;
 gap: 32px !important;
 width: auto !important; 
`;

export const BurgerContentWrapper = styled.div`
display: flex !important;
flex-direction: column !important;
-webkit-box-pack: justify !important;
justify-content: space-between !important;
align-items: flex-start !important;
height: 100%;
max-height: 1000px;
padding: 70px 0 85px 35px; 
`;

