import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import PropTypes from 'prop-types';
import * as React from 'react';
import {useTranslation} from 'react-i18next';

import Btn from '../../atoms/button';
import LogoIcon from '../../atoms/icons/LogoIcon';

const Auth = ({onSignin, onRegister}) => {
  const {t} = useTranslation();

  return (
    <Box sx={{
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      padding: '0 20px',
    }}>
      <Box sx={{
        padding: '30px 0',
        textAlign: 'center',
      }}>
        <SvgIcon sx={{width: 1, fontSize: 114}} component={LogoIcon}/>
        <Typography variant="h2">{t('common.companyName')}</Typography>
        <Typography variant="body2" sx={{color: 'gray'}}>{t('template.auth.description')}</Typography>
      </Box>
      <Box sx={{width: {xs: 1, sm: 500}}}>
        <Btn
          variant='contained'
          onClick={() => onSignin()}
        >
          {t('template.auth.btnSignin')}
        </Btn>
        <Btn
          variant="outlined"
          onClick={() => onRegister()}
        >
          {t('template.auth.btnRegister')}
        </Btn>
      </Box>
    </Box>
  );
};

Auth.propTypes = {
  onSignin: PropTypes.func,
  onRegister: PropTypes.func,
};

export default Auth;
