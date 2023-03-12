
    import React, { useEffect } from 'react';
    import { Flex, Box,Card,Heading, Text,Button } from "rebass";
    import { useDispatch, useSelector } from "react-redux";
import { getSongsFetch, selectIsLoading, selectSongs, setDeleteStart } from '../redux/appDataSlice';
import { useNavigate } from 'react-router-dom';
    export default function PlayList() {
     const songList = useSelector(selectSongs);
     const isLoading = useSelector(selectIsLoading)
     const dispatch = useDispatch();
     const navigate = useNavigate();
     useEffect(()=>{
       dispatch(getSongsFetch());
     },[]);
    return (
        <div className='playListCont'> 
          <br/>
          { (!isLoading && songList.data) &&  
<Flex mx={-2}>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1}  bg='transparent'>
      No
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} bg='transparent'>
      Title
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='balck' bg='transparent'>
      Album
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} bg='transparent'>
      Artist
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} bg='transparent'>
      genre
    </Text>
  </Box>
  <Box width={1/2} paddingLeft={0.5}  paddingBottom={0.5} px={0.5}>
    <Text p={1} bg='transparent'>
      Actions
    </Text>
  </Box> 
</Flex>}
{
  (!isLoading && songList.data) &&  songList.data.map((s,i)=><Flex key={i} mx={-2}>
  <Box width={1/2}   px={0.5}>
    <Text p={1} bg='transparent'>
      {i+1}
    </Text>
  </Box>
  <Box width={1/2}   px={0.5}>
    <Text p={1} bg='transparent'>
    {s.title}
    </Text>
  </Box>
  <Box width={1/2}  px={0.5}>
    <Text p={1} color='balck' bg='transparent'>
      {s.album}
    </Text>
  </Box>
  <Box width={1/2}   px={0.5}>
    <Text p={1} bg='transparent'>
      {s.artist}
    </Text>
  </Box>
  <Box width={1/2}   px={0.5}>
    <Text p={1} bg='transparent'>
      {s.genre}
    </Text>
  </Box>
  <Box width={1/2}   px={0.5}>
 
  <Button style={{padding:"5px 6px",margin:"5px",marginBottom:"0px"} } onClick={()=>navigate(`/editsong/${s._id}`)} color={"white"} backgroundColor="#3b99df" mr={2}>
                      <img src="/assets/edit.png" width={"15px"} height={"15px"} />
                    </Button>
                   <Button style={{padding:"5px 6px",margin:"5px",marginBottom:"0px"} }  onClick={()=>dispatch(setDeleteStart({id:s._id}))} color={"white"} backgroundColor="#f56358"   mr={2}>
                   <img src="/assets/delete.png" width={"15px"} height={"15"} />
                    </Button>
                 
  </Box>
</Flex>)
}
  
         {songList.data && songList.data.length == 0 && <h1>No song found</h1>}
          

        </div> 
    )
    }
            