/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {styled} from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';

import Menu from '../../organisms/Menu';

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
      flexGrow: 1,
      width: '100%',
      height: '100%',
      padding: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
);

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

// eslint-disable-next-line react/prop-types
const MainTpl = () => {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex', width: '100%', height: '100%'}}>
      <CssBaseline />
      <Menu
        open={open}
        drawerWidth={drawerWidth}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Main open={open}>
        <DrawerHeader />
        Some content will be here...
      </Main>
    </Box>
  );
};

Menu.propTypes = {
  bot: PropTypes.object,
};

export default MainTpl;
