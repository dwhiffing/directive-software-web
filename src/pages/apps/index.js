import React from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../../components/Layout'
import { data } from '../../data/apps'
import { ProjectList } from '../../components/ProjectList'
import slugify from 'slugify'

class GamesIndex extends React.Component {
  render() {
    return (
      <Layout title="Apps" site={this.props.data.site}>
        <ProjectList
          items={data}
          numPerRow={3}
          onClick={(project, index) =>
            navigate(`/apps/${slugify(project.title).toLowerCase()}`, {
              state: { project, data, index },
            })
          }
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
