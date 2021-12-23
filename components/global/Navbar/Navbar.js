import Link from 'next/link'
import styles from './Navbar.module.css'

/**
 * Component to return the Navbar.
 *
 * @return {Element}     Renders the Navbar component.
 */
export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item} id={styles.home}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link href="/nasa">NASA</Link>
        </li>
        <li className={styles.item}>
          <Link href="/budget">Budget</Link>
        </li>
        <li className={styles.item}>
          <Link href="/unknown">Unknown</Link>
        </li>
      </ul>
    </header>
  )
}
