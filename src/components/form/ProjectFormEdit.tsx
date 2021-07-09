import React from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

import ProjectForm from './form-subs/ProjectForm';
import { IProject } from '../../types';
import { ICollabOption } from './form-subs/CustomMultiSelect';

export interface ProjectFormEditValues {
    title: string;
    description: string;
    githubLink: string;
    collaborators: ICollabOption;
    // tags: tbd
    active: boolean;
}

const ProjectFormEdit = (projectToEdit: IProject) => {
    const submitEdittedProject = async (values: ProjectFormEditValues) => {
        try {
            const data = await axios.post(`http://localhost:4000/projects/${projectToEdit._id}`, {
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
        /* clear form */
    };
    const initialValues = {
        /* IProject needs to be wittled down to ProjectFormEditValues */
    };

    return <ProjectForm onSubmit={submitEdittedProject} initialValues={initialValues} onCancel={onCancel} />;
};

export default ProjectFormEdit;
