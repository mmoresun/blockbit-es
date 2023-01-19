import React from 'react';
import StyledH1 from './styles'

// H1 doesn't have any settings, it's always white, so don't worry about props

const H1 = (props) => {
    return (
        <StyledH1>
            {props.children}
        </StyledH1>
    );
}

export default H1;
