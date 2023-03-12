import styled from '@emotion/styled'
export default styled.div`
.stat-cont {  
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  max-width: 1000px;
  padding: 1rem;
  background-color: ${props => props.theme.colors.bg};
  border-radius: 8px;
  overflow:auto;
  h1{
    color:${props => props.theme.colors.mainFontColor};
  }
}
.total-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  width:100%;
  justify-content:space-evenly;
  flex-wrap:wrap;
  & > div {
    margin:20px;
    border-radius:10px;
    display:flex !important;
    background-color: ${props => props.theme.colors.totalCardBg};
    color:white;
    h2{
      font-family:arial;
      width:auto;
      margin-right:10px;
    
    }
    div{
      font-size:22px;
      margin-right:auto;
      margin-top:3px !important;
    }
    width:100%;
    max-width:200px;
    padding:20px;
  }
  h2{
    width:100%;
  }
}
.total-cont h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.total-cont div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}
.total-cont div span {
  font-size: 1rem;
}
.stat-each-cont {
  display: flex;
  flex-direction: row;
  align-items: left;
  flex-wrap:wrap;
  justify-content:space-evenly;
}
.total-gener{
  margin-right: 1rem;
  margin-bottom: 1rem;
  min-width:200px;
};
.total-song-album{
  margin-right: 1rem;
  margin-bottom: 1rem;
};
.total-album {
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.total-gener h1,
.total-song-album h1,
.total-album h1 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
`