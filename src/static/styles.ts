import { makeStyles } from '@material-ui/core';
import { theme } from './theme';

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
        paddingLeft: '4rem',
        paddingRight: '4rem',
        backgroundColor: theme.palette.primary.light,
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
    filterBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '20px',
    },
    tagFilter: {
        flex: 5,
    },
    userFilter: {
        marginLeft: '10px',
        flex: 2,
    },
    smallFilter: {
        marginLeft: '10px',
        flex: 1,
    },
    tallIndicator: {
        height: '5px',
    },
    button: {
        margin: '.75rem',
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
}));
