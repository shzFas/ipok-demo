import LoadingButton from '@mui/lab/LoadingButton';
import * as React from 'react';


const Btn = (props) => {
  return (<LoadingButton
    sx={{
      width: 1,
      boxShadow: 'none',
      marginBottom: '16px',
    }}
    {...props}
  />);
};

export default Btn;
