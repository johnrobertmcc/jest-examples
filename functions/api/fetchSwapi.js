export default async function fetchVehicles() {
  const res = await fetch(`https://swapi.dev/api/vehicles`)
  const data = await res.json()
  return data
}
