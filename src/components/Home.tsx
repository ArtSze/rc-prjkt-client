import React, { useState } from 'react';
import Filter, { QueryParams } from './filter/Filter';
import ProjectList from './ProjectList';
import MyProjects from './MyProjects';
import useProjects from '../hooks/useProjects';
import Loading from './Loading';
import errorHandler from '../utils/errorHandler';
import { usePrefetchUsers } from '../hooks/useUsers';

const Home = (): JSX.Element => {
    const [params, setParams] = useState<QueryParams>({});
    const { data: projects, isSuccess, error } = useProjects(params);
    usePrefetchUsers();

    if (error) {
        errorHandler(error);
    }

    return (
        <div>
            <h1>RC-Prjkt</h1>
            <nav>
                <Filter setParams={setParams} />
                <MyProjects setParams={setParams} />
            </nav>
            {isSuccess && projects ? <ProjectList projects={projects} /> : <Loading />}
        </div>
    );
};

export default Home;
