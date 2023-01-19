import React from 'react';
import StyledContactForm from './styles';

const ContactForm = () => {

    return (
        <StyledContactForm>
            {props.children}
        </StyledContactForm>
    );
}

export default ContactForm;
