import React, { useState } from 'react';
import { CardMedia, CardContent, CardActions, Card, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { styles, SvgCardButton } from './styles';
import movies from '../../__mock__/movies/movies.json';
import MovieDetail from '../MovieDetail';

export default function MovieList() {
  const [selectedMovie, setMovie] = useState({});

  const classes = styles();

  const onSelectMovie = (movie) => {
    setMovie(movie);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '37px 26px',
        // width: '100%',
        position: 'relative',
      }}
    >
      {movies.map((movie, index) => (
        <Box key={index}>
          <Box
            sx={{
              display:
                selectedMovie?.imdbID === movie?.imdbID ? 'block' : 'none',
              height: '500px',
            }}
          >
            <Box
              sx={{
                ':after': {
                  content: '""',
                  display: 'block',
                  position: 'relative',
                  height: '200px',
                  background: 'red',
                  width: '100%',
                  left: 0,
                },
              }}
            >
              <Box>{/* <MovieDetail /> */}</Box>
            </Box>
          </Box>

          <Box>
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
          </Box>
        </Box>
      ))}
    </Box>
  );
}
