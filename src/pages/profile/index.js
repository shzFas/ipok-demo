import React from 'react';
import {useNavigate} from 'react-router-dom';

import Profile from '../../components/templates/profile';
import {genEsiaUrl} from '../../utils/esiaURL';

const ProfilePage = () => {
  const navigate = useNavigate();
  return (<Profile
    onAutoFillClick={() => {
      window.location.href = genEsiaUrl();
    }}
    onManualFillClick={() => navigate('/profile/form')}
  />);
};

export default ProfilePage;
