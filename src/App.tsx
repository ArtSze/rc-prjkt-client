import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import MyProjects from './components/MyProjects';
import { useState } from 'react';

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

const queryClient = new QueryClient();

const App = (): JSX.Element => {
    const [projects, setProjects] = useState([] as TProjects);

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <h1>RC-Prjkt</h1>
                <Nav setProjects={setProjects} />
                <MyProjects setProjects={setProjects} />
                <ProjectList projects={projects} />
            </div>
            <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    );
};

export default App;
