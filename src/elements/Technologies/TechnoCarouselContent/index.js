import React from 'react';

import { technoCardData } from '../../../data/technocard-data';

import TechnoCard from '../TechnoCard';
import MyCarousel from '../../../mediums/MyCarousel'; // my custom carousel with custom dots colors
import Paragraph from '../../../smalls/Paragraph';
import TechIMG from '../../../smalls/IMG/styles';
import { StyledTechnoPrevSlide, StyledTechnoNextSlide } from './styles';

const TechnoCarouselContent = () => {

    // array of first six "Technologies" cards (for the first slide)
    const firstSixCardsArr = technoCardData.content.slice(0, 6);

    // array of other "Technologies" cards (for the second slide)
    const lastCardsArr = technoCardData.content.slice(6, technoCardData.content.length + 1);

    return (
        <MyCarousel
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
        </MyCarousel>
    );
}

export default TechnoCarouselContent;
