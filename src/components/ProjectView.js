import React from 'react'
import { Link } from 'gatsby'
import { Box, Typography } from '@material-ui/core'

export const ProjectView = ({ project, backUri }) => (
  <Box>
    <Box display="flex" mb={2} alignItems="center">
      <Link to={backUri}>Back</Link>
      <Box mx={2} />
      <Typography variant="h3">{project.title}</Typography>
    </Box>

    <Box
      my={2}
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }}
      alignItems="center"
    >
      <img width={500} src={project.image} />
      <Box my={2} mx={2}>
        <Typography>{project.description}</Typography>
        {project.website && (
          <Typography component="a" href={project.website} target="_new">
            Website: {project.website}
          </Typography>
        )}
      </Box>
    </Box>
  </Box>
)
