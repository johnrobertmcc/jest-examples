import TableBody from './TableBody'
import TableHeader from './TableHeader'
import styles from './Table.module.css'
/**
 * Component to return a table considering receipts.
 *
 * @param  {object}  props           The component as props.
 * @param  {object}  props.receipts  The receipts of the user.
 * @return {Element}                 Renders the Table component.
 */
export default function Table({receipts}) {
  return (
    <table className={styles.table}>
      <TableHeader />
      <TableBody receipts={receipts} />
    </table>
  )
}
