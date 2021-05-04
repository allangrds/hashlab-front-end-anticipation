import React from 'react'
import { render } from '@testing-library/react'

import ValueToReceive from '.'

test('ValueToReceive should render correctly', () => {
  const in15Days = 1100
  const in30Days = 1200
  const in90Days = 1300
  const tomorrow = 1000

  const formatedIn15Days = 'R$ 11,00'
  const formatedIn30Days = 'R$ 12,00'
  const formatedIn90Days = 'R$ 13,00'
  const formatedTomorrow = 'R$ 10,00'

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

test('ValueToReceive should render correctly without tomorrow', () => {
  const in15Days = 1100
  const in30Days = 1200
  const in90Days = 1300
  const tomorrow = null

  const formatedIn15Days = 'R$ 11,00'
  const formatedIn30Days = 'R$ 12,00'
  const formatedIn90Days = 'R$ 13,00'

  const {
    container,
    getByText,
    queryByText,
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
  expect(queryByText('Amanhã:')).not.toBeInTheDocument()

  expect(container).toMatchSnapshot()
})

test('ValueToReceive should render correctly without 15 days', () => {
  const in15Days = null
  const in30Days = 1200
  const in90Days = 1300
  const tomorrow = 1000

  const formatedIn30Days = 'R$ 12,00'
  const formatedIn90Days = 'R$ 13,00'
  const formatedTomorrow = 'R$ 10,00'

  const {
    container,
    getByText,
    queryByText,
  } = render(
    <ValueToReceive
      in15Days={in15Days}
      in30Days={in30Days}
      in90Days={in90Days}
      tomorrow={tomorrow}
    />,
  )

  getByText(formatedTomorrow)
  getByText(formatedIn30Days)
  getByText(formatedIn90Days)
  expect(queryByText('Em 15 dias:')).not.toBeInTheDocument()

  expect(container).toMatchSnapshot()
})

test('ValueToReceive should render correctly without 30 days', () => {
  const in15Days = 1100
  const in30Days = null
  const in90Days = 1300
  const tomorrow = 1000

  const formatedIn15Days = 'R$ 11,00'
  const formatedIn90Days = 'R$ 13,00'
  const formatedTomorrow = 'R$ 10,00'

  const {
    container,
    getByText,
    queryByText,
  } = render(
    <ValueToReceive
      in15Days={in15Days}
      in30Days={in30Days}
      in90Days={in90Days}
      tomorrow={tomorrow}
    />,
  )

  getByText(formatedTomorrow)
  getByText(formatedIn15Days)
  getByText(formatedIn90Days)
  expect(queryByText('Em 30 dias:')).not.toBeInTheDocument()

  expect(container).toMatchSnapshot()
})

test('ValueToReceive should render correctly without 90 days', () => {
  const in15Days = 1100
  const in30Days = 1200
  const in90Days = null
  const tomorrow = 1000

  const formatedIn15Days = 'R$ 11,00'
  const formatedIn30Days = 'R$ 12,00'
  const formatedTomorrow = 'R$ 10,00'

  const {
    container,
    getByText,
    queryByText,
  } = render(
    <ValueToReceive
      in15Days={in15Days}
      in30Days={in30Days}
      in90Days={in90Days}
      tomorrow={tomorrow}
    />,
  )

  getByText(formatedTomorrow)
  getByText(formatedIn15Days)
  getByText(formatedIn30Days)
  expect(queryByText('Em 90 dias:')).not.toBeInTheDocument()

  expect(container).toMatchSnapshot()
})
