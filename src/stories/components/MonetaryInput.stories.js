import React from 'react'
import { Input } from '../../components'

export default {
  component: Input,
  title: 'Components/MonetaryInput',
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Esse é o label',
  name: 'installments',
  onChange: () => alert('onChange'),
  required: true,
  tip: 'Máximo de 12 parcelas',
  type: 'money',
}

export const WithError = Template.bind({})

WithError.args = {
  errorMessage: 'O limite é de 12 caracteres',
  label: 'Esse é o label',
  name: 'installments',
  onChange: () => alert('onChange'),
  required: true,
  tip: 'Máximo de 12 parcelas',
  type: 'money',
}

