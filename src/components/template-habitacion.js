import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from 'gatsby-image'
import {css} from '@emotion/core';
import styled from '@emotion/styled'

export const query = graphql`
  query($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
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
`

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

const TemplateHabitacion = ({ data: { allDatoCmsHabitacion:{nodes} } }) => {

  // data proviene de la consulta de la linea 5 - se le hizo destructuring !
  const {titulo,contenido,imagen} = nodes[0];

  return (
    <Layout>
      <h1 css={css`
        text-align:center;
        text-transform:uppercase;
        margin-top:2rem;
      `}>{titulo}</h1>
      <TextoInicio>
      <Image fluid={imagen.fluid} />
      
        <p><span css={css`font-weight:700`}>Descripcion:</span> {contenido}</p>
       
      </TextoInicio>
    </Layout>
  )
}

export default TemplateHabitacion
