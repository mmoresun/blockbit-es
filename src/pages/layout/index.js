import * as React from 'react'
import './styles.js'
import Header from '../../elements/Header'
import StyledLayout from './styles'

const Layout = (props) => {
    return (
        <StyledLayout>
            <Header />                        
            <main>
                <h1>{props.pageTitle}</h1>
                {props.children}
            </main>
        </StyledLayout>
    )
}

export default Layout