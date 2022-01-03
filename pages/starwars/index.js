import fetchVehicles from '@/functions/api/fetchSwapi'

/**
 * Component to return the Star Wars vehicles.
 *
 * @param {object} props           The component as props.
 * @param {object} props.vehciles  The vehicles from swapi.
 * @returns                        Returns the Star Wars test component.
 */
export default function StarWars({vehicles}) {
  console.log('jr vehicle[0]', vehicles[0])
  return (
    <div>
      <ul>
        {vehicles.map((vehicle, i) => (
          <li key={i}>{vehicle?.name} </li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  const vehicles = await fetchVehicles()
  return {
    props: {vehicles: vehicles?.results}
  }
}
