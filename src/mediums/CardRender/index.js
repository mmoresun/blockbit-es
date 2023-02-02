import React, { useState } from 'react';

import ButtonsBlock from './ButtonsBlock';
import Card from './Card';
import { CardsContainer } from './styles';

import { workflowData } from '../../data/workflow-data';

const CardRender = () => {

    const [activeCard, setActiveCard] = useState(1);

    return (
        <>
            <ButtonsBlock
                setActiveCard={setActiveCard}
                activeCard={activeCard} />
            <CardsContainer>

                <Card
                    title={workflowData[activeCard - 1].cardTitle}
                    cardPicture={workflowData[activeCard - 1].cardPic}
                    cardText={workflowData[activeCard - 1].cardText}
                    cardRecommend={workflowData[activeCard - 1].cardRecommend}
                />
            </CardsContainer>
        </>
    );
}

export default CardRender;
