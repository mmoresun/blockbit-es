import styled from "styled-components";

import { device } from "../../utils/media-queries";

const StyledInput = styled.input`
 width: 100%;
 max-width: 295px;
 height: 48px;
 border-radius: 30px;
 color: rgb(110, 119, 140);
 border: none;
 outline: none;
 font-size: 16px;
 padding: 12px 24px;
 background-color: #FFFFFF;
 box-sizing: border-box; 

 @media ${device.tablet} {
    max-width: none;
  }
`;
export default StyledInput;