import React, { useState } from 'react';
import { CardMedia, CardContent, CardActions, Card, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { styles, SvgCardButton } from './styles';
import MovieDetail from '../MovieDetail';

export default function MovieList({ movies }) {
  const [selectedMovie, setMovie] = useState({});

  const classes = styles();

  const onSelectMovie = (movie) => {
    setMovie(movie);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '37px 26px',
        width: '100%',
      }}
    >
      {movies.map((movie, index) => (
        <>
          {selectedMovie?.imdbID === movie?.imdbID && (
            <Box sx={{ flex: '1 1 100%' }}>
              <MovieDetail
                title={movie.Title}
                images={movie.Poster}
                runTime={movie.Runtime}
                year={movie.Year}
                directedBy={movie.Director}
                language={movie.Language}
                plot={movie.Plot}
                imdbRating={movie.imdbRating}
              />
            </Box>
          )}
          <Card
            sx={{ ...classes.mainCard }}
            onClick={() => onSelectMovie(movie)}
          >
            <CardMedia
              sx={classes.image}
              image={movie.Poster}
              title={movie.Title}
            />
            <CardContent sx={classes.cardContent}>
              <Typography
                sx={classes.contentTitle}
                gutterBottom
                variant="body1"
                component="div"
              >
                {movie.Title}
              </Typography>
            </CardContent>
            <CardActions sx={classes.cardActions}>
              <SvgCardButton>
                <PlayCircleOutlineIcon />
              </SvgCardButton>

              <SvgCardButton>
                <ControlPointIcon />
              </SvgCardButton>
            </CardActions>
          </Card>
        </>
      ))}
    </Box>
  );
}
