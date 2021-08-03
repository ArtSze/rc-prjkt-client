import React, { useState } from 'react';
import Filter, { QueryParams } from './filter/Filter';

import ProjectList from './ProjectList';
import useProjects from '../hooks/useProjects';
import Loading from './Loading';
import Auth from './Auth';
import Nav from './Nav';
import { SortMethods } from '../types';
import { useStore, AppState } from '../utils/store';

import { useStyles } from '../static/styles';
import { Collapse, Snackbar } from '@material-ui/core';

import { Alert } from '@material-ui/lab';

const Home = (): JSX.Element => {
    const [params, setParams] = useState<QueryParams>({ sort: SortMethods['Last Updated'] });
    const [allProjects, setAllProjects] = useState<boolean>(true);
    const errorOpen = useStore((state: AppState) => state.errorOpen);
    const setErrorOpen = useStore((state: AppState) => state.setErrorOpen);

    const { data: projects, isSuccess, error } = useProjects(params);
    const classes = useStyles();

    if (error) {
        const status = error.response?.status;

        switch (status) {
            case 401:
                return <Auth />;
            default:
                setErrorOpen(true);
                break;
        }
    }

    return (
        <div className={classes.root}>
            <Nav setParams={setParams} allProjects={allProjects} setAllProjects={setAllProjects} />
            <Collapse in={allProjects}>
                <Filter setParams={setParams} />
            </Collapse>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={errorOpen}>
                <Alert severity="error" onClose={() => setErrorOpen(false)}>
                    An unexpected error has occurred
                </Alert>
            </Snackbar>
            {isSuccess && projects ? <ProjectList projects={projects} /> : <Loading />}
        </div>
    );
};

export default Home;
