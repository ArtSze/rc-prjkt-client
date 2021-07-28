import { createTheme } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: green[300],
        },
        secondary: {
            main: purple[300],
        },
    },
});
