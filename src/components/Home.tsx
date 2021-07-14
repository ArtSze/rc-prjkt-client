import React, { useState } from 'react';

import Nav from './Nav';
import ProjectList from './ProjectList';
import MyProjects from './MyProjects';
import { IProject } from '../types';

const Home = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    return (
        <div>
            <h1>RC-Prjkt</h1>
            <Nav setProjects={setProjects} />
            <MyProjects setProjects={setProjects} />
            <ProjectList projects={projects} />
        </div>
    );
};

export default Home;
