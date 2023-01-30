import React, { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Zoom from '@mui/material/Zoom';
import Typography from '@mui/material/Typography';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import MovieDetail from '../MovieDetail';
import { styles } from './styles';

const CARDS_GAP = 37;

export default function MovieList({ movies, setSelectedMovie, selectedMovie }) {
  const [movieDetailOrder, setMovieDetailOrder] = useState(0);

  const calculateMovieDetailOrder = (index) => {
    const container = document.getElementById('moviesList');
    const movieCard = document.getElementById('movieCard');
    const containerWidth = container.clientWidth;
    const movieCardWidth = movieCard.offsetWidth + CARDS_GAP;

    const cardsInRow = Math.round(containerWidth / movieCardWidth);

    const order = Math.floor(index / cardsInRow) * cardsInRow;

    setMovieDetailOrder(order);
  };

  const onSelectMovie = (movie, index) => {
    calculateMovieDetailOrder(index);
    setSelectedMovie(movie);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: `${CARDS_GAP}px 26px`,
        width: '100%',
      }}
      id="moviesList"
    >
      {selectedMovie?.imdbID && (
        <Zoom key={selectedMovie?.imdbID} in timeout={800}>
          <Box sx={{ flex: '1 1 100%', order: movieDetailOrder }}>
            <MovieDetail
              title={selectedMovie.Title}
              images={selectedMovie.Poster}
              runTime={selectedMovie.Runtime}
              year={selectedMovie.Year}
              directedBy={selectedMovie.Director}
              language={selectedMovie.Language}
              plot={selectedMovie.Plot}
              imdbRating={selectedMovie.imdbRating}
            />
          </Box>
        </Zoom>
      )}
      {movies.map((movie, index) => (
        <Card
          key={index}
          id="movieCard"
          sx={{
            ...styles.mainCard,
            order: index,
            border:
              selectedMovie?.imdbID === movie?.imdbID
                ? '3px solid #00E0FF'
                : '3px solid transparent',
          }}
          onClick={() => onSelectMovie(movie, index)}
        >
          <CardMedia
            sx={styles.image}
            image={movie.Poster}
            title={movie.Title}
          />
          <CardContent sx={styles.cardContent}>
            <Typography
              sx={styles.contentTitle}
              gutterBottom
              variant="body1"
              component="div"
            >
              {movie.Title}
            </Typography>
          </CardContent>
          <CardActions sx={styles.cardActions}>
            <PlayCircleOutlineIcon />
            <ControlPointIcon />
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
