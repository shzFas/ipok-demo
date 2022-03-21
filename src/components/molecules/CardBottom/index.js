import Grid from '@mui/material/Grid';
import * as React from 'react';

import CardFirstPay from '../CardFirstPay';
import CardPayment from '../CardPayment';

const CardBottom = () => {
  return (
    <Grid container sx={{
      marginTop: '16px',
    }}>
      <CardPayment/>
      <CardFirstPay firstDayPercent={4} />
    </Grid>
  );
};

export default CardBottom;
