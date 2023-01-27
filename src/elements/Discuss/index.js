import React from 'react';

import {
    StyledDiscuss,
    StyledDiscussContentWrapper,
    StyledDiscussTitleWrapper
} from './styles';
import H2 from '../../smalls/H2';
import LinkButton from '../../smalls/LinkButton';

const Dicsuss = () => {
    return (
        <>
            <StyledDiscuss>
                <StyledDiscussContentWrapper>
                    <StyledDiscussTitleWrapper>
                        <H2 h2Color="white" type='discuss'>
                            Want to discuss your project?
                        </H2>
                    </StyledDiscussTitleWrapper>
                    <LinkButton type="discussButton">
                        Contact us
                    </LinkButton>
                </StyledDiscussContentWrapper>
            </StyledDiscuss>
        </>
    );
}

export default Dicsuss;
