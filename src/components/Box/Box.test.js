import React from 'react'
import { render } from '@testing-library/react'

import Box from '.'

test('Box should render and be updated correctly', () => {
  const text = 'Olá mundo'

  const {
    container,
    getByText,
  } = render(
    <Box>
      <p>Olá mundo</p>
    </Box>,
  )

  getByText(text)
  expect(container).toMatchSnapshot()
})
