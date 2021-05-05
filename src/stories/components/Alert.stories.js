import React from 'react'
import { Alert } from '../../components'

export default {
  component: Alert,
  title: 'Components/Alert',
}

const Template = args => (
  <Alert {...args} />
)

export const Info = Template.bind({})

Info.args = {
  text: 'Atenção, marujo!',
  type: 'info',
}

export const Warning = Template.bind({})

Warning.args = {
  text: 'Atenção, marujo!',
  type: 'warning',
}

export const Error = Template.bind({})

Error.args = {
  text: 'Atenção, marujo!',
  type: 'error',
}
