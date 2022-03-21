import {ThemeProvider} from '@mui/material/styles';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import AuthPage from './pages/auth';
import AuthVerifyPage from './pages/authVerify';
import BankListPage from './pages/bankList';
import EntrySuccessPage from './pages/entrySuccess';
import GosuslugiPage from './pages/gosuslugi';
import ProfilePage from './pages/profile';
import ProfileFormPage from './pages/profileForm';
import SignInPage from './pages/signin';
import './styles.css';
import theme from './theme';
import {configureI18n} from './utils/i18n';
import '@fontsource/roboto';

// TODO: Create lng mechanism with user settings
const DEFAULT_LANGUAGE = 'ru';
const i18n = configureI18n(DEFAULT_LANGUAGE);


export const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route path="/auth/signin" element={<SignInPage />} />
            <Route path="/auth/register" element={<SignInPage />} />
            <Route path="/auth/verify" element={<AuthVerifyPage />} />
            <Route path="/auth/gos" element={<GosuslugiPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/form" element={<ProfileFormPage />} />
            <Route path="/bank/list" element={<BankListPage />} />
            <Route path="/entry/success" element={<EntrySuccessPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  );
};
