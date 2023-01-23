import React from 'react';

import StyledIntroContentWrapper from './styles'

const IntroductionContentWrapper = (props) => {
    return (
        <StyledIntroContentWrapper>
            {props.children}
        </StyledIntroContentWrapper>
    );
}

export default IntroductionContentWrapper;
