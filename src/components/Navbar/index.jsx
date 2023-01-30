import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

Navbar.propTypes = {
  drawerWidth: PropTypes.number,
  onClickProfileAvatar: PropTypes.func,
};
