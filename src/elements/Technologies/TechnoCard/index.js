import React from 'react';

import StyledTechnoCard from './styles';

const TechnoCard = (props) => {
    return (
        <StyledTechnoCard>
            {props.children}
        </StyledTechnoCard>
    );
}

export default TechnoCard;
