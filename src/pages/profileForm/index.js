import React from 'react';
import {useNavigate} from 'react-router-dom';

import ProfileForm from '../../components/templates/profileForm';

const ProfileFormPage = () => {
  const navigate = useNavigate();
  return (<ProfileForm
    onNext={() => navigate('/entry/success')}
  />);
};

export default ProfileFormPage;
