import * as React from 'react'
import './styles.js'

import FullHeader from '../Header/header.js'
import StyledLayout from './styles.js'
import Contacts from '../Contacts/index.js'
import Footer from '../Footer/index.js'

const Layout = (props) => {
    return (
        <StyledLayout>
            <FullHeader />
            <main style={{ width: '100%', boxSizing: 'border-box' }}>                
                {props.children}                
            </main>
            <Contacts />
            <Footer />
        </StyledLayout>
    )
}

export default Layout