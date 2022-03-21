import Typography from '@mui/material/Typography';
import React from 'react';
import {useTranslation} from 'react-i18next';

const BankListTitle = () => {
  const {t} = useTranslation();
  return (
    <Typography
      sx={{margin: '30px 0'}}
      align="center"
      variant="h5">
      {t('molecules.bankListTitle.title')}
    </Typography>
  );
};

export default BankListTitle;
