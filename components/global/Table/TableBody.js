import dayjs from 'dayjs'
import styles from './Table.module.css'
/**
 * Component to return the body of the receipt table.
 *
 * @param  {object}  props           The component as props.
 * @param  {object}  props.receipts  The receipts of the user.
 * @return {Element}                 Returns a fragment of the TableBody.
 */
export default function TableBody({receipts}) {
  return (
    <tbody className={styles.body}>
      {receipts.map((receipt, idx) => {
        return (
          <tr key={idx} className={styles.row}>
            <td>{receipt.reason ? receipt.reason : null}</td>
            <td>{receipt.source}</td>
            <td>{'$' + receipt.amount}</td>
            <td>{dayjs(receipt.date).format('MM/DD/YYYY')}</td>
          </tr>
        )
      })}
    </tbody>
  )
}
