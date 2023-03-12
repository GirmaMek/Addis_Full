import styled from '@emotion/styled'
export default styled.div`
  max-width: 400px;
  margin:auto;
  margin-top: 30px;
  background-color: ${props => props.theme.colors.bg};
  border-radius: 5px;
  padding:25px;
  label{
    margin-bottom: 10px;
    font-size: 14px;
    opacity: 0.8;
  }
  input{
    border:none;
    background-color: ${props => props.theme.colors.formInputBg};
    color: ${props => props.theme.colors.mainFontColor};
    border-radius: 5px;
    font-size: 13px;
    padding:10px;
    outline: 0;
    margin-bottom: 10px;
  }
  select{
    border:none;
    padding:10px;
    background-color:${props => props.theme.colors.formInputBg};
    border-radius: 5px;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.mainFontColor};
    font-size: 13px;
  }
  button{
    display: block;
    width:100%;
    max-width:300px;
    background-color:${props => props.theme.colors.submitBtnBg};
    color:${props => props.theme.colors.submitBtn};
    font-size: 13px;
    margin: auto;
    margin-top: 20px;
  }
`
        