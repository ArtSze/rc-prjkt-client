import React from 'react';
import { QueryParams } from './nav/Nav';

interface MyProjectsProps {
    setParams: React.Dispatch<React.SetStateAction<QueryParams>>;
}

const MyProjects = ({ setParams }: MyProjectsProps): JSX.Element => {
    return (
        <div>
            <button onClick={() => setParams({ me: true })}>My Projects</button>
        </div>
    );
};

export default MyProjects;
