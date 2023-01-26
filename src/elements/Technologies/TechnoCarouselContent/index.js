import React from 'react';

import { technoCardData } from '../../../data/technocard-data';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import TechnoCard from '../TechnoCard';
import Paragraph from '../../../smalls/Paragraph';
import TechIMG from '../../../smalls/IMG/styles';
import { StyledTechnoPrevSlide, StyledTechnoNextSlide } from './styles';

const TechnoCarouselContent = () => {

    // array of first six "Technologies" cards (for the first slide)
    const firstSixCardsArr = technoCardData.slice(0, 6);

    // array of other "Technologies" cards (for the second slide)
    const lastCardsArr = technoCardData.slice(6, technoCardData.length + 1);

    return (
        <Carousel
        // carousel settings: https://www.npmjs.com/package/react-responsive-carousel
            showStatus={false}
            showArrows={false}
            showThumbs={false}
        >
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <StyledTechnoPrevSlide>
                    {/* mapping data to the first slide*/}
                    {firstSixCardsArr.map(elem => {
                        return <TechnoCard
                            key={elem.id}>
                            <TechIMG src={elem.image} alt="" rel="noreferrer" />
                            <Paragraph type="techno">{elem.title}</Paragraph>
                        </TechnoCard>
                    })}
                </StyledTechnoPrevSlide>
            </div>

            <StyledTechnoNextSlide>
                {/* mapping data to the second  slide*/}
                {lastCardsArr.map(elem => {
                    return <TechnoCard
                        key={elem.id}>
                        <TechIMG src={elem.image} alt="" rel="noreferrer" />
                        <Paragraph type="techno">{elem.title}</Paragraph>
                    </TechnoCard>
                })}
            </StyledTechnoNextSlide>
        </Carousel>
    );
}

export default TechnoCarouselContent;
