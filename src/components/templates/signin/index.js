import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import Btn from '../../atoms/button';

// eslint-disable-next-line react/prop-types
const SignIn = ({onSignin, loading}) => {
  const [phone, setPhone] = useState('');
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
      </div>
      <div>
        <TextField
          type="number"
          style={{marginTop: '32px'}}
          fullWidth
          label={t('template.signin.inpPhone')}
          variant="standard"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <Btn
        variant='contained'
        loading={loading}
        onClick={() => onSignin(phone)}
      >
        {t('template.signin.btnSignin')}
      </Btn>
    </Box>
  );
};

export default SignIn;
