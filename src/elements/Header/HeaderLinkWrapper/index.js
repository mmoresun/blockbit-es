import React from 'react';
import StyledHeaderLinkWrapper from './styles';

const HeaderLinkWrapper = (props) => {
    return (
        <StyledHeaderLinkWrapper>
            {props.children}
        </StyledHeaderLinkWrapper>
    );
}

export default HeaderLinkWrapper;
