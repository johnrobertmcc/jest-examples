export default async function fetchVehicles() {
  const data = await fetch(`https://swapi.dev/api/vehicles`)
    .then((res) => {
      console.log('res', res)
      return res.json()
    })
    .then((data) => data)
    .catch((err) => console.error('Fetch Error: ', err))

  return data
}
