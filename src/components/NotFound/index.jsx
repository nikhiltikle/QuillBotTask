import React from 'react';
import Typography from '@mui/material/Typography';

export default function NotFound({ children }) {
  return (
    <Typography
      sx={{
        fontWeight: 600,
        fontSize: '21px',
        lineHeight: '210%',
        color: '#FFFFFF',
      }}
    >
      {children}
    </Typography>
  );
}
