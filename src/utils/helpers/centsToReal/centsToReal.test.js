import centsToReal from '.'

test('centsToReal should correct format values', () => {
  const firstValue = 0
  const secondValue = 1095
  const thirdValue = null

  expect(centsToReal(firstValue)).toEqual('R$ 0,00')
  expect(centsToReal(secondValue)).toEqual('R$ 10,95')
  expect(centsToReal(thirdValue)).toEqual('R$ 0,00')
})
