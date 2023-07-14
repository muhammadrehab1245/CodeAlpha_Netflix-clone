import {  CssBaseline, IconButton, Stack } from '@mui/material'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import React from 'react'
import video from '../assets/StrangerThings.mp4'
import {useNavigate} from "react-router-dom"
export const Player = () => {

    const navigate = useNavigate();
  return (
    <>
    <CssBaseline/>
    <Stack>
    <Stack>
    <video style={{overflow:'hidden'}} height='100%' width='100%'   controls>
  <source src={video}/>
</video>
  <Stack left={7} top={126} position='absolute' direction="row">
<IconButton onClick={()=>navigate('/')} sx={{color:'#e53935'}} size='large'  aria-label="add to shopping cart">
  <AiOutlineArrowLeft />

</IconButton>
  </Stack>

</Stack>
</Stack>
  </>
  )
}
