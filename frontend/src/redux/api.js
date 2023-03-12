import axios from "axios";
//axios.defaults.baseURL = "http://localhost:4000/songs";
axios.defaults.baseURL = "https://addis-backend-mern.onrender.com/songs";
export default  {
    getSongs:()=>axios.get("/"),
    addSong:(body)=>  axios.post(`/`,body),
    getStats:()=>axios.get("/stats"),
    getGeners:()=>axios.get("/api/geners"),
    updateSong:(id,body)=>  axios.put(`/${id}`,body),
    deleteSong:(id)=>  axios.delete(`/${id}`)
}