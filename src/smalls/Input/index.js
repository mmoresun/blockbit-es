import React from 'react';
import StyledInput from './styles';

// StyledInput has placeholder, user can set it with "inputText" prop.
// Example:
// <StyledInput inputText="Some text" />

const Input = (props) => {
    return (
        <StyledInput
            placeholder={props.placeholder}
            onChange={props.onChange}
            type={props.type}
            value={props.value}
            name={props.name}
        >
            {props.children}
        </StyledInput>
    );
}

export default Input;
