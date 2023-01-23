import React from 'react';

import StyledFooterSocialWrapper from './styles'

const Index = (props) => {
    return (
        <StyledFooterSocialWrapper>
            {props.children}
        </StyledFooterSocialWrapper>
    );
}

export default Index;
