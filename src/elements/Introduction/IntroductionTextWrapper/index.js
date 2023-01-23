import React from 'react';
import StyledIntroTextWrapper from './styles'

const IntroductionTextWrapper = (props) => {
    return (
        <StyledIntroTextWrapper>
            {props.children}
        </StyledIntroTextWrapper>
    );
}
export default IntroductionTextWrapper;
