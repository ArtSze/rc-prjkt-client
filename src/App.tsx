import React, { useState } from 'react';
import Nav from './components/nav/Nav';
import ProjectList from './components/ProjectList';
import MyProjects from './components/MyProjects';
import useProjects from './hooks/useProjects';
import Loading from './components/Loading';
import { QueryParams } from './components/nav/Nav';

const App = (): JSX.Element => {
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

export default App;
