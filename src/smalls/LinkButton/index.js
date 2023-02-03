import React from 'react';
import StyledLinkButton from './styles.js';

// LinkButton has 5 types:
// - headerButton
// - bannerButton
// - discussButton
// - projectsButton
// - collabButton
//
// Don't forget to set one of them. Example:
// <LinkButton type="projectsButton">Some text</LinkButton>

const LinkButton = (props) => {
    return (
        <StyledLinkButton    
            type={props.type}
            to={props.to}
        >
            {props.children}
        </StyledLinkButton>
    );
}
export default LinkButton;
