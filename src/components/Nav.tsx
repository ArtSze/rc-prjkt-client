import React from 'react';
import { QueryParams } from './filter/Filter';
import { Button, Tab, Tabs, AppBar, Typography, Tooltip, IconButton, Hidden } from '@material-ui/core';
import { useStyles } from '../static/styles';
import logo from '../static/images/rc-logo.png';
import { useStore, AppState, SortMethods } from './Home';
import { FaHome, FaPlus, FaUser } from 'react-icons/fa';
import { theme } from '../static/theme';

interface NavProps {
    allProjects: boolean;
    setParams: React.Dispatch<React.SetStateAction<QueryParams>>;
    setAllProjects: React.Dispatch<React.SetStateAction<boolean>>;
}
const Nav = ({ allProjects, setAllProjects, setParams }: NavProps): JSX.Element => {
    const setOwnerFilter = useStore((state: AppState) => state.setOwnerFilter);
    const setTagFilter = useStore((state: AppState) => state.setTagFilter);
    const setAddForm = useStore((state) => state.setAddForm);

    const classes = useStyles();

    const renderTabs = (
        <div className={`${classes.appBarRight} ${classes.navDesktop}`}>
            <Button
                style={{ margin: '5px 25px 5px 5px' }}
                variant="contained"
                color="primary"
                onClick={() => setAddForm()}
            >
                Add Project
            </Button>
            <Tabs
                className={classes.navDesktop}
                value={allProjects ? 0 : 1}
                classes={{ indicator: classes.tallIndicator }}
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab
                    label="All Projects"
                    onClick={() => {
                        setAllProjects(true);
                        setParams({ status: true, sort: SortMethods['Last Updated'] });
                        setOwnerFilter(undefined);
                        setTagFilter(undefined);
                    }}
                />
                <Tab
                    label="My Projects"
                    onClick={() => {
                        setAllProjects(false);
                        setParams({ me: true, sort: SortMethods['Last Updated'] });
                        setOwnerFilter(undefined);
                        setTagFilter(undefined);
                    }}
                />
                ;
            </Tabs>
        </div>
    );

    const renderMobileTabs = (
        <div className={`${classes.appBarRight} ${classes.navMobile}`}>
            <Tooltip title="Add Project">
                <Button
                    style={{ margin: '5px 25px 5px 5px' }}
                    variant="contained"
                    color="primary"
                    onClick={() => setAddForm()}
                >
                    <FaPlus />
                </Button>
            </Tooltip>
            <Tabs
                className={classes.navMobile}
                value={allProjects ? 0 : 1}
                classes={{ indicator: classes.tallIndicator }}
                textColor="primary"
                indicatorColor="primary"
            >
                <Tooltip title="All Projects">
                    <Tab
                        icon={<FaHome />}
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
                        icon={<FaUser />}
                        onClick={() => {
                            setAllProjects(false);
                            setParams({ me: true, sort: SortMethods['Last Updated'] });
                            setOwnerFilter(undefined);
                            setTagFilter(undefined);
                        }}
                    />
                </Tooltip>
                ;
            </Tabs>
        </div>
    );

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
            {renderMobileTabs}
            {renderTabs}
        </AppBar>
    );
};

export default Nav;
