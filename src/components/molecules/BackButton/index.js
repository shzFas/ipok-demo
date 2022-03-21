import {Box, IconButton, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import * as React from 'react';

import BackIcon from '../../atoms/icons/BackIcon';

const BackButton = ({title, subtitle, onClick}) => {
  return (
    <Box
      sx={{
        width: 1,
        minHeight: '48px',
        display: 'flex',
        margin: '22px 0',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      {/* <Button variant="text" sx={{position: 'absolute'}}>B</Button> */}
      <IconButton
        sx={{position: 'absolute'}}
        aria-label="Back"
        onClick={onClick}
      >
        <BackIcon />
      </IconButton>
      <Box sx={{width: 1}}>
        <Typography variant="h7" textAlign="center" sx={{display: 'block', color: 'gray'}}>
          {subtitle}
        </Typography>
        <Typography variant="h6" textAlign="center"sx={{display: 'block'}}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

BackButton.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
};

export default BackButton;
