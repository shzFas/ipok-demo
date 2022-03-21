import {Checkbox, FormControlLabel, FormGroup} from '@mui/material';
import * as React from 'react';

const ProfileFormInput = (props) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} sx={{marginTop: '22px', width: 1}} {...props} />
    </FormGroup>

  );
};

export default ProfileFormInput;
