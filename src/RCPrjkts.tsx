import React from 'react';
import Nav from './components/Nav';
import ProjectList from './components/ProjectList';
import MyProjects from './components/MyProjects';
import { useQuery } from 'react-query';
import axios from 'axios';

export type TTag = {
    value: string;
};

export type TProject = {
    _id: string;
    title: string;
    description: string;
    githubLink: string;
    owner: string;
    collaborators: string[];
    tags: TTag[];
    active: boolean;
};

export async function fetchProjects(url: string, params = {}): Promise<TProject[]> {
    const response = await axios.get(url, params);
    return response.data;
}

const RCPrjkt = (): JSX.Element => {
    // const [projects, setProjects] = useState<TProject[]>([]);

    const { data, error, isLoading } = useQuery<TProject[], Error>(
        ['projects', 'active'],
        () => fetchProjects('/projects'),
        { keepPreviousData: true },
    );

    if (isLoading) return <h3>Loading...</h3>;
    if (error)
        return (
            <div>
                <h3>Error</h3>
                <p>{error.toString()}</p>
            </div>
        );
    return (
        <div>
            <h1>RC-Prjkt</h1>
            <Nav />
            <MyProjects />
            <ProjectList projects={data} />
        </div>
    );
};

export default RCPrjkt;
