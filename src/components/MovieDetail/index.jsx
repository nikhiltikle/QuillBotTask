import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Stack,
} from '@mui/material';

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
  sx,
}) {
  const classes = styles();
  const cal = () => {
    return (imdbRating / 10) * 100;
  };

  return (
    <Card
      sx={{
        ...sx,
        ...classes.cardContainer,
      }}
    >
      <CardMedia
        component="img"
        sx={classes.cardMedia}
        image={images}
        alt="Live from space album cover"
      />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ ml: 3 }}>
          <CardContent sx={classes.cardContent}>
            <Typography sx={classes.title} component="div" variant="h5">
              {title}
            </Typography>
            <Box sx={classes.ratingBarContainer}>
              <Box sx={classes.ratingBarParent}>
                <Box
                  sx={{
                    width: `${cal()}%`,
                    ...classes.ratingBarChild,
                  }}
                />
              </Box>
              <Typography>{`${cal() / 10}/10`}</Typography>
            </Box>
            <Stack direction="row" rowGap={1} sx={classes.movieDetailContainer}>
              <Box sx={{ mr: 2 }}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={classes.movieDetailTypography}
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
