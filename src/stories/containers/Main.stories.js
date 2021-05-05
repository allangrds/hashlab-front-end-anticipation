import React from 'react'
import Main from '../../containers/Main'

export default {
  component: Main,
  title: 'Containers/Main',
}

const Template = args => (
  <Main {...args} />
)

export const Default = Template.bind({})

Default.args = {}
