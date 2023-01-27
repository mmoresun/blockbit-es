import React from 'react';

import polygon from '../../images/partners-pics/polygon.svg';
import eggforce from '../../images/partners-pics/eggforce.png';
import github from '../../images/partners-pics/github.svg';
import defdone from '../../images/partners-pics/defdone.svg';
import aws from '../../images/partners-pics/aws.svg';
import casper from '../../images/partners-pics/casper.svg';
import near from '../../images/partners-pics/near.svg';

import {
    PartnersWrapper,
    PartnersContentWrapper,
    PartnersTextWrapper,
    PartnerPicsWrapper,
    PartnerIMGWrapper
} from './styles';
import H2 from '../../smalls/H2';
import ScrollableLine from '../../mediums/ScrollableLine';

const Partners = () => {
    return (
        <PartnersWrapper>
            <PartnersContentWrapper>
                <PartnersTextWrapper>
                    <H2 type="partners" h2Color="grey">
                        Trusted by global brands and partners
                    </H2>
                </PartnersTextWrapper>
                <ScrollableLine>
                    <PartnerPicsWrapper>
                        <PartnerIMGWrapper src={polygon} />
                        <PartnerIMGWrapper src={casper} />
                        <PartnerIMGWrapper src={aws} />
                        <PartnerIMGWrapper src={near} />
                        <PartnerIMGWrapper src={defdone} />
                        <PartnerIMGWrapper src={github} />
                        <PartnerIMGWrapper src={eggforce} />
                    </PartnerPicsWrapper>
                </ScrollableLine>
            </PartnersContentWrapper>
        </PartnersWrapper>
    );
}

export default Partners;
