import styled from "styled-components";

const StyledHeader = styled.header`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 /* background-color: '#2982E2'; */
 background-color: ${props => props.isScrolled ? '#2982E2': 'transparent'};
 transition: all 0.5s ease 0s;
 width: 100%;
 min-height: 114px; 
 z-index: 6;  
 position: fixed;
 top: 0px;
 top: 0;   
`;
export default StyledHeader;

