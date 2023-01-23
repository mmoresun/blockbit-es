import React from 'react';

import StyledFooterListTitle from './styles'
const FooterListTitle = (props) => {
    return (
        <StyledFooterListTitle>
            {props.children}
        </StyledFooterListTitle>
    );
}

export default FooterListTitle;
