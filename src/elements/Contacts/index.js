import React from 'react';

import StyledContacts from './styles';
import ContactFormWrapper from './ContactFormWrapper';
import H2 from '../../smalls/H2';
import ContactForm from '../../mediums/ContactForm';

const Contacts = () => {
    return (
        <StyledContacts>
            <ContactFormWrapper>      
                <H2 h2Color="white">Contact us</H2>
                <ContactForm />
            </ContactFormWrapper>
        </StyledContacts>
    );
}

export default Contacts;
