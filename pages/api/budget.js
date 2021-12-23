import fetchBudget from '@/functions/api/fetchBudget'

export default async function handler(req, res) {
  const {income, output} = req.query

  const data = await fetchBudget(income, output)

  console.log('jr data', data)
  res.status(200).json({data})
}
