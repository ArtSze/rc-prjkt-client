import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { axiosInstance } from '../../utils/axiosInstance';
import constants from '../../utils/constants';
import ProjectForm from './form-subs/ProjectForm';
import { IUserFromClient } from './form-subs/generic/CustomMultiSelect';
import { ITagFromClient } from './form-subs/generic/CustomCreatableMultiSelect';
import { useStore } from '../Home';

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

    const editMutation = useMutation(
        (body: ProjectFormSubmitValues) => axiosInstance.post(`/projects/`, body, { withCredentials: true }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(constants.projects);
                setAddForm();
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
            <ProjectForm onSubmit={submitProjectToAdd} initialValues={initialValues} onCancel={onCancel} />
        </div>
    );
};

export default ProjectFormAdd;
