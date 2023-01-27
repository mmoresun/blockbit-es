// Step 1: Import React
import * as React from 'react'

import Layout from '../layout'
import { MyProjectsWrapper, MyProjectLink } from '../../elements/ProjectsBanner/styles'

import ProjectsBanner from '../../elements/ProjectsBanner'

const Projects = () => {       

    return (
        <Layout pageTitle="Our Projects">
            <ProjectsBanner />
            <MyProjectsWrapper>
                <MyProjectLink>
                    Project 1
                </MyProjectLink>
                <MyProjectLink>
                    Project 2
                </MyProjectLink>
                <MyProjectLink>
                    Project 2
                </MyProjectLink>
            </MyProjectsWrapper>
        </Layout>
    )
}

export const Head = () => <title>Our Projects</title>

export default Projects