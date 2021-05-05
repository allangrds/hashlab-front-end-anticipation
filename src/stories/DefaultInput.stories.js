import React from 'react'
import { Input } from '../components'

export default {
  component: Input,
  title: 'Components/DefaultInput',
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Esse é o label',
  onChange: () => alert('onChange'),
  required: true,
  tip: 'Máximo de 12 parcelas',
  type: 'text',
}

export const WithError = Template.bind({})

WithError.args = {
  errorMessage: 'O limite é de 12 caracteres',
  label: 'Esse é o label',
  onChange: () => alert('onChange'),
  required: true,
  tip: 'Máximo de 12 parcelas',
  type: 'text',
}

