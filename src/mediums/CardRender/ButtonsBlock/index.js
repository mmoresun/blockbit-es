import React from 'react';

import { workflowData } from '../../../data/workflow-data';

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
                            {workflowData.map(elem => {
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
