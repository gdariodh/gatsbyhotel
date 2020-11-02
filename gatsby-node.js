// paginas dinamicas
exports.createPages = async ({ actions, graphql, reporter }) => {
  const response = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)
  //console.log(response.data.allDatoCmsHabitacion.nodes);

  if (response.errors) {
    reporter.panic("No hubo resultados", response.errors)
  }

  // Si hay paginas, crear los archivos
  const habitaciones = response.data.allDatoCmsHabitacion.nodes

  habitaciones.forEach(habitacion => {
    actions.createPage({
        path:habitacion.slug,
        component:require.resolve('./src/components/template-habitacion.js'),
        context:{
            slug:habitacion.slug
        }
    })
  })
}
