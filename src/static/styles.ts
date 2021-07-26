import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '70px 0 0 0',
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
        marginBottom: '.75rem',
        paddingTop: '.75rem',
        paddingBottom: '.75rem',
        background: 'rgb(238, 247, 241)',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0px',
    },
    staticProjectInfo: {
        display: 'flex',
        flexWrap: 'wrap',
        flexBasis: '100%',
    },
    staticProjectPhoto: {
        display: 'flex',
        marginLeft: '1rem',
    },
    staticProjectAboveDivider: {
        display: 'flex',
        flexWrap: 'wrap',
        flexBasis: '100%',
    },
    staticProjectBelowDivider: {
        marginTop: '.6rem',
    },
    staticProjectRow: {
        display: 'flex',
        flexWrap: 'wrap',
        flexBasis: '100%',
        flexDirection: 'row',
        marginLeft: '1rem',
        marginRight: '1rem',
        marginTop: '.3rem',
        marginBottom: '.3rem',
        alignItems: 'center',
    },
    staticProjectRowSplit: {
        display: 'flex',
        flexBasis: '100%',
        justifyContent: 'space-between',
    },
    staticProjectTitleStatus: {
        display: 'flex',
        alignItems: 'center',
    },
    staticProjectOwnerName: {
        display: 'flex',
        marginLeft: '1rem',
        marginRight: '.5rem',
        alignItems: 'center',
    },
    staticProjectValue: {
        display: 'flex',
        marginLeft: '1rem',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    staticProjectDescription: {
        marginBottom: '1.5rem',
    },
    chipContainer: {
        display: 'flex',
        flexBasis: '100%',
        justifyContent: 'space-between',
        marginTop: '1rem',
    },
    chipSub: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '3rem',
    },
    singleChip: {
        marginBottom: '.15rem',
        marginRight: '.2rem',
        paddingLeft: '.2rem',
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
