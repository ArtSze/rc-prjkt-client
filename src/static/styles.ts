import { makeStyles } from '@material-ui/core';
import { theme } from './theme';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '100px',
    },
    appBar: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingLeft: '4rem',
        paddingRight: '4rem',
        background: 'rgb(238, 247, 241)',
    },
    appBarLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifySelf: 'left',
        alignSelf: 'center',
        marginLeft: '50px',
    },
    appBarRight: {
        display: 'flex',
        flexDirection: 'row',
        justifySelf: 'right',
        alignSelf: 'center',
    },
    project: {
        marginBottom: '10px',
        padding: '5px',
        background: 'gainsboro',
    },
    filterBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '20px',
    },
    bigFilter: {
        flex: 3,
    },
    smallFilter: {
        marginLeft: '10px',
        flex: 1,
    },
    tallIndicator: {
        height: '5px',
    },
}));
