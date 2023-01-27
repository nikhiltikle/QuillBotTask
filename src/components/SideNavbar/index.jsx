import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import Box from '@mui/material/Box';

import Navbar from './components/Navbar';

export default function SideNavbar({ drawerWidth }) {
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenMobileDrawer(!openMobileDrawer);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} />
      <Navbar
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        openMobileDrawer={openMobileDrawer}
      />
    </Box>
  );
}
