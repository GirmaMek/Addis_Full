
// import styled from '@emotion/styled'
//     export const StyledHome = styled.div`
//     display:flex;
//     justify-content:center;
//     align-items:stretch;
//     flex-direction:row;
//     flex-wrap:wrap;
//     gap:5%;
//     /* width:500px; */
//     .stat-cont{
//       width:100%;
//       max-width:100Vw;
//       background-color:#7c00a8;
//       diplay:flex;
//       flex-direction:column;
//       align-items:center;
//       min-height:100vh !important;
//       * {
//       font-size:18px;
//     }
//       .total-cont{
//         margin:auto;
//         margin-bottom:20px;
//         padding:10px;
//         max-width:300px;
//         background-color:blue !important;
//         border:1px solid white;
//         border-radius:20px;
//         display:flex;
//         flex-direction:column;
//         align-items:streath;

//         h1{
//           color:white;

//         }
//         & > div{
//             margin:10px;
//             color:white;
//             display:flex;
//             justify-content:space-between;
            
//         }
//       }
//       .stat-each-cont{
//         display:flex;
//         justify-content:space-evenly;
//         gap:10%;
//         flex-wrap:wrap;
//         & > div{
//           border:1px solid white;
//           border-radius:20px;
//           flex:1;
//           padding:20px;
//           table{
//             width:100%;
//             tr{
//               background-color:transparent;
//               border-bottom:1px solid black;
//             }
//           }
//         }
//         .total-gener{
//           background-color:#cf2c2c;
//         }
//         .total-song-album{
//             background-color:#ffe600;
//         }
//         .total-album{
//            background-color:#00ff66;
//         }
//       }
//     }
  
//     table{
//       border-collapse:collapse;
//       tr:first-child{
//         background-color:white;
//       }
//       td{
//         padding:10px;
//         button{
//           padding:5px 10px;
//           margin:0px 10px;
//           border:none;
//           cursor:pointer;
//         }
      
//       }
//     }
//     h1{
//      width:90% !important;
//      text-align: center;
//      margin:0;
//      font-weight: 100;
//      padding:20px;
//      margin-bottom: 50px;
//      color:#505050;
//      padding:0;
//     }
//     & > div{
//        max-width:300px;
//        width:100%;
//        background-color: white;
//        .txt{
//         margin-bottom: 10px;
//         .value{
//           opacity: 0.6;
//         }
//        }
//       & *{
//         font-weight: 100;
//         font-size: 13px;
//         font-family: Arial, Helvetica, sans-serif;
//       }
//        padding:30px;
//        margin-bottom:20px;
//      }
//      .btn-cont{
//       display: flex;
//       justify-content: space-between;
//      }
//      button{
//       margin-top: 10px;
//       cursor: pointer;
//      }
//     `

import styled from '@emotion/styled'
export const StyledHome = styled.div`
.css-1khg7w9{
  max-width:1000px;
  margin:auto;
  background-color:white;
  border:0.2px solid lightgrey;
  padding:10px;
  border-radius:0px;
  text-align:center;
  &:nth-child(2){
    border-radius:5px 5px 0px 0px;
  }
  &:last-child{
    border-radius:0px 0px 5px 5px;
  }
}
.stat-cont {  
  height: 100vh
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  // max-width: 800px;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
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
 
    background-color:rgb(0 0 0 / 0.5) !important;
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

table {
  border-collapse: collapse;
  width: 100%;
}

table td,
table th {
  border: 1px solid #ddd;
  padding: 8px;
}

table th {
  background-color: #f5f5f5;
  font-weight: bold;
  text-align: left;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}
`