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
      anticipationValues={{
        1: tomorrow,
        15: in15Days,
        30: in30Days,
        90: in90Days,
      }}
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
  const formatedTomorrow = 'R$ 0,00'

  const {
    container,
    getByText,
  } = render(
    <ValueToReceive
      anticipationValues={{
        1: tomorrow,
        15: in15Days,
        30: in30Days,
        90: in90Days,
      }}
    />,
  )

  getByText(formatedTomorrow)
  getByText(formatedIn15Days)
  getByText(formatedIn30Days)
  getByText(formatedIn90Days)

  expect(container).toMatchSnapshot()
})

test('ValueToReceive should render correctly without 15 days', () => {
  const in15Days = null
  const in30Days = 1200
  const in90Days = 1300
  const tomorrow = 1000

  const formatedIn15Days = 'R$ 0,00'
  const formatedIn30Days = 'R$ 12,00'
  const formatedIn90Days = 'R$ 13,00'
  const formatedTomorrow = 'R$ 10,00'

  const {
    container,
    getByText,
  } = render(
    <ValueToReceive
      anticipationValues={{
        1: tomorrow,
        15: in15Days,
        30: in30Days,
        90: in90Days,
      }}
    />,
  )

  getByText(formatedTomorrow)
  getByText(formatedIn15Days)
  getByText(formatedIn30Days)
  getByText(formatedIn90Days)

  expect(container).toMatchSnapshot()
})

test('ValueToReceive should render correctly without 30 days', () => {
  const in15Days = 1100
  const in30Days = null
  const in90Days = 1300
  const tomorrow = 1000

  const formatedIn15Days = 'R$ 11,00'
  const formatedIn30Days = 'R$ 0,00'
  const formatedIn90Days = 'R$ 13,00'
  const formatedTomorrow = 'R$ 10,00'

  const {
    container,
    getByText,
  } = render(
    <ValueToReceive
      anticipationValues={{
        1: tomorrow,
        15: in15Days,
        30: in30Days,
        90: in90Days,
      }}
    />,
  )

  getByText(formatedTomorrow)
  getByText(formatedIn15Days)
  getByText(formatedIn30Days)
  getByText(formatedIn90Days)

  expect(container).toMatchSnapshot()
})

test('ValueToReceive should render correctly without 90 days', () => {
  const in15Days = 1100
  const in30Days = 1200
  const in90Days = null
  const tomorrow = 1000

  const formatedIn15Days = 'R$ 11,00'
  const formatedIn30Days = 'R$ 12,00'
  const formatedIn90Days = 'R$ 0,00'
  const formatedTomorrow = 'R$ 10,00'

  const {
    container,
    getByText,
  } = render(
    <ValueToReceive
      anticipationValues={{
        1: tomorrow,
        15: in15Days,
        30: in30Days,
        90: in90Days,
      }}
    />,
  )

  getByText(formatedTomorrow)
  getByText(formatedIn15Days)
  getByText(formatedIn30Days)
  getByText(formatedIn90Days)

  expect(container).toMatchSnapshot()
})
