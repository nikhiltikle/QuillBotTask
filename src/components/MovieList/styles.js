export const styles = {
  mainCard: {
    height: { xs: 240, sm: 278 },
    width: 176,
    backgroundColor: '#394B61',
    borderRadius: '11px',
    cursor: 'pointer',
    padding: 1,
  },
  image: {
    height: { xs: 150, sm: 188 },
    width: '100%',
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
    pt: 1,
  },
  cardActions: {
    pl: 0,
    mt: 1,
  },
};
