import React from 'react';
import StyledH3 from './styles';

// H3 can be "blue" or "lightblue", don't forget to set the color. 
// Example:
// <H3 h3Color="blue">Some text</H3>

const H3 = (props) => {
    return (
        <StyledH3 h3Color={props.h3Color}>
            {props.children}
        </StyledH3>
    );
}

export default H3;
