import React from 'react';

import { CollabWrapper, CollabContentWrapper, CollabColumnWrapper, CollabLogo } from './styles';
import collabLogo from '../../images/logos/defdone.svg';
import H3 from '../../smalls/H3';
import Paragraph from '../../smalls/Paragraph';
import StyledLinkButton from '../../smalls/LinkButton/styles';

const Index = () => {
    return (
        <CollabWrapper>
            <CollabContentWrapper>
                <CollabColumnWrapper>
                    <H3 h3Color="blue" type="collab">
                        We work in collaboration with Defdone.com
                    </H3>
                    <Paragraph type="collab">
                        We provide comprehensive product expertise because, in addition to our team, we also cooperate closely with Defdone.com.
                    </Paragraph>
                    <StyledLinkButton type="collabButton" href="https://defdone.com/" target="_blank" rel="noopener">See More</StyledLinkButton>
                </CollabColumnWrapper>
                <CollabLogo src={collabLogo} />
            </CollabContentWrapper>
        </CollabWrapper>
    );
}

export default Index;
