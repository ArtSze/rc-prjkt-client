import React, { useState } from 'react';
import { QueryParams } from './filter/Filter';
import ProjectList from './ProjectList';
import useProjects from '../hooks/useProjects';
import Loading from './Loading';
import errorHandler from '../utils/errorHandler';
import { usePrefetchUsers } from '../hooks/useUsers';
import Nav from './Nav';
import { AppBar, Typography } from '@material-ui/core';
import logo from '../static/images/rc-logo.png';
import { useStyles } from '../static/styles';

const Home = (): JSX.Element => {
    const [params, setParams] = useState<QueryParams>({});
    const { data: projects, isSuccess, error } = useProjects(params);
    usePrefetchUsers();
    const classes = useStyles();

    if (error) {
        errorHandler(error);
    }

    return (
        <div>
            <AppBar className={classes.appBar} position="fixed">
                <Typography variant="h6">
                    <img alt="logo" style={{ width: '50px', height: '50px' }} src={logo}></img>RC-Prjkt
                </Typography>
                <Nav setParams={setParams} />
            </AppBar>
            {isSuccess && projects ? <ProjectList projects={projects} /> : <Loading />}
        </div>
    );
};

export default Home;
