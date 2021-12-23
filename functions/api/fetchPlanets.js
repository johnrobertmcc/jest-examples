import {NASA_API, NASA_URL} from '@/constants/config'
/**
 * Function to fetchthe planets from the NASA API.
 *
 * @returns {object} Returns the planets and their data from NASA.
 */
export default async function fetchPlanets() {
  const data = await fetch(
    `${NASA_URL}/?api_key=${NASA_API}&feedtype=json&ver=1.0`
  )
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return null
      }
    })
    .then((data) => {
      return data
    })
    .catch((err) => {
      console.error('jr error fetch', err)
      return null
    })
  return data
}
