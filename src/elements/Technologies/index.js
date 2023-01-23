import React from 'react';

import TechnologiesWrapper from './styles';
import H2 from '../../smalls/H2';
import TechnoStaticContent from './TechnoStaticContent';
import TechnoCarouselContent from './TechnoCarouselContent';
import TechnoContentWrapper from './TechnoContentWrapper';


const Technologies = () => {
    return (
        <TechnologiesWrapper>
            <TechnoContentWrapper>
                <H2 h2Color="black" underline="left">Technologies</H2>
                <TechnoStaticContent />
                <TechnoCarouselContent />
            </TechnoContentWrapper>
        </TechnologiesWrapper>
    );
}

export default Technologies;
