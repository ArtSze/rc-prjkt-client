import React, { useState } from 'react';
import MyProjects from './MyProjects';
import { QueryParams } from './filter/Filter';
import { Toolbar, Button, Tab, Tabs, AppBar, Typography } from '@material-ui/core';
import { useStyles } from '../static/styles';
import logo from '../static/images/rc-logo.png';

interface NavProps {
    setParams: React.Dispatch<React.SetStateAction<QueryParams>>;
    setAllProjects: React.Dispatch<React.SetStateAction<boolean>>;
}
const Nav = ({ setAllProjects, setParams }: NavProps): JSX.Element => {
    const classes = useStyles();

    // TODO: fix tab indicator not showing
    return (
        <AppBar className={classes.appBar} position="fixed">
            <Typography variant="h6">
                <img alt="logo" style={{ width: '50px', height: '50px' }} src={logo}></img>RC-Prjkt
            </Typography>
            <Tabs>
                <Tab label="All Projects" onClick={() => setAllProjects(true)} />
                <MyProjects setParams={setParams} setAllProjects={setAllProjects} />
            </Tabs>
        </AppBar>
    );
};

export default Nav;
