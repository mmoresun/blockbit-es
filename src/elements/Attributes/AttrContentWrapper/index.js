import React from 'react';

import StyledAttrContentWrapper from './styles';

const AttrContentWrapper = (props) => {
    return (
        <StyledAttrContentWrapper>
            {props.children}
        </StyledAttrContentWrapper>
    );
}

export default AttrContentWrapper;
