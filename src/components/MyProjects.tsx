import React from 'react';
import { TProjects } from '../App';
import axios from 'axios';

interface MyProjectsProps {
    setProjects: React.Dispatch<React.SetStateAction<TProjects>>;
}

const MyProjects = ({ setProjects }: MyProjectsProps): JSX.Element => {
    async function fetchProjects() {
        try {
            const response: TProjects = (await axios.get('/projects/me')).data;
            console.log(response);
            setProjects(response);
        } catch (e) {
            // TODO: handle error
            console.log(e);
        }
    }

    return (
        <div>
            <button onClick={fetchProjects}>My Projects</button>
        </div>
    );
};

export default MyProjects;
