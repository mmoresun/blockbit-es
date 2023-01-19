import React from 'react';
import StyledH4 from './styles';

// StyledH4 doesn't have any settings - it's always darkblue (#101820), so don't worry about props

const H4 = (props) => {
    return (
        <StyledH4>
            {props.children}
        </StyledH4>
    );
}

export default H4;
