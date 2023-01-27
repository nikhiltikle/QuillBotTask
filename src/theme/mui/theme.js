import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    background: {
      default: '#273244',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1F2A3C',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#D4D7DD',
          fontFamily: 'Open sans, sans-serif',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#394B61',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#D4D7DD',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1F2A3C',
        },
      },
    },
  },
});
