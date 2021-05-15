import React from 'react'
import ValueToReceive from '../../containers/Main/ValueToReceive'

export default {
  component: ValueToReceive,
  title: 'Containers/Main/ValueToReceive',
}

const Template = args => <ValueToReceive {...args} />

export const Default = Template.bind({})

Default.args = {
  anticipationValues: {
    1: 10000,
    15: 5000,
    30: 2500,
    90: 1250,
  },
}
