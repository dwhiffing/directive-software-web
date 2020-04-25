import React from 'react'
import { Link } from 'gatsby'

export const ProjectView = ({ project, backUri }) => (
  <div>
    <Link to={backUri}>&larr; back</Link>
    <h2>{project.title}</h2>
    <img src={project.image} />
    <div>
      {project.description}
      <br /> <br />
      {project.website && (
        <div>
          Website:{' '}
          <a href={project.website} target="_new">
            {project.website}
          </a>
        </div>
      )}
    </div>
  </div>
)
