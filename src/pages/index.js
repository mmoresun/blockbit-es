import * as React from 'react'
import './index.css'

import Layout from '../elements/Layout'
import Introduction from '../elements/Introduction'
import Attributes from '../elements/Attributes'
import Technologies from '../elements/Technologies'
import Banner from '../elements/Banner'
import Dicsuss from '../elements/Discuss'
import Collab from '../elements/Collab'
import Workflow from '../elements/Workflow'
import Partners from '../elements/Partners'

const IndexPage = () => {

  return (
    <Layout pageTitle="Home Page">
      <Banner />
      <Introduction />
      <Attributes />
      <Technologies />
      <Dicsuss />
      <Collab />
      <Workflow />
      <Partners />
    </Layout >
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

