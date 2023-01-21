import React from 'react';

import StyledContactForm from './styles';
import InputsWrapper from './InputsWrapper';
import Input from '../../smalls/Input';
import TextArea from '../../smalls/TextArea';
import Toggler from '../../smalls/Toggler'
import Button from '../../smalls/Button';

const ContactForm = () => {

    const screenWidth = window.innerWidth;
    console.log(screenWidth);

    return (
        <StyledContactForm onSubmit={(e) => e.preventDefault()} >
            <InputsWrapper>
                <Input placeholder="Full name" />
                <Input placeholder="Company name (optional)" />
            </InputsWrapper>
            <InputsWrapper>
                <Input placeholder="Email address" />
                <Input placeholder="Phone number (optional)" />
            </InputsWrapper>
            <TextArea placeholder="Message..." />
            <Toggler text="Send me NDA" />
            <Button
                isWide={screenWidth < 481}
                buttonSize="small"
                enabled={false}
                onClick={(e) => e.preventDefault()}
            >
                Submit
            </Button>
        </StyledContactForm >
    );
}

export default ContactForm;
