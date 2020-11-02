import React from 'react';
import useHabitaciones from "../hooks/useHabitaciones"
import {css} from "@emotion/core"
import HabitacionPreview from '../components/habitacion-preview'
import styled from '@emotion/styled';

const ListadoHabitaciones = styled.ul`
   max-width:1200px;
   width:95%;
   margin:4rem auto 0 auto;

   @media(min-width: 768px){
     display:grid;
     grid-template-columns:repeat(3,1fr);
     column-gap: 3rem;
   }

`


const Habitaciones = () => {

    const habitaciones = useHabitaciones()

    return ( 
        <>
     <h2 css={css`
       text-align:center;
       margin-top:5rem;
       font-size:3rem;
     `}>Nuestras Habitaciones</h2> 
       <ListadoHabitaciones>
           {habitaciones.map((habitacion,i) => (
               <HabitacionPreview
               key={`${habitacion.id}-${i}`} 
               habitacion={habitacion}/>
           ))}
       </ListadoHabitaciones>
     </>
     );
}
 
export default Habitaciones;