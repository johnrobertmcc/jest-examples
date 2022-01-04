/**
Function to calculate the remaining monies.

@param {num} prev     The previously calculated total.
@param {num} current  The amount to add.
@returns {num}        The remaining money.
*/

export default function calculateRemainder(prev, current) {
  return (prev += current)
}
