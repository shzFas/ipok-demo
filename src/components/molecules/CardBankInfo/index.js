/* eslint-disable react/prop-types */
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';

const CardBankInfo = ({digitBank}) => {
  return (
    <Grid container sx={{
      marginTop: '16px',
    }}>
      <Grid item xs={8}>
        <Typography
          sx={{fontSize: '14px', color: '#7A7A7A'}}>
          {digitBank[0].title}
        </Typography>
        <Typography variant='h6'>
          {digitBank[0].value}
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography
          sx={{fontSize: '14px', color: '#7A7A7A'}}>
          {digitBank[1].title}
        </Typography>
        <Typography variant='h6'>
          {digitBank[1].value}
        </Typography>
      </Grid>
    </Grid>
  );
};

CardBankInfo.propTypes = {
  items: PropTypes.array,
};
export default CardBankInfo;
