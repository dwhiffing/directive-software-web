import React from 'react'
import slugify from 'slugify'
import { Box, ButtonBase, Typography } from '@material-ui/core'

export function ProjectList({ items = [], numPerRow = 3, onClick }) {
  const numExtra = numPerRow - (items.length % numPerRow)
  const extra = new Array(numExtra === numPerRow ? 0 : numExtra).fill('')

  return (
    <Box
      display="flex"
      flexWrap={{ xs: 'no-wrap', sm: 'wrap' }}
      flex={1}
      mr={-2}
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      {[...items, ...extra].map((project, index) => (
        <ProjectListItem
          key={index}
          numPerRow={numPerRow}
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
  if (!label && !image) {
    return (
      <Box
        flex={`${90 / numPerRow}%`}
        mr={{ xs: 0, sm: 2 }}
        mb={{ xs: 2, sm: 2 }}
      />
    )
  }
  return (
    <Box
      clone
      flex={{ xs: 1, sm: `${90 / numPerRow}%` }}
      position="relative"
      bgcolor="gray"
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${require(`../assets/images/${slugify(
          label
        ).toLowerCase()}.png`)})`,
        marginRight: 16,
        marginBottom: 16,
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
