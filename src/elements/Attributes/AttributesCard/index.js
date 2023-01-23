import React from 'react';
import StyledAttributesCard from './styles';

const AttributesCard = (props) => {
    return (
        <StyledAttributesCard>
            {props.children}
        </StyledAttributesCard>
    );
}

export default AttributesCard;
