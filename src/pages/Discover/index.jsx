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
import movies from '../../__mock__/movies/movies.json';

export default function Discover() {
  const [checked, setChecked] = React.useState(false);
  const [moviesData, setMoviesData] = React.useState(movies);

  const handleSearch = (event) => {
    const filterData = movies.filter((f) => {
      if (event.target.value === '') return f;
      return f.Title.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setMoviesData(filterData);
  };

  const onCancelSearch = () => {
    setMoviesData(movies);
    setChecked(false);
  };

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
                autoFocus
                placeholder="Title, Movies, Keyword"
                onChange={handleSearch}
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
                      <IconButton onClick={onCancelSearch}>
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

      <MovieList movies={moviesData} />
    </>
  );
}
