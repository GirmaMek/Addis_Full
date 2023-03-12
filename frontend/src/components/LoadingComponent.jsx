import React from 'react'
import {LoadingStyled} from "../styles/styled";
export default function Loading() {
    return (
        <LoadingStyled> 
           <img src="/assets/loading.gif" style={{transform:"scale(0.3)"}} width={"10px"} height={"200px"} alt=""  />
        </LoadingStyled> 
    )
}
            