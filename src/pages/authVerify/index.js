import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';

import {authLoginBySmsCode} from '../../api/services/auth.js';
import SnackBar from '../../components/molecules/Snackbar/Snackbar.js';
import AuthVerify from '../../components/templates/authVerify';

const AuthVerifyPage = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();
  const [phone] = useState(localStorage.getItem('phone'));
  const [errorBody, setErrorBody] = useState('');
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onAuthVerify = (code) => {
    setLoading(true);
    authLoginBySmsCode(phone, code)
        .then((res) => {
          if (res.ok) {
            navigate('/profile');
          } else {
            setErrorBody(t('errors:logic.wrongSmsCode'));
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

  return (
    <>
      <AuthVerify
        loading={loading}
        onAuthVerify={onAuthVerify}
      />
      <SnackBar
        isOpen={hasError}
        setIsOpen={setHasError}
        body={errorBody}
      />
    </>);
};

export default AuthVerifyPage;
