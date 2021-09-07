import React from 'react'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import { Box, Container, MuiThemeProvider, Button } from '@material-ui/core'
import { theme } from './theme'
import logo from '../assets/type-logo.png'
import { navigate } from 'gatsby'
import { create } from 'jss'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'
import increaseSpecificity from 'jss-increase-specificity'

const jss = create({
  plugins: [...jssPreset().plugins, increaseSpecificity()],
})

class Layout extends React.Component {
  render() {
    const { children, title, site } = this.props
    const siteDescription = get(site, 'siteMetadata.description')
    const siteTitle = get(site, 'siteMetadata.title')

    return (
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={theme}>
          <Container
            component="main"
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
                  component="header"
                  width="100%"
                  py={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  mx="auto"
                >
                  <Box flex={3}>
                    <img height={50} src={logo} style={{ marginBottom: 0 }} />
                  </Box>

                  <Box
                    flex={1}
                    component="nav"
                    minWidth={400}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Button onClick={() => navigate('/')}>Home</Button>
                    <Button onClick={() => navigate('/apps/')}>Apps</Button>
                    <Button onClick={() => navigate('/games/')}>Games</Button>
                    <Button onClick={() => navigate('/resume/')}>Resume</Button>
                    <Button onClick={() => navigate('/contact/')}>
                      Contact
                    </Button>
                    {/* <Link href={'/blog'}>Blog</Link> */}
                  </Box>
                </Box>

                {children}
              </Box>
              <Box
                component="footer"
                display="flex"
                py={2}
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  fontSize: 11,
                  color: 'gray',
                }}
              >
                © DIRECTIVE SOFTWARE | {new Date().getFullYear()}
              </Box>
            </Box>
          </Container>
        </MuiThemeProvider>
      </StylesProvider>
    )
  }
}

export default Layout
