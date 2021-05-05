import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CurrencyInput from '.'

test('CurrencyInput should render and be updated correctly', () => {
  const callback = jest.fn()
  const props = {
    label: 'Esse é o label',
    name: 'installments',
    onChange: callback,
    required: true,
    tip: 'Máximo de 12 parcelas',
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
    <CurrencyInput {...props} />,
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

test('CurrencyInput should render with error message', () => {
  const props = {
    errorMessage: 'Mensagem de erro',
    label: 'Esse é o label',
    required: true,
  }

  const {
    container,
    getByText,
  } = render(
    <CurrencyInput {...props} />,
  )

  getByText(props.errorMessage)

  expect(container).toMatchSnapshot()
})
