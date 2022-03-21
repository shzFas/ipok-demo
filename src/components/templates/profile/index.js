import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
// import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import Btn from '../../atoms/button';
import ProfileIcon from '../../atoms/icons/ProfileIcon';

const Profile = ({onAutoFillClick, onManualFillClick}) => {
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
      <Box sx={{padding: '30px 0'}}>
        <SvgIcon sx={{width: 1, fontSize: 256}} component={ProfileIcon}/>
      </Box>
      <Box sx={{width: {xs: 1, sm: 500}, textAlign: 'center'}}>
        <Btn
          variant="outlined"
          onClick={() => onManualFillClick()}
        >
          {t('template.profile.btnManualFill')}
        </Btn>
        <Btn
          variant='contained'
          onClick={() => onAutoFillClick()}
        >
          {t('template.profile.btnAutoFill')}
        </Btn>
        <Typography variant="body2" sx={{color: 'gray'}}>{t('template.profile.description')}</Typography>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  onAutoFillClick: PropTypes.func,
  onManualFillClick: PropTypes.func,
};

export default Profile;
