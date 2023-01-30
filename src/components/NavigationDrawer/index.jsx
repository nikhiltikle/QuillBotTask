import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import NavigationList from '../NavigationList';

export default function NavigationDrawer({
  drawerWidth,
  openMobileDrawer,
  toggleDrawer,
  onClickProfileAvatar,
}) {
  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={openMobileDrawer}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <NavigationList onClickProfileAvatar={onClickProfileAvatar} />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        <NavigationList onClickProfileAvatar={onClickProfileAvatar} />
      </Drawer>
    </Box>
  );
}
