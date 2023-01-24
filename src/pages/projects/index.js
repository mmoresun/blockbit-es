// Step 1: Import React
import * as React from 'react'
import Layout from '../layout'
import Animation from '../../mediums/Animation'

const Projects = () => {
    return (
        <Layout pageTitle="Our Projects">
            <p>Hi there! Here you can see our projects.</p>
            <Animation />
        </Layout>
    )
}

export const Head = () => <title>Our Projects</title>

export default Projects