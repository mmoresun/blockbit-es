import * as React from 'react'
import './styles.js'

import Header from '../../elements/Header'
import StyledLayout from './styles'
import Contacts from '../../elements/Contacts/index.js'
import Footer from '../../elements/Footer/index.js'

const Layout = (props) => {
    return (
        <StyledLayout>
            <Header />
            <main>
                <h1>{props.pageTitle}</h1>
                {props.children}
            </main>
            <Contacts />
            <Footer />
        </StyledLayout>
    )
}

export default Layout