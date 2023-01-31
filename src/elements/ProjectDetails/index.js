import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../Layout';

const ProjectDetails = ({ data }) => {

    const { html } = data.markdownRemark;

    return (
        <Layout>
            <div style={{ background: 'linear-gradient(80.9deg, rgb(41, 130, 226) 33.12%, rgb(0, 255, 202) 120.72%)', minHeight: '250px', width: '100%' }}></div>
            <div style={{ textAlign: 'center', padding: '150px 0' }}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </Layout>
    );
}

export default ProjectDetails;

export const query = graphql` 

 query ProjectQuery($url: String) {
    markdownRemark(frontmatter: {url: {eq: $url}}) {
      html
    }
 }`

