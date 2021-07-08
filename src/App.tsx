import React, { useState } from 'react';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import MyProjects from './components/MyProjects';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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
        <div>
            <QueryClientProvider client={queryClient}>
                <h1>RC-Prjkt</h1>
                <Nav setProjects={setProjects} />
                <MyProjects setProjects={setProjects} />
                <ProjectList projects={projects} />
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        </div>
    );
};

export default App;
