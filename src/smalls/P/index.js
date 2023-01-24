import React from 'react';
import StyledP from './style';

// P can be "white", "blue" or "grey", can have margin, so don't forget to set it. 
// Also, P can me small at low (< 480px) resolution - just add 'small' prop if you want to decrease font size from 16px to 13px
// Example:
// <P pColor="white", pMargin="0 0 10px 0" small>Some text</P>

const P = (props) => {
    return (
        <StyledP pColor={props.pColor} pMargin={props.pMargin} small={props.small}>
            {props.children}
        </StyledP>
    );
}

export default P;
