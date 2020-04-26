import React from 'react'
import { Box, ButtonBase, Typography } from '@material-ui/core'

export function ProjectList({ items, numPerRow, onClick }) {
  const numExtra = numPerRow - (items.length % numPerRow)
  const extra = new Array(numExtra === numPerRow ? 0 : numExtra).fill('')

  return (
    <Box
      display="flex"
      flexWrap={{ xs: 'no-wrap', md: 'wrap' }}
      flex={1}
      flexDirection={{ xs: 'column', md: 'row' }}
    >
      {[...items, ...extra].map((project, index) => (
        <ProjectListItem
          key={index}
          numPerRow={numPerRow}
          image={project.image}
          label={project.title}
          onClick={() => onClick(project)}
          // description="description"
        />
      ))}
    </Box>
  )
}

export function ProjectListItem({
  image,
  label,
  description,
  onClick,
  ratio = '56.25%',
  numPerRow = 3,
  style = {},
}) {
  if (!label && !image) {
    return (
      <Box
        flex={`${90 / numPerRow}%`}
        mr={{ xs: 0, md: 2 }}
        mb={{ xs: 2, md: 2 }}
      />
    )
  }
  return (
    <Box
      clone
      flex={{ xs: 1, md: `${90 / numPerRow}%` }}
      position="relative"
      bgcolor="gray"
      mr={{ xs: 0, md: 2 }}
      mb={{ xs: 2, md: 2 }}
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: image ? `url(${image})` : '',
        ...style,
      }}
    >
      <ButtonBase onClick={onClick}>
        <Box height={0} paddingBottom={ratio}>
          {label && (
            <Box
              position="absolute"
              bottom={0}
              right={0}
              left={0}
              px={2}
              py={1}
              textAlign="left"
              bgcolor="rgba(0,0,0,0.5)"
            >
              <Typography style={{ color: 'white' }}>{label}</Typography>
              {description && (
                <Typography style={{ color: 'white' }}>
                  {description}
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </ButtonBase>
    </Box>
  )
}
