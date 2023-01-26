import React from 'react';

import StyledBanner from './styles';
import BannerContentWrapper from './BannerContentWrapper';
import Animation from './Animation';
import BannerTextWrapper from './BannerTextWrapper';
import H1 from '../../smalls/H1';
import LinkButton from '../../smalls/LinkButton';

import Paragraph from '../../smalls/Paragraph';

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
                    <Paragraph type="banner">
                        Leverage your business`s growth potential with us, using Blockchain, Cloud, and cutting-edge technologies.
                    </Paragraph>
                    <LinkButton type="bannerButton">Explore Our Work</LinkButton>
                </BannerTextWrapper>
            </BannerContentWrapper>
        </StyledBanner>
    );
}

export default Banner;
