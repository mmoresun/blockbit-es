import React from 'react';

import {
    PartnersWrapper,
    PartnersContentWrapper,
    PartnersTextWrapper,
    PartnerPicsWrapper,
    PartnerIMGWrapper
} from './styles';
import H2 from '../../smalls/H2';
import ScrollableLine from '../../mediums/ScrollableLine';

import { partnersData } from '../../data/partners-data';

const Partners = () => {
    return (
        <PartnersWrapper>
            <PartnersContentWrapper>
                <PartnersTextWrapper>
                    <H2 type="partners" h2Color="grey">
                        {partnersData.text}
                    </H2>
                </PartnersTextWrapper>
                <ScrollableLine>
                    <PartnerPicsWrapper>
                    {partnersData.content.map(elem => {
                        return (
                            <PartnerIMGWrapper 
                            key={elem.id}
                            src={elem.pic} 
                            />
                        )
                    })}

                        {/* <PartnerIMGWrapper src={polygon} />
                        <PartnerIMGWrapper src={casper} />
                        <PartnerIMGWrapper src={aws} />
                        <PartnerIMGWrapper src={near} />
                        <PartnerIMGWrapper src={defdone} />
                        <PartnerIMGWrapper src={github} />
                        <PartnerIMGWrapper src={eggforce} /> */}
                    </PartnerPicsWrapper>
                </ScrollableLine >
            </PartnersContentWrapper>
        </PartnersWrapper>
    );
}

export default Partners;
