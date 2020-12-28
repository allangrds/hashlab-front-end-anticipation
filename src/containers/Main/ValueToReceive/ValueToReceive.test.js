import React from 'react'
import { render } from '@testing-library/react'

import ValueToReceive from '.'

test('ValueToReceive should render correctly', () => {
  const in15Days = 1234
  const in30Days = 98732
  const in90Days = 10
  const tomorrow = null

  const formatedIn15Days = 'R$ 12,34'
  const formatedIn30Days = 'R$ 987,32'
  const formatedIn90Days = 'R$ 0,10'
  const formatedTomorrow = 'R$ 0,00'

  const {
    container,
    getByText,
  } = render(
    <ValueToReceive
      in15Days={in15Days}
      in30Days={in30Days}
      in90Days={in90Days}
      tomorrow={tomorrow}
    />,
  )

  getByText(formatedIn15Days)
  getByText(formatedIn30Days)
  getByText(formatedIn90Days)
  getByText(formatedTomorrow)
  expect(container).toMatchSnapshot()
})
