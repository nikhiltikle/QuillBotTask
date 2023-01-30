import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function NavigationListItem({
  selected,
  disabled,
  icon,
  title,
  ...props
}) {
  const Icon = icon;

  return (
    <ListItem disablePadding>
      <ListItemButton
        selected={selected}
        disabled={disabled}
        sx={{
          padding: 0,
          paddingLeft: '52px',
          ':before': selected && {
            position: 'absolute',
            right: 0,
            content: '""',
            height: '100%',
            width: '3px',
            backgroundColor: '#00E0FF',
          },
        }}
        {...props}
      >
        <ListItemIcon sx={{ minWidth: 'auto', marginRight: '14px' }}>
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={title} sx={{ margin: 0 }} />
      </ListItemButton>
    </ListItem>
  );
}

NavigationListItem.propTypes = {
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.object,
  title: PropTypes.string,
};
