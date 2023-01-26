import React from 'react';

import { cardRenderData } from '../../../data/cardRenderData';

import {
    Container,
    Parent,
    ContentWrapper,
    CardButton,
    MagicWrapper,
    ButtonRenderWrapper
} from './styles';

const ButtonsBlock = ({ setActiveCard, activeCard }) => {

    return (
        <ButtonRenderWrapper>
            <Container>
                <Parent>
                    <MagicWrapper>
                        <ContentWrapper>
                            {cardRenderData.map(elem => {
                                return <CardButton
                                    selected={activeCard === elem.id}
                                    onClick={() => setActiveCard(elem.id)}
                                    key={Math.random().toString(16).slice(2)}
                                >
                                    {elem.buttonText}
                                </CardButton>
                            })}
                        </ContentWrapper>
                    </MagicWrapper>
                </Parent>
            </Container>
        </ButtonRenderWrapper>
    );
};
export default ButtonsBlock;
