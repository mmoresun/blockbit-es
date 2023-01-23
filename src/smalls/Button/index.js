import React from 'react';
import StyledBtn from './styles.js';

// Button can me "big" (122px height) or "small" (48px height), don't forget to set it. 
// Example:
// <Button buttonSize="small">Button text</Button>

// Also, Button can be "enabled" or not, the text color depends on it (active is "#2982E2", inactive is "#6E778C").
// Example:
// <Button buttonSize="small" enabled={false}>Button text</Button> or
// <Button buttonSize="small" enabled>Button text</Button> 

const Button = (props) => {


    return (
        <StyledBtn
            buttonSize={props.buttonSize}
            enabled={props.enabled}                     
            type={props.type}            
        >
            {props.children}
        </StyledBtn>
    );
}
export default Button;
