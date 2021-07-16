import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {
        marginTop: '100px',
    },
    appBar: {
        background: 'gray',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingLeft: '4rem',
        paddingRight: '4rem',
    },
    navButtons: {},

    project: {
        marginBottom: '10px',
        padding: '5px',
        background: 'gainsboro',
    },
    filter: {
        padding: '5px',
        background: 'gainsboro',
        marginBottom: '20px',
    },
    filters: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
