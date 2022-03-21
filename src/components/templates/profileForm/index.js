import {Typography} from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import * as React from 'react';
// import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';

import ProfileFormInput from '../../atoms/ProfileFormCheckbox';
import ProfileFormDatePicker from '../../atoms/ProfileFormDatePicker';
import Input from '../../atoms/ProfileFormInput';
import ProfileFormRadio from '../../atoms/ProfileFormRadio';
import ProfileFormSelect from '../../atoms/ProfileFormSelect';
import Btn from '../../atoms/button';
import BackButton from '../../molecules/BackButton';

const ProfileForm = ({onNext}) => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  // TODO: mock for form
  // TODO: form generator
  // TODO: - input text
  // TODO: - input radio
  // TODO: - input select
  // TODO: - input file
  // TODO: - input file + camera


  /*
  const translations = {
    'ProfileForm': {
      'profile': {
        'personalData': {
          'name': 'Name',
          'surname': 'Surname',
          'middlename': 'Middlename',
        },
        'passportData': {
          'number': 'Nubmer',
          'departCode': 'Departament code',
          'date': 'Date',
        },
      },
    },
  };
  */

  const mock = {
    name: 'ProfileForm',
    version: '0.1b',
    description: 'Mock for profile form',
    data: [
      {type: 'group', name: 'profile', data: [
        // Credit params
        {type: 'input.select', name: 'creditPurpose', data: {
          options: ['mortage'],
        }},
        {type: 'input.select', name: 'creditRegionEstate', data: {
          options: ['moscow', 'saint-petersburg'],
        }},
        {type: 'input.select', name: 'creditRegionAppeal', data: {
          options: ['moscow', 'saint-petersburg'],
        }},

        // Personal data
        {type: 'subgroup', name: 'personalData', data: [
          {type: 'input.text', name: 'firstname', data: {}},
          {type: 'input.text', name: 'patronymic', data: {require: false}},
          {type: 'input.text', name: 'lastname', data: {}},
          {type: 'input.radio', name: 'lastnameChanged', data: {
            options: ['no', 'yes'],
          }},
          {type: 'input.radio', name: 'gender', data: {
            options: ['man', 'woman'],
          }},
          {type: 'input.date', name: 'birthDate', data: {}},
          {type: 'input.select', name: 'family', data: {
            options: ['single', 'married', 'divorced', 'widower'],
          }},
          {type: 'input.select', name: 'education', data: {
            options: ['stupid-as-stick'],
          }},
          {type: 'input.radio', name: 'citizenship', data: {
            options: ['ru', 'other'],
          }},
        ]},

        // Passport
        {type: 'subgroup', name: 'passportData', data: [
          {type: 'input.number', name: 'docSeries', data: {}},
          {type: 'input.number', name: 'docNo', data: {}},
          {type: 'input.date', name: 'issueDate', data: {}},
          {type: 'input.text', name: 'issueUnit', data: {}},
          {type: 'input.text', name: 'issuedBy', data: {}},
          {type: 'input.text', name: 'birthPlace', data: {}},
          {type: 'input.select', name: 'birthCountry', data: {
            options: ['ru', 'other'],
          }},
          {type: 'input.text', name: 'registrationPlace', data: {}},
          {type: 'input.radio', name: 'registrationPlaceEqualsLivingPlace', data: {
            options: ['yes', 'no'],
          }},
          {type: 'input.radio', name: 'havePreviousPassport', data: {
            options: ['yes', 'no'],
          }},
          {type: 'input.text', name: 'prevDocSeries', data: {}},
          {type: 'input.text', name: 'prevDocNo', data: {}},
          {type: 'input.date', name: 'prevDocIssueDate', data: {}},
          {type: 'input.number', name: 'snils', data: {}},
          {type: 'input.file', name: 'uploadPassportScan', data: {}},
          {type: 'input.checkbox', name: 'personalDataProcessing', data: {}},
          {type: 'input.checkbox', name: 'creditHistoryReceiving', data: {}},
          {type: 'input.checkbox', name: 'pfsInfoReceiving', data: {}},
          {type: 'input.checkbox', name: 'notRelatedToPdl', data: {}},
          {type: 'input.checkbox', name: 'notBankrupt', data: {}},
        ]},

        // status
        // {type: 'input.radio', name: 'personLegalStatus', data: {
        //   options: ['individual', 'individual-entrepreneur', 'self-employed'],
        // }},
        //
        // // Bank account data
        // {type: 'subgroup', name: 'bankAccountData', data: [
        //   {type: 'input.number', name: 'bik', data: {}},
        //   {type: 'input.number', name: 'bankAccountNum', data: {}},
        //   {type: 'input.text', name: 'bankName', data: {}},
        //   {type: 'input.number', name: 'inn', data: {}},
        //   {type: 'input.number', name: 'kpp', data: {}},
        //   {type: 'input.number', name: 'correspondentAccount', data: {}},
        // ]},
        //
        // // Agent agreement offer
        // {type: 'subgroup', name: 'agentAgreementOffer', data: [
        //   // todo: ?
        //   {type: 'input.document', name: 'offerDocument', data: {}},
        //   // todo: ?
        //   {type: 'input.checkbox', name: 'offerConfirmationCheckbox', data: {}},
        // ]},
      ]},

      // incomes data
      {type: 'group', name: 'incomes', data: [
        {type: 'input.radio', name: 'haveOfficialJob', data: {
          options: ['yes', 'no'],
        }},
        {type: 'input.number', name: 'rentIncome', data: {}},
        {type: 'input.number', name: 'pension', data: {}},
        {type: 'input.radio', name: 'haveActiveLoan', data: {
          options: ['yes', 'no'],
        }},
        {type: 'input.radio', name: 'planToRepayLoanInThreeMonth', data: {
          options: ['yes', 'no'],
        }},

        {type: 'subgroup', name: 'existingLoanQuestions', data: [
          {type: 'input.checkbox', name: 'usingLoanMoneyForFirstLoanPayment', data: {}},
          {type: 'input.checkbox', name: 'jobPlaceChange', data: {}},
          {type: 'input.checkbox', name: 'maternityLeave', data: {}},
          {type: 'input.checkbox', name: 'relatedToRosbank', data: {}},
          {type: 'input.checkbox', name: 'publicOfficial', data: {}},
          {type: 'input.checkbox', name: 'relatedToPublicOfficial', data: {}},
          {type: 'input.checkbox', name: 'havePermsToLiveInAnotherCountry', data: {}},
          {type: 'input.checkbox', name: 'havePermsToSettleInAnotherCountry', data: {}},
          {type: 'input.checkbox', name: 'isUsaTaxPayer', data: {}},
          {type: 'input.checkbox', name: 'isForeignCountryTaxPayer', data: {}},
          {type: 'input.number', name: 'inn', data: {}},
          {type: 'input.select', name: 'taxResidence', data: {
            options: ['ru', 'other'],

          }},
        ]},

      ]},
    ],

    // [{foo: 'bar'}, {foo: 'bar'}]
  };

  const renderInput = (subtype, input, path = '') => {
    const {data, name} = input;
    console.log(`input[${subtype}]:`, name, data, 'p:', path);
    if (subtype === 'text') {
      return (
        <Input label={t(`forms:${path}.${name}`)} variant="standard"/>
      );
    }

    if (subtype === 'number') {
      return (
        <Input label={t(`forms:${path}.${name}`)} variant="standard" type="number"/>
      );
    }

    if (subtype === 'radio') {
      return (
        <ProfileFormRadio
          label={t(`forms:${path}.${name}.title`)}
          options={data.options}
          path={`${path}.${name}`}
        />
      );
    }

    if (subtype === 'select') {
      return (
        <ProfileFormSelect
          label={t(`forms:${path}.${name}.title`)}
          options={data.options}
          path={`${path}.${name}`}
        />
      );
    }

    if (subtype === 'date') {
      return (
        <ProfileFormDatePicker label={t(`forms:${path}.${name}`)}/>
      );
    }

    if (subtype === 'checkbox') {
      return (
        <ProfileFormInput label={t(`forms:${path}.${name}`)}/>
      );
    }

    return (
      <code style={{
        width: '100%',
        minHeight: '50px',
        padding: '5px',
        marginTop: '22px',
        backgroundColor: '#f777',
        display: 'block',
      }}>
        Unsupported type &quot;input.{subtype}&quot; for &quot;{`${path} > ${name}`}&quot;.
      </code>
    );
  };


  const renderGroup = (group, path = '') => {
    const {name, data} = group;
    return (<>
      <Typography sx={{width: 1}} variant="h3b">{t(`forms:${path}.${name}.title`)}</Typography>
      {renderFormNode(data, `${path}.${name}`)}
    </>);
  };

  const renderSubgroup = (group, path = '') => {
    const {name, data} = group;
    return (
      <Box sx={{marginTop: '48px', width: 1}}>
        <Typography sx={{width: 1}} variant="h3b">{t(`forms:${path}.${name}.title`)}</Typography>
        {renderFormNode(data, `${path}.${name}`)}
      </Box>
    );
  };


  const renderFormNode = (node, path = '') => {
    // console.log('node:', node);

    if (Array.isArray(node)) return node.map((n) => renderFormNode(n, path));
    if (typeof node !== 'object') return (<code>Unsupported type {subtype}</code>);

    const {type: nodeType, name} = node;
    const [type, subtype] = nodeType.split('.');

    console.log(`node>${type}>${subtype}:`, name, `${path}.${name}`);

    if (type === 'input') return renderInput(subtype, node, path);
    if (type === 'group') return renderGroup(node, path);
    if (type === 'subgroup') return renderSubgroup(node, path);
  };

  const renderForm = (form, select = null) => {
    return renderFormNode(select !== null ? form.data[select].data : form.data, 'ProfileForm.profile');
  };

  return (<>
    <BackButton
      subtitle={'Оформление заявки'}
      title={'Личные данные'}
      onClick={() => navigate(-1)}
    />
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      padding: '0 20px',
    }}>
      {/* Render start */}
      {renderForm(mock, 0)}
      <br/>
      {/* Render end */}
      <Box sx={{marginTop: '22px', width: {xs: 1, sm: 500}, textAlign: 'center'}}>
        <Btn
          disabled={false}
          variant='contained'
          onClick={() => onNext()}
        >
          {t('template.profileForm.btnNext')}
        </Btn>
      </Box>
    </Box>
  </>
  );
};

ProfileForm.propTypes = {
  onNext: PropTypes.func,
};

export default ProfileForm;
