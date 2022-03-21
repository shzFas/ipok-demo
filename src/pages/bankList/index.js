import React from 'react';

import {userEntryListProposes} from '../../api/services/user';
import BankList from '../../components/templates/bankList';

const BankListPage = () => {
  const getEntryProposesList = async (uuidEntry) => {
    let entryProposesList;
    try {
      entryProposesList = await userEntryListProposes(uuidEntry);
      return entryProposesList.json();
    } catch (e) {
      // TODO:
      console.log(e);
    } finally {
      // TODO:
    }
  };


  return (<BankList
    getEntryProposesList={getEntryProposesList}
  />);
};

export default BankListPage;
