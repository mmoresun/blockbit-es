import React from 'react';

// import components
import StyledAttrWrapper from './styles';
import StyledAttrContentWrapper from './AttrContentWrapper/styles';
import H2 from '../../smalls/H2';
import AttributesTitle from './AttributesTitle';
import AttributesGrid from './AttributesGrid';
import AttributesCard from './AttributesCard'
import AttrCardTextWrapper from './AttrCardTextWrapper';
import H4 from '../../smalls/H4';
import Paragraph from '../../smalls/Paragraph';

// import content from attributesData
import { attributesData } from '../../data/attributes-data';

const Attributes = () => {
    return (
        <StyledAttrWrapper id="attributes">
            <StyledAttrContentWrapper>
                <AttributesTitle>
                    <H2
                        h2Color="black"
                        underline="left"
                    >
                        {attributesData.title}
                    </H2>
                </AttributesTitle>
                <AttributesGrid>
                    {attributesData.content.map(elem => {
                        return (
                            <AttributesCard key={elem.id}>
                                <img src={elem.attrPic} alt="" rel="noreferrer" />
                                <AttrCardTextWrapper>
                                    <H4>{elem.attrTitle}</H4>
                                    <Paragraph type="attribute">{elem.attrText}</Paragraph>
                                </AttrCardTextWrapper>
                            </AttributesCard>
                        )
                    })}
                </AttributesGrid>
            </StyledAttrContentWrapper>
        </StyledAttrWrapper>
    );
}

export default Attributes;
