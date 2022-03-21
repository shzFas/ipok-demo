/* eslint-disable react/prop-types */
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import * as React from 'react';
import {useTranslation} from 'react-i18next';

const ProfileFormSelect = ({label, options, path}) => {
  const {t} = useTranslation();
  return (
    <FormControl variant="standard" sx={{width: 1, marginTop: '22px'}}>
      <InputLabel>{label}</InputLabel>
      <Select>
        {options.map((option, i) => (
          <MenuItem
            key={`${path}-${i}`}
            value={option}
          >{t(`forms:${path}.${option}`)}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProfileFormSelect;
