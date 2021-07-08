<<<<<<< Updated upstream
import React, { useState } from 'react';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import MyProjects from './components/MyProjects';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { IProject } from './types';
=======
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import RCPrjkts from './RCPrjkts';
>>>>>>> Stashed changes

const queryClient = new QueryClient();

const App = (): JSX.Element => {
<<<<<<< Updated upstream
    const [projects, setProjects] = useState<IProject[]>([]);

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
=======
    return (
        <QueryClientProvider client={queryClient}>
            <RCPrjkts />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
>>>>>>> Stashed changes
    );
};

export default App;
