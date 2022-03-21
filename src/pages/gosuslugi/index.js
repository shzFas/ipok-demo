import React from 'react';

import Gosuslugi from '../../components/templates/gosuslugi';
import {genEsiaUrl} from '../../utils/esiaURL';

const GosuslugiPage = () => {
  return (<Gosuslugi redirectURL={genEsiaUrl()} />);
};

export default GosuslugiPage;
