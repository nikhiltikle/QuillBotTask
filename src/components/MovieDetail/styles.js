export const styles = {
  cardContainer: {
    display: { xs: 'block', sm: 'flex' },
    width: '100%',
    height: { xs: '100%', sm: 389 },
    backgroundColor: '#394B61',
    borderRadius: '11px',
    paddingBottom: { xs: 1, sm: 0 },
  },
  cardMedia: {
    width: { xs: '100%', sm: 349 },
    height: { xs: '200px', sm: '100%' },
    objectFit: 'cover',
  },
  cardContent: {
    color: '#D4D7DD',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '30px',
    lineHeight: '41px',
    color: '#D4D7DD',
    mb: '15px',
  },
  ratingBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    mb: '20px',
  },
  ratingBarParent: {
    width: '111px',
    height: '8px',
    backgroundColor: '#283647',
    position: 'relative',
    mr: '10px',
    borderRadius: '5px',
  },
  ratingBarChild: {
    height: '8px',
    backgroundColor: '#00E0FF',
    position: 'absolute',
    borderRadius: '5px',
  },
  movieDetailContainer: {
    mb: '20px',
    width: '100%',
  },
  movieDetailTypography: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '31px',
    color: '#D4D7DD',
  },
};
