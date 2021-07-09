import React from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

import ProjectForm from './form-subs/ProjectForm';
import { IProject } from '../../types';
import { IUserFromClient } from './form-subs/CustomMultiSelect';
import { convertTypeAcquisitionFromJson } from 'typescript';

export interface ProjectFormEditValues {
    title: string;
    description: string;
    githubLink: string;
    collaborators: IUserFromClient[];
    // tags: tbd
    active: boolean;
}

const ProjectFormEdit = (projectToEdit: IProject) => {
    const submitEdittedProject = async (values: ProjectFormEditValues) => {
        try {
            await axios.post(`http://localhost:4000/projects/${projectToEdit._id}`, {
                ...projectToEdit,
                title: values.title,
                description: values.description,
                githubLink: values.githubLink,
                collaborators: values.collaborators,
                // tags: tbd
                active: values.active,
            });
        } catch (e) {
            console.log(e);
        }
    };

    const onCancel = () => {
        /* redirect logic to static presentational porject component */
    };

    const initialValues: ProjectFormEditValues = {
        title: projectToEdit.title,
        description: projectToEdit.description,
        githubLink: projectToEdit.githubLink,
        collaborators: projectToEdit.collaborators,
        // tags: tbd
        active: projectToEdit.active,
    };

    return <ProjectForm onSubmit={submitEdittedProject} initialValues={initialValues} onCancel={onCancel} />;
};

export default ProjectFormEdit;
