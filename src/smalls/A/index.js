import React from 'react';
import StyledA from './styles';

const A = (props) => {
    return (
        <StyledA>
            {props.children}
        </StyledA>
    );
}

export default A;
