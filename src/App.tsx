import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import MyProjects from './components/MyProjects';

import { IProject } from './types';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
    const [projects, setProjects] = useState<IProject[]>([]);

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <h1>RC-Prjkt</h1>
                <Nav setProjects={setProjects} />
                <MyProjects setProjects={setProjects} />
                <ProjectList projects={projects} />
                {/* <ReactQueryDevtools initialIsOpen /> */}
            </QueryClientProvider>
        </div>
    );
};

export default App;
