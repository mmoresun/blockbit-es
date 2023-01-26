import React, {useState} from 'react';

import StyledContactForm from './styles';
import InputsWrapper from './InputsWrapper';
import Input from '../../smalls/Input';
import TextArea from '../../smalls/TextArea';
import Toggler from '../../smalls/Toggler'
import SubmitButton from '../../smalls/SubmitButton';

const ContactForm = () => {

    // validate form a little
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const handleChange = (e) => {
        const { name, value} = e.target;
        if(name === "input1") {
            setInputName(value);
        } else if (name === "input2") {
            setInputEmail(value);
        }    
    }

    const buttonEnabled = inputName !== '' && inputEmail !== '' && inputEmail.indexOf('@') > -1;

    return (
        <StyledContactForm onSubmit={(e) => e.preventDefault()} >
            <InputsWrapper>
                <Input placeholder="Full name" type="text" value={inputName} name="input1" onChange={handleChange} />
                <Input placeholder="Company (optional)" type="text" />
            </InputsWrapper>
            <InputsWrapper>
                <Input placeholder="Email address" type="text" value={inputEmail} name="input2" onChange={handleChange}/>
                <Input placeholder="Phone number (optional)" type="tel" />
            </InputsWrapper>
            <TextArea placeholder="Message..." />
            <Toggler text="Send me NDA" />
            <SubmitButton
                enabled={buttonEnabled}
                onClick={(e) => e.preventDefault()}
            >
                Submit
            </SubmitButton>
        </StyledContactForm >
    );
}

export default ContactForm;
