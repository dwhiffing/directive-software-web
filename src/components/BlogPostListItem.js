import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import { rhythm } from '../utils/typography'

export function BlogPostListItem({ node }) {
  const title = get(node, 'frontmatter.title') || node.frontmatter.path
  return (
    <div>
      <h3 style={{ marginBottom: rhythm(1 / 4) }}>
        <Link style={{ boxShadow: 'none' }} to={node.frontmatter.path}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: node.excerpt,
        }}
      />
    </div>
  )
}
