/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import * as React from 'react';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';

import BackButton from '../../molecules/BackButton';
import CardBankList from '../../organisms/CardBankList';

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

// eslint-disable-next-line react/prop-types
const BankList = ({getEntryProposesList}) => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  // const theme = useTheme();
  const [entryProposeList, setEntryProposeList] = React.useState([]);

  useEffect(() => {
    (async function f() {
      const list = await getEntryProposesList('mockUuid');
      setEntryProposeList(list);
    })();
  }, []);


  return (<>
    <BackButton
      subtitle={''}
      title={t('molecules.bankListTitle.title')}
      onClick={() => navigate('/')}
    />
    <Box sx={{
      display: 'flex',
      // width: '100%',
      height: '100%',
      alignItems: 'center',
      // justifyContent: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      padding: '0 40px',
    }}>
      {entryProposeList.map((propose, key) => <CardBankList
        key={`bank-propose-${key}`}
        propose={propose}
      />)}
    </Box>
  </>
  );
};


export default BankList;
