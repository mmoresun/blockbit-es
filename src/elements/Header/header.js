import React from 'react';
import { useMediaQuery } from 'react-responsive'

import Header from './index.js';
import BurgerMenu from './Burger';

// This component includes desktop and mobile navigation menu

const FullHeader = () => {

    const isBurger = useMediaQuery({
        query: '(max-width: 768px)'
    })
    // conditional rendering of desktop or mobile menu
    return (
        <>
            {isBurger ? <BurgerMenu /> : <Header />}
        </>
    );
}

export default FullHeader;
