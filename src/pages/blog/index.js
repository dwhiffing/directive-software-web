import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../../components/Layout'
import { BlogPostListItem } from '../../components/BlogPostListItem'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout site={this.props.data.site}>
        <h2>Blog</h2>
        {posts.map(({ node }) => (
          <BlogPostListItem key={node.frontmatter.path} node={node} />
        ))}
      </Layout>
    )
  }
}

export default BlogIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
            type
          }
        }
      }
    }
  }
`
