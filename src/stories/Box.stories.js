import React from 'react'
import { Box } from '../components'

export default {
  component: Box,
  title: 'Components/Box',
}

const Template = args => (
  <Box {...args}>
    <p>Olá mundo</p>
  </Box>
)

export const Default = Template.bind({})

Default.args = {}
