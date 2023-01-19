import * as React from 'react'
import './styles.module.css'
import Header from '../../elements/Header'

const Layout = (props) => {
    return (
        <>
            <Header />                        
            <main>
                <h1>{props.pageTitle}</h1>
                {props.children}
            </main>
        </>
    )
}

export default Layout