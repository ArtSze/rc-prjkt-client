import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    root: {
        marginTop: '100px',
    },
    appBar: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingLeft: '4rem',
        paddingRight: '4rem',
    },
    navButtons: {
        justifySelf: 'right',
    },

    button: {
        margin: '5px',
    },
    project: {
        marginBottom: '10px',
        padding: '5px',
        background: 'gainsboro',
    },
});
