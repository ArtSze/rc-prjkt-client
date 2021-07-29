import { makeStyles } from '@material-ui/core';
import { inherits } from 'util';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
        margin: '80px 0',
        minHeight: '100vh',
    },
    footer: {
        padding: theme.spacing(1),
        background: theme.palette.primary.main,
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
    appBar: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.main,
    },
    appBarLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: theme.spacing(3),
        gap: theme.spacing(2),
    },
    appBarRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing(3),
        marginRight: theme.spacing(3),
    },
    tallIndicator: {
        backgroundColor: theme.palette.secondary.main,
        height: '5px',
    },
    filter: {
        padding: theme.spacing(1.5),
    },
    cardHeader: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: theme.spacing(1),
        },
    },
    projectFormContainer: {
        marginBottom: '.75rem',
        paddingTop: '.75rem',
        paddingBottom: '.75rem',
        background: 'rgb(238, 247, 241)',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0px',
    },
    projectForm: {
        // display: 'flex',
        // flexDirection: 'column',
    },
    projectFormEditFields: {
        display: 'flex',
        marginLeft: '1rem',
    },
    formRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexBasis: '100%',
    },
    formError: {
        background: 'rgb(255, 157, 157)',
        paddingLeft: '.5rem',
        paddingRight: '.5rem',
        borderRadius: '.3rem',
        marginLeft: '1.5rem',
    },
    ownerDeleteConfirmationButton: {
        color: theme.palette.error.main,
        borderColor: theme.palette.error.main,
    },
    ownerDeleteButton: {
        color: theme.palette.error.main,
        borderColor: theme.palette.error.main,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(2),
    },
    staticProject: {
        margin: theme.spacing(1),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(0.5),
        paddingTop: theme.spacing(1.5),
    },
    projectPhoto: {
        boxShadow: '.05rem .05rem .2rem gray',
        marginRight: theme.spacing(0.75),
    },
    marginBottom: {
        marginBottom: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.25),
        '& > svg': {
            paddingLeft: theme.spacing(0.5),
        },
    },
    bigGridGap: {
        gap: theme.spacing(1.5),
    },
    cursorPointer: {
        cursor: 'pointer',
    },
    staticProjectDetails: {
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 0,
        },
    },
    staticProjectDivider: {
        marginTop: theme.spacing(-3),
        marginBottom: theme.spacing(1.5),
    },
    auth: {
        width: 'unset',
        border: 'solid',
        borderWidth: theme.spacing(2),
        borderColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        margin: theme.spacing(2),
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3),
        gap: theme.spacing(4),
    },
    authButton: {
        margin: theme.spacing(0.75),
    },
    noProjects: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4rem',
    },
}));
