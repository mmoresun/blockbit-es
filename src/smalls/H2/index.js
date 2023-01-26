import React from 'react';
import StyledH2 from './styles';

// H2 can be "white" (#FFFFFF), "black" (#000000), "blue" (#101820) and "grey" (#6E778C), don't forget to set it. 
// H2 can be underlined by setting "underline" attribute to "left" or "center". If "underline" attribute is not set, H2 will not be underlined.
// Example:
// <H2 h2Color="grey" underline="left">Some text</H2>

const H2 = (props) => {
    return (
        <StyledH2 h2Color={props.h2Color} underline={props.underline} type={props.type}>
           {props.children} 
        </StyledH2>
    );
}

export default H2;
