import React from 'react'
import { render } from '@testing-library/react'

import Alert from '.'

test('Alert info should render correctly', () => {
  const text = 'Olá mundo'

  const {
    container,
    getByRole,
  } = render(
    <Alert
      type="info"
      text={text}
    />,
  )

  expect(getByRole('alert')).toHaveTextContent(text)
  expect(container).toMatchSnapshot()
})

test('Alert warning should render correctly', () => {
  const text = 'Olá mundo'

  const {
    container,
    getByRole,
  } = render(
    <Alert
      type="warning"
      text={text}
    />,
  )

  expect(getByRole('alert')).toHaveTextContent(text)
  expect(container).toMatchSnapshot()
})

test('Alert error should render correctly', () => {
  const text = 'Olá mundo'

  const {
    container,
    getByRole,
  } = render(
    <Alert
      type="error"
      text={text}
    />,
  )

  expect(getByRole('alert')).toHaveTextContent(text)
  expect(container).toMatchSnapshot()
})
