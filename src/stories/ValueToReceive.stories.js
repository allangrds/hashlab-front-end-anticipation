import React from 'react'
import ValueToReceive from '../containers/Main/ValueToReceive'

export default {
  component: ValueToReceive,
  title: 'Example/ValueToReceive',
}

const Template = args => <ValueToReceive {...args} />

export const Default = Template.bind({})

Default.args = {}
