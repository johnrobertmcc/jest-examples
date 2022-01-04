import fetchVehicles from '@/functions/api/fetchSwapi'

// This is the section where we mock `fetch`
const originalFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve({name: 'Sand Crawler'})
    })
})

afterAll(() => {
  global.fetch = originalFetch
})

// This is actual testing suite
describe('Vehicles page', () => {
  test('Successfully fetches vehicles from Star Wars API', async () => {
    const json = await fetchVehicles()
    expect(json).not.toEqual(null)
  })
})
