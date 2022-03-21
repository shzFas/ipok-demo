import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import {useTranslation} from 'react-i18next';

const CardPayment = () => {
  const {t} = useTranslation();
  return (
    <Grid item xs={8}>
      <Typography
        sx={{fontSize: '14px', color: '#7A7A7A'}}>
        {t('molecules.cardPayment.monthlyPayment')}
      </Typography>
      <Typography variant='h6'>110 000 ₽</Typography>
    </Grid>
  );
};

export default CardPayment;

