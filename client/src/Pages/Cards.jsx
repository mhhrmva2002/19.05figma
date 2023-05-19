import {useEffect,useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card } from 'antd';
import { getAllArtists } from "../api/request";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";



const Artists = () => {
    const [artists,setArtists]=useState([])
useEffect(()=>{
getAllArtists().then(res=>{
    setArtists(res)
})
},[])
  return (
    <>
      <Box sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}>
        <Grid container spacing={2}>
         { artists && artists.map((artist)=>{
            return(
                <Grid key={artist.id} item lg={3} md={6} sm={12}>
                <Card
                  hoverable
                  cover={
                    <img
                    style={{height:"250px",objectFit:"cover",objectPosition:"top center"}}
                      alt="example"
                      src={artist.imageURL}
                    />
                  }
                >
                  <Typography> <Link to={`/artist/${artist.id}`}>{artist.name}</Link></Typography>
                  <Typography>age:{artist.age}</Typography>

                </Card>
              </Grid>
            )
         })}
        </Grid>
      </Box>
    </>
  );
};

export default Artists;