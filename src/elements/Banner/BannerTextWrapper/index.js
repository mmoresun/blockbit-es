import React from 'react';

import StyledBannerTextWrapper from './styles';

const BannerTextWrapper = (props) => {
    return (
        <StyledBannerTextWrapper>
            {props.children}
        </StyledBannerTextWrapper>
    );
}

export default BannerTextWrapper;
