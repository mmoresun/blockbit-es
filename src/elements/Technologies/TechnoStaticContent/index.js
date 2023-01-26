import React from 'react';

import { StyledCardsWrapper } from './styled';
import TechnoCard from '../TechnoCard';
import Paragraph from '../../../smalls/Paragraph';
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
                        <Paragraph type="techno">{elem.title}</Paragraph>
                    </TechnoCard>
                })}
            </StyledCardsWrapper>
        </>
    );
}

export default TechnoStaticContent;
