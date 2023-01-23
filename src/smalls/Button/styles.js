import styled from "styled-components";

import { device } from "../../utils/media-queries";

const StyledBtn = styled.button`
/* button height settings: is button calls with "big" or "small" prop */
height: ${props => props.buttonSize === "big" && "122px"};
height: ${props => props.buttonSize === "small" && "48px"};

/* text color when button is enabled and disabled */
color: ${props => props.enabled ? "#2982E2" : "#6E778C"};

/* other button settings */
border: none;
width: 100%;
max-width: 190px;
background: #FFFFFF;
border-radius: 30px;
cursor: pointer;
display: inline-block;


/* button text format settings */
font-weight: 700;
font-size: 16px;
line-height: 150%;
text-align: center;

/* implementing hover behavior: color is changing only when the button is enabled */
:hover {
 color: ${props => props.enabled ? "#1A67BB" : "#6E778C"};
transition: all 0.25s ease 0s;
}

@media ${device.mobile} {
	max-width: ${props => props.headerButton ? "none" : "190px"};
    height: 48px;
  }

`;

export default StyledBtn;
