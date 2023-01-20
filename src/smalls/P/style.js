import styled from "styled-components";

const StyledP = styled.p`

/* P text color settings: red by default (it means error), white (#FFFFFF) and grey (#6E778C) set by user in props */
color: red;
color: ${props => props.pColor === "grey" && "#6E778C"};
color: ${props => props.pColor === "white" && "#FFFFFF"};

/* other settings */
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 150%;
`;

export default StyledP;

