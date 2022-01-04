import {NASA_API, NASA_URL} from '@/constants/config'
/**
 * Function to fetch the image of the day from the NASA API.
 *
 * @returns {object} Returns the image and it's data from NASA.
 */
export default async function fetchImgOfDay() {
  const res = await fetch(`${NASA_URL}${NASA_API}`)
  const data = await res.json()
  return data
}
