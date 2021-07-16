import { createTheme } from '@material-ui/core/styles';

const rcColors = {
    pink: '#BD5179',
    green: '#23A050',
    orange: '#D23E56',
    blue: '#3C89C3',
    purple: '#815FA5',
};
export const theme = createTheme({
    palette: {
        primary: {
            main: rcColors.green,
        },
        secondary: {
            main: rcColors.pink,
        },
    },
});
