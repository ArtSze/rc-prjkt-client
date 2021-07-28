import React from 'react';
import { QueryParams } from './filter/Filter';
import { Button, Tab, Tabs, AppBar, Typography, Tooltip, Hidden } from '@material-ui/core';
import { useStyles } from '../static/styles';
import logo from '../static/images/green_rc_comp.jpg';
import { useStore, AppState, SortMethods } from './Home';
import { FaHome, FaPlus, FaUser } from 'react-icons/fa';
import { theme } from '../static/theme';
import { useMediaQuery } from '@material-ui/core';
import AddFormModal from './form/AddFormModal';

interface NavProps {
    allProjects: boolean;
    setParams: React.Dispatch<React.SetStateAction<QueryParams>>;
    setAllProjects: React.Dispatch<React.SetStateAction<boolean>>;
}
const Nav = ({ allProjects, setAllProjects, setParams }: NavProps): JSX.Element => {
    const setOwnerFilter = useStore((state: AppState) => state.setOwnerFilter);
    const setTagFilter = useStore((state: AppState) => state.setTagFilter);

    const isSmallScreen = useMediaQuery('(max-width: 650px)');
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="fixed">
            <div className={classes.appBarLeft}>
                <img alt="logo" style={{ width: '30px', height: '30px' }} src={logo}></img>
                <Hidden xsDown>
                    <Typography style={{ marginLeft: theme.spacing(2) }} variant="h6" color="primary">
                        RC-Prjkt
                    </Typography>
                </Hidden>
            </div>
            <div className={classes.appBarRight}>
                <AddFormModal />
                <Tabs
                    value={allProjects ? 0 : 1}
                    classes={{ indicator: classes.tallIndicator }}
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tooltip title="All Projects">
                        <Tab
                            label={!isSmallScreen && 'All Projects'}
                            icon={isSmallScreen ? <FaHome /> : ''}
                            onClick={() => {
                                setAllProjects(true);
                                setParams({ status: true, sort: SortMethods['Last Updated'] });
                                setOwnerFilter(undefined);
                                setTagFilter(undefined);
                            }}
                        />
                    </Tooltip>
                    <Tooltip title="My Projects">
                        <Tab
                            label={!isSmallScreen && 'My Projects'}
                            icon={isSmallScreen ? <FaUser /> : ''}
                            onClick={() => {
                                setAllProjects(false);
                                setParams({ me: true, sort: SortMethods['Last Updated'] });
                            }}
                        />
                    </Tooltip>
                    ;
                </Tabs>
            </div>
        </AppBar>
    );
};

export default Nav;
