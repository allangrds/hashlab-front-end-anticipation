import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from '.'

test('Button should render and be updated correctly', () => {
  const callback = jest.fn()
  const text = 'Botão'

  const {
    container,
    getByText,
  } = render(
    <Button
      text={text}
      onClick={callback}
    />,
  )

  expect(callback).toHaveBeenCalledTimes(0)

  const button = getByText(text)
  userEvent.click(button)

  expect(callback).toHaveBeenCalledTimes(1)

  expect(container).toMatchSnapshot()
})
