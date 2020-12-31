import React from 'react'
import ValueToReceive from '../containers/Main/ValueToReceive'

export default {
  component: ValueToReceive,
  title: 'Containers/Main/ValueToReceive',
}

const Template = args => <ValueToReceive {...args} />

export const Default = Template.bind({})

Default.args = {}
