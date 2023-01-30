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
import NotFound from '../../components/NotFound';

export default function Discover({
  movies,
  onSearchMovie,
  resetMovies,
  openSearchField,
  setOpenSearchField,
  setSelectedMovie,
  selectedMovie,
}) {
  const onCancelSearch = () => {
    setOpenSearchField(false);
    resetMovies();
  };

  return (
    <>
      <Grid container marginBottom="39px" marginTop="42px">
        <Grid item xs={6}>
          {!openSearchField ? (
            <Box sx={{ height: '55px', display: 'flex', alignItems: 'center' }}>
              <IconButton onClick={() => setOpenSearchField((prev) => !prev)}>
                <SearchIcon fontSize="medium" />
              </IconButton>
            </Box>
          ) : (
            <Grow
              in={openSearchField}
              style={{ transformOrigin: '0' }}
              {...(openSearchField ? { timeout: 1100 } : {})}
            >
              <TextField
                fullWidth
                autoFocus
                placeholder="Title, Movies, Keyword"
                onChange={onSearchMovie}
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

      {Boolean(movies.length) ? (
        <MovieList
          movies={movies}
          setSelectedMovie={setSelectedMovie}
          selectedMovie={selectedMovie}
        />
      ) : (
        <NotFound>No results found for your search.</NotFound>
      )}
    </>
  );
}
