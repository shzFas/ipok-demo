import React from 'react';
import {useNavigate} from 'react-router-dom';

import Auth from '../../components/templates/auth';

const AuthPage = () => {
  const navigate = useNavigate();
  return (<Auth
    onSignin={() => navigate('/auth/signin')}
    onRegister={navigate('/auth/register')}
  />);
};

export default AuthPage;
