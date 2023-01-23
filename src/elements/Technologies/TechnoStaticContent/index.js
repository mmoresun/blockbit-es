import React from 'react';

import { StyledCardsWrapper } from './styled';
import TechnoCard from '../TechnoCard';
import P from '../../../smalls/P';

import { technoCardData } from '../../../data/technocard-data';

const TechnoStaticContent = () => {

    return (
        <>
            <StyledCardsWrapper>
                {technoCardData.map(elem => {
                    return <TechnoCard
                        key={elem.id}>
                        <img src={elem.image} alt="" rel="noreferrer" style={{ width: '60px', marginBottom: '16px' }} />
                        <P pColor="blue">{elem.title}</P>
                    </TechnoCard>
                })}
            </StyledCardsWrapper>
        </>
    );
}

export default TechnoStaticContent;
