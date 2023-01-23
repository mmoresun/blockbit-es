import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TechnoCard from '../TechnoCard';
import { StyledTechnoPrevSlide, StyledTechnoNextSlide } from './styles';

const TechnoCarouselContent = () => {
    return (
        <Carousel
            showStatus={false}
            showArrows={false}
            showThumbs={false}
        >
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <StyledTechnoPrevSlide>
                    <TechnoCard>Card 1</TechnoCard>
                    <TechnoCard>Card 2</TechnoCard>
                    <TechnoCard>Card 3</TechnoCard>
                    <TechnoCard>Card 4</TechnoCard>
                    <TechnoCard>Card 5</TechnoCard>
                    <TechnoCard>Card 6</TechnoCard>
                </StyledTechnoPrevSlide>
            </div>

            <StyledTechnoNextSlide>
                <TechnoCard>Card 7</TechnoCard>
                <TechnoCard>Card 8</TechnoCard>
                <TechnoCard>Card 9</TechnoCard>
                <TechnoCard>Card 10</TechnoCard>
            </StyledTechnoNextSlide>
        </Carousel>
    );
}

export default TechnoCarouselContent;
