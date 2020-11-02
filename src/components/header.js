import React from "react"
import { css } from "@emotion/core"
import Navegacion from "../components/nav"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const RedirectHome = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const header = () => {
  return (
    <header
      css={css`
        background-color: #212529;
        padding: 0.3rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <RedirectHome to={"/"}>
          <h1>Hotel Gatsby</h1>
        </RedirectHome>
        <Navegacion />
      </div>
    </header>
  )
}

export default header
