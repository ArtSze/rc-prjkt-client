import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import axios from 'axios';
import { QueryParams } from './components/Nav';

// TODO: update types
type TProject = any;
type TProjects = Array<TProject>;

const App = (): JSX.Element => {
    const [projects, setProjects] = useState([] as TProjects);
    const [params, setParams] = useState({} as QueryParams);

    useEffect(() => {
        fetchProjects();
    }, [params, setProjects]);

    async function fetchProjects() {
        console.table({ params });
        try {
            const response: TProjects = (await axios.get('/projects', { params })).data;
            console.log(response);
            setProjects(response);
        } catch (e) {
            // TODO: handle error
            console.log(e);
        }
    }
    return (
        <div>
            <h1>RC-Prjkt</h1>
            <Nav setParams={setParams} />
            <ProjectList projects={projects} />
        </div>
    );
};

export default App;
