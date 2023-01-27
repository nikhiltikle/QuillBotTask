import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import Search from '@mui/icons-material/Search';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TvIcon from '@mui/icons-material/Tv';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const list1 = [
  { name: 'Discover', component: <Search /> },
  { name: 'Playlist', component: <PlaylistPlayIcon /> },
  { name: 'Movie', component: <LiveTvIcon /> },
  { name: 'Tv Show', component: <TvIcon /> },
  { name: 'My List', component: <FormatListBulletedIcon /> },
];

const list2 = [
  { name: 'Watch Later', component: <WatchLaterIcon /> },
  { name: 'Recommended', component: <FavoriteBorderIcon /> },
];

const list3 = [
  { name: 'Settings', component: <SettingsIcon /> },
  { name: 'Logout', component: <LogoutIcon /> },
];

export default function NavbarItems() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        height="191px"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ height: '91px', width: '91px' }}
        />
        <Typography fontSize="20px" fontWeight="600">
          Eric Hoffman
        </Typography>
      </Box>

      <Divider />
      <List>
        {list1.map((list, index) => (
          <ListItem
            key={index}
            disablePadding
            selected={index === 0}
            sx={{
              '&.Mui-selected': {
                color: 'blue',
                backgroundColor: 'unset',
              },
            }}
          >
            <ListItemButton sx={{ marginLeft: '36px' }}>
              <ListItemIcon>{list.component}</ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
            {/* <Box
              sx={{
                backgroundColor: 'blue',
                width: '6px',
                height: '33px',
                marginRight: '-4px',
              }}
            ></Box> */}
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {list2.map((list, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ marginLeft: '36px' }}>
              <ListItemIcon>{list.component}</ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {list3.map((list, index) => (
          <ListItem key={list.name} disablePadding>
            <ListItemButton sx={{ marginLeft: '36px' }}>
              <ListItemIcon>{list.component}</ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
