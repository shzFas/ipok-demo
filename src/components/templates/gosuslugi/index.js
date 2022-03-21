/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import PropTypes from 'prop-types';
import * as React from 'react';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate, useSearchParams} from 'react-router-dom';


import {userEsiaFill} from '../../../api/services/user';
import Button from '../../atoms/button';
import LogoIcon from '../../atoms/icons/LogoIcon';

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
      flexGrow: 1,
      width: '100%',
      height: '100%',
      padding: 0,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
);


const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Gosuslugi = ({redirectURL}) => {
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const {t} = useTranslation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const gosCode = searchParams.get('code');
    if (gosCode) {
      userEsiaFill(gosCode)
          .then(() => {
            navigate('/entry/success');
          })
          .catch((err) => {
            console.log(err);
          });
    }
  });

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
        <SvgIcon sx={{fontSize: 150}} component={LogoIcon}/>
        <Typography align="center" variant="h6">{t('template.gosuslugi.gosuslugiPageTitle.title')}</Typography>
      </div>
      <Button
        href={redirectURL}
        variant='contained'
        loading = {loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }}>
        {t('template.gosuslugi.btnAuthWithGosuslugi')}
      </Button>
    </Box>
  );
};

Gosuslugi.propTypes = {
  redirectURL: PropTypes.string,
};

export default Gosuslugi;
