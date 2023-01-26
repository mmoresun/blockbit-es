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

// import images
import winnerPic from '../../images/attributes-pics/winner.svg'
import filePic from '../../images/attributes-pics/file.svg'
import rocketPic from '../../images/attributes-pics/rocket.svg'
import folderPic from '../../images/attributes-pics/folder.svg'

const Attributes = () => {
    return (
        <StyledAttrWrapper>
            <StyledAttrContentWrapper>
                <AttributesTitle>
                    <H2
                        h2Color="black"
                        underline="left"
                    >
                        What makes us unique
                    </H2>
                </AttributesTitle>
                <AttributesGrid>
                    <AttributesCard>
                        <img src={winnerPic} alt="" rel="noreferrer" />
                        <AttrCardTextWrapper>
                            <H4>A robust partner for emerging projects</H4>
                            <Paragraph type="attribute">With a deep practial knowledge of buidling startups from scratch, we've learned the hard way what are the challenges involved. This results in both technical excellence but also strong support on the management side.</Paragraph>
                        </AttrCardTextWrapper>
                    </AttributesCard>
                    <AttributesCard>
                        <img src={filePic} alt="" rel="noreferrer" />
                        <AttrCardTextWrapper>
                            <H4>Expertise in building high performant teams </H4>
                            <Paragraph type="attribute">Remote first, hybrid work friendly. We can help you build your team right, right from the start. Talk to us and see what are your options to get where you want to be.</Paragraph>
                        </AttrCardTextWrapper>
                    </AttributesCard>
                    <AttributesCard>
                        <img src={rocketPic} alt="" rel="noreferrer" />
                        <AttrCardTextWrapper>
                            <H4>Creation of innovative solutions</H4>
                            <Paragraph type="attribute">In this fast paced environemnt we feel as natural as it gets. We are always on top of the technology landscape experimenting with new things and building using the best rock-solid solutions. </Paragraph>
                        </AttrCardTextWrapper>
                    </AttributesCard>
                    <AttributesCard>
                        <img src={folderPic} alt="" rel="noreferrer" />
                        <AttrCardTextWrapper>
                            <H4>Perfect partner for your business </H4>
                            <Paragraph type="attribute"> The reputation is our key value. With that in mind, we alway strive for loyality and consistency with our customers. The greatest reward is when there coming back tu us for more.</Paragraph>
                        </AttrCardTextWrapper>
                    </AttributesCard>
                </AttributesGrid>

            </StyledAttrContentWrapper>
        </StyledAttrWrapper>
    );
}

export default Attributes;
