import React from 'react';

import StyledAttributesTitle from './styles';

const Index = (props) => {
    return (
        <StyledAttributesTitle>
            {props.children}
        </StyledAttributesTitle>
    );
}

export default Index;
