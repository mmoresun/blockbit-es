import React from 'react';
import StyledFooterListWrapper from './styles';

const FooterListWrapper = (props) => {
    return (
        <StyledFooterListWrapper>
            {props.children}
        </StyledFooterListWrapper>
    );
}

export default FooterListWrapper;
