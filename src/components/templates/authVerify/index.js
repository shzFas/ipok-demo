import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import Btn from '../../atoms/button';

const AuthVerify = ({onAuthVerify, loading}) => {
  // const theme = useTheme();
  const [code, setCode] = useState('');
  const {t} = useTranslation();

  return (
    <Box sx={{
      display: 'flex',
      // width: '100%',
      height: '100%',
      alignItems: 'center',
      // justifyContent: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      padding: '0 20px',
    }}>

      <div style={{
        padding: '30px 0',
      }}>
        <Typography align="center" variant="h6">{t('template.authVerify.title')}</Typography>
      </div>
      <div>
        <TextField
          type="number"
          sx={{marginTop: '32px'}}
          fullWidth
          onChange={(e) => setCode(e.target.value)}
          label={t('template.authVerify.inpCodeLabel')}
        />
      </div>
      <Btn
        variant='contained'
        loading={loading}
        onClick={() => onAuthVerify(code) }
      >
        {t('template.authVerify.btnContinue')}
      </Btn>
    </Box>
  );
};

AuthVerify.propTypes = {
  bot: PropTypes.object,
  onAuthVerify: PropTypes.func,
  loading: PropTypes.bool,
};

export default AuthVerify;
