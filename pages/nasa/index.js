import fetchPlanets from '@/functions/api/fetchPlanets'
import styles from './index.module.css'

/**
 * Component to return the NASA planets.
 *
 * @param {object} props          The component as props.
 * @param {object} props.planets  The planet information.
 * @returns                       Returns the NASA test component.
 */
export default function NASA({planets}) {
  // console.log('jr planets', planets)
  return (
    <div className={styles.page}>
      {planets?.sol_keys.map((sol, i) => {
        return <li key={i}>{planets[sol].Season}</li>
      })}
    </div>
  )
}

export async function getServerSideProps() {
  const planets = await fetchPlanets()
  console.log(planets)
  return {
    props: {planets}
  }
}
