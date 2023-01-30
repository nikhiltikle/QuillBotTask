import React from 'react';
import PropTypes from 'prop-types';
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

NotFound.propTypes = {
  children: PropTypes.string.isRequired,
};
