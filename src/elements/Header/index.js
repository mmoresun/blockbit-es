import React, { useState, useEffect } from 'react';

import { Link } from 'gatsby';

import StyledHeader from './styles';
import HeaderWrapper from '../../elements/Header/HeaderWrapper';
import HeaderContentWrapper from '../../elements/Header/HeaderContentWrapper';
import HeaderLinkWrapper from '../../elements/Header/HeaderLinkWrapper';
import StyledLinkButton from '../../smalls/LinkButton/styles';
import StyledHeaderLogoWrapper from './HeaderLogo/styles';
import StyledHeaderLink from './HeaderLink/styles';

import { headerData } from '../../data/header-data';

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
                        <Link to="/"><StyledHeaderLogoWrapper src={headerData.logo} alt="" /></Link>
                        {headerData.navMenu.map(elem => {
                            return (
                                <StyledHeaderLink 
                                to={elem.url}
                                key={elem.id}
                                >
                                    {elem.text}
                                </StyledHeaderLink>
                            )
                        })}
                        {/* <StyledHeaderLink to="/">Services</StyledHeaderLink>
                        <StyledHeaderLink to="/projects">Projects</StyledHeaderLink>
                        <StyledHeaderLink to="/">Solutions</StyledHeaderLink> */}
                    </HeaderLinkWrapper>
                    <StyledLinkButton type="headerButton" href="#contacts">Contact Us</StyledLinkButton>
                </HeaderContentWrapper>
            </HeaderWrapper>                
        </StyledHeader>   
    );
}

export default Header;
