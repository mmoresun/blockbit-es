import * as React from 'react'
import Header from '../../elements/Header'

const Layout = ({ pageTitle, children }) => {
    return (
        <>
            <Header />
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </>
    )
}

export default Layout