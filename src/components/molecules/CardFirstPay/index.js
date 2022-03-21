import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import {useTranslation} from 'react-i18next';

const CardFirstPay = ({firstDayPercent}) => {
  const {t} = useTranslation();
  return (
    <Grid item xs={4}>
      <Typography
        sx={{fontSize: '14px', color: '#7A7A7A'}}>
        {t('molecules.cardFirstPay.firstPayment')}
      </Typography>
      <Typography variant='h6'>{firstDayPercent} %</Typography>
    </Grid>
  );
};

CardFirstPay.propTypes = {
  firstDayPercent: PropTypes.number,
};

export default CardFirstPay;
