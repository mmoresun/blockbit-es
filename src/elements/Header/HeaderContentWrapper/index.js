import React from 'react';
import StyledHeaderContentWrapper from './styles';

const HeaderContentWrapper = (props) => {
    return (
        <StyledHeaderContentWrapper>
            {props.children}
        </StyledHeaderContentWrapper>
    );
}

export default HeaderContentWrapper;
