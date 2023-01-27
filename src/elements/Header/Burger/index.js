import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import headerLogo from '../../../images/logos/Blockbit.svg';
import LinkButton from '../../../smalls/LinkButton';
import {
    BurgerLogoLink,
    BurgerIMG,
    BurgerLinkWrapper,
    BurgerTextWrapper,
    BurgerContentWrapper,
    BurgerLinkButton
} from './styles';
import './Sidebar.css'

// I had to completely replicate the menu (incl. logo) in the burger because this 3rd party burger component only works like this

const BurgerMenu = () => {
    return (
        <div style={{ position: 'fixed', top: '0', right: '0', display: 'flex', zIndex: '10' }}>
            <BurgerLogoLink to="/"><BurgerIMG src={headerLogo} alt="" /></BurgerLogoLink>
            <Menu
                right
                isOpen={false}
                width={'100%'}
            >
                <BurgerContentWrapper>
                    <BurgerTextWrapper>
                        <BurgerLogoLink to="/"><BurgerIMG src={headerLogo} alt="" /></BurgerLogoLink>
                        <BurgerLinkWrapper to="#">Services</BurgerLinkWrapper>
                        <BurgerLinkWrapper to="/projects">Projects</BurgerLinkWrapper>
                        <BurgerLinkWrapper to="#">Solutions</BurgerLinkWrapper>
                    </BurgerTextWrapper>
                    <LinkButton type='bannerBurgerButton'>Contact us</LinkButton>
                </BurgerContentWrapper>
            </Menu>
        </div >
    )
}
export default BurgerMenu;
