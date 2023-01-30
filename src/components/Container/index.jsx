import React from 'react';
import Box from '@mui/material/Box';

export default function Container({ drawerWidth, children }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        px: { xs: '15px', sm: '48px' },
        pb: 2,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      {children}
    </Box>
  );
}
