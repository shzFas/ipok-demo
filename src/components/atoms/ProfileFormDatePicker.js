/* eslint-disable react/prop-types */
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import * as React from 'react';

const ProfileFormDatePicker = (props) => {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField sx={{marginTop: '22px', width: 1}} variant="standard" {...params} />}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default ProfileFormDatePicker;
