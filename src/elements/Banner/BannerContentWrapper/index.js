import React from 'react';

import StyledBannerContentWrapper from './styles';

const BannerContentWrapper = (props) => {
    return (
        <StyledBannerContentWrapper>
            {props.children}
        </StyledBannerContentWrapper>
    );
}

export default BannerContentWrapper;
