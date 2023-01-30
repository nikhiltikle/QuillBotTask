import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Dashboard from './pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  </React.StrictMode>
);
