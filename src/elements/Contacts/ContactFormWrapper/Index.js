import React from 'react';

import StyledContactFormWrapper from './styles';

const ContactFormWrapper = (props) => {
    return (
        <StyledContactFormWrapper>
            {props.children}
        </StyledContactFormWrapper>
    );
}

export default ContactFormWrapper;
