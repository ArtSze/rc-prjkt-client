import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../../utils/axiosInstance';
import constants from '../../utils/constants';
import ProjectForm from './form-subs/ProjectForm';
import { IProject, IProjectEdit } from '../../types';
import { IUserFromClient } from './form-subs/generic/CustomMultiSelect';
import { ITagFromClient } from './form-subs/generic/CustomCreatableMultiSelect';

export interface ProjectFormSubmitValues {
    title: string;
    description: string;
    githubLink: string;
    collaborators: IUserFromClient[];
    tags: ITagFromClient[];
    active: boolean;
}

const ProjectFormEdit = (projectToEdit: IProject) => {
    const queryClient = useQueryClient();
    const editMutation = useMutation((body: IProjectEdit) => axiosInstance.put(`/projects/`, body), {
        onSuccess: () => {
            queryClient.invalidateQueries(constants.projects);
        },
    });

    const submitEdittedProject = async (values: ProjectFormSubmitValues) => {
        console.log({ values });

        editMutation.mutate({
            ...projectToEdit,
            title: values.title,
            description: values.description,
            githubLink: values.githubLink,
            collaborators: values.collaborators,
            tags: values.tags,
            active: values.active,
        });
    };

    const onCancel = () => {
        /* redirect logic to static presentational project component */
    };

    const initialValues: ProjectFormSubmitValues = {
        title: projectToEdit.title || '',
        description: projectToEdit.description || '',
        githubLink: projectToEdit.githubLink || '',
        collaborators: projectToEdit.collaborators || [],
        tags: projectToEdit.tags || [],
        active: projectToEdit.active || true,
    };

    if (editMutation.isSuccess) return <div>success!</div>;

    return (
        <div>
            <ProjectForm onSubmit={submitEdittedProject} initialValues={initialValues} onCancel={onCancel} />
        </div>
    );
};

export default ProjectFormEdit;
