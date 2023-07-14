import React from 'react'
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { Typesfilter } from '../components/Typesfilter';
import { useEffect } from 'react';
import { InputLabel, Stack } from '@mui/material';
import { AllMovieslist, AllgetMoviesError, AllgetMoviesStatus, fetchAllMovies } from '../assets/features/movies/Movieslice';
import { useLocation } from 'react-router-dom';
export const AllMovies = () => {
  const path = useLocation();
  let [showcategory, setshowcategory] = React.useState('All');

  const handleChange = (event) => {
    setshowcategory(event.target.value);
  };

  const dispatch = useDispatch();
  const allmovies = useSelector(AllMovieslist);
  const allstatus = useSelector(AllgetMoviesStatus);
  const allerror = useSelector(AllgetMoviesError);

  let content;
  useEffect(() => {
    if (allstatus === "idle") {
      dispatch(fetchAllMovies());
}}, [allstatus, dispatch]);

if (allstatus === "loading") {
  content = <p>"Loading..."</p>;

} else if (allstatus === "succeeded") {
  if(showcategory==='All'){
    content = allmovies.map((tv) => (
     <Typesfilter  path={path.pathname} tv={tv} key={tv.id}/>
    ));
   }
   else{
    content = allmovies.map((tv) => (
     tv.Category===showcategory?<Typesfilter path={path.pathname} tv={tv} key={tv.id}/>:''
     ));
   }
} else if (allstatus === "failed") {
  content = <p>{allerror}</p>;
}
  return (
    <>
    <div>
      <FormControl id='moviepick' sx={{ m: 3, minWidth: 60,backgroundColor:'white', ".MuiOutlinedInput-notchedOutline": {
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
          <MenuItem value={'Thriller'}>Thriller</MenuItem>
          <MenuItem value={'Historical'}>Historical</MenuItem>
          <MenuItem value={'Animated'}>Animated</MenuItem>
          <MenuItem value={'Horror'}>Horror</MenuItem>
          <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
        </Select>
      </FormControl>
    </div>

<Stack marginTop={4}>
<Grid justifyContent={{xs:'center'}} container rowSpacing={{xs:4,md:2}} columnSpacing={{ xs: 1,sm:2, md: 4,lg:5 }}>
{content}
</Grid>
</Stack>
</>
  )
}
