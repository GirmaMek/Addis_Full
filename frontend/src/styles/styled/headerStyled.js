
import styled from '@emotion/styled'
export default    styled.div`
     width:100%;
     display:flex;
     justify-content:center;
     background-color:${props => props.theme.colors.bg};
      box-sizing:border-box ;
     border-radius:10px;
     max-width:500px;
     margin:auto;
     margin-top:20px;
     
     ul{
        box-sizing:border-box ;
        display:flex;
        padding:5px;
        margin:0;
        list-style-type:none;
        flex-wrap: wrap;
        & > li{
            margin:10px;
            padding:10px;
            cursor: pointer;
            box-sizing:border-box ;
            
        }
         a{
            text-decoration: none;
              box-sizing:border-box ;
              color:${props => props.theme.colors.mainFontColor};
        }
     }
    `
            