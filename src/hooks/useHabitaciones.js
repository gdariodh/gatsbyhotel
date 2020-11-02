import { graphql, useStaticQuery } from "gatsby"

const useHabitaciones = () => {
  const { allDatoCmsHabitacion } = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          titulo
          id
          slug
          contenido
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const habitaciones = allDatoCmsHabitacion.nodes

  return habitaciones.map(habitacion => ({
    titulo: habitacion.titulo,
    contenido: habitacion.contenido,
    id: habitacion.id,
    imagen: habitacion.imagen,
    slug: habitacion.slug,
  }))
}

export default useHabitaciones
