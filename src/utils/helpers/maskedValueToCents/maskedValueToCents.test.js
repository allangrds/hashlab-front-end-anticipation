import maskedValueToCents from '.'

test('maskedValueToCents should correct format values', () => {
  const firstValue = 'R$1,02'
  const secondValue = 'R$1.000,05'
  const thirdValue = 'R$12.000,35'

  expect(maskedValueToCents(firstValue)).toEqual(102)
  expect(maskedValueToCents(secondValue)).toEqual(100005)
  expect(maskedValueToCents(thirdValue)).toEqual(1200035)
})
