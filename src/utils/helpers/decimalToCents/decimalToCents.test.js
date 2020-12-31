import decimalToCents from '.'

test('decimalToCents should correct format values', () => {
  const firstValue = 0.02
  const secondValue = 23.22
  const thirdValue = 293.22

  expect(decimalToCents(firstValue)).toEqual(2)
  expect(decimalToCents(secondValue)).toEqual(2322)
  expect(decimalToCents(thirdValue)).toEqual(29322)
})
