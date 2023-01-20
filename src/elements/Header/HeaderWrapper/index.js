import React from 'react';
import StyledHeaderWrapper from './styles';

const HeaderWrapper = (props) => {
    return (
        <StyledHeaderWrapper>
            {props.children}
        </StyledHeaderWrapper>
    );
}

export default HeaderWrapper;
