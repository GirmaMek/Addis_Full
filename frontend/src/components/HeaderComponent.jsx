import React from 'react'
import {Card,} from 'rebass'
import { NavLink } from 'react-router-dom'
import { HeaderStyled} from "../styles/styled";
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from '../redux/appDataSlice';
    export default function Header() {
      const dispatch = useDispatch();
      const theme = useSelector(selectTheme);
    return (
        <HeaderStyled> 
          <Card
            sx={{
              p: 1,
              width:"100%",
              justifyContent:"center",
              display: "flex",
              borderRadius: 2,
            
            }}>
                <ul>
                  <li> <NavLink to="/">Playlist</NavLink></li>
                  <li><NavLink to="/addsong">New Song</NavLink></li>
                  <li><NavLink to="/report">Reports</NavLink> </li>
                  <li onClick={()=>dispatch(setTheme(theme == "dark" ? "light" : "dark"))}><a>{theme == "dark" ? "Light Mode" : "Dark Mode"}</a></li>
                </ul>
           </Card>
        </HeaderStyled> 
      )
    }
            