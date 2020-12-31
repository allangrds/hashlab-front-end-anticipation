import React from 'react'
import { action } from '@storybook/addon-actions'

import { Input } from '../components'

export default {
  component: Input,
  title: 'Components/Input',
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Input normal',
  name: 'normalInput',
  onChange: obj => action(obj), //eslint-disable-line
  required: true,
  tip: 'Dica legal',
  type: 'text',
}

export const Money = Template.bind({})

Money.args = {
  label: 'Input com dinheiro',
  name: 'moneyInput',
  onChange: obj => action(obj),
  required: true,
  tip: 'Dica legal',
  type: 'money',
}

export const WithError = Template.bind({})

WithError.args = {
  errorMessage: 'aí tem um erro',
  label: 'Input com dinheiro',
  name: 'moneyInput',
  onChange: obj => action(obj),
  required: true,
  tip: 'Dica legal',
  type: 'money',
}
