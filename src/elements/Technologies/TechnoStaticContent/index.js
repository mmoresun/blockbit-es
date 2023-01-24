import React from 'react';

import { StyledCardsWrapper } from './styled';
import TechnoCard from '../TechnoCard';
import P from '../../../smalls/P';
import TechIMG from '../../../smalls/IMG/styles';

import { technoCardData } from '../../../data/technocard-data';

const TechnoStaticContent = () => {

    return (
        <>
            <StyledCardsWrapper>
                {technoCardData.map(elem => {
                    return <TechnoCard
                        key={elem.id}>
                        <TechIMG src={elem.image} alt="" rel="noreferrer" />
                        <P pColor="blue" small>{elem.title}</P>
                    </TechnoCard>
                })}
            </StyledCardsWrapper>
        </>
    );
}

export default TechnoStaticContent;
