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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '& .MuiListItemText-primary': {
            fontWeight: 600,
            fontSize: '15px',
            lineHeight: '247%',
          },

          '&.Mui-disabled': {
            opacity: 1,
          },

          '&.Mui-selected': {
            color: '#00E0FF',
            backgroundColor: 'transparent',

            '& .MuiSvgIcon-root': {
              color: '#00E0FF',
            },

            '& .MuiListItemText-primary': {
              color: '#00E0FF',
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: '55px',
          backgroundColor: '#1A2536',
          color: '#ffffff',
          outline: 'none',
          borderRadius: '8px !important',
          fontFamily: 'Open sans, sans-serif',

          '& fieldset': {
            outline: 'none',
            border: 'none',
          },
        },
      },
    },
  },
});
