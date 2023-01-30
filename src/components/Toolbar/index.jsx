import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MuiToolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';

export default function Toolbar({ drawerWidth, toggleDrawer }) {
  return (
    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <MuiToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </MuiToolbar>
      </AppBar>
    </Box>
  );
}

Toolbar.propTypes = {
  drawerWidth: PropTypes.number,
  toggleDrawer: PropTypes.func,
};
