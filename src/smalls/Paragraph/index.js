import React from 'react';
import StyledParagraph from './styles';

// Paragraph has 5 types:
// - banner
// - intro
// - techno
// - workflow 
// - attributes
//  Don't forget to set the type. If you will forget, the text becomes red (it means error) :)

const Paragraph = (props) => {
    return (
        <StyledParagraph type={props.type}>
            {props.children}
        </StyledParagraph>
    );
}

export default Paragraph;
