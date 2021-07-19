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
            {/* <AppBar className={classes.appBar} position="fixed">
                <Typography variant="h6">
                    <img alt="logo" style={{ width: '50px', height: '50px' }} src={logo}></img>RC-Prjkt
                </Typography>
                <Tabs className={classes.navButtons}>
                    <Tab label="All Projects" className={classes.button} onClick={() => setAllProjects(true)} />
                    <Tab label="My Projects" className={classes.button} onClick={() => setAllProjects(false)} />
                </Tabs>
            </AppBar> */}
            <Nav setParams={setParams} allProjects={allProjects} setAllProjects={setAllProjects} />
            {allProjects && <Filter setParams={setParams} />}
            {isSuccess && projects ? <ProjectList projects={projects} /> : <Loading />}
            <Footer />
        </div>
    );
};

export default Home;
