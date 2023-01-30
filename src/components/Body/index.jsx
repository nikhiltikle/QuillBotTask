import React from 'react';
import Box from '@mui/material/Box';

export default function Body({ drawerWidth, children }) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        px: '48px',
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      {children}
    </Box>
  );
}
