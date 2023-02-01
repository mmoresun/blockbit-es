import React, { useState } from 'react';

import ButtonsBlock from './ButtonsBlock';
import Card from './Card';
import { CardsContainer } from './styles';

import { cardRenderData } from '../../data/card-data';

const CardRender = () => {

    const [activeCard, setActiveCard] = useState(1);

    return (
        <>
            <ButtonsBlock
                setActiveCard={setActiveCard}
                activeCard={activeCard} />
            <CardsContainer>

                <Card
                    title={cardRenderData[activeCard - 1].cardTitle}
                    cardPicture={cardRenderData[activeCard - 1].cardPic}
                    cardText={cardRenderData[activeCard - 1].cardText}
                    cardRecommend={cardRenderData[activeCard - 1].cardRecommend}
                />
            </CardsContainer>
        </>
    );
}

export default CardRender;
