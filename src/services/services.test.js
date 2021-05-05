import services from '.'

test('services should correct format values', async () => {
  const mockJsonPromise = Promise.resolve({
    json: () => ({
      1: 10000,
      15: 11000,
      30: 12000,
      90: 13000,
    }),
  })
  jest.spyOn(global, 'fetch').mockImplementation(() => mockJsonPromise)

  const response = await services.simulation({
    amount: 10000,
    installments: 1,
    mdr: 0,
  })
  const result = response.json()

  expect(result['1']).toEqual(10000)
  expect(result['15']).toEqual(11000)
  expect(result['30']).toEqual(12000)
  expect(result['90']).toEqual(13000)
})
