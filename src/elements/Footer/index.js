import React from 'react';
import { Link } from 'gatsby';

import StyledFooter from './styles';
import FooterContentWrapper from './FooterContentWrapper';
import FooterListWrapper from './FooterListWrapper';
import FooterSocialWrapper from './FooterSocialWrapper';
import StyledFooterIcon from '../../smalls/FooterIcon/styles';
import FooterSocIconsWpapper from './FooterSocIconsWpapper';
import FooterListTitle from '../../smalls/FooterListTitle';
import P from '../../smalls/P';
import FooterContactWrapper from './FooterContactWrapper/styles';

// import footer content from data object
import { footerData } from '../../data/footer-data';

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContentWrapper>
                <FooterSocialWrapper>
                    <FooterSocIconsWpapper>

                        {footerData.pics.map(elem => {
                            return (
                                <a key={elem.id}
                                    href={elem.picUrl}
                                    target="_blank"
                                    rel="noreferrer">
                                    <StyledFooterIcon src={elem.pic} width="24px" alt="LinkedIn" />
                                </a>
                            )
                        })}
                    </FooterSocIconsWpapper>
                    <div>
                        {footerData.copy}
                    </div>
                </FooterSocialWrapper>
                <FooterListWrapper>
                    <FooterListTitle>
                        Get in touch
                    </FooterListTitle>
                    <FooterContactWrapper>
                        <div><img src={footerData.address.icon} alt="" /></div>
                        <p>{footerData.address.line1},
                            <br />
                            {footerData.address.line2}</p>
                    </FooterContactWrapper>
                    <FooterContactWrapper>
                        <img src={footerData.email.icon} alt="" />
                        {footerData.email.text}
                    </FooterContactWrapper>
                </FooterListWrapper>
                <FooterListWrapper>
                    <FooterListTitle>
                        More
                    </FooterListTitle>
                    {footerData.linkList.map(elem => {
                        return (
                            <P
                                pColor="white"
                                pMargin="0 0 11px 0"
                                key={elem.id}>
                                <Link to={elem.linkUrl}>{elem.linkText}</Link>
                            </P>
                        )
                    })}
                </FooterListWrapper>
            </FooterContentWrapper>
        </StyledFooter>
    );
}

export default Footer;
