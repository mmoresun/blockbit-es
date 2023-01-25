import React from 'react';

import {
    StyledDiscuss,
    StyledDiscussContentWrapper,
    StyledDiscussTitleWrapper
} from './styles';
import H2 from '../../smalls/H2';
import Button from '../../smalls/Button';

const Dicsuss = () => {
    return (
        <>
            <StyledDiscuss>
                <StyledDiscussContentWrapper>
                    <StyledDiscussTitleWrapper>
                        <H2 h2Color="white">
                            Want to discuss your project?
                        </H2>
                    </StyledDiscussTitleWrapper>
                    <Button buttonSize="big">
                        Contact us
                    </Button>
                </StyledDiscussContentWrapper>
            </StyledDiscuss>
        </>
    );
}

export default Dicsuss;
