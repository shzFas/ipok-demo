import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';
import * as React from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = ({isOpen, setIsOpen, body, duration = 2000}) => {
  const handleClose = (event, reason ) => {
    if (reason === 'clickaway') return;
    setIsOpen(false);
  };

  return (
    <Snackbar open={isOpen} autoHideDuration={duration} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{width: 1}}>
        {body}
      </Alert>
    </Snackbar>
  );
};

SnackBar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
  body: PropTypes.string,
  duration: PropTypes.number,
};
export default SnackBar;
