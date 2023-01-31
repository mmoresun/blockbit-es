import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../elements/Layout'
import { MyProjectsWrapper, MyProjectLink } from '../../elements/ProjectsBanner/styles'
import ProjectsBanner from '../../elements/ProjectsBanner'

const Projects = ({ data }) => {

    const { nodes } = data.allMarkdownRemark;

    return (
        <Layout pageTitle="Our Projects">
            <ProjectsBanner />
            <MyProjectsWrapper>
                {nodes.map(elem => {
                    const { title, url } = elem.frontmatter;
                    return <MyProjectLink
                        key={elem.id}
                        to={`/projects/${url}`}
                    >
                        {title}
                    </MyProjectLink>
                })}
            </MyProjectsWrapper>
        </Layout>
    )
}

export const Head = () => <title>Our Projects</title>

export default Projects

export const query = graphql`
query ProjectsQuery {
    allMarkdownRemark(sort: {frontmatter: {title: ASC}}) {
        nodes {
          frontmatter {
            title
            url            
          }
          html
          id
        }
    }
}`