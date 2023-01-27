import React, { useState, useEffect } from 'react';

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

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (e) => {
        let scrolled = e.srcElement.scrollingElement.scrollTop;

        if (scrolled > 80) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (        
        <StyledHeader isScrolled={isScrolled}>
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
