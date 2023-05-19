import axios from "axios";
import { BASE_URL } from "./base_url";


//GET ALL ARTISTS
export const getAllArtists=async()=>{
let globalData;
await axios.get(`${BASE_URL}/artists`)
.then(res=>{
    globalData = res.data.data;
})
return globalData
}

//GET artists by id
export const getArtistById=async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/artists/${id}`)
    .then(res=>{
        globalData = res.data.data;
    })
    return globalData
    }