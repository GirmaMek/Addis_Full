import { createSlice } from '@reduxjs/toolkit';
        const songsSlice = createSlice({
          name: 'appData',
          initialState: {
            songs:[],
            stats:null,
            geners:[],
            isLoading:true,
            theme:"light",
            error:"",
            message:""
          },
          reducers: {
            setAddStart:(state,action)=>{
              state.isLoading = true;
             },
             setAddSuccess:(state,action)=>{
              state.message =  action.payload.message;
              state.isLoading = false;
             },
              setError:(state,action)=>{
                state.error = action.payload;
              },
              setTheme:(state,action)=>{
                state.theme = action.payload;
              },
              setMessage:(state,action)=>{
                state.message = action.payload;
              },
              setDeleteStart:(state,action)=>{
                state.isLoading = true;
              },
              setDeleteSuccess:(state,action)=>{
                state.message = action.payload.message;
                state.isLoading = false;
              }, 
             
               setUpdateStart:(state,action)=>{
                state.isLoading = true;
               },
               setUpdateSuccess:(state,action)=>{
                state.message = "updated succesfully";
                state.isLoading = false;
               },
                getSongsFetch:(state,action) => {
                  state.isLoading = true;
                },
                getGenersFetch:(state,action) => {
                  state.isLoading = true;
                },
                getStatsFetch:(state,action) => {
                  state.isLoading = true;
                },
                getSongsSuccess:(state,action) => {
                  state.songs = action.payload;
                  state.isLoading = false;
                },
                getGenersSuccess:(state,action) => {
                  state.geners = action.payload;
                  state.isLoading = false;
                },
                getStatsSuccess:(state,action) => {
                  const dat = action.payload;
                  state.stats =          
                  {data:{
                    totals:[{
                       title:dat.totalSongs,
                       artist:dat.totalArtists,
                       album:dat.totalAlbums,
                       gener:dat.totalGenres
                    }],
                    noOfSongsInEachArtist:[
                      ...dat.artistStats.map(a=> {return {artist:a._id,totalSongs:a.numSongs}})
                    ],
                    noOfSongsInEachGener:[
                      ...dat.genreStats.map(g=> {return {gener:g._id,totalSongs:g.numSongs}})
                    ],
                    noOfSongsInEachAlbum:[
                      ...dat.artistStats.map(a=>a.albums.map(al=> {return {album:al.name,totalSongs:al.numSongs}})).reduce((t,n)=>[...t,...n],[])                                                                                                                                                             
                    ],
                    noOfAlbumAndSongInEachArtist:[
                      ...dat.artistStats.map(a=> {return  {artist:a._id,totalAlbums:a.albums.length,totalSongs:a.numSongs}})
                     
                    ]
                  }};
                  state.isLoading = false;
                },
                getSongsError:(state,action) => {  
                  state.error = action.payload.message
                  state.isLoading = false;
                },
          }
        })
  export const { setAddStart,setAddSuccess,setError,setTheme, setMessage,setDeleteStart,setDeleteSuccess, getSongsFetch,getSongsError ,setUpdateStart,setUpdateSuccess,getSongsSuccess,getGenersFetch,getStatsFetch,getGenersSuccess,getStatsSuccess} = songsSlice.actions;
  export const selectSongs = (state) => state.appData.songs;
  export const selectStats = (state) => state.appData.stats;
  export const selectGeners = (state) => state.appData.geners;
  export const selectTheme = (state) => state.appData.theme;
  export const selectError = (state) => state.appData.error;
  export const selectMessage = (state) => state.appData.message;
  export const selectIsLoading = (state) => state.appData.isLoading;
  export default songsSlice.reducer;
