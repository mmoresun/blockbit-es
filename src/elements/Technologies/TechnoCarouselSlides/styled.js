import styled from "styled-components";

import { device } from "../../../utils/media-queries";

export const StyledTechnoPrevSlide = styled.div`

display: none;

@media ${device.tablet} {
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-template-rows: repeat(2, 1fr);
 margin-bottom: 46px;
}

@media ${device.mobile} {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-bottom: 46px;
 }
`;

export const StyledTechnoNextSlide = styled.div`

display: none;

@media ${device.tablet} {

 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: repeat(2, 1fr);
 margin-bottom: 46px; 
}

@media ${device.mobile} {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
margin-bottom: 46px;
}

`;
