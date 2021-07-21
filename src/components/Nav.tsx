import React from 'react';
import { QueryParams } from './filter/Filter';
import { Button, Tab, Tabs, AppBar, Typography } from '@material-ui/core';
import { useStyles } from '../static/styles';
import logo from '../static/images/rc-logo.png';
import { useStore } from './Home';

interface NavProps {
    allProjects: boolean;
    setParams: React.Dispatch<React.SetStateAction<QueryParams>>;
    setAllProjects: React.Dispatch<React.SetStateAction<boolean>>;
}
const Nav = ({ allProjects, setAllProjects, setParams }: NavProps): JSX.Element => {
    const setAddForm = useStore((state) => state.setAddForm);

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="fixed">
            <div className={classes.appBarLeft}>
                <img alt="logo" style={{ width: '30px', height: '30px', marginRight: '20px' }} src={logo}></img>
                <Typography variant="h6" color="primary">
                    RC-Prjkt
                </Typography>
            </div>
            <div className={classes.appBarRight}>
                <Button
                    style={{ margin: '5px 25px 5px 5px' }}
                    variant="contained"
                    color="primary"
                    onClick={() => setAddForm()}
                >
                    Add Project
                </Button>
                <Tabs
                    value={allProjects ? 0 : 1}
                    classes={{ indicator: classes.tallIndicator }}
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab
                        label="All Projects"
                        onClick={() => {
                            setAllProjects(true);
                            setParams({ status: true });
                        }}
                    />
                    <Tab
                        label="My Projects"
                        onClick={() => {
                            setAllProjects(false);
                            setParams({ me: true });
                        }}
                    />
                    ;
                </Tabs>
            </div>
        </AppBar>
    );
};

export default Nav;
