const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
  query Projects {
    allMarkdownRemark {
      nodes {
        frontmatter {
          url
        }
      }
    }
  }`
  )
  console.log(data);

  data.allMarkdownRemark.nodes.forEach(element => {
    const { url } = element.frontmatter;
    actions.createPage({
      path: `/projects/${url}`,
      component: path.resolve('./src/elements/ProjectDetails/index.js'),
      context: { url: url }
    })
  });
}

