import React from 'react';

import { workflowData } from '../../../data/workflow-data';
import ScrollableLine from '../../ScrollableLine';

import {
    CardButton,    
    ButtonRenderWrapper
} from './styles';

const ButtonsBlock = ({ setActiveCard, activeCard }) => {

    return (
        <ButtonRenderWrapper>
            <ScrollableLine>                
                    {workflowData.map(elem => {
                        return <CardButton
                            selected={activeCard === elem.id}
                            onClick={() => setActiveCard(elem.id)}
                            key={Math.random().toString(16).slice(2)}
                        >
                            {elem.buttonText}
                        </CardButton>
                    })}                
            </ScrollableLine>
        </ButtonRenderWrapper>
    );
};
export default ButtonsBlock;
