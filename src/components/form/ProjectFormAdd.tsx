import React, { Dispatch, SetStateAction } from 'react';
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

interface AddProps {
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const ProjectFormAdd = ({ setOpen }: AddProps): JSX.Element => {
    const queryClient = useQueryClient();

    const addMutation = useMutation(
        (body: ProjectFormSubmitValues) => axiosInstance.post(`/projects/`, body, { withCredentials: true }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(constants.projects);
                queryClient.invalidateQueries(constants.tags);
            },
        },
    );

    const submitProjectToAdd = async (values: ProjectFormSubmitValues) => {
        addMutation.mutate({
            title: values.title,
            description: values.description,
            githubLink: values.githubLink,
            collaborators: values.collaborators,
            tags: values.tags,
            active: values.active,
        });
        setOpen((prevState: boolean) => !prevState);
    };

    const onCancel = () => {
        setOpen((prevState: boolean) => !prevState);
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
            <ProjectForm onSubmit={submitProjectToAdd} initialValues={initialValues} onCancel={onCancel} />
        </div>
    );
};

export default ProjectFormAdd;
