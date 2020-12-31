import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from '.'

test('Input with type "text" should render and be updated correctly', () => {
  const callback = jest.fn()
  const props = {
    id: 'idLegal',
    label: 'Esse é o label',
    name: 'input',
    onChange: callback,
    required: true,
    tip: 'Máximo de 12 parcelas',
    type: 'text',
  }
  const value = 'a'

  const {
    container,
    getByDisplayValue,
    getByLabelText,
    getByText,
  } = render(
    <Input {...props} />,
  )

  expect(callback).not.toHaveBeenCalled()

  getByLabelText(`${props.label} *`)
  getByText(props.tip)

  const input = getByDisplayValue('')

  userEvent.type(input, value)

  expect(callback).toHaveBeenCalledTimes(1)

  expect(container).toMatchSnapshot()
})

test('Input with type "money" should render and be updated correctly', () => {
  const callback = jest.fn()
  const props = {
    id: 'oId',
    label: 'Esse é o label',
    name: 'input',
    onChange: callback,
    required: true,
    tip: 'Máximo de 12 parcelas',
    type: 'money',
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

  expect(callback).not.toHaveBeenCalled()

  getByLabelText(`${props.label} *`)
  getByText(props.tip)

  const input = getByDisplayValue(initialValue)

  userEvent.type(input, newRawValue)

  expect(callback).toHaveBeenCalledTimes(3)

  getByDisplayValue(newFormatedValue)

  expect(container).toMatchSnapshot()
})

test('Input should render with error message', () => {
  const props = {
    errorMessage: 'Mensagem de erro',
    id: 'oId',
    label: 'Esse é o label',
    name: 'input',
    onChange: () => null,
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
