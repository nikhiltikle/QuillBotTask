import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grow from '@mui/material/Grow';
import ClearIcon from '@mui/icons-material/Clear';

export default function Body({ drawerWidth }) {
  const [checked, setChecked] = React.useState(false);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        px: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
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
                placeholder="Title, Movies, Keyword"
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
                      <IconButton onClick={() => setChecked((prev) => !prev)}>
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
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
      <Typography paragraph>
        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
        integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
        lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
        Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
        accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
        Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
        senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
        Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
        maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
        aliquam ultrices sagittis orci a.
      </Typography>
    </Box>
  );
}
