import React from 'react'
import Form from '../../containers/Main/Form'

export default {
  component: Form,
  title: 'Containers/Main/Form',
}

const Template = args => <Form {...args} />

export const Default = Template.bind({})

Default.args = {
  onClick: values => console.log(values),
}
