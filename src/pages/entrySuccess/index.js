import React from 'react';
import {useNavigate} from 'react-router-dom';

import EntrySuccess from '../../components/templates/entrySuccess';

const EntrySuccessPage = () => {
  const navigate = useNavigate();
  return (<EntrySuccess
    onNextClick={() => navigate('/bank/list')}
  />);
};

export default EntrySuccessPage;
