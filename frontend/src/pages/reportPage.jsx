
    import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, Box,Card,Heading, Text,Button } from "rebass";
import { size } from 'styled-system';
import { getStatsFetch, selectIsLoading, selectStats } from '../redux/appDataSlice'
    import { ReportStyled } from '../styles/styled'
    export default function Report() {
        const stats = useSelector(selectStats);
        const isLoading = useSelector(selectIsLoading);
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(getStatsFetch());
          },[dispatch]);
          useEffect(()=>{
               console.log(stats)
          },[stats]);
    return (
        <ReportStyled className={isLoading && "hidden"}> 
         {
          stats?.data && <div className='stat-cont'>
          <div className='total-cont'>      
              <Card width={256}>
  <Heading>Songs</Heading>
  <Text
  fontWeight='bold'
  color='primary'>
  {stats.data.totals[0].title}
</Text>

</Card>
<Card width={256}>
  <Heading>Artists</Heading>
  <Text
  
  fontWeight='bold'
  color='primary'>
  {stats.data.totals[0].artist}
</Text>

</Card>
<Card width={256}>
  <Heading>Genre</Heading>
  <Text
  
  fontWeight='bold'
  color='primary'>
  {stats.data.totals[0].gener}
</Text>

</Card>
<Card width={256}>
  <Heading>Albums</Heading>
  <Text
  
  fontWeight='bold'
  color='primary'>
  {stats.data.totals[0].album}
</Text>

</Card>
        
            </div>
            <div className='stat-each-cont'>

            <div className='total-gener'>
              <h1>No Genre</h1>
              <Flex mx={-2}>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1}  >
      No
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1}  >
    Gener
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='balck' >
     Songs
    </Text>
  </Box>
</Flex>
                {
                 stats?.data.noOfSongsInEachGener.map((g,i)=>            <Flex key={i} mx={-2}>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1}  >
      {i+1}
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1}  >
      {g.gener}
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='balck' >
      {g.totalSongs}
    </Text>
  </Box>
</Flex>
                )
                }
            </div>
            <div className='total-song-album'>
              <h1>No Song & Album in Artist</h1>
              <Flex mx={-2}>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1}  >
      No
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1}  >
    Artist
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='balck' >
     Albums
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='balck' >
     Songs
    </Text>
  </Box>
</Flex>
                {
                 stats?.data.noOfAlbumAndSongInEachArtist.map((g,i)=>              <Flex key={i} mx={-2}>
                  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
                    <Text p={1}  >
                      {i+1}
                    </Text>
                  </Box>
                  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
                    <Text p={1}  >
                      {g.artist}
                    </Text>
                  </Box>
                  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
                    <Text p={1}  >
                    {g.totalAlbums}
                    </Text>
                  </Box>
                  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
                    <Text p={1} color='balck' >
                      {g.totalSongs}
                    </Text>
                  </Box>
                </Flex>
                )
                }
              
            </div>
            <div className='total-album'>
              <h1>No Album</h1>
              <Flex mx={-2}>
 
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='balck' >
     Albums
    </Text>
  </Box>
  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
    <Text p={1} color='balck' >
     Songs
    </Text>
  </Box>
</Flex>
                {
                 stats?.data.noOfSongsInEachAlbum.map((g,i)=>              <Flex key={i} mx={-2}>
                 
                  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
                    <Text p={1}  >
                    {g.album}
                    </Text>
                  </Box>
                  <Box width={1/2}  paddingBottom={0.5} px={0.5}>
                    <Text p={1} color='balck' >
                    {g.totalSongs}
                    </Text>
                  </Box>
                </Flex>
                )
                }
              
            </div>
            </div>
          </div>
         } 
           
          
          
        </ReportStyled> 
    )
    }
            