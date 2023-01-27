import React from 'react';

import {
    StyledBanner,
    ProjectsBannerContentWrapper,
    ProjectBannerTextWrapper,
    ProjectDesc,
    ProjectTitle,
} from './styles';

const ProjectsBanner = () => {
    return (
        <StyledBanner>
            <ProjectsBannerContentWrapper>
                <ProjectBannerTextWrapper>
                    <ProjectTitle>
                        Projects
                    </ProjectTitle>
                    <ProjectDesc type="banner">
                        Here's how we started strategic partnerships with our customers and helped their companies grow and scale.
                    </ProjectDesc>
                </ProjectBannerTextWrapper>
            </ProjectsBannerContentWrapper>
        </StyledBanner>
    );
}

export default ProjectsBanner;
