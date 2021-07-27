import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../../utils/axiosInstance';
import constants from '../../utils/constants';
import ProjectForm from './form-subs/ProjectForm';
import { IUserFromClient } from './form-subs/generic/CustomMultiSelect';
import { ITagFromClient } from './form-subs/generic/CustomCreatableMultiSelect';
import { useStore } from '../Home';
import { Divider, Typography } from '@material-ui/core';

export interface ProjectFormSubmitValues {
    title: string;
    description: string;
    githubLink: string;
    collaborators: IUserFromClient[];
    tags: ITagFromClient[];
    active: boolean;
}

const ProjectFormAdd = (): JSX.Element => {
    const setAddForm = useStore((state) => state.setAddForm);

    const queryClient = useQueryClient();

    const addMutation = useMutation(
        (body: ProjectFormSubmitValues) => axiosInstance.post(`/projects/`, body, { withCredentials: true }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(constants.projects);
                queryClient.invalidateQueries(constants.tags);
                setAddForm();
            },
        },
    );

    const submitProjectToAdd = async (values: ProjectFormSubmitValues) => {
        console.log({ values });

        addMutation.mutate({
            title: values.title,
            description: values.description,
            githubLink: values.githubLink,
            collaborators: values.collaborators,
            tags: values.tags,
            active: values.active,
        });
    };

    const onCancel = () => {
        setAddForm();
    };

    const initialValues: ProjectFormSubmitValues = {
        title: '',
        description: '',
        githubLink: '',
        collaborators: [],
        tags: [],
        active: true,
    };

    return (
        <div>
            <Typography variant="h5">Add New Project</Typography>
            <ProjectForm onSubmit={submitProjectToAdd} initialValues={initialValues} onCancel={onCancel} />
            <Divider variant="fullWidth" style={{ marginTop: '20px', marginBottom: '20px' }} />
        </div>
    );
};

export default ProjectFormAdd;
