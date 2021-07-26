import { createTheme } from '@material-ui/core/styles';

export const rcColors = {
    pink: '#BD5179',
    green: '#23A050',
    backgroundGreen: '#eef7f1',
    borderGreen: '#3dc06c',
    orange: '#D23E56',
    blue: '#3C89C3',
    backgroundBlue: '#d9efff',
    borderBlue: '@4d9bd8',
    purple: '#815FA5',
    red: 'rgb(217, 90, 136)',
    backgroundRed: '#fedce9',
    borderRed: '#d95a88',
};

export const theme = createTheme({
    palette: {
        primary: {
            light: rcColors.backgroundGreen,
            main: rcColors.green,
        },
        secondary: {
            main: rcColors.purple,
        },
        info: {
            main: rcColors.blue,
        },
        warning: {
            main: rcColors.orange,
        },
        error: {
            main: rcColors.red,
        },
        success: {
            main: rcColors.pink,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 650,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});
