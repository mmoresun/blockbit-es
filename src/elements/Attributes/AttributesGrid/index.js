import React from 'react';

import StyledAttributesGrid from './styles';

const AttributesGrid = (props) => {
    return (
        <StyledAttributesGrid>
            {props.children}
        </StyledAttributesGrid>
    );
}

export default AttributesGrid;
