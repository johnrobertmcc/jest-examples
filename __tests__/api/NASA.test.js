import fetchImgOfDay from '@/functions/api/fetchImgOfDay'

// // This is the section where we mock `fetch`
const originalFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve({title: 'This is the title.'})
    })
})

afterAll(() => {
  global.fetch = originalFetch
})

describe('NASA page', () => {
  test('Successfully fetches the image of the day from NASA', async () => {
    const json = await fetchImgOfDay()
    console.log(json)
    expect(json).not.toEqual(null)
  })
})
