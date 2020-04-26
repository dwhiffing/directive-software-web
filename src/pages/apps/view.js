import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { ProjectView } from '../../components/ProjectView'

export class view extends Component {
  render() {
    return (
      <Layout site={this.props.data.site}>
        <ProjectView backUri="/apps" project={this.props.location.state} />
      </Layout>
    )
  }
}

export default view

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
