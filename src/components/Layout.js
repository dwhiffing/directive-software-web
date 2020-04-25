import React from 'react'
import get from 'lodash/get'
import { rhythm } from '../utils/typography'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

class Layout extends React.Component {
  render() {
    const { children, title, site } = this.props
    const importedStyle = this.props.style
    const defaultStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(32),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    }

    const finalStyle = {
      ...defaultStyle,
      ...importedStyle,
    }

    const siteDescription = get(site, 'siteMetadata.description')
    const siteTitle = get(site, 'siteMetadata.title')

    return (
      <div style={finalStyle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${siteTitle}${title ? ` | ${title}` : ''}`}
        />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: rhythm(24),
              maxWidth: 400,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Link to={'/'}>Home</Link>
            {/* <Link to={'/apps'}>Apps</Link> */}
            <Link to={'/games'}>Games</Link>
            <Link to={'/contact'}>Contact</Link>
            {/* <Link to={'/blog'}>Blog</Link> */}
          </div>
        </div>
        <br />
        {children}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: 2,
            color: 'gray',
            paddingTop: 15,
          }}
        >
          Directive Software
        </div>
      </div>
    )
  }
}

export default Layout
