import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000/songs";
export const Requests = {
    getSongs:()=>axios.get("/"),
    getStats:()=>axios.get("/stats"),
    getGeners:()=>axios.get("/api/geners"),
    addSong:(body)=>  axios.post(`/`,body),
    updateSong:(id,body)=>  axios.put(`/${id}`,body),
    deleteSong:(id)=>  axios.delete(`/${id}`)
}