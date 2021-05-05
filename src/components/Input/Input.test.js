import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from '.'

test('Input/MoneyInput should render and be updated correctly', () => {
  const callback = jest.fn()
  const props = {
    label: 'Esse é o label',
    name: 'installments',
    onChange: callback,
    required: true,
    tip: 'Máximo de 12 parcelas',
    type: 'money',
    value: 0,
  }
  const initialValue = 'R$0,00'
  const newRawValue = '123'
  const newFormatedValue = 'R$1,23'

  const {
    container,
    getByDisplayValue,
    getByLabelText,
    getByText,
  } = render(
    <Input {...props} />,
  )

  expect(callback).toHaveBeenCalledTimes(0)

  getByLabelText(`${props.label} *`)
  getByText(props.tip)

  const input = getByDisplayValue(initialValue)

  userEvent.type(input, newRawValue)

  expect(callback).toHaveBeenCalledTimes(3)

  getByDisplayValue(newFormatedValue)

  expect(container).toMatchSnapshot()
})

test('Input/DefaultInput should render and be updated correctly', () => {
  const callback = jest.fn()
  const props = {
    label: 'Esse é o label',
    name: 'installments',
    onChange: callback,
    required: true,
    tip: 'Máximo de 12 parcelas',
    type: 'text',
  }
  const initialValue = ''
  const newRawValue = '123a'

  const {
    container,
    getByDisplayValue,
    getByLabelText,
    getByText,
  } = render(
    <Input {...props} />,
  )

  expect(callback).toHaveBeenCalledTimes(0)

  getByLabelText(`${props.label} *`)
  getByText(props.tip)

  const input = getByDisplayValue(initialValue)

  userEvent.type(input, newRawValue)

  expect(callback).toHaveBeenCalledTimes(4)

  getByDisplayValue(newRawValue)

  expect(container).toMatchSnapshot()
})

test('Input/MoneyInput should render with error message', () => {
  const callback = jest.fn()
  const props = {
    errorMessage: 'Mensagem de erro',
    label: 'Esse é o label',
    name: 'installments',
    onChange: callback,
    required: true,
    type: 'money',
  }

  const {
    container,
    getByText,
  } = render(
    <Input {...props} />,
  )

  getByText(props.errorMessage)

  expect(container).toMatchSnapshot()
})

test('Input/DefaultInput should render with error message', () => {
  const callback = jest.fn()
  const props = {
    errorMessage: 'Mensagem de erro',
    label: 'Esse é o label',
    name: 'installments',
    onChange: callback,
    required: true,
    type: 'text',
  }

  const {
    container,
    getByText,
  } = render(
    <Input {...props} />,
  )

  getByText(props.errorMessage)

  expect(container).toMatchSnapshot()
})
