/* eslint-disable react/prop-types */
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';
import * as React from 'react';
import {useTranslation} from 'react-i18next';

const ProfileFormRadio = ({label, options, path}) => {
  const {t} = useTranslation();
  return (
    <FormControl sx={{marginTop: '22px', width: 1}}>
      <FormLabel sx={{typography: 'h4m', color: 'secondary.back'}}>{label}</FormLabel>
      <RadioGroup name={path} row >
        {options.map((option, i) => (
          <FormControlLabel
            key={`${path}-${i}`}
            value={option}
            control={<Radio />}
            label={t(`forms:${path}.${option}`)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default ProfileFormRadio;
