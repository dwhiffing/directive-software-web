import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { Box, Container, Link, MuiThemeProvider } from '@material-ui/core'
import { theme } from './theme'
import logo from '../assets/type-logo.png'

class Layout extends React.Component {
  render() {
    const { children, title, site } = this.props
    const siteDescription = get(site, 'siteMetadata.description')
    const siteTitle = get(site, 'siteMetadata.title')

    return (
      <MuiThemeProvider theme={theme}>
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            maxWidth: 1200,
            ...this.props.style,
          }}
        >
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: siteDescription }]}
            title={`${siteTitle}${title ? ` | ${title}` : ''}`}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
            flex={1}
          >
            <Box>
              <Box
                width="100%"
                py={4}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mx="auto"
              >
                <Box flex={3}>
                  <img height={50} src={logo} style={{ marginBottom: 0 }} />
                </Box>

                <Box
                  flex={1}
                  minWidth={180}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Link href={'/'}>Home</Link>
                  {/* <Link href={'/apps'}>Apps</Link> */}
                  <Link href={'/games'}>Games</Link>
                  <Link href={'/contact'}>Contact</Link>
                  {/* <Link href={'/blog'}>Blog</Link> */}
                </Box>
              </Box>

              {children}
            </Box>
            <Box
              display="flex"
              py={2}
              style={{
                textTransform: 'uppercase',
                letterSpacing: 2,
                fontSize: 11,
                color: 'gray',
              }}
            >
              © DIRECTIVE SOFTWARE | 2020
            </Box>
          </Box>
        </Container>
      </MuiThemeProvider>
    )
  }
}

export default Layout
