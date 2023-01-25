import React from 'react';

import StyledLottieWrapper from './styled';

const LottieWrapper = (props) => {
    return (
        <StyledLottieWrapper>
            {props.children}
        </StyledLottieWrapper>
    );
}

export default LottieWrapper;
