import React, { useState } from 'react';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import MyProjects from './components/MyProjects';

export type TTag = {
    value: string;
};

export type TProject = {
    id: string;
    title: string;
    description: string;
    githubLink: string;
    owner: string;
    collaborators: string[];
    tags: TTag[];
    active: boolean;
};

export type TProjects = Array<TProject>;

const App = (): JSX.Element => {
    const [projects, setProjects] = useState([] as TProjects);

    return (
        <div>
            <h1>RC-Prjkt</h1>
            <Nav setProjects={setProjects} />
            <MyProjects setProjects={setProjects} />
            <ProjectList projects={projects} />
        </div>
    );
};

export default App;
