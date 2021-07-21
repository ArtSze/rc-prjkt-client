import { createTheme } from '@material-ui/core/styles';

export const rcColors = {
    pink: '#BD5179',
    green: '#23A050',
    orange: '#D23E56',
    blue: '#3C89C3',
    purple: '#815FA5',
    red: 'rgb(217, 90, 136)',
    dark: '#626a6a;',
    lightGreen: 'rgb(238, 247, 241)',
};

export const theme = createTheme({
    palette: {
        primary: {
            main: rcColors.green,
        },
        secondary: {
            main: rcColors.lightGreen,
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
            main: rcColors.purple,
        },
    },
});
