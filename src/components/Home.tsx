import React, { useState } from 'react';
import Nav, { QueryParams } from './nav/Nav';
import ProjectList from './ProjectList';
import MyProjects from './MyProjects';
import useProjects from '../hooks/useProjects';
import Loading from './Loading';

const Home = (): JSX.Element => {
    const [params, setParams] = useState<QueryParams>({});
    const { data: projects, isSuccess } = useProjects(params);

    return (
        <div>
            <h1>RC-Prjkt</h1>
            <Nav setParams={setParams} />
            <MyProjects setParams={setParams} />
            {isSuccess && projects ? <ProjectList projects={projects} /> : <Loading />}
        </div>
    );
};

export default Home;
