
    import React from 'react'
    import { StyledHeader } from './Header.styled'
    import {Card,} from 'rebass'
import { NavLink } from 'react-router-dom'
    export default function Header() {
    return (
        <StyledHeader> 
    <Card
      sx={{
        p: 1,
        width:"100%",
        justifyContent:"center",
        display: "flex",
        borderRadius: 2,
      
      }}>
           <ul>
             <li> <NavLink to="/">Home</NavLink></li>
             <li><NavLink to="/add">Add Song</NavLink></li>
             <li><NavLink to="/stat">Statistics</NavLink> </li>
           </ul>
           </Card>
        </StyledHeader> 
    )
    }
            