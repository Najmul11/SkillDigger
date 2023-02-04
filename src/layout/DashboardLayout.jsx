import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router-dom';
import cursor from '../assets/images/cursor.png';
import Sidebar from '../components/Admin/Sidebar';


export const DashboardLayout = () => {
  return (
    <Grid  css={{
      cursor: `url(${cursor}), default`,
    }}
    minH={'100vh'}
    templateColumns={['1fr', '5fr 1fr']}
    >
      <Box>
          <Outlet/>
      </Box>

      <Sidebar/>

    </Grid> 
  )
}
 