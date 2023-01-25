import React from 'react';

import StyledBanner from './styles';
import BannerContentWrapper from './BannerContentWrapper';
import Animation from './Animation';
import BannerTextWrapper from './BannerTextWrapper';
import H1 from '../../smalls/H1';
import P from '../../smalls/P';
import Button from '../../smalls/Button';

const Banner = () => {
    return (
        <StyledBanner>
            <BannerContentWrapper>
                <Animation />
                <BannerTextWrapper>
                    <H1>
                        Design.
                        <br />
                        Build.
                        <br />
                        Grow.
                    </H1>
                    <P pColor="white" pMargin="48px 0px 60px">
                        Leverage your business`s growth potential with us, using Blockchain, Cloud, and cutting-edge technologies.
                    </P>
                    <Button buttonSize="small" enabled bannerButton>Explore Our Work</Button>
                </BannerTextWrapper>
            </BannerContentWrapper>
        </StyledBanner>
    );
}

export default Banner;
