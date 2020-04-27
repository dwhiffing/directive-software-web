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
          description={project.year}
          index={index}
          onClick={() => onClick(project, index)}
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
  index,
  ratio = '66.66%',
  numPerRow = 3,
  style = {},
}) {
  const spacing = 2
  if (!label && !image) {
    return (
      <Box
        flex={`${90 / numPerRow}%`}
        mr={{ xs: 0, md: spacing }}
        mb={{ xs: spacing, md: spacing }}
      />
    )
  }
  return (
    <Box
      clone
      flex={{ xs: 1, md: `${90 / numPerRow}%` }}
      position="relative"
      bgcolor="gray"
      mr={{
        xs: 0,
        md: index > 0 && (index + 1) % numPerRow === 0 ? 0 : spacing,
      }}
      mb={{ xs: spacing, md: spacing }}
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
              justifyContent="space-between"
              textAlign="left"
              display="flex"
              bgcolor="rgba(0,0,0,0.7)"
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
