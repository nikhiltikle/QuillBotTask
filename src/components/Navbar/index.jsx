import React, { useState } from 'react';
import Toolbar from '../Toolbar';
import Box from '@mui/material/Box';

import NavigationDrawer from '../NavigationDrawer';

export default function Navbar({ drawerWidth }) {
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenMobileDrawer(!openMobileDrawer);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} />
      <NavigationDrawer
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        openMobileDrawer={openMobileDrawer}
      />
    </Box>
  );
}
