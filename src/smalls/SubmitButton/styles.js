import styled from "styled-components";
import { device } from "../../utils/media-queries";

const StyledSubmitButton = styled.button`
 display: flex;
 -webkit-box-pack: center;
 justify-content: center;
 -webkit-box-align: center;
 align-items: center;
 width: 100%;
 max-width: 190px;
 height: 48px;
 font-size: 16px;
 font-weight: 700; 
 color: ${props => props.enabled ? 'rgb(41, 130, 226)' : 'rgb(110, 119, 140)'};
 background-color: rgb(255, 255, 255);
 border-radius: 30px;
 border: none;
 text-decoration: none;
 cursor: pointer;
 transition: all 0.25s ease 0s;

@media ${device.mobile} {
 max-width: none;
 height: 48px;
}
`;
export default StyledSubmitButton;