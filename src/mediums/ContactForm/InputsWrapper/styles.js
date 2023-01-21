import styled from "styled-components";

import { device } from "../../../utils/media-queries";

const StyledInputsWrapper = styled.div`
 width: 100%;  
 display: flex;
 flex-direction: row; 
 gap: 20px;

 @media ${device.tablet} {
	flex-direction: column; 
    gap: 32px;
  }

`;

export default StyledInputsWrapper;