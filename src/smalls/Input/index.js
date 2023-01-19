import React from 'react';
import StyledInput from './styles';

// StyledInput has placeholder, user can set it with "inputText" prop.
// Example:
// <StyledInput inputText="Some text" />

const Input = (props) => {
    return (
        <StyledInput placeholder={props.inputText}>
            {props.children}
        </StyledInput>
    );
}

export default Input;
