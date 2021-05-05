import validation from '.'

test('validation should correct validate values', () => {
  const payload = {}
  const payload2 = {
    amount: 'R$1,00',
    installments: -1,
    mdr: -1,
  }
  const payload3 = {
    amount: 'R$1.000.000,01',
    installments: 13,
    mdr: -1,
  }
  const payload4 = {
    amount: 'R$10,00',
    installments: 12,
    mdr: 1,
  }

  const res = validation(payload)
  const res2 = validation(payload2)
  const res3 = validation(payload3)
  const res4 = validation(payload4)

  expect(res.amount).toEqual('Este campo é obrigatório')
  expect(res.installments).toEqual('Este campo é obrigatório')
  expect(res.mdr).toEqual('Este campo é obrigatório')

  expect(res2.amount).toEqual('Valor muito baixo')
  expect(res2.installments).toEqual('Parcela inválida')
  expect(res2.mdr).toEqual('MDR inválido')

  expect(res3.amount).toEqual('Valor muito alto')
  expect(res3.installments).toEqual('Parcela inválida')
  expect(res3.mdr).toEqual('MDR inválido')

  expect(res4.amount).toEqual(undefined)
  expect(res4.installments).toEqual(undefined)
  expect(res4.mdr).toEqual(undefined)
})
