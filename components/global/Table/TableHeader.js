import styles from './Table.module.css'

/**
 * Returns the headers for the Table component.
 *
 * @return {Element}                Returns a fragment of the TableHeader.
 */
export default function TableHeader() {
  return (
    <thead className={styles.heading}>
      <tr>
        <th>
          <abbr title="Where did this money go to or come from?">Place</abbr>
        </th>
        <th>
          <abbr title="How did this money?">Source</abbr>
        </th>
        <th>
          <abbr title="The money you have spent or earned.">Amount</abbr>
        </th>
        <th>
          <abbr title="Date Receipt Was Made">Date</abbr>
        </th>
      </tr>
    </thead>
  )
}
