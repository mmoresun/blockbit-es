import styled from "styled-components";
import { device } from "../../utils/media-queries";

const StyledLinkButton = styled.a`
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 width: 100%;
 max-width: 190px;
 max-width: ${props => props.type  === 'bannerButton' && '100%'};
 max-width: ${props => props.type === 'discussButton' && '190px'};
 max-width: ${props => props.type === 'bannerButton' && '400px'};
 height: 48px;
 height: ${props => props.type === 'discussButton' && '112px'};
 font-size: 16px;
 font-weight: 700;
 color: rgb(41, 130, 226);
 color: ${props => props.type === 'collabButton' && 'rgb(255, 255, 255)'};
 color: ${props => props.type === 'projectsButton' && 'rgb(255, 255, 255)'};
 background-color: rgb(255, 255, 255);
 background-color: ${props => props.type === 'collabButton' && 'rgb(41, 130, 226)'};
 background-color: ${props => props.type === 'projectsButton' && 'rgb(41, 130, 226)'};
 border-radius: 30px;
 border-radius: ${props => props.type === 'discussButton' && '60px'};
 border: none;
 text-decoration: none;
 cursor: pointer;
 margin-top: none;
 margin-top: ${props => props.type === 'projectsButton' && '15px'};
 margin-top: ${props => props.type === 'collabButton' && '80px'};
 transition: all 0.25s ease 0s; 
 align-self: ${props => props.type === 'bannerButton' && 'flex-end'};

@media ${device.tablet} {
 display: ${props => props.type === 'projectsButton' && 'none'}; 
 display: ${props => props.type === 'headerButton' && 'none'};
 max-width: ${props => props.type === 'bannerBurgerButton' && '160px'};
}

@media ${device.mobile} {
 max-width: ${props => props.type === 'discussButton' && 'none'};
 height: ${props => props.type === 'discussButton' && '48px'};
 width: ${props => props.type === 'collabButton' && '100%'};
 max-width: ${props => props.type === 'collabButton' && 'none'};
}

:hover {
 color: rgb(26, 103, 187);
}

`;

export default StyledLinkButton;



























// const StyledBtn = styled.a`
// /* button height settings: is button calls with "big" or "small" prop */
// height: ${props => props.buttonSize === "big" && "112px"};
// height: ${props => props.buttonSize === "small" && "48px"};

// /* text color when button is enabled and disabled */
// color: ${props => props.enabled ? "#2982E2" : "#6E778C"};

// /* other button settings */
// display: flex; 
// background: #FFFFFF;
// align-items: center;
// justify-content: center;
// border: none;
// width: 100%;
// max-width: 190px;
// border-radius: 30px;
// border-radius: ${props => props.buttonSize === "big" && "60px"};
// cursor: pointer;

// /* background color settings */
// background: ${props => props.type === "collab" && "rgb(41, 130, 226)"};

// /* if button uses in banner block, it have to be 100% wide*/

// max-width: ${props => props.bannerButton && '100%'};

// /* button text format settings */
// font-weight: 700;
// font-size: 16px;
// line-height: 150%;
// text-align: center;

// /* implementing hover behavior: color is changing only when the button is enabled */
// :hover {
// color: ${props => props.enabled ? "#1A67BB" : "#6E778C"};
// transition: all 0.25s ease 0s;
// }

// @media ${device.mobile} {
// 	max-width: ${props => props.headerButton ? "190px": "none" };
// height: 48px;
// }
// `;

// export default StyledBtn;
