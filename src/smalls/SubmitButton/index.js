import React from 'react';
import StyledSubmitButton from './styles';

// SubmitButton can be enabled or disabled (default value is disabled, it equals enabled={false})
// Example:
// <SubmitButton enabled={true}>Some text</SubmitButton>

const SubmitButton = (props) => {
    return (
        <StyledSubmitButton enabled={props.enabled}>
            {props.children}
        </StyledSubmitButton>
    );
}

export default SubmitButton;
