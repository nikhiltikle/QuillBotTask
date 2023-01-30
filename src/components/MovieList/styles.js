import { styled } from '@mui/material';

export const styles = () => ({
  mainCard: {
    height: 278,
    width: 176,
    backgroundColor: '#394B61',
    borderRadius: '11px',
    padding: '1px',
    cursor: 'pointer',
  },
  image: {
    height: '100%',
    width: 157,
    margin: 1,
    borderRadius: '6px',
    objectFit: 'cover',
  },
  cardContent: {
    textAlign: 'left',
    p: 0,
    color: 'white',
  },
  contentTitle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '20px',
    color: '#D4D7DD',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    pl: 1,
  },
  cardActions: {
    p: 0,
    mt: 1,
  },
});

export const SvgCardButton = styled('button')({
  backgroundColor: 'transparent',
  color: 'white',
  fontSize: '1rem',
  border: 'none',
  cursor: 'pointer',
});
