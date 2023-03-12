
import React from 'react'
import Header from "./HeaderComponent";
export default function Layout({children}) {
     return (
      <>
        <Header />
      {children}
      </>
     )
    }
            