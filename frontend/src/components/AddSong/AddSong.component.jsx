
import React, { useEffect ,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { Flex, Box,Card,Heading, Text,Button} from "rebass";
import { Label, Input } from '@rebass/forms'
import { getGenersFetch, getSongsFetch, selectGeners, selectMessage, selectSongs,setAddStart,setUpdateStart } from '../../redux/reducers/songs.reducer';
    import { StyledAddSong } from './AddSong.styled'
    export default function AddSong() {
        const {id} =  useParams();
        const dispatch = useDispatch();
        const navigator = useNavigate();
        const message =  useSelector(selectMessage);
        const geners = ['Rock', 'Pop', 'Hip Hop', 'Electronic', 'Classical'];
        const [song,setSong] = useState({
         title:"",
         album:"",
         artist:"",
         genre:""
        })
        useEffect(()=>{
            if(message!="")
             navigator("/");
          },[message]);
     return (
         <StyledAddSong> 
             <Box>
           
   <Input
     name='title'
     type='text'
     onChange={(e)=>setSong({...song,title:e.target.value})}
     value={song.title}
     placeholder='Enter your song title'
   />
 </Box>
 <Box>
           
   <Input
     name='email'
     type='email'
     onChange={(e)=>setSong({...song,artist:e.target.value})}
     value={song.artist}
     placeholder='Enter the artist name'
   />
 </Box>
 <Box>
          
   <Input
     name='album'
     onChange={(e)=>setSong({...song,album:e.target.value})}
     type='text'
     value={song.album}
     placeholder='Enter the album name'
   />
 </Box>
 <Box>
    <select onChange={(e)=>setSong({...song,genre:e.target.selectedOptions[0].value})}>
    <option disabled selected >Select genre</option>
    {geners && geners.map((g,i)=><option   value={g} key={i}>{g}</option>)}
 </select>
 </Box>

 <Button onClick={()=>{dispatch(setAddStart({body:song}));}} backgroundColor="#3b99df"    mr={2}>Add</Button>
         </StyledAddSong> 
     )
    }
            