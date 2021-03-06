import React, { Component } from 'react'
import { graphql } from 'gatsby'
import slugify from 'slugify'
import Layout from '../components/Layout'
import { ProjectView } from '../components/ProjectView'
import { data } from '../data/apps'

export class view extends Component {
  render() {
    const { path } = this.props
    const title = path.split('/')[2]
    const index = data.findIndex(
      (p) => slugify(p.title).toLowerCase() === title
    )
    const project = data[index]
    return (
      <Layout site={this.props.data.site}>
        <ProjectView
          label="Apps"
          backUri="/apps"
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
