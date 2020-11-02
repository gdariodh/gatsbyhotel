import React from "react"
import Layout from "../components/layout"
import ImagenHotel from "../components/imagen-hotel"
import ContenidoInicio from "../components/contenido-inicio"
import Habitaciones from "../components/habitaciones"


const IndexPage = () => {

  return (
    <>
      <Layout>
        <ImagenHotel />
        <ContenidoInicio />
        <Habitaciones/>
      </Layout>
    </>
  )
}

export default IndexPage
