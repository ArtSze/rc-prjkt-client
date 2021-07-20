import React, { Dispatch, SetStateAction } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance } from '../../utils/axiosInstance';
import constants from '../../utils/constants';
import ProjectForm from './form-subs/ProjectForm';
import { IProject, IProjectEdit } from '../../types';
import { ProjectFormSubmitValues } from './ProjectFormAdd';

interface ProjectFormEditProps {
    projectToEdit: IProject;
    setEdit: Dispatch<SetStateAction<boolean>>;
}
const ProjectFormEdit = ({ projectToEdit, setEdit }: ProjectFormEditProps): JSX.Element => {
    const queryClient = useQueryClient();
    const editMutation = useMutation(
        (body: IProjectEdit) => axiosInstance.put(`/projects/${projectToEdit._id}`, body, { withCredentials: true }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(constants.projects);
            },
        },
    );

    const submitEdittedProject = async (values: ProjectFormSubmitValues) => {
        // console.log({ values });

        editMutation.mutate({
            ...projectToEdit,
            title: values.title,
            description: values.description,
            githubLink: values.githubLink,
            collaborators: values.collaborators,
            tags: values.tags,
            active: values.active,
        });

        // maybe incorporate visual feedback for successful submission?
        setEdit((prevState: boolean) => !prevState);
    };

    const onCancel = () => {
        setEdit((prevState: boolean) => !prevState);
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
