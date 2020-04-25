import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import logo from '../assets/trans-logo.png'
import { Box } from '@material-ui/core'

class SiteIndex extends React.Component {
  render() {
    return (
      <Layout site={this.props.data.site}>
        <Box display="flex">
          <img
            width={200}
            src={logo}
            style={{ display: 'block', margin: '20px auto' }}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue
            eget arcu dictum varius duis. Vestibulum lectus mauris ultrices eros
            in cursus turpis. Blandit volutpat maecenas volutpat blandit aliquam
            etiam. Sagittis purus sit amet volutpat.
          </p>
        </Box>
      </Layout>
    )
  }
}

export default SiteIndex

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
