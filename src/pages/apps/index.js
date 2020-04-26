import React from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../../components/Layout'
import data from '../../data/apps'
import { ProjectList } from '../../components/ProjectList'

class GamesIndex extends React.Component {
  render() {
    return (
      <Layout title="Apps" site={this.props.data.site}>
        <ProjectList
          items={data}
          numPerRow={3}
          onClick={(project) => navigate('/apps/view', { state: project })}
        />
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
