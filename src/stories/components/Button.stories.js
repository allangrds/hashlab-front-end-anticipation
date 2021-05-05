import React from 'react'
import { Button } from '../../components'

export default {
  component: Button,
  title: 'Components/Button',
}

const Template = args => (
  <Button {...args} />
)

export const Default = Template.bind({})

Default.args = {
  onClick: () => alert('Clicou'),
  text: 'Botão',
}

export const Disabled = Template.bind({})

Disabled.args = {
  disabled: true,
  onClick: () => alert('Clicou'),
  text: 'Botão',
}
