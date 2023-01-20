import React from 'react';
import StyledP from './style';

// P can be "white" or "grey", so don't forget to set it. 
// Example:
// <P pColor="white">Some text</P>

const P = (props) => {
    return (
        <StyledP pColor={props.pColor}>
            {props.children}
        </StyledP>
    );
}

export default P;
