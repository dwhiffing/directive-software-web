import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import logo from '../assets/white-favicon.png'
import hero from '../assets/hero.jpeg'
import { Box, Typography } from '@material-ui/core'

class SiteIndex extends React.Component {
  render() {
    return (
      <Layout site={this.props.data.site}>
        <Box
          display="flex"
          height={400}
          justifyContent="center"
          alignItems="center"
          style={{
            position: 'relative',
            backgroundImage: `url('${hero}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundBlendMode: 'darken',
          }}
        >
          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            bgcolor="black"
            style={{ opacity: 0.5 }}
          />
          <img
            width={250}
            src={logo}
            style={{ zIndex: 11, opacity: 0.9, margin: 0 }}
          />
        </Box>

        {/* <Box py={4} display="flex">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue
            eget arcu dictum varius duis. Vestibulum lectus mauris ultrices eros
            in cursus turpis. Blandit volutpat maecenas volutpat blandit aliquam
            etiam. Sagittis purus sit amet volutpat.
          </p>
        </Box> */}
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
