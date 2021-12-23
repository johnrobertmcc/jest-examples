/**
 * Function to fetch the budget information.
 *
 * @param   {string} inc The income of the request.
 * @param   {string} out The output of the request.
 * @returns {object}     The data of the budget request.
 */

export default async function fetchBudget(inc, out) {
  let remainder
  const income = parseInt(inc)
  const output = parseInt(out)
  if (income >= output) {
    remainder = income - output
  } else {
    remainder = (output - income) * -1
  }

  return {
    income,
    output,
    remainder
  }
}
