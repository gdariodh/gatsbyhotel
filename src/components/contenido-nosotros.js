import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Contenido = styled.main`
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
    max-height: 400px;
    border-radius: 30px;
  }
`

const ContenidoNosotros = () => {
  const { allDatoCmsPagina } = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
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

  const [info] = allDatoCmsPagina.nodes
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
      <Contenido>
        <p>{contenido}</p>
        <Image css={css` max-height: 400px;`} fluid={imagen.fluid} />
      </Contenido>
    </>
  )
}

export default ContenidoNosotros
