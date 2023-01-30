import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '../Toolbar';
import NavigationDrawer from '../NavigationDrawer';

export default function Navbar({ drawerWidth, onClickProfileAvatar }) {
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
        onClickProfileAvatar={onClickProfileAvatar}
      />
    </Box>
  );
}
