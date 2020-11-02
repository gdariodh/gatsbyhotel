import React from "react"
import { css } from "@emotion/core"

const Footer = () => {

  const year = new Date().getFullYear();


  return (
    <footer css={css` width:100%;
     margin-top:3rem;
    `}> 
    <div css={css`
     width:100%;
     margin:0 auto;
     background-color:#f8f9fa;
     border: 1px solid #e1e1e1;
     box-shadow: 2px 2px 2px 2px #e1e1e1;
    `}>
    <p css={css`
         text-align:center;
         color:#212529;
         padding:1rem;
         margin:0;
         `}> Todos los derechos reservados {year} &copy;</p>
    </div>
        
       
    </footer>
  )
}

export default Footer
