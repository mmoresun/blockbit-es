import React from 'react';
import StyledFooterContentWrapper from './styles';

const FooterContentWrapper = (props) => {
    return (
        <StyledFooterContentWrapper>
            {props.children}
        </StyledFooterContentWrapper>
    );
}

export default FooterContentWrapper;
