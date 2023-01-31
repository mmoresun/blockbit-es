import React from 'react';

import {
    StyledDiscuss,
    StyledDiscussContentWrapper,
    StyledDiscussTitleWrapper
} from './styles';
import H2 from '../../smalls/H2';
import StyledLinkButton from '../../smalls/LinkButton/styles';

const Dicsuss = () => {
    return (
        <>
            <StyledDiscuss>
                <StyledDiscussContentWrapper>
                    <StyledDiscussTitleWrapper>
                        <H2 h2Color="white" type="discuss">
                            Want to discuss your project?
                        </H2>
                    </StyledDiscussTitleWrapper>
                    <StyledLinkButton type="discussButton" href="#contacts">
                        Contact us
                    </StyledLinkButton>
                </StyledDiscussContentWrapper>
            </StyledDiscuss>
        </>
    );
}

export default Dicsuss;
