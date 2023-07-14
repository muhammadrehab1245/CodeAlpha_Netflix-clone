import React from 'react'
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TvshowsError, TvshowsStatus, Tvshowslist, fetchTvshows } from '../assets/features/movies/Movieslice';
import { useDispatch, useSelector } from 'react-redux';
import { Typesfilter } from '../components/Typesfilter';
import { useEffect } from 'react';
import { InputLabel, Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';

export const Tvshows = () => {

  const path = useLocation();

  let [showcategory, setshowcategory] = React.useState('All');

  const handleChange = (event) => {
    setshowcategory(event.target.value);
  };

  const dispatch = useDispatch();
  const tvshows = useSelector(Tvshowslist);
  const status = useSelector(TvshowsStatus);
  const error = useSelector(TvshowsError);
  let content;
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTvshows());
    }
  }, [status, dispatch]);
  if (status === "loading") {
    content = <p>"Loading..."</p>;

  } else if (status === "succeeded") {
    if(showcategory==='All'){
      content = tvshows.map((tv) => (
       <Typesfilter path={path.pathname} tv={tv} key={tv.id}/>
      ));
     }
     else{

      content = tvshows.map((tv) => (
       tv.Category===showcategory?<Typesfilter path={path.pathname} tv={tv} key={tv.id}/>:''
       ));
     }
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }
  
  return (
<>
<div>
      <FormControl id='tvpick' sx={{ m: 3, minWidth: 60,backgroundColor:'white', ".MuiOutlinedInput-notchedOutline": {
      borderColor: "silver !important"
    }}} error>
  <InputLabel id="demo-simple-select-label">Types</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={showcategory}
          onChange={handleChange}
          autoWidth
          label="All"
        >
          <MenuItem value='All'>
    <em>All</em>
          </MenuItem>
          <MenuItem value={'Cop'}>Cop</MenuItem>
          <MenuItem value={'Adventure'}>Adventure</MenuItem>
          <MenuItem value={'Cartoons'}>Cartoons</MenuItem>
          <MenuItem value={'Horror'}>Horror</MenuItem>
          <MenuItem value={'Comedies'}>Comedies</MenuItem>
        </Select>
      </FormControl>
    </div>

    <Stack  marginTop={4}>
    <Grid justifyContent={{xs:'center'}} container rowSpacing={{xs:4,md:2}} columnSpacing={{ xs: 1,sm:2, md: 4,lg:5 }}>
{content}
    </Grid>
    </Stack>
    </>
  )
}