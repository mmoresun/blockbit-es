import React from 'react';

import StyledTechnoContentWrapper from './styles';

const TechnoContentWrapper = (props) => {
    return (
        <StyledTechnoContentWrapper>
            {props.children}
        </StyledTechnoContentWrapper>
    );
}

export default TechnoContentWrapper;
