import { createMuiTheme } from '@material-ui/core/styles';

const CdbTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#91f5e3',
      main: '#5ec2b1',
      dark: '#259182',
      contrastText: '#fcfcfc',
    },
    secondary: {
      light: '#fe8a19',
      main: '#fe8a19',
      dark: '#c28900',
      contrastText: '#fcfcfc',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default CdbTheme;
