import React from 'react';

import ProjectForm from './form-subs/ProjectForm';
import { IProject } from '../../types';
import { ICollabOption } from './form-subs/CustomMultiSelect';

export interface ProjectFormEditValues {
    title: string;
    description: string;
    githubLink: string;
    collaborators: ICollabOption;
    // tags: tbd
    // active: boolean;
}

const ProjectFormEdit = (projectToEdit: IProject) => {
    const submitEdittedProject = async (values: ProjectFormEditValues) => {
        // reactquery mutation here
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
