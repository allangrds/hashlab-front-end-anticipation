import React from 'react'
import ValueToReceive from '../../containers/Main/ValueToReceive'

export default {
  component: ValueToReceive,
  title: 'Containers/Main/ValueToReceive',
}

const Template = args => <ValueToReceive {...args} />

export const Default = Template.bind({})

Default.args = {
  in15Days: 11000,
  in30Days: 12000,
  in90Days: 13000,
  tomorrow: 10000,
}
