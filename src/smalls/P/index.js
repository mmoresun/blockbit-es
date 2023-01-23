import React from 'react';
import StyledP from './style';

// P can be "white", "blue" or "grey", and can have margin, so don't forget to set it. 
// Example:
// <P pColor="white", pMargin="0 0 10px 0">Some text</P>

const P = (props) => {
    return (
        <StyledP pColor={props.pColor} pMargin={props.pMargin}>
            {props.children}
        </StyledP>
    );
}

export default P;
