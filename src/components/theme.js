import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: 'Helvetica, Roboto, Arial',
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 600,
  },
  palette: {
    primary: { main: '#000', contrastText: '#fff' },
    secondary: { main: '#fff', contrastText: '#000' },
  },
})
