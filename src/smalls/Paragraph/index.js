import React from 'react';
import StyledParagraph from './styles';

// Paragraph has few types:
// - banner
// - intro
// - techno
// - workflow 
// - attribute
// - projects
//  Don't forget to set the type. If you will forget, the text becomes red (it means error) :)

const Paragraph = (props) => {
    return (
        <StyledParagraph type={props.type}>
            {props.children}
        </StyledParagraph>
    );
}

export default Paragraph;
