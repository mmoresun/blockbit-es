import styled from "styled-components";
import { device } from "../../utils/media-queries";

const StyledContacts = styled.div`
width: 100%;
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 padding: 80px 0px;
 font-size: 16px;
 background-color: rgb(41, 130, 226);

 @media ${device.desktop} {
	padding: 40px 48px;
  }

  @media ${device.mobile} {
	padding: 40px 20px;
  }
`;

export default StyledContacts;