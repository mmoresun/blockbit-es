import React from 'react';
import StyledParagraph from './styles';

const Paragraph = (props) => {
    return (
        <StyledParagraph type={props.type}>
            {props.children}
        </StyledParagraph>
    );
}

export default Paragraph;
