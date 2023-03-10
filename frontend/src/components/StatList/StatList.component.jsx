
    import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, Box,Card,Heading, Text,Button } from "rebass";
import { size } from 'styled-system';
import { getStatsFetch, selectStats } from '../../redux/reducers/songs.reducer'
import { StyledHome } from '../Home/Home.styled';
    import { StyledStatList } from './StatList.styled'
    export default function StatList() {
        const stats = useSelector(selectStats);
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(getStatsFetch());
          },[dispatch]);
          useEffect(()=>{
               console.log(stats)
          },[stats]);
    return (
        <StyledHome> 
         {
          stats?.data && <div className='stat-cont'>
          <div className='total-cont'>
              <h1>Total</h1>
              <div>
                <span>song:{stats.data.totals[0].title}</span>
                <span>artist:{stats.data.totals[0].artist}</span>
              </div>
              <div>
                <span>album:{stats.data.totals[0].album}</span>
                <span>genre:{stats.data.totals[0].gener}</span>
              </div>
            </div>
            <div className='stat-each-cont'>
            <div className='total-gener'>
              <h1>No Genre</h1>
              <table>
                <tbody>
                {
                 stats?.data.noOfSongsInEachGener.map(g=><tr>
                  <td>{g.gener}</td>
                  <td>{g.totalSongs}</td>
                </tr>
                )
                }
                 
                </tbody>
              </table>
            </div>
            <div className='total-song-album'>
              <h1>No Song & Album in Artist</h1>
              <table>
                <tbody>
                {
                 stats?.data.noOfAlbumAndSongInEachArtist.map(g=><tr>
                  <td>{g.artist}</td>
                  <td>{g.totalAlbums}</td>
                  <td>{g.totalSongs}</td>
                </tr>
                )
                }
                </tbody>
              </table>
            </div>
            <div className='total-album'>
              <h1>No Album</h1>
              <table>
                <tbody>
                {
                 stats?.data.noOfSongsInEachAlbum.map(g=><tr>
                  <td>{g.album}</td>
                  <td>{g.totalSongs}</td>
                </tr>
                )
                }
                </tbody>
              </table>
            </div>
            </div>
          </div>
         } 
           
            {/* {
                stats?.data && <>
                   {
                    stats.data.totals[0] &&  <Card   sx={{
                      p: 1,
                      width:"100%",
                      justifyContent:"center",
                      display: "flex",
                      borderRadius: 5,
                      flexDirection:"column",
                      boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                    }} width={256}>
<Text
style={{fontSize:"20px"}}
            color='primary'>
           Totals
          </Text>

          <Text
            color='primary'>
           Number of songs:<Box
sx={{
  display: 'inline-block',
  color: 'white',
  minWidth:"50px",
  bg: '#d9b99b',
  margin:"10px",
  textAlign:"center",
  px: 2,
  py: 1,
  borderRadius: 9999,
}}>
{stats.data.totals[0].title}
</Box></Text>
<Text
            color='primary'>
           Number of albums:<Box
sx={{
  display: 'inline-block',
  color: 'white',
  minWidth:"50px",
  bg: '#d9b99b',
  margin:"10px",
  textAlign:"center",
  px: 2,
  py: 1,
  borderRadius: 9999,
}}>
{stats.data.totals[0].album}
</Box></Text>
<Text
            color='primary'>
           Number of artists:<Box
sx={{
  display: 'inline-block',
  color: 'white',
  minWidth:"50px",
  bg: '#d9b99b',
  margin:"10px",
  textAlign:"center",
  px: 2,
  py: 1,
  borderRadius: 9999,
}}>
{stats.data.totals[0].artist}
</Box></Text>
<Text
            color='primary'>
           Number of gener:<Box
sx={{
  display: 'inline-block',
  color: 'white',
  minWidth:"50px",
  bg: '#d9b99b',
  margin:"10px",
  textAlign:"center",
  px: 2,
  py: 1,
  borderRadius: 9999,
}}>
{stats.data.totals[0].gener}
</Box></Text>
         
                    </Card>
                   }
                 <h1>Number of Songs in Each Album</h1>
                 {
                 stats?.data.noOfSongsInEachAlbum.map((s,i)=>
                    <Card key={i}  sx={{
                        p: 1,
                        width:"100%",
                        justifyContent:"center",
                        display: "flex",
                        borderRadius: 5,
                        flexDirection:"column",
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                      }} width={256}>
 <Text
 style={{fontSize:"20px"}}
              color='primary'>
             Album: {s.album}
            </Text>

            <Text
              color='primary'>
             Number of songs:<Box
  sx={{
    display: 'inline-block',
    color: 'white',
    minWidth:"50px",
    bg: '#d9b99b',
    margin:"10px",
    textAlign:"center",
    px: 2,
    py: 1,
    borderRadius: 9999,
  }}>
{s.totalSongs}
</Box></Text>
           
                      </Card>
                    )}
                    <h1>Number of Songs in Each Artist</h1>
                    {
                 stats?.data.noOfSongsInEachArtist.map((s,i)=>
                    <Card key={i}  sx={{
                        p: 1,
                        width:"100%",
                        justifyContent:"center",
                        display: "flex",
                        borderRadius: 5,
                        flexDirection:"column",
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                      }} width={256}>
 <Text style={{fontSize:"20px"}}
              fontWeight='bold'
              color='primary'>
             Artist: {s.artist}
            </Text>

            <Text
    
              fontWeight='bold'
              color='primary'>
                 Number of songs:<Box
  sx={{
    display: 'inline-block',
    color: 'white',
    minWidth:"50px",
    bg: '#d9b99b',
    margin:"10px",
    textAlign:"center",
    px: 2,
    py: 1,
    borderRadius: 9999,
  }}>
{s.totalSongs}
</Box>
            </Text>
                      </Card>
                    )}
                    <h1>Number of Songs in Each Gener</h1>
                    {
                 stats?.data.noOfSongsInEachGener.map((s,i)=>
                    <Card key={i}  sx={{
                        p: 1,
                        width:"100%",
                        justifyContent:"center",
                        display: "flex",
                        borderRadius: 5,
                        flexDirection:"column",
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                      }} width={256}>
 <Text  style={{fontSize:"20px"}}
              fontWeight='bold'
              color='primary'>
             Gener: {s.gener}
            </Text>

            <Text
            
              fontWeight='bold'
              color='primary'>
                 Number of songs:<Box
          sx={{
            display: 'inline-block',
            color: 'white',
            minWidth:"50px",
            bg: '#d9b99b',
            margin:"10px",
            textAlign:"center",
            px: 2,
            py: 1,
            borderRadius: 9999,
          }}>
        {s.totalSongs}
        </Box>
            </Text>
                      </Card>
                    )}
                    <h1>Number of Songs and Albums in An Artist</h1>
                    {
                 stats?.data.noOfAlbumAndSongInEachArtist.map((s,i)=>
                    <Card key={i}  sx={{
                        p: 1,
                        width:"100%",
                        justifyContent:"center",
                        display: "flex",
                        borderRadius: 5,
                        flexDirection:"column",
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                      }} width={256}>
 <Text  style={{fontSize:"20px"}}
              fontWeight='bold'
              color='primary'>
             Artist: {s.artist}
            </Text>

            <Text
             >
           Number of albums:<Box
  sx={{
    display: 'inline-block',
    color: 'white',
    minWidth:"50px",
    bg: '#d9b99b',
    margin:"10px",
    textAlign:"center",
    px: 2,
    py: 1,
    borderRadius: 9999,
  }}>
{s.totalAlbums}
</Box>
            </Text>
            <Text >
           Number of songs:<Box
  sx={{
    display: 'inline-block',
    color: 'white',
    minWidth:"50px",
    bg: '#d9b99b',
    margin:"10px",
    textAlign:"center",
    px: 2,
    py: 1,
    borderRadius: 9999,
  }}>
{s.totalSongs}
</Box>
            </Text>
                      </Card>
                    )}
                </>
            }
            */}
          
        </StyledHome> 
    )
    }
            