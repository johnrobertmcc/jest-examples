import fetchImgOfDay from '@/functions/api/fetchImgOfDay'
import styles from './index.module.css'

/**
 * Component to return the NASA's Image of the Day.
 *
 * @param {object} props           The component as props.
 * @param {object} props.imgOfDay  The image of the day.
 * @returns                        Returns the NASA test component.
 */
export default function NASA({imgOfDay}) {
  return (
    <div className={styles.page}>
      {imgOfDay?.title && imgOfDay?.url && (
        <>
          <img src={imgOfDay?.url} alt={imgOfDay?.title} />
          <h1>{imgOfDay.title}</h1>
        </>
      )}
      {imgOfDay?.copyright && <p>&#169; {imgOfDay.copyright}</p>}
    </div>
  )
}

export async function getServerSideProps() {
  const imgOfDay = await fetchImgOfDay()
  return {
    props: {imgOfDay}
  }
}
