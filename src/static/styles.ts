import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
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
    button: {
        marginRight: '.75rem',
    },
    projectFormContainer: {
        background: theme.palette.primary.light,
        marginBottom: theme.spacing(2),
        padding: theme.spacing(0.5),
        paddingTop: theme.spacing(2),
    },
    projectForm: {},
    projectFormEditFields: {
        display: 'flex',
        paddingLeft: '12px',
    },
    // formRow: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     flexBasis: '100%',
    // },
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
    },
    staticProjectDivider: {
        marginTop: theme.spacing(-3),
        marginBottom: theme.spacing(1.5),
    },
    auth: {
        border: 'solid',
        borderWidth: theme.spacing(2),
        borderColor: theme.palette.primary.dark,
        backgroundColor: theme.palette.primary.light,
        marginTop: theme.spacing(16),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3),
        gap: theme.spacing(4),
    },
    noProjects: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4rem',
    },
}));
