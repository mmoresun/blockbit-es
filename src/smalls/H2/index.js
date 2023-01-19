import React from 'react';
import StyledH2 from './styles';

// H2 can be "white" (#FFFFFF), "black" (#000000), "blue" (#101820) and "grey" (#6E778C), don't forget to set it. 
// Example:
// <H2 h2Color="grey">Some text</H2>

const H2 = (props) => {
    return (
        <StyledH2 h2Color={props.h2Color}>
           {props.children} 
        </StyledH2>
    );
}

export default H2;
