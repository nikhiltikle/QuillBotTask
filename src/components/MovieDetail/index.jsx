import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { styles } from './styles';

export default function MovieDetail({
  title,
  images,
  runTime,
  directedBy,
  language,
  plot,
  year,
  imdbRating,
}) {
  const getRating = () => {
    return Number(imdbRating) ? (imdbRating / 10) * 100 : 0;
  };

  return (
    <Card sx={styles.cardContainer}>
      <CardMedia
        component="img"
        sx={styles.cardMedia}
        image={images}
        alt="Live from space album cover"
      />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ ml: 3 }}>
          <CardContent sx={styles.cardContent}>
            <Typography sx={styles.title} component="div" variant="h5">
              {title}
            </Typography>
            <Box sx={styles.ratingBarContainer}>
              <Box sx={styles.ratingBarParent}>
                <Box
                  sx={{
                    width: `${getRating()}%`,
                    ...styles.ratingBarChild,
                  }}
                />
              </Box>
              <Typography>{`${getRating() / 10}/10`}</Typography>
            </Box>
            <Stack direction="row" rowGap={1} sx={styles.movieDetailContainer}>
              <Box sx={{ mr: 2 }}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={styles.movieDetailTypography}
                >
                  Year:
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '31px',
                    color: '#D4D7DD',
                  }}
                >
                  Running Time:
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '31px',
                    color: '#D4D7DD',
                  }}
                >
                  Directed by:
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '31px',
                    color: '#D4D7DD',
                  }}
                >
                  language:
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '31px',
                    color: '#D4D7DD',
                  }}
                >
                  {year}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '31px',
                    color: '#D4D7DD',
                  }}
                >
                  {runTime}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{ color: '#D4D7DD' }}
                >
                  {directedBy}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '31px',
                    color: '#D4D7DD',
                  }}
                >
                  {language}
                </Typography>
              </Box>
            </Stack>

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '18px',
                color: '#FFFFFF',
              }}
            >
              {plot}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              sx={{
                background: '#00E0FF',
                borderRadius: '5px',
                width: '154px',
                height: '38px',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '162%',
                color: '#000000',
                textTransform: 'capitalize',

                ':hover': {
                  backgroundColor: '#00E0FF',
                  opacity: 0.7,
                },
              }}
            >
              Play Movie
            </Button>
            <Button
              sx={{
                background: '#394B61',
                border: '1px solid #00E0FF',
                borderRadius: '5px',

                width: '154px',
                height: '38px',
                textAlign: 'center',
                color: '#00E0FF',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '162%',
                textTransform: 'capitalize',
              }}
            >
              Watch Trailer
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
}

MovieDetail.propTypes = {
  title: PropTypes.string,
  images: PropTypes.string,
  runTime: PropTypes.string,
  directedBy: PropTypes.string,
  language: PropTypes.string,
  plot: PropTypes.string,
  year: PropTypes.string,
  imdbRating: PropTypes.string,
};
