import * as React from 'react'
import './styles.js'

import FullHeader from '../../elements/Header/header.js'
import StyledLayout from './styles'
import Contacts from '../../elements/Contacts/index.js'
import Footer from '../../elements/Footer/index.js'

const Layout = (props) => {
    return (
        <StyledLayout>
            <FullHeader />
            <main style={{ width: '100%', boxSizing: 'border-box' }}>
                {/* <h1>{props.pageTitle}</h1> */}
                {props.children}                
            </main>
            <Contacts />
            <Footer />
        </StyledLayout>
    )
}

export default Layout