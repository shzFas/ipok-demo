export const genEsiaUrl = () => {
  const {
    REACT_APP_ESIA_HOST: host,
    REACT_APP_ESIA_PATH: path,
    REACT_APP_ESIA_OPTS_CLIENT_ID: optsClientId,
    REACT_APP_ESIA_OPTS_SCOPE: scope,
    REACT_APP_ESIA_OPTS_PURPOSES: purpose,
    REACT_APP_ESIA_OPTS_RESPONSE_TYPE: optsResponseType,
    REACT_APP_ESIA_OPTS_REDIRECTED_URI: optsRedirectedUri,
    REACT_APP_ESIA_OPTS_FORCE_CDP: optsForceCdp,
    REACT_APP_ESIA_OPTS_SYSNAME: sysname,
    REACT_APP_ESIA_OPTS_ACTIONS: actions,
  } = process.env;

  const OPTS = {
    'client_id': optsClientId,
    'response_type': optsResponseType,
    'scope': scope,
    'redirect_uri': optsRedirectedUri,
    'force_cdp': optsForceCdp,
    'purposes': purpose,
    'sysname': sysname,
    'actions': actions,
  };

  const params = new URLSearchParams(OPTS);
  return `${host}${path}?${params.toString()}`;
};

