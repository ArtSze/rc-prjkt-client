import React, { useEffect } from 'react';
import { IProject } from '../types';
import axios from 'axios';
import { useQuery } from 'react-query';
import { axiosInstance } from '../utils/axiosInstance';

interface MyProjectsProps {
    setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const MyProjects = ({ setProjects }: MyProjectsProps): JSX.Element => {
    // const { data, isSuccess } = useQuery('myProjects', fetchProjects);

    async function fetchProjects() {
        try {
            const { data } = await axiosInstance.get('/projects/me');
            console.log(data);
            setProjects(data);
            // return data;
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
