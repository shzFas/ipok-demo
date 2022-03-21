import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import {useTranslation} from 'react-i18next';

import Btn from '../../atoms/button';
import SuccessIcon from '../../atoms/icons/SuccessIcon';

const EntrySuccess = ({onNextClick}) => {
  const {t} = useTranslation();

  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      padding: '0 20px',
    }}>
      <Box sx={{padding: '30px 0'}}>
        <SvgIcon sx={{width: 1, fontSize: 256, marginBottom: '24px'}} component={SuccessIcon}/>
        <Typography textAlign="center" sx={{display: 'block'}} variant="h1b">
          {t('template.profileSuccess.title')}
        </Typography>
        <Typography textAlign="center" sx={{display: 'block'}} variant="h4">
          {t('template.profileSuccess.subtitle')}
        </Typography>
      </Box>
      <Box sx={{width: {xs: 1, sm: 500}, textAlign: 'center'}}>
        <Btn
          variant="outlined"
          onClick={() => onNextClick()}
        >
          {t('template.profileSuccess.btnOk')}
        </Btn>
      </Box>
    </Box>
  );
};

EntrySuccess.propTypes = {
  onNextClick: PropTypes.func,
};

export default EntrySuccess;
