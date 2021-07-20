import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../../utils/axiosInstance';
import constants from '../../utils/constants';
import ProjectForm from './form-subs/ProjectForm';
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

const ProjectFormAdd = (): JSX.Element => {
    const queryClient = useQueryClient();

    const editMutation = useMutation(
        (body: ProjectFormSubmitValues) => axiosInstance.post(`/projects/`, body, { withCredentials: true }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(constants.projects);
            },
        },
    );

    const submitProjectToAdd = async (values: ProjectFormSubmitValues) => {
        console.log({ values });

        editMutation.mutate({
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
        title: '',
        description: '',
        githubLink: '',
        collaborators: [],
        tags: [],
        active: true,
    };

    if (editMutation.isSuccess) return <div>success!</div>;

    return (
        <div>
            <ProjectForm onSubmit={submitProjectToAdd} initialValues={initialValues} onCancel={onCancel} />
        </div>
    );
};

export default ProjectFormAdd;
