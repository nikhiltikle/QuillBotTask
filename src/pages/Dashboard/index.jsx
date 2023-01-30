import React from 'react';
import Box from '@mui/system/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from '../../components/Navbar';
import Body from '../../components/Body';

const DRAWER_WIDTH = 275;

export default function Dashboard() {
  return (
    <Box display="flex">
      <CssBaseline />
      <Navbar drawerWidth={DRAWER_WIDTH} />
      <Body drawerWidth={DRAWER_WIDTH} />
    </Box>
  );
}
