import styles from './index.module.css'
import {useState} from 'react'
import Table from '@/components/global/Table'
import calculateRemainder from '@/functions/helpers/calculateRemainder'

/**
 * Component to return the Budget component with tests.
 *
 * @return {Element}   Renders the /budget page.
 */
export default function Budget() {
  const defaultData = {option: 'none', input: null, reason: null}
  const [data, setData] = useState(defaultData)
  const [tracker, setTracker] = useState({
    receipts: [],
    income: 0,
    output: 0,
    remainder: 0
  })

  /**
   * Function to handle the submit button and set the appropriate data.
   */
  function handleSubmit() {
    if (
      data.input &&
      data.option !== '-- Please select one --' &&
      data.option !== 'none'
    ) {
      setTracker((prev) => {
        let num, remainder
        if (data.option === 'income') {
          num = data.input
        } else {
          num = data.input * -1
        }
        remainder = calculateRemainder(prev['remainder'], num)
        return {
          ...prev,
          [data.option]: num,
          remainder,
          receipts: prev['receipts'].concat({
            date: new Date(),
            source: data.option,
            amount: num,
            remainder,
            reason: data?.reason
          })
        }
      })

      setData(defaultData)
    } else {
      alert('Please fill out all fields.')
    }
  }

  return (
    <>
      <h1 className={styles.heading}>
        Available Budget - $ {tracker?.remainder}
      </h1>
      <div className={styles.body}>
        {tracker?.receipts.length > 0 && <Table receipts={tracker.receipts} />}
        <br />
        <br />
        <h3 className={styles.title}>Please enter an expense:</h3>
        $
        <input
          type="number"
          placeholder={'0.00'}
          onChange={(e) =>
            setData((prev) => {
              return {...prev, input: parseInt(e.target.value)}
            })
          }
          value={data?.input || 0}
        />
        <input
          type="text"
          placeholder="Reason (optional)"
          className={styles.reason}
          onChange={(e) =>
            setData((prev) => {
              return {...prev, reason: e.target.value}
            })
          }
          value={data?.reason || ''}
        />
        <select
          onChange={(e) =>
            setData((prev) => {
              if (e.target.value !== '0') {
                return {...prev, option: e.target.value}
              }
            })
          }
          value={data?.option || 'none'}
        >
          <option value="none" disabled>
            -- Please select one --
          </option>
          <option value="income">income</option>
          <option value="output">expense</option>
        </select>
        <button onClick={() => handleSubmit()}>Enter</button>
      </div>
    </>
  )
}
