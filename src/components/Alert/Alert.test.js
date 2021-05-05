import React from 'react'
import { render } from '@testing-library/react'

import Alert from '.'

test('Alert info should render correctly', () => {
  const text = 'Olá mundo'

  const {
    container,
    getByText,
  } = render(
    <Alert
      type="info"
      text={text}
    />,
  )

  getByText(text)
  expect(container).toMatchSnapshot()
})

test('Alert warning should render correctly', () => {
  const text = 'Olá mundo'

  const {
    container,
    getByText,
  } = render(
    <Alert
      type="warning"
      text={text}
    />,
  )

  getByText(text)
  expect(container).toMatchSnapshot()
})

test('Alert error should render correctly', () => {
  const text = 'Olá mundo'

  const {
    container,
    getByText,
  } = render(
    <Alert
      type="error"
      text={text}
    />,
  )

  getByText(text)
  expect(container).toMatchSnapshot()
})
