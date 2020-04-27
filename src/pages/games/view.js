import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { ProjectView } from '../../components/ProjectView'

export class view extends Component {
  render() {
    const { project, data = [], index = 0 } = this.props.location.state
    return (
      <Layout site={this.props.data.site}>
        <ProjectView
          label="Games"
          backUri="/games"
          project={project}
          data={data}
          index={index}
        />
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
