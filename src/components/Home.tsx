import React, { useState } from 'react';
import Filter, { QueryParams } from './filter/Filter';
import ProjectList from './ProjectList';
import useProjects from '../hooks/useProjects';
import Loading from './Loading';
import errorHandler from '../utils/errorHandler';
import { usePrefetchUsers } from '../hooks/useUsers';
import Nav from './Nav';
import { useStyles } from '../static/styles';
import Footer from './Footer';
import { Collapse } from '@material-ui/core';
import { useEffect } from 'react';

const Home = (): JSX.Element => {
    const [params, setParams] = useState<QueryParams>({});
    const [allProjects, setAllProjects] = useState<boolean>(true);
    const { data: projects, isSuccess, error } = useProjects(params);
    usePrefetchUsers();
    const classes = useStyles();

    if (error) {
        errorHandler(error);
    }

    return (
        <div className={classes.root}>
            <Nav setParams={setParams} allProjects={allProjects} setAllProjects={setAllProjects} />
            <Collapse in={allProjects}>
                <Filter setParams={setParams} />
            </Collapse>
            {isSuccess && projects ? <ProjectList projects={projects} /> : <Loading />}
            <Footer />
        </div>
    );
};

export default Home;
