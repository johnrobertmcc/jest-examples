import budget from '@/pages/api/budget'

test('Calculates your remainding money', () => {
  const req = {
    query: {
      income: '10',
      output: '5'
    }
  }

  const json = jest.fn()

  const status = jest.fn(() => {
    return {
      json
    }
  })

  const res = {status}

  budget(req, res)

  console.log('jr', json.mock)
})
