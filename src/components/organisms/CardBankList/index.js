/* eslint-disable max-len */
import {Skeleton} from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import {useTranslation} from 'react-i18next';

import * as f from '../../../utils/format';
import BankLogoAlfaBank from '../../atoms/icons/BankLogoAlfaBank';
import BankLogoDomRf from '../../atoms/icons/BankLogoDomRf';
import BankLogoRosBank from '../../atoms/icons/BankLogoRosBank';
import BankLogoSovcom from '../../atoms/icons/BankLogoSovcom';
import BankLogoVTB from '../../atoms/icons/BankLogoVTB';
import CardBankInfo from '../../molecules/CardBankInfo';
import CardString from '../../molecules/CardString';

const getBankLogo = (name) => {
  let logo = BankLogoVTB;
  switch (name) {
    case 'VTB':
      logo = BankLogoVTB;
      break;
    case 'Alfa-bank':
      logo = BankLogoAlfaBank;
      break;
    case 'Dom.rf':
      logo = BankLogoDomRf;
      break;
    case 'Sovcom':
      logo = BankLogoSovcom;
      break;
    case 'RosBank':
      logo = BankLogoRosBank;
      break;
  }

  return <SvgIcon sx={{fontSize: 40, marginRight: '16px'}} component={logo}/>;
};

const CardBankList = ({propose}) => {
  const {t} = useTranslation();
  const creditRate = t('organisms.bankList.cardBankList.credit.rate');
  const creditSum = t('organisms.bankList.cardBankList.credit.sum');
  const creditTerm = t('organisms.bankList.cardBankList.credit.term');
  const creditMonthlyPayment = t('organisms.bankList.cardBankList.credit.payment.monthlyPayment');
  const creditFirstPayment = t('organisms.bankList.cardBankList.credit.payment.firstPayment');
  const bankTitle = t(`organisms.bankList.bank.${propose.bank.name}`);

  const creditMonthPay =<Typography sx={{display: 'inline'}} variant='h7'> {propose.propose.status === 'pending' ? <Skeleton sx={{width: '80%'}} /> : f.price(propose.propose.monthPay)} </Typography>;
  const creditSUmPay =<Typography sx={{display: 'inline'}} variant='h7'> {propose.propose.status === 'pending' ? <Skeleton sx={{width: '80%'}}/> : f.price(propose.propose.amount)} </Typography>;
  const creditFirstPay =<Typography sx={{display: 'inline'}} variant='h7'> {propose.propose.status === 'pending' ? <Skeleton /> : f.percent(propose.propose.firstPayPercent)} </Typography>;
  const creditTermPay =<Typography sx={{display: 'inline'}} variant='h7'> {propose.propose.status === 'pending' ? <Skeleton /> : propose.propose.dueYears} </Typography>;

  return (<Paper
    sx={{
      padding: '24px',
      width: 1,
      marginBottom: '20px',
      borderRadius: '16px',
    }}
    variant="outlined"
  >
    <Grid container sx={{
    }}>
      <Grid item xs={8} sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      } }>
        {getBankLogo(propose.bank.name)}
        <Typography variant='h5'>{bankTitle}</Typography>
      </Grid>
      <Grid item xs={4} sx={{
        alignItems: 'center',
        display: 'flex',
      }}>
        <div>
          <Typography sx={{display: 'inline', color: 'text.secondary'}}>{creditRate} </Typography>
          <Typography sx={{display: 'inline'}} variant='h6'> {propose.propose.status === 'pending' ? <Skeleton /> : f.percent(propose.bank.rate)}</Typography>
        </div>
      </Grid>
    </Grid>
    <CardString/>
    <CardBankInfo digitBank={[
      {title: creditSum, value: creditSUmPay},
      {title: creditTerm, value: creditTermPay},
    ]}/>
    <CardBankInfo digitBank={[
      {title: creditMonthlyPayment, value: creditMonthPay},
      {title: creditFirstPayment, value: creditFirstPay},
    ]}>
      <Typography sx={{display: 'inline'}} variant='h6'> {propose.propose.status === 'pending' ? <Skeleton /> : f.price(propose.propose.monthPay)}</Typography>
    </CardBankInfo>
  </Paper>);
};


CardBankList.propTypes = {
  propose: PropTypes.object,
};


export default CardBankList;
