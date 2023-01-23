import React from 'react';

import StyledFooter from './styles';
import FooterContentWrapper from './FooterContentWrapper';
import FooterListWrapper from './FooterListWrapper';
import FooterSocialWrapper from './FooterSocialWrapper';
import StyledFooterIcon from '../../smalls/FooterIcon/styles';
import FooterSocIconsWpapper from './FooterSocIconsWpapper';
import FooterListTitle from '../../smalls/FooterListTitle';
import P from '../../smalls/P';
import FooterContactWrapper from './FooterContactWrapper/styles';

import footerMediumIcon from '../../images/footer-icons/medium.svg';
import footerYouTubeIcon from '../../images/footer-icons/youtube.svg';
import footerTelegramIcon from '../../images/footer-icons/telegram.svg';
import footerTwitterIcon from '../../images/footer-icons/twitter.svg';
import footerLinkedinIcon from '../../images/footer-icons/linkedin.svg';
import footerLocationIcon from '../../images/footer-icons/location.svg';
import footerEmailIcon from '../../images/footer-icons/email.svg';

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContentWrapper>
                <FooterSocialWrapper>
                    <FooterSocIconsWpapper>
                        <a href="https://www.linkedin.com/company/blockbites" target="_blank" rel="noreferrer"><StyledFooterIcon src={footerLinkedinIcon} width="24px" alt="LinkedIn" /></a>
                        <a href="https://twitter.com/theblockbites" target="_blank" rel="noreferrer"><StyledFooterIcon src={footerTwitterIcon} alt="Twitter" /></a>
                        <a href="https://www.youtube.com/@blockbites" target="_blank" rel="noreferrer"><StyledFooterIcon src={footerYouTubeIcon} alt="YouTube" /></a>
                        <a href="https://medium.com/@theblockbites" target="_blank" rel="noreferrer"><StyledFooterIcon src={footerMediumIcon} alt="Medium" /></a>
                        <a href="https://t.me/+7nneDXbzEgMxNDBk" target="_blank" rel="noreferrer"><StyledFooterIcon src={footerTelegramIcon} alt="Telegram" /></a>
                    </FooterSocIconsWpapper>
                    <div>
                        Copyright Blockbites 2022
                    </div>
                </FooterSocialWrapper>
                <FooterListWrapper>
                    <FooterListTitle>
                        Get in touch
                    </FooterListTitle>
                    <FooterContactWrapper>
                        <div><img src={footerLocationIcon} alt="" /></div>                        
                        <p>Floriana Stablewskiego 43/4,
                        <br />
                        60-213 Poznań, Poland</p>
                    </FooterContactWrapper>
                    <FooterContactWrapper>
                        <img src={footerEmailIcon} alt="" />
                        hello@blockbit.es
                    </FooterContactWrapper>
                </FooterListWrapper>

                <FooterListWrapper>
                    <FooterListTitle>
                        More
                    </FooterListTitle>
                    <P pColor="white" pMargin="0 0 10px 0">
                        Home
                    </P>
                    <P pColor="white" pMargin="0 0 10px 0">
                        Projects
                    </P>
                    <P pColor="white" pMargin="0 0 10px 0">
                        Services
                    </P>
                    <P pColor="white" pMargin="0 0 10px 0">
                        Contacts
                    </P>
                    <P pColor="white" pMargin="0 0 10px 0">
                        Privacy Policies
                    </P>
                </FooterListWrapper>
            </FooterContentWrapper>
        </StyledFooter>
    );
}

export default Footer;
