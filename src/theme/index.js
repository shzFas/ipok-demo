import {createTheme} from '@mui/material/styles';

const h1 = {
  fontStyle: 'normal',
  fontSize: '32px',
  lineHeight: '130%',
};

const h2 = {
  fontStyle: 'normal',
  fontSize: '26px',
  lineHeight: '130%',
};

const h3 = {
  fontStyle: 'normal',
  fontSize: '22px',
  lineHeight: '130%',
};

const h4 = {
  fontStyle: 'normal',
  fontSize: '18px',
  lineHeight: '130%',
};

const h5 = {
  fontStyle: 'normal',
  fontSize: '16px',
  lineHeight: '130%',
};

export default createTheme({
  palette: {
    gray: '#787770',
    primary: {
      main: '#F8E11A',
      back: '#0C0B02',
    },
    secondary: {
      main: '#F4F3EB',
      back: '#0C0B02',
    },
  },
  typography: {
    // @see https://www.figma.com/file/hfR7FHrhwopqXTW0NjQ6Aw/iPOK---UI?node-id=6%3A442
    // *b - bold, *m - medium, without - regular
    fontSize: 16,
    fontFamily: ['Roboto'],
    h1, h2, h3, h4, h5,
    h6: {
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '140%',
    },
    h7: {
      fontStyle: 'normal',
      fontSize: '12px',
      lineHeight: '140%',
    },
    h8: {
      fontStyle: 'normal',
      fontSize: '10px',
      lineHeight: '140%',
    },
    h1m: {...h1, fontWeight: 550},
    h1b: {...h1, fontWeight: 'bold'},
    h2m: {...h2, fontWeight: 550},
    h2b: {...h2, fontWeight: 'bold'},
    h3m: {...h3, fontWeight: 550},
    h3b: {...h3, fontWeight: 'bold'},
    h4m: {...h4, fontWeight: 550},
    h4b: {...h4, fontWeight: 'bold'},
    body1: {...h4},
    body2: {...h5},
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ownerState: {size}}) => ({
          // TODO: ...(size==='small' && {minHeight: '56px'}),
          ...(size==='medium' && {
            ...h4,
            minHeight: '56px',
            borderRadius: '8px',
            textTransform: 'none',
            boxShadow: 'none',
          }),
          // TODO: ...(size==='large' && {minHeight: '56px'}),
        }),
      },
      variants: [
        {
          props: {variant: 'outlined'},
          style: ({theme}) => ({
            border: 'none',
            color: `${theme.palette.secondary.back}`,
            background: `${theme.palette.secondary.main}`,
          }),
        },
      ],
    },
    MuiLoadingButton: {
      styleOverrides: {
        // TODO: Hack, fix with indicator color
        root: ({ownerState: {loading}, theme}) => ({
          ...(loading && {
            background: `${theme.palette.primary.main} !important`,
          }),
        }),
      },
    },
  },

});
