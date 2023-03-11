
    import React, { useEffect } from 'react';
    import { Flex, Box,Card,Heading, Text,Button } from "rebass";
    import { StyledHome } from './Home.styled'
    import { useDispatch, useSelector } from "react-redux";
import { getSongsFetch, selectIsLoading, selectSongs, setDeleteStart } from '../../redux/reducers/songs.reducer';
import { useNavigate } from 'react-router-dom';
import { margin } from 'styled-system';
    export default function Home() {
     const songList = useSelector(selectSongs);
     const isLoading = useSelector(selectIsLoading)
     const dispatch = useDispatch();
     const navigate = useNavigate();
     useEffect(()=>{
       dispatch(getSongsFetch());
     },[dispatch]);
     useEffect(()=>{
       console.log(songList)
     },[songList])
    return (
        <StyledHome> 
          <br/>
          { (!isLoading && songList.data) &&  <Flex mx={-2}>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='black' bg='white'>
      No
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='black' bg='white'>
      Title
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='balck' bg='white'>
      Album
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='black' bg='white'>
      Artist
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='black' bg='white'>
      genre
    </Text>
  </Box>
  <Box width={1/2} paddingLeft={0.5}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='black' bg='white'>
      Actions
    </Text>
  </Box> 
</Flex>}
{
  (!isLoading && songList.data) &&  songList.data.map((s,i)=><Flex mx={-2}>
  <Box width={1/2}   px={0.5}>
    <Text p={1} color='black' bg='white'>
      {i+1}
    </Text>
  </Box>
  <Box width={1/2}   px={0.5}>
    <Text p={1} color='black' bg='white'>
    {s.title}
    </Text>
  </Box>
  <Box width={1/2}  px={0.5}>
    <Text p={1} color='balck' bg='white'>
      {s.album}
    </Text>
  </Box>
  <Box width={1/2}   px={0.5}>
    <Text p={1} color='black' bg='white'>
      {s.artist}
    </Text>
  </Box>
  <Box width={1/2}   px={0.5}>
    <Text p={1} color='black' bg='white'>
      {s.genre}
    </Text>
  </Box>
  <Box width={1/2}   px={0.5}>
 
  <Button style={{padding:"5px 6px",margin:"5px",marginBottom:"0px"} } onClick={()=>navigate(`/${s._id}`)} color={"white"} backgroundColor="#3b99df" mr={2}>
                      <img src="/assets/edit.png" width={"15px"} height={"15px"} />
                    </Button>
                   <Button style={{padding:"5px 6px"}} onClick={()=>dispatch(setDeleteStart({id:s._id}))} color={"white"} backgroundColor="#f56358"   mr={2}>
                   <img src="/assets/delete.png" width={"15px"} height={"15"} />
                    </Button>
                 
  </Box>
</Flex>)
}
        {/* <table border="1">
         <tbody>
         {songList.data &&  <tr>
          <td>no</td>
          <td>Title</td>
          <td>Album</td>
          <td>Artist</td>
          <td>Genre</td>
          <td>Actions</td>
          </tr>}
          {songList.data &&
                songList.data.map((s,i)=> <tr key={i}>
                <td>{i+1}</td>
                <td>{s.title}</td>
                <td>{s.album}</td>
                <td>{s.artist}</td>
                <td>{s.genre}</td>
                <td>
                   <Button onClick={()=>navigate(`/${s._id}`)} color={"white"} backgroundColor="#3b99df" mr={2}>
                      <img src="/assets/edit.png" width={"50px"} height={"50px"} />
                    </Button>
                   <Button onClick={()=>dispatch(setDeleteStart({id:s._id}))} color={"white"} backgroundColor="#f56358"   mr={2}>
                   <img src="/assets/delete.png" width={"50px"} height={"50px"} />
                    </Button>
                </td>
                </tr>)
              }
          </tbody>
        </table> */}
         {songList.data && songList.data.length == 0 && <h1>No song found</h1>}
            {/* {songList.data &&
                songList.data.map((s,i)=><Card key={i}  sx={{
                    p: 1,
                    width:"100%",
                    justifyContent:"center",
                    display: "flex",
                    borderRadius: 5,
                    flexDirection:"column",
                    boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                  }} width={256}>
              <Heading className='txt'>Song: <span className='value'>{s.title}</span></Heading>
              <Text
             className='txt'>
              Album: <span className='value'>{s.album}</span>
            </Text>
            <Text
             className='txt'>
              Gener:  <span className='value'>{s.genre}</span>
            </Text>
            <Text
             className='txt'>
              Artist:  <span className='value'>{s.artist}</span>
            </Text>
            <div className='btn-cont'>
            <Button onClick={()=>navigate(`/${s._id}`)} color={"white"} backgroundColor="#3b99df" mr={2}>Edit</Button>
            <Button onClick={()=>dispatch(setDeleteStart({id:s._id}))} color={"white"} backgroundColor="#f56358"   mr={2}>Delete</Button>
            </div>
           
            </Card>)
            } */}

        </StyledHome> 
    )
    }
            