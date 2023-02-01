import React from 'react';
import StyledA from './styles';

const A = (props) => {
    return (
        <StyledA href={props.href} alt={props.alt} rel={props.rel}>
            {props.children}
        </StyledA>
    );
}

export default A;
