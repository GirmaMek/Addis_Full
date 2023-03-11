
import styled from '@emotion/styled'
    export const StyledHeader = styled.div`
     width:100%;
     display:flex;
     justify-content:center;
     background-color: white;
   
     border-radius:10px;
     max-width:500px;
     margin:auto;
     margin-top:20px;
     ul{

        display:flex;
        padding:5px;
        list-style-type:none;
        flex-wrap: wrap;
        & > li{
            margin:10px;
            padding:10px;
            cursor: pointer;
        }
         a{
            text-decoration: none;
        }
     }
    `
            