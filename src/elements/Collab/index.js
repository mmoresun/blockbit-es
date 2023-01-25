import React from 'react';

import { CollabWrapper, CollabContentWrapper, CollabColumnWrapper, CollabLogo } from './styles';
import collabLogo from '../../images/logos/defdone.svg';
import H3 from '../../smalls/H3';
import P from '../../smalls/P';
import LinkButton from '../../smalls/LinkButton';

const Index = () => {
    return (
        <CollabWrapper>
            <CollabContentWrapper>
                <CollabColumnWrapper>
                    <H3 h3Color="blue" type="collab">
                        We work in collaboration with Defdone.com
                    </H3>
                    <P pColor="grey" pMargin="16px 0 0 0" high>
                        We provide comprehensive product expertise because, in addition to our team, we also cooperate closely with Defdone.com.
                    </P>
                    <LinkButton type="collabButton">See More</LinkButton>
                </CollabColumnWrapper>
                <CollabLogo src={collabLogo} />
            </CollabContentWrapper>
        </CollabWrapper>
    );
}

export default Index;
