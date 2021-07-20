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
    button: {
        margin: '.75rem',
    },
    staticProject: {
        marginBottom: '.75rem',
        paddingTop: '.75rem',
        paddingBottom: '.75rem',
        background: '#e3f0d3',
        display: 'flex',
        alignItems: 'center',
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
    iconLink: {
        marginLeft: '.3rem',
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
