import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout title="Not Found" site={this.props.data.site}>
        <h1>Not Found</h1>
      </Layout>
    )
  }
}

export default NotFoundPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
