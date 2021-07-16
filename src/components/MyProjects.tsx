import { Tab } from '@material-ui/core';
import React from 'react';
import { QueryParams } from './filter/Filter';

interface MyProjectsProps {
    setParams: React.Dispatch<React.SetStateAction<QueryParams>>;
    setAllProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyProjects = ({ setParams, setAllProjects }: MyProjectsProps): JSX.Element => {
    function handleClick() {
        setAllProjects(false);
        setParams({ me: true });
    }

    return <Tab label="My Projects" onClick={handleClick} />;
};

export default MyProjects;
