import React from 'react';

import IntroductionContentWrapper from './IntroductionContentWrapper';
import StyledIntroduction from './styles';
import StyledIntroTextWrapper from './IntroductionTextWrapper/styles';
import H2 from '../../smalls/H2';
import P from '../../smalls/P';

const Introduction = () => {
    return (
        <>
            <StyledIntroduction>
                <IntroductionContentWrapper>
                    <H2 h2Color="white">Who we are</H2>
                    <StyledIntroTextWrapper>
                        <P pColor="white">We are builders. Our team goes for the most challenging projects, even where there is little of no expertise. Our product development outsourcing team of industry experts actively works in blockchain, iot and cloud infrastructure domains.</P>
                        <P pColor="white">With proven track of record and excellence in product creation, several market leading tech companies started cooperating with us. Together we designed and developed cutting-edge digital solutions challenging the status quo of modern [distributed] applications.</P>
                    </StyledIntroTextWrapper>
                </IntroductionContentWrapper>
            </StyledIntroduction>
        </>
    );
}
export default Introduction;
