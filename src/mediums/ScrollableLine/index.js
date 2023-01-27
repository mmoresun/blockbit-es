import React from 'react';

import {
    Container,
    Parent,
    ContentWrapper,    
    MagicWrapper,
    ScrollLineWrapper
} from './styles';

const ScrollableLine = (props) => {
    return (
        <ScrollLineWrapper>
            <Container>
                <Parent>
                    <MagicWrapper>
                        <ContentWrapper>
                            {props.children}
                        </ContentWrapper>
                    </MagicWrapper>
                </Parent>
            </Container>
        </ScrollLineWrapper>
    );
}

export default ScrollableLine;
