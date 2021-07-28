import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '70px 0',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
        padding: '10px',
        background: 'rgb(238, 247, 241)',
        bottom: 0,
        width: '100%',
        position: 'fixed',
    },
    appBar: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.light,
    },
    appBarLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifySelf: 'left',
        alignSelf: 'center',
        marginLeft: theme.spacing(4),
    },
    appBarRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'right',
        alignContent: 'center',
    },
    tallIndicator: {
        height: '5px',
    },
    button: {
        margin: '.75rem',
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
    staticProject: {
        background: theme.palette.primary.light,
        marginBottom: theme.spacing(2),
        padding: theme.spacing(0.5),
        paddingTop: theme.spacing(2),
    },
    staticProjectInfo: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flexBasis: '100%',
        padding: theme.spacing(0.5),
        gap: theme.spacing(0.5),
    },
    projectPhoto: {
        width: '20%',
        height: 'auto',
        borderRadius: '.15rem',
        boxShadow: '.05rem .05rem .2rem gray',
        margin: theme.spacing(1),
    },
    staticProjectRowSplit: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    staticProjectTitleStatus: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: theme.spacing(0.5),
        },
    },
    ownerIcons: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
    },
    staticProjectOwnerName: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(0.5),
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: theme.spacing(0.5),
    },
    marginBottom: {
        marginBottom: theme.spacing(0.5),
    },
    tagChip: {
        '& > svg': {
            paddingLeft: theme.spacing(0.5),
        },
    },
    auth: {
        border: 'solid',
        borderWidth: '5px',
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '25px',
    },
    noProjects: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '4rem',
    },
}));
