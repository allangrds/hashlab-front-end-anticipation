import React from 'react'
import { CurrencyInput } from '../components'

export default {
  component: CurrencyInput,
  title: 'Example/CurrencyInput',
}

const Template = args => <CurrencyInput {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Esse é o label',
  required: true,
  tip: 'Máximo de 12 parcelas',
}

export const WithError = Template.bind({})

WithError.args = {
  errorMessage: 'O limite é de 12 caracteres',
  label: 'Esse é o label',
  required: true,
  tip: 'Máximo de 12 parcelas',
}

