import React from 'react';

import StyledContactFormWrapper from './styles';
import ContactForm from '../../../mediums/ContactForm';

const ContactFormWrapper = (props) => {
    return (
        <StyledContactFormWrapper>
            {props.children}
        </StyledContactFormWrapper>
    );
}

export default ContactFormWrapper;
