import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grow from '@mui/material/Grow';
import ClearIcon from '@mui/icons-material/Clear';
import MovieList from '../../components/MovieList';

export default function Discover() {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <Grid container marginBottom="39px" marginTop="42px">
        <Grid item xs={6}>
          {!checked ? (
            <Box sx={{ height: '55px', display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={() => setChecked((prev) => !prev)}>
                <SearchIcon fontSize="medium" />
              </IconButton>
            </Box>
          ) : (
            <Grow
              in={checked}
              style={{ transformOrigin: '0' }}
              {...(checked ? { timeout: 1100 } : {})}
            >
              <TextField
                fullWidth
                placeholder="Title, Movies, Keyword"
                sx={{
                  maxWidth: '567px',
                  '& .MuiInputBase-root': {
                    fontSize: '21px',
                    fontWeight: 600,
                    lineHeight: '210%',
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <SearchIcon sx={{ marginRight: '12px' }} />
                    </InputAdornment>
                  ),

                  endAdornment: (
                    <InputAdornment>
                      <IconButton onClick={() => setChecked((prev) => !prev)}>
                        <ClearIcon fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grow>
          )}
        </Grid>
        <Grid
          display="flex"
          alignItems="center"
          item
          xs={6}
          justifyContent="end"
        >
          <IconButton>
            <WbSunnyIcon fontSize="medium" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="medium" />
          </IconButton>
        </Grid>
      </Grid>

      <MovieList />
    </>
  );
}
