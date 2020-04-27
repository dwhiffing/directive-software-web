import React from 'react'
import { navigate, Link } from 'gatsby'
import { Box, Typography, Button } from '@material-ui/core'

export const ProjectView = ({
  label,
  project,
  data = [],
  index = 0,
  backUri,
}) => {
  const nextIndex = index + 1 >= data.length ? 0 : index + 1
  const prevIndex = index - 1 < 0 ? data.length - 1 : index - 1
  const next = () =>
    navigate(`${backUri}/view`, {
      state: { project: data[nextIndex], data, index: nextIndex },
    })
  const previous = () =>
    navigate(`${backUri}/view`, {
      state: { project: data[prevIndex], data, index: prevIndex },
    })

  if (!project) {
    return null
  }

  return (
    <Box>
      <Box
        display="flex"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box flex={1}>
          <Typography component="a" href="javascript:;" onClick={previous}>
            {data[prevIndex].title}
          </Typography>
        </Box>
        <Box flex={1} display="flex" justifyContent="center">
          <Typography variant="h6">
            <Link to={backUri}>{label}</Link> / {project.title}
          </Typography>
        </Box>
        <Box flex={1} display="flex" justifyContent="flex-end">
          <Typography component="a" href="javascript:;" onClick={next}>
            {data[nextIndex].title}
          </Typography>
        </Box>
      </Box>

      <Box
        my={2}
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center"
      >
        <Typography component="a" href={project.website} target="_new">
          <img width={500} src={project.image} />
        </Typography>
        <Box my={2} mx={2}>
          <Typography>{project.description}</Typography>
          {project.website && (
            <Typography component="a" href={project.website} target="_new">
              {project.website}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}
