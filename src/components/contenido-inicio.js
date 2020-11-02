import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const TextoInicio = styled.div`
  padding-top: 4rem;
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  p {
    line-height: 2;
    margin-top:2rem;
    text-align: justify;
  }

  img {
    border-radius: 30px;
  }
`

const ContenidoInicio = () => {
  const { allDatoCmsPagina } = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "inicio" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  // destructuring por asignacion de variables
  const [info] = allDatoCmsPagina.nodes
  //console.log(info)
  const { titulo, contenido, imagen } = info

  return (
    <>
      <h2
        css={css`
          text-align: center;
          font-size: 4rem;
          margin-top: 4rem;
        `}
      >
        {titulo}
      </h2>
      <TextoInicio>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} css={css` max-height: 400px;`}/>
      </TextoInicio>
    </>
  )
}

export default ContenidoInicio
