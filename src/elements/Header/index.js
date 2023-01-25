import React from 'react';

import { Link } from 'gatsby';

import StyledHeader from './styles';
import HeaderWrapper from '../../elements/Header/HeaderWrapper';
import HeaderContentWrapper from '../../elements/Header/HeaderContentWrapper';
import HeaderLinkWrapper from '../../elements/Header/HeaderLinkWrapper';
import LinkButton from '../../smalls/LinkButton';
import StyledHeaderLogoWrapper from './HeaderLogo/styles';
import StyledHeaderLink from './HeaderLink/styles';

import headerLogo from '../../images/logos/Blockbit.svg';

const Header = () => {
    return (
        <StyledHeader>
            <HeaderWrapper>
                <HeaderContentWrapper>
                    <HeaderLinkWrapper>
                        <Link to="/"><StyledHeaderLogoWrapper src={headerLogo} alt="" /></Link>
                        <StyledHeaderLink to="#">Services</StyledHeaderLink>
                        <StyledHeaderLink to="/projects">Projects</StyledHeaderLink>
                        <StyledHeaderLink to="#">Solutions</StyledHeaderLink>
                    </HeaderLinkWrapper>
                    <LinkButton type="headerButton">Contact Us</LinkButton>
                </HeaderContentWrapper>
            </HeaderWrapper>
        </StyledHeader>
    );
}

export default Header;
