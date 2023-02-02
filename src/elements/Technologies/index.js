import React from 'react';

import TechnologiesWrapper from './styles';
import H2 from '../../smalls/H2';
import TechnoStaticContent from './TechnoStaticContent';
import TechnoCarouselContent from './TechnoCarouselContent';
import TechnoContentWrapper from './TechnoContentWrapper';

import { technoCardData } from '../../data/technocard-data';

const Technologies = () => {
    return (
        <TechnologiesWrapper>
            <TechnoContentWrapper>
                <H2 h2Color="black" underline="left">{technoCardData.title}</H2>
                <TechnoStaticContent />
                <TechnoCarouselContent />
            </TechnoContentWrapper>
        </TechnologiesWrapper>
    );
}

export default Technologies;
