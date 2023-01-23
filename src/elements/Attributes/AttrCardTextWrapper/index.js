import React from 'react';

import StyledAttrCardTextWrapper from './styles';

const AttrCardTextWrapper = (props) => {
    return (
        <StyledAttrCardTextWrapper>
            {props.children}
        </StyledAttrCardTextWrapper>
    );
}

export default AttrCardTextWrapper;
