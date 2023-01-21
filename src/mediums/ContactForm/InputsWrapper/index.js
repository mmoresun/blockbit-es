import React from 'react';

import StyledInputsWrapper from './styles'

const InputsWrapper = (props) => {
    return (
        <StyledInputsWrapper>
            {props.children}
        </StyledInputsWrapper>
    );
}

export default InputsWrapper;
