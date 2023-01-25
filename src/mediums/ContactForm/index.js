import React from 'react';

import StyledContactForm from './styles';
import InputsWrapper from './InputsWrapper';
import Input from '../../smalls/Input';
import TextArea from '../../smalls/TextArea';
import Toggler from '../../smalls/Toggler'
import SubmitButton from '../../smalls/SubmitButton';

const ContactForm = () => {

    return (
        <StyledContactForm onSubmit={(e) => e.preventDefault()} >
            <InputsWrapper>
                <Input placeholder="Full name" />
                <Input placeholder="Company (optional)" />
            </InputsWrapper>
            <InputsWrapper>
                <Input placeholder="Email address" />
                <Input placeholder="Phone number (optional)" />
            </InputsWrapper>
            <TextArea placeholder="Message..." />
            <Toggler text="Send me NDA" />
            <SubmitButton                                
                enabled={true}
                onClick={(e) => e.preventDefault()}                            
            >
                Submit
            </SubmitButton>
        </StyledContactForm >
    );
}

export default ContactForm;
