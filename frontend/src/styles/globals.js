import { css } from '@emotion/react'
export default (theme) => css`
    body,html{
        background-color:${theme.colors.mainBg};
        font-family:${theme.mainFont};
        margin:0;
        min-height:100vh;
    }
    *{
        transition:background-color 0.5s;
    }
    .hidden{
        display:none;
    }
    .playListCont{
        .css-1khg7w9{
            min-width:600px;
        }
    }
    .css-1khg7w9{
        max-width:1000px;
        margin:auto;
        background-color:${theme.colors.bg};
        border:0.2px solid lightgrey;
        padding:10px;
        border-radius:0px;
        text-align:center;
        color:${theme.colors.mainFontColor};
        &:nth-child(2){
            border-radius:5px 5px 0px 0px;
        }
        &:last-child{
            border-radius:0px 0px 5px 5px;
        }
    }
`