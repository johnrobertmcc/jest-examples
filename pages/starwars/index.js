import fetchVehicles from '@/functions/api/fetchSwapi'

/**
 * Component to return the Star Wars vehicles.
 *
 * @param {object} props           The component as props.
 * @param {object} props.vehicles  The vehicles from swapi.
 * @returns {Element}              Returns the Star Wars test component.
 */
export default function StarWars({vehicles}) {
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
