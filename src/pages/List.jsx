import React from 'react'
import { Favmovies } from '../assets/features/movies/Movieslice';
import emptylist from '../assets/emptylist.png'
import { useSelector } from 'react-redux';
import { Grid, ImageListItem, Stack, Typography } from '@mui/material';
import { Fav } from '../components/Fav';

export const List = () => {

  const favmovies = useSelector(Favmovies);
  let favlist=favmovies.length!==0
  return (
    <Stack  marginTop={4}>
    <Grid  justifyContent={{xs:'center'}} container rowSpacing={{xs:4,md:2}} columnSpacing={{ xs: 1,sm:2, md: 4,lg:5 }}>
   {
    !favlist? (
    <Stack marginTop='1.5em' alignItems='center' justifyContent='center'  direction='column'>
    <ImageListItem sx={{width: '50%' }}>
    <img
src={emptylist}          />
  </ImageListItem>
  <Typography sx={{color:'white'}}>No Favourite Movies Added</Typography>
  </Stack> )
  :(
   favmovies.map((movie=>{
     return <Fav movie={movie} key={movie.id}/>
    })) 
    )
  }
    </Grid>
    </Stack> 
  )
}
