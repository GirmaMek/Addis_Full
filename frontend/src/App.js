
import React,{useEffect} from 'react'
import { css, ThemeProvider,Global } from '@emotion/react';
import GlobalStyles from './styles/globals'
import theme from "./styles/theme";
import { ToastContainer } from "react-toastify";
import Routing from './components/HeaderComponent copy';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme, setTheme } from './redux/appDataSlice';
function App() {
  const selectedTheme = useSelector(selectTheme);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(setTheme(localStorage.getItem("theme")))
  },[]);
  useEffect(()=>{
    localStorage.setItem("theme",selectedTheme);
  },[selectedTheme]);
  return (
    <ThemeProvider theme={ selectedTheme == "dark" ? theme.dark : theme.light}>
       <ToastContainer theme={selectedTheme == "dark" ? "dark" : "light"} />
      <Global  styles={GlobalStyles(selectedTheme == "dark" ? theme.dark : theme.light)} />
      <Routing />
    </ThemeProvider>
        
  );
}
export default App;