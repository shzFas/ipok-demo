import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';

import {authRequestSms} from '../../api/services/auth';
import SnackBar from '../../components/molecules/Snackbar/Snackbar.js';
import SignIn from '../../components/templates/signin';

const SignInPage = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const [errorBody, setErrorBody] = useState('');
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSignin = (phone) => {
    setLoading(true);
    authRequestSms(phone)
        .then((res) => {
          if (res.ok) {
            localStorage.setItem('phone', phone);
            navigate('/auth/verify');
          } else {
            setErrorBody(t('errors:logic.wrongPhoneNumber'));
            setHasError(true);
          }
        })
        // TODO: Make one cacher
        .catch((err) => {
          // TODO: Make error toast
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
  };

  return (<><SignIn
    loading={loading}
    onSignin={onSignin}
  />
  <SnackBar
    isOpen={hasError}
    setIsOpen={setHasError}
    body={errorBody}
  />
  </>
  );
};

export default SignInPage;

