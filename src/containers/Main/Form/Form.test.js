import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Form from '.'

test('Form should render correctly', () => {
  const callback = jest.fn()

  const {
    container,
    getAllByText,
    getByLabelText,
    getByText,
    queryByText,
  } = render(
    <Form
      onClick={callback}
    />,
  )

  expect(callback).toHaveBeenCalledTimes(0)

  getByText('Simule sua Antecipação')

  const amountInput = getByLabelText('Informe o valor da venda *')
  const installmentsInput = getByLabelText('Em quantas parcelas *')
  const mdrInput = getByLabelText('Informe o percentual de MDR *')

  expect(amountInput.value.length).toEqual(0)
  expect(installmentsInput.value.length).toEqual(0)
  expect(mdrInput.value.length).toEqual(0)

  const button = getByText('Simular')
  userEvent.click(button)

  expect(getAllByText('Este campo é obrigatório').length).toEqual(3)

  userEvent.type(amountInput, '22,22')
  userEvent.type(installmentsInput, '1')
  userEvent.type(mdrInput, '0')

  userEvent.click(button)

  expect(queryByText('Este campo é obrigatório')).not.toBeInTheDocument()

  expect(callback).toHaveBeenCalledTimes(1)

  expect(container).toMatchSnapshot()
})
