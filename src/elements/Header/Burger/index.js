import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';

import StyledLinkButton from '../../../smalls/LinkButton/styles';
import {
    BurgerLogoLink,
    BurgerIMG,
    BurgerLinkWrapper,
    BurgerTextWrapper,
    BurgerContentWrapper,
    BurgerHeaderCanvas
} from './styles';
import './Sidebar.css';
import { headerData } from '../../../data/header-data';

// I had to completely replicate the menu (incl. logo) in the burger because this 3rd party burger component only works like this

const BurgerMenu = () => {

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
    }, []);

    const [isOpen, setIsOPen] = useState(false);

    const handleIsOpen = () => {
        setIsOPen(prev => !prev)
    };

    const closeSideBar = () => {
        setIsOPen(false);
    }

    return (
        <div style={{ position: 'fixed', top: '0', right: '0', display: 'flex', zIndex: '10' }}>
            <BurgerHeaderCanvas isScrolled={isScrolled}>
                <BurgerLogoLink to="/"><BurgerIMG src={headerData.logo} alt="" /></BurgerLogoLink>
            </BurgerHeaderCanvas>
            <Menu
                right
                isOpen={isOpen}
                onOpen={handleIsOpen}
                onClose={handleIsOpen}
                width={'100%'}
            >
                <BurgerContentWrapper>
                    <BurgerTextWrapper>
                        <BurgerLogoLink to="/"><BurgerIMG src={headerData.logo} alt="" /></BurgerLogoLink>
                        {headerData.navMenu.map(elem => {
                            return (
                                <BurgerLinkWrapper
                                    key={elem.id}
                                    to={elem.url}
                                >
                                    {elem.text}
                                </BurgerLinkWrapper>
                            )
                        })}
                    </BurgerTextWrapper>
                    <StyledLinkButton type="bannerBurgerButton" href="/#contacts " onClick={closeSideBar}>Contact us</StyledLinkButton>
                </BurgerContentWrapper>
            </Menu>
        </div >
    )
}
export default BurgerMenu;
