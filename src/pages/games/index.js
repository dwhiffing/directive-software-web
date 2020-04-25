import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import data from '../../data/games'
import { ProjectList } from '../../components/ProjectList'

class GamesIndex extends React.Component {
  render() {
    return (
      <Layout title="Games" site={this.props.data.site}>
        <ProjectList label="Games" data={data} />
      </Layout>
    )
  }
}

export default GamesIndex

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
