import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImagenBackground = styled(BackgroundImage)`
  height: 530px;
`

const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    margin: 0%;

    @media (min-width: 992px) {
      font-size: 5.8rem;
    }
  }

  p {
    font-size: 2rem;
    @media (min-width: 992px) {
      font-size: 2.6rem;
    }
  }
`

const ImagenHotel = () => {
  const { allDatoCmsFondo } = useStaticQuery(graphql`
    query {
      allDatoCmsFondo(filter: { titulo: { eq: "Fondo Hotel" } }) {
        nodes {
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const { imagen } = allDatoCmsFondo.nodes[0]

  return (
    <ImagenBackground tag="section" fluid={imagen.fluid} fadeIn="soft">
      <TextoImagen>
        <h1>Bienvenido a Hotel Gatsby</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </TextoImagen>
    </ImagenBackground>
  )
}

export default ImagenHotel
