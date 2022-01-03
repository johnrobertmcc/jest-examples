import {NASA_API, NASA_URL} from '@/constants/config'
/**
 * Function to fetch the image of the day from the NASA API.
 *
 * @returns {object} Returns the image and it's data from NASA.
 */
export default async function fetchImgOfDay() {
  const data = await fetch(`${NASA_URL}${NASA_API}`)
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
